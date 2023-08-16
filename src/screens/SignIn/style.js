import {Dimensions, StyleSheet} from 'react-native';
import {colors, fontFamily, fontSize, sizes} from '../../services';

export const styles = StyleSheet.create({
  content: {
    alignItems: 'center',
    marginTop: sizes.screenHeight * 0.2,
  },
  loginHead: {
    width: sizes.screenWidth * 0.3,
    fontSize: fontSize.h4,
    fontWeight: '700',
    color: colors.appTextColor1,
  },
  textView: {
    marginTop: sizes.screenHeight * 0.02,
  },
  text: {
    textAlign: 'center',
    color: colors.gray,
    fontSize: fontSize.h6,
  },
  inputTop: {
    marginTop: sizes.screenHeight * 0.02,
    marginBottom: sizes.screenHeight * 0.01,
  },
  input: {
    backgroundColor: 'transparent',
    width: sizes.screenWidth * 0.9,
    alignSelf: 'center',
    borderRadius: sizes.screenWidth * 0.03,
    borderTopRightRadius: sizes.screenWidth * 0.03,
    borderTopLeftRadius: sizes.screenWidth * 0.03,
    borderColor: colors.grayBorder,
  },
  container: {height: sizes.screenHeight, backgroundColor: colors.white},
  signInBtn: {
    height: sizes.screenHeight * 0.07,
    width: sizes.screenWidth * 0.93,
    alignSelf: 'center',
  },
  btnText: {
    textAlign: 'center',
    marginTop: sizes.screenHeight * 0.015,
    color: '#EFEFF0',
    fontSize: fontSize.medium,
  },
  forgetView: {
    alignItems: 'center',
  },
  forgetText: {
    fontSize: fontSize.medium,
    color: '#61646B',
  },
  row: {
    flexDirection: 'row',
    alignSelf: 'center',
  },
  bottom: {
    marginTop: sizes.screenHeight * 0.19,
  },
  signUpText: {
    fontSize: fontSize.medium,
    color: colors.appTextColor1,
    fontWeight: '800',
    left: sizes.screenWidth * 0.01,
  },
});
