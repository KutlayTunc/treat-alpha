import { BrowserRouter as Router, Route, Routes } from "react-router-dom"

//Toastify
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

//Components
import Header from "./components/Header/Header"
import Navbar from "./components/Navbar/Navbar"

//Pages
import Login from "./pages/Login/Login"
import Register from "./pages/Register/Register"
import Main from "./pages/Main/Main"
import Profile from "./pages/Profile/Profile"
import Patients from "./pages/Patients/Patients"

import "./App.css"

function App() {
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
