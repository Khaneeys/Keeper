import React from "react";
import {  BrowserRouter,  Route,  Routes} from 'react-router-dom';
import Notes from './Notes'
import Login from './Login'
import Register from './Register'

function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route path="/notes" element={<Notes />} />
    <Route path="/login" element={<Login />} />
    <Route path="/register" element={<Register />} /> 
    </Routes>
</BrowserRouter>
  )
}

export default App
