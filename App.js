import { useState } from 'react';
import { Text, View, TextInput, FlatList, TouchableOpacity, Alert } from 'react-native';
import styles from './styles';
export default function App() {

const [cripto, setCripto] = useState([
  {name:'Bitcoin', price:1000, key:'1'},
  {name:'Ethereum', price:500, key:'2'},
  {name:'Dogecoin', price:10, key:'3'},
  {name:'Theter', price:1, key:'4'},
  {name:'Swapcoin', price:50, key:'5'},
])

const showPrice = (item) =>{
  console.log(item.name)
  Alert.alert( item.name,`$${item.price} Usd`)
}
  return (
    <View style={styles.container}>
      <Text style={styles.title}>CriptoCoin</Text>
      <TextInput style={styles.input} placeholder='Ingrese una criptomoneda' placeholderTextColor={'white'} onChangeText={(criptomoneda) => setCripto(criptomoneda)}/>
      
      <FlatList
        data = {cripto}
        renderItem={({item})=>(
          <View>
            <TouchableOpacity onPress={() => showPrice(item)}><Text style={styles.text}>{item.name}</Text></TouchableOpacity>
          </View>
        )}
      />     
    </View>
  );
}

