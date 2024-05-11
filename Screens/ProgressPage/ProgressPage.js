import React, { useState, useEffect } from 'react';
import { View, Text, Image, FlatList, TouchableOpacity } from 'react-native';


import ProgressStyles from './ProgressPageStyles';
import ScanFace from '../../Components/Data/Images/FaceScan.jpg'
import GetAllScans from '../../Components/GlobalCalls/GetAllScans';


// Sample API call function to simulate fetching an AI response.
// Remember to replace placeholder values with actual data for your AI service.
import { useIsFocused } from '@react-navigation/native';
import Colors from '../../Components/GlobalStyles/colors';
import { useNavigation } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';
const ProgressPage = () => {

  const navigation = useNavigation()
const focused = useIsFocused()
  const [allScans,setAllScans]=useState([])
  useEffect(()=>{
 async function getData(){
  const response = await GetAllScans()
  if(response.status === "200"){

    setAllScans(response.data) 
  }

}
getData()

  },[focused])


const renderItems=({item})=>(
<TouchableOpacity
onPress={()=>  navigation.navigate("FacialAnalysisScreen",{data:item}) }
style={ProgressStyles.ListCard}> 

<View style={ProgressStyles.ListRatingWrapper}>
<Text style={[ProgressStyles.TitleTwo,{fontSize:14}]}>
    {item.total_score}
  </Text>
</View>
<View style={{width:"70%"}}>
  <Text style={[ProgressStyles.TitleTwo,{fontSize:18,marginBottom:0}]}>
    Scan {item.scan}
  </Text>
  <Text style={{color:Colors.FontColorI,fontWeight:'300'}}>
   Click here to see the Scan details !
  </Text>
</View>
</TouchableOpacity>
  )

  return (
    <View
       style={ProgressStyles.container}>

    <Text style={ProgressStyles.Title}>1 🔥 Day Streak</Text>
    < LinearGradient 
        colors={[Colors.PrimaryColor, Colors.PrimaryColor,Colors.SeconderyColor, Colors.SeconderyColor]}  
style={ProgressStyles.ProgressCard}>
<View>
<Text style={[ProgressStyles.TitleTwo,{fontSize:24}]}>Your Progress</Text>
<View style={ProgressStyles.ViewBtn}>
  <Text style={ProgressStyles.ViewBtnTxt}>
    View
  </Text>
</View>
</View>

<Image 
      source={ScanFace}
      style={{width:80,height:80,borderRadius:1000,}}
      />
{/* </View> */}
      </LinearGradient>
<Text style={[ProgressStyles.TitleTwo,{alignSelf:'flex-start',margin:10}]}>Your Scans</Text>
{
  allScans.length >= 1 &&
<FlatList 
data={allScans}
renderItem={renderItems}
/>
}

</View>
  );
};


export default ProgressPage;






