import { View, StyleSheet, Text } from "react-native";
import CardFooter from "./cardFooter";

interface CardProps{
    label?:string,
    title?:string,
    titlePosition: string,
    titleColor?: string,
    rows: any,
    footerText?: string,
    footerTextColor?: string,
    footerButton?: string,
    width:number,
    backgroundColor: string,
}


export default function Card({ label, title, titlePosition, titleColor, rows, width,backgroundColor, footerText, footerTextColor, footerButton }: CardProps) {

    let containerPaddingBottom = 30;

    if(!footerText){
      containerPaddingBottom = 0
    }

    const styles = StyleSheet.create({

        container:{
            width:width,
            height:'auto',
            backgroundColor:backgroundColor,
            paddingTop:30,
            paddingBottom:containerPaddingBottom,
            paddingLeft:15,
            paddingRight:15,
            borderRadius:5,
        },
        title:{
            color:titleColor,
            fontSize:22,
        },

        label:{
          color:titleColor,
          fontSize:18,
          lineHeight:50
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
          <Text  style={styles.label}>{label}</Text>
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
  