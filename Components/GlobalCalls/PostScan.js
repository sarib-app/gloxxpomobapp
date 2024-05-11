const data ={
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


async function postDataToServer(data) {
  console.log("data in api ", data)
  const url = 'https://glowx.alphanitesofts.net/api/post_user_data';

  const data_parse = {
    user_id:"4",
    total_score:data.total_average_rating,
    face_shape:data.face_shape,
    rating:data.ratings,
    recommendation:data.definations,
    colors:data.colors,
  }
  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data_parse)
    });

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const responseData = await response.json();
    console.log(responseData)
    return responseData;
  } catch (error) {
    console.error('Error:', error);
    return null;
  }
  }
  export default postDataToServer