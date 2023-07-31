import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { GlobalBackgroundColors, globalShadowBox } from '../../Styles/global'
import { Box, Image, Modal, Text, View } from 'native-base'
import { useNavigation } from '@react-navigation/native'
import { nav } from '../../Models'
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps'



type PropType = {
    paid?:boolean,
    booking?:boolean,
    train?:string,
    start?:string,
    end?:string,
    startTime?:number,
    date?:string,
    endTime?:number,
    bookingStatus?: {"availableSeats": number, "bookingSeats": number, "numberOfSeats": number}
    price?:number,
    id?:string
}



export default ({paid,id, booking, train, start, end, startTime, endTime, bookingStatus, price,date}:PropType)=>{
  const [modalVisible, setModalVisible] = React.useState<boolean>(false)
  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);
  const openModal = () =>{
    setModalVisible(true)
  }
  
  const closeModal = () =>{
    setModalVisible(false)
  }
    const { navigate } = useNavigation<nav>();

    const navigateBookingSeats = () => {
      if(booking){
        navigate("BookingSeats", {start:start, end:end, startTime, endTime, bookingStatus, price, date,id, train});
      }else{
        openModal()
      }
      
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
          <Modal
                    isOpen={modalVisible}
                    onClose={closeModal}
                    initialFocusRef={initialRef}
                    finalFocusRef={finalRef}
                    justifyContent="flex-end"
                    size="lg"
                    
                  >
                    <Modal.Content>
                      <Modal.CloseButton />
                      <Modal.Body>
                      {/* <Text fontSize={'12px'} color="#ff0000">
                            Train delayed for 10 minutes 
                          </Text> */}
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
                              title={train || " "}
    
                            />
                          </MapView>
                        </Box>
                      </Modal.Body>
                    </Modal.Content>
                  </Modal>
    {/* Train Detail */}
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
        {train}
      </Text>
    {booking === true?(
 <Text
 fontWeight={"bold"}

 fontSize={25}
 color={GlobalBackgroundColors.primaryColor}
>
 {price} LKR
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
      <Text>{start}</Text>
      <Image
        style={{ width: 50, height: 40 }}
        source={require("../../assets/Images/train.png")}
        alt={"image"}
      />
      <Text>{end}</Text>
    </View>
    {/* Time Detail */}
    <View
      flexDirection="row"
      justifyContent="space-between"
      marginTop={"10px"}
    >
      <Text>{new Date(startTime || 0 * 1000).toLocaleTimeString()}</Text>
      <Text>{new Date(endTime || 0 * 1000).toLocaleTimeString()}</Text>
    </View>
  </TouchableOpacity>
    )
}