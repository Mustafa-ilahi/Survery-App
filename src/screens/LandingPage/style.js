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
  btnTop: {
    marginTop: sizes.screenHeight * 0.03,
    marginBottom: sizes.screenHeight * 0.02,
  },
  signInView: {
    borderWidth: 1,
    width: sizes.screenWidth * 0.85,
    alignSelf: 'center',
    padding: sizes.screenHeight * 0.015,
    borderColor: colors.borderColor,
    borderRadius: sizes.screenWidth * 0.015,
    flexDirection: 'row',
    alignItems: 'center',
  },
  profile: {
    height: sizes.screenHeight * 0.04,
    width: sizes.screenWidth * 0.06,
    marginLeft: sizes.screenWidth * 0.03,
  },
  facebook:{
    height: sizes.screenHeight * 0.04,
    width: sizes.screenWidth * 0.07,
    marginLeft: sizes.screenWidth * 0.03,
  },
  signInText: {
    marginLeft: sizes.screenWidth * 0.06,
    fontSize: fontSize.medium,
    color: colors.black,
  },
  facebookText:{
    marginLeft: sizes.screenWidth * 0.05,
    fontSize: fontSize.medium,
    color: colors.black,
  },
  googleText:{
    marginLeft: sizes.screenWidth * 0.05,
    fontSize: fontSize.medium,
    color: colors.black,
  },
  btnBottom: {
    marginBottom: sizes.screenHeight * 0.02,
  },
  container: {height: sizes.screenHeight, backgroundColor: colors.white},

});
