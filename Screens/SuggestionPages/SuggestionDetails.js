import React, { useState, useEffect } from 'react';
import { View, Text, Image, FlatList, TouchableOpacity ,ScrollView} from 'react-native';


import ScanFace from '../../Components/Data/Images/FaceScan.jpg'
import GetAllScans from '../../Components/GlobalCalls/GetAllScans';

import { LinearGradient } from 'expo-linear-gradient';
// Sample API call function to simulate fetching an AI response.
// Remember to replace placeholder values with actual data for your AI service.
import { useIsFocused } from '@react-navigation/native';
import Colors from '../../Components/GlobalStyles/colors';
import { useNavigation } from '@react-navigation/native';
import SuggestioonStyles from './SuggesionSyles';
import Ionicons from 'react-native-vector-icons/Ionicons'
// import { ScrollView } from 'react-native-gesture-handler';


const SuggestionDetails = ({route}) => {
const {contet} = route.params
  const navigation = useNavigation()
const focused = useIsFocused()
// console.log(content,"thattt is")

  return (
    <View
    
    style={[SuggestioonStyles.container]}>
        <Text style={[SuggestioonStyles.TitleTwo,{marginTop:20}]}>
         Suggestion Details Here
        </Text>
        < LinearGradient 
    colors={["#003C43", "#135D66","#9AD0C2"]}
 style={SuggestioonStyles.SugestionBox}>
    <ScrollView>

    <Text style={{color:Colors.FontColorI,fontWeight:'400',fontSize:18}}>
        {contet}
    </Text>
    </ScrollView>

</LinearGradient>

</View>
  );
};


export default SuggestionDetails;






