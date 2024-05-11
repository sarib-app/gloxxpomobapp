import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import SuggestioonStyles from './SuggesionSyles';
import SuggestionScreen from './SuggestionScreen';
import Colors from '../../Components/GlobalStyles/colors';
import { LinearGradient } from 'expo-linear-gradient';
import GetSuggestions from '../../Components/GlobalCalls/GetSuggestions';
import { useNavigation } from '@react-navigation/native';
import LoaderModal from '../../Components/GlobalStyles/LoaderModal';
const FormScreen = ({route}) => {
    const {data} = route.params
    const navigation = useNavigation()
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');
  const [height, setHeight] = useState('');

  const [weight, setWeight] = useState('');
  const [error,setError]=useState("")
  const [loader,setLoader]=useState(false)
  const [responseTxt,setResponseTxt] = useState([]);


  // Add states for other input fields

  const [response, setResponse] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  
//   const query="increase my height"
  
  const handleSubmit = async () => {
const query=data.query

    if(!age){
        setError("Please Enter Age")
    }
    if(!gender){
        setError("Please Enter Age")
    }
    if(!height){
        setError("Please Enter Age")
    }
    if(!weight){
        setError("Please Enter Age")
    }
    else{
        setIsLoading(true)
        setError("")
        console.log("running")
        const response =await  GetSuggestions(age,gender,height,weight,query)
        console.log(response)
        if(response != null){
          console.log(response)
          navigation.navigate("SuggestionDetails",{contet:response})
        setIsLoading(false)

        }
        setIsLoading(false)

    }

  };

  return (
    <View style={SuggestioonStyles.container}>

        <Text style={[SuggestioonStyles.Title,{alignSelf:'center'}]}>
            Provide Your information
        </Text>
        <Text style={{color:Colors.FontColorI,fontWeight:'400',textAlign:'center'}}>
            Please provide all the information to et a personalized advice
        </Text>
      {/* Form inputs */}
      <Text style={[SuggestioonStyles.TitleTwo,styles.inputTitle]}>
        Your age
      </Text>
      <View style={SuggestioonStyles.InputWrapper}>
      <TextInput
        style={{flex:1,color:Colors.FontColorI,marginLeft:10}}
        placeholder="Enter Age"
        placeholderTextColor={Colors.placeHolder}
        value={age}
        onChangeText={setAge}
        keyboardType="numeric"
      />
      </View>
    
     


      <Text style={[SuggestioonStyles.TitleTwo,styles.inputTitle]}>
        Your Gender
      </Text>
      <View style={SuggestioonStyles.InputWrapper}>
      <TextInput
        style={{flex:1,color:Colors.FontColorI,marginLeft:10}}
        placeholder="Male/Female"
        placeholderTextColor={Colors.placeHolder}
        value={gender}
        onChangeText={setGender}
      />
      </View>


      <Text style={[SuggestioonStyles.TitleTwo,styles.inputTitle]}>
        Your Height In cm
      </Text>
      <View style={SuggestioonStyles.InputWrapper}>
      <TextInput
        style={{flex:1,color:Colors.FontColorI,marginLeft:10}}
        placeholder="Height in cm"
        placeholderTextColor={Colors.placeHolder}
        value={height}
        onChangeText={setHeight}
      />
      </View>
 


      <Text style={[SuggestioonStyles.TitleTwo,styles.inputTitle]}>
        Your Weight in KG
      </Text>
      <View style={SuggestioonStyles.InputWrapper}>
      <TextInput
        style={{flex:1,color:Colors.FontColorI,marginLeft:10}}
        placeholder="Weight in KG"
        placeholderTextColor={Colors.placeHolder}
        value={weight}
        onChangeText={setWeight}
      />
      </View>
 


   
 

    
 
 
      {/* Add inputs for other fields */}

      {/* Proceed button */}
    

      <TouchableOpacity
    style={{marginTop:50}}
    onPress={()=> handleSubmit()}
    >

    <LinearGradient 
        colors={[Colors.PrimaryColor, Colors.PrimaryColor,Colors.SeconderyColor, Colors.SeconderyColor]}  


            
            style={
                SuggestioonStyles.GenerateResponseBtn}
            >

            
            <Text
                style={
                SuggestioonStyles.ButtonTxt}
            >
            Proceed Further  
            </Text>
            
            </LinearGradient>
            </TouchableOpacity>
            {
        error &&
        <Text style={{color:Colors.danger,marginTop:20}}>
        {error}
      </Text>
      }
      {/* Response */}
      {isLoading ? (
        <Text>Loading...</Text>
      ) : (
        <Text style={styles.response}>{response}</Text>
      )}
      <LoaderModal 
      loading={isLoading}
      />
    </View>
  );
};

const styles = {
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000', // Dark color scheme
  },
  input: {
    width: '80%',
    height: 40,
    backgroundColor: '#333', // Dark input field
    color: '#fff', // Light text
    paddingHorizontal: 10,
    marginBottom: 20,
    borderRadius: 5,
  },
  inputTitle:{alignSelf:'flex-start',marginLeft:20,margin:10,fontSize:16},
  button: {
    backgroundColor: '#007bff', // Blue button
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  response: {
    marginTop: 20,
    color: '#fff',
  },
};

export default FormScreen;
