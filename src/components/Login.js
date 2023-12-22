import { React, useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { useAuth } from './Auth'
import { Link } from "react-router-dom";

export default function Login() {
  const [user, setUser] = useState('')
  const [password, setPassword] = useState('')

  const auth = useAuth()
  const navigate = useNavigate()
  // const location =useLocation();
  // const redirectPath = location.state?.path || '/';



  const handleLogin = () => {
    auth.login(user, password)

    // navigate(redirectPath, { replace : true })
  }

  return (

   

      <div class='container'>
        <div class="mb-3">
          <h1>
            Login
          </h1>
          <label class="form-label">UserName</label>
          <input class="form-control"
            type="text"
            onChange={(e) => setUser(e.target.value)}
          />
        </div>
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">Password</label>
          <input type="password" class="form-control" id="exampleInputPassword1"
            onChange={(e) => setPassword(e.target.value)}></input>
        </div>

        <button class="btn btn-primary" onClick={handleLogin}>Login</button>

        <p>
          Don't have an Account?{" "}
          <Link to="/register">
            <span className="hover:text-blue-600 duration-300">Register</span>
          </Link>
        </p>
      




    </div>

  );
}
