
import '../Details.css';

import { useSelector } from "react-redux";
import { selectUser } from './UserSlice';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Details() {

  const user = useSelector(selectUser);
  console.log('User:', user);
    const [userData, setUserData] = useState({
    fullname: '',
    email: '',
    telephone: '',
    username: '',
    password: '', 
  });


  useEffect(() => {
    async function fetchUserData() {
      try {
        if (user && user.token) {
          const response = await axios.get('http://localhost:3001/api/v1/user', {
            headers: {
              'x-access-token': user.token,
            },
          });
  
          setUserData({
            fullname: response.data.fullname,
            email: response.data.email,
            telephone: response.data.telephone,
            username: response.data.username,
            password: '', 
          });
        } else {
          console.error('User object or token is null or undefined.');
        }
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    }
  
    fetchUserData();
  }, [user]); // Include 'user' as a dependency to react to changes in 'user'.
  


  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData({
      ...userData,
      [name]: value,
    });
  };

  const handleUpdateInfo = async () => {
    try {
      // Make an Axios PUT request to update user data.
      const response = await axios.put('http://localhost:3001/api/v1/user/update', userData, {
        headers: {
          'x-access-token': user.token,
        },
      });

      console.log('User information updated successfully');
      window.location.href = '/weather';
      // Optionally, you can show a success message or navigate to another page.
    } catch (error) {
      console.error('Error updating user information:', error);
      // Handle the error, show an error message, etc.
    }
  };
  const handleDeleteAccount = async () => {
    try {
      if (user && user.token) {
        // Send a DELETE request to your server to delete the user account
        await axios.delete('http://localhost:3001/api/v1/user/', {
          headers: {
            'x-access-token': user.token,
          },
        });

        // Optionally, you can redirect the user to a different page or show a success message
        console.log('User account deleted successfully');
        window.location.href = '/'; // Redirect to the login page, for example
      }
    } catch (error) {
      console.error('Error deleting user account:', error);
      // Handle the error, show an error message, etc.
    }
  };

  return (
    <div className='details'>
      <div id='containerN'>
        <div className="row">
          <div className='title'>My Info</div>
        </div>
        <div className="row">
          <div className="col-30">
            <label>Full Name</label>
          </div>
          <div className="col-70">
            <input
              type='text'
              name='fullname'
              value={userData.fullname}
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-30">
            <label>Email</label>
          </div>
          <div className="col-70">
            <input
              type='text'
              name='email'
              value={userData.email}
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-30">
            <label>Telephone</label>
          </div>
          <div className="col-70">
            <input
              type='text'
              name='telephone'
              value={userData.telephone}
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-30">
            <label>Username</label>
          </div>
          <div className="col-70">
            <input
              type='text'
              name='username'
              value={userData.username}
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-30">
            <label>Password</label>
          </div>
          <div className="col-70">
            <input
              type='password'
              name='password'
              value={userData.password}
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div className="row">
          <div className='submit-container'>
            <button onClick={handleUpdateInfo}>Update My Info</button>
            <button onClick={handleDeleteAccount}>Delete My Account</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Details;
