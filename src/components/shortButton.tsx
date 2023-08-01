import React from 'react';
import { View, StyleSheet, TouchableOpacity, Image } from "react-native";

interface ButtonProps {
    type: string,
    borderColor?: string,
    bgColor?: string,
    size:number,
}

export default function ShortButton({ type, bgColor, borderColor, size }: ButtonProps) {

    let executable = () => {};
    let icon = null; 
    let iconSize = size - 16;

    if (type === 'add') {
        executable = () => {
            alert('teste de adicionar')
        }
        icon = require('../../assets/plusIcon.png');
    }
    
    if (type === 'remove') {
        executable = () => {
            alert('teste de remove')
        }
        icon = require('../../assets/removeIcon.png');
    }
    
    if (type === 'confirm') {
        executable = () => {
            alert('teste de confirm')
        }
        icon = require('../../assets/confirmIcon.png');
    }

    const styles = StyleSheet.create({
        container: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: size ,
            width: size,
            borderWidth: 2,
            borderRadius: 100,
            backgroundColor:bgColor,
            borderColor: borderColor,
        },
        p: {
          color: '#CFDF20',
        },
    });

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={executable}>
            <Image
                source={icon}
                style={{ width: 16, height: 16 }}
            />
            </TouchableOpacity>
        </View>
    );
}
