import DropDownPicker from 'react-native-dropdown-picker';
import React, { useState } from 'react'; // Certifique-se de importar useState corretamente
import { View, StyleSheet, TouchableOpacity } from "react-native";

interface SelectProps {
  placeholder: string;
  itens: string[]; // Modificamos o tipo para indicar que é um array de strings
}

export default function SelectRows({ placeholder, itens }: SelectProps) {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);

  // Usando map para gerar um novo array no formato esperado pelo componente DropDownPicker
  const items = itens.map((item) => ({ label: item, value: item }));

  const styles = StyleSheet.create({
    container: {
      backgroundColor: "#0D5913",
      width: 200,
      color:'#CFDF20',
    },
  });

  return (
    <DropDownPicker
      open={open}
      value={value}
      items={items}
      placeholder={placeholder}
      setOpen={setOpen}
      setValue={setValue}
      placeholderStyle={{
        color: "#CFDF20",
        fontWeight: "bold",
      }}
      dropDownContainerStyle={{
        backgroundColor: "#0D5913",
        width: 200,
      }}
      listItemLabelStyle={{
        color: "#CFDF20",
      }}
     
      modalTitleStyle={{
        color: "#CFDF20",
      }}
      style={styles.container}
    />
  );
}
