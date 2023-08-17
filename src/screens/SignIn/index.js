import React, {useState} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  Image,
  ImageBackground,
} from 'react-native';
import {styles} from './style';
import CrossBtn from '../../components/CrossBtn';
import images from '../../services/utilities/images';
import {TextInput} from 'react-native-paper';
import {colors, sizes} from '../../services';
import Feather from 'react-native-vector-icons/Feather';

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
            contentStyle={{color: colors.black}}
          />
        </View>
        <View>
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
            contentStyle={{color: colors.black}}
          />
          <TouchableOpacity onPress={() => setHidePass(!hidePass)}>
            <Feather
              name={!hidePass ? 'eye' : 'eye-off'}
              color={colors.disabledBg2}
              size={20}
              style={{
                bottom: sizes.screenHeight * 0.045,
                alignSelf: 'flex-end',
                right: sizes.screenWidth * 0.08,
              }}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.inputTop}>
          <TouchableOpacity>
            <ImageBackground source={images.buttonBg} style={styles.signInBtn}>
              <Text style={styles.btnText}>Sign In</Text>
            </ImageBackground>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity>
            <View style={styles.forgetView}>
              <Text style={styles.forgetText}>Forgot Password?</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={[styles.row, styles.bottom]}>
          <Text style={styles.forgetText}>Don’t have an account?</Text>
          <TouchableOpacity>
            <Text style={styles.signUpText}>Sign Up Today!</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}
