import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, Animated, FlatList, Alert,Image } from 'react-native';


import MockUpStyles from './MockUpStyles';
import Colors from '../../Components/GlobalStyles/colors'
import stars from '../../Components/Data/Images/5Star.png'
import model from '../../Components/Data/Images/model.png'
import { LinearGradient } from 'expo-linear-gradient';
function First(){
    return(
        <>
        <Text style={MockUpStyles.Title}>
    Trusted by 100k+ People
</Text>
<Image 
source={model}
style={{width:250,height:250,marginTop:50}}
/>
<Text style={MockUpStyles.Title}>
    Glow X
</Text>
<Text style={[MockUpStyles.Title,{marginTop:10}]}>
    Become a part of us
</Text>
<Text
  style={{color:Colors.FontColorII,textAlign:'center'}}
  >
    By clicking below, login with google buttonn you will be registered on our platform, you will get daily updates about our platform on your mail.
  </Text>
<Image 
source={stars}
style={{width:190,height:180,marginTop:-20}}
/>
    {/* <Text>Mock Up</Text> */}

        </>
    )
}
export default First