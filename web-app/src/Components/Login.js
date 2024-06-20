import React, { useState } from 'react';
import '../Login.css';
import Log from '../Images/Log.png';
import Padlock from '../Images/password.PNG';
import User from '../Images/username.PNG';
import { Link } from "react-router-dom";
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { login } from './UserSlice';

function Login() {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:3001/api/v1/user/login', formData);
      dispatch(login(response.data));
      setSuccessMessage('Login successful!'); 
      setError(''); // Clear any previous error message
      console.log('Login successful:', response.data);
      // Clear form fields
      setFormData({ username: '', password: '' });
      // Redirect after 1 second
      setTimeout(() => {
        window.location.href = '/weather';
      }, 1000);
    } catch (error) {
      setError('Login failed. Please check your credentials.'); 
      console.error('Login failed:', error);
      setSuccessMessage(''); // Clear any previous success message
    }
  };

  return (
    <div className='login'>
      <div className='left'>
        <img src={Log} alt=" " />
      </div>
      <div className='h3'>Login</div>
      <div className='p'>Please enter your login details to sign in.</div>
      
      <form onSubmit={handleLogin}>
        <div className='container'>
          <div className='header'>
            <div className='inputs'>
              <div className='input'>
                <img src={User} alt=" " />
                <input
                  type='text'
                  placeholder='Username'
                  name='username'
                  value={formData.username}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className='input'>
                <img src={Padlock} alt=" " />
                <input
                  type='password'
                  placeholder='Password'
                  name='password'
                  value={formData.password}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>
            <div className='submit'>
              <button type='submit'>Log In</button>
            </div>
            {error && <div className='error'>{error}</div>}
            {successMessage && <div className='success'>{successMessage}</div>}
          </div>
        </div>
      </form>
      <div className='h4'>Don't have an account?
        <Link to="/signup"><b> Sign Up</b></Link>
      </div>
    </div>
  );
}

export default Login;
