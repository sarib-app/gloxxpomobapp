import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, Animated, FlatList, Alert,Image, TextInput } from 'react-native';


import MockUpStyles from './MockUpStyles';
import Colors from '../../Components/GlobalStyles/colors'
import stars from '../../Components/Data/Images/5Star.png'
import model from '../../Components/Data/Images/model.png'
import { LinearGradient } from 'expo-linear-gradient';
function Second(){
    return(
        <>
        <Text style={MockUpStyles.Title}>
    Do you have a referal code?
</Text>

  <View style={MockUpStyles.TextInput}>
<TextInput
placeholder='Enter Referal code'
placeholderTextColor={Colors.FontColorII}
style={{marginLeft:10,flex:1}}
/>
  </View>
  <Text
  style={{color:Colors.FontColorII}}
  >
    Enter refer code if you have any, else skip.
  </Text>
        </>
    )
}
export default Second