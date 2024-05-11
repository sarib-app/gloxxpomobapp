
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


const GetSuggestions = async (age,gender,height,weight,query) => {
    const aiEndpoint = 'https://api.openai.com/v1/chat/completions';
    const apiKey = process.env.API_KEY; // Securely store and manage your API key
  

    // Construct the prompt for GPT-3 based on the facial features
    // const prompt = `Ratings out of 10:\n${facialFeatures.join('\n')}\nTotal Average Rating Out of 10:\nRecommendation:\nDressing:`;
 const prompt = `Hey please give me suggestions and procedure to ${query}, if you can personlize it according to my height, gender, weight and ae then it would be more better, me height is ${height}, my gender is ${gender}, my age is ${age},my weight is ${weight} ` 
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
            "content": "Generate step by step detail guide on the information provided, make sure to include details and suggestion  for each steps!"
          }, {
            "role": "user",
            "content": prompt
          }]
        }),
      });
  
      const aiData = await response.json();
  
      if (response.ok) {
        // Assuming the AI response is formatted with a 'choices' array
        // return aiData.choices[0].message.content;
        console.log(aiData.choices[0].message.content)
        return aiData.choices[0].message.content

      } else {
        console.log(`Error: ${aiData.error.message}`);
        return null
      }
    } catch (error) {
      console.error('Error fetching the AI response:', error);
      return null
    }
  };


 export default GetSuggestions
  