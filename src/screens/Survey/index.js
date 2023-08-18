import React, {useState} from 'react';
import {
  Image,
  ImageBackground,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {styles} from './style';
import Feather from 'react-native-vector-icons/Feather';
import {colors} from '../../services';
import images from '../../services/utilities/images';

export default function Survey() {
  const [grid3, setGrid3] = useState(true);
  const [grid9, setGrid9] = useState(false);
  const [grid6, setGrid6] = useState(false);
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.padding}>
            <View style={[styles.row, styles.spaceBetween]}>
              <Text style={styles.heading}>Surveys</Text>
              <TouchableOpacity>
                <Feather name={'search'} color={colors.black} size={25} />
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.row}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              <TouchableOpacity>
              <View style={styles.headerPadding}>
                <Image source={images.all} style={styles.bannerIcon} />
                <Text style={styles.text}>All</Text>
              </View>
              </TouchableOpacity>
              <TouchableOpacity>
                <View style={styles.headerPadding}>
                  <Image source={images.homePolls1} style={styles.bannerIcon} />
                  <Text style={styles.text}>Code</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity>
                <View style={styles.headerPadding}>
                  <Image source={images.homePolls2} style={styles.bannerIcon} />
                  <Text style={styles.text}>Design</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity>
                <View style={styles.headerPadding}>
                  <Image source={images.homePolls3} style={styles.bannerIcon} />
                  <Text style={styles.text}>Wallet</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity>
                <View style={styles.headerPadding}>
                  <Image source={images.homePolls4} style={styles.bannerIcon} />
                  <Text style={styles.text}>Emotion</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity>
                <View style={styles.headerPadding}>
                  <Image source={images.homePolls5} style={styles.bannerIcon} />
                  <Text style={styles.text}>People</Text>
                </View>
              </TouchableOpacity>
            </ScrollView>
          </View>
          <TouchableOpacity
            onPress={() => {
              setGrid3(true);
              setGrid9(false);
              setGrid6(false);
            }}>
            <View style={[styles.card, grid3 && styles.border]}>
              <View style={[styles.row, styles.tagBtn]}>
                <TouchableOpacity style={styles.earnMoreButton}>
                  <Text style={styles.earnMoreText}>LEADERSHIP</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.earnMoreButton}>
                  <Text style={styles.earnMoreText}>CULTURE</Text>
                </TouchableOpacity>
              </View>

              <View style={styles.row}>
                <Image source={images.homePolls1} style={styles.imageLogo} />
                <View>
                  <View style={[styles.row, styles.rightAlign, styles.bottom]}>
                    <Image source={images.list} style={styles.list} />
                    <Text style={styles.surveyHead}>Survey</Text>
                  </View>
                  <Text style={styles.subhead}>
                    IT Executive Compensation Study
                  </Text>
                </View>
              </View>
              <View style={styles.content}>
                <Text style={styles.cardText}>
                  Take this study and benchmark your compensation against your
                  peers today
                </Text>
              </View>
              <View style={styles.inputTop}>
                <TouchableOpacity>
                  <ImageBackground
                    source={images.buttonBg}
                    style={styles.signInBtn}>
                    <Text style={styles.btnText}>
                      Take Survey (+1000 points)
                    </Text>
                  </ImageBackground>
                </TouchableOpacity>
              </View>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              setGrid3(false);
              setGrid9(true);
              setGrid6(false);
            }}>
            <View style={[styles.card, grid9 && styles.border]}>
              <View style={[styles.row, styles.tagBtn]}>
                <TouchableOpacity style={styles.earnMoreButton}>
                  <Text style={styles.earnMoreText}>LEADERSHIP</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.earnMoreButton}>
                  <Text style={styles.earnMoreText}>CULTURE</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.row}>
                <Image source={images.homePolls2} style={styles.imageLogo} />

                <View>
                  <View style={[styles.row, styles.rightAlign, styles.bottom]}>
                    <Image source={images.list} style={styles.list} />
                    <Text style={styles.surveyHead}>Survey</Text>
                  </View>
                  <Text style={styles.subhead}>
                    IT Executive Compensation Study
                  </Text>
                </View>
              </View>
              <View style={styles.content}>
                <Text style={styles.cardText}>
                  Take this study and benchmark your compensation against your
                  peers today
                </Text>
              </View>
              <View style={styles.inputTop}>
                <TouchableOpacity>
                  <ImageBackground
                    source={images.buttonBg}
                    style={styles.signInBtn}>
                    <Text style={styles.btnText}>
                      Take Survey (+1000 points)
                    </Text>
                  </ImageBackground>
                </TouchableOpacity>
              </View>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              setGrid3(false);
              setGrid9(false);
              setGrid6(true);
            }}>
            <View style={[styles.card, grid6 && styles.border]}>
              <View style={[styles.row, styles.tagBtn]}>
                <TouchableOpacity style={styles.earnMoreButton}>
                  <Text style={styles.earnMoreText}>LEADERSHIP</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.earnMoreButton}>
                  <Text style={styles.earnMoreText}>CULTURE</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.row}>
                <Image source={images.homePolls3} style={styles.imageLogo} />

                <View>
                  <View style={[styles.row, styles.rightAlign, styles.bottom]}>
                    <Image source={images.list} style={styles.list} />
                    <Text style={styles.surveyHead}>Survey</Text>
                  </View>
                  <Text style={styles.subhead}>
                    IT Executive Compensation Study
                  </Text>
                </View>
              </View>
              <View style={styles.content}>
                <Text style={styles.cardText}>
                  Take this study and benchmark your compensation against your
                  peers today
                </Text>
              </View>
              <View style={styles.inputTop}>
                <TouchableOpacity>
                  <ImageBackground
                    source={images.buttonBg}
                    style={styles.signInBtn}>
                    <Text style={styles.btnText}>
                      Take Survey (+1000 points)
                    </Text>
                  </ImageBackground>
                </TouchableOpacity>
              </View>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
