import { Box, Text ,Button, Input,View,Pressable, Select} from 'native-base'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import {nav} from '../../Models'
import { useKeyboardVisible } from '../../hooks'
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { useForm, Controller } from 'react-hook-form';


export default ()=>{
    const {navigate} = useNavigation<nav>()
    const { control, handleSubmit } = useForm();
    const [gender, setGender] = useState('Male')


    const onSelectGender = (g)=>{
      setGender(g)
    }

    const keyBoardVisible = useKeyboardVisible()
    const onSubmit = (data) => {
      // Handle the form data
      data.gender = gender
      console.log(data, "data");
    };
 
    const navigatelogin =()=>{
       navigate('Login')
    } 
    return(
    <Box flex={1}>
        <Box flex={keyBoardVisible?1:3} flexDirection={'row'} alignItems={'center'} justifyContent={'center'} >
        <Text fontSize={'24px'}>Welcome to Lanka Rail</Text>
        </Box>
        <Box flex={7} mx={'3%'}>
            <View>
              <Controller
                control={control}
                render={({field:{onChange, onBlur, value}})=>(
                  <Input placeholder='fullname' h="40px" h="40px" mt='2%' onBlur={onBlur} onChangeText={onChange} value={value}/>
                )}
                name='full_name'
                defaultValue={''}
              />
                
                 
            </View>
           
           <View>
           <Controller
                control={control}
                render={({field:{onChange, onBlur, value}})=>(
                  <Input placeholder='address' h="40px" h="40px" mt='2%' onBlur={onBlur} onChangeText={onChange} value={value}/>
                )}
                name='address'
                defaultValue={''}
              />
           </View>
           <View>
           <Controller
                control={control}
                render={({field:{onChange, onBlur, value}})=>(
                  <Input placeholder='telephone' h="40px" h="40px" mt='2%' onBlur={onBlur} onChangeText={onChange} value={value}/>
                )}
                name='telephone'
                defaultValue={''}
              />
           </View>
           <View>
           <Controller
                control={control}
                render={({field:{onChange, onBlur, value}})=>(
                  <Input placeholder='email' h="40px" h="40px" mt='2%' onBlur={onBlur} onChangeText={onChange} value={value}/>
                )}
                name='email'
                defaultValue={''}
              />
           </View>
            <View>
    
                
                  <Select placeholder='Gender' h="40px" mt='2%' defaultValue={gender} onValueChange={onSelectGender}>
                <Select.Item label="Male" value="Male"/>
                <Select.Item label="False" value="False"/>
                  </Select>
              
              
            </View>
           <View>
           <Input placeholder='password' h="40px" mt='2%' type='password'/>
           </View>
            
           
            
           
           <Pressable
         onPress={handleSubmit(onSubmit)}
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
          SignUp
         </Text>
       </Pressable>
        </Box>
        
    </Box>
    )
    
}