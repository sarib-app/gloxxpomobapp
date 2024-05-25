import React,{useState,useEffect} from 'react';
import { Text, View } from 'react-native';
import Colors from '../Components/GlobalStyles/colors';
function LoadingMockup(){
    return(
        <View style={{flex:1,backgroundColor:Colors.Dark,justifyContent:"center",alignItems:"center"}}>
        <Text style={{color:Colors.FontColorI}}>Loading.....</Text>
       </View>
    )
}
export default LoadingMockup