import { Route, Routes } from 'react-router-dom';
import './App.css';
import ProductDetails from './components/Product/ProductDetails/ProductDetails';
import ProductsList from './components/Product/ProductsList/ProductsList';
import About from './pages/about';
import Contact from './pages/contact';
import Navbar from './components/Navbar/Navbar';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import Profile from './components/Profile/Profile';

function App() {
  return (
    <div className="App">
      <Navbar />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/product/:productId" element={<ProductDetails />} />
          <Route path="/" element={<ProductsList />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
    </div>
  );
}

export default App;