import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, Animated, FlatList, Alert,Image } from 'react-native';


import MockUpStyles from './MockUpStyles';
import Colors from '../../Components/GlobalStyles/colors'
import stars from '../../Components/Data/Images/5Star.png'
import model from '../../Components/Data/Images/model.png'
import logo from '../../assets/logo.gif'
import name from '../../assets/name.png'
import { LinearGradient } from 'expo-linear-gradient';
function First(){
    return(
        <>
        <Text style={MockUpStyles.Title}>
    Trusted by 100k+ People
</Text>
<Image 
source={logo}
style={{width:150,height:150,marginTop:50}}
/>
<Image 
source={name}
style={{width:100,height:30,marginTop:20}}
/>
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