import React, { useState, useEffect } from 'react';
import { View, Text,Image, TouchableOpacity, Alert } from 'react-native';


import HomeStyles from './HomeStyles';
import ScanFace from '../../Components/Data/Images/FaceScan.jpg'
import Colors from '../../Components/GlobalStyles/colors';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import StarRatingModal from '../../Components/GlobalStyles/Rating';
// import Superwall from '@superwall/react-native-superwall';
// Sample API call function to simulate fetching an AI response.
// Remember to replace placeholder values with actual data for your AI service.

const HomeScreen = () => {


//   const onLogCaffeine = () => {
//     Superwall.shared.register('caffeineLogged').then((d) => {
//       console.log(d)
//       Alert.alert("Its successfull")
//       // presentLogCaffeine();
//     });
// };
const navigation =  useNavigation()
  return (
    <View
       style={HomeStyles.container}>
<Text  style={HomeStyles.Title}>
 Face Scan
</Text>
<View style={HomeStyles.ImageWrapper}>

    <Image 
      source={ScanFace}
      style={{width:300,height:300,borderRadius:20,}}
    />
</View>
<Text  style={HomeStyles.TitleTwo}>
  Get your ratings and recommendations
</Text>
<Text  style={HomeStyles.DescText}>
 Scan your face to get complete rating on your looks and recommendations to make your face look better than ever.
</Text>
<TouchableOpacity
style={{marginTop:30}}
onPress={()=> {
  // onLogCaffeine()
  navigation.navigate("UploadImage")
  }}
>

<LinearGradient 
    colors={[Colors.PrimaryColor, Colors.PrimaryColor,Colors.SeconderyColor, Colors.SeconderyColor]}  


         
          style={
            HomeStyles.GenerateResponseBtn}
        >

           
          <Text
            style={
              HomeStyles.ButtonTxt}
          >
           Begin Scan   
          </Text>
         
        </LinearGradient>
        </TouchableOpacity>
{/* <StarRatingModal /> */}
    </View>
  );
};


export default HomeScreen;






