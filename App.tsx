import { StatusBar } from 'expo-status-bar';
import React, { useEffect } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import stylesGeral from './stylesGeral';

// Firebase setup
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, doc, setDoc } from 'firebase/firestore';
import {firebaseConfig} from './firebase/config'; // Certifique-se de que o caminho do arquivo está correto

//components
import Card from './src/components/card';
import InputRows from './src/components/inputRows';
import TextRows from './src/components/textRows';
import SelectRows from './src/components/selectRows';
import DefaultButton from './src/components/defaultButton';
import ShortButton from './src/components/shortButton';
import NavBar from './src/components/navbar';
import ChartComponent from './src/components/graph';

//svgs
import FoodIcon from './src/svg/food'
import WeightIcon from './src/svg/weight';
import StatisticsIcon from './src/svg/statistics';

const App = () => {


  return (
    <>
        <View style={styles.container}>
          
          <ChartComponent label='Progressão de carga (kg x treinos):'/>
          
          <StatusBar style="auto" />
        </View>

    </>

    
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
  },

  container: {
    flex: 1,
    backgroundColor: '#202E24',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 5,
    paddingBottom: 150,
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