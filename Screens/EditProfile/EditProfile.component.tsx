import { Box, Text, Button, Input, View, Image, Pressable } from "native-base";
import React, { useEffect } from "react";
import { RouteProp, useNavigation } from "@react-navigation/native";
import { nav } from "../../Models";
import { useKeyboardVisible } from "../../hooks";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { useForm, Controller } from "react-hook-form";
import API from "../../utils/API";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useQuery } from "react-query";


type EditParams = {
    full_name:string;
    address:string;
    mobile:string;
}

type RouterParams = {
  editProfile:EditParams
}

type AppProps = {
  route: RouteProp<RouterParams, "editProfile">;
};

export default ({ route }: AppProps) => {
  const validationSchema = yup.object().shape({
    full_name: yup.string().required("Full Name is required"),
    address: yup.string().required("Address is required"),
    mobile: yup.string().required("Mobile is required")
  });
  const {
    params: { full_name, mobile, address },
  } = route;


  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });
  const { navigate } = useNavigation<nav>();
  const {refetch, error} = useQuery('userData', ()=>
    API.get('/users/me').then((res)=>{
       return res.data
    })
    )
  const onSubmit = async(values) =>{
    await API.post('/users/update', values)
    
    console.log(error)
    refetch()
    navigate('Settings')
    console.log(values)
  }



  useEffect(()=>{
    let defaultValue:EditParams = {full_name: "", mobile:"", address:""}

    if(full_name){
      defaultValue.full_name = full_name
    }

    if(mobile){
      defaultValue.mobile = mobile
    }

    if(address){
      defaultValue.address = address
    }

    reset({...defaultValue})

  }, [])

  const keyBoardVisible = useKeyboardVisible();
  return (
    <Box flex={1}>
      <Box
        flex={keyBoardVisible ? 1 : 3}
        flexDirection={"row"}
        alignItems={"center"}
        justifyContent={"center"}
      >
        <View
          justifyContent={"center"}
          alignItems={"center"}
          marginTop={50}
          borderColor={"#003580"}
        >
          <Image
            width={100}
            height={100}
            source={require("../../assets/Images/user1.png")}
            alt="image"
          />
          <Text color={"#003580"} fontSize={17} fontWeight={"700"}>
            Update Profile
          </Text>
        </View>
      </Box>
      <Box flex={7} mx={"3%"} mt={'2%'}>
        <View mt={'2%'}>
        <Controller
            control={control}
            render={({ field: { onChange, onBlur, value } }) => (
              <Input
                placeholder="fullname"
                h="40px"
                mt="2%"
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
              />
            )}
            name="full_name"
            defaultValue={""}
          />
          {errors.full_name && (
            <Text style={{ color: "red" }}>{errors.full_name.message}</Text>
          )}
        </View>
        <View mt={'2%'}>
        <Controller
            control={control}
            render={({ field: { onChange, onBlur, value } }) => (
              <Input
                placeholder="address"
                h="40px"
                mt="2%"
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
              />
            )}
            name="address"
            defaultValue={""}
          />
          {errors.address && (
            <Text style={{ color: "red" }}>{errors.address.message}</Text>
          )}
        </View>
        <View mt={'2%'}>
        <Controller
            control={control}
            render={({ field: { onChange, onBlur, value } }) => (
              <Input
                placeholder="telephone"
                h="40px"
                mt="2%"
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
              />
            )}
            name="mobile"
            defaultValue={""}
          />
          {errors.mobile && (
            <Text style={{ color: "red" }}>{errors.mobile.message}</Text>
          )}
        </View>

        <Button
          width={200}
          onPress={handleSubmit(onSubmit)}
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
            Update
          </Text>
        </Button>
      </Box>
    </Box>
  );
};
