import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import {Home, Login, Signup, List, Error, Dashboard,} from './pages';
import DashTable from "./pages/DashBoard/DashTable";
import AddJob from "./pages/DashBoard/AddJob";
import Profile from "./pages/DashBoard/Profile";

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/dashboard" element={<Dashboard/>}>
            <Route path="table" element={<DashTable/>}/>
            <Route path="list" element={<List/>}/>
            <Route path="add" element={<AddJob/>}/>
            <Route path="profile" element={<Profile/>}/>
          </Route>
          <Route path="/list" element={<List/>}></Route>
          <Route path="/login" element={<Login/>}></Route>
          <Route path="/signup" element={<Signup/>}></Route>
          <Route path="*" element={<Error/>}></Route>
        </Routes>
    </BrowserRouter>
  );
}

export default App
