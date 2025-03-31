import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import styles from "./style";
import { getCotacao } from "../../services/api";
import Result from "../Result";

export default function Form(){
    //seleção de programação
    const [real, setReal] = useState(null);
    const [msg, setMsg] = useState(null);
    const [resultado, setResultado] = useState(null);

    //função que é chamada pelo botão de tela
    function validar(){
        if(real != null){
            converter()
            setReal(null);
        }
        else{
            setMsg("Informe um valor a ser convertido");
        }
    }

    async function converter(){
        const [valorCotacao, mensagem] = await getCotacao();
        setMsg(mensagem);
        if(valorCotacao > 0) {
            setResultado((real/valorCotacao).toFixed(2));
        }
    }

    //seção da montagem da tela
    return(
        <View style={styles.formContext}>
            <View style={styles.form}>
                <Text style={styles.formLabel}>Real</Text>
                <TextInput
                    style={styles.input}
                    keyboardType="numeric"
                    value={real}
                    onChangeText={(value) => setReal(value)}
                    placeholder="Ex: 6.00"
                    placeholderTextColor="#ffffff"
                />
                <TouchableOpacity 
                    style={styles.button}
                    onPress={validar}
                >
                    <Text style={styles.textButton}>Converter para U$</Text>
                </TouchableOpacity>

                <Result msg={msg} valor={resultado}/>
            </View>
        </View>
    );
}
