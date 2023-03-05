import { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

export default function App() {

const [cripto, setCripto] = useState()


  return (
    <View style={styles.container}>
      <Text style={styles.textStyle}>Bienvenido a CriptoCoin</Text>
      <TextInput style={styles.input} placeholder='Ingrese una criptomoneda' placeholderTextColor={'white'} onChangeText={(criptomoneda) => setCripto(criptomoneda)}/>
      <Text style={styles.textStyle}>{cripto}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textStyle: {
    fontSize: 25,
    fontStyle: 'italic',
    color: 'white',
    fontWeight: 'bold'
  },
  input:{
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 10,
    color:'white',
    width: 200,
    height: 35,
    textAlign: 'center'
  }
  
});
