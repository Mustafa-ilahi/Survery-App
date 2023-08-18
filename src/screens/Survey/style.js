import {Dimensions, StyleSheet} from 'react-native';
import {colors, fontFamily, fontSize, sizes} from '../../services';

export const styles = StyleSheet.create({
  container: {
    height: sizes.screenHeight,
    backgroundColor: colors.white,
  },

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
  tagBtn: {
    bottom: sizes.screenHeight * 0.01,
    right: sizes.screenWidth * 0.08,
    marginBottom: sizes.screenHeight * 0.01,
    marginTop: sizes.screenHeight * 0.01,
  },
  rightAlign: {
    marginLeft: sizes.screenWidth * 0.03,
  },
  subhead: {
    color: colors.black,
    fontSize: fontSize.h6,
    fontWeight: '700',
    marginLeft: sizes.screenWidth * 0.04,
    width: sizes.screenWidth * 0.5,
  },
  surveyHead: {
    color: '#4A4A4A',
    fontSize: fontSize.large,
    fontWeight: '600',
    marginLeft: sizes.screenWidth * 0.02,
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
  imageLogo: {
    height: sizes.screenHeight * 0.1,
    width: sizes.screenWidth * 0.2,
    borderRadius: 10,
  },
  bannerIcon: {
    height: sizes.screenHeight * 0.08,
    width: sizes.screenWidth * 0.17,
    borderRadius: 10,
  },
  earnMoreButton: {
    backgroundColor: 'transparent',
    paddingVertical: 5,
    borderRadius: 20,
    marginLeft: sizes.screenWidth * 0.03,
    left: sizes.screenWidth * 0.05,
    width: sizes.screenWidth * 0.23,
    borderWidth: 1,
    borderColor: colors.appTextColor1,
  },
  earnMoreText: {
    fontSize: fontSize.small,
    color: colors.appTextColor1,
    textTransform: 'uppercase',
    textAlign: 'center',
  },
  list: {
    height: sizes.screenHeight * 0.03,
    width: sizes.screenWidth * 0.06,
  },
  bottom: {
    top: sizes.screenHeight * 0.007,
    marginBottom: sizes.screenHeight * 0.013,
  },
  text: {
    textAlign: 'center',
    color: colors.black,
    fontWeight: '500',
    marginTop: 3,
    marginBottom: sizes.screenHeight * 0.02,
  },
  headerPadding: {
    marginRight: sizes.screenWidth * 0.02,
  },
  paddingBottom:{
    marginBottom:sizes.screenHeight*0.4
  }
});
