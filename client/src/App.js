import React from "react"
import Header from "./components/Header/Header"
import Navbar from "./components/Navbar/Navbar"
import Main from "./components/Main/Main"
import Profile from "./components/Profile/Profile"
import Patients from "./components/Patients/Patients"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import { UserProvider } from "./contexts/UserContext"
import { PatientsProvider } from "./contexts/PatientsContext"

import "./App.css"

function App() {
  return (
    <UserProvider>
      <Router>
        <div className="App">
          <Header />
          <Navbar />
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/profile" element={<Profile />} />
            <Route
              path="/patients"
              element={
                <PatientsProvider>
                  <Patients />
                </PatientsProvider>
              }
            />
          </Routes>
        </div>
      </Router>
    </UserProvider>
  )
}

export default App
