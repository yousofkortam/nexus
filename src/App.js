import React from "react";
import { AuthProvider } from "./components/Auth";
import { Route, Routes } from "react-router-dom"; // Routes , Route
import { Home } from "./components/Home";
import { NavigationBar } from "./components/NavigationBar";





import { Profile } from "./components/Profile";
import Login from "./components/Login";
import Register from"./components/Register";
import "./App.css";
import RequireAuth from "./components/RequireAuth";


function App() {
  return (
    <AuthProvider>
      
      <NavigationBar />
      <Routes>
        <Route path="/" element={<Home />} />

        


        <Route path="profile" element={
          <RequireAuth>
            <Profile />
          </RequireAuth>
        
          } 
        />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        
      </Routes>
    </AuthProvider>
  );
}

export default App;
