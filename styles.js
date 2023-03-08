import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'black',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 40
    },
    text: {
      fontSize: 20,
      fontStyle: 'italic',
      color: 'white'
    },
    title:{
        fontSize: 30,
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
      textAlign: 'center',
      marginTop: 10,
      marginBottom: 10
    }
    
  });
  
  export default styles