async function checkAvailability (id){
    console.log(id)
    try{

    const requestOptions = {
      method: "POST",
      // headers: myHeaders,
      redirect: "follow"
    };
    const response = await  fetch(`https://glowx.alphanitesofts.net/api/fetch_free_scans_by_uid/${id}`, requestOptions)
    const result = await response.json();
    
    console.log(result)
        if(result.status === "200"){
           return result.free_scans
        }
        else{
            return 0
        }
    }
catch{
    return 0
}
    }
    export default checkAvailability
