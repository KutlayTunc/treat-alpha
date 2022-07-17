import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import { useSelector } from "react-redux"

//Toastify
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

//Components
import Header from "./layouts/Header"
import Navbar from "./layouts/Navbar"

//Pages
import Login from "./components/Login"
import Register from "./components/Register"
import Main from "./components/Main"
import Profile from "./components/Profile"
import Patients from "./components/Patients"

import "./App.css"

function App() {
  const { user } = useSelector((state) => state.auth)
  console.log(user)

  if (!user) {
    return (
      <Router>
        <div className="App">
          <Routes>
            <Route path="/*" element={<Login />} />
          </Routes>
        </div>
      </Router>
    )
  }
  return (
    <div>
      <Router>
        <div className="App">
          <Header />
          <Navbar />
          <Routes>
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
