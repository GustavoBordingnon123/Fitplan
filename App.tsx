import { StatusBar } from 'expo-status-bar';
import React, { useEffect } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import stylesGeral from './stylesGeral';
import config from './src/config.json'

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
import TrainingRow from './src/components/trainingRow';
import TrainingForm from './src/components/trainForm';

//svgs
import FoodIcon from './src/svg/food'
import WeightIcon from './src/svg/weight';
import StatisticsIcon from './src/svg/statistics';

//pages 
import Home from './pages/home';

const App = () => {


  return (
    <>
     <Home />
    </>

    
  );
};

export default App;