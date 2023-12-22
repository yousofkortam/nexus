import React from "react";
import { NavLink } from "react-router-dom";
import './Navbar.module.css';

function Navbar() {

  const navLinkStyles = ({ isActive }) => {
    return {
      fontWeight: isActive ? "bold" : "normal",
      textDecoration: isActive ? "none" : "none",
    };
  };
  
  return (
    <nav>
      <NavLink style={navLinkStyles} to="/">
        Home
      </NavLink>
      <NavLink style={navLinkStyles} to="/profile">
        Profile
      </NavLink>
      <NavLink style={navLinkStyles} to="/about">
        About
      </NavLink>
      <NavLink style={navLinkStyles} to="/contact">
        Contact
      </NavLink>
      <NavLink style={navLinkStyles} to="/login">
        Login
      </NavLink>
    </nav>
  );
};

export default Navbar;