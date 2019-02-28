import { StyleSheet } from 'react-native'

export const globalStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
    viewTexto: {
        backgroundColor: '#f6f6f7',
        paddingVertical: 5,
    },
    textoNome: {
        fontWeight: 'bold',
        color: 'black',
        fontSize: 13,
        alignSelf: 'center',
    },
    inputView: {
        alignItems: 'center',
        marginBottom: 20,
    },
    input: {
        width: 200,
        paddingBottom: 2,
        borderBottomWidth: 2,
        borderBottomColor: 'black',
    },
    pickerView: {
        flexDirection: 'row',
    },
    picker: {
        width: 139
    },
    slider: {
        marginTop: 20,
        marginBottom: 10
    },
    switchView: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginVertical: 20
    },
    switchText: {
        fontSize: 15,
    },
    switch: {
        marginHorizontal: 10,
    }
})