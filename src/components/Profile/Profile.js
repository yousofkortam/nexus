import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Link } from "react-router-dom";

function Profile() {
  const navigate = useNavigate()
  const handleLogout = ()=>{
    navigate("/login")
  }
  return (
    <>
    <div className="container"> <h4>Hi, Nour 😎</h4> </div>
    <button button type="button" class="btn" data-bs-toggle="button" onClick={handleLogout}>Logout</button>
    
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

export default Profile;