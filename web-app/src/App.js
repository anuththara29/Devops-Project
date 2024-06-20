import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Login from './Components/Login';
import Home from './Components/Home';
import Signup from './Components/Signup';
import Weather from './Components/Weather';
import Details from './Components/Details';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { selectUser } from "./Components/UserSlice";
import { useSelector } from "react-redux";

const App = () => {
  const user = useSelector(selectUser);
  console.log(user);

  const userType = user?.userType;

  const isLoggedInAndAdmin = user && userType === "admin";

  return (
    <div className="app">
        <Router>
            <Routes>
                <Route path="/" element={<Home/>}/>,
                <Route path="/login" element={<Login/>}/>,
                <Route path="/signup" element={<Signup/>}/>,
                <Route path="/weather" element={<Weather/>}/>,
                <Route path="/details" element={<Details/>}/>,
            </Routes>
        </Router>          
    </div>
  );
};

export default App;