import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
    formContext: {
        width: "100%",
        height: "100%",
        bottom:0,
        backgroundColor:"#ffffff",
        alignItems:"center",
        borderTopLeftRadius:30,
        borderTopRightRadius:30,
        marginTop:30,
    },

    form:{
        width:"100%",
        height: "auto",
        marginTop: 30,
        padding: 10
    },

    formLabel:{
        color:"#000000",
        fontSize:18,
        paddingLeft: 20,
    },

    inputContainer: {
        flexDirection: "row",
        alignItems: "center",
        marginHorizontal: 20,
        marginTop: 10,
    },

    input:{
        width: "100%",
        borderRadius:50,
        backgroundColor: "#f6f6f6",
        height:40,
        margin:12,
        paddingLeft:10,
        color: "#000000",
    },

    picker: {
        width: 100,
        height: 40,
        backgroundColor: "#f6f6f6",
        borderRadius: 50,
        marginLeft: 10,
    },

    textButton:{
        fontSize: 20,
        color:"#ffffff",
    },

    button:{
        borderRadius:50,
        alignItems:"center",
        justifyContent:"center",
        width:"90%",
        backgroundColor:"#ff0043",
        paddingTop:14,
        paddingBottom:14,
        marginLeft:12,
        marginTop:30,
    }
});

export default styles;