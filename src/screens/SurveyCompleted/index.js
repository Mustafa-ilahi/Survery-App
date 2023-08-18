import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import {styles} from './style';
import images from '../../services/utilities/images';

export default function SurveyCompleted({navigation}) {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View style={styles.innerContainer}>
          <View style={styles.textViewParent}>
            <Text style={styles.text1}>You just completed the survey!</Text>
            <Text style={styles.text2}>
              1000 points have been added to your wallet
            </Text>
          </View>
          <View style={styles.buttonView}>
            <View>
              <TouchableOpacity>
                <ImageBackground
                  source={images.buttonBg3}
                  style={styles.nextButton}>
                  <Text style={styles.nextText}>Next Survey</Text>
                </ImageBackground>
              </TouchableOpacity>
            </View>
            <View>
              <TouchableOpacity onPress={()=>navigation.navigate("Games")}>
                <ImageBackground
                  source={images.buttonBg4}
                  style={styles.nextButton}>
                  <Text style={styles.playText}>Play Game</Text>
                </ImageBackground>
              </TouchableOpacity>
            </View>
          </View>
          <View></View>
        </View>
      </View>
    </SafeAreaView>
  );
}
