import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import stylesGeral from "../../stylesGeral";

interface inputProps {
  placeholder: string;
  button?: any;
  bgColor: string,
  textColor: string;
  pcColor:string;
  
}

export default function InputRows({ placeholder, button, bgColor,textColor, pcColor }: inputProps) {
  const styles = StyleSheet.create({

    container:{
      display:'flex',
      flexDirection:'row',
      justifyContent:'space-between',
      backgroundColor: bgColor,
      height:50,
      width: 330,
      padding:10,
    },

    input: {
      color:textColor,
    },
  });

  return (
    <View style={styles.container}>
      <TextInput
        placeholder={placeholder}
        placeholderTextColor= {pcColor}
        style={styles.input}
      />
      {button}
    </View>
  );
}
