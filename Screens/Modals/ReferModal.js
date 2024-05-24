import React,{useState} from "react";
// import { View,Modal } from "react-native";
import Colors from "../../Components/GlobalStyles/colors";
import { View,Modal ,Text, Pressable} from "react-native";
import { Share } from "react-native";

function ReferModal({visible,onClose,referral_code}){
    return(
        <Modal 
        visible={visible}
        animationType="slide"
        transparent={true}
        >
            <Pressable
            onPress={()=> {
                console.log("Sss")
                onClose()}}
            style={{flex:1,backgroundColor:"rgba(0,0,0,0.7)",justifyContent:"flex-end"}}>
            <View style={{
            backgroundColor:Colors.BgColorII,
            // height:"60%",
            paddingVertical:40,
            borderRadius:30,
            alignItems:'center'
            }}>
                <Text style={{color:Colors.FontColorI,fontWeight:'bold',fontSize:18,marginTop:0}}>
                    Refer A Friend
                </Text>
                <Text style={{color:Colors.FontColorI,fontWeight:'400',textAlign:"center",margin:5}}>
                    We noticed that you have not subscribed yet, to view your scan results you can either buy susbcription or invite 3 friends and win a free scan.
                </Text>
                <View style={{width:"100%",padding:20,flexDirection:'row',alignItems:"center",justifyContent:"space-between"}}>
<View style={{width:"70%",backgroundColor:"black",height:80,borderRadius:10,justifyContent:"center"}}>
<Text style={{color:Colors.FontColorI,fontWeight:'bold',marginLeft:20}}>ssds{referral_code}</Text>
</View>
<View style={{width:"25%",backgroundColor:Colors.PrimaryColor,height:80,borderRadius:10,alignItems:"center",justifyContent:"center"}}>
<Text style={{color:Colors.FontColorI,fontWeight:'bold'}}>Share</Text>
</View>
                </View>
                <Text style={{color:Colors.FontColorI,fontWeight:'bold',fontSize:18,marginTop:0,textAlign:"center",width:"60%"}}>
                    Win a free scan 🥳
                </Text>
            </View>

            </Pressable>
        </Modal>
    )
}
export default ReferModal