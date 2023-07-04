import { Box, Button } from 'native-base'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import {nav} from '../../Models'


export default ()=>{
    const {navigate} = useNavigation<nav>()

    const navigateLogin =()=>{
        navigate('Login')
    } 

    const navigateRegister =()=>{
        navigate('Register')
    } 

    return(
        <Box mt={'130%'}>
        <Button onPress={navigateLogin} h="50px" mx={'2%'}>
             Login
        </Button>
        <Button onPress={navigateRegister} mt={'2%'} h="50px" mx={'2%'} >
             Get Started
        </Button>
     </Box>
    )
   
}
