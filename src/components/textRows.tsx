import { View, TextInput, StyleSheet, Text, Button } from 'react-native';

interface TextProps{
    text:string,
    button?:any
    backgroundColor: string,
    width: number,
}

export default function TextRows({ text, button, backgroundColor, width }: TextProps){
    const styles = StyleSheet.create({

        container:{
            display:'flex',
            alignItems:'center',
            justifyContent:'space-between',
            flexDirection:'row',
            backgroundColor: backgroundColor,
            height:50,
            width: width,
            padding:10,
            marginTop:10,
            marginBottom:10
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