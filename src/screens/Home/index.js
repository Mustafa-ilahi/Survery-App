import React from 'react'
import { ImageBackground, SafeAreaView, View } from 'react-native'
import { styles } from './style'
import images from '../../services/utilities/images'

export default function Home() {
  return (
   <SafeAreaView>
    <View style={styles.container}>
        <ImageBackground
        source={images.homeTopBg}
        style={styles.topBgImage}
        >

        </ImageBackground>
    </View>
   </SafeAreaView>
  )
}
