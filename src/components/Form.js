import { View, Text, TextInput, Button, TouchableOpacity } from "react-native";
import { useState } from "react";
import ResultIMC from "./Result";
import styles from "../styles/styles";

export default function Form() {

    const [height, setHeight] = useState(null)
    const [weight, setWeight] = useState(null)
    const [messageIMC, setMessageIMC] = useState("preencha o peso e altura")
    const [IMC, setIMC] = useState(null)
    const [textButton, setTextButton] = useState("Calcular")

    function imcCalculator() {
        return setIMC((weight / (height * height)).toFixed(2))
    }

    function validationIMC() {
        if (weight && height) {
            imcCalculator()
            setHeight(null)
            setWeight(null)
            setMessageIMC("Seu IMC é: ")
            setTextButton("Calcular Novamente")
            return
        }

        setIMC(null)
        setTextButton("Calcular")
        setMessageIMC("preencha o peso e altura")
    }

    return (
        <View style={styles.formContext}>
            <View style={styles.form}>
                <Text style={styles.formLabel}>Peso</Text>
                <TextInput
                    onChangeText={setWeight}
                    value={weight}
                    placeholder="Ex: 1.75"
                    keyboardType="numeric"
                    style={styles.input}
                />
                <Text style={styles.formLabel}>Altura</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={setHeight}
                    value={height}
                    placeholder="Ex: 65.375"
                    keyboardType="numeric"
                />

                <TouchableOpacity 
                    onPress={() => {
                        validationIMC()
                    }}
                    style={styles.buttonCalculator}
                    // title={textButton}
                >
                    <Text style={styles.textButtonCalculator}>{textButton}</Text>
                </TouchableOpacity>

            </View>
            <ResultIMC resultIMC={IMC} messageResultIMC={messageIMC} />
        </View>
    )
}