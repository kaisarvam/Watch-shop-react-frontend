 import { useState ,useEffect } from 'react';
 import { getAuth, createUserWithEmailAndPassword ,signOut ,onAuthStateChanged ,signInWithEmailAndPassword ,GoogleAuthProvider,signInWithPopup , updateProfile  } from "firebase/auth";
import initializeFirebase from '../Components/Pages/Login/Firebase/Firebase.init';

import axios from 'axios';



const provider = new GoogleAuthProvider();

initializeFirebase();

 const UseFirebase = () => {
    

   const[isLoading,setIsLoading] = useState(true);
   const[authError,setAuthError] = useState(null);
   const[newName,setNewName] = useState([]);
   const [admin,setAdmin] = useState(false);
    const [user,setUser] = useState({});
const auth = getAuth();


useEffect(()=>{

  const url =`https://afternoon-sea-57536.herokuapp.com/user/${user.email}`
  axios.get(url)
  .then((res)=>{
    console.log("admin checking data",res.data.admin);
    setAdmin(res.data.admin)
  })
  
},[user])


const saveUser = (email,name,method,location,history)=>{
  console.log("save user called !!!");
  const user = {email,name};
  const url=`https://afternoon-sea-57536.herokuapp.com/addUser`
  if(method==="POST")
  {
    axios.post(url,{user})
    .then((res)=>{
    console.log("user saving in mongodb response : ",res.data);
      const destination = location?.state?.from || '/home';
      history.replace(destination);
    })
  }else{
    axios.put(url,{user})
  .then((res)=>{
  console.log("user saving in mongodb response ");
  })
  }
  
  
  }

const GoogleSignIn = (location,history)=>{

  signInWithPopup(auth, provider)
  .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    // The signed-in user info.
    const user = result.user;
    const name = user.displayName;
    const email = user.email;
    saveUser(email,name,"PUT");

    const url =`https://afternoon-sea-57536.herokuapp.com/user/${user.email}`
    axios.get(url)
    .then((res)=>{
      console.log("admin checking data",res.data.admin);
      if(res.data.admin){
        const destination = location?.state?.from || '/dashbord';
        history.replace(destination);
      }
      else{
        const destination = location?.state?.from || '/home';
        history.replace(destination);
      }
      
    })
    // ...
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
console.log("error is :",errorMessage);
    // The email of the user's account used.
    const email = error.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
  });
}

 

const registerUser = (email,password,name,location,history)=>{
setIsLoading(true);
    createUserWithEmailAndPassword(auth,email,password)
    .then((userCredential) => {
      updateProfile(auth.currentUser, {
        displayName: name
      })
      setNewName(name);
      saveUser(email,name,'POST',location,history);
      console.log("history is ",history);
        const user = userCredential.user;
        setAuthError(null);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setAuthError(errorMessage);
        console.log("error here is :",authError);
      })
      .finally(()=>{
        setIsLoading(false);
       
      })
}

const LogInUser = (email,password,location,history)=>{
  setIsLoading(true);
    signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    const url =`https://afternoon-sea-57536.herokuapp.com/user/${email}`
    axios.get(url)
    .then((res)=>{
      console.log("admin checking data",res.data.admin);
      if(res.data.admin){
        const destination = location?.state?.from || '/dashbord';
        history.replace(destination);
      }
      else{
        const destination = location?.state?.from || '/home';
        history.replace(destination);
      }
      
    })
    setAuthError(null);
    const user = userCredential.user;
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log("error in login with email ",errorMessage);
    setAuthError(errorMessage);
  }).finally(()=>{
    setIsLoading(false);
  })
    
}

//observe browser multitab login data
useEffect(()=>{

 const unSubscribe =   onAuthStateChanged(auth, (user) => {
        if (user) {
          const uid = user.uid;
            if(uid){
                setUser(user);  
            }else{
                setUser({})
            }
        }
        setIsLoading(false);
      });

      return ()=> unSubscribe;

},[user])

const  LogOut = ()=>{
    signOut(auth).then(() => {
      setUser({})
      setNewName('')
      }).catch((error) => {
      });
}



return ({
    user,
    admin,
    registerUser,
    LogOut,
    LogInUser,
    isLoading,
    authError,
    GoogleSignIn,
    newName
});
 };
 

 export default UseFirebase;