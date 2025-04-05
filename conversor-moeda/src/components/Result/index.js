import React from "react";
import {View, Text} from "react-native";
import styles from "./style";

export default function Result(props){
    const getSimboloMoeda = (moeda) => {
        switch(moeda) {
            case "USD":
                return "US$";
            case "EUR":
                return "€";
            case "BTC":
                return "₿";
            default:
                return "";
        }
    };

    return(
        <View style={styles.container}>
            <Text style={styles.formLabel}>
                {props.msg}
            </Text>
            {props.valor && (
                <Text style={styles.formValor}>
                    {getSimboloMoeda(props.moeda)} {props.valor}
                </Text>
            )}
        </View>
    );
}
