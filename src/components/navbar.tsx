import { View, TouchableOpacity,  StyleSheet} from 'react-native';
import { useNavigation } from '@react-navigation/native';

//icons
import FoodIcon from '../svg/food';
import WeightIcon from '../svg/weight';
import StatisticsIcon from '../svg/statistics';


export default function NavBar(){

    const styles = StyleSheet.create({

        container:{
            display:'flex',
            alignItems:'center',
            justifyContent:'center',
            flexDirection:'row',
            backgroundColor: '#13861D',
            height:100,
            width:400,
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
        },

        iconsContainer: {
            display:'flex',
            alignItems:'center',
            justifyContent:'space-around',
            flexDirection:'row',
            width:250,
        }

    });

    let goToTrain = () => {
        navigation.navigate('Home');
    }

    let goToFood = () => {
        navigation.navigate('Food');
    }

    let goToStatistics = () => {
        alert('fui pra estatisticas')
    }

    const navigation = useNavigation(); 


    return(
        <>
            <View style={styles.container}>
                
                <View style={styles.iconsContainer}>
                    <TouchableOpacity onPress={goToTrain}>
                        <WeightIcon size={32} color='#CFDF20' />
                    </TouchableOpacity>

                    <TouchableOpacity onPress={goToFood}>
                        <FoodIcon size={32} color='#CFDF20' />
                    </TouchableOpacity>

                    <TouchableOpacity onPress={goToStatistics}>
                        <StatisticsIcon size={32} color='#CFDF20' />
                    </TouchableOpacity>
                   
                </View>

            </View>
        </>
    );
}