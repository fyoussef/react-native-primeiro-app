import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    boxTitle: {
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10
    },
    textTitle: {
        color: '#ff0043',
        fontSize: 24,
        fontWeight: 'bold'
    },
    formContext: {
        width: '100%',
        height: '100%',
        bottom: 0,
        backgroundColor: '#fff',
        alignItems: 'center',
        marginTop: 30,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30
    },
    form: {
        width: '100%',
        height: 'auto',
        marginTop: 30,
        padding: 10
    },
    formLabel: {
        color: '#000',
        fontSize: 18,
        paddingLeft: 20
    },
    input: {
        width: '90%',
        borderRadius: 50,
        backgroundColor: '#f6f6f6',
        height: 40,
        margin: 12,
        paddingLeft: 10
    },
    buttonCalculator: {
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
        width: '90%',
        backgroundColor: '#ff0043',
        paddingTop: 14,
        paddingBottom: 14,
        marginLeft: 12,
        marginTop: 30
    },
    textButtonCalculator: {
        fontSize: 20,
        color: '#fff'
    },
    resultIMC: {
        flex: 1,
        marginTop: 15,
        paddingTop: 60,
        borderRadius: 50,
        alignItems: 'center',
        width: '100%',
        fontSize: 48,
        color: '#FF0043',
        fontWeight: 'bold'
    },
    numberIMC: {
        fontSize: 48,
        color: '#FF0043',
        fontWeight: 'bold'
    },
    information: {
        fontSize: 18,
        color: '#FF0043',
        fontWeight: 'bold'
    }
})

export default styles