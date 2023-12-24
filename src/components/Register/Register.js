import React, { useState } from 'react';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function Register() {
  const navigate = useNavigate();
  const location = useLocation();
  const redirectPath = location.state?.path || '/';

  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = () => {
    // TODO: Implement registration logic
    navigate(redirectPath, { replace: true });
  }

  return (
    <div className="container mt-5">
      <div className="card">
        <div className="card-body">
          <h4 className="card-title text-center mb-4">Create an Account</h4>
          <form>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email address</label>
              <input
                type="email"
                className="form-control"
                id="email"
                aria-describedby="emailHelp"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <div id="emailHelp" className="form-text">
                We'll never share your email with anyone else.
              </div>
            </div>
            <div className="mb-3">
              <label htmlFor="username" className="form-label">Username</label>
              <input
                type="text"
                className="form-control"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">Password</label>
              <input
                type="password"
                className="form-control"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <button
              type="button"
              className="btn btn-primary btn-block"
              onClick={handleRegister}
            >
              Register
            </button>
          </form>

          <p className="mt-3 text-center">
            Already have an account?{' '}
            <Link to="/login">Login</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Register;