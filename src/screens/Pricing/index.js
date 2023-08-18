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

export default function Pricing() {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <ImageBackground source={images.homeTopBg} style={styles.topBgImage}>
          <Text style={styles.nameText}>Out of Points?</Text>
          <Text style={styles.welcomeText}>You can get more!</Text>
          {/* <View style={styles.porfileView}>
            <Image source={images.prisingImage1} style={styles.profileImage} />
            <View>
              <Text style={styles.text1}>Your Rewards</Text>
              <Text style={styles.text2}>32,219 points</Text>
            </View>
            <TouchableOpacity style={styles.earnMoreButton}>
              <Text style={styles.earnMoreText}>Earn More</Text>
            </TouchableOpacity>
          </View> */}

          <View style={styles.porfileView}>
            <View style={styles.innerPollView}>
              <Image source={images.prisingImage1} style={styles.imageLogo} />
              <View style={styles.pollsTextView}>
                <View style={styles.bestDealButton}>
                  <Text style={styles.bestDealText}>Best Deal</Text>
                </View>
                <Text style={styles.text1}>1000 Points</Text>
              </View>
            </View>
            <View style={styles.earnMoreButton}>
              <Text style={styles.earnMoreText}>Earn More</Text>
            </View>
          </View>
        </ImageBackground>
        <View style={styles.bottomView}>
          <TouchableOpacity>
            <View style={styles.pollsView}>
              <View style={styles.innerPollView}>
                <Image source={images.prisingImage2} style={styles.imageLogo} />
                <View style={styles.pollsTextView}>
                  <View style={styles.bestDealButton}>
                    <Text style={styles.bestDealText}>Best Deal</Text>
                  </View>
                  <Text style={styles.text1}>1000 Points</Text>
                </View>
              </View>
              <View style={styles.amountButton}>
                <Text style={styles.amountButtonText}>$10.99</Text>
              </View>
            </View>
          </TouchableOpacity>

          <TouchableOpacity>
            <View style={styles.pollsView}>
              <View style={styles.innerPollView}>
                <Image source={images.prisingImage3} style={styles.imageLogo} />
                <View style={styles.pollsTextView}>
                  <Text style={styles.text1}>1000 Points</Text>
                </View>
              </View>
              <View style={styles.amountButton}>
                <Text style={styles.amountButtonText}>$89.99</Text>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.pollsView}>
              <View style={styles.innerPollView}>
                <Image source={images.prisingImage4} style={styles.imageLogo} />
                <View style={styles.pollsTextView}>
                  <Text style={styles.text1}>1000 Points</Text>
                </View>
              </View>
              <View style={styles.amountButton}>
                <Text style={styles.amountButtonText}>$10.99</Text>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.pollsView}>
              <View style={styles.innerPollView}>
                <Image source={images.prisingImage5} style={styles.imageLogo} />
                <View style={styles.pollsTextView}>
                  <Text style={styles.text1}>10000 Points</Text>
                </View>
              </View>
              <View style={styles.amountButton}>
                <Text style={styles.amountButtonText}>$89.99</Text>
              </View>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}
