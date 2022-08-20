import React from 'react'
import {useState} from "react";
import { useEffect } from "react";
import cities from "../cities.json";
import Axios from "axios";
import { useAuth0 } from '@auth0/auth0-react';

function LandingPage() {
    const { user, isAuthenticated } = useAuth0();

    var Array=[1248991,1850147,2644210,2988507,2147714,4930956,1796236,3143244];
    let base_url = "http://api.openweathermap.org/data/2.5/group?id=";
    let API_Key = "&units=metric&appid=6132dacaf75671edb4839471802d8ce4";
    let url = base_url+ ""+API_Key;
    var countryCode = "";
  
    const [weather, setWeather] = useState([]);
    const [country, setCountry] = useState("");
    const [datalist, setDataList]= useState([]);
    
    const searchWeather = () => {
        contryCodeString();
        Axios.get(base_url+countryCode+API_Key).then(
          (response) => {
            console.log(response.data.list);
            setDataList(response.data.list);
          }
        )
    }
  
    const contryCodeString = () => {
          for(var i=0; i <= Array.length; i++){
            console.log(Array + "is the array");
              if(i != Array.length-1){
                  countryCode += Array[i]+",";
              }else{
                countryCode += Array[i];
              }
              setCountry(countryCode);
          }
    }
  
    return (
            isAuthenticated && (
      <div className="container p-2 text-center">
        <button onClick={searchWeather} className ="btn btn-primary mb-2">
           Find Weather Details
        </button>
  
        <div className='row'>
          {
            datalist.map((country) => {
              return (
              <div className=' bg-green-300 border-b-4 p-1 text-center shadow-md col-sm-6 mt-1' key={country.id}>
                <h2 className=' font-bold'>{country.name}</h2>
                <p className=' font-medium'>{country.weather[0].description}</p>
                <p>{country.main.temp}</p>
                <p>{country.id}</p>
              </div>
              );
            })
          }
        </div>
       {/* {
        
        cities.map(post => {
          for(var i=0; i < cities.length; i++){
                console.log(post.CityCode + "City code" + i);
              Array[i] = parseInt(post.CityCode);
          }
        })
       } */}
  
       
      </div> 
      )
    );
}

export default LandingPage