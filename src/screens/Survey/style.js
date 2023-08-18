import {Dimensions, StyleSheet} from 'react-native';
import {colors, fontFamily, fontSize, sizes} from '../../services';

export const styles = StyleSheet.create({
  container: {height: sizes.screenHeight, backgroundColor: colors.white},

  padding: {
    padding: sizes.screenHeight * 0.02,
    paddingRight: sizes.screenHeight * 0.03,
    paddingLeft: sizes.screenHeight * 0.03,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  spaceBetween: {
    justifyContent: 'space-between',
  },
  heading: {
    color: colors.black,
    fontSize: fontSize.h5,
    fontWeight: '500',
  },
  card: {
    padding: sizes.screenHeight * 0.02,
    paddingBottom: 0,
    marginBottom: sizes.screenHeight * 0.015,
    backgroundColor: colors.lightGray,
  },
  cardImg: {
    height: sizes.screenHeight * 0.07,
    width: sizes.screenWidth * 0.15,
  },
  rightAlign: {
    marginLeft: sizes.screenWidth * 0.03,
  },
  subhead: {
    color: colors.black,
    fontSize: fontSize.h5,
    fontWeight: '600',
    marginLeft: sizes.screenWidth * 0.03,
  },
  content: {
    marginTop: sizes.screenHeight * 0.015,
  },
  cardText: {
    color: colors.black,
    fontSize: fontSize.regular,
  },
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
  inputTop: {
    marginTop: sizes.screenHeight * 0.02,
    marginBottom: sizes.screenHeight * 0.01,
  },
  border: {
    borderLeftWidth: 3,
    borderColor: colors.appTextColor1,
  },
});
