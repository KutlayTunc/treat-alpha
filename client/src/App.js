import React from "react"

//Components
import Header from "./components/Header/Header"
import Navbar from "./components/Navbar/Navbar"

//Pages
import Login from "./pages/Login/Login"
import Register from "./pages/Register/Register"
import Main from "./pages/Main/Main"
import Profile from "./pages/Profile/Profile"
import Patients from "./pages/Patients/Patients"

import { BrowserRouter as Router, Route, Routes } from "react-router-dom"

import "./App.css"

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Navbar />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/main" element={<Main />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/patients" element={<Patients />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
