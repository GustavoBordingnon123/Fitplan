import { View, StyleSheet, Text } from "react-native";
import CardFooter from "./cardFooter";

interface CardProps{
    label?:string,
    title?:string,
    titlePosition: string,
    titleColor?: string,
    rows: any,
    footerText?: string,
    footerTextColor: string,
    footerButton?: string,
    width:number,
    backgroundColor: string,
}


export default function Card({ label, title, titlePosition, titleColor, rows, width,backgroundColor, footerText, footerTextColor, footerButton }: CardProps) {

    const styles = StyleSheet.create({

        container:{
            width:width,
            height:'auto',
            backgroundColor:backgroundColor,
            paddingTop:30,
            paddingBottom:30,
            paddingLeft:15,
            paddingRight:15,
        },
        title:{
            color:titleColor,
            fontSize:22,
        },

        textContainer:{
            display:'flex',
            alignItems:titlePosition,
            height:50,
        }
    });


    return (
      <>
        <View>
          <Text>{label}</Text>
          <View style={styles.container}>
            <View style={styles.textContainer}>
                <Text style={styles.title}>{title}</Text>
            </View>
            {rows}
            <CardFooter text={footerText} button={footerButton} color={footerTextColor} />
          </View>
        </View>
      </>
    );
}
  