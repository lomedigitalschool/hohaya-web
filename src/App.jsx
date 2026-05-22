import { useState } from 'react'
import { Routes, Route, Link } from "react-router-dom";
import './App.css'
import LoginScreen from './components/InputField'

function App() {

  return (
    <>
      <Routes>
        <Route path="/login" element={<LoginScreen />} />
      </Routes>
    </>
  )
}

export default App
