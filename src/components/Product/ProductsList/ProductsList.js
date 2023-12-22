import { useEffect, useState } from "react";
import ProductCard from "../ProductCard/ProductCard";
import '../../style.css';

function ProductsList() {
  const api_url = "https://fakestoreapi.com/products";
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  const getProducts = () => {
    fetch(api_url)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  };

  const getCategories = () => {
    fetch(`${api_url}/categories`)
      .then((res) => res.json())
      .then((data) => setCategories(data));
  };

  const getProductInCategory = (catname) => {
    fetch(`${api_url}/category/${catname}`)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  };

  const searchProducts = () => {
    fetch(`${api_url}`)
      .then((res) => res.json())
      .then((data) => {
        const filteredProducts = data.filter((product) =>
          product.title.toLowerCase().includes(searchQuery.toLowerCase())
        );
        setProducts(filteredProducts);
      });
  };

  useEffect(() => {
    getProducts();
    getCategories();
  }, []);

  return (
    <>
      <h1 className="text-center p-3">Our Products</h1>
      <div className="container-fluid"> 
        <div className="row">
          <div className="col-12 mb-3"> 
            <input
              type="text" 
              placeholder="Search products"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="form-control"
            />
            <button className="btn mt-3" onClick={searchProducts}>
              Search
            </button>
          </div>
        </div>
        <div className="mt-2"> 
          
          {categories.map((cat) => (
            <button
              key={cat}
              className="btn mt-2 me-2"
              onClick={() => getProductInCategory(cat)}
            >
              {cat}
            </button>
          ))}
          <button className="btn mt-1 me-2" onClick={getProducts}>
            All
          </button>
        </div>
        <div className="row  row-cols-md-2 row-cols-lg-3 g-4 mt-4"> 
          {products.map((product) => (
            <div key={product.id} className="col">
              <ProductCard product={product} showButton={true} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default ProductsList;