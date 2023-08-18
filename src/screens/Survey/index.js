import React, {useState} from 'react';
import {
  Image,
  ImageBackground,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {styles} from './style';
import Feather from 'react-native-vector-icons/Feather';
import {colors} from '../../services';
import images from '../../services/utilities/images';

export default function Survey() {
  const [grid3, setGrid3] = useState(true);
  const [grid9, setGrid9] = useState(false);
  const [grid6, setGrid6] = useState(false);
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View style={styles.padding}>
          <View style={[styles.row, styles.spaceBetween]}>
            <Text style={styles.heading}>Surveys</Text>
            <TouchableOpacity>
              <Feather name={'search'} color={colors.black} size={25} />
            </TouchableOpacity>
          </View>
        </View>
        <TouchableOpacity
          onPress={() => {
            setGrid3(true);
            setGrid9(false);
            setGrid6(false);
          }}>
          <View style={[styles.card, grid3 && styles.border]}>
            <View style={styles.row}>
              <Image source={images.grid3} style={styles.cardImg} />
              <Text style={styles.subhead}>3X3 Grid Game</Text>
            </View>
            <View style={styles.content}>
              <Text style={styles.cardText}>
                Play the grid game with your in-app currency and win big
                rewards! Check out the rewards here!
              </Text>
            </View>
            <View style={styles.inputTop}>
              <TouchableOpacity>
                <ImageBackground
                  source={images.buttonBg}
                  style={styles.signInBtn}>
                  <Text style={styles.btnText}>Play Grid Game</Text>
                </ImageBackground>
              </TouchableOpacity>
            </View>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            setGrid3(false);
            setGrid9(true);
            setGrid6(false);
          }}>
          <View style={[styles.card, grid9 && styles.border]}>
            <View style={styles.row}>
              <Image source={images.grid3} style={styles.cardImg} />
              <Text style={[styles.subhead]}>9x9 Grid Game</Text>
            </View>
            <View style={styles.content}>
              <Text style={styles.cardText}>
                Play the grid game with your in-app currency and win big
                rewards! Check out the rewards here!
              </Text>
            </View>
            <View style={styles.inputTop}>
              <TouchableOpacity>
                <ImageBackground
                  source={images.buttonBg}
                  style={styles.signInBtn}>
                  <Text style={styles.btnText}>Play Grid Game</Text>
                </ImageBackground>
              </TouchableOpacity>
            </View>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            setGrid3(false);
            setGrid9(false);
            setGrid6(true);
          }}>
          <View style={[styles.card, grid6 && styles.border]}>
            <View style={styles.row}>
              <Image source={images.grid3} style={styles.cardImg} />
              <Text style={[styles.subhead]}>6x6 Grid Game</Text>
            </View>
            <View style={styles.content}>
              <Text style={styles.cardText}>
                Play the grid game with your in-app currency and win big
                rewards! Check out the rewards here!
              </Text>
            </View>
            <View style={styles.inputTop}>
              <TouchableOpacity>
                <ImageBackground
                  source={images.buttonBg}
                  style={styles.signInBtn}>
                  <Text style={styles.btnText}>Play Grid Game</Text>
                </ImageBackground>
              </TouchableOpacity>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
