import { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {

const [contador, setContador] = useState(0)

const add = () =>{
  setContador(contador + 1)
}
const subtract = () =>{
  setContador(contador - 1)
}
const restart = () =>{
  alert('Se reseteo el contador')
  setContador(0)
}

  return (
    <View style={styles.container}>
      <Text style={styles.textStyle}>Bienvenido a CriptoCoin</Text>
      <View style={styles.countContainer}>
        <Button title ='Sumar' onPress={add} color = 'green'></Button>
        <Text style={styles.textStyle}>{contador}</Text>
        <Button title ='Restar' onPress={subtract} color = 'green'></Button>
      </View>
      <Button title ='Resetear' onPress={restart} color = 'red'></Button>
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
  countContainer:{
    flexDirection: 'row-reverse'
  }
  
});
