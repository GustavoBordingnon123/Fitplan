import { View, TextInput, StyleSheet, Text, Button } from 'react-native';

interface TextProps{
    text:string,
    button?:any
}

export default function TextRows({ text, button }: TextProps){
    const styles = StyleSheet.create({

        container:{
            display:'flex',
            alignItems:'center',
            justifyContent:'space-between',
            flexDirection:'row',
            backgroundColor: '#0D5913',
            height:50,
            width: 330,
            padding:10,
        },

        p: {
          color: '#CFDF20',
        },

    });

    return(
        <>
             <View>
                <View  style={styles.container}>
                    <Text style={styles.p}>{text}</Text>
                    {button}

                </View >
            </View>
        </>
    );
}