import { Text, View, Image, Box,Heading } from "native-base";
import { TouchableOpacity } from "react-native";
import React from "react";
import {
  GlobalBackgroundColors,
  GlobalBackgroundTextColors,
  globalShadowBox,
} from "../../Styles/global";
import { useNavigation } from "@react-navigation/native";
import { nav } from "../../Models";
import { Booking, DefaultLayout } from "../../Components";
const TrainSearchResult = () => {
  const { navigate } = useNavigation<nav>();

  const navigateBookingSeats = () => {
    navigate("BookingSeats");
  };
  return (
    <DefaultLayout>
  <View flex={1}>
      <Box flex={1} backgroundColor={'#f5f5fa'} flexDirection={'row'} alignItems={'center'} justifyContent={'center'} mt={'9%'}>
      <Text fontSize="18px" >Results</Text>

  </Box>
      <Box flex={2} backgroundColor={'#ffffff'}>
        <Box flexDirection={'column'} alignItems={'center'} justifyContent={'center'}>
        <Heading mt={'5%'}>Colombo - Matara</Heading>
        <Heading mt={'5%'}>Aug 05 2023 - Aug 08 2023</Heading>
        </Box>
      
      
      </Box>
      <Box flex={10} backgroundColor={'#f5f5fa'}>
      <Booking booking={true}/>
      <Booking booking={true}/>
    
      </Box>
     
    </View>
    </DefaultLayout>
  
  );
};

export default TrainSearchResult;
