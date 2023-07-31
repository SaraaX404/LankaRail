import React from 'react'
import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { NativeBaseProvider } from 'native-base';
import { createStackNavigator } from '@react-navigation/stack';
import {LoginScreen, SplashScreen, RegisterScreen, SearchTrain, HomeScreen} from './Screens'
import {NavigationContainer} from '@react-navigation/native';
import {LogBox, Settings} from 'react-native'
import {TrainSearchResult} from './Screens/TrainSearchResult';
import { BookingSeats } from './Screens/BookingSeats';
import { ConfirmBooking } from './Screens/ConfrmBooking';
import { JourneyDetails } from './Screens/JourneyDetails';
import SettingsComponent from './Screens/Settings/Settings.component';
import EditProfileComponent from './Screens/EditProfile/EditProfile.component';
import { QueryClient, QueryClientProvider } from 'react-query';
const Stack = createStackNavigator();
const queryClient = new QueryClient();

LogBox.ignoreLogs([
  'In React 18, SSRProvider is not necessary and is a noop. You can remove it from your app.',"Require cycles are allowed, but can result in uninitialized values. Consider refactoring to remove the need for a cycle.","No native splash screen registered for given view controller. Call 'SplashScreen.show' for given view controller first.","Sending `onAnimatedValueUpdate` with no listeners registered."
])

export default function App() {
  return (
   <NativeBaseProvider>
    <NavigationContainer>
      <QueryClientProvider client={queryClient}>
      <Stack.Navigator initialRouteName='Splash'>
      <Stack.Screen name="Splash" component={SplashScreen}  options={{
              headerShown: false,
            }}/>
      <Stack.Screen name="Login" component={LoginScreen} options={{
              headerShown: false,
            }}/>
      <Stack.Screen name="Register" component={RegisterScreen}  options={{
              headerShown: false,
            }}/>
      <Stack.Screen name="Home" component={HomeScreen}  options={{
              headerShown: false,
            }}/>
      <Stack.Screen name="SearchTrain" component={SearchTrain}  options={{
              headerShown: false,
            }}/>
      <Stack.Screen name="TrainSearchResult" component={TrainSearchResult}  options={{
              headerShown: false,
            }}/>
      <Stack.Screen name="BookingSeats" component={BookingSeats}  options={{
              headerShown: false,
            }}/>
              <Stack.Screen name="confirmbooking" component={ConfirmBooking}  options={{
                headerShown: false,
              }}/>
              <Stack.Screen name="JourneyDetails" component={JourneyDetails}  options={{
                headerShown: false,
              }}/>
              <Stack.Screen name="Settings" component={SettingsComponent}  options={{
                headerShown: false,
              }}/>
              <Stack.Screen name="EditProfile" component={EditProfileComponent}  options={{
                headerShown: false,
              }}/>
    </Stack.Navigator>
      </QueryClientProvider>
    
    </NavigationContainer>
    
   </NativeBaseProvider>
  );
}


