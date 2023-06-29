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
        <Box>
        <Button onPress={navigateLogin}>
             Login
        </Button>
        <Button onPress={navigateRegister}>
             Get Started
        </Button>
     </Box>
    )
   
}
