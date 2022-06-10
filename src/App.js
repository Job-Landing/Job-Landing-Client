import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { Home, List, Error } from './pages';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} ></Route>
        <Route path="/list" element={<List />} ></Route>
        <Route path="*" element={<Error />} ></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App
