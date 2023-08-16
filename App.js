import React from 'react'
import { SafeAreaView,View, Text} from 'react-native'
import LandingPage from './src/screens/LandingPage'
import SignIn from './src/screens/SignIn'

export default function App() {
  return (
    <SafeAreaView>
      {/* <LandingPage /> */}
      <SignIn />
    </SafeAreaView>
  )
}
