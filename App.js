import React from 'react'
import { SafeAreaView,View, Text} from 'react-native'
import LandingPage from './src/screens/LandingPage'
import SignIn from './src/screens/SignIn'
import Question2 from './src/screens/Question2'
import SurveyCompleted from './src/screens/SurveyCompleted'


export default function App() {
  return (
    <SafeAreaView>
      {/* <LandingPage /> */}
      {/* <SignIn /> */}
      {/* <Question2/> */}
      <SurveyCompleted/>
    </SafeAreaView>
  )
}
