import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { Picker } from '@react-native-picker/picker';
import styles from "./style";
import getCotacao from "../Services/api";
import Result from "../Result";

export default function Form(){
    const [real, setReal] = useState("");
    const [msg, setMsg] = useState("");
    const [resultado, setResultado] = useState("");
    const [moedaSelecionada, setMoedaSelecionada] = useState("USD");

    function validar(){
        if(real && !isNaN(real)){
            converter();
        } else {
            setMsg("Informe um valor válido para converter");
            setResultado("");
        }
    }

    async function converter(){
        try {
            const [valorCotacao, mensagem] = await getCotacao();
            setMsg(mensagem);
            
            if(valorCotacao > 0) {
                const valorConvertido = (parseFloat(real) / valorCotacao).toFixed(2);
                setResultado(valorConvertido);
            } else {
                setMsg("Erro ao obter cotação");
                setResultado("");
            }
        } catch (error) {
            setMsg("Erro ao converter valor");
            setResultado("");
        }
    }

    return(
        <View style={styles.formContext}>
            <View style={styles.form}>
                <Text style={styles.formLabel}>Valor em Reais (R$)</Text>
                <View style={styles.inputContainer}>
                    <TextInput
                        style={[styles.input, { flex: 1 }]}
                        keyboardType="numeric"
                        value={real}
                        onChangeText={(value) => setReal(value)}
                        placeholder="Ex: 6.00"
                        placeholderTextColor="#ffffff"
                    />
                    <Picker
                        selectedValue={moedaSelecionada}
                        style={styles.picker}
                        onValueChange={(itemValue) => setMoedaSelecionada(itemValue)}
                    >
                        <Picker.Item label="USD" value="USD" />
                        <Picker.Item label="EUR" value="EUR" />
                        <Picker.Item label="BTC" value="BTC" />
                    </Picker>
                </View>
                <TouchableOpacity 
                    style={styles.button}
                    onPress={validar}
                >
                    <Text style={styles.textButton}>Converter</Text>
                </TouchableOpacity>

                <Result msg={msg} valor={resultado} moeda={moedaSelecionada}/>
            </View>
        </View>
    );
}
