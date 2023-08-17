import React, {useState} from 'react';
import {
  Text,
  View,
  SafeAreaView,
  Image,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import {styles} from './styles';
import images from '../../services/utilities/images';

export default function Question2() {
  const [option1, setOption1] = useState(false);
  const [option2, setOption2] = useState(false);
  const [option3, setOption3] = useState(false);
  const [option4, setOption4] = useState(false);
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity>
            <Image source={images.leftArrow} style={styles.arrowImg} />
          </TouchableOpacity>
          <Text style={styles.arrowText}>
            <Text style={styles.Text2}>2 </Text>
            of 10
          </Text>
          <TouchableOpacity>
            <Image source={images.rightArrow} style={styles.arrowImg} />
          </TouchableOpacity>
        </View>
        <View style={styles.progressBarView}>
          <Image source={images.progressBar} style={styles.progressBarImg} />
        </View>
        <View style={styles.questionView}>
          <Text style={styles.questionText}>
            Which one of the following is the greatest circle?
          </Text>
        </View>
        <View style={styles.bottomView}>
          <View style={styles.optionsViewParent}>
            <TouchableOpacity
              onPress={() => {
                setOption1(true);
                setOption2(false);
                setOption3(false);
                setOption4(false);
              }}>
              <View
                style={option1 ? styles.optionViewFocused : styles.optionView}>
                <Text
                  style={
                    option1 ? styles.optionTextFocused : styles.optionText
                  }>
                  Arctic Circle
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                setOption1(false);
                setOption2(true);
                setOption3(false);
                setOption4(false);
              }}>
              <View
                style={option2 ? styles.optionViewFocused : styles.optionView}>
                <Text
                  style={
                    option2 ? styles.optionTextFocused : styles.optionText
                  }>
                  Equator
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                setOption1(false);
                setOption2(false);
                setOption3(true);
                setOption4(false);
              }}>
              <View
                style={option3 ? styles.optionViewFocused : styles.optionView}>
                <Text
                  style={
                    option3 ? styles.optionTextFocused : styles.optionText
                  }>
                  Tropic of Cancer
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                setOption1(false);
                setOption2(false);
                setOption3(false);
                setOption4(true);
              }}>
              <View
                style={option4 ? styles.optionViewFocused : styles.optionView}>
                <Text
                  style={
                    option4 ? styles.optionTextFocused : styles.optionText
                  }>
                  Tropic of Capricon
                </Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.inputTop}>
            <TouchableOpacity>
              <ImageBackground
                source={images.buttonBg2}
                style={styles.signInBtn}>
                <Text style={styles.btnText}>Next</Text>
              </ImageBackground>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}
