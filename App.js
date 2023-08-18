import React from 'react';
import {SafeAreaView, View, Text} from 'react-native';
import LandingPage from './src/screens/LandingPage';
import SignIn from './src/screens/SignIn';
import Question2 from './src/screens/Question2';
import SurveyCompleted from './src/screens/SurveyCompleted';
import Home from './src/screens/Home';

import SignUp from './src/screens/SignUp';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import OTP from './src/screens/OTP';
import GridGame from './src/screens/GridGame';
import GridGameResult from './src/screens/GridGameResult';
import GridGame6x6 from './src/screens/GridGame6x6';
import GridGame9x9 from './src/screens/GridGame9x9';
import Pricing from './src/screens/Pricing';
import Games from './src/screens/Games';
import MainNavigator from './src/services/config/navigation';
import Survey from './src/screens/Survey';

export default function App() {
  return (
    <SafeAreaProvider>
      {/* <LandingPage /> */}
      {/* <SignIn /> */}
      {/* <Question2/> */}
      {/* <SurveyCompleted/> */}
      {/* <Home/> */}
      {/* <SignUp /> */}
      {/* <OTP /> */}
      {/* <GridGame /> */}
      {/* <GridGameResult /> */}
      {/* <GridGame6x6 /> */}
      {/* <GridGame9x9 /> */}
      {/* <Pricing /> */}
      {/* <Games /> */}
      {/* <MainNavigator /> */}
      <Survey />
    </SafeAreaProvider>
  );
}
