import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import AboutS from './pages/AboutS/AboutS';
import Volunteer from './pages/Volunteer/Volunteer';
import Donate from './pages/Donate/Donate';
import Signup from './components/authentication/signup/Signup';
import Login from './components/authentication/Login';
import ProcessS from './pages/ProcessS/ProcessS';

function App() {
  return (
    <Router>
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutS />} />
        <Route path="/volunteer" element={<Volunteer />} />
        <Route path="/donate" element={<Donate />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/donate" element={<Donate />} />
        <Route path="/volunteer" element={<Volunteer />} />
        <Route path="/process" element={<ProcessS />} />
      </Routes>
    </Router>
  );
}

export default App;
