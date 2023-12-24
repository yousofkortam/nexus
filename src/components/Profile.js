import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from './Auth'
import { Link } from "react-router-dom";

export const Profile = () => {
  const auth = useAuth()
  const navigate = useNavigate()
  const handleLogout = ()=>{
    auth.logout()
    navigate("/login")
  }
  return (
    <>
    <div className="container"> <h4>Hi,{auth.user}</h4> </div>
    <button type="button" class="btn btn-secondary align-baseline" onClick={handleLogout}>Logout</button>
    
    <div className="flex justify-center items-center h-screen">
      <div>
        <Link to="/" class="link-offset-2 link-underline link-underline-opacity-0">
        <span> Home </span> 
        </Link>
      </div> 
    </div>
    </>
  )
}
