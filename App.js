import { useState, useEffect } from 'react';
import { Text, View, TextInput, FlatList, TouchableOpacity, Alert, ActivityIndicator } from 'react-native';
import styles from './styles';
export default function App() {

const [cripto, setCripto] = useState([])
const [loading, setLoading] = useState(true)
const url = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=30&page=1&sparkline=false"

const getData = async () => {
  try{
    const response = await fetch(url)
    const json = await response.json()
    setCripto(json)
  } catch (error){
    console.error(error)
  } finally{
    setLoading(false)
  }
}
 useEffect(() => {
  getData()
}, [])

const getPrice = (moneda) =>{
  Alert.alert(moneda.name, `$${moneda.current_price} Usd`)
}

  return (
    <View style={styles.container}>
      <Text style={styles.title}>CriptoCoin</Text>
      <TextInput style={styles.input} placeholder='Ingrese una criptomoneda' placeholderTextColor={'white'} onChangeText={(criptomoneda) => setCripto(criptomoneda)}/>
      {loading ? (
        <ActivityIndicator />
      ) : (
        <FlatList
          data={cripto}
          keyExtractor={({id}) => id}
          renderItem={({item}) => (
            <TouchableOpacity onPress={() => getPrice(item)}><Text style={styles.text}>
              {item.name}, {item.symbol}
            </Text></TouchableOpacity>
          )}
        />
      )}
      

             
    </View>
  );
}

