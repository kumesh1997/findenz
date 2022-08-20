import React from 'react'
import { useAuth0 } from '@auth0/auth0-react';

function LogoutButton() {
    const { logout, isAuthenticated } = useAuth0();
  return (
    isAuthenticated && (
    <button onClick={() => logout()} className=" bg-red-500 p-2 bottom-2 shadow-lg rounded-full m-2 font-bold">Logout</button>
    )
  )
}

export default LogoutButton