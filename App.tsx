import React from 'react'
import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { NativeBaseProvider } from 'native-base';
import { createStackNavigator } from '@react-navigation/stack';
import {LoginScreen, SplashScreen, RegisterScreen, SearchTrain} from './Screens'
import {NavigationContainer} from '@react-navigation/native';
import {LogBox} from 'react-native'
import {TrainSearchResult} from './Screens/TrainSearchResult';
import { BookingSeats } from './Screens/BookingSeats';
const Stack = createStackNavigator();

LogBox.ignoreLogs([
  'In React 18, SSRProvider is not necessary and is a noop. You can remove it from your app.'
])

export default function App() {
  return (
   <NativeBaseProvider>
    <NavigationContainer>
    <Stack.Navigator initialRouteName='Splash'>
      <Stack.Screen name="Splash" component={SplashScreen}/>
      <Stack.Screen name="Login" component={LoginScreen}/>
      <Stack.Screen name="Register" component={RegisterScreen}/>
      <Stack.Screen name="SearchTrain" component={SearchTrain}/>
      <Stack.Screen name="TrainSearchResult" component={TrainSearchResult}/>
      <Stack.Screen name="BookingSeats" component={BookingSeats}/>
    </Stack.Navigator>
    </NavigationContainer>
    
   </NativeBaseProvider>
  );
}


