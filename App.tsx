import { StatusBar } from 'expo-status-bar';
import React, { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import stylesGeral from './stylesGeral';

// Firebase setup
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, doc, setDoc } from 'firebase/firestore';
import {firebaseConfig} from './firebase/config'; // Certifique-se de que o caminho do arquivo está correto

//components
import Card from './src/components/card';
import InputRows from './src/components/inputRows';
import TextRows from './src/components/textRows';
import SelectRows from './src/components/optionsRows';
import DefaultButton from './src/components/defaultButton';
import ShortButton from './src/components/shortButton';

const App = () => {


  return (
    <>
        <View style={styles.container}>
          <Card
            title='Pos treino' 
            titlePosition='center'
            titleColor='#CFDF20'
            backgroundColor={'#0D5913'}
            width={350}
            rows={[ 
              <InputRows 
                placeholderText='30g de whey / 130 kcal'
                bgColor='#13861D'
                textColor='#CFDF20'
                placeholderColor='#CFDF20'
                button={<ShortButton type='remove' size={32} bgColor='#B33030'  borderColor='#B33030'/>}
                width={320}
              />,
              <InputRows 
                placeholderText='200ml de leite / 100 kcal'
                bgColor='#13861D'
                textColor='#CFDF20'
                placeholderColor='#CFDF20'
                button={<ShortButton type='remove' size={32} bgColor='#B33030' borderColor='#B33030' />}
                width={320}
              />,
              <InputRows 
                placeholderText='5g de creatina / 0 kcal'
                bgColor='#13861D'
                textColor='#CFDF20'
                placeholderColor='#CFDF20'
                button={<ShortButton type='remove' size={32} bgColor='#B33030' borderColor='#B33030' />}
                width={320}
              />,
              <InputRows 
                placeholderText='Adicionar mais um alimento'
                bgColor='#13861D'
                textColor='#CFDF20'
                placeholderColor='rgba(207, 223, 32, 0.5)'
                button={<ShortButton type='add' size={32} bgColor='none' borderColor='#CFDF20' />}
                width={320}
              />
            ]}
            footerText='Total aproximado de calorias: 230 kcal'
            footerTextColor='#CFDF20'
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