import { View, TouchableOpacity,  StyleSheet} from 'react-native';

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
        alert('fui pra treino')
    }

    let goToFood = () => {
        alert('fui pra comida')
    }

    let goToStatistics = () => {
        alert('fui pra estatisticas')
    }


    return(
        <>
            <View style={styles.container}>
                
                <View style={styles.iconsContainer}>
                    <TouchableOpacity onPress={goToTrain}>
                        <WeightIcon size={32} color='red' />
                    </TouchableOpacity>

                    <TouchableOpacity onPress={goToFood}>
                        <FoodIcon size={32} color='red' />
                    </TouchableOpacity>

                    <TouchableOpacity onPress={goToStatistics}>
                        <StatisticsIcon size={32} color='red' />
                    </TouchableOpacity>
                   
                </View>

            </View>
        </>
    );
}