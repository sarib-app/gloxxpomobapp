// const format = {
//   hair: "",
//   hair_color:"",
//   eye_color:"",
//   dark_spots:"",

// }

const sendImageToOpenAI = async (base64) => {
    const api_key = process.env.API_KEY; // Replace with your actual API key
    const payload = {
      "model": "gpt-4-turbo",
      "messages": [
        {
          "role": "user",
          "content": [
            {
              "type": "text",
              // "text": "What’s in this image? This is my image what does my nose, lips, eyes, skin,acne,skin tone,face shape,cheeks,chin, jaw and eye brows looks like. Provide bullet by bullet answer"
              "text": "What’s in this image? if there is no human face visible or available in image then return null else proceed witht he query ahead This is my image do i have dark spots? do i have acnes? what is the shape of my face (Oval/Sqaure/Rectangular/Heart)? what is the color of my eyes, what is the color of my hair? what is my hairstyle and hair quality does it look like i am getting bald? what is my skin condition and quality , do i have acne or rough skin or skin burn or dark circles? what is my facial strcuture (do extra deep analysis)? . Please do advanced critical and strict analysis and Provide bullet by bullet answer. Note: Be critical try to give low and honest review."

            },
            {
              "type": "image_url",
              "image_url": {
                "url": `data:image/jpeg;base64,${base64}`
              }
            }
          ]
        }
      ],
      "max_tokens": 500
    };

    try {
      const response = await fetch("https://api.openai.com/v1/chat/completions", {
        method: 'POST',
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${api_key}`
        },
        body: JSON.stringify(payload)
      });
      
      const responseJson = await response.json();
      const messageContent = responseJson.choices[0].message.content;
      return messageContent

    } catch (error) {
      console.error(error);
      return null
    }
  };

  export default sendImageToOpenAI