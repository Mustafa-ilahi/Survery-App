import React from 'react';
import {Text, View, SafeAreaView, Image, TouchableOpacity} from 'react-native';
import {styles} from './styles';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import images from '../../services/utilities/images';

export default function Question2() {
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
          <Image
            source={images.progressBar}
            style={styles.progressBarImg}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}
