import {Dimensions, StyleSheet} from 'react-native';
import {colors, fontFamily, fontSize, sizes} from '../../services';

export const styles = StyleSheet.create({
  container: {
    height: sizes.screenHeight,
    backgroundColor: colors.white,
    paddingHorizontal: sizes.screenWidth * 0.03,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: sizes.screenHeight * 0.02,
  },
  arrowImg: {
    height: sizes.screenHeight * 0.02,
    width: sizes.screenWidth * 0.03,
  },
  arrowText: {
    fontWeight: 'bold',
    fontSize: fontSize.h6,
    color: colors.gray,
  },
  Text2: {
    color: colors.appTextColor1,
  },
  progressBarView: {
    marginTop: sizes.screenHeight * 0.02,
  },
  progressBarImg: {
    width: sizes.screenWidth,
    right: sizes.screenWidth * 0.02,
  },
  questionView: {
    width: sizes.screenWidth * 0.65,
    marginTop: sizes.screenHeight * 0.05,
  },
  questionText: {
    color: colors.black,
    fontWeight: 'bold',
    fontSize: fontSize.h3,
  },
  bottomView: {
    flex: 1,
    justifyContent: 'space-between',
  },
  optionView: {
    height: sizes.screenHeight * 0.08,
    backgroundColor: colors.white,
    borderColor: colors.disabledBg,
    borderStyle: 'solid',
    borderWidth: 1,
    borderRadius: 10,
    marginTop: sizes.screenWidth * 0.05,
    justifyContent: 'center',
    paddingLeft: sizes.screenWidth * 0.05,
  },
  optionViewFocused: {
    height: sizes.screenHeight * 0.08,
    backgroundColor: colors.white,
    borderColor: colors.appTextColor1,
    borderStyle: 'solid',
    borderWidth: 2,
    borderRadius: 10,
    marginTop: sizes.screenWidth * 0.05,
    justifyContent: 'center',
    paddingLeft: sizes.screenWidth * 0.05,
  },
  optionText: {
    color: colors.black,
    fontSize: fontSize.h6,
  },
  optionTextFocused: {
    color: colors.appTextColor1,
    fontSize: fontSize.h6,
    fontWeight: 'bold',
  },

  inputTop: {
    marginBottom: sizes.screenHeight * 0.08,
  },
  signInBtn: {
    height: sizes.screenHeight * 0.083,
  },
  btnText: {
    textAlign: 'center',
    marginTop: sizes.screenHeight * 0.023,
    color: '#EFEFF0',
    fontSize: fontSize.extraLarge,
  },
});
