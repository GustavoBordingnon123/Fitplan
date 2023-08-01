import { StatusBar } from 'expo-status-bar';
import React, { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import stylesGeral from './stylesGeral';

// Firebase setup
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, doc, setDoc } from 'firebase/firestore';
import {firebaseConfig} from './firebase/config'; // Certifique-se de que o caminho do arquivo está correto

//components
import InputRows from './src/components/inputRows';
import TextRows from './src/components/textRows';
import SelectRows from './src/components/optionsRows';
import ShortButton from './src/components/shortButton';

const App = () => {


  return (
    <>
        <View style={styles.container}>

          {/* <InputRows 
            placeholder='Testeeee' 
            button={<ShortButton type='add' borderColor='#CFDF20' size={32}/>} 
            bgColor='#0D5913'
            pcColor='rgba(207, 223, 32, 0.5)'
            textColor='#CFDF20'
          /> */}

        <SelectRows
          placeholder='Adicionar mais um alimento'
          itens={['frango', 'feijao', 'carne']}
        />

          <StatusBar style="auto" />
        </View>

    </>

    
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#202E24',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop:5
  },

  text: {
    fontSize:16,
    color:'#CFDF20'
  },

  input:{
    marginTop:5
  }
});

export default App;