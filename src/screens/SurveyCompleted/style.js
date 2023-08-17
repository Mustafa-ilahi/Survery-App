import {Dimensions, StyleSheet} from 'react-native';
import {colors, fontFamily, fontSize, sizes} from '../../services';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
  },
  innerContainer: {
    height: sizes.screenHeight,
    backgroundColor: colors.white,
    marginTop: sizes.screenHeight * 0.35,
    paddingHorizontal: sizes.screenWidth * 0.03,
    justifyContent: 'space-between',
  },
  textViewParent: {
    alignItems: 'center',
  },
  text1: {
    fontWeight: 'bold',
    fontSize: fontSize.h2,
    textAlign: 'center',
    color: colors.black,
    paddingRight: sizes.screenWidth * 0.01,
    paddingLeft: sizes.screenWidth * 0.01,
  },
  text2: {
    color: colors.black,
    fontSize: fontSize.large,
    width: sizes.screenWidth * 0.5,
    textAlign: 'center',
    marginTop: sizes.screenWidth * 0.04,
    fontWeight: '500',
  },
  buttonView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: sizes.screenHeight * 0.05,
    paddingHorizontal: sizes.screenWidth * 0.02,
  },
  nextButton: {
    height: sizes.screenWidth * 0.17,
    width: sizes.screenWidth * 0.443,
  },
  nextText: {
    color: colors.appTextColor1,
    textAlign: 'center',
    marginTop: sizes.screenHeight * 0.026,
  },
  playText: {
    color: colors.white,
    textAlign: 'center',
    marginTop: sizes.screenHeight * 0.026,
  },
});
