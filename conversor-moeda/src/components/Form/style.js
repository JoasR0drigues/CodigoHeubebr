import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
    formContext: {
        width: "100%",
        height: "70%",
        bottom:0,
        backgroundColor:"#ffffff",
        alignItems:"center",
        marginTop:5,
        borderTopLeftRadius:30,
        borderTopRightRadius:30,
        borderBottomLeftRadius:30,
        borderBottomRightRadius:30,
        shadowColor: "#1967d2",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.2,
        shadowRadius: 8,
        elevation: 8,
    },

    form:{
        width:"100%",
        height: "auto",
        marginTop: 30,
        padding: 10
    },

    formLabel:{
        color:"#1967d2",
        fontSize:18,
        paddingLeft: 20,
        fontWeight: "600"
    },

    input:{
        width:"90%",
        borderRadius:50,
        backgroundColor: "#f8f9fa",
        height:40,
        margin:12,
        paddingLeft:10,
        color: "#1967d2",
        borderWidth: 1,
        borderColor: "rgba(25, 103, 210, 0.2)",
        shadowColor: "#1967d2",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
    },

    textButton:{
        fontSize: 20,
        color:"#ffffff",
        fontWeight: "bold"
    },

    button:{
        borderRadius:50,
        alignItems:"center",
        justifyContent:"center",
        width:"90%",
        backgroundColor:"#1967d2",
        paddingTop:14,
        paddingBottom:14,
        marginLeft:36,
        margin:30,
        shadowColor: "#1967d2",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.3,
        shadowRadius: 4.65,
        elevation: 8,
    }
});

export default styles;