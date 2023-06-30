 import { View, Text,Image,TouchableOpacity   } from 'react-native'
 import { GlobalBackgroundColors, GlobalBackgroundTextColors ,globalShadowBox} from '../../Styles/global';
 import { useNavigation } from '@react-navigation/native'
import {nav} from '../../Models'
import { Box, Button } from 'native-base'
 import React from 'react'
 
 export default() => {
    const {navigate} = useNavigation<nav>()
    const navigateTrainSearchResult =()=>{
        navigate('TrainSearchResult')
    } 
   return (
     /*===== Header Function Goes Here ============================================================================================= */
     
           <View style={{ flex: 1  }}>
           <Image style={{ width: 40, height: 40, marginLeft: 'auto', marginRight: 'auto', marginTop: 20 }} source={require('../../assets/Images/train1.jpg')} />
             <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingLeft: 20, paddingRight: 20, marginTop: 10 }}>
                {/* Arrival */}
                <View>
                    <Text style={{ color:"blue", fontSize: 25, fontWeight: 'bold', marginBottom: 5 }}>colombo</Text>
                    <Text style={{ color: "blue" , fontSize: 15 }}>Departure</Text>
                </View>
                {/* Border */}
                <View style={{ height: 5, backgroundColor: "blue", width: 30, marginTop: 'auto', marginBottom: 'auto' }}></View>
                {/* Destination */}
                <View>
                    <Text style={{ color: "blue", fontSize: 25, fontWeight: 'bold', marginBottom: 5 }}>Matara</Text>
                    <Text style={{ color: "blue", fontSize: 15 }}>Destination</Text>
                </View>
             </View>
             <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', marginTop: 20,marginBottom:20 }}>
                <Image style={{ width: 40, height: 40 }} source={require('../../assets/Images/clock.png')} />
                <Text style={{ marginTop: 'auto', marginBottom: 'auto', color: "blue" }}>01.07.2023</Text>
                <Image style={{ width: 40, height: 40 }} source={require('../../assets/Images/Calender.png')} />
            </View>
            <Button onPress={navigateTrainSearchResult}>
             Search
           </Button>
           </View>
   
            
           
           
    
   );
 }
 
 