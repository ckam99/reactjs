import React from 'react'
import { Route, Routes } from 'react-router-dom'

import Navbar from './components/Navbar'

import LoginPage from './pages/LoginPage'

import MainPage from './pages/MainPage'
import UserDetailPage from './pages/user/UserDetailPage'
import UserMainPage from './pages/user/UserMainPage'

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/users" element={<UserMainPage />} />
        <Route path="/users/:id" element={<UserDetailPage />} />
      </Routes>
    </>
  )
}

export default App
