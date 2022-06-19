import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { Home, Dashboard, Profile, AddJob, Management, Login, Signup, List, Error } from './pages';
import 'animate.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} ></Route>
        <Route path="/dashboard" element={<Dashboard />} ></Route>
        <Route path="/profile" element={<Profile />} ></Route>
        <Route path="/joblist" element={<Management />} ></Route>
        <Route path="/addjob" element={<Management />} ></Route>
        <Route path="/jobstreaming" element={<Management />} ></Route>
        <Route path="/login" element={<Login />} ></Route>
        <Route path="/signup" element={<Signup />} ></Route>
        <Route path="*" element={<Error />} ></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App
