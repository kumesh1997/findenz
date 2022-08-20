import React from 'react'
import { useAuth0 } from '@auth0/auth0-react';

const LoginButton = () => {
    const { loginWithRedirect, isAuthenticated } = useAuth0();
  return (
    !isAuthenticated && (
    <button onClick={() => loginWithRedirect()} className=" bg-green-400 p-2 bottom-2 shadow-lg rounded-full m-2 font-bold duration-200 active: translate-x-2 ">Log In</button>
    )
  )
}

export default LoginButton