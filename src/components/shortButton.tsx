import { View, StyleSheet, TouchableOpacity } from "react-native";
import SvgUri from 'react-native-svg-uri';

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
        icon = require('../../assets/plusIcon.svg');
    }
    
    if (type === 'remove') {
        executable = () => {
            alert('teste de remove')
        }
        icon = require('../../assets/removeIcon.svg');
    }
    
    if (type === 'confirm') {
        executable = () => {
            alert('teste de confirm')
        }
        icon = require('../../assets/confirmIcon.svg');
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
                <SvgUri
                    width={iconSize}
                    height={iconSize}
                    source={icon}
                />
            </TouchableOpacity>
        </View>
    );
}
