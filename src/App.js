import { Route, Routes } from 'react-router-dom';
import './App.css';
import ProductDetails from './components/Product/ProductDetails/ProductDetails';
import About from './pages/About';
import Contact from './pages/Contact';
import Navbar from './components/Navbar/Navbar';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import Profile from './components/Profile/Profile';
import Home from './pages/Home';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <>
    <div className="App">
      <Navbar />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/product/:productId" element={<ProductDetails />} />
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
    </div>
    <Footer />
    </>
  );
}

export default App;