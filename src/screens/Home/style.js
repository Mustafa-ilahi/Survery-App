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
    width: sizes.screenWidth * 0.85,
    height: sizes.screenHeight * 0.12,
    position: 'absolute',
    top: sizes.screenHeight * 0.22,
    backgroundColor: colors.white,
    borderRadius: 15,
    alignItems: 'center',
    flexDirection: 'row',

    shadowColor: '#305430',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.18,
    shadowRadius: 4.59,
    elevation: 5,
  },
  profileImage: {
    width: sizes.screenWidth * 0.25,
    height: sizes.screenWidth * 0.2,
    resizeMode: 'contain',
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
    backgroundColor: 'black',
    paddingHorizontal: 12,
    paddingVertical: 5,
    borderRadius: 20,
    marginLeft: sizes.screenWidth * 0.07,
  },
  earnMoreText: {
    fontSize: fontSize.small,
    color:colors.white
  },
  bottomView: {
    width: sizes.screenWidth * 0.9,
    height: sizes.screenHeight * 0.6,
    alignSelf: 'center',
    backgroundColor: colors.white,
    marginTop: sizes.screenHeight * 0.05,
    padding: 10,
  },
  pollsView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: sizes.screenWidth * 0.01,
    marginTop:sizes.screenHeight * 0.01
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
    borderRadius: 10,
  },
});
