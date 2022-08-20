import logo from './logo.svg';
import React,{useState} from "react";
import { useEffect } from "react";
import cities from "./cities.json";
import Axios from "axios";
import LoginButton from './Components/LoginButton';
import LogoutButton from './Components/LogoutButton';
import LandingPage from './Components/LandingPage';

function App() {


  return (
    <div className="App">
        <LoginButton/>
        <LogoutButton />
        <LandingPage />

    </div>
  );
}

export default App;
