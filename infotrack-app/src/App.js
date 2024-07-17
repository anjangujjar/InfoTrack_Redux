// App.js
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import LoginComponent from './components/Login';
import HomePage from './components/Home';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<LoginComponent />} />
      <Route path="/home" element={<HomePage />} />
    </Routes>
  );
};

export default App;
