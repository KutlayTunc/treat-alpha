import { useState, useEffect } from "react"
import "./Login.css"

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  })
  const { email, password } = formData

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }))
  }
  const onSubmit = (e) => {
    e.preventDefault()
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
