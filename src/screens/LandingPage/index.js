import React from 'react';
import {SafeAreaView, View, Text, TouchableOpacity, Image} from 'react-native';
import {styles} from './style';
import CrossBtn from '../../components/CrossBtn';
import images from '../../services/utilities/images';

export default function LandingPage({navigation}) {
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
        <View style={styles.btnTop}>
          <TouchableOpacity onPress={() => navigation.navigate('SignIn')}>
            <View style={styles.signInView}>
              <Image source={images.profile} style={styles.profile} />
              <Text style={styles.signInText}>
                Use phone / email / username
              </Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.btnBottom}>
          <TouchableOpacity>
            <View style={styles.signInView}>
              <Image source={images.facebook} style={styles.facebook} />
              <Text style={styles.facebookText}>
                Continue With Facebook Login
              </Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.btnBottom}>
          <TouchableOpacity>
            <View style={styles.signInView}>
              <Image source={images.apple} style={styles.profile} />
              <Text style={styles.signInText}>
                Use phone / email / username
              </Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.btnBottom}>
          <TouchableOpacity>
            <View style={styles.signInView}>
              <Image source={images.google} style={styles.facebook} />
              <Text style={styles.googleText}>
                Use phone / email / username
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}
