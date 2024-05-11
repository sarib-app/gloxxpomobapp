
import React from 'react';
import { SafeAreaView, View, Text, Animated,TouchableOpacity, Image } from 'react-native';

import GlobalStyles from '../../Components/GlobalStyles/GlobalStyles';
import PackageStyles from './PackageStyles';
import { useNavigation } from '@react-navigation/native';
import Colors from '../../Components/GlobalStyles/colors';
import { LinearGradient } from 'expo-linear-gradient';
import ComeBack from '../../Components/Data/Images/COMEBACK.png'

function PackageScreen(){
 const navigation = useNavigation()

    const bounceValue = new Animated.Value(1);

    // Bouncing animation effect
    const startBouncing = () => {
      Animated.loop(
        Animated.sequence([
          Animated.timing(bounceValue, {
            toValue: 0.9,
            duration: 500,
            useNativeDriver: true,
          }),
          Animated.timing(bounceValue, {
            toValue: 1,
            duration: 500,
            useNativeDriver: true,
          }),
        ]),
      ).start();
    };
  
    // Call the bouncing animation function
    startBouncing();

  return (
    <SafeAreaView style={GlobalStyles.Container}>
      <Animated.View style={[{alignItems:'center'}, { transform: [{ scale: bounceValue }] }]}>
      <Text style={[PackageStyles.TitleTxt,{marginTop:20}]}>INFIINITE.</Text>
        <Text style={PackageStyles.TitleTxt}>RIZZ.</Text>
          {/* <Image 
        source={ComeBack}
        style={{width:280,height:37,marginTop:50}}
        
        /> */}
        <Image 
        
        
        />
        </Animated.View>

        
      
        <Text style={[PackageStyles.DetailTxt1,{marginTop:40}]}>🔥    The Ultimate Edge.</Text>
        <Text style={PackageStyles.DetailTxt1}>❤️   Coach Recomended</Text>
        <Text style={PackageStyles.DetailTxt1}>💋   Proven to Get Dates</Text>
        <View style={PackageStyles.PackageSubBox}>
        < LinearGradient 
    colors={[Colors.SeconderyColor, Colors.SeconderyColor,Colors.PrimaryColor, Colors.PrimaryColor]} 

style={PackageStyles.PackageeadBox}>
    <Text style={PackageStyles.PlainTxt}>
Rizz Here
    </Text>
</LinearGradient>
<Text style={[PackageStyles.DetailTxt1,{marginTop:15}]}>Elevate Your Game</Text>
<TouchableOpacity
onPress={()=> navigation.navigate("HomeScreen")}
>

<Animated.View style={[{ transform: [{ scale: bounceValue }] }]}

>
< LinearGradient 
    colors={[Colors.PrimaryColor, Colors.PrimaryColor,Colors.SeconderyColor, Colors.SeconderyColor]} 
    style={[PackageStyles.SubscribeBtn]}
    
    >


          <Text style={[PackageStyles.PlainTxt, { fontSize: 18 }]}>
            Unlock Free Trial
          </Text>
    </LinearGradient>

        </Animated.View>
        </TouchableOpacity>

<Text style={[PackageStyles.PlainTxt1]}>
3-day risk-free trial then
    </Text>
    <Text style={PackageStyles.PlainTxt1}>
Rs 2,000.00/week
    </Text>

        </View>

        <Text style={PackageStyles.PlainTxt2}>Subscription will renew unles cancelled in your Google PLay Settings.</Text>
        <Text style={PackageStyles.PlainTxt2}>Email     Terms     Restore</Text>

     
    </SafeAreaView>
  );
}



export default PackageScreen;
