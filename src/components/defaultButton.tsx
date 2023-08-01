import { TouchableOpacity, View, StyleSheet, Image, Text } from "react-native";

interface ButtonProps{
    placeholder:string,
    borderColor:string,
    backgroundColor:string,
    textColor:string,
    width:number,
    height:number,
    type: string,
}



export default function DefaultButton({ placeholder, borderColor, backgroundColor, textColor, width, height, type }: ButtonProps) {

    let executable = () => {};
    let icon = null; 
    
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

    if (type === 'look') {
        executable = () => {
            alert('teste de look')
        }
        icon = require('../../assets/lookIcon.png');
    }

    if (type === 'next') {
        executable = () => {
            alert('teste de next')
        }
        icon = require('../../assets/nextIcon.png');
    }

    if (type === 'train') {
        executable = () => {
            alert('teste de train')
        }
        icon = require('../../assets/trainIcon.png');
    }

    const styles = StyleSheet.create({
        container: {
            display: 'flex',
            flexDirection:'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            height: height ,
            width: width,
            borderWidth: 2,
            borderRadius: 15,
            paddingLeft:55,
            paddingRight:55,
            backgroundColor:backgroundColor,
            borderColor: borderColor,
        },
        p:{
            color: textColor,
        }
    });

    return (
        <View>
            <TouchableOpacity  style={styles.container} onPress={executable}>
                <Image
                    source={icon}
                    style={{ width: 16, height: 16 }}
                />
                <Text style={styles.p}>{placeholder}</Text>
            </TouchableOpacity>
        </View>
    );
}