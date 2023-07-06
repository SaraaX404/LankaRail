import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { GlobalBackgroundColors, globalShadowBox } from '../../Styles/global'
import { Image, Text, View } from 'native-base'
import { useNavigation } from '@react-navigation/native'
import { nav } from '../../Models'



type PropType = {
    paid?:boolean,
    booking?:boolean
}

export default ({paid, booking}:PropType)=>{

    const { navigate } = useNavigation<nav>();

    const navigateBookingSeats = () => {
      navigate("BookingSeats");
    };

    return(
    <TouchableOpacity
    onPress={navigateBookingSeats}
    style={[
      globalShadowBox,
      {
        width: "90%",
        marginLeft: "auto",
        marginRight: "auto",
        backgroundColor: "white",
        borderRadius: 30,
        padding: 10,
        marginTop: 30,
      },
    ]}
  >
    {/* Bus Detail */}
    <View
      flexDirection={"row"}
      justifyContent={"space-between"}
      mt={"10px"}
    >
      <Text
        fontWeight={"bold"}
        fontSize={25}
        color={GlobalBackgroundColors.primaryColor}
      >
        Ruhunu Kumari
      </Text>
    {booking === true?(
 <Text
 fontWeight={"bold"}

 fontSize={25}
 color={GlobalBackgroundColors.primaryColor}
>
 450 LKR
</Text>
    ):(
        <Text
 fontWeight={"bold"}
 color={paid?'#00FF00':'#ff0000'}
 fontSize={25}
>
 {paid?"Paid":"Not Paid"}
</Text>
    )}
     
    </View>
    {/* Traveling Detail */}
    <View
      flexDirection={"row"}
      justifyContent={"space-between"}
      mt={"10px"}
    >
      <Text>Matara</Text>
      <Image
        style={{ width: 50, height: 40 }}
        source={require("../../assets/Images/train.png")}
        alt={"image"}
      />
      <Text>Colombo Fort</Text>
    </View>
    {/* Time Detail */}
    <View
      flexDirection="row"
      justifyContent="space-between"
      marginTop={"10px"}
    >
      <Text>5.00 Am</Text>
      <Text>9.00Am</Text>
    </View>
  </TouchableOpacity>
    )
}