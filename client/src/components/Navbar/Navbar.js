import React from "react"
import { Link, useNavigate } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"
import { logout, reset } from "../../features/auth/authSlice"

import "./Navbar.css"

const Navbar = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { user } = useSelector((state) => state.auth)

  const onLogout = () => {
    dispatch(logout())
    dispatch(reset())
    navigate("/")
  }
  return (
    <div className="navbar-container">
      <div>
        {user ? (
          <>
            <button onClick={onLogout}>
              <div className="navbar-item">to logout</div>
            </button>
          </>
        ) : (
          <>
            <Link to="/login">
              <div className="navbar-item">to login</div>
            </Link>
            <Link to="/register">
              <div className="navbar-item">to register</div>
            </Link>
          </>
        )}
      </div>
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
