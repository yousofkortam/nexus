import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import ProductDetails from './components/ProductDetails';
import Products_List from './components/Products_List';
import About from './pages/about';
import Contact from './pages/contact';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/product/:productId" element={<ProductDetails />} />
          <Route path="/" element={<Products_List />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App
