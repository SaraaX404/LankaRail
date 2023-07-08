import {
  View,
  Image,
  KeyboardAvoidingView,
  Pressable,
  Text
} from "native-base";
import { SafeAreaView } from "react-native";

import { useNavigation } from "@react-navigation/native";
import { nav } from "../../Models";

import React, { useState } from "react";
import DropDownPicker from "react-native-dropdown-picker";

import { Feather } from "@expo/vector-icons";
import DatePicker from "react-native-date-ranges";

export default () => {
  const { navigate } = useNavigation<nav>();
  const navigateTrainSearchResult = () => {
    navigate("TrainSearchResult");
  };

  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);

  const [open1, setOpen1] = useState(false);
  const [value1, setValue1] = useState(null);
  const [items, setItems] = useState([
    { label: "Matara", value: "1" },
    { label: "Colombo Fort", value: "2" },
  ]);

  const [open3, setOpen3] = useState(false);
  const [value3, setValue3] = useState(null);
  const [open4, setOpen4] = useState(false);
  const [value4, setValue4] = useState(null);
  const [items1, setItems1] = useState([
    { label: "5.00 AM", value: "1" },
    { label: "9.00 AM", value: "2" },
  ]);

  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date) => {
    console.warn("A date has been picked: ", date);
    hideDatePicker();
  };

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: "white",
        padding: 10,
        alignItems: "center",
      }}
    >
      <KeyboardAvoidingView>
        <View
          justifyContent={"center"}
          alignItems={"center"}
          marginTop={50}
          borderColor={"#003580"}
        >
          <Image
            width={120}
            height={120}
            source={require("../../assets/Images/train1.png")}
            alt="image"
          />
          <Text color={"#003580"} fontSize={17} fontWeight={"700"}>
            Search Available Trains
          </Text>
        </View>

        <View mt={50}>
          <View>
            <DropDownPicker
              open={open}
              value={value}
              items={items}
              setOpen={setOpen}
              setValue={setValue}
              setItems={setItems}
              placeholder="Select start destination"
              dropDownDirection="TOP"
              style={{
                width: 350,
              }}
            />
          </View>

          <View mt={15}>
            <DropDownPicker
              open={open1}
              value={value1}
              items={items}
              setOpen={setOpen1}
              setValue={setValue1}
              setItems={setItems}
              placeholder="Select end destination"
              dropDownDirection="TOP"
              style={{
                width: 350,
              }}
            />
          </View>

          <View mt={15}>
            {/* Selected Dates */}
            <Pressable
              flexDirection={"row"}
              alignItems={"center"}
              px={15}
              borderColor={"#003580"}
              borderWidth={2}
              pt={3}
              pb={3}
              style={{ gap: 10 }}
            >
              <Feather name="calendar" size={24} color="black" />
              <DatePicker
                style={{
                  width: 250,
                  height: 30,
                  borderRadius: 0,
                  borderWidth: 0,
                  borderColor: "transparent",
                }}
                customStyles={{
                  placeholderText: {
                    fontSize: 15,
                    flexDirection: "row",
                    alignItems: "center",
                    marginRight: "auto",
                  },
                  headerStyle: {
                    backgroundColor: "#003580",
                  },
                  contentText: {
                    fontSize: 15,
                    flexDirection: "row",
                    alignItems: "center",
                    marginRight: "auto",
                  },
                }}
                selectedBgColor="#0047AB"
                allowFontScaling={false}
                placeholder={"Select Your Dates"}
                mode={"range"}
              />
            </Pressable>
          </View>
          <View mt={15}>
            <DropDownPicker
              open={open3}
              value={value3}
              items={items1}
              setOpen={setOpen3}
              setValue={setValue3}
              setItems={setItems1}
              placeholder="Select Start Time"
              dropDownDirection="TOP"
              style={{
                width: 350,
              }}
            />
          </View>
          <View mt={15}>
            <DropDownPicker
              open={open4}
              value={value4}
              items={items1}
              setOpen={setOpen4}
              setValue={setValue4}
              setItems={setItems1}
              placeholder="Select End Time"
              dropDownDirection="TOP"
              style={{
                width: 350,
              }}
            />
          </View>
        </View>

        <Pressable
          onPress={navigateTrainSearchResult}
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
            Search
          </Text>
        </Pressable>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};
