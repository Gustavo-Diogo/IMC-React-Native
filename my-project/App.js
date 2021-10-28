import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button, Input } from 'react-native';
import Form from "./src/components/Form/"
import Title from './src/components/Title';
let username = "Maria";

export default function App() {
  return (
    <View style={styles.container}>
      <Title/>
      <Form/>
    </View>
  );
}

function brandowFeio() {
  username ="BRANDOW";
  
  console.log("AOBA");
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
