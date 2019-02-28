import React, { Component } from 'react'
import { View, Text, StyleSheet, ScrollView } from 'react-native'
import Icon from 'react-native-vector-icons/AntDesign'

export default class Success extends Component {

    render() {
        let { error, errors } = this.props

        let bgColor = error ? styles.bgError : styles.bgSuccess
        let iconName = error ? 'frowno' : 'smileo'
        let msg = error ? 'Please swipe left to right and check the items below:' : 'Thank you for providing us with your data.'
        return (    
            <View style={[styles.container, bgColor]}>
                <Icon name={iconName} color='black' size={60} />

                <Text style={styles.messageText}>{msg}</Text>

                {errors.map((item, index) => <Text style={styles.messageList} key={index}>- {item}</Text>)}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 20
    },
    bgSuccess: {
        backgroundColor:'#7fff97'
    },
    bgError: {
        backgroundColor:'#ff6b6b'
    },
    messageText: {
        fontWeight: 'bold',
        color: 'black',
        marginVertical: 20,
    },
    messageList: {
        fontWeight: 'bold',
        color: 'black',
        marginVertical: 3,
    }
})
