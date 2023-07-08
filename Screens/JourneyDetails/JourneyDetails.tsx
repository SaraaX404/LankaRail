import { View, Text,Button,Box,Pressable} from 'native-base'
import React from 'react'
import { DefaultLayout } from '../../Components'
import { GlobalBackgroundColors, globalShadowBox } from '../../Styles/global'
import { SafeAreaView } from "react-native";
export default () => {
  return (
    <DefaultLayout>
      <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: "white",
        padding: 10,
        alignItems: "center",
      }}
    >
        <Box flex={1}>
    <View style={[
      globalShadowBox,
      {
        width: 300,
        marginLeft: 100,
        marginRight: 100,
        backgroundColor: "white",
         
        padding: 10,
        marginTop: 80,
      },
    ]}>
      <Text>JourneyDetails</Text>
      <Text>----------------------------------------</Text>
      <View>
          {/* Traveling Detail */}
        <View
        flexDirection={"row"}
        justifyContent={"space-between"}
        mt={"10px"}
        >
        <Text>From :</Text>
        
        <Text> Matara</Text>
        </View>
        
        <View
        flexDirection={"row"}
        justifyContent={"space-between"}
        mt={"10px"}
        >
        <Text>To:</Text>
        
        <Text> Colombo Fort</Text>
        </View>

        <View
        flexDirection={"row"}
        justifyContent={"space-between"}
        mt={"10px"}
        >
        <Text>Departure Date :</Text>
        
        <Text> 14.07.22</Text>
        </View>

        <View
        flexDirection={"row"}
        justifyContent={"space-between"}
        mt={"10px"}
        >
        <Text>Passenger Count:</Text>
        
        <Text> 1</Text>
        </View>

      </View>
      
      <View>
      <Text mt={30}>Payment Details</Text>
      <Text>----------------------------------------</Text>
      <View>
          {/* Payment Detail */}
        <View
        flexDirection={"row"}
        justifyContent={"space-between"}
        mt={"10px"}
        >
        <Text>Ticket Amount :</Text>
        
        <Text>450 LKR</Text>
        </View>
        
        <View
        flexDirection={"row"}
        justifyContent={"space-between"}
        mt={"10px"}
        >
        <Text>Service Charge:</Text>
        
        <Text> 30 LKR</Text>
        </View>

        <View
        flexDirection={"row"}
        justifyContent={"space-between"}
        mt={"30"}
        >
        <Text>Total Amount :</Text>
        
        <Text> 480 LKR</Text>
        </View>

       
      </View>
      </View>

    </View>
    <Pressable
         
          width={200}
          backgroundColor={"#003580"}
          padding={15}
          borderRadius={7}
          marginTop={50}
          marginLeft={"auto"}
          marginRight={"auto"}
        >
          <Text
            textAlign={"center"}
            color={"white"}
            fontSize={17}
            fontWeight={"bold"}
          >
           Checkout
          </Text>
        </Pressable>
    </Box>
    
    </SafeAreaView>
    </DefaultLayout>
  )
}

 