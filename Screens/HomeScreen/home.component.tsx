import { Box, Heading, Text } from "native-base"
import React from 'react'
import { Booking, DefaultLayout } from "../../Components"



export default ()=>{
    return(
        <DefaultLayout>
   <Box flex={1} backgroundColor={'#f5f5fa'}>
 
    <Box flexDirection={'column'} justifyContent={'center'} alignItems={'center'} backgroundColor={'#ffffff'}>
                <Text fontSize="18px" m="5%" mt={'12%'}>Home</Text>
            </Box>
            <Box flex={1} mx={'4%'} mt={'5%'} flexDirection={'column'}>
                <Text fontSize={'28px'}>Hello, Saraa</Text>
                <Heading mt={'5%'} ml={'32%'}>Aug 05 2023</Heading>
            </Box>
            <Box backgroundColor={'#ffffff'} flex={5}>
            <Box flex={1}  mx={'4%'} mt={'5%'}>
                <Text fontSize={'28px'}>My Bookings</Text>
                <Booking booking={false} paid={true}/>
                <Booking booking={false} paid={false}/>
            </Box>
            </Box>
           
    </Box>
           
       
        </DefaultLayout>
     
    )
}