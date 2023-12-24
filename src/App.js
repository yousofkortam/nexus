import { Route, Routes } from 'react-router-dom';
import './App.css';
import ProductDetails from './components/Product/ProductDetails/ProductDetails';
import About from './pages/About';
import Contact from './pages/Contact';
import Navbar from './components/Navbar/Navbar';

import Home from './pages/Home';
import Footer from './components/Footer/Footer';
import { AuthProvider } from "./components/Auth";


import { Profile } from "./components/Profile";
import Login from "./components/Login";
import Register from"./components/Register";
import "./App.css";
import RequireAuth from "./components/RequireAuth";

function App() {
  return (
    <AuthProvider>
    <div className="App">
      <Navbar />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/product/:productId" element={<ProductDetails />} />
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/profile" element={
          <RequireAuth>
            <Profile />
          </RequireAuth>
        
          } 
        />
        </Routes>
    </div>
    <Footer />
    </AuthProvider>
  );
}

export default App;