import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet,ScrollView, TouchableOpacity ,Dimensions,Image} from 'react-native';
import Colors from '../../Components/GlobalStyles/colors';
import postDataToServer from '../../Components/GlobalCalls/PostScan';
import ai_icon from '../../Components/Data/Images/ai_icon.png'
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import GetFeedBack from '../../Components/GlobalCalls/GetFeedBack';
import logo from '../../assets/logo.gif'
import AsyncStorage from '@react-native-async-storage/async-storage';
import StarRatingModal from '../../Components/GlobalStyles/Rating';
const WindowWidth = Dimensions.get('screen').width
  const WindowHeight = Dimensions.get('screen').height; 
const data1 ={
    Face_Analysis: {
        "Nose": 8,
        "Lips": 9,
        "Eyes": 8,
        "Skin": 9,
        "Acne": 10,
        "Skin Tone": 8,
        "Face Shape": 7,
        "Cheeks": 7,
        "Chin": 9,
        "Jaw": 9,
        "Eyebrows": 8
    },
    "Recommendations": [
        "Consider using a skincare routine to maintain the smooth and even skin tone.",
    "Experiment with different hairstyles to complement the face shape like undercut or faded sides.",
        "Enhance the eyebrow shape through professional grooming for a more polished look.",
        "Opt for clothing colors that complement the skin tone for a more cohesive appearance.",
         "Incorporate light contouring and highlighting to accentuate cheekbones and facial features.",
        "Maintain beard grooming to complement the strong jawline and chin structure."
    ],
    "Total_Average_Score": 8.18
}
const FacialAnalysisScreen = ({ route }) => {

  const [showRating,setShowRating] = useState(false)

    const { data } = route.params;
console.log("thhis is data1",data)

const navigation = useNavigation()


useEffect(()=>{
async function getrRating(){
  const rating = await AsyncStorage.getItem("ratingModal")
  if(rating != "true"){
    setShowRating(true)
  }
  
}
getrRating()
},[])
 
    const RenderItem = ({ name,value,icon,color }) => {

      let bottomColor;

      if (value <= 65) {
        bottomColor = 'red';
      } else if (value >= 66 && value <= 75) {
        bottomColor = 'yellow';
      } else if (value >= 76 && value <= 84) {
        bottomColor = 'orange';
      } 
      else if (value >= 84 && value <= 100) {
        bottomColor = 'green';
      }
      else {
        bottomColor = 'green'; // Or any default color
      }
        
        
        return(
    <TouchableOpacity 
    // onPress={()=> postdataToServer()}
    style={[styles.analysisItem,{borderColor:bottomColor}]}>
      {
        name == "Colors" ? 
        <>
      <Text style={{color:Colors.FontColorI,fontWeight:'500',fontSize:16,textAlign:'center',fontWeight:'bold'}}>{name}</Text>
              <Text style={{color:Colors.FontColorI,fontWeight:'400',fontSize:15,textAlign:'center',fontWeight:'bold'}}>{value}</Text>
        </>:
        <>
      <Text style={{color:Colors.FontColorI,fontWeight:'bold',fontSize:16,textAlign:'center'}}>{name}</Text>
              <Text style={{color:Colors.FontColorI,fontWeight:'bold',fontSize:name != "Face Shape"?48:18,textAlign:'center'}}>{name == "Face Shape"?value:Number(value).toFixed(0)}</Text>
      {/* <Text style={{color:Colors.FontColorI,fontWeight:'400',fontSize:10,textAlign:'center'}}>Scroll to see feedback</Text> */}

        </>

      }


    </TouchableOpacity>
  );
}

const Analysis = data?.ratings ? data?.ratings : data?.rating
const recomnedations_ai = data?.definations ?data?.definations :data.recommendation




const totalAverageRating = data?.total_average_rating || data.total_score;
  const hairStyleRating = Analysis.HairStyle_rating;

  console.log(totalAverageRating,hairStyleRating, Analysis.Skin_Quality_rating,
    Analysis.Facial_structure_rating)
  // Assuming these are the four values you want to average

  

const num =      data?.total_average_rating || data.total_score+++Analysis.HairStyle_rating+++Analysis.Skin_Quality_rating+++Analysis.Facial_structure_rating


const [isLoading, setIsLoading] = useState(false);

async function HandleNavigation(prompt,titleII){


  
 
  // const response =await  GetFeedBack(prompt)

    navigation.navigate("FeedBack",{prompt: prompt,title:titleII})

 
}


function FeedBack({title,prompt,titleII}){
  return(
    <TouchableOpacity
        style={styles.RecommendationsContainer    }
        onPress={()=> HandleNavigation(prompt,titleII)}
        >

          <Image 
          source={ai_icon}
          style={{width:40,height:40,marginRight:10}}
          />
          <View>

            <Text style={styles.recommendation}>{title}</Text>
            <Text style={{color:Colors.FontColorII}}>Click To See Guide</Text>
          </View>
            
            </TouchableOpacity>
  )
}

  return (
    <View style={styles.container}>
      <Image 
      source={logo}
      style={{width:35,height:35,marginTop:50}}
      />
      <Text style={styles.totalRating}>Your GlowX Result</Text>
      {/* <FlatList
        data={Object.entries(Analysis).map(([feature, score]) => ({ feature, score }))}
        renderItem={renderItem}
        keyExtractor={(item) => item.feature}
        numColumns={2}
        contentContainerStyle={styles.analysisContainer}
      /> */}




      <ScrollView
      style={{alignSelf:'center'}}
      contentContainerStyle={{alignItems:'center'}}
      
      // nestedScrollEnabled={true}
      > 

      <View style={styles.ScoreCard}>
      <RenderItem
      name="Average"
      value={data?.total_average_rating || data.total_score}
      icon={"👃🏻"}
      color={Colors.PrimaryColor}
      />
       <RenderItem
      name="Hair"
      value={Analysis.HairStyle_rating}
      icon={"✨"}
      color={Colors.send}
      />
      </View>

      <View style={styles.ScoreCard}>
      <RenderItem
      name="Skin Quality"
      value={Analysis.Skin_Quality_rating}
      icon={"👃🏻"}
      color={Colors.deposit}
      />
         <RenderItem
      name="Face Structure"
      value={Analysis.Facial_structure_rating}
      icon={"✨"}
      color={Colors.bgIv}
      />
      </View>

      <View style={styles.ScoreCard}>
      <RenderItem
      name="Face Shape"
      value={data.face_shape}
      icon={"👃🏻"}
      color={Colors.SecondaryLight}
      />
         <RenderItem
      name="Colors"
      value={`Hair:  ${data.colors.Hair_color} \n Eyes:  ${data.colors.Eye_color}`}
      icon={"👃🏻"}
      color={Colors.send}
      />
      </View>

      <View style={styles.ScoreCardI}>

     <Text style={{color:Colors.FontColorI,fontWeight:'bold',fontSize:23}}>Potential</Text>
     {
      data?.total_average_rating || data.total_score&&Analysis.HairStyle_rating&&Analysis.Skin_Quality_rating&&Analysis.Facial_structure_rating ?
              <Text style={{color:Colors.FontColorI,fontWeight:'bold',fontSize:65}}>{((data?.total_average_rating || data.total_score+++Analysis.HairStyle_rating+++Analysis.Skin_Quality_rating+++Analysis.Facial_structure_rating) / 4).toFixed(0)}
              </Text>
     :
     <Text></Text>
     }
   
   

      </View>




      <Text style={styles.recommendationsTitle}>Recommendations</Text>

    

      {/* <FlatList
        data={recomnedations_ai}
        renderItem={({ item }) => 
        <View
        style={styles.RecommendationsContainer    }
        >
            <Text style={styles.recommendation}>{item}</Text>
            </View>
            }
        keyExtractor={(item, index) => index.toString()}
      /> */}

      {
        
      }
      {
        Analysis.Facial_structure_rating <80 &&
<FeedBack
title={"Elevate Jawline"}
prompt={`Hey this is my Face shape defination and rating defiation: ${recomnedations_ai.Face_shape_defination} rating:${Analysis.Face_shape_rating} and this is my facial structure defination and rating  defination: ${recomnedations_ai.Facial_structure_defination} rating:${Analysis.Facial_structure_rating} please provide me a detailed step by step guide to elevate my jawline and make it look more cooler and beauitful, please provide as much as information you can with proper spacing and formating`}
titleII={"Elevate your jawline"}
/>
      }

<FeedBack
title={"Skin Quality - Fixing Dark Spots"}
prompt={`Hey this is my skin quality info and rating: info ${recomnedations_ai.Skin_Quality_defination} rating:${Analysis.Skin_Quality_rating} please provide me a detailed step by step guide to elevate and enhance my skin quality , suggest some natural products as well, please provide as much as information you can with proper spacing and formating`}
titleII={"Enhance Skin Quality"}
/>
<FeedBack
title={"Face Shape - Makeup and More"}
prompt={`Hey this is my Face shape defination and rating defiation: ${recomnedations_ai.Face_shape_defination} rating:${Analysis.Face_shape_rating} and this is my facial structure defination and rating  defination: ${recomnedations_ai.Facial_structure_defination} rating:${Analysis.Facial_structure_rating} please provide me a detailed step by step guide to make my face shape look better and what kind of make up and products should i use , what will suite on me, provide the complete detailed guide !, please provide as much as information you can with proper spacing and formating`}
titleII={"Face Shape"}

/>
<FeedBack
title={"Guide to your hair/eye color"}
prompt={`Hey this is my hair quality info, rating and color: info ${recomnedations_ai.HairStyle_defination} rating:${Analysis.HairStyle_rating}, color:${data.colors.Hair_color} please provide me a detailed step by step guide to give me suggestion that what kind of hair style should i follow, what kind of olor would be suite on me , what can i do to make my hair look more better and how can i improve their quality and what kind of products should i use on them what can be me skin care and hair care routine for more info  this is my facial structure ${recomnedations_ai.Facial_structure_defination + recomnedations_ai.Face_shape_defination} , suggest some natural products as well, please provide as much as information you can with proper spacing and formating`}
titleII={"Hair Color and quality"}
/>


      </ScrollView>
      {/* </View> */}
      {
        showRating === true &&
        <StarRatingModal />
      }


    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height:WindowHeight,
    width:WindowWidth,
    // padding: 16, 
    backgroundColor: Colors.Dark,
    alignItems:'center',
    // paddingBottom:30
    
  },
  totalRating: {
    fontSize: 18,
    fontWeight: 'bold',
    margin: 16,
    marginTop:0,
    color:Colors.FontColorI
  },
  analysisContainer: {
    marginBottom: 24,
  },
  ScoreCard:{flexDirection:'row',justifyContent:"space-between",alignItems:'center',alignSelf:'center',width:WindowWidth/1.15},
  ScoreCardI:{justifyContent:"center",alignItems:'center',alignSelf:'center',width:WindowWidth/1.2,height:WindowHeight/6,backgroundColor:Colors.BgColorII,borderRadius:20,margin:20},

  analysisItem: {
    // flex: 1,
    height:WindowHeight/5.3,width:WindowWidth/2.7,
    borderColor:Colors.PrimaryColor,
    borderBottomWidth:5,
    margin: 8,
    padding: 16,
    backgroundColor: Colors.BgColor,
    borderRadius: 8
    ,justifyContent:'center',alignItems:'center'
  },
  progressContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8,
  },
  progressBar: {
    height: 8,
    backgroundColor: '#4caf50',
    borderRadius: 4,
    marginRight: 8,
  },
  recommendationsTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 8,
    color:Colors.FontColorI
  },
  RecommendationsContainer:{padding:20,borderRadius:10,backgroundColor:Colors.BgColorII,marginBottom:10,  flexDirection:'row', alignItems:'center',   alignSelf:'center',width:WindowWidth/1.15},
  recommendation: {
    marginBottom: 0,
    color:Colors.FontColorI,
    width:"100%",
    fontSize:17
  },
});

export default FacialAnalysisScreen;
