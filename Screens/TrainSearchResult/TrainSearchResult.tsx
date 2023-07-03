import { StyleSheet, Text, View,TouchableOpacity,Image } from 'react-native'
import React from 'react'
import { GlobalBackgroundColors, GlobalBackgroundTextColors ,globalShadowBox} from '../../Styles/global';
import { useNavigation } from '@react-navigation/native'
import {nav} from '../../Models'
const TrainSearchResult = () => {
    const {navigate} = useNavigation<nav>()

    const navigateBookingSeats =()=>{
        navigate('BookingSeats')
    } 
  return (
    <View>
       
      <TouchableOpacity  onPress={navigateBookingSeats }   style={[globalShadowBox, { width: '90%', marginLeft: 'auto', marginRight: 'auto', backgroundColor: 'white', borderRadius: 30, padding: 10, marginTop: 30 }]}>
            {/* Bus Detail */}
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 10 }}>
                <Text style={{ fontWeight: 'bold', fontSize: 25, color: GlobalBackgroundColors.primaryColor }}>Ruhunu Kumari</Text>
               
                <Text style={{ fontWeight: 'bold', fontSize: 25, color: GlobalBackgroundColors.primaryColor }}>Rs.450</Text>
            </View>
            {/* Traveling Detail */}
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 10 }}>
            
                <Text>Matara</Text>
                <Image style={{ width: 50, height: 40 }} source={require('../../assets/Images/train.png')} />
                <Text>Colombo Fort</Text>
            </View>
            {/* Time Detail */}
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 10 }}>
                <Text>5.00 Am</Text>
                <Text>9.00Am</Text>
            </View>
          </TouchableOpacity>
          
          <TouchableOpacity   style={[globalShadowBox, { width: '90%', marginLeft: 'auto', marginRight: 'auto', backgroundColor: 'white', borderRadius: 30, padding: 10, marginTop: 30 }]}>
            {/* Bus Detail */}
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 10 }}>
                <Text style={{ fontWeight: 'bold', fontSize: 25, color: GlobalBackgroundColors.primaryColor }}>Ruhunu Kumari</Text>
                <Text style={{ fontWeight: 'bold', fontSize: 25, color: GlobalBackgroundColors.primaryColor }}>Rs.450</Text>
            </View>
            {/* Traveling Detail */}
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 10 }}>
                <Text>Matara</Text>
                <Image style={{ width: 50, height: 40 }} source={require('../../assets/Images/train.png')} />
                <Text>Colombo Fort</Text>
            </View>
            {/* Time Detail */}
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 10 }}>
                <Text>5.00 Am</Text>
                <Text>9.00Am</Text>
            </View>
          </TouchableOpacity>
    </View>
  )
}

export default TrainSearchResult

const styles = StyleSheet.create({})