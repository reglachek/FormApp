import React, { Component } from 'react';
import { View, Text, TextInput, Picker, Slider, ScrollView, Button, Switch } from 'react-native';

import { globalStyles } from '../assets/styles/globalStyle'

export default class PersonalDataScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
        name: '',
        lastName: '',
        daysBirth: this.returnDias(),
        indexDay: 0,
        mounthBirth: 'month',
        yearBirth: '2017',
        gender: 'feminino',
        height: 1,
        weight: 10,
        isOrganDonor: false
    };

  }

  static navigationOptions = {
    title: 'Personal Data',
    swipeEnabled: false
  }

  // Retorna array com todos os dias do mês, index 0 == dia 1
  returnDias = () => {
    let dias = []

    for(let i = 0; i < 31; i++) {
        dias.push((i + 1).toString())
    }

    return dias
  }

  handleInputTextName = value => {
    let name = value.replace(/([^A-Za-záàâãéèêíïóôõöúçÁÀÂÃÉÈÍÏÓÔÕÖÚÇ])/g, '')

    this.setState({name})
  }
  handleInputTextLastName = value => {
    lastName = value.replace(/([^A-Za-záàâãéèêíïóôõöúçÁÀÂÃÉÈÍÏÓÔÕÖÚÇ])/g, '')

    this.setState({lastName})
  }

  handleDayBirthPicker = dayBirth => this.setState({indexDay: this.returnDias().indexOf(dayBirth)})
  handleMounthBirthPicker = mounthBirth => this.setState({mounthBirth})
  handleYearBirthPicker = yearBirth => this.setState({yearBirth})

  handleGenderPicker = gender => this.setState({gender})

  handleHeightSlider = height => this.setState({height})
  handleWeigthSlider = weight => this.setState({weight})

  handleOrganDonorSwitch = () => this.setState({isOrganDonor: !this.state.isOrganDonor})
  
  render() {
    return (
        <ScrollView>
            <View style={globalStyles.container}>
                <View style={globalStyles.viewTexto}>
                    <Text style={globalStyles.textoNome}> NAME INFORMATION </Text>
                </View>

                <View style={globalStyles.inputView}>
                    <TextInput
                        style={globalStyles.input}
                        placeholder='Name'
                        textContentType='name'
                        value={this.state.name}
                        onChangeText={value => this.handleInputTextName(value)}
                    />

                    <TextInput
                        style={globalStyles.input}
                        placeholder='Last name'
                        value={this.state.lastName}
                        onChangeText={value => this.handleInputTextLastName(value)}
                    />
                </View>

                <View style={globalStyles.viewTexto}>
                    <Text style={globalStyles.textoNome}> DATE OF BIRTH </Text>
                </View>

                <View style={globalStyles.pickerView}>
                    <Picker
                        style={globalStyles.picker}
                        selectedValue={this.state.daysBirth[this.state.indexDay]}
                        onValueChange={itemSelectedValue => this.handleDayBirthPicker(itemSelectedValue)}
                    >
                        {this.returnDias().map((item, index) => <Picker.Item key={index} label={item} value={item} />)}
                    </Picker>

                    <Picker
                        style={globalStyles.picker}
                        selectedValue={this.state.mounthBirth}
                        onValueChange={itemSelectedValue => this.handleMounthBirthPicker(itemSelectedValue)}
                    >
                        <Picker.Item label='Month' value='month' />
                        <Picker.Item label='Janeiro' value='janeiro' />
                        <Picker.Item label='Fervereiro' value='fervereiro' />
                        <Picker.Item label='Março' value='março' />
                        <Picker.Item label='Abril' value='abril' />
                        <Picker.Item label='Maio' value='maio' />
                        <Picker.Item label='Junho' value='junho' />
                        <Picker.Item label='Julho' value='julho' />
                        <Picker.Item label='Agosto' value='agosto' />
                        <Picker.Item label='Setembro' value='setembro' />
                        <Picker.Item label='Outubro' value='outubro' />
                        <Picker.Item label='Novembro' value='novembro' />
                        <Picker.Item label='Dezembro' value='dezembro' />
                    </Picker>
                    
                    <Picker
                        style={globalStyles.picker}
                        selectedValue={this.state.yearBirth}
                        onValueChange={itemSelectedValue => this.handleYearBirthPicker(itemSelectedValue)}
                    >
                        <Picker.Item label='2017' value='2017' />
                        <Picker.Item label='2018' value='2018' />
                        <Picker.Item label='2019' value='2019' />
                    </Picker>
                </View>

                <View style={globalStyles.viewTexto}>
                    <Text style={globalStyles.textoNome}> GENDER </Text>
                </View>

                <View>     
                    <Picker
                        selectedValue={this.state.gender}
                        onValueChange={itemSelectedValue => this.handleGenderPicker(itemSelectedValue)}
                    >
                        <Picker.Item label='Masculino' value='masculino' />
                        <Picker.Item label='Feminino' value='feminino' />
                    </Picker>
                </View>

                <View style={globalStyles.viewTexto}>
                    <Text style={globalStyles.textoNome}> HEIGHT </Text>
                </View>

                <Slider
                    style={globalStyles.slider}
                    minimumValue={1}
                    maximumValue={3}
                    value={this.state.height}
                    onValueChange={value => this.handleHeightSlider(value)}
                />

                <Text style={{alignSelf: 'center', marginBottom: 20}}>{this.state.height.toFixed(2)}M</Text>

                <View style={globalStyles.viewTexto}>
                    <Text style={globalStyles.textoNome}> WEIGHT </Text>
                </View>

                <Slider
                    style={globalStyles.slider}
                    minimumValue={10}
                    maximumValue={300}
                    value={this.state.weight}
                    onValueChange={value => this.handleWeigthSlider(value)}
                />

                <Text style={{alignSelf: 'center', marginBottom: 20}}>{this.state.weight.toFixed(3)}KG</Text>
                
                <View style={globalStyles.viewTexto}>
                    <Text style={globalStyles.textoNome}> ARE YOU AN ORGAN DONOR ? </Text>
                </View>

                <View style={globalStyles.switchView}>
                    <Text style={globalStyles.switchText}>No</Text>

                    <Switch
                        style={globalStyles.switch}
                        value={this.state.isOrganDonor}
                        onValueChange={this.handleOrganDonorSwitch}
                    />

                    <Text style={globalStyles.switchText}>Yes</Text>
                </View>

                <View style={[globalStyles.viewTexto, {marginBottom: 10}]}>
                    <Text style={globalStyles.textoNome}> LET'S GO TO THE NEXT STEP </Text>
                </View>

                <Button title='Next' onPress={() => this.props.navigation.navigate('FinancialDataScreen', this.state)} />
            </View>
        </ScrollView>
    );
  }
}
