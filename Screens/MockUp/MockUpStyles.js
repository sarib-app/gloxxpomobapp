import {
    StyleSheet,
    Dimensions
} from 'react-native'
import Colors from '../../Components/GlobalStyles/colors';
const WindowWidth = Dimensions.get('window').width
const WindowHeight = Dimensions.get('window').height;
const MockUpStyles = StyleSheet.create({
    container: {
        flex: 1,
        //   height:WindowHeight,
        //   width:WindowWidth,
        backgroundColor: Colors.Dark,
        alignItems: 'center',
        // justifyContent: 'center',
        padding: 20,
    },
    Title:{
        fontSize:24,
        color:Colors.FontColorI,
        fontWeight:'bold',
        marginTop:10
    },
    ListWrpper:{
        width:WindowWidth/1.02,
        // backgroundColor:'yellow',
        alignItems:'center'
    },
    ListItem:{
        backgroundColor:Colors.inActive,
        borderRadius:20,
        width:WindowWidth/5,
        height:4,
        marginLeft:2
    },
    GenerateResponseBtn: {
        // marginRight: 10,
        padding: 80,
        paddingVertical: 7,
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
        fontWeight: '400',
        fontSize: 20,
        color: Colors.FontColorI,
        marginRight:10
    },
    TextInput:{
        width:WindowWidth/1.2,
        backgroundColor:Colors.BgColorII,
        height:WindowHeight/16,
        borderRadius:15,
        marginTop:20
    },
    NotifCover:{
        height:200,
        width:200,
        borderRadius:1000,
        backgroundColor:'red',
        alignItems:'center',
        justifyContent:'center',
        marginTop:100
    }
  
});

export default MockUpStyles