import { Box, Button } from 'native-base'
import React, { useEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import {nav} from '../../Models'
import API from '../../utils/API'


export default ()=>{
    const {navigate} = useNavigation<nav>()

    const fetchData = async()=>{
       try{
        const res = await API.get('/users/me')
        if(res?.data?.full_name){
 
         navigate('Home')
 
        }


       }catch(e){
        console.log(e)
       } 
       
    }

    useEffect(()=>{
        fetchData()
    },[])

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
