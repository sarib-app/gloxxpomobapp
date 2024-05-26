import AsyncStorage from "@react-native-async-storage/async-storage";

async function LoginCall(name,email,password,referred_by){
try{
    const formdata = new FormData();
    formdata.append("name", "name");
    formdata.append("email", "email@gmail.com");
    formdata.append("password", "password");
    formdata.append("referred_by","12345");
    
    const requestOptions = {
      method: "POST",
      body: formdata,
      redirect: "follow"
    };
    const response = await fetch("https://glowx.alphanitesofts.net/api/loginOrRegister",requestOptions)
    const result =  await response.json()
    console.log(result)
    if(result.status == "200"){
        AsyncStorage.setItem("user", JSON.stringify(result.user))
        return "200"
    }
    else{
        return null
    }
}
catch(e){
    console.log("its catch",e)
    return null
}    



}
export default LoginCall