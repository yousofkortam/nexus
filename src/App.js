import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import ProductDetails from './components/ProductDetails';
import Products_List from './components/Products_List';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/product/:productId" element={<ProductDetails />} />
          <Route path="/" element={<Products_List />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App