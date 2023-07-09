import { Box, Text, Button, Input, View, Pressable, Select } from "native-base";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { nav } from "../../Models";
import { useKeyboardVisible } from "../../hooks";
import { useForm, Controller } from "react-hook-form";
import API from "../../utils/API";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

export default () => {
  const { navigate } = useNavigation<nav>();
  const validationSchema = yup.object().shape({
    full_name: yup.string().required("Full Name is required"),
    address: yup.string().required("Address is required"),
    mobile: yup.string().required("Mobile is required"),
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
  const [gender, setGender] = useState("Male");
  const [loading, setLoading] = useState<boolean>(false)

  const onSelectGender = (g) => {
    setGender(g);
  };

  const keyBoardVisible = useKeyboardVisible();
  const onSubmit = async (data) => {
    // Handle the form data
    data.gender = gender;
    try {
      setLoading(true)
      await API.post("/auth/user", data);
      setLoading(false)
      navigate("Home");
    } catch (err) {
      setLoading(false)
      console.log(err);
    }
  };

  return (
    <Box flex={1}>
      <Box
        flex={keyBoardVisible ? 1 : 3}
        flexDirection={"row"}
        alignItems={"center"}
        justifyContent={"center"}
      >
        <Text fontSize={"24px"}>Welcome to Lanka Rail</Text>
      </Box>
      <Box flex={7} mx={"3%"}>
        <View>
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

        <View>
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
        <View>
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
        <View>
          <Controller
            control={control}
            render={({ field: { onChange, onBlur, value } }) => (
              <Input
                placeholder="email"
                h="40px"
                mt="2%"
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
              />
            )}
            name="email"
            defaultValue={""}
          />
          {errors.email && (
            <Text style={{ color: "red" }}>{errors.email.message}</Text>
          )}
        </View>
        <View>
          <Select
            placeholder="Gender"
            h="40px"
            mt="2%"
            defaultValue={gender}
            onValueChange={onSelectGender}
          >
            <Select.Item label="Male" value="Male" />
            <Select.Item label="False" value="False" />
          </Select>
        </View>
        <View>
          <Controller
            control={control}
            render={({ field: { onChange, onBlur, value } }) => (
              <Input
                placeholder="password"
                h="40px"
                mt="2%"
                type="password"
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
              />
            )}
            name="password"
            defaultValue={""}
          />
          {errors.password && (
            <Text style={{ color: "red" }}>{errors.password.message}</Text>
          )}
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
  );
};
