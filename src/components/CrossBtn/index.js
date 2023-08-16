import React from 'react';
import {SafeAreaView, TouchableOpacity, View, Text, Image} from 'react-native';
import {styles} from './style';
import images from '../../services/utilities/images';

export default function CrossBtn() {
  return (
    <SafeAreaView>
      <TouchableOpacity>
        <View style={styles.crossView}> 
          <Image source={images.crossIcon} style={styles.crossIcon} />
        </View>
      </TouchableOpacity>
    </SafeAreaView>
  );
}
