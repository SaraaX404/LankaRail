import { Spinner, View } from 'native-base'
import React, { useEffect, useState } from 'react'
import { DefaultLayout } from '../../Components'
import { SafeAreaView,StyleSheet } from "react-native";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {Linking} from 'react-native'
 

import {
    Avatar,
    Title,
    Caption,
    Text,
    TouchableRipple,
  } from 'react-native-paper';
import EditProfileComponent from '../EditProfile/EditProfile.component';
import { useNavigation } from '@react-navigation/native';
import { nav } from '../../Models';
import { useQuery } from 'react-query';
import API from '../../utils/API';
export default () => {

  type User  = {
    full_name: string,
    gender: string,
    email: string,
    mobile: string,
    address: string,
    loyality: number,
  
  }
  const {navigate} = useNavigation<nav>()
  const [userData, setUserData] = useState<User | null>(null)

  

  const {data, isLoading, error} = useQuery('userData', ()=>
  API.get('/users/me').then((res)=>{
     return res.data
  })
  )

  useEffect(()=>{
    if(data){
      setUserData(data)
    }
  },[data])


  const EditProfile =()=>{
     navigate('EditProfile', {full_name:userData?.full_name, mobile:userData?.mobile, address:userData?.address})
  } 
  const logout =()=>{
    navigate('Login')
 } 

 const navigateHome = ()=>{
   navigate('Home')
 }


 const makeCall = ()=>{
  Linking.openURL(`tel:2323232333`)
 }

 if(isLoading == true){
  return(
    <Spinner/>
  )
 }

  return (
    <DefaultLayout>
    <SafeAreaView style={styles.container}>

      <View style={styles.userInfoSection}>
        <View style={{flexDirection: 'row', marginTop: 15}}>
          <Avatar.Image 
            source={require("../../assets/Images/user.png")}
            size={80}
          />
        
          
          <View style={{marginLeft: 20}}>
            <Title style={[styles.title, {
              marginTop:15,
              marginBottom: 5,
            }]}>{userData?.full_name}</Title>
            
          </View>
        </View>
      </View>

      <View style={styles.userInfoSection}>
        <View style={styles.row}>
          <Icon name="map-marker-radius" color="#777777" size={20}/>
          <Text style={{color:"#777777", marginLeft: 20}}>{userData?.address}</Text>
        </View>
        <View style={styles.row}>
          <Icon name="phone" color="#777777" size={20}/>
          <Text style={{color:"#777777", marginLeft: 20}}>{userData?.mobile}</Text>
        </View>
        <View style={styles.row}>
          <Icon name="email" color="#777777" size={20}/>
          <Text style={{color:"#777777", marginLeft: 20}}>{userData?.email}</Text>
        </View>
      </View>

      <View style={styles.infoBoxWrapper}>
          <View style={[styles.infoBox, {
            borderRightColor: '#dddddd',
            
            borderRightWidth: 1
          }]}>
            <Title>{userData?.loyality}</Title>
            <Caption>Loyalty Points</Caption>
          </View>
          <View style={styles.infoBox}>
            <Title >{userData?.loyality}</Title>
            <Caption>Bookings</Caption>
          </View>
      </View>

      <View style={styles.menuWrapper}>        
        <TouchableRipple onPress={navigateHome}>
          <View style={styles.menuItem}>
            <Icon name="train" color="#003580" size={25}/>
            <Text style={styles.menuItemText}>Track Train</Text>
          </View>
        </TouchableRipple>
        <TouchableRipple onPress={makeCall}  >
          <View style={styles.menuItem}>
            <Icon name="phone" color="#003580" size={25}/>
            <Text style={styles.menuItemText}>Contact Us</Text>
          </View>
        </TouchableRipple>
        <TouchableRipple onPress={() => {}}>
          <View style={styles.menuItem}>
            <Icon name="account-check-outline" color="#003580" size={25}/>
            <Text style={styles.menuItemText}>Customer Support</Text>
          </View>
        </TouchableRipple>
         <TouchableRipple onPress={EditProfile}>
          <View style={styles.menuItem}>
            <Icon name="book" color="#003580" size={25}/>
            <Text style={styles.menuItemText}>Update Profile</Text>
          </View>
        </TouchableRipple> 
        <TouchableRipple onPress={logout}>
          <View style={styles.menuItem}>
            <Icon name="logout" color="#003580" size={25}/>
            <Text style={styles.menuItemText}>Log Out</Text>
          </View>
        </TouchableRipple> 
      </View>
    </SafeAreaView>
    </DefaultLayout>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop:50,
    },
    userInfoSection: {
      paddingHorizontal: 30,
      marginBottom: 25,
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
    },
    caption: {
      fontSize: 14,
      lineHeight: 14,
      fontWeight: '500',
    },
    row: {
      flexDirection: 'row',
      marginBottom: 10,
    },
    infoBoxWrapper: {
      borderBottomColor: '#dddddd',
      borderBottomWidth: 1,
      borderTopColor: '#dddddd',
      borderTopWidth: 1,
      flexDirection: 'row',
      height: 100,
    },
    infoBox: {
      width: '50%',
      alignItems: 'center',
      justifyContent: 'center',
    },
    menuWrapper: {
      marginTop: 10,
    },
    menuItem: {
      flexDirection: 'row',
      paddingVertical: 15,
      paddingHorizontal: 30,
    },
    menuItemText: {
      color: '#777777',
      marginLeft: 20,
      fontWeight: '600',
      fontSize: 16,
      lineHeight: 26,
    },
  });