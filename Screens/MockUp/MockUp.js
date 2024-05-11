import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, Animated, FlatList, Alert,Image } from 'react-native';


import MockUpStyles from './MockUpStyles';
import Colors from '../../Components/GlobalStyles/colors'
import stars from '../../Components/Data/Images/5Star.png'
import Glogin from '../../Components/Data/Images/Glogin.png'
import { LinearGradient } from 'expo-linear-gradient';
import First from './FirstScreen';
import Second from './SecondScreen';
import Third from './Third';
import Forth from './Forth';
import { useNavigation } from '@react-navigation/native';
 
const indexing = [
    {
        id:1
    },
    {
        id:2
    },
    {
        id:3
    },
    {
        id:4
    },
]
// Sample API call function to simulate fetching an AI response.
// Remember to replace placeholder values with actual data for your AI service.

const MockUp = () => { 
    const navigation = useNavigation()
const [index,setIndex]=useState(1)


function handleContinue(){
    if(index < 4){

        setIndex(index+1)
    }
}



function HandleChild(){
     if(index === 1){
        return(
            <First/>
        )
     }
     else if(index === 2){
        return(
            <Second/>
        )
     }
     else if(index === 3){
        return(
            <Third/>
        )
     }
     else if(index === 4){
        return(
            <Forth/>
        )
     }
}




const renderItem =({item}) => (
<View style={[MockUpStyles.ListItem,{backgroundColor:item.id === index ? Colors.FontColorI:Colors.inActive}]}>

</View>
    )

  return (
    <View
       style={MockUpStyles.container}>
<View style={MockUpStyles.ListWrpper}> 

<FlatList
        data={indexing}
        renderItem={renderItem}
        horizontal
        />
 
</View>
<HandleChild/>

<TouchableOpacity
    onPress={() =>  index === 4 ? navigation.navigate("BottomNavigation") :handleContinue()}
   style={{   position: 'absolute', bottom: 60,}}
   >
{
index === 4 ?
        <LinearGradient 
    colors={[Colors.PrimaryColor, Colors.PrimaryColor,Colors.SeconderyColor, Colors.SeconderyColor]}  


         
          style={
            MockUpStyles.GenerateResponseBtn}
        >

            <Image 
            source={Glogin}
            style={{width:40,height:40}}
            />
          <Text
            style={
              MockUpStyles.ButtonTxt}
          >
           Login    
          </Text>
         
        </LinearGradient>
        :
        < LinearGradient 
        colors={[Colors.PrimaryColor, Colors.PrimaryColor,Colors.SeconderyColor, Colors.SeconderyColor]}  
    
    
             
              style={
                MockUpStyles.GenerateResponseBtn}
            >
              <Text
                style={
                  MockUpStyles.ButtonTxt}
              >
               Continue
              </Text>
             
        </LinearGradient>
}
</TouchableOpacity>
    </View>
  );
};


export default MockUp;






