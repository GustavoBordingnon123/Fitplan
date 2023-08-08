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
    footerButton?: any,
    width:number,
    backgroundColor: string,
}


export default function Card({ label, title, titlePosition, titleColor, rows, width,backgroundColor, footerText, footerTextColor, footerButton }: CardProps) {

    let containerPaddingBottom = 30;

    if(!footerText && !footerButton){
      containerPaddingBottom = 0
    }

    let titleContainer;
    if(!title){
       titleContainer = 0
    }else{
      titleContainer = 50
    }

    const styles = StyleSheet.create({
        
        body:{
          marginTop:20,
        },

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
            height:titleContainer,
        },
        buttonContainer:{
          width:width,
          display:'flex',
          alignItems:'center',
        }
    });


    return (
      <>
        <View style={styles.body}>
          <Text  style={styles.label}>{label}</Text>
          <View style={styles.container}>
            <View style={styles.textContainer}>
                <Text style={styles.title}>{title}</Text>
            </View>
            {rows}
            <View style={styles.buttonContainer}>
              <CardFooter text={footerText} button={footerButton} color={footerTextColor} />
            </View>
          </View>
        </View>
      </>
    );
}
  