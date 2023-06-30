import { Box, Text ,Button} from 'native-base'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import {nav} from '../../Models'
 

export default ()=>{
    const {navigate} = useNavigation<nav>()

    const navigateSearchtrain =()=>{
       navigate('SearchTrain')
    } 
    return(
    <Box>
        <Text fontSize="18px">
            LoginScreen
        </Text>
        <Button onPress={navigateSearchtrain}>
           Login
        </Button>
    </Box>
    )
    
}