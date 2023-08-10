import { StyleSheet, View, Text, ScrollView } from 'react-native';
import Card from '../src/components/card';
import TextRows from '../src/components/textRows';
import DefaultButton from '../src/components/defaultButton';
import NavBar from '../src/components/navbar';

export default function HomeScreen(){

    const styles = StyleSheet.create({
        container:{
            flex: 1,
            backgroundColor:"#202E24",
            display:'flex',
            alignItems:'center',
            paddingBottom:130
        }, 
        title:{
            color:"#CFDF20",
            fontSize:32,
            lineHeight:80,
        },
        buttonContainer:{
            marginTop:30,
        }
      
    });

    return(
        <>
            <ScrollView>
                <View style={styles.container}>
                    <Text style={styles.title}>Sessão de treino</Text>

                    <Card 
                        label='Treino de hoje:'
                        titleColor='#CFDF20'
                        backgroundColor='#0D5913'
                        title='Meta da vez: Supino 4x22'
                        titlePosition='center'
                        rows={[
                            <TextRows text='Musculos de hoje: Peito / biceps' backgroundColor='#13861D' width={320}/>,
                            <TextRows text='Ficha de treino: abc' backgroundColor='#13861D' width={320}/>,
                            <TextRows text='Status: A concluir' backgroundColor='#13861D' width={320}/>
                        ]}
                        width={350}
                        footerButton={<DefaultButton backgroundColor='none' borderColor='#CFDF20' placeholder='detalhes' type='train' width={200} padding={50} textColor='#CFDF20' />
                        }
                        
                    />

                    <Card 
                        label='Fichas de treino'
                        titleColor='#CFDF20'
                        backgroundColor='#0D5913'
                        titlePosition='center'
                        rows={[
                            <TextRows 
                                text='Treino: ABC / 6x semana' 
                                backgroundColor='#13861D' 
                                width={320}
                                button={
                                    <DefaultButton backgroundColor='#CFDF20' borderColor='#CFDF20'  placeholder='detalhes' width={120} padding={30} textColor='#0D5913' />
                                }
                            />,
                            <TextRows 
                                text='Treino: ABCD / 6x semana ' 
                                backgroundColor='#13861D' 
                                width={320}
                                button={
                                    <DefaultButton backgroundColor='#CFDF20' borderColor='#CFDF20'  placeholder='detalhes' width={120} padding={30} textColor='#0D5913' />
                                }
                            />,
                            <TextRows 
                                text='Treino: ABC / 5 semana' 
                                backgroundColor='#13861D' 
                                width={320}
                                button={
                                    <DefaultButton backgroundColor='#CFDF20' borderColor='#CFDF20'  placeholder='detalhes' width={120} padding={30} textColor='#0D5913' />
                                }
                            />,
                        ]}
                        width={350}
                    />
                    
                    <View style={styles.buttonContainer}>
                        <DefaultButton type="add" borderColor='#CFDF20'  placeholder='detalhes' width={180} padding={40} textColor='#CFDF20' />
                    </View>

                </View>
            </ScrollView>
            <NavBar />
        </>
    );
}