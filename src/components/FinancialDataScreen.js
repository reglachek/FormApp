import React, { Component } from 'react';
import { View, Text, Slider, Picker, StyleSheet, TouchableOpacity, Button, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign'

import { globalStyles } from '../assets/styles/globalStyle'

import Message from './Message'

export default class FinancialDataScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
        salario: 200,
        bancos: ['Banco do Brasil', 'Banco Santander', 'Banco Bradesco'],
        bancoIndex: 0,
        qtdCartoes: 0,
        finish: false,
        error: false,
        errors: [],
        screenHeight: 0
    };
  }

  static navigationOptions = {
    title: 'Financial Data',
    tabBarOnPress: ({navigation}) => {
      navigation.goBack()
    }
  }

  handleSalarioPicker = salario => this.setState({salario})
  handleBancoPicker = bankName => this.setState({bancoIndex: this.state.bancos.indexOf(bankName)})

  handleArrowButton = type => () => {
    let qtdCartoes = 0
    let { qtdCartoes: qtdCartoesState } = this.state

    if(qtdCartoesState == 0 && type === 'left') {
      return
    } else if(qtdCartoesState > 0 || qtdCartoesState == 0 && type === 'right') {
      qtdCartoes = type === 'left' ? qtdCartoesState - 1 : qtdCartoesState + 1
    }

    this.setState({qtdCartoes})
  }

  handleFinishButton = () => {
    let errors = []
    let finish = null, error = null 
    let { name, lastName, mounthBirth } = this.props.navigation.state.params

    if(!name) {
      errors.push('Name Blank')
    }

    if(!lastName) {
      errors.push('Last Name Blank')
    }

    if(mounthBirth == 'month') {
      errors.push('Unselected Month')
    }

    if(errors.length > 0) {
      error = true
    }

    finish = true

    this.setState({finish, error, errors})
  }

  render() {

    return (
      <ScrollView contentContainerStyle={{flexGrow: 1}}>
        <View style={globalStyles.container}>
          <View style={globalStyles.viewTexto}>
            <Text style={globalStyles.textoNome}> SALARY </Text>
          </View>

          <Slider
            style={globalStyles.slider}
            minimumValue={200} 
            maximumValue={30000}
            value={this.state.salario}
            onValueChange={value => this.handleSalarioPicker(value)}
          />

          <Text style={{alignSelf: 'center', marginBottom: 20}}>{this.state.salario.toFixed(1)}R$</Text>

          <View style={globalStyles.viewTexto}>
              <Text style={globalStyles.textoNome}> BANK </Text>
          </View>

          <View>
              <Picker
                selectedValue={this.state.bancos[this.state.bancoIndex]}
                onValueChange={selectedValueItem => this.handleBancoPicker(selectedValueItem)}
              >
                {this.state.bancos.map((item, index) => <Picker.Item label={item} value={item} key={index} />)}
              </Picker>
          </View>

          <View style={globalStyles.viewTexto}>
              <Text style={globalStyles.textoNome}> NUMBER OF CARDS </Text>
          </View>

          <View style={financialStyle.arrowView}>
            <TouchableOpacity onPress={this.handleArrowButton('left')}>
              <Icon name='left' color='#009688' size={30} />
            </TouchableOpacity>

            <Text style={financialStyle.arrowText}>{this.state.qtdCartoes}</Text>

            <TouchableOpacity onPress={this.handleArrowButton('right')}>
              <Icon name='right' color='#009688' size={30} />
            </TouchableOpacity>
          </View>

          <Button title='Finish' onPress={this.handleFinishButton} />
          {this.state.finish && <Message error={this.state.error} errors={this.state.errors} />}
        </View>
      </ScrollView>
    );
  }
}

const financialStyle = StyleSheet.create({
  arrowView: {
    marginVertical: 20,
    flexDirection: 'row',
    justifyContent: 'center'
  },
  arrowText: {
    fontSize: 20,
    marginHorizontal: 20,
  },
})
