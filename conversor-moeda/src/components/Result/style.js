import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        backgroundColor: "#ffffff",
        borderRadius: 15,
        padding: 15,
        margin: 10,
        shadowColor: "#1967d2",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.2,
        shadowRadius: 8,
        elevation: 8,
        borderWidth: 1,
        borderColor: "rgba(25, 103, 210, 0.1)",
        width: "90%"
    },
    formLabel: {
        color: "#1967d2",
        fontSize: 18,
        paddingLeft: 20,
        fontWeight: "600"
    },
    formValor:{
        color: "#1967d2",
        fontSize: 18,
        fontWeight: 'bold',
        paddingLeft: 20
    }
});

export default styles;