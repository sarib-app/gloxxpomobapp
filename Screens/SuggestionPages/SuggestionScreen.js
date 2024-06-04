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
import Superwall from '@superwall/react-native-superwall';
import ReferModal from '../Modals/ReferModal';


const data = [
    {
        id:1,
        title:"Elevate jawline",
        icon:"🗿",
        query:"How can i elevate my jawline look shar and perfect, hhow can i improve my faceshape",
        colorI:"#003C43",
        colorII:"#135D66",
        color:"#E3FEF7"
    },
    {
        id:2,
        title:"Skin Quality - Fixing Dark Spots",
        icon:"💆🏻",
        query:"How can i improve my skin quality and remove dark spots on my face, what can i do to avoid dark spots, suggest some products to improve my over all skin quality",

        colorI:"#739072",
        colorII:"#86A789",
        color:"#D2E3C8"
    },
    {
        id:3,
        title:"Face Shape - Makeup and More",
        icon:"💄👱🏻‍♀️",
        query:"I am a female how can i improve my face shape, whichh kind of make should i apply to look more attractive and stunning.",

        colorI:"#003C13",
        colorII:"#102D00",
        color:"#E3FEF7"
    },
    {
        id:4,
        title:"Guide to your hair/eye color",
        icon:"💇🏻‍♀️",
        query:"I am a female how can i improve my hair quality and enhhance my eyes color and beauty, improve hair colorr, quality and health",

        colorI:"#1B1A55",
        colorII:"#535C91",
        color:"#9290C3"
    },
   

    
]
const SuggestionScreen = () => {

  const navigation = useNavigation()
const focused = useIsFocused()

const [isSubscribed,setIsSubscribed]=useState(false)

useEffect(()=>{
  Superwall.shared.getSubscriptionStatus('StartWorkout').then((e)=>{
    console.log(e)
    if(e == "INACTIVE" || e  == undefined || e  == "UNKNOWN" || e == null || e == false || e == "null" || e == "NULL" || e == "false" ){
    setIsSubscribed(false)
    }
    else{
      setIsSubscribed(true)
    }
    })
},[focused])

function OnClickk(item){
  if(isSubscribed === true){
    // navigation.navigate("FormScreen",{data:item})
    navigation.navigate("FeedBack",{prompt: item.query,title:item.title})

  }
  else{
    Superwall.shared.register('StartWorkout').then((e) => {
      if(e == "INACTIVE" || e  == undefined || e  == "UNKNOWN" || e == null || e == false || e == "null" || e == "NULL" || e == "false" ){
      }
      else{
        navigation.navigate("FormScreen",{data:item})

      }

}).
catch((e)=>{
console.log(e)
})
  }
} 


const renderItems=({item})=>(
<TouchableOpacity
onPress={()=> OnClickk(item) }
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

  <Text style={[SuggestioonStyles.TitleTwo,{fontSize:14,marginLeft:10,width:"60%"}]}>
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
<View style={{width:"100%",justifyContent:"space-between",flexDirection:'row',alignItems:'center',marginTop:20}}>

    <Text style={SuggestioonStyles.Title}>Your Coach</Text>
    <TouchableOpacity
    onPress={()=>{
      navigation.navigate("ContentScreen")
    }}
    style={{marginRight:10}}
    >

    <Ionicons name="settings" size={24} color="white" />
    </TouchableOpacity>
    </View>
    <TouchableOpacity
// onPress={()=>  navigation.navigate("FacialAnalysisScreen",{data:item}) }
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

<Text style={[SuggestioonStyles.TitleTwo,{alignSelf:'flex-start',margin:10}]}>your guides</Text>
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






