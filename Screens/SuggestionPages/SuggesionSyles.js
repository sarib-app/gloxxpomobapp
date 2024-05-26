import {
    StyleSheet,
    Dimensions
} from 'react-native'
import Colors from '../../Components/GlobalStyles/colors';
const WindowWidth = Dimensions.get('screen').width
const WindowHeight = Dimensions.get('window').height;
const SuggestioonStyles = StyleSheet.create({
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
    ResponseTxt:{
        color:Colors.FontColorI,
        fontSize:18,
        fontWeight:'400',
        // textAlign:'center'
    },

ListCard:{
    width:WindowWidth/1.15,
    height:WindowHeight/10,
    // backgroundColor:Colors.BgColorII,
    borderWidth:1,
    borderColor:Colors.FontColorI,
    borderRadius:10,
    // shadowColor:Colors.FontColorI,
    // elevation:4,
    marginBottom:10,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between'


},
ListRatingWrapper:{
    width:80,
    height:WindowHeight/10,
    borderWidth:1,
    borderColor:Colors.FontColorI,
    borderRadius:10,
    borderRightWidth:0,
    borderTopRightRadius:0,
    borderBottomRightRadius:0,
    // marginLeft:10,
    backgroundColor:Colors.PrimaryColor,
    borderRadius:10,
    justifyContent:'center',
    alignItems:'center'
},
InputWrapper:{
    width:WindowWidth/1.2,
    height:WindowHeight/18,
    borderRadius:10,
    borderWidth:1,
    borderColor:Colors.FontColorI
}, GenerateResponseBtn: {
    // marginRight: 10,
    padding: 70,
    paddingVertical: 10,
    flexDirection:"row",alignItems:"center",
    justifyContent:'space-between',
 
 
    borderRadius: 1000,
    //   borderColor: Colors.FontColorI,
    backgroundColor: Colors.Dark,
    // marginBottom:10,
    elevation: 10,
    shadowColor: Colors.Dark,
    shadowOpacity: 2,
},
ButtonTxt: {
    fontWeight: '500',
    fontSize: 18,
    color: Colors.FontColorI,
    marginRight:10
},
SugestionBox:{
    width:WindowWidth/1.2,
    maxHeight:WindowHeight/1.3,
    minHeight:WindowHeight/14,
    borderRadius:20,
    backgroundColor:Colors.bgIII,
    padding:20,
    marginTop:30
}
});

export default SuggestioonStyles