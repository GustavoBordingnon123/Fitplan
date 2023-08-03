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

//svgs
import FoodIcon from './src/svg/food'
import WeightIcon from './src/svg/weight';
import StatisticsIcon from './src/svg/statistics';

const App = () => {


  return (
    <>
        <View style={styles.container}>

        <ScrollView contentContainerStyle={styles.scrollContainer}>
          <Card 
              label='Treino de hoje: '
              title='Meta da vez: Supino 4x22' 
              titlePosition='center'
              titleColor='#CFDF20'
              backgroundColor={'#0D5913'}
              width={350}
              rows={[
                <TextRows 
                  text='Musculos de hoje: Peito / biceps'
                  backgroundColor={'#13861D'}
                  width={320}
                />,
                <TextRows 
                  text='Ficha de treino: abc'
                  backgroundColor={'#13861D'}
                  width={320}
                />,
                <TextRows 
                  text='Status: A concluir'
                  backgroundColor={'#13861D'}
                  width={320}
                />
              ]}
          />

          <Card
              label='Fichas de treino: '
              title='Pos treino' 
              titlePosition='center'
              titleColor='#CFDF20'
              backgroundColor={'#0D5913'}
              width={350}
              rows={[ 
                <TextRows 
                  text='Treino: ABC / 6x semana'
                  backgroundColor={'#13861D'}
                  width={320}
                  button={
                      <DefaultButton 
                        placeholder='detalhes' 
                        borderColor='#CFDF20' 
                      />}
                />,
                <TextRows 
                  text='Treino: ABCD / 6x semana'
                  backgroundColor={'#13861D'}
                  width={320}
                />,
                <TextRows 
                  text='Treino: ABC / 5 semana'
                  backgroundColor={'#13861D'}
                  width={320}
                />
              ]}
            />

          </ScrollView>

          <NavBar />
            
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