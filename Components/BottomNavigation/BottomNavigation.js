import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Fontisto from 'react-native-vector-icons/Fontisto'
import Ionicons from 'react-native-vector-icons/Ionicons'
import Colors from '../GlobalStyles/colors';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

// import Header from '../GlobalStyles/Header';

import HomeScreen from '../../Screens/Home/HomeScreen';
import ProgressPage from '../../Screens/ProgressPage/ProgressPage';
import SuggestionScreen from '../../Screens/SuggestionPages/SuggestionScreen';
import { AntDesign } from '@expo/vector-icons';
const Tab = createBottomTabNavigator();

const BottomNavigation = () => {
  return (

<>
{/* <Header/> */}
    <Tab.Navigator
    screenOptions={({ route }) => ({
        headerShown: false,

        
        tabBarStyle: {
          backgroundColor: Colors.Dark,
          borderTopWidth: 0,
        
        
        },
    })}
    tabBarOptions={{
        activeTintColor: Colors.FontColorI, // Color of the active tab label and icon
        inactiveTintColor: Colors.inActive, // Color of the inactive tab label and icon
         // Background color of the tab bar
      }}
    
    >
      <Tab.Screen name="HomeScreen" component={HomeScreen} 
      options={{
        tabBarLabel: 'Scan',
        tabBarIcon: ({ color, size }) => (
          <AntDesign name="scan1" size={20} color={ color} />
             
       ),}}


      
      />



<Tab.Screen name="ProgressPage" component={ProgressPage} 
      options={{
        tabBarLabel: 'daily',
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons
    name='storefront'
    size={25}
    color={color}
    />        
       ),}}


      
      />

<Tab.Screen name="Coach" component={SuggestionScreen} 
      options={{
        tabBarLabel: 'Resources',
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons
    name='bell-outline'
    size={25}
    color={color}
    />        
       ),}}


      
      />


    </Tab.Navigator>
</>
 

  );
};


export default BottomNavigation;
