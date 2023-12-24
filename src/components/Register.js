import { React, useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { useAuth } from './Auth'


export default function Register() {
  const [user1, setUser1] = useState('')
  const [password1, setPassword1] = useState('')
  const auth = useAuth()
  const navigate = useNavigate()
  const location = useLocation();
  const redirectPath = location.state?.path || '/';

  const handleRegister = () => {

    auth.register(user1, password1)

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
            onChange={(e) => setUser1(e.target.value)} />

        </div>
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">Password</label>
          <input type="password" class="form-control" id="exampleInputPassword1"
            onChange={(e) => setPassword1(e.target.value)} />

        </div>

        <button onClick={handleRegister} class="btn btn-primary">Register</button>
      
    </div>
  )
}
