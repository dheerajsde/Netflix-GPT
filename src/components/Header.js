import React from 'react'
import { useEffect } from 'react';
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase"
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { onAuthStateChanged } from "firebase/auth";
// import { auth } from "../utils/firebase"
import { addUser, removeUser } from '../utils/userSlice'
import { NeflixLogo } from '../utils/constants';

const Header = () => {
  const dispath = useDispatch();
  const user = useSelector(store => store.user)
  const navigate = useNavigate()

  const handleSignOut = () => {
    signOut(auth).then(() => {
      // Sign-out successful.
    }).catch((error) => {
      navigate("/error")
      // An error happened.
    });

  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const { uid, email, displayName, photoURL } = user;
        dispath(addUser({ uid: uid, email: email, displayName: displayName, photoURL: photoURL }));
        navigate("/browse")
        // ...
      } else {
        // User is signed out
        // ...
        dispath(removeUser())
        navigate("/")
      }
    });
    return () => unsubscribe()
  }, [])

  return (
    <div className='flex w-screen px-8 py-2 absolute bg-gradient-to-b from-black z-10 justify-between'>
      <div>
        <img className='w-60' src={NeflixLogo} alt="logo" />
      </div>
      {user &&
        <div className='flex'>
          <img className='w-10 h-10 m-4 rounded-full' src={user?.photoURL} alt="usericon" />
          <button onClick={handleSignOut} type="button" className="text-white h-10 mt-4 hover:text-white border border-red-700 font-medium rounded-md text-sm px-3  text-center bg-red-600">Sign Out</button>
        </div>
      }
    </div>
  )
}
export default Header