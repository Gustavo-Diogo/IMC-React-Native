import React, { useState } from "react"
import { View, Text, TextInput, Button } from "react-native"
import ResultImc from "./ResultImc";
import { Wrapper, WrapperInput, WrapperText } from './styles'

import {actualUser} from './../Login/'

export const imctestes = [];
const user = actualUser;

function Imc (username, altura, peso, imc){
    this.username = username;
    this.altura = altura;
    this.peso = peso;
    this.imc = imc;
}

export default function Form({navigation}) {

    const [height, setHeight] = useState(null);
    const [weight, setWeight] = useState(null);
    const [messageIMC, setMessageIMC] = useState("Preencha o peso e altura");
    const [imc, setImc] = useState(null);
    const [textButton, setTextButton] = useState("Calcule o IMC");

    function imcCalculator() {
        return ((weight / (height * height)).toFixed(2))
    }
    function validationIMC() {
        if (weight != null && height != null) {
            let imcCalculo = imcCalculator();
           const imcss = new Imc(user[0].username, height, weight,imcCalculo)
            imctestes.push(imcss);
            setHeight(null);
            setWeight(null);
            

            setImc(imcCalculo)
            if (imcCalculo < 18.5) {
                setMessageIMC("Está abaixo do Peso.");
            } else if (imcCalculo >= 18.5 && imcCalculo <= 24.9) {
                setMessageIMC("Está com o peso normal")
            } else if (imcCalculo >= 25 && imcCalculo <= 29.9) {
                setMessageIMC("Está acima do peso (Sobrepeso)")
            } else if (imcCalculo >= 30 && imcCalculo <= 34.9) {
                setMessageIMC("Está com Obesidade Grau I")
            } else if (imcCalculo >= 35 && imcCalculo <= 39.9) {
                setMessageIMC("Está com Obesidade Grau II")
            } else if (imcCalculo >= 40) {
                setMessageIMC("Está com Obesidade Grau III ou Mórbida")
            }

            setTextButton("Calcular Novamente");
            console.log(imctestes)
        }else{

            setHeight(null);
            setWeight(null);
            setImc(null);
            setTextButton("Calcule o IMC");
            setMessageIMC("Preencha o peso e a altura");
        }
    }

    return (
        <Wrapper>
           
        <View>
            <View style={{alignItems:"center"}}>
                <Text>Altura</Text>
                <WrapperInput placeholder="Ex. 1.75"
                    onChangeText={setHeight}
                    value={height}
                    keyboardType="numeric" />

                <WrapperText>Peso</WrapperText>
                <WrapperInput placeholder="Ex. 65.2"
                    value={weight}
                    onChangeText={setWeight}
                    keyboardType="numeric" />

                <Button title={textButton} onPress={() => validationIMC()} />
               
            </View>
            
            <ResultImc messageResultImc={messageIMC} resultImc={imc}/>
        </View >
        </Wrapper>
    )


};