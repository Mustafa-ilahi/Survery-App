import React, {useState} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  Image,
  ImageBackground,
  Platform,
  KeyboardAvoidingView,
  ScrollView,
} from 'react-native';
import {styles} from './style';
import CrossBtn from '../../components/CrossBtn';
import images from '../../services/utilities/images';
import {TextInput, Button} from 'react-native-paper';
import {colors, sizes} from '../../services';
import Feather from 'react-native-vector-icons/Feather';

import {DatePickerInput} from 'react-native-paper-dates';

export default function SignUp() {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [hidePass, setHidePass] = useState(true);
  const [hidePass1, setHidePass1] = useState(true);

  const [inputDate, setInputDate] = useState(undefined);
  const keyboardVerticalOffset = Platform.OS === 'ios' ? 40 : 0;

  return (
    <SafeAreaView>
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
        }}>
        <View>
          <View style={styles.container}>
            <View>
              <CrossBtn />
            </View>
            <View style={styles.content}>
              <Text style={styles.loginHead}>Sign Up To Surveyor</Text>
              <View style={styles.textView}>
                <Text style={styles.text}>
                  Manage your account, check notifications, comment on videos,
                  and more
                </Text>
              </View>
            </View>
            <View style={styles.inputTop}>
              <TextInput
                label="Full Name"
                value={fullName}
                mode="outlined"
                onChangeText={text => setFullName(text)}
                style={styles.input}
                activeUnderlineColor={colors.black}
                underlineColor="transparent"
                activeOutlineColor={colors.appTextColor1}
                contentStyle={{color: colors.black}}
              />
            </View>

            <View>
              <TextInput
                label="Email"
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
            <View style={styles.top}>
              <TextInput
                label="Username"
                value={username}
                mode="outlined"
                onChangeText={text => setUsername(text)}
                style={styles.input}
                activeUnderlineColor={colors.black}
                underlineColor="transparent"
                activeOutlineColor={colors.appTextColor1}
                contentStyle={{color: colors.black}}
              />
              {username?.length > 4 && (
                <Feather
                  name={'check'}
                  color={colors.disabledBg2}
                  size={20}
                  style={{
                    position: 'absolute',
                    top: sizes.screenHeight * 0.025,
                    alignSelf: 'flex-end',
                    right: sizes.screenWidth * 0.08,
                  }}
                />
              )}
            </View>
            <View style={styles.dob}>
              <DatePickerInput
                mode="outlined"
                locale="en"
                label="Date of Birth"
                value={inputDate}
                onChange={d => setInputDate(d)}
                inputMode="start"
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
            <View style={styles.reenterPass}>
              <TextInput
                label="Re Enter Password"
                value={confirmPassword}
                mode="outlined"
                onChangeText={text => setConfirmPassword(text)}
                style={styles.input}
                activeUnderlineColor={colors.black}
                underlineColor="transparent"
                activeOutlineColor={colors.appTextColor1}
                secureTextEntry={hidePass1 ? true : false}
                contentStyle={{color: colors.black}}
              />
              <TouchableOpacity onPress={() => setHidePass1(!hidePass1)}>
                <Feather
                  name={!hidePass1 ? 'eye' : 'eye-off'}
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
            <View style={styles.btnTop}>
              <TouchableOpacity>
                <ImageBackground
                  source={images.buttonBg}
                  style={styles.signInBtn}>
                  <View style={styles.signUpContent}>
                    <View style={styles.btnRow}>
                      <Text style={styles.btnText}>Sign Up</Text>
                      <Feather
                        name={'arrow-right'}
                        color={colors.white}
                        size={20}
                        style={styles.rightArrow}
                      />
                    </View>
                  </View>
                </ImageBackground>
              </TouchableOpacity>
            </View>
            <View>
              <View style={styles.forgetView}>
                <Text style={styles.forgetText}>
                  By signing up you agree to our Terms & Conditions.
                </Text>
              </View>
            </View>
            <View style={[styles.row, styles.bottom]}>
              <Text style={styles.forgetText}>Already have an account?</Text>
              <TouchableOpacity >
                <Text style={styles.signUpText}>Sign In!</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
