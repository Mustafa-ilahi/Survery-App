import {Dimensions, StyleSheet} from 'react-native';
import {colors, fontFamily, fontSize, sizes} from '../../services';

export const styles = StyleSheet.create({
  container: {
    height: sizes.screenHeight,
    backgroundColor: colors.white,
  },
  topBgImage: {
    width: sizes.screenWidth,
    height: sizes.screenHeight * 0.3,
    alignItems: 'center',
  },
  nameText: {
    color: colors.white,
    position: 'absolute',
    top: sizes.screenHeight * 0.08,
    fontSize: fontSize.large,
  },
  welcomeText: {
    color: colors.white,
    position: 'absolute',
    top: sizes.screenHeight * 0.11,
    fontSize: fontSize.h2,
    fontWeight: 'bold',
  },
  porfileView: {
    width: sizes.screenWidth * 0.9,
    height: sizes.screenHeight * 0.12,
    position: 'absolute',
    top: sizes.screenHeight * 0.22,
    backgroundColor: colors.white,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    padding: 13,

    shadowColor: '#305430',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.18,
    shadowRadius: 4.59,
    elevation: 5,
  },

  text1: {
    fontWeight: 'bold',
    fontSize: fontSize.large,
    color: colors.black,
  },
  text2: {
    fontWeight: '500',
    fontSize: fontSize.medium,
    color: colors.black,
  },
  earnMoreButton: {
    backgroundColor: colors.black,
    borderRadius: 20,
    width: sizes.screenWidth * 0.2,
    height: sizes.screenHeight * 0.035,
    alignItems: 'center',
    justifyContent: 'center',
  },
  earnMoreText: {
    fontSize: fontSize.small,
    color: colors.white,
  },
  bottomView: {
    width: sizes.screenWidth * 0.9,
    height: sizes.screenHeight * 0.45,
    alignSelf: 'center',
    backgroundColor: colors.white,
    marginTop: sizes.screenHeight * 0.05,
    padding: 10,
    borderRadius: 10,

    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.15,
    shadowRadius: 1.0,
    elevation: 1,
  },
  pollsView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: sizes.screenWidth * 0.01,
    marginTop: sizes.screenHeight * 0.01,
  },
  innerPollView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  pollsTextView: {
    flexDirection: 'colums',
    marginLeft: sizes.screenWidth * 0.03,
  },
  imageLogo: {
    width: sizes.screenWidth * 0.17,
    height: sizes.screenHeight * 0.08,
    borderRadius: 7,
  },
  bestDealButton: {
    backgroundColor: colors.white,
    borderRadius: 20,
    width: sizes.screenWidth * 0.16,
    height: sizes.screenHeight * 0.03,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: colors.disabledBg2,
    borderStyle: 'solid',
    borderWidth: 1,
  },
  bestDealText: {
    fontSize: fontSize.small,
    color: colors.disabledBg2,
  },
  amountButton: {
    backgroundColor: colors.black,
    borderRadius: 20,
    width: sizes.screenWidth * 0.17,
    height: sizes.screenHeight * 0.035,
    alignItems: 'center',
    justifyContent: 'center',
  },
  amountButtonText: {
    fontSize: fontSize.smallM,
    color: colors.white,
  },
});
