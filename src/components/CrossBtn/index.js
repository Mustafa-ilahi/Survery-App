import React from 'react';
import {SafeAreaView, TouchableOpacity, View, Text, Image} from 'react-native';
import {styles} from './style';
import images from '../../services/utilities/images';
import {useNavigation} from '@react-navigation/native';

export default function CrossBtn() {
  const navigation = useNavigation();

  return (
    <SafeAreaView>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <View style={styles.crossView}>
          <Image source={images.crossIcon} style={styles.crossIcon} />
        </View>
      </TouchableOpacity>
    </SafeAreaView>
  );
}
