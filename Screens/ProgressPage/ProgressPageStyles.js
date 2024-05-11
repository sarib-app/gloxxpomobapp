import {
    StyleSheet,
    Dimensions
} from 'react-native'
import Colors from '../../Components/GlobalStyles/colors';
const WindowWidth = Dimensions.get('screen').width
const WindowHeight = Dimensions.get('window').height;
const ProgressStyles = StyleSheet.create({
    container: {
        flex: 1,
        //   height:WindowHeight,
        //   width:WindowWidth,
        backgroundColor: Colors.Dark,
        alignItems: 'center',
        // justifyContent: 'center',

        padding: 10,
    },
    Title:{
        color:Colors.FontColorI,
        fontSize:25,
        fontWeight:'bold',
        textAlign:'center',
        alignSelf:'flex-start',
        marginLeft:10
    },
    TitleTwo:{
        color:Colors.FontColorI,
        fontSize:20,
        fontWeight:'bold',
        // textAlign:'center'
    },
    ProgressCard:{
        width:WindowWidth/1.15,
        backgroundColor:Colors.PrimaryColor,
        flexDirection:'row',
        justifyContent:'space-evenly',
        alignItems:'center',
        height:WindowHeight/7,
        borderRadius:10,
        marginTop:20
},
ViewBtn:{
    padding:10,
    // width:80,
    paddingVertical:10,
    backgroundColor:Colors.FontColorI,
    marginTop:5,
    borderRadius:1000,
    justifyContent:'center',
    alignItems:'center'
},
ViewBtnTxt:{
    color:Colors.PrimaryColor,
    fontSize:16,
    fontWeight:'bold'
},
ListCard:{
    width:WindowWidth/1.15,
    height:WindowHeight/10,
    backgroundColor:Colors.BgColorII,
    borderRadius:10,
    shadowColor:Colors.FontColorI,
    elevation:4,marginBottom:10,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-evenly'


},
ListRatingWrapper:{
    width:60,
    height:60,
    // marginLeft:10,
    backgroundColor:Colors.BgColor,
    borderRadius:1000,
    justifyContent:'center',
    alignItems:'center'
}
});

export default ProgressStyles