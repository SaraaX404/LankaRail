import { Box, Heading, ScrollView, Spinner, Text } from "native-base"
import React, { useEffect, useState } from 'react'
import { Booking, DefaultLayout } from "../../Components"
import {booking} from './home.types'
import API from "../../utils/API";
import MapView, { PROVIDER_GOOGLE } from "react-native-maps";
import { Marker } from "react-native-svg";
import { QueryClient, QueryClientProvider, useQuery } from 'react-query';


export default ()=>{

    const [bookings, setBookings] = useState<booking[]>([])
    const [loading, setLoading] = useState<boolean>(false)
    const [userName, setUserName] = useState<string>("")

    const {isLoading, error, data} = useQuery('myBookings', ()=>
         API.get('/bookings/user/userID').then((res)=>{
            return res.data
         })
    )

    


    useEffect(()=>{
        if(Array.isArray(data)){
            setBookings(data)
        }
    },[data])


    const fetchData = async ()=>{
        setLoading(true)
        
        const userRes = await API.get('/users/me')
        

        if(userRes?.data?.full_name){
            setUserName(userRes?.data?.full_name)
        }
        setLoading(false)
    }

    useEffect(()=>{
       fetchData()
    },[])

    if(loading){
        return(
            <Spinner/>
        )
    }





    return(
        <DefaultLayout>
            <ScrollView>
            <Box flex={1} backgroundColor={'#f5f5fa'}>
 
 <Box flexDirection={'column'} justifyContent={'center'} alignItems={'center'} backgroundColor={'#ffffff'}>
             <Text fontSize="18px" m="5%" mt={'12%'}>Home</Text>
         </Box>
         <Box flex={1} mx={'4%'} mt={'5%'} flexDirection={'column'}>
             <Text fontSize={'28px'}>Hello, {userName}</Text>
             <Heading mt={'5%'} ml={'32%'}>{new Date().toLocaleDateString()}</Heading>
         </Box>
         <Box backgroundColor={'#ffffff'} flex={5}>
         <Box flex={1}  mx={'4%'} mt={'5%'}>
             <Text fontSize={'28px'}>My Bookings</Text>
             {bookings?.map((x:booking)=>(
                 <Booking key={x?._id} booking={false} paid={true} start={x?.train?.startStation?.name} startTime={x?.train?.startTime} endTime={x?.train?.endTime} end={x?.train?.endStation?.name} train={x?.train?.name} />
             ))}
         </Box>

         </Box>
 </Box>
            </ScrollView>
  
           
       
        </DefaultLayout>
     
    )
}