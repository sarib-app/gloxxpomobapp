const GetFeedBack = async (prompted) => {
    const aiEndpoint = 'https://api.openai.com/v1/chat/completions';
    const apiKey = process.env.API_KEY; // Securely store and manage your API key
  

    // Construct the prompt for GPT-3 based on the facial features
    // const prompt = `Ratings out of 10:\n${facialFeatures.join('\n')}\nTotal Average Rating Out of 10:\nRecommendation:\nDressing:`;
 const prompt = `${prompted}` 
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


 export default GetFeedBack
  