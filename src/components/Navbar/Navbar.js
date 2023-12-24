import React from "react";
import { NavLink } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

function Navbar() {

  const navLinkStyles = ({ isActive }) => {
    return {
      fontWeight: isActive ? "bold" : "normal",
      textDecoration: isActive ? "none" : "none",
    };
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <NavLink className="navbar-brand" style={{fontWeight: "bold"}} to="/">
          nexus
        </NavLink>
        {/* <a className="navbar-brand" href="/">nexus</a> */}
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <NavLink className="nav-link" style={navLinkStyles} to="/">
                Home
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link" style={navLinkStyles} to="/about">
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" style={navLinkStyles} to="/contact">
                Contact
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" style={navLinkStyles} to="/login">
                Login
              </NavLink>
            </li>

          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;