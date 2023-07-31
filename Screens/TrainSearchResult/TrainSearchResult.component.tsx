import { Text, View, Image, Box,Heading } from "native-base";
import { TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import {
  GlobalBackgroundColors,
  GlobalBackgroundTextColors,
  globalShadowBox,
} from "../../Styles/global";
import { useNavigation } from "@react-navigation/native";
import { nav } from "../../Models";
import { Booking, DefaultLayout } from "../../Components";
import { RouteProp } from "@react-navigation/native";
import API from "../../utils/API";
import { useQuery } from "react-query";

type TrainResult = {
 "_id": string, "bookingStatus": {"availableSeats": number, "bookingSeats": number, "numberOfSeats": number}, "endStation": {name:string}, "endTime": number, "name": string, "numberOfSeats": number, "price": number, "startStation": {name:string}, "startTime": number, "status": string
}

type RouterParams = {
  TrainSearchResult: {
      start:string,
      end:string,
      date:string,
      startName:string,
      endName:string
    };
  };
  
type AppProps = {
    route: RouteProp<RouterParams, 'TrainSearchResult'>;
  };

const TrainSearchResult = ({route}:AppProps) => {
  const [result, setResult] = useState<TrainResult[]>([])
  const {
    params: {start, end, date, startName, endName},
  } = route;



  const {data, isLoading, error} = useQuery('bookingHistory', ()=>
  API.get(`/trains?startStation=${start}&endStation=${end}&date=${date}`).then((res)=>{
     return res.data
  })
  )

  useEffect(()=>console.log(result),[result])

  useEffect(()=>{
     if(Array.isArray(data)){
      setResult(data)
     }
  },[
    data
  ])

 

  return (
    <DefaultLayout>
  <View flex={1}>
      <Box flex={1} backgroundColor={'#f5f5fa'} flexDirection={'row'} alignItems={'center'} justifyContent={'center'} mt={'9%'}>
      <Text fontSize="18px" >Results</Text>
  </Box>
      <Box flex={2} backgroundColor={'#ffffff'}>
        <Box flexDirection={'column'} alignItems={'center'} justifyContent={'center'}>
        <Heading mt={'5%'}>{startName} - {endName}</Heading>
        <Heading mt={'5%'}>{date}</Heading>
        </Box>
      </Box>
      <Box flex={10} backgroundColor={'#f5f5fa'}>
        {result&&result.map((x:TrainResult)=>(
            <Booking id={x?._id} end={x?.endStation?.name} price={x?.price} start={x?.startStation?.name} endTime={x?.endTime} startTime={x?.startTime} booking={true} train={x?.name} key={x?._id} bookingStatus={x?.bookingStatus} date={date}/>
        ))}
      </Box>
     
    </View>
    </DefaultLayout>
  
  );
};

export default TrainSearchResult;
