import { Text, View, Image } from "native-base";
import { TouchableOpacity } from "react-native";
import React from "react";
import {
  GlobalBackgroundColors,
  GlobalBackgroundTextColors,
  globalShadowBox,
} from "../../Styles/global";
import { useNavigation } from "@react-navigation/native";
import { nav } from "../../Models";
const TrainSearchResult = () => {
  const { navigate } = useNavigation<nav>();

  const navigateBookingSeats = () => {
    navigate("BookingSeats");
  };
  return (
    <View>
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

          <Text
            fontWeight={"bold"}
            fontSize={25}
            color={GlobalBackgroundColors.primaryColor}
          >
            Rs.450
          </Text>
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

      <TouchableOpacity
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
        <View flexDirection="row" justifyContent="space-between" mt={"10px"}>
          <Text
            fontWeight={"bold"}
            fontSize={25}
            color={GlobalBackgroundColors.primaryColor}
          >
            Ruhunu Kumari
          </Text>
          <Text
            fontWeight={"bold"}
            fontSize={25}
            color={GlobalBackgroundColors.primaryColor}
          >
            Rs.450
          </Text>
        </View>
        {/* Traveling Detail */}
        <View flexDirection="row" justifyContent="space-between" mt={"10px"}>
          <Text>Matara</Text>
          <Image
            style={{ width: 50, height: 40 }}
            alt="image"
            source={require("../../assets/Images/train.png")}
          />
          <Text>Colombo Fort</Text>
        </View>
        {/* Time Detail */}
        <View
          flexDirection={"row"}
          justifyContent={"space-between"}
          marginTop={"10px"}
        >
          <Text>5.00 Am</Text>
          <Text>9.00Am</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default TrainSearchResult;
