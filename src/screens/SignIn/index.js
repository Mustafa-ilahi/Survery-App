import React, {useState} from 'react';
import {SafeAreaView, View, Text, TouchableOpacity, Image} from 'react-native';
import {styles} from './style';
import CrossBtn from '../../components/CrossBtn';
import images from '../../services/utilities/images';
import {TextInput} from 'react-native-paper';
import { colors } from '../../services';

export default function SignIn() {
  const [text, setText] = useState('');

  return (
    <SafeAreaView>
      <View>
        <CrossBtn />
      </View>
      <View style={styles.content}>
        <Text style={styles.loginHead}>Log in to Surveyor</Text>
        <View style={styles.textView}>
          <Text style={styles.text}>
            Manage your account, check notifications, comment on videos, and
            more
          </Text>
        </View>
      </View>
      <View style={styles.inputTop}>
        <TextInput
          label="Username / email"
          value={text}
          mode='outlined'
          onChangeText={text => setText(text)}
          style={styles.input}
          activeUnderlineColor={colors.black}
          underlineColor='transparent'
          activeOutlineColor={colors.appTextColor1}
/>
      </View>
    </SafeAreaView>
  );
}
