import { useState, useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { toast } from "react-toastify"
import { login, reset } from "../../features/auth/authSlice"

import Spinner from "../../components/Spinner/Spiner"
import "./Login.css"

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  })
  const { email, password } = formData

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

    const userData = {
      email,
      password,
    }

    dispatch(login(userData))
  }

  return (
    <div className="login-container">
      <div className="login-item">Please login</div>

      <div className="login-item">
        <form onSubmit={onSubmit}>
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
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login
