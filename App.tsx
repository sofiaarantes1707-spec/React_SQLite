import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {useEffect} from 'react';
import { Banco, createTable } from './config/Banco'; 

export default function App() {
  //carregar o banco toda vez que clicar o app
    useEffect(() => {
      //  criar funcao inciar
  const init = async() => {
    //criar referencia ao banco
    const db = await Banco();
  };

  init();

}, [])
   return (
   <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
   )


}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
