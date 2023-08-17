import {Dimensions, StyleSheet} from 'react-native';
import {colors, fontFamily, fontSize, sizes} from '../../services';

export const styles = StyleSheet.create({
  container: {height: sizes.screenHeight, backgroundColor: colors.white},
  content: {
    alignItems: 'center',
    marginTop: sizes.screenHeight * 0.2,
  },
  otpHead: {
    fontSize: fontSize.h4,
    fontWeight: '700',
    color: colors.black,
  },
  textView: {
    marginTop: sizes.screenHeight * 0.02,
    paddingRight: sizes.screenWidth * 0.05,
    paddingLeft: sizes.screenWidth * 0.05,
  },
  text: {
    textAlign: 'center',
    color: colors.gray,
    fontSize: fontSize.h6,
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
    // marginTop: sizes.screenHeight * 0.02,
  },
  footerbottom: {
    marginTop: sizes.screenHeight * 0.35,
  },
  resendText: {
    fontSize: fontSize.medium,
    color: colors.appTextColor1,
    fontWeight: '800',
    left: sizes.screenWidth * 0.01,
  },
  codeFieldRoot: {
    // marginTop: sizes.screenHeight * 0.1,
    width: sizes.screenWidth * 0.9,
    padding: sizes.screenWidth * 0.05,
    alignSelf: 'center',
  },
  cell: {
    width: sizes.screenWidth * 0.11,
    height: sizes.screenHeight*0.09,
    lineHeight: sizes.screenHeight*0.09,
    fontSize: fontSize.h5,
    fontWeight:'500',
    borderWidth: 1,
    borderColor: colors.disabledBg,
    textAlign: 'center',
    color: colors.black,
    borderRadius:sizes.screenWidth*0.02
  },
  focusCell: {
    borderColor: '#000',
  },
 
});
