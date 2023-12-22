import { Route, Routes } from 'react-router-dom';
import './App.css';
import ProductDetails from './components/ProductDetails';
import ProductsList from './components/ProductsList';
import About from './pages/about';
import Contact from './pages/contact';
import {NavigationBar} from './components/NavigationBar';
import Login from './components/Login';
import Register from './components/Register';
import {Profile} from './components/Profile';

function App() {
  return (
    <div className="App">
      <NavigationBar />
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

export default App
