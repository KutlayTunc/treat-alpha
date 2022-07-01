import React from "react"
import Header from "./components/Header/Header"
import Navbar from "./components/Navbar/Navbar"
import Main from "./components/Main/Main"
import Profile from "./components/Profile/Profile"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"

import "./App.css"

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Navbar />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
