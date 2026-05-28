import { useState } from 'react'
import { Routes, Route, Link } from "react-router-dom";
import './App.css'
import Login from './pages/owner/Login'
import Register from './pages/owner/Register'
import Home from './pages/pulic/Home'
import Admin from './pages/Admin';

function App() {

  return (
    <>
      <Routes>
        <Route path='/home' element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<Admin />} />
      </Routes>
    </>
  )
}

export default App