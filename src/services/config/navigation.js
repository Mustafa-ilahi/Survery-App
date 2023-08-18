import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LandingPage from '../../screens/LandingPage';
import SignIn from '../../screens/SignIn';
import CrossBtn from '../../components/CrossBtn';
import SignUp from '../../screens/SignUp';
import OTP from '../../screens/OTP';
import Home from '../../screens/Home';

const Stack = createNativeStackNavigator();

export default function MainNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="LandingPage" component={LandingPage} />
        <Stack.Screen name="SignIn" component={SignIn} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="OTP" component={OTP} />
        <Stack.Screen name="Home" component={Home} />
       
      </Stack.Navigator>
    </NavigationContainer>
  );
}