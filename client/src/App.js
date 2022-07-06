import React from "react"
import Header from "./components/Header/Header"
import Navbar from "./components/Navbar/Navbar"
import Login from "./components/Login/Login"
import Register from "./components/Register/Register"
import Main from "./components/Main/Main"
import Profile from "./components/Profile/Profile"
import Patients from "./components/Patients/Patients"
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
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
