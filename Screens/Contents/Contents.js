import React, { useState, useEffect } from 'react';
import { View, Text, Image, FlatList, TouchableOpacity, Linking } from 'react-native';



import ProgressStyles from '../ProgressPage/ProgressPageStyles';

// Sample API call function to simulate fetching an AI response.
// Remember to replace placeholder values with actual data for your AI service.
import { useIsFocused } from '@react-navigation/native';
import Colors from '../../Components/GlobalStyles/colors';
import { useNavigation } from '@react-navigation/native';

import { MaterialIcons } from '@expo/vector-icons';
const ContentScreen = () => {

  const navigation = useNavigation()
const focused = useIsFocused()



const data = [
    {
        title:"Our Privacy Policy Set",
        link:"https://app.termly.io/policy-viewer/policy.html?policyUUID=ebc88dc6-c3c0-4e7a-a8ba-9093b7d9434f",
        icon:"policy"
    },
    {
        title:"Our Terms Of Services",
        link:"https://app.termly.io/policy-viewer/policy.html?policyUUID=daa13f0d-d08b-4d3b-904b-3691ee5d9f31",
        icon:"policy"
    },
    {
        title:"Click To Delete Your Account",
        link:"https://app.termly.io/notify/ebc88dc6-c3c0-4e7a-a8ba-9093b7d9434f",
        icon:"delete-forever"
    },
    {
        title:"EULA",
        link:"https://app.termly.io/policy-viewer/policy.html?policyUUID=a3d087c7-fb95-446e-bf57-83a155f38ccf",
        icon:"verified-user"
    },  
]

const renderItems=({item})=>(
<TouchableOpacity
onPress={()=> Linking.openURL(item.link)
}
style={ProgressStyles.ListCard}> 

<View style={ProgressStyles.ListRatingWrapper}>
<MaterialIcons size={24} name={item.icon} color={"white"}/>
</View>
<View style={{width:"70%"}}>
  <Text style={[ProgressStyles.TitleTwo,{fontSize:18,marginBottom:0}]}>
    {item.title}
  </Text>
  {/* <Text style={{color:Colors.FontColorI,fontWeight:'300'}}>
   Click here to see the Scan details !
  </Text> */}

</View>
</TouchableOpacity>
  )

  return (
    <View
       style={ProgressStyles.container}>
  
    <Text style={[ProgressStyles.Title,{alignSelf:'center',marginTop:50,marginBottom:20}]}>Content & Data</Text>


    <FlatList 
data={data}
renderItem={renderItems}
/>
</View>
  );
};


export default ContentScreen;






