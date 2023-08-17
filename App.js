import React from 'react'
import { SafeAreaView,View, Text} from 'react-native'
import LandingPage from './src/screens/LandingPage'
import SignIn from './src/screens/SignIn'
import SignUp from './src/screens/SignUp'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import OTP from './src/screens/OTP'

export default function App() {
  return (
    <SafeAreaProvider>
      {/* <LandingPage /> */}
      {/* <SignIn /> */}
      {/* <SignUp /> */}
      <OTP />
    </SafeAreaProvider>
  )
}
