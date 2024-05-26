import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, Animated, FlatList, Alert,Image, TextInput } from 'react-native';


import MockUpStyles from './MockUpStyles';
import Colors from '../../Components/GlobalStyles/colors'


function Forth(){
    return(
        <>
        <Text style={MockUpStyles.Title}>
    Register Your Account
</Text>


<Text style={[MockUpStyles.Title,{marginTop:150}]}>
    Become a part of us
</Text>
<Text
  style={{color:Colors.FontColorII,textAlign:'center'}}
  >
    By clicking below, login with google buttonn you will be registered on our platform, you will get daily updates about our platform on your mail.
  </Text>


        </>
    )
}
export default Forth