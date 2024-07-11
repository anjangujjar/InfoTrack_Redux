import './App.css'
import {useEffect, useState} from 'react'
import {BrowserRouter as Router, Switch, Route, Routes} from 'react-router-dom'

import SignUp from './screens/Signup.js'
import SignIn from './screens/Login.js'

function App() {
  return (
    <Router>
      <main className="app">
        <Route>
          <Routes exact path="/signup" component={SignUp} />
          <Routes exact path="/signin" component={SignIn} />
        </Route>
      </main>
    </Router>
  );
}

export default App;
