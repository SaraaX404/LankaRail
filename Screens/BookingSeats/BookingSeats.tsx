 
import React from 'react'
import { View, Button, Text, Image, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';

// Styles
import { GlobalBackgroundColors, globalShadowBox, primaryButton, GlobalBackgroundTextColors } from '../../Styles/global';
//Components
import Seat from '../../assets/Images/seats';
export default() => {
  return (
    <View   >
    {/* train Detail */}
    <View style={[globalShadowBox, { marginTop: 10, marginBottom: 10, marginLeft: 'auto', marginRight: 'auto', flexDirection: 'column', justifyContent: 'space-between', width: '90%', padding: 5, backgroundColor: GlobalBackgroundColors.ternaryColor }]}>
        <Text style={{ marginLeft: 'auto', marginRight: 'auto', fontSize: 25, fontWeight: 'bold' }}>Rs.450</Text>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 3 }}>
            <Text style={{ marginTop: 'auto', marginBottom: 'auto', fontSize: 20 }}>Matara</Text>
            <Image style={{ width: 50, height: 40 }} source={require('../../assets/Images/train1.jpg')} />
            <Text style={{ marginTop: 'auto', marginBottom: 'auto', fontSize: 20 }}>Colombo Fort</Text>
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 3, paddingLeft: 30, paddingRight: 30 }}>
            <Text style={{ fontSize: 10 }}>5.00 AM</Text>
            <Text style={{ fontSize: 10 }}>9.00AM</Text>
        </View>
    </View>
    {/* Seats */}

    <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginTop: 5, }}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <View style={[styles.SeatContainer, globalShadowBox, { width: 30, height: 30 }]}>
                    <Seat color={0}></Seat>
                    
                </View>
                <Text style={{ marginLeft: 10 }}>Available</Text>
            </View>
            
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <View style={[styles.SeatContainer, globalShadowBox, { width: 30, height: 30 }]}>
                    <Seat color={-1}></Seat>
                </View>
                <Text style={{ marginLeft: 10 }}>Booked</Text>
            </View>
        </View>

    

    <View style={{ backgroundColor: GlobalBackgroundColors.primaryColor}}>
    <ScrollView>
                    <View style={{ backgroundColor: GlobalBackgroundColors.primaryColor, flex: 1 }}>
                         
                        {/* Seats Goes Here */}
                        <View style={[globalShadowBox, { width: '90%', marginLeft: 'auto', marginRight: 'auto', marginBottom: 20, flex: 1, backgroundColor: GlobalBackgroundColors.ternaryColor }]}>
                            {/* <SeatInfo /> */}
                            <Text style={{ color: 'red', textAlign: 'center', marginTop: 5, marginBottom: 5, fontWeight: 'bold' }}>   </Text>


                            {/* Seats*/}
                            <ScrollView>
                                <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
                                    {/* {trainSeatDataComponent} */}
                                      <View style={[styles.SeatContainer, globalShadowBox, { width: 30, height: 30 }]}>
                                       <Seat color={0}></Seat>
                    
                                      </View>
                                      <View style={[styles.SeatContainer, globalShadowBox, { width: 30, height: 30 }]}>
                                       <Seat color={-1}></Seat>
                    
                                      </View>

                                      <View style={[styles.SeatContainer, globalShadowBox, { width: 30, height: 30 }]}>
                                       <Seat color={0}></Seat>
                    
                                      </View>
                                      <View style={[styles.SeatContainer, globalShadowBox, { width: 30, height: 30 }]}>
                                       <Seat color={0}></Seat>
                    
                                      </View>
                                      <View style={[styles.SeatContainer, globalShadowBox, { width: 30, height: 30 }]}>
                                       <Seat color={0}></Seat>
                    
                                      </View>
                                      <View style={[styles.SeatContainer, globalShadowBox, { width: 30, height: 30 }]}>
                                       <Seat color={0}></Seat>
                                       
                                      
                    
                                      </View>
                                </View>
                            </ScrollView>


                            {/* Butons */}
                            <View style={{ marginBottom: 10 }}>
                                <TouchableOpacity   style={[  { marginLeft: 'auto', marginRight: 'auto' }]}><Text style={{ textAlign: 'center', color: GlobalBackgroundTextColors.secondaryColor }}>Book Now</Text></TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </ScrollView>
                </View>
    
</View>
  );
}

const styles = StyleSheet.create({
    SeatContainer: {
        backgroundColor: GlobalBackgroundColors.ternaryColor,
        padding: 5,
        width: '100%',
        height: '100%',
        borderRadius: 10
    }
});
 