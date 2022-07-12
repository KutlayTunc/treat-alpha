import { useEffect } from "react"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import { useSelector } from "react-redux"

//Toastify
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

//Components
import Header from "./components/Header"
import Navbar from "./components/Navbar"

//Pages
import Login from "./pages/Login"
import Register from "./pages/Register"
import Main from "./pages/Main"
import Profile from "./pages/Profile"
import Patients from "./pages/Patients"

import "./App.css"

function App() {
  const { user } = useSelector((state) => state.auth)

  return (
    <div>
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
      <ToastContainer />
    </div>
  )
}

export default App
