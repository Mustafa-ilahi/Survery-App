import {Dimensions, StyleSheet} from 'react-native';
import {colors, fontFamily, fontSize, sizes} from '../../services';

export const styles = StyleSheet.create({
  container: {
    height: sizes.screenHeight,
    backgroundColor: colors.white,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  header:{
    flexDirection:"row",
    alignItems:"center",
    justifyContent:"space-between",
    paddingHorizontal:sizes.screenWidth * 0.03,
    marginTop:sizes.screenHeight * 0.02
  },
  arrowImg: {
    height: sizes.screenHeight * 0.02,
    width: sizes.screenWidth * 0.03,
  },
  arrowText:{
    fontWeight:"bold",
    fontSize:fontSize.h6
  },
  Text2:{
    color:colors.appTextColor1
  },
  progressBarView:{
    // backgroundColor:"red",
    // width:200,
    // height:20,
    // marginLeft:10,
    // alignItems:"center",
    // justifyContent:"center"
    // width:20
  },
  progressBarImg:{
    // width:180
    // marginLeft:150
    width:sizes.screenWidth*0.09
  }
});
