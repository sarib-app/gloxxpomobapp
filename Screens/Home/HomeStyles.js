import {
    StyleSheet,
    Dimensions
} from 'react-native'
import Colors from '../../Components/GlobalStyles/colors';
const WindowWidth = Dimensions.get('screen').width
const WindowHeight = Dimensions.get('window').height;
const HomeStyles = StyleSheet.create({
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
        color:Colors.FontColorI,
        fontSize:40,
        fontWeight:'bold',
        textAlign:'center'
    },
    TitleTwo:{
        color:Colors.FontColorI,
        fontSize:30,
        fontWeight:'bold',
        textAlign:'center'
    },
    DescText:{
        color:Colors.FontColorI,
        fontSize:14 ,
        fontWeight:'300',
        textAlign:'center'
    },
    ImageWrapper:{
        borderColor:Colors.PrimaryColor,
        borderWidth:1,
        shadowColor:"white",
        elevation:10,
        borderRadius:20,
        margin:20
    },
    GenerateResponseBtn: {
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




});

export default HomeStyles