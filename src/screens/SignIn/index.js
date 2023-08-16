import React, {useState} from 'react';
import {SafeAreaView, View, Text, TouchableOpacity, Image} from 'react-native';
import {styles} from './style';
import CrossBtn from '../../components/CrossBtn';
import images from '../../services/utilities/images';
import {TextInput} from 'react-native-paper';
import {colors, sizes} from '../../services';
// AntDesign

export default function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [hidePass, setHidePass] = useState(true);

  return (
    <SafeAreaView>
      <View style={styles.container}>
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
            value={email}
            mode="outlined"
            onChangeText={text => setEmail(text)}
            style={styles.input}
            activeUnderlineColor={colors.black}
            underlineColor="transparent"
            activeOutlineColor={colors.appTextColor1}
          />
        </View>
        <View style={styles.inputTop}>
          <TextInput
            label="Password"
            value={password}
            mode="outlined"
            onChangeText={text => setPassword(text)}
            style={styles.input}
            activeUnderlineColor={colors.black}
            underlineColor="transparent"
            activeOutlineColor={colors.appTextColor1}
            secureTextEntry={hidePass ? true : false}
            right={
              <TextInput.Icon
                name="eye"
                onPress={() => setHidePass(!hidePass)}
              />
            }
          />
        </View>
      </View>
    </SafeAreaView>
  );
}
