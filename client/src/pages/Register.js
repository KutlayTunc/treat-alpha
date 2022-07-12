import { useState, useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { toast } from "react-toastify"
import { register, reset } from "../features/auth/authSlice"

import Spinner from "../components/Spinner"
import "./Register.css"

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
  })

  const { name, email, password, password2 } = formData

  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { user, isLoading, isError, isSucces, message } = useSelector(
    (state) => state.auth
  )

  useEffect(() => {
    if (isError) {
      toast.error(message)
    }
    if (isSucces || user) {
      navigate("/profile")
    }
    dispatch(reset)
  }, [user, isError, isSucces, message, navigate, dispatch])

  if (isLoading) {
    return <Spinner />
  }

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }))
  }
  const onSubmit = (e) => {
    e.preventDefault()
    if (password !== password2) {
      toast.error("Passwords do not match!")
    } else {
      const userData = {
        name,
        email,
        password,
      }
      dispatch(register(userData))
    }
  }
  return (
    <div className="register-container">
      <div className="register-item">Please create an account</div>
      <div className="register-item">
        <form onSubmit={onSubmit}>
          <div>
            <input
              type="text"
              className="form-control"
              id="name"
              name="name"
              value={name}
              placeHolder="Enter your name"
              onChange={onChange}
            />
          </div>
          <div>
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              value={email}
              placeHolder="Enter your email"
              onChange={onChange}
            />
          </div>{" "}
          <div>
            <input
              type="password"
              className="form-control"
              id="password"
              name="password"
              value={password}
              placeHolder="Enter password"
              onChange={onChange}
            />
          </div>{" "}
          <div>
            <input
              type="password"
              className="form-control"
              id="pasword2"
              name="password2"
              value={password2}
              placeHolder="Confirm password"
              onChange={onChange}
            />
          </div>
          <div>
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Register
