    import React, { useState, useEffect } from 'react';
    import { View, Text,Image, TouchableOpacity,PermissionsAndroid ,Dimensions,ScrollView, Alert,Platform} from 'react-native';

    const { width, height } = Dimensions.get('window');

    // Calculate the aspect ratio based on the screen dimensions
    const aspectRatio = width / height;
    
    import UploadIMageStyles from './UploadIMageStyles';
    import ScanFace from '../../Components/Data/Images/FaceScan.jpg'
    import Colors from '../../Components/GlobalStyles/colors';
    import { LinearGradient } from 'expo-linear-gradient';
    // import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import sendImageToOpenAI from '../../Components/GlobalCalls/ImageResponse';
import LoaderModal from '../../Components/GlobalStyles/LoaderModal';
import getAIResponse from '../../Components/GlobalCalls/TextResponse';
import { useNavigation } from '@react-navigation/native';
import postDataToServer from '../../Components/GlobalCalls/PostScan';
import sidePose from '../../Components/Data/Images/sidePose.png'
import frontFace from '../../Components/Data/Images/frontFace.png'
import * as ImagePicker from 'expo-image-picker';

    // Sample API call function to simulate fetching an AI response.
    // Remember to replace placeholder values with actual data for your AI service.

    const UploadImage = () => {
const navigation= useNavigation()
const [Images,setImages]=useState([])
const [base64s,setBase64s]=useState([])
const [loading,setLoading]=useState(false)

const onSelectImage = async () => {
    // launchImageLibrary({ mediaType: 'photo', includeBase64: true }, (response) => {
    //   if (response.didCancel) {
    //     console.log('User cancelled image picker');
    //   } else if (response.errorCode) {
    //     console.log('ImagePicker Error: ', response.errorMessage);
    //   } else {
    //     const base64 = response.assets[0].base64;
    //     // setImages(response.assets[0].uri);
    //     setImages((prevImages) => [...prevImages, response.assets[0].uri]);
    //     setBase64s((p)=>[...p,base64])
    //     // setShowImageScanningModal(true)
    //     // generateImgResponse(base64,response.assets[0].uri);
    //   }
    // });

    let response = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      base64: true,
      aspect: [4, 3],
      quality: 1,
    });

    // console.log(result);
    
    if (!response.canceled) {
      const { uri, base64 } = response.assets[0];
  let formattedUri = uri;

  // Check if the platform is iOS
  if (Platform.OS === 'ios') {
    // Handle iOS file path format
    formattedUri =  uri.replace('file://', '');
  }
console.log(formattedUri)
  // Update state with the formatted URI
  setImages(prevImages => [...prevImages, formattedUri]);
  setBase64s(p => [...p, base64]);
  setShowImageScanningModal(true);
  generateImgResponse(base64, formattedUri);
    }
  };


  const requestCameraPermission = async () => {
    onSelectLiveImage()
    // try {
    //   const granted = await PermissionsAndroid.request(
    //     PermissionsAndroid.PERMISSIONS.CAMERA,
    //     {
    //       title: "App Camera Permission",
    //       message:"App needs access to your camera ",
    //       buttonNeutral: "Ask Me Later",
    //       buttonNegative: "Cancel",
    //       buttonPositive: "OK"
    //     }
    //   );
    //   if (granted === PermissionsAndroid.RESULTS.GRANTED) {
    //     onSelectLiveImage()
    //   } else {
    //     console.log("Camera permission denied");
    //   }
    // } catch (err) {
    //   console.warn(err);
    // }
  };

  const onSelectLiveImage =async () => {
    // ImagePicker.launchCameraAsync({ mediaType: 'photo', includeBase64: true }, (response) => {
    //   if (response.didCancel) {
    //     console.log('User cancelled image picker');
    //   } else if (response.errorCode) {
    //     console.log('ImagePicker Error: ', response.errorMessage);
    //   } else {
    //     const base64 = response.assets[0].base64;
    //     // setImages(response.assets[0].uri);
    //     console.log(response)
    //     setImages((prevImages) => [...prevImages, response.assets[0].uri]);
    //     setBase64s((p)=>[...p,base64])
    //     // setShowImageScanningModal(true)
    //     // generateImgResponse(base64,response.assets[0].uri);
    //   }
    // });
    await ImagePicker.requestCameraPermissionsAsync()
    let response = await ImagePicker.launchCameraAsync({
      
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      base64: true,
      aspect: [aspectRatio, 1], // Set the aspect ratio dynamically
      
      quality: 1,
    });

    // console.log(result);
    
    if (!response.canceled) {
      const { uri, base64 } = response.assets[0];
  let formattedUri = uri;

  // Check if the platform is iOS
  if (Platform.OS === 'ios') {
    // Handle iOS file path format
    formattedUri =  uri.replace('file://', '');
  }
console.log(formattedUri)
  // Update state with the formatted URI
  setImages(prevImages => [...prevImages, formattedUri]);
  setBase64s(p => [...p, base64]);
  setShowImageScanningModal(true);
  generateImgResponse(base64, formattedUri);
    }
  };


  const [Responses,setResponses]=useState([])
  async function generateImgResponse(base64Array, uriArray) {
    setLoading(true)
    const responses = [];
  
    for (let i = 0; i < base64Array.length; i++) {
      const base64 = base64Array[i];
      const response = await sendImageToOpenAI(base64);
      
      if (response) {
        responses.push(response);
        console.log(response)
      } else {
        Alert.alert("Error", "Something went wrong! Try again later");
        return; // Stop processing further if there's an error
      }
    }
  
    // Append responses to the hook
    setResponses([...Responses, ...responses]);
    // setLoading(false)
    const data = await getAIResponse(responses[0])
    // console.log(data)
    if(data != null){
      const response = await JSON.parse(data)


console.log("data =>>>>>>", response)
        
        const Apiresponse = await postDataToServer(response.data)
        console.log("success", Apiresponse)
        if(Apiresponse != null){

            navigation.navigate("FacialAnalysisScreen",{data:response.data})     
               setLoading(false)
        }
    

        setLoading(false)
    }


  }


  

    return (
        <View
        style={UploadIMageStyles.container}>
    {/* <Text  style={UploadIMageStyles.Title}>
    Upload Image
    </Text> */}




   
    <>
       <Text  style={UploadIMageStyles.TitleTwo}>
    Upload image to begin the process
    </Text>
    <Text  style={UploadIMageStyles.DescText}>
    Scan your face to get complete rating on your looks and recommendations to make your face look better than ever.
    </Text>
    </>
    <>
    <View style={{height:150,flexDirection:'row',alignItems:'center',marginTop:50}}>
    
  
 
{/* {Images.map((item)=>(
    <Image
    source={{uri:item}} style={{width:150,height:150,margin:10}}
    />
))} */}

{
  Images.length  > 0 ?
  <Image
    source={{uri:Images[0]}} style={{width:150,height:150,margin:10}}
    />:
    <View style={{padding:3,borderWidth:1,borderColor:Colors.FontColorI,margin:4}}> 
<Image
    source={frontFace} style={{width:120,height:120,margin:10,tintColor:'white'}}
    />
    </View>
}

    
{
  Images.length  > 1 ?
  <Image
    source={{uri:Images[1]}} style={{width:150,height:150,margin:10}}
    />:

    <View style={{padding:3,borderWidth:1,borderColor:Colors.FontColorI,margin:4}}> 
      <Image
    source={sidePose} style={{width:120,height:120,margin:10,tintColor:'white'}}
    />
      </View>

}

    </View>
    
    </>
    



{
    Images.length >=2 &&

    <>
        <Text  style={[UploadIMageStyles.TitleTwo,{marginTop:50}]}>
    Well Done!
    </Text>
    <Text  style={UploadIMageStyles.DescText}>
   Now click the proceed further and start generating yur recomnedations
    </Text>
    </>
}

{
    Images.length < 2  ?
    <>
    <TouchableOpacity
    style={{marginTop:50}}
    onPress={()=> onSelectImage()}
    >

    <LinearGradient 
        colors={[Colors.PrimaryColor, Colors.PrimaryColor,Colors.SeconderyColor, Colors.SeconderyColor]}  


            
            style={
                UploadIMageStyles.GenerateResponseBtn}
            >

            
            <Text
                style={
                UploadIMageStyles.ButtonTxt}
            >
            { Images.length  ===1 ? "Upload side face":"Upload front face"}
            </Text>
            
            </LinearGradient>
            </TouchableOpacity>
            <TouchableOpacity
            onPress={()=> requestCameraPermission()}
    style={{marginTop:20}}
    >

    <LinearGradient 
        colors={[Colors.PrimaryColor, Colors.PrimaryColor,Colors.SeconderyColor, Colors.SeconderyColor]}  


            
            style={
                UploadIMageStyles.GenerateResponseBtn}
            >

            
            <Text
                style={
                UploadIMageStyles.ButtonTxt}
            >
            Click Photo Now 
            </Text>
            
            </LinearGradient>
            </TouchableOpacity>
    </>:
    <>
        <TouchableOpacity
    style={{marginTop:50}}
    onPress={()=> generateImgResponse(base64s)}
    >

    <LinearGradient 
        colors={[Colors.PrimaryColor, Colors.PrimaryColor,Colors.SeconderyColor, Colors.SeconderyColor]}  


            
            style={
                UploadIMageStyles.GenerateResponseBtn}
            >

            
            <Text
                style={
                UploadIMageStyles.ButtonTxt}
            >
            Proceed Further  
            </Text>
            
            </LinearGradient>
            </TouchableOpacity>
    </>
}
 
    <LoaderModal
    loading={loading}
    />

        </View>
    );
    };


    export default UploadImage;






