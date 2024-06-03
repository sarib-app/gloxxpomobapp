

import React from 'react';
import {
    Modal,
  Pressable,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View
  
} from 'react-native';

import { useNavigation } from '@react-navigation/native';
import GlobalStyles from './GlobalStyles';
import IonIcon from 'react-native-vector-icons/Ionicons'
import Colors from './colors';
import scanningface from '../Data/Animations/scanningface.json'
import LottieView from 'lottie-react-native';


function LoaderModal ({loading}){
const navigation = useNavigation()
  return (
    <Modal
visible={loading}
transparent={true}
animationType='none'

>
  <View style={{flex:1,backgroundColor:"rgba(0,0,0,1)",justifyContent:"center",alignItems:'center'}}>
  <LottieView source={scanningface} autoPlay loop style={{
    width: "80%",  // or whatever size you need
    height: "80%",
    marginTop:-150
   }// or whatever size you need
  } />

  <Text style={{color:Colors.FontColorI,fontWeight:'bold',fontSize:25,marginTop:-150}}>
  This may take up to a minute
  </Text>
  </View>
    </Modal>
  );
};



export default LoaderModal;
