import React from 'react'
import './index.css'
import LoginPage from './components/Login'
import Signup from './components/Signup'
import Forgot from './components/Forgot/Forgot'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

const App = () => {
  return (
    <>
    {/* <LoginPage/> */}
     <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/forgot" element={<Forgot />} />
        </Routes>
    </>
  )
}

export default App