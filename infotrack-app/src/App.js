// App.js
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import LoginComponent from './components/Login';
import HomePage from './components/Home';
import Page from './components/Vehicle';
import LoginPage from './components/Login';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<LoginComponent />} />
      <Route path="/home" element={<HomePage />} />
      <Route path="/page" element={<Page />} />
      <Route path="/login" element={<LoginPage />} />
    </Routes>
  );
};

export default App;
