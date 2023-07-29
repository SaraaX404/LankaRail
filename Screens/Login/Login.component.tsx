import { Box, Text, Button, Input, Pressable } from "native-base";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { nav } from "../../Models";
import { useKeyboardVisible } from "../../hooks";
import { useForm, Controller } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import API from "../../utils/API";

export default () => {
  const { navigate } = useNavigation<nav>();
  const [authErrors, setAuthErrors] = useState<null | string>(null)
  const [loading, setLoading] = useState<boolean>(false)

  const validationSchema = yup.object().shape({
    email: yup.string().email("Invalid email").required("Email is required"),
    password: yup.string().required("Password is required"),
  });

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const keyBoardVisible = useKeyboardVisible();

  const handleLogin = async(data)=>{
    setAuthErrors(null)
    try {
      setLoading(true)
      await API.post('/auth/login', data)
      setLoading(false)
      navigate("Home");
    } catch (error) {
      setLoading(false)
      setAuthErrors('username or password is incorrect')
    }
   
  }

  return (
    <Box flex={1}>
      <Box
        flex={keyBoardVisible ? 2 : 6}
        flexDirection={"row"}
        alignItems={"center"}
        justifyContent={"center"}
      >
        <Text fontSize={"24px"}>Welcome back to Lanka Rail</Text>
      </Box>
      <Box flex={5} mx={"3%"}>
        <Controller
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <Input
              placeholder="Email"
              h="40px"
              mt="2%"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
            />
          )}
          name="email"
          defaultValue=""
        />
        {errors.email && (
            <Text style={{ color: "red" }}>{errors.email.message}</Text>
          )}
        <Controller
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <Input
              placeholder="Password"
              h="40px"
              type="password"
              mt="2%"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
            />
          )}
          name="password"
          defaultValue=""
        />
        {errors.password && (
            <Text style={{ color: "red" }}>{errors.password.message}</Text>
          )}
          {authErrors && (
            <Text style={{ color: "red" }}>{authErrors}</Text>
          )}

        <Button
          onPress={handleSubmit(handleLogin)}
          isLoading={loading}
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
        </Button>
      </Box>
    </Box>
  );
};
