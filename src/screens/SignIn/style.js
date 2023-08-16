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
    marginTop: sizes.screenHeight * 0.03,
  },
  input: {
    backgroundColor: 'transparent',
    // borderWidth: 1,
    width: sizes.screenWidth * 0.9,
    alignSelf: 'center',
    // borderRadius: sizes.screenWidth * 0.03,
    // borderTopRightRadius: sizes.screenWidth * 0.03,
    // borderTopLeftRadius: sizes.screenWidth * 0.03,
    // borderColor: colors.grayBorder,
  },
});
