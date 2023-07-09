import { Box, Text, Button, Input, View, Image, Pressable } from "native-base";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { nav } from "../../Models";
import { useKeyboardVisible } from "../../hooks";
import FontAwesome from "react-native-vector-icons/FontAwesome";

export default () => {
  const { navigate } = useNavigation<nav>();

  const keyBoardVisible = useKeyboardVisible();

  const EditProfile = () => {
    navigate("EditProfile");
  };
  return (
    <Box flex={1}>
      <Box
        flex={keyBoardVisible ? 1 : 3}
        flexDirection={"row"}
        alignItems={"center"}
        justifyContent={"center"}
      >
        <View
          justifyContent={"center"}
          alignItems={"center"}
          marginTop={50}
          borderColor={"#003580"}
        >
          <Image
            width={100}
            height={100}
            source={require("../../assets/Images/user1.png")}
            alt="image"
          />
          <Text color={"#003580"} fontSize={17} fontWeight={"700"}>
            Update Profile
          </Text>
        </View>
      </Box>
      <Box flex={7} mx={"3%"}>
        <View>
          <Input placeholder="fullname" h="40px" />
        </View>
        <View>
          <Input placeholder="address" h="40px" mt="2%" />
        </View>
        <View>
          <Input placeholder="telephone" h="40px" mt="2%" />
        </View>
        <View>
          <Input placeholder="email" h="40px" mt="2%" />
        </View>
        <View>
          <Input placeholder="password" h="40px" mt="2%" />
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
            Update
          </Text>
        </Pressable>
      </Box>
    </Box>
  );
};
