import React, { useState, useEffect } from 'react';
import { View, Text, Image, FlatList, TouchableOpacity,Dimensions ,ScrollView} from 'react-native';


import ScanFace from '../../Components/Data/Images/FaceScan.jpg'
import GetAllScans from '../../Components/GlobalCalls/GetAllScans';
import Typing from '../../Components/Data/Animations/Typing.json'
import LoadingAi from '../../Components/Data/Animations/LoaderAi.json'
const WindowHeight = Dimensions.get('window').height;

import { LinearGradient } from 'expo-linear-gradient';
// Sample API call function to simulate fetching an AI response.
// Remember to replace placeholder values with actual data for your AI service.
import { useIsFocused } from '@react-navigation/native';
import Colors from '../../Components/GlobalStyles/colors';
import { useNavigation } from '@react-navigation/native';
import SuggestioonStyles from './SuggesionSyles';
import Ionicons from 'react-native-vector-icons/Ionicons'
import GetFeedBack from '../../Components/GlobalCalls/GetFeedBack';
import LottieView from 'lottie-react-native';
// import { ScrollView } from 'react-native-gesture-handler';


const FeedBack = ({route}) => {
const {prompt} = route.params
const {title} = route.params
const [responseai,setResponseAi] =useState("")
const [loading,setLoading] =useState(false)
  const navigation = useNavigation()
const focused = useIsFocused()
// console.log(content,"thattt is")
useEffect(()=>{

async function GetData(){
  setLoading(true)
  const response = await GetFeedBack(prompt)
  if(response != null){
    setResponseAi(response)
    setLoading(false)
    console.log("resoinse =>>>" , response)
  
  }

  setLoading(false)

}

GetData()
  
},[prompt])


const [displayedResponse, setDisplayedResponse] = useState('');

useEffect(() => {
  let responseIndex = 0;
  const timer = setInterval(() => {
    if (responseIndex < responseai.length) {
      setDisplayedResponse(responseai.substring(0, responseIndex + 1));
      responseIndex++;
    } else {
      clearInterval(timer);
    }
  }, 2); // Adjust the interval to control the speed of text display

  return () => clearInterval(timer);
}, [responseai]);

  return (
    <View
    
    style={[SuggestioonStyles.container]}>

<Text style={[SuggestioonStyles.TitleTwo,{marginTop:20}]}>
         {title}
        </Text>
        < LinearGradient 
    colors={[Colors.BgColorII,Colors.BgColorII,Colors.BgColorII]}
 style={[SuggestioonStyles.SugestionBox]}>
    <ScrollView>

    
    {loading === true ?
    <>
      <LottieView source={Typing} autoPlay loop style={{
              width: 50,
              height: 50,
            }
            } />
    </>  :
    <>
      <LottieView source={LoadingAi} autoPlay loop style={{
                    width: 50,
                    height: 50,
                  }
                  } />
        <Text style={[SuggestioonStyles.ResponseTxt,{marginTop:20}]}>
        {displayedResponse}
       </Text>
    </>
    
    }
    </ScrollView>

</LinearGradient>

</View>
  );
};


export default FeedBack;






