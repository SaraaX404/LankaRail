import { Box, Text ,Button, Input,Pressable} from 'native-base'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import {nav} from '../../Models'
import { useKeyboardVisible } from '../../hooks'
 

export default ()=>{
    const {navigate} = useNavigation<nav>()

    const keyBoardVisible = useKeyboardVisible()


    const navigateSearchtrain =()=>{
       navigate('SearchTrain')
    } 
    return(
    <Box flex={1}>
        <Box flex={keyBoardVisible?2:6} flexDirection={'row'} alignItems={'center'} justifyContent={'center'} >
        <Text fontSize={'24px'}>Welcome back to Lanka Rail</Text>
        </Box>
        <Box flex={5} mx={'3%'}>
            <Input placeholder='username' h="40px"/>
            <Input placeholder='password' h="40px" mt='2%'/>
            <Pressable
         onPress={navigateSearchtrain}
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
         Login
         </Text>
       </Pressable>
        </Box>
        
    </Box>
    )
    
}