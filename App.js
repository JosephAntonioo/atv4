import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Entypo } from '@expo/vector-icons'
// Começa no 0
// Uusuraio digita um numero
// Digita a operacao
// Usuario digita =
// Calculadora mostra o resultado 
// Pode continuar a partir do passo 2 o resultado da operação anterior já é o primeiro passo da proxima operacao
// Se o usuario digitar C zera o display e volta ao passo de inicio

// Botões que devem conter na Calculadora

// C : limpar os registros internos e colocar 0 no display

// Teclas das operações: + , - , * e /

// Tecla de separador decimal : botão “,” (vírgula)

// Tecla de “=”

// botões dos números (0 a 9) 

// Orientações:

// - desenvolva em apenas um arquivo App.js (sem outros arquivos fontes ou de estilo)

// - no topo do aplicativo deverá ter um campo de texto com seu nome e RA.

// - Enviar um arquivo zip contendo APENAS 2 arquivos:

// 1 único arquivo App.js do aplicativo

// 1 único arquivo em PDF contendo prints de tela com a digitação e o funcionamento do aplicativo


export default function App() {
  const buttons = ['DEL', 'C', '+', '-', '*', '/', '=', ',' , '0','1','2','3','4','5','6','7','8','9']
  
  const [ currentNumber, setCurrentNumber ] = useState("")
  const [ lastNumber, setLastNumber ] = useState("")
  
  function handleInput(buttonPressed){
    if(buttonPressed === "*" | buttonPressed === "/"| buttonPressed === "+"| buttonPressed === "-"){
      setCurrentNumber(currentNumber + " " + buttonPressed + " ")
      return
    }
    if(buttonPressed === "C"){
      console.log(currentNumber)
      setCurrentNumber("0")
      return
    }
    if(buttonPressed === "DEL"){
      console.log(currentNumber)
      setCurrentNumber(currentNumber.substring(0,(currentNumber.length-1)))
      return
    }
    if(buttonPressed === ","){
      console.log(currentNumber)
      currentNumber = "."
      setCurrentNumber(currentNumber+buttonPressed)
      return
    }
    if(buttonPressed === "="){
      setLastNumber(currentNumber + " = ")
      calculator()
      return
    }
    setCurrentNumber(currentNumber + buttonPressed)
  }
  
  function calculator(){
    const splitNumbers = currentNumber.split(" ")
    const operator = splitNumbers[1]
    console.log(splitNumbers)
    if(operator === "*"){
      setCurrentNumber((parseFloat(splitNumbers[0]) * parseFloat(splitNumbers[2])).toString())
    }
    if(operator === "/"){
      setCurrentNumber((parseFloat(splitNumbers[0]) / parseFloat(splitNumbers[2])).toString())
    }
    if(operator === "+"){
      setCurrentNumber((parseFloat(splitNumbers[0]) + parseFloat(splitNumbers[2])).toString())
    }
    if(operator === "-"){
      setCurrentNumber((parseFloat(splitNumbers[0]) - parseFloat(splitNumbers[2])).toString())
    }

  }
  
  
  return (
    <View>
      <View style={styles.head}>
        <Text> José Antonio Favaro Trugilio Filho - 2019100592 </Text>
      </View>

      <View style={styles.inputText}>
        <Text style={styles.textInput}> { lastNumber } </Text>
        <Text style={styles.textOutput}> { currentNumber } </Text>
      </View>

      <View style={styles.body}>
        {buttons.map((button) => 
          <TouchableOpacity  onPress={() => handleInput(button)}  key={button} style={styles.button}>
            <Text style={styles.bodyOutput}>{button}</Text>
          </TouchableOpacity>
        )}
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  head: {
    backgroundColor: '#A0A0A0',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 50
  },
  inputText:{
    backgroundColor: '#C0C0C0',
    width: '100%',
    minHeight: 200,
    alignItems: 'flex-end',
    justifyContent: 'center',
    textAlign: 'center',
  },
  textInput:{
    justifyContent: 'center',
    fontSize: 85,
    color: '#000000'
  },
  textOutput:{
    justifyContent: 'center',
    fontSize: 50,
    // color: '#404040'
  },
  body:{
    borderTopColor: 'black',
    borderTopWidth: 3,
    // backgroundColor: '#A0A0A0',
    width: '100%',
    height: '100%',
    flexDirection: "row",
    flexWrap: 'wrap',
    alignItems: 'baseline'
  },
  bodyOutput:{
    fontSize: 25,
    color: 'black',
  },
  button:{
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    minHeight: 80,
    minWidth: 80,
  }
}) 