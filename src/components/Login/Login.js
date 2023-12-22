import { React } from 'react'
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom'

function Login() {
  const navigate = useNavigate();
  
  const handleLogin = () => {
    // TODO
    navigate('/', { replace: true })
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
          onChange={(e) => {
            // TODO
          }}
        />
      </div>
      <div class="mb-3">
        <label for="exampleInputPassword1" class="form-label">Password</label>
        <input type="password" class="form-control" id="exampleInputPassword1"
          onChange={(e) => {
            // TODO
          }}></input>
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

export default Login;