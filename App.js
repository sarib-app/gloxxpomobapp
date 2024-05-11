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


LogBox.ignoreAllLogs()
// const Stack = createNativeStackNavigator();
const Stack = createStackNavigator();

const App = () => {


const [loggedIn,setLoggedIn]=useState(false)

// useEffect(()=>{
//   Superwallfunc()
//   // SplashScreen.hide()

// },[])


return( 
    <NavigationContainer>
    <Stack.Navigator initialRouteName={"MockUp"} screenOptions={{
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




    </Stack.Navigator>
    </NavigationContainer>
    )

};



export default App;




