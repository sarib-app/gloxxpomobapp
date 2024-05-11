import React, { useState, useEffect } from 'react';
import { View, Text, Image, FlatList, TouchableOpacity } from 'react-native';


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


const data = [
    {
        id:1,
        title:"Improve you over all",
        icon:"🔥",
        query:"Improve my looks over all",
        colorI:"#003C43",
        colorII:"#135D66",
        color:"#E3FEF7"
    },
    {
        id:2,
        title:"Gain more muscle",
        icon:"💪",
        query:"Help me get more msucles",

        colorI:"#008DDA",
        colorII:"#41C9E2",
        color:"#ACE2E1"
    },
    {
        id:13,
        title:"Lose body fat",
        icon:"🥵",
        query:"Lose my body fats",

        colorI:"#FFF3C7",
        colorII:"#FEC7B4",
        color:"#FC819E"
    },
    {
        id:1,
        title:"Get clear skin",
        icon:"💆🏻",
        query:"To clear my skin and make it look more smooth and good",

        colorI:"#1B1A55",
        colorII:"#535C91",
        color:"#9290C3"
    },
    {
        id:1,
        title:"Sharpen your jawline",
        icon:"🗿",
        query:"to sharpen my jawline",

        colorI:"#739072",
        colorII:"#86A789",
        color:"#D2E3C8"
    },

    
]
const SuggestionScreen = () => {

  const navigation = useNavigation()
const focused = useIsFocused()


const renderItems=({item})=>(
<TouchableOpacity
onPress={()=>  navigation.navigate("FormScreen",{data:item}) }
style={SuggestioonStyles.ListCard}> 
<View style={{flexDirection:"row",alignItems:'center'}}>
< LinearGradient 
    colors={[item.color, item.colorI,item.colorII]}
    style={SuggestioonStyles.ListRatingWrapper}
    >


<Text style={[SuggestioonStyles.TitleTwo,{fontSize:30}]}>
    {item.icon}
  </Text>

</LinearGradient>

  <Text style={[SuggestioonStyles.TitleTwo,{fontSize:16,marginLeft:10}]}>
     {item.title}
  </Text>
 
</View>
<Ionicons 
color="white"
size={20}
name="chevron-forward"
style={{marginRight:10}}
/>
</TouchableOpacity>
  )

  return (
    <View
       style={SuggestioonStyles.container}>

    <Text style={SuggestioonStyles.Title}>Your Coach</Text>
    <TouchableOpacity
onPress={()=>  navigation.navigate("FacialAnalysisScreen",{data:item}) }
style={[SuggestioonStyles.ListCard,{marginTop:10}]}> 
<View style={{flexDirection:"row",alignItems:'center'}}>
< LinearGradient 
    colors={["#6962AD", "#6962AD","#83C0C1"]}
    style={SuggestioonStyles.ListRatingWrapper}
    >


<Text style={[SuggestioonStyles.TitleTwo,{fontSize:30}]}>
   💬
  </Text>

</LinearGradient>

  <Text style={[SuggestioonStyles.TitleTwo,{fontSize:16,marginLeft:10}]}>
    Ask me anything
  </Text>
 
</View>
<Ionicons 
color="white"
size={20}
name="chevron-forward"
style={{marginRight:10}}
/>
</TouchableOpacity>

<Text style={[SuggestioonStyles.TitleTwo,{alignSelf:'flex-start',margin:10}]}>Your Scans</Text>
{
  data.length >= 1 &&
<FlatList 
data={data}
renderItem={renderItems}
/>
}

</View>
  );
};


export default SuggestionScreen;






