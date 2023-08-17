import React, {useState} from 'react';
import {styles} from './style';
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  Image,
} from 'react-native';
import images from '../../services/utilities/images';
import { sizes } from '../../services';

export default function GridGameResult() {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View style={styles.padding}>
          <Text style={styles.heading}>Grid Game</Text>
        </View>
        <View style={styles.gridMain}>
          <View style={styles.gridView}>
            <TouchableOpacity>
              <View style={styles.gridItem}>
                <Image
                  source={images.playstation}
                  style={styles.stationResult}
                />
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={styles.gridItem}>
                <Image source={images.emoji} style={styles.emojiImg} />
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={styles.gridItem}>
                <Image source={images.coin} style={styles.stationResult} />
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.gridView}>
            <TouchableOpacity>
              <View style={styles.gridItem}>
                <Image source={images.coin} style={styles.stationResult} />
              </View>
            </TouchableOpacity>
            <TouchableOpacity>

              <ImageBackground
                source={images.gridBg}
                style={styles.gridItemblue}>
              <View style={{alignSelf:'center',top:sizes.screenHeight*0.03}}>
                <Image source={images.treeLight} style={styles.lightTree} />
                  </View>
              </ImageBackground>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={styles.gridItem}>
                <Image
                  source={images.playstation}
                  style={styles.stationResult}
                />
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.gridView}>
            <TouchableOpacity>
              <View style={styles.gridItem}>
                <Image source={images.emoji} style={styles.emojiImg} />
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={styles.gridItem}>
                <Image source={images.coin} style={styles.stationResult} />
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={styles.gridItem}>
                <Image source={images.emoji} style={styles.emojiImg} />
              </View>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.padding}>
          <Text style={styles.rewardsHead}>Rewards:</Text>
          <View style={styles.row}>
            <View style={[styles.rewardsRow, styles.playView]}>
              <Image source={images.playstation} style={styles.playstation} />
              <Text style={[styles.rewardText, styles.left]}>
                Playstation 5
              </Text>
            </View>
            <View style={styles.rewardsRow}>
              <Image source={images.playstation} style={styles.playstation} />
              <Text style={styles.rewardText}>Playstation 5</Text>
            </View>
          </View>
        </View>
        <View style={styles.padding2}>
          <View style={styles.row}>
            <View style={styles.rewardsRow}>
              <Image source={images.coin} style={styles.coin} />
              <Text style={styles.rewardText}>2000 Points</Text>
            </View>
            <View style={[styles.rewardsRow, styles.treeView]}>
              <Image source={images.tree} style={styles.playstation} />
              <Text style={styles.rewardText}>Plant A Tree</Text>
            </View>
          </View>
        </View>
        <View style={styles.padding2}>
          <View style={styles.row}>
            <View style={styles.rewardsRow}>
              <Image source={images.coin} style={styles.coin} />
              <Text style={styles.rewardText}>5000 Points</Text>
            </View>
            <View style={styles.rewardsRow}>
              <Image source={images.coin} style={styles.coin} />
              <Text style={styles.rewardText}>5000 Points</Text>
            </View>
          </View>
        </View>
        <View style={styles.inputTop}>
          <TouchableOpacity>
            <ImageBackground source={images.buttonBg2} style={styles.signInBtn}>
              <Text style={styles.btnText}>Play (Cost 50 Points)</Text>
            </ImageBackground>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}
