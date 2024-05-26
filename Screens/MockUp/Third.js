import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, Animated, FlatList, Alert,Image, TextInput } from 'react-native';


import MockUpStyles from './MockUpStyles';
import Colors from '../../Components/GlobalStyles/colors'
import Notifications from '../../Components/Data/Images/Notifications.png'
import model from '../../Components/Data/Images/model.png'
import { LinearGradient } from 'expo-linear-gradient';

function Third(){
    return(
        <>
        <Text style={MockUpStyles.Title}>
    Enable Notifications
</Text>


<LinearGradient
   colors={[Colors.PrimaryColor, Colors.PrimaryColor,Colors.SeconderyColor, Colors.SeconderyColor]}  

style={MockUpStyles.NotifCover}
>
<Image
 source={Notifications}
 style={{width:300,height:300}}
 />
</LinearGradient>


        </>
    )
}
export default Third