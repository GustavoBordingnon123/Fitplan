import { useState } from 'react';
import { View, TextInput, StyleSheet, Text, TouchableOpacity } from 'react-native';

interface TrainingRowpProps{
    index:number
    lastTrainingWeigth?: number
}

export default function TrainingRow({index, lastTrainingWeigth}: TrainingRowpProps){

    const styles = StyleSheet.create({

        container:{
           display:'flex',
           flexDirection:'row',
           alignItems:'center',
           justifyContent:'space-around',
           width:300,
           height:50,
           backgroundColor:'red',
           borderRadius:10,
           color:'white'
        },
        input:{
            backgroundColor:'yellow',
            borderRadius:10,
            color:'black',
            width:50,
            height:30,
            textAlign:'center'
         },
         button:{
            borderRadius:100,
            borderWidth:3,
            borderColor:'yellow',
            height:30,
            width:30,
         },
         text: {
            color:'white',
         },
         textLastTraining:{
            color:'black',
            width:50,
            height:30,
            backgroundColor:'yellow',
            display:'flex',
            justifyContent:'center',
            alignItems:'center',
            borderRadius:10,
         },

        p: {
          color: '#CFDF20',
        },

    });

    const [buttonBackground, setButtonBackground] = useState('yellow'); 

    const executable = () => {
        if (buttonBackground === 'yellow') {
            setButtonBackground('transparent');
        } else {
            setButtonBackground('yellow');
        }
    };


    return(
        <>
            <View style={styles.container}>
                <Text style={styles.text}>{index}</Text>
                
                <TextInput style={styles.input} />

                <Text style={styles.text}>X</Text>
                
                <TextInput style={styles.input} />

                <Text style={styles.text}>|</Text>

                <Text style={styles.textLastTraining}>{lastTrainingWeigth}kg</Text>

                <TouchableOpacity   style={{ ...styles.button, backgroundColor: buttonBackground }} onPress={executable}>

                </TouchableOpacity>

            </View>
        </>
    );
}