import { Box, Text ,Button, Input} from 'native-base'
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
        <Box flex={keyBoardVisible?1:3} flexDirection={'row'} alignItems={'center'} justifyContent={'center'} >
        <Text fontSize={'24px'}>Welcome to Lanka Rail</Text>
        </Box>
        <Box flex={7} mx={'3%'}>
            <Input placeholder='fullname' h="40px"/>
            <Input placeholder='address' h="40px" mt='2%'/>
            <Input placeholder='telephone' h="40px" mt='2%'/>
            <Input placeholder='email' h="40px" mt='2%'/>
            <Input placeholder='password' h="40px" mt='2%'/>
        <Button onPress={navigateSearchtrain} h={'50px'} mt={'2%'}>
           Sign Up
        </Button>
        </Box>
        
    </Box>
    )
    
}