import { View, Text,Box,Input,Button, Pressable, } from 'native-base'
import React from 'react'
import { DefaultLayout } from '../../Components'
import { nav } from '../../Models'
import { useNavigation } from '@react-navigation/native'
import { useKeyboardVisible } from '../../hooks'
import { SafeAreaView } from 'react-native'
import { JourneyDetails } from '../JourneyDetails'

export default () => {
  const {navigate} = useNavigation<nav>()

    const keyBoardVisible = useKeyboardVisible()


    const proceedtoConfirmation =()=>{
       navigate('JourneyDetails')
    } 

  return (
    <DefaultLayout>
      <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: "white",
        padding: 10,
        alignItems: "center",
      }}
    >
        <View>
        <Box flex={1}>
        <Box flex={keyBoardVisible?1:3} flexDirection={'row'} alignItems={'center'} justifyContent={'center'} >
        <Text fontSize={'24px'}>Contact Details</Text>
        </Box>
        <Box flex={7} mx={'3%'} borderColor={"#003580"}>
            <Input  placeholder='Firstname' h="40px"/>
            <Input  placeholder='Lastname' h="40px" mt='15'  width= '350'/>
            <Input placeholder='Email' h="40px" mt='15'/>
            <Input placeholder='NIC' h="40px" mt='15'/>
            <Pressable
         onPress={proceedtoConfirmation}
         width={300}
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
           Proceed To Confirmation
         </Text>
       </Pressable>
        
        </Box>
        
    </Box>
    
        </View>
        </SafeAreaView>
    </DefaultLayout>
  )
}

 