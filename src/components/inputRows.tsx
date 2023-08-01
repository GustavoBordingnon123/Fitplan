import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import stylesGeral from "../../stylesGeral";

interface inputProps {
  placeholderText: string;
  button?: any;
  bgColor: string,
  textColor: string;
  placeholderColor:string;
  width:number;
}

export default function InputRows({ placeholderText, button, bgColor,textColor, placeholderColor, width }: inputProps) {
  const styles = StyleSheet.create({

    container:{
      display:'flex',
      flexDirection:'row',
      justifyContent:'space-between',
      backgroundColor: bgColor,
      height:50,
      width: width,
      padding:10,
      marginTop:10,
      marginBottom:10,
    },

    input: {
      color:textColor,
    },
  });

  return (
    <View style={styles.container}>
      <TextInput
        placeholder={placeholderText}
        placeholderTextColor= {placeholderColor}
        style={styles.input}
      />
      {button}
    </View>
  );
}
