import {Dimensions, StyleSheet} from 'react-native';
import {colors, fontFamily, fontSize, sizes} from '../../services';

export const styles = StyleSheet.create({
  container: {height: sizes.screenHeight, backgroundColor: colors.white},
  padding: {
    padding: sizes.screenHeight * 0.02,
  },
  heading: {
    color: colors.black,
    textAlign: 'center',
    fontSize: fontSize.h2,
    fontWeight: '500',
  },
  gridMain: {
    marginTop: sizes.screenHeight * 0.01,
  },
  gridView: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  gridItem: {
    backgroundColor: colors.grid,
    height: sizes.screenWidth * 0.27,
    width: sizes.screenWidth * 0.27,
    marginRight: sizes.screenWidth * 0.02,
    marginBottom: sizes.screenWidth * 0.02,
  },
  gridItemblue: {
    height: sizes.screenWidth * 0.27,
    width: sizes.screenWidth * 0.27,
    marginRight: sizes.screenWidth * 0.02,
    marginBottom: sizes.screenWidth * 0.02,
  },
  gridItemBlue: {
    backgroundColor: colors.grid,
    height: sizes.screenWidth * 0.27,
    width: sizes.screenWidth * 0.27,
    marginRight: sizes.screenWidth * 0.02,
    marginBottom: sizes.screenWidth * 0.02,
  },
  rewardsHead: {
    fontSize: fontSize.h5,
    color: colors.black,
    fontWeight: '800',
    marginLeft: sizes.screenWidth * 0.03,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: sizes.screenWidth * 0.03,
    paddingBottom: 0,
  },
  rewardText: {
    color: colors.black,
    fontSize: fontSize.h6,
    marginLeft: sizes.screenWidth * 0.02,
  },
  padding2: {
    paddingRight: sizes.screenHeight * 0.02,
    paddingLeft: sizes.screenHeight * 0.02,
    bottom: sizes.screenHeight * 0.02,
  },
  playstation: {
    height: sizes.screenHeight * 0.04,
    width: sizes.screenWidth * 0.06,
  },
  rewardsRow: {flexDirection: 'row', alignItems: 'center'},
  coin: {
    height: sizes.screenHeight * 0.04,
    width: sizes.screenWidth * 0.08,
  },
  left: {
    left: 7,
  },
  treeView: {
    right: 7,
  },
  playView: {
    left: 3,
  },
 
  signInBtn: {
    height: sizes.screenHeight * 0.083,
    width:sizes.screenWidth*0.95,
    alignSelf:'center'
  },
  btnText: {
    textAlign: 'center',
    marginTop: sizes.screenHeight * 0.023,
    color: '#EFEFF0',
    fontSize: fontSize.extraLarge,
  },
  inputTop:{
    marginTop:sizes.screenHeight*0.04
  }
});
