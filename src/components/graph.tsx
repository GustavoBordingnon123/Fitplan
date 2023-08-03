import React from 'react';
import { View, StyleSheet } from 'react-native';
import { LineChart } from 'react-native-chart-kit';

const data = {
  labels: ['Treino 1', 'Treino 2', 'Treino 3', 'Treino 4', 'Treino 5'],
  datasets: [
    {
      data: [5, 10, 15, 17, 18, 20],
    },
  ],
};

const ChartComponent: React.FC = () => {
  return (
    <View style={styles.container}>
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
});

export default ChartComponent;
