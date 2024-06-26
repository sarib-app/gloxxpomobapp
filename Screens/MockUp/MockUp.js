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
import * as Google from 'expo-auth-session/providers/google';
import * as WebBrowser from 'expo-web-browser';
import LoginCall from '../../Components/GlobalCalls/LoginCall';
import AsyncStorage from '@react-native-async-storage/async-storage';
WebBrowser.maybeCompleteAuthSession();

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
const [accessToken, setAccessToken] = React.useState();
const [userInfo, setUserInfo] = React.useState();
const [message, setMessage] = React.useState();
const [loading,setLoading]=useState(false)
function handleContinue(){
    if(index < 4){

        setIndex(index+1)
    }
}

async function LocalLogin(){
  setLoading(true)
  const formdata = new FormData();
  formdata.append("name", "example");
  formdata.append("email", "example@gmail.com");
  formdata.append("password", "abcd123");
  formdata.append("referred_by", "");
  
  const requestOptions = {
    method: "POST",
    body: formdata,
    redirect: "follow"
  };
  
  fetch("https://glowx.alphanitesofts.net/api/loginOrRegister", requestOptions)
    .then((response) => response.json())
    .then((result) => {
      if(result.status == "200"){
        AsyncStorage.setItem("user", JSON.stringify(result.user))
        navigation.navigate("BottomNavigation")
    }
      console.log(result)})
    .catch((error) => console.error(error))
    .finally(()=>{
      setLoading(false)
    })}
const [request, response, promptAsync] = Google.useAuthRequest({
    androidClientId: "478045906474-lue2r84m0vcg977e4gg6iq20fi2jd45u.apps.googleusercontent.com"
  });

  React.useEffect(() => {
    // setMessage(JSON.stringify(response));
    if (response?.type === "success") {

        console.log(response.authentication.accessToken)
      // setAccessToken(response.authentication.accessToken);
       getUserData(response.authentication.accessToken)
    }
  }, [response]);

  async function getUserData(token) {
    let userInfoResponse = await fetch("https://www.googleapis.com/userinfo/v2/me", {
      headers: { Authorization: `Bearer ${token}`}
    });

    userInfoResponse.json().then(data => {
    //   setUserInfo(data);
      console.log(data)
    });
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
    // onPress={() =>  index === 4 ? navigation.navigate("BottomNavigation") :handleContinue()}
    // onPress={() =>  index === 4 ? LocalLogin() :handleContinue()}
    onPress={() =>  index === 4 ? promptAsync({showInRevents: true})  :handleContinue()}



    // onPress={accessToken ? getUserData(accessToken) : () => { promptAsync({showInRevents: true}) }}
    
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
           {loading === true ? "loading...":"Login"}    
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






