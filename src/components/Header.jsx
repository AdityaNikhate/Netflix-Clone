import React, { useEffect, useState } from 'react'
import {useSelector } from 'react-redux';
import { auth } from '../utils/firebase';
import {useLocation, useNavigate } from 'react-router-dom'
import { signOut  } from 'firebase/auth'
import { FaUserAlt } from "react-icons/fa";
import { Tooltip } from 'react-tooltip'

const Header = () => {
  const [name, setName] = useState(null);
  const [loading, setLoading] = useState(true);
  const userInfo = useSelector((state)=>state.user);
  const navigation = useNavigate()
  const loc = useLocation()
  const [logoutButton, setLogoutButton] = useState(false)

  const handledSignOut = ()=>{
    signOut(auth).then(() => {
      alert("signout successfully")
      navigation('/')
    }).catch((error) => {
      alert(error);
    });
  }

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      if (user) {
        const displayName = user.displayName;
        setName(displayName);
      } else {
        setName("");
      }
      setLoading(false);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  useEffect(()=>{
    if(loc.pathname == '/'){
      console.log("match")
    }else{
      setLogoutButton(true)
    }
  },[name,userInfo])


  return (
    <div className=' z-40 absolute px-10 flex justify-between py-4 bg-gradient-to-b w-full from-black md:px-7'>
      <img className='w-44 sm:w-32' src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png" alt="logo" />
      <div className='flex items-center gap-6 md:gap-3'>
      {
        logoutButton&&(
          <>
          <FaUserAlt data-tooltip-id="userName" data-tooltip-content={"Hello "+((!userInfo)?name:userInfo.displayName)} className='text-3xl text-blue-600 md:text-2xl md:border-none'/>
          <Tooltip id="userName"/>
          </>
        )
      }
      {
        logoutButton&&(<button onClick={handledSignOut} className='py-1 px-5 rounded-sm bg-red-700 text-white font-bold md:text-xs  md:px-2'>Logout</button>)
      }
      
      </div>   
    </div>
  )
}

export default Header