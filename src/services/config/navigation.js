import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import LandingPage from '../../screens/LandingPage';
import SignIn from '../../screens/SignIn';
import CrossBtn from '../../components/CrossBtn';
import SignUp from '../../screens/SignUp';
import OTP from '../../screens/OTP';
import Home from '../../screens/Home';
import Pricing from '../../screens/Pricing';
import Games from '../../screens/Games';
import images from '../utilities/images';
import {Image, View, StyleSheet} from 'react-native';
import {colors} from '../utilities/colors';
import {sizes} from '../utilities/sizes';
import Survey from '../../screens/Survey';
import GridGame from '../../screens/GridGame';
import GridGame6x6 from '../../screens/GridGame6x6';
import GridGame9x9 from '../../screens/GridGame9x9';
import Question2 from '../../screens/Question2';
import SurveyCompleted from '../../screens/SurveyCompleted';
import GridGameResult from '../../screens/GridGameResult';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export default function MainNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="LandingPage" component={LandingPage} />
        <Stack.Screen name="SignIn" component={SignIn} />
        <Stack.Screen name="Tabs" component={MyTabs} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="OTP" component={OTP} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="GridGame" component={GridGame} />
        <Stack.Screen name="GridGame6x6" component={GridGame6x6} />
        <Stack.Screen name="GridGame9x9" component={GridGame9x9} />
        <Stack.Screen name="Question2" component={Question2} />
        <Stack.Screen name="SurveyCompleted" component={SurveyCompleted} />
        <Stack.Screen name="Games" component={Games} />
        <Stack.Screen name="Pricing" component={Pricing} />
        <Stack.Screen name="GridGameResult" component={GridGameResult} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
const MyTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          position: 'absolute',
          bottom: sizes.screenHeight * 0.02,
          left: sizes.screenWidth * 0.04,
          right: sizes.screenWidth * 0.04,
          borderRadius: 30,
          height: sizes.screenHeight * 0.07,
          borderTopWidth: 0,

          shadowColor: '#305430',
          shadowOffset: {
            width: 0,
            height: 3,
          },
          shadowOpacity: 0.18,
          shadowRadius: 4.59,
          elevation: 5,
        },
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({focused}) => (
            <View>
              <Image
                source={images.bottomIcon1}
                style={{
                  width: sizes.screenWidth * 0.06,
                  height: sizes.screenHeight * 0.031,
                  tintColor: focused ? colors.appTextColor1 : colors.gray,
                }}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Games"
        component={Games}
        options={{
          tabBarIcon: ({focused}) => (
            <View>
              <Image
                source={images.bottomIcon2}
                style={{
                  width: sizes.screenWidth * 0.06,
                  height: sizes.screenHeight * 0.031,
                  tintColor: focused ? colors.appTextColor1 : colors.gray,
                }}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Survey"
        component={Survey}
        options={{
          tabBarIcon: ({focused}) => (
            <View>
              <Image
                source={images.bottomIcon3}
                style={{
                  width: sizes.screenWidth * 0.2,
                  height: sizes.screenHeight * 0.09,
                  position: 'relative',
                  bottom: 32,
                }}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Pricing"
        component={Pricing}
        options={{
          tabBarIcon: ({focused}) => (
            <View>
              <Image
                source={images.bottomIcon4}
                style={{
                  width: sizes.screenWidth * 0.06,
                  height: sizes.screenHeight * 0.031,
                  tintColor: focused ? colors.appTextColor1 : colors.gray,
                }}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Home5"
        component={Home}
        options={{
          tabBarIcon: ({focused}) => (
            <View>
              <Image
                source={images.bottomIcon5}
                style={{
                  width: sizes.screenWidth * 0.06,
                  height: sizes.screenHeight * 0.031,
                  tintColor: focused ? colors.appTextColor1 : colors.gray,
                }}
              />
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};
