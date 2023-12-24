import React, { createContext, useState, useContext } from 'react';
import { useNavigate ,useLocation} from 'react-router-dom'

const AuthContext = createContext(null);



export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [password, setPassword] = useState(null);

  const [user1, setUser1] = useState(null);
  const [password1, setPassword1] = useState(null);
  
  const navigate = useNavigate();
  const location =useLocation();
  const redirectPath = location.state?.path || '/';

  const login = (user, password) => {
    const isRegistered = isUserRegistered(user, password);

    if (isRegistered) {
      console.log("true")
      setUser(user);
      setPassword(password);
      navigate(redirectPath, { replace : true })
      
    } else {
      console.log("Invalid login")
      navigate('/login');
      alert("Invalid login")
      
    }
  };

  const register = (user1, password1) => {
    const isRegisteredBefore = isUserRegistered(user1, password1);
    // Check if user is already registered
    if (isRegisteredBefore) {
        console.log('User already registered');
        
        alert("User already registered create another ")
        
      } else {

        //    sign in مايرحعشى يعمل تانى  sign upحطبت كله هنا عشان اما يعمل 
        setUser1(user1);
        setPassword1(password1);
        setUser(user1);
        setPassword(password1);
      }
  };

  const logout = () => {
    setUser(null);
    setPassword(null);

  };

  function isUserRegistered(user, password) {
    // Check if the user is registered with the provided username and password
    return user === user1 && password === password1;
  }

  return (
    <AuthContext.Provider value={{ user, password,user1, password1, register, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};