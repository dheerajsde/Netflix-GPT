import React from 'react'
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase"
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate()
  const handleSignOut = () => {
    signOut(auth).then(() => {
      // Sign-out successful.
      navigate("/")
    }).catch((error) => {
      // An error happened.
    });

  }
  return (
    <div className='flex w-screen px-8 py-2 absolute bg-gradient-to-b from-black z-10 justify-between'>
      <div>
        <img className='w-60' src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
          alt="logo" />
      </div>
      <div className='flex'>
        <img className='w-10 h-10 m-4' src='https://i.pinimg.com/564x/5b/50/e7/5b50e75d07c726d36f397f6359098f58.jpg' alt="usericon" />
        <button onClick={handleSignOut} className='button'>(Sign Out)</button>
      </div>
    </div>
  )
}
export default Header