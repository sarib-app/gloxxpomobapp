import React, { useEffect, useState } from 'react';
import { Modal, View, Text, TouchableOpacity, Image,Linking } from 'react-native';
import Colors from './colors';
import AntDesign from 'react-native-vector-icons/AntDesign'
import AsyncStorage from '@react-native-async-storage/async-storage';

const StarRatingModal = () => {
  const [isModalVisible, setIsModalVisible] = useState(true);
  const [rating, setRating] = useState(0); // Track selected rating

  const handleStarPress = (newRating) => {
    setRating(newRating);
  };
  useEffect(()=>{
AsyncStorage.setItem("ratingModal","true")
  },[])

  const handleCloseModal = () => {
    setIsModalVisible(false);
  };

  const handleRedirect = () => {
    if (rating > 0) { // Redirect only if a rating is selected
      // Consider using a safer approach like opening the link in a browser window:
      setIsModalVisible(false); // Close modal after redirect
      Linking.openURL("https://play.google.com/store/apps/details?id=com.gloxapp.app")
      // Implement a safer redirect method, e.g., using a WebView or InAppBrowser:
      // Linking.openURL('https://nothing.com');  // (Uncomment if using Linking)
    }
  };

  return (
    // <>
    //   <TouchableOpacity onPress={() => setIsModalVisible(true)}>
    //     {/* Your button or trigger to open the modal */}
    //     <Text>Rate Our App</Text>
    //   </TouchableOpacity>
      <Modal
        animationType="slide"
        transparent={true}
        visible={isModalVisible}
        
        // onRequestClose={handleCloseModal}
      >
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center',backgroundColor:"rgba(0,0,0,0.8)" }}>
          <View style={{ backgroundColor: Colors.bgIII, padding: 20, borderRadius: 10,paddingHorizontal:80,justifyContent: 'center', alignItems: 'center' }}>
            <Text style={{ fontSize: 28, marginBottom: 15,color:Colors.FontColorI ,fontWeight:'bold'}}>Rate Our App</Text>
            <View style={{ flexDirection: 'row' }}>
              {[1, 2, 3, 4, 5].map((star) => (
                <TouchableOpacity key={star} onPress={() => handleStarPress(star)}>
                  {/* <Image
                    source={
                      rating >= star
                        ? require('./filled_star.png') // Replace with your filled star image
                        : require('./empty_star.png') // Replace with your empty star image
                    }
                    style={{ width: 40, height: 40, marginHorizontal: 5 }}
                  /> */}
{      rating >= star ?


                  <AntDesign 
                  name="star"
                  color={Colors.FontColorI}
                  size={39}                  
                  />:
                  <AntDesign 
                  name="staro"
                  color={Colors.FontColorI}
                  size={39}                  
                  />
}

                </TouchableOpacity>
              ))}
            </View>
            <Text style={{ marginTop: 15,color:Colors.FontColorI,fontSize:14 }}>Your feedback is precious to us</Text>
            <View style={{ flexDirection: 'row', marginTop: 20 }}>
              <TouchableOpacity onPress={handleCloseModal} style={{ marginRight: 10 }}>
                <Text style={{ color: Colors.danger,fontSize:20,fontWeight:'bold' }}>Close</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={handleRedirect} disabled={rating === 0}>
                <Text style={{ color: rating > 0 ? Colors.send : Colors.inActive,fontWeight:'bold',fontSize:20 }}>Rate Now</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    // </>
  );
};

export default StarRatingModal;
