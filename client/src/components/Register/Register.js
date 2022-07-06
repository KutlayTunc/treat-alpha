import { useState, useEffect } from "react"
import "./Register.css"

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
  })
  const { name, email, password, password2 } = formData

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
