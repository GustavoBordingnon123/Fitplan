import { View, StyleSheet, Text } from "react-native";

interface CardProps{
    text?:string,
    color:string,
    button?:any,
}


export default function CardFooter({text,color, button}: any){

    const styles = StyleSheet.create({
        text:{
            color:color,
            marginTop:10,
            height:20,
        }
    })

    return(
        <>
            <View>
                <Text style={styles.text}>{text}</Text>
                {button}
            </View>    
        </>
    );
}