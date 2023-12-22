import React from "react";
import { NavLink } from "react-router-dom";
import { useAuth } from "./Auth";

export const NavigationBar = () => {
  const auth = useAuth();

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
      {!auth.user && (
        <NavLink style={navLinkStyles} to="/login">
          Login
        </NavLink>
        
      )}

        {/* <NavLink style={navLinkStyles} to="/login">
          Login

        </NavLink> */}
      
        {/* <NavLink style={navLinkStyles} to="/register">
          Register
        </NavLink> */}
        
      
    </nav>
  );
};
