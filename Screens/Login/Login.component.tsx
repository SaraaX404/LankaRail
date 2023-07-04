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
        <Box flex={keyBoardVisible?2:6} flexDirection={'row'} alignItems={'center'} justifyContent={'center'} >
        <Text fontSize={'24px'}>Welcome back to Lanka Rail</Text>
        </Box>
        <Box flex={5} mx={'3%'}>
            <Input placeholder='username' h="40px"/>
            <Input placeholder='password' h="40px" mt='2%'/>
        <Button onPress={navigateSearchtrain} h={'50px'} mt={'2%'}>
           Login
        </Button>
        </Box>
        
    </Box>
    )
    
}