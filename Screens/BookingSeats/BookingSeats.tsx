import React, { FC, useState } from "react";
import {
  View,
  Button,
  Text,
  Image,
  ScrollView,
  Pressable,
  Input,
  Modal,
  Box,
} from "native-base";
import { Linking } from 'react-native';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import { TouchableOpacity, StyleSheet, TouchableHighlight } from "react-native";
import { RouteProp, useNavigation } from "@react-navigation/native";
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
import { DefaultLayout } from "../../Components";
import API from "../../utils/API";
import { useQuery } from "react-query";
type RouterParams = {
  BookingSeats: {
    start: string;
    id: string;
    end: string;
    endTime: number;
    startTime: number;
    date: string;
    train: string;
    price: number;
    bookingStatus: {
      availableSeats: number;
      bookingSeats: number;
      numberOfSeats: number;
    };
  };
};

type AppProps = {
  route: RouteProp<RouterParams, "BookingSeats">;
};

export default ({ route }: AppProps) => {
  const [modalVisible, setModalVisible] = React.useState<boolean>(false)
  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);
  const [quantity, setQuantity] = useState<string>("");
  const {
    params: { start, end, endTime, startTime, bookingStatus, price, date, id, train },
  } = route;

  const availableSeats: JSX.Element[] = [];

  for (let i = 0; i < bookingStatus?.availableSeats; i++) {
    availableSeats.push(
      <View
        key={i}
        style={[
          styles.SeatContainer,
          globalShadowBox,
          { width: 30, height: 30 },
        ]}
      >
        <Seat color={0}></Seat>
      </View>
    );
  }

  for (let i = 0; i < bookingStatus?.bookingSeats; i++) {
    availableSeats.push(
      <View
        key={i}
        style={[
          styles.SeatContainer,
          globalShadowBox,
          { width: 30, height: 30 },
        ]}
      >
        <Seat color={-1}></Seat>
      </View>
    );
  }

  const {refetch} = useQuery('myBookings', ()=>
         API.get('/bookings/user/userID').then((res)=>{
            return res.data
         })
    )

  const { navigate } = useNavigation<nav>();
  const confirmbooking = async () => {
  const response =  await API.post("/bookings", {
      date: date,
      train: id,
      quantity: parseInt(quantity),
      price: price * parseInt(quantity),
      status: "active",
    });

    refetch()
    Linking.openURL(`https://lanka-rail-payment.vercel.app?price=${response?.data?.price}&id=${response?.data?._id}`)
    navigate('Home')
  };

  const openModal = () =>{
    setModalVisible(true)
  }

  const closeModal = () =>{
    setModalVisible(false)
  }


  return (
    <DefaultLayout>
      <ScrollView>
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
              Rs. {price}
            </Text>
            <View flexDirection={"row"} justifyContent={"space-between"} mt={3}>
              <Text mt={"auto"} mb={"auto"} fontSize={20}>
                {start}
              </Text>
              <Image
                width={"50px"}
                height={"40px"}
                source={require("../../assets/Images/train1.jpg")}
                alt={"image"}
              />
              <Text marginTop={"auto"} marginBottom={"auto"} fontSize={20}>
                {end}
              </Text>
            </View>
            <View
              flexDirection={"row"}
              justifyContent={"space-between"}
              mt={3}
              pl={30}
              pr={30}
            >
              {console.log(startTime, "start time")}
              <Text fontSize={"10px"}>
                {new Date(startTime * 1000).toLocaleTimeString()}
              </Text>
              <Text fontSize={"10px"}>
                {new Date(endTime * 1000).toLocaleTimeString()}
              </Text>
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
                    <View flexDirection={"row"} flexWrap={"wrap"} mb={"10%"}>
                      {console.log(bookingStatus)}
                      {availableSeats.map((x: JSX.Element) => x)}
                    </View>
                  </ScrollView>
                  <Input
                    type="text"
                    placeholder="quantity"
                    mt={'5%'}
                    mx={"10%"}
                    onChangeText={(e) => setQuantity(e)}
                  />
                 <Button onPress={openModal} mt={'2%'} mx={'10%'} mb={'2%'}>Opne in Maps</Button>
                  <Modal
                    isOpen={modalVisible}
                    onClose={closeModal}
                    initialFocusRef={initialRef}
                    finalFocusRef={finalRef}
                    justifyContent="flex-end"
                    size="lg"
                    bottom={"2"}
                  >
                    <Modal.Content>
                      <Modal.CloseButton />
                      <Modal.Body>
                        <Box h={"380px"} w="100%">
                          <MapView
                            style={{ flex: 1 }}
                            provider={PROVIDER_GOOGLE}
                            showsUserLocation
                            minZoomLevel={12}
                            initialRegion={{
                              latitude: 	6.93548,
                              longitude:79.84868,
                              latitudeDelta: 6.93548,
                              longitudeDelta: 79.84868,
                            }}
                          >
                            <Marker
                              coordinate={{
                                latitude: 6.93548,
                                longitude: 79.84868,
                              }}
                              title={train}
    
                            />
                          </MapView>
                        </Box>
                      </Modal.Body>
                    </Modal.Content>
                  </Modal>
                  {/* Butons */}
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
      </ScrollView>
    </DefaultLayout>
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
