import React, { useState } from 'react'
import '../Weather.css';
import Search from '../Images/search.png';
import {Link} from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout, selectUser } from "./UserSlice";
import { TextField } from '@mui/material';
import axios from 'axios';
function Weather() {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const [weather, setWeather] = useState();

  const Logout = (e) => {
    console.log("Logout button clicked");
    dispatch(logout());
    window.location.href = '/';
  };
  const handleSearch = (e) => {
    const location = e.target.value;
    axios
      .get(
        `http://api.weatherapi.com/v1/current.json?key=6b96a95b54424361912185410232210&q=${location}`
      )
      .then((response) => {
        setWeather(response.data); 
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className='weather'> 
      <div className='panel'>
          <Link to="/details"><button>View My Account</button></Link>
          <button onClick={(e) => Logout(e)}>Log Out</button>
      </div>   
      <div className='head'>Weather Now</div>
      <div className='p1'>Your weather companion. Accurate forecasts at your fingertips.</div>
      <div className='location'>
      <TextField
        id="standard-search"
        label="Search field"
        type="search"
        variant="standard"
        onChange={handleSearch}
      />
      </div> 
      <div className='submit1'><button onClick={handleSearch}>Get Weather</button></div>  
        <div id='container'>
          <div className="row">
            <div className="col-30">
                <label>Location</label>
            </div>
          <div className="col-70">
                 <input type='box' value={weather?.location?.name}/>
          </div>
          </div>
          <div className="row">
            <div className="col-30">
                <label>Humidity</label>
            </div>
          <div className="col-70">
                 <input type='box' value={weather?.current?.humidity}/>
          </div>
          </div>
          <div className="row">
            <div className  ="col-30">
                <label>Temperature</label>
            </div>
          <div className="col-70">
                 <input type='box' value={weather?.current?.temp_c}/>
          </div>
          </div>
          <div className="row">
            <div className="col-30">
                <label>Speed of wind</label>
            </div>
          <div className="col-70">
                 <input type='box' value={weather?.current?.wind_kph}/>
          </div>
          </div>
        </div>
              
    </div>
    
  )
}

export default Weather
