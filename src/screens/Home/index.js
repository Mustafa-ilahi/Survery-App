import React from 'react';
import {
  Image,
  ImageBackground,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {styles} from './style';
import images from '../../services/utilities/images';

export default function Home() {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <ImageBackground source={images.homeTopBg} style={styles.topBgImage}>
          <Text style={styles.nameText}>Hi, Judith</Text>
          <Text style={styles.welcomeText}>Welcome back</Text>
          <View style={styles.porfileView}>
            <Image source={images.profilePicture} style={styles.profileImage} />
            <View>
              <Text style={styles.text1}>Your Rewards</Text>
              <Text style={styles.text2}>32,219 points</Text>
            </View>
            <TouchableOpacity style={styles.earnMoreButton}>
              <Text style={styles.earnMoreText}>Earn More</Text>
            </TouchableOpacity>
          </View>
        </ImageBackground>
        <View style={styles.bottomView}>
          <Text style={styles.text1}>All your polls</Text>

          <TouchableOpacity>
            <View style={styles.pollsView}>
              <View style={styles.innerPollView}>
                <Image source={images.homePolls1} style={styles.imageLogo} />
                <View style={styles.pollsTextView}>
                  <Text style={styles.text1}>Coading in 2023</Text>
                  <Text style={styles.text2}>Dev</Text>
                </View>
              </View>
              <Image source={images.rightArrow} />
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.pollsView}>
              <View style={styles.innerPollView}>
                <Image source={images.homePolls2} style={styles.imageLogo} />
                <View style={styles.pollsTextView}>
                  <Text style={styles.text1}>The future of Design</Text>
                  <Text style={styles.text2}>Design</Text>
                </View>
              </View>
              <Image source={images.rightArrow} />
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.pollsView}>
              <View style={styles.innerPollView}>
                <Image source={images.homePolls3} style={styles.imageLogo} />
                <View style={styles.pollsTextView}>
                  <Text style={styles.text1}>Wages are rising?</Text>
                  <Text style={styles.text2}>Money</Text>
                </View>
              </View>
              <Image source={images.rightArrow} />
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.pollsView}>
              <View style={styles.innerPollView}>
                <Image source={images.homePolls4} style={styles.imageLogo} />
                <View style={styles.pollsTextView}>
                  <Text style={styles.text1}>Well being at work</Text>
                  <Text style={styles.text2}>Happy at work</Text>
                </View>
              </View>
              <Image source={images.rightArrow} />
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.pollsView}>
              <View style={styles.innerPollView}>
                <Image source={images.homePolls5} style={styles.imageLogo} />
                <View style={styles.pollsTextView}>
                  <Text style={styles.text1}>Newbie to Senior</Text>
                  <Text style={styles.text2}>Work</Text>
                </View>
              </View>
              <Image source={images.rightArrow} />
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}
