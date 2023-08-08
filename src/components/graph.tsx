import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { LineChart } from 'react-native-chart-kit';

const data = {
  labels: ['1', '2', '3', '4', '5', '6','7', '8', '9'],
  datasets: [
    {
      data: [5, 10, 15, 17, 18, 20, 20, 22, 22, 23, 25],
    },
  ],
};

interface ChartProps{
  label?: string
}

export default function ChartComponent({label}: ChartProps){
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{label}</Text>
      <LineChart
        data={data}
        width={400}
        height={220}
        yAxisLabel=""
        yAxisSuffix="kg"
        chartConfig={{
          backgroundColor: '#202E24',
          backgroundGradientFrom: '#202E24',
          backgroundGradientTo: '#202E24',
          fillShadowGradient:'yellow',
          decimalPlaces: 1,
          color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          style: {
            borderRadius: 16,
          },
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  title:{
    fontSize:18,
    marginBottom:30,
    width:380,
    color:'yellow'
  }
});

