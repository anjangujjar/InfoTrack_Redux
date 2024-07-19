import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Login.css';  // Import the CSS file

const LoginComponent = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loginResponse, setLoginResponse] = useState(null);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    
    const loginData = {
      username: username,
      password: password
    };

    try {
      const response = await axios.post('https://eldapipoc.infotracktelematics.com:5006/fms/v2/eld/driver/driverLogin', loginData);
      setLoginResponse(response.data);
      setError(''); // Clear any previous error message
      navigate('/home', { state: { loginResponse: response.data } });
    } catch (error) {
      setError('Invalid username or password'); // Set error message
      console.error('Error logging in', error);
    }
  };

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
    setError(''); // Clear error message when user starts typing
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    setError(''); // Clear error message when user starts typing
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <div>
          <label>Username:</label>
          <input 
            type="text" 
            value={username} 
            onChange={handleUsernameChange} 
            required 
          />
        </div>
        <div>
          <label>Password:</label>
          <input 
            type="password" 
            value={password} 
            onChange={handlePasswordChange} 
            required 
          />
        </div>
        {error && <p className="error">{error}</p>} {/* Display error message */}
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginComponent;
