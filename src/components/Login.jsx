import React, { useRef, useState } from 'react'
import Header from './Header'
import { useNavigate } from 'react-router-dom'
import {checkValidData} from '../utils/validate'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword} from "firebase/auth";
import {auth} from '../utils/firebase'
import { useDispatch } from 'react-redux'
import { addUser } from '../utils/userSlice'
import {updateProfile } from "firebase/auth";

const Login = () => {
  const dispatch = useDispatch()
  const [isSignInForm, setIsSignInForm] = useState(true)
  const [errorMessage, setErrorMessage] = useState(null)
  const username = useRef(null)
  const email = useRef(null);
  const password = useRef(null);


  const navigate = useNavigate()

  const handledSubmit = (e)=>{
    e.preventDefault(); 
    const message = checkValidData(email.current.value, password.current.value)
    setErrorMessage(message)
    if(message){
      return;
    }
    if(!isSignInForm){
      // not sign up
      const name1 = username.current.value;
      const email1 = email.current.value;
      const password1 = password.current.value;
      createUserWithEmailAndPassword(auth,email.current.value, password.current.value)
        .then((userCredential) => {
          // Signed up 
          const user = userCredential.user;
          console.log(user)
          alert("Sign Up successfully")
          const {uid} = user;
          dispatch(addUser({uid:uid, email:email.current.value, displayName:username.current.value}))
          updateProfile(auth.currentUser, {
            displayName: username.current.value
          }).then(() => {
            // Profile updated!
            // ...
            console.log("done")
          }).catch((error) => {
            // An error occurred
          
            console.log("notdone")
          });
          navigate("/browse")
        
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage("Error occure while signing up.")
          // ..
        });
    }
    if(isSignInForm){
      signInWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          // Signed in 
          const user = userCredential.user;
          alert("Login successfully")
          navigate("/browse")
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          alert(errorMessage+"Fail to login"+errorCode)
        });
    }
  }

  const handledSignInToggle = ()=>{
    setIsSignInForm(!isSignInForm);
  }

  return (
    <div className='w-full text-white h-screen bg-cover bg-[url("https://assets.nflxext.com/ffe/siteui/vlv3/93da5c27-be66-427c-8b72-5cb39d275279/94eb5ad7-10d8-4cca-bf45-ac52e0a052c0/IN-en-20240226-popsignuptwoweeks-perspective_alpha_website_large.jpg")]'>  
      <Header/>

      <div className='flex justify-center items-center w-full h-full'>
      <form className='w-1/4 bg-[rgba(0,0,0,0.7)] py-4 px-6 lg:w-1/2 sm:w-3/4'>
        <h1 className='text-white font-semibold mb-3 text-2xl'>{isSignInForm?"Sign In":"Sign Up"}</h1>
        {
          !isSignInForm && <input type="text"
          ref={username}
          className='w-full py-2 px-2 outline-none rounded-sm mb-4 text-white bg-gray-600'
         placeholder='Enter Name'/>
        }

        <input type="text" 
        ref={email}
          className='w-full py-2 px-2 outline-none rounded-sm mb-4 text-white bg-gray-600'
         placeholder='Enter Email'/>

        <input type="password"
        ref={password} 
          className='w-full py-2 px-2 outline-none rounded-sm mb-4 text-white bg-gray-600'
         placeholder='Password'/>

          {
            errorMessage && <h1 className='text-red-600'>{errorMessage}</h1>
          }

         <button
          onClick={handledSubmit}
          className='w-full py-2 mt-3 mb-2 text-center font-bold text-white bg-[#E50914]'>{isSignInForm?"Sign In":"Sign Up"}</button>

          

        <div className='w-full flex justify-between'>
          <div>
          <input type="checkbox" className='outline-none w-4 h-4'/>
          <label className='text-white pl-2'>Remember me</label>
          </div>  
          <h1 className='text-white'>Need help</h1>
        </div>

          <h1 className='mt-7 font-light'>
            {isSignInForm ?
              'New to Netflix? ' :
              'Already have an account? '
            }
            <span onClick={handledSignInToggle} className="font-semibold cursor-pointer">
              {isSignInForm ? 'Sign up now.' : 'Sign In.'}
            </span>
          </h1>      
        </form>
      </div>
    </div>
  )
}

export default Login