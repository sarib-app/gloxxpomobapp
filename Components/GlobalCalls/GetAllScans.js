async function GetAllScans() {
 
const requestOptions = {
    method: "POST",
    redirect: "follow"
  };
  
// const response = await  fetch("https://glowx.alphanitesofts.net/api/get_user_data_by_uid/4", requestOptions)
    // .then((response) => response.json())
    // .then((result) => console.log(result))
    // .catch((error) => console.error(error));
  


    try {
        const response = await  fetch("https://glowx.alphanitesofts.net/api/get_user_data_by_uid/4", requestOptions)
        const result = await response.json();
      if(result.status === "200"){
        return result
      }else{

          return null;
      }

    } catch (error) {
      console.error(error);
      return null;
    }
  }
export default GetAllScans  