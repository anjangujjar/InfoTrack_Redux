// components/Home.js
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h2>Home</h2>
      <p>Welcome to the home page!</p>
      <button className="signin-button" onClick={() => navigate('/login')}>LogOut</button>
    </div>
  );
};

export default Home;
