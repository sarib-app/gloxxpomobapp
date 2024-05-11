import {
    StyleSheet,
   Dimensions
  } from 'react-native'
import Colors from '../../Components/GlobalStyles/colors';
const WindowWidth = Dimensions.get('screen').width
  const WindowHeight = Dimensions.get('window').height; 
  const PackageStyles = StyleSheet.create({ 
TitleTxt:{
    fontSize:45,
    color:Colors.PrimaryColor,
    fontWeight:'bold'
},
DetailTxt1:{
    fontSize:27,
    color:Colors.Dark,
    fontWeight:'bold'
},
PackageSubBox:{
    width:WindowWidth/1.2,
    height:WindowHeight/3.5,
    backgroundColor:Colors.FontColorII,
    borderRadius:20,
    borderWidth:4,
    borderColor:Colors.PrimaryColor,
    margin:60,

    alignItems:'center'
},
PackageeadBox:{
    width:100,height:30,
    backgroundColor:Colors.PrimaryColor,
    borderRadius:20,
    justifyContent:'center',
    alignItems:'center',
    marginTop:-15
  
},
PlainTxt:{
    color:Colors.FontColorI,
    fontWeight:'bold',
    fontSize:15
},
PlainTxt1:{
    color:Colors.Dark,
    fontWeight:'bold',
    fontSize:15
},
PlainTxt2:{
    color:Colors.BgColorII,
    fontWeight:'bold',
    fontSize:12,
    textAlign:'center'
},
SubscribeBtn:{
    width:WindowWidth/1.5,height:WindowHeight/20,
    backgroundColor:Colors.PrimaryColor,
    borderRadius:1000,
    justifyContent:'center',
    alignItems:'center',
    margin:30
  
},
GradientTextWrapper: {
    position: 'relative',
    backgroundColor: 'transparent',
  },
  GradientTextBackground: {
    position: 'absolute',
    left: 0,
    top: 0,
    right: 0,
    bottom: 0,
  },
  GradientMaskedText: {
    opacity: 0, // This makes the original text fully transparent
  },
  })
  export default PackageStyles