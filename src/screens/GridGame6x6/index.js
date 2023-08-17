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
import Modal from 'react-native-modal';

export default function GridGame6x6() {
  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View style={styles.padding}>
          <Text style={styles.heading}>Grid Game</Text>
        </View>
        <View style={styles.gridMain}>
          <View style={styles.gridView}>
            <TouchableOpacity>
              <View style={styles.gridItem}></View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={styles.gridItem}></View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={styles.gridItem}></View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={styles.gridItem}></View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={styles.gridItem}></View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={styles.gridItem}></View>
            </TouchableOpacity>
          </View>
          <View style={styles.gridView}>
            <TouchableOpacity>
              <View style={styles.gridItem}></View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={styles.gridItem}></View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={styles.gridItem}></View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={styles.gridItem}></View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={styles.gridItem}></View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={styles.gridItem}></View>
            </TouchableOpacity>
          </View>
          <View style={styles.gridView}>
            <TouchableOpacity>
              <View style={styles.gridItem}></View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={styles.gridItem}></View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={styles.gridItem}></View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={styles.gridItem}></View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={styles.gridItem}></View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={styles.gridItem}></View>
            </TouchableOpacity>
          </View>
          <View style={styles.gridView}>
            <TouchableOpacity>
              <View style={styles.gridItem}></View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={styles.gridItem}></View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={styles.gridItem}></View>
            </TouchableOpacity>
            <TouchableOpacity 
            // onPress={toggleModal}
            >
              <ImageBackground
                source={images.gridBg}
                style={styles.gridItemblue}></ImageBackground>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={styles.gridItem}></View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={styles.gridItem}></View>
            </TouchableOpacity>
          </View>
          <View style={styles.gridView}>
            <TouchableOpacity>
              <View style={styles.gridItem}></View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={styles.gridItem}></View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={styles.gridItem}></View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={styles.gridItem}></View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={styles.gridItem}></View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={styles.gridItem}></View>
            </TouchableOpacity>
          </View>
          <View style={styles.gridView}>
            <TouchableOpacity>
              <View style={styles.gridItem}></View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={styles.gridItem}></View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={styles.gridItem}></View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={styles.gridItem}></View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={styles.gridItem}></View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={styles.gridItem}></View>
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
      <Modal isVisible={isModalVisible}>
        <View style={styles.modalView}>
          <Text style={styles.modalHead}>Out Of Points </Text>
          <Text style={styles.modelText}>
            Don’t have enough points? You can buy more!
          </Text>
          <View style={styles.modalBtnTop}>
            <TouchableOpacity onPress={toggleModal}>
              <ImageBackground
                source={images.buttonBg2}
                style={styles.signInBtnModal}>
                <Text style={styles.btnTextModal}>
                  Buy Points (1000 in $9.99)
                </Text>
              </ImageBackground>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
}
