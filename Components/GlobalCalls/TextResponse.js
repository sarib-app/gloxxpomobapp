
// const gpt4Response = `
// The person in the photo has a neatly trimmed hairstyle and a medium-sized beard. His facial features include:
// - **Nose**: It appears to be of a medium width with a noticeable nostril flare.
// - **Lips**: Moderately full and evenly shaped.
// - **Eyes**: They appear to be looking directly at the camera, medium-sized, with a warm expression.
// - **Skin**: The skin tone is fairly even and appears smooth, with very minimal or no visible acne.
// - **Skin Tone**: Appears to be medium to light brown.
// - **Face Shape**: The face has an oval to slightly rectangular shape.
// - **Cheeks**: Moderately contoured, not overly pronounced.
// - **Chin**: Broad and well-defined, contributing to a strong jawline.
// - **Jaw**: Strong and slightly squared, visible below the ears and along the face.
// - **Eyebrows**: Neatly shaped, medium thickness, arching naturally over the eyes.
// Overall, the facial expression conveys a calm and poised demeanor. The person wears a dark grey shirt, and is seated against 
// a neutral light-colored backdrop with a large clock visible in the background.
// `;
// const Face_Analysis = {"nose": "value", "lips": "value", "eyes": "Value", "skin": "value", "acne": "value", "skin_tone": "value", "face_shape": "value", "cheeks": "value", "chin": "value", "jaw": "value", "eyebrows": "value"}
// const recomendations = [
//   "Recomnedationn here",
//   "Recomnedationn here",
// ]
  


// const getAIResponse = async (mood) => {
//     const aiEndpoint = 'https://api.openai.com/v1/chat/completions';
; // Securely store and manage your API key
  
//     const facialFeatures = gpt4Response.split('\n').filter(line => line.startsWith('-'));

//     // Construct the prompt for GPT-3 based on the facial features
//     // const prompt = `Ratings out of 10:\n${facialFeatures.join('\n')}\nTotal Average Rating Out of 10:\nRecommendation:\nDressing:`;
//  const prompt = `Generate rating out of 10 for each facial 
//  feature Nose,Lips,Eyes,Skin,Acne,Skin Tone,Face Shape,Cheeks,Chin,Jaw,Eye Brows, 
//  Total Average Rating against this information ${gpt4Response}, moreover provide recomendations 
//  to become more beautiful, please Note Face_Analysis format 
//  hould be like this ${Face_Analysis} and format of Recommendations should be an array like this ${recomendations} which should have atleast 10 ai generated recomendations! and Total_Average_Score should look 
//  like this Total_Average_Score = score` 
//     try {
//       const response = await fetch(aiEndpoint, {
//         method: 'POST',
//         headers: {
//           'Authorization': `Bearer ${apiKey}`,
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({
//           model: "gpt-3.5-turbo", // Specify the model you want to use
//           messages: [{
//             "role": "system",
//             "content": `Generate Response in JSON, and  wrap Face_Analysis, Recommendations, Total_Average_Score them all in object name as Data, do not include any other text only return required JSON`
//           }, {
//             "role": "user",
//             "content": prompt
//           }]
//         }),
//       });
  
//       const aiData = await response.json();
  
    
//         // Assuming the AI response is formatted with a 'choices' array
//         // return aiData.choices[0].message.content;
//         console.log(aiData?.choices[0]?.message?.content)
//         return aiData?.choices[0]?.message?.content

    
//     } catch (error) {
//       console.error('Error fetching the AI response:', error);
//       return null
//     }
//   };


//  export default getAIResponse
  












 
// const gpt4Response = `
// The person in the photo has a neatly trimmed hairstyle and a medium-sized beard. His facial features include:
// - **Nose**: It appears to be of a medium width with a noticeable nostril flare.
// - **Lips**: Moderately full and evenly shaped.
// - **Eyes**: They appear to be looking directly at the camera, medium-sized, with a warm expression.
// - **Skin**: The skin tone is fairly even and appears smooth, with very minimal or no visible acne.
// - **Skin Tone**: Appears to be medium to light brown.
// - **Face Shape**: The face has an oval to slightly rectangular shape.
// - **Cheeks**: Moderately contoured, not overly pronounced.
// - **Chin**: Broad and well-defined, contributing to a strong jawline.
// - **Jaw**: Strong and slightly squared, visible below the ears and along the face.
// - **Eyebrows**: Neatly shaped, medium thickness, arching naturally over the eyes.
// Overall, the facial expression conveys a calm and poised demeanor. The person wears a dark grey shirt, and is seated against 
// a neutral light-colored backdrop with a large clock visible in the background.
// `;
// const Face_Analysis = {"nose": "value", "lips": "value", "eyes": "Value", "skin": "value", "acne": "value", "skin_tone": "value", "face_shape": "value", "cheeks": "value", "chin": "value", "jaw": "value", "eyebrows": "value"}
// const recomendations = [
//   "Recomnedationn here",
//   "Recomnedationn here",
//   "Recomnedationn here",
//   "Recomnedationn here",
//   "Recomnedationn here",
//   "Recomnedationn here",
//   "Recomnedationn here",
//   "Recomnedationn here",
//   "Recomnedationn here",
//   "Recomnedationn here",
//   "Recomnedationn here",
//   "Recomnedationn here"

// ]
  


// const getAIResponse = async (mood) => {
//     const aiEndpoint = 'https://api.openai.com/v1/chat/completions';
// Securely store and manage your API key
  
//     const facialFeatures = gpt4Response.split('\n').filter(line => line.startsWith('-'));

//     // Construct the prompt for GPT-3 based on the facial features
//     // const prompt = `Ratings out of 10:\n${facialFeatures.join('\n')}\nTotal Average Rating Out of 10:\nRecommendation:\nDressing:`;
//  const prompt = `Generate rating out of 10 for each facial 
//  feature Nose,Lips,Eyes,Skin,Acne,Skin Tone,Face Shape,Cheeks,Chin,Jaw,Eye Brows, 
//  Total Average Rating against this information ${gpt4Response}, moreover provide recomendations 
//  to become more beautiful agains this information ${gpt4Response} please Note Face_Analysis format 
//  hould be like this ${Face_Analysis} and format of Recommendations should be an array like this ${recomendations} and Total_Average_Score should look 
//  like this Total_Average_Score = score` 
//     try {
//       const response = await fetch(aiEndpoint, {
//         method: 'POST',
//         headers: {
//           'Authorization': `Bearer ${apiKey}`,
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({
//           model: "gpt-3.5-turbo", // Specify the model you want to use
//           messages: [{
//             "role": "system",
//             "content": `Generate Response in JSON, please make the formats of Face_Analysis, Recommendations, Total_Average_Score as provided in prompt and wrap  them all in object name as Data, do not include any other text only return required JSON`
//           }, {
//             "role": "user",
//             "content": prompt
//           }]
//         }),
//       });
  
//       const aiData = await response.json();
  
    
//         // Assuming the AI response is formatted with a 'choices' array
//         // return aiData.choices[0].message.content;
//         console.log(aiData?.choices[0]?.message?.content)
//         return aiData?.choices[0]?.message?.content

    
//     } catch (error) {
//       console.error('Error fetching the AI response:', error);
//       return null
//     }
//   };


//  export default getAIResponse
  










 
const gpt4Response = `
The person in the photo has a neatly trimmed hairstyle and a medium-sized beard. His facial features include:
- **Nose**: It appears to be of a medium width with a noticeable nostril flare.
- **Lips**: Moderately full and evenly shaped.
- **Eyes**: They appear to be looking directly at the camera, medium-sized, with a warm expression.
- **Skin**: The skin tone is fairly even and appears smooth, with very minimal or no visible acne.
- **Skin Tone**: Appears to be medium to light brown.
- **Face Shape**: The face has an oval to slightly rectangular shape.
- **Cheeks**: Moderately contoured, not overly pronounced.
- **Chin**: Broad and well-defined, contributing to a strong jawline.
- **Jaw**: Strong and slightly squared, visible below the ears and along the face.
- **Eyebrows**: Neatly shaped, medium thickness, arching naturally over the eyes.
Overall, the facial expression conveys a calm and poised demeanor. The person wears a dark grey shirt, and is seated against 
a neutral light-colored backdrop with a large clock visible in the background.
`;




const ratings= {
  Skin_Quality_rating:"rating",
  Facial_structure_rating: "rating",
  HairStyle_rating:"rating",
  Face_shape_rating:"rating"
}

const definations  = {
  Skin_Quality_defination:"defination",
  Facial_structure_defination: "defination",
  HairStyle_defination:"defination",
  Face_shape_defination:"defination",
}
const colors  ={
  Hair_color:"color",
  Eye_color:"color",

}



const getAIResponse = async (gpt4Response) => {
    const aiEndpoint = 'https://api.openai.com/v1/chat/completions';
    const apiKey = process.env.API_KEY; // Securely store and manage your API key
  
    const facialFeatures = gpt4Response.split('\n').filter(line => line.startsWith('-'));

    // Construct the prompt for GPT-3 based on the facial features
    // const prompt = `Ratings out of 10:\n${facialFeatures.join('\n')}\nTotal Average Rating Out of 10:\nRecommendation:\nDressing:`;
 const prompt = `According to this information ${gpt4Response} generate rating out of 100  of  Skin_Quality_rating,Facial_structure_rating, HairStyle_rating,Face_shape_rating in this format ratings:${ratings} and create definations of these attributes  Skin_Quality_defination, Facial_structure_defination, HairStyle_defination,Face_shape_defination in this same format definations:${definations} , and provide total_average_rating according to all other ratings! and colors of   Hair_color, Eye_color in thhis format colors:${colors} and face_shape:"Oval/Sqaure/Rectangular/Heart" note: please do critical analysis if user has acne,dark circles, normal beard shape etc then effect the rating because of them! try to find excuses to deduct the ratings and give a bit of egative marking `
    try {
      const response = await fetch(aiEndpoint, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${apiKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          model: "gpt-3.5-turbo", // Specify the model you want to use
          messages: [{
            "role": "system",
            "content": `Generate response in JSON format against information,provide data wrapped in object of data like this data:{ratings:${ratings}, definations:${definations}, colors:${colors}, total_average_rating"", face_shape:""}`
          }, {
            "role": "user",
            "content": prompt
          }]
        }),
      });
  
      const aiData = await response.json();
  
    
        // Assuming the AI response is formatted with a 'choices' array
        // return aiData.choices[0].message.content;
        console.log(aiData?.choices[0]?.message?.content)
        return aiData?.choices[0]?.message?.content

    
    } catch (error) {
      console.error('Error fetching the AI response:', error);
      return null
    }
  };


 export default getAIResponse
  