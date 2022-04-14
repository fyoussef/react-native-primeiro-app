import React from 'react'
import { View, Text } from "react-native";
import styles from '../styles/styles';

export default function ResultIMC({resultIMC, messageResultIMC}) {
    return (
        <View style={styles.resultIMC}>
            <Text style={styles.information}>{messageResultIMC}</Text>
            <Text style={styles.numberIMC}>{resultIMC}</Text>
        </View>
    )
}