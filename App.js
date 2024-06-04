import React,{useEffect,useState} from 'react';
import {
  StyleSheet,

} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createStackNavigator } from '@react-navigation/stack';


// import SplashScreen from "react-native-splash-screen"; //import SplashScree

import { LogBox } from 'react-native';
import HomeScreen from './Screens/Home/HomeScreen';
import MockUp from './Screens/MockUp/MockUp';
import BottomNavigation from './Components/BottomNavigation/BottomNavigation';
import UploadImage from './Screens/UploadImage/UploadIMage';
import FacialAnalysisScreen from './Screens/Analysis/FacialAnalysisScreen';
import FormScreen from './Screens/SuggestionPages/FormScreen';
import SuggestionDetails from './Screens/SuggestionPages/SuggestionDetails';
import FeedBack from './Screens/SuggestionPages/FeedBack';
import Superwallfunc from './Screens/Superwall/SuperWall';
import getAsyncData from './Components/GlobalCalls/GetAsyncData';
import LoadingMockup from './Screens/LoadingMockUp';
import Superwall from "@superwall/react-native-superwall"

import { Platform } from 'react-native';
import ContentScreen from './Screens/Contents/Contents';
LogBox.ignoreAllLogs()
// const Stack = createNativeStackNavigator();
const Stack = createStackNavigator();

const App = () => {


const [loggedIn,setLoggedIn]=useState(false)
const [inital,setInitial]=useState("MockUp")
const [loading,setLoading]=useState(true)

React.useEffect(() => {
  const apiKey = "pk_38758fd8d577e2e6eb34285fe0739ceae72ba23b5eed2c59"

  Superwall.configure(apiKey)
}, [])
useEffect(()=>{
  // Superwallfunc()
  // SplashScreen.hide()
 async function GetAsyncDataa(){
  const localData = await getAsyncData()
  console.log("localll",localData)
  if(localData != null){
    setInitial("BottomNavigation")
  setLoading(false)

  }else{
    setLoading(false)
  }
 }
 GetAsyncDataa()

},[])


if(loading === true){
  return(

    <LoadingMockup/>
  )
}

return( 
    <NavigationContainer>
    <Stack.Navigator initialRouteName={inital} screenOptions={{
      headerShown: false
    }}
    >
    <Stack.Screen name="BottomNavigation" component={BottomNavigation} />
    <Stack.Screen name="MockUp" component={MockUp} />
    <Stack.Screen name="UploadImage" component={UploadImage} />
    <Stack.Screen name="FacialAnalysisScreen" component={FacialAnalysisScreen} />
    <Stack.Screen name="FormScreen" component={FormScreen} />
    <Stack.Screen name="SuggestionDetails" component={SuggestionDetails} />
    <Stack.Screen name="FeedBack" component={FeedBack} />
    <Stack.Screen name="ContentScreen" component={ContentScreen} />





    </Stack.Navigator>
    </NavigationContainer>
    )

};



export default App;




