import React from "react";
import { View, Button, Text, Image, ScrollView , Pressable} from "native-base";
import { TouchableOpacity, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { nav } from "../../Models";

// Styles
import {
  GlobalBackgroundColors,
  globalShadowBox,
  primaryButton,
  GlobalBackgroundTextColors,
} from "../../Styles/global";
//Components
import Seat from "../../assets/Images/seats";
export default () => {

  const { navigate } = useNavigation<nav>();
  const confirmbooking = () => {
    navigate("confirmbooking");
  };
  return (
    <View>
      {/* train Detail */}
      <View
        style={globalShadowBox}
        mt={10}
        mb={10}
        mx={"auto"}
        flexDirection={"column"}
        justifyContent={"space-between"}
        width={"90%"}
        p={5}
        backgroundColor={GlobalBackgroundColors.ternaryColor}
      >
        <Text mx={"auto"} fontSize={25} fontWeight={"bold"}>
          Rs.450
        </Text>
        <View flexDirection={"row"} justifyContent={"space-between"} mt={3}>
          <Text mt={"auto"} mb={"auto"} fontSize={20}>
            Matara
          </Text>
          <Image
            width={"50px"}
            height={"40px"}
            source={require("../../assets/Images/train1.jpg")}
            alt={"image"}
          />
          <Text marginTop={"auto"} marginBottom={"auto"} fontSize={20}>
            Colombo Fort
          </Text>
        </View>
        <View
          flexDirection={"row"}
          justifyContent={"space-between"}
          mt={3}
          pl={30}
          pr={30}
        >
          <Text fontSize={"10px"}>5.00 AM</Text>
          <Text fontSize={"10px"}>9.00AM</Text>
        </View>
      </View>
      {/* Seats */}

      <View
        flexDirection={"row"}
        justifyContent={"space-around"}
        marginTop={"5px"}
      >
        <View flexDirection={"row"} alignItems={"center"}>
          <View
            style={[
              styles.SeatContainer,
              globalShadowBox,
              { width: 30, height: 30 },
            ]}
          >
            <Seat color={0}></Seat>
          </View>
          <Text ml={"10px"}>Available</Text>
        </View>

        <View flexDirection={"row"} alignItems={"center"}>
          <View
            style={[
              styles.SeatContainer,
              globalShadowBox,
              { width: 30, height: 30 },
            ]}
          >
            <Seat color={-1}></Seat>
          </View>
          <Text ml={"10px"}>Booked</Text>
        </View>
      </View>

      <View mt={"10px"}>
        <ScrollView>
          <View>
            {/* Seats Goes Here */}
            <View
              width={"90%"}
              mx={"auto"}
              mb={20}
              flex={1}
              backgroundColor={GlobalBackgroundColors.ternaryColor}
              style={[globalShadowBox]}
            >
              {/* <SeatInfo /> */}
              <Text
                color={"red"}
                textAlign={"center"}
                marginTop={"5px"}
                marginBottom={"5px"}
                fontWeight={"bold"}
              >
                {" "}
              </Text>

              {/* Seats*/}
              <ScrollView>
                <View flexDirection={"row"} flexWrap={"wrap"}>
                  {/* {trainSeatDataComponent} */}
                  <View
                    style={[
                      styles.SeatContainer,
                      globalShadowBox,
                      { width: 30, height: 30 },
                    ]}
                  >
                    <Seat color={0}></Seat>
                  </View>
                  <View
                    style={[
                      styles.SeatContainer,
                      globalShadowBox,
                      { width: 30, height: 30 },
                    ]}
                  >
                    <Seat color={-1}></Seat>
                  </View>

                  <View
                    style={[
                      styles.SeatContainer,
                      globalShadowBox,
                      { width: 30, height: 30 },
                    ]}
                  >
                    <Seat color={0}></Seat>
                  </View>
                  <View
                    style={[
                      styles.SeatContainer,
                      globalShadowBox,
                      { width: 30, height: 30 },
                    ]}
                  >
                    <Seat color={0}></Seat>
                  </View>
                  <View
                    style={[
                      styles.SeatContainer,
                      globalShadowBox,
                      { width: 30, height: 30 },
                    ]}
                  >
                    <Seat color={0}></Seat>
                  </View>
                  <View
                    style={[
                      styles.SeatContainer,
                      globalShadowBox,
                      { width: 30, height: 30 },
                    ]}
                  >
                    <Seat color={0}></Seat>
                  </View>
                  <View
                    style={[
                      styles.SeatContainer,
                      globalShadowBox,
                      { width: 30, height: 30 },
                    ]}
                  >
                    <Seat color={-1}></Seat>
                  </View>
                </View>
              </ScrollView>

              {/* Butons */}
              <View mt={"20px"} mb={"10px"}>
                <TouchableOpacity
                  style={[{ marginLeft: "auto", marginRight: "auto" }]}
                >
                  <Text
                    textAlign={"center"}
                    color={GlobalBackgroundTextColors.secondaryColor}
                  >
                    Book Now
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
            
            <Pressable
          onPress={confirmbooking}
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
            Confirm Booking
          </Text>
        </Pressable>
          </View>
        </ScrollView>
      </View>
    </View>
<<<<<<< Updated upstream
=======
    
      </DefaultLayout>
    
>>>>>>> Stashed changes
  );
};

const styles = StyleSheet.create({
  SeatContainer: {
    backgroundColor: GlobalBackgroundColors.ternaryColor,
    padding: 5,
    width: "100%",
    height: "100%",
    borderRadius: 10,
  },
});
