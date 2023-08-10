import DropDownPicker from 'react-native-dropdown-picker';
import React, { useState } from 'react'; // Certifique-se de importar useState corretamente
import { View, StyleSheet, TouchableOpacity } from "react-native";

interface SelectProps {
  placeholderText: string;
  itens: string[];
  width: number;
  bgColor:string;
  textColor?:string;
}

export default function SelectRows({ placeholderText, itens, width, bgColor, textColor }: SelectProps) {

  if(!textColor){
    textColor = '#CFDF20';
  }

  let marginTop = 0

  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);

  const items = itens.map((item) => ({ label: item, value: item }));

  const styles = StyleSheet.create({
    container: {
      backgroundColor: bgColor,
      width: width,
      color:'#CFDF20',
      zIndex:1,
    },
  });

  return (
    <View>
        <DropDownPicker
          open={open}
          value={value}
          items={items}
          placeholder={placeholderText}
          setOpen={setOpen}
          setValue={setValue}
          placeholderStyle={{
            color: textColor,
            fontWeight: "bold",
          }}
          dropDownContainerStyle={{
            backgroundColor: bgColor,
            width: width,
          }}
          listItemLabelStyle={{
            color: textColor,
          }}
          modalTitleStyle={{
            color: textColor,
          }}
          style={styles.container}
        />
    </View>
  );
}
