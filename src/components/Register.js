import { React } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'

export default function Register() {
  const navigate = useNavigate()
  const location = useLocation();
  const redirectPath = location.state?.path || '/';

  const handleRegister = () => {
    navigate(redirectPath, { replace: true })
  }

  return (
      <div class='container'>
        <h4>
          Create an Account
        </h4>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">Email address</label>
          <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
          </input>
          <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
        </div>
        <div class="mb-3">
          <label class="form-label">UserName</label>
          <input class="form-control" type="text"
            onChange={(e) => {
              // TODO
            }} />

        </div>
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">Password</label>
          <input type="password" class="form-control" id="exampleInputPassword1"
            onChange={(e) => {
              // TODO
            }} />

        </div>

        <button onClick={handleRegister} class="btn btn-primary">Register</button>
    </div>
  )
}