import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import TrainingRow from './trainingRow';

interface TrainingFormProps {
  muscle: string;
  exercise: any;
  series: number;
}

export default function TrainingForm({ muscle, exercise, series }: TrainingFormProps) {

  const generateTrainingRows = (count: number) => {
    const rows = [];
    for (let i = 0; i < count; i++) {
      rows.push(<TrainingRow index={i} key={i} />);
    }
    return rows;
  };



  const styles = StyleSheet.create({
    container:{
        height:500,
        width:400,
        backgroundColor:'green',
        padding:10,
    },
    muscleAndRest:{
        fontSize:16,
        color:'blue',
        lineHeight:50,
    },
    exercise:{
        fontSize:32,
        color:'blue',
        lineHeight:50
    },


  })

  return (
    <View style={styles.container}>
      <TextInput style={styles.muscleAndRest}>{muscle}</TextInput>
      <TextInput style={styles.exercise}>Exercicio: {exercise}</TextInput>
      <TextInput style={styles.muscleAndRest}>Descanso 2m</TextInput>

      <View>
        <TextInput>Reps</TextInput>
        <TextInput>Pesos</TextInput>
        <TextInput>Ultimo treino</TextInput>
      </View>

      {generateTrainingRows(series)}
    </View>
  );
}
