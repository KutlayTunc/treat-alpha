import React from "react"
import { Link } from "react-router-dom"
import "./Navbar.css"

const Navbar = () => {
  return (
    <div className="navbar-container">
      <Link to="/">
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
