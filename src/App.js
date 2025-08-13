import React from 'react'
import './index.css'
import LoginPage from './components/Login'
import Signup from './components/Signup'
import Forgot from './components/Forgot/Forgot'
import Otpverification from './components/Forgot/Otpverification'
import NewPassword from './components/Forgot/NewPassword'
import AdminLayout from './components/AdminLayout'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Overview from './components/Overview'

const App = () => {
  return (
    <>
    {/* <LoginPage/> */}
     <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/forgot" element={<Forgot />} />
        <Route path="/otp" element={<Otpverification />} />
        <Route path="/newpassword" element={<NewPassword />} />
                <Route path="/dashboard" element={<AdminLayout />}>
                 <Route index element={<Navigate to="home" replace />} />

          <Route path="home" element={<Overview />} />
                </Route>

        </Routes>
    </>
  )
}

export default App