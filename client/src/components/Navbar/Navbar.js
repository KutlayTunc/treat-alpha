import React from "react"
import { Link } from "react-router-dom"
import "./Navbar.css"

const Navbar = () => {
  return (
    <div className="navbar-container">
      <Link to="/login">
        <div className="navbar-item">to login</div>
      </Link>
      <Link to="/register">
        <div className="navbar-item">to register</div>
      </Link>
      <Link to="/main">
        <div className="navbar-item">to main</div>
      </Link>
      <Link to="/profile">
        <div className="navbar-item">to profile</div>
      </Link>
      <Link to="/patients">
        <div className="navbar-item">to patients</div>
      </Link>
      <div className="navbar-item"> item</div>
    </div>
  )
}
export default Navbar
