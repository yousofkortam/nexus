import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Product from "./Product";
import './style.module.css';
function ProductDetails(){
    const api_url="https://fakestoreapi.com/products";
    const [product,setProduct]=useState({})
   
    const params= useParams();
    console.log(params);
    useEffect(()=>{
        fetch(`${api_url}/${params.productId}`)
        .then((res)=>res.json())
        .then((product)=>setProduct(product))
    },[]);
    return(
        
        <div className="col-8 m-3 "product={product} >
        {/* <Product   /> */}
        
      <div className="image-container">
        <img src={product.image} className="card-img-top" alt={product.title} />
      </div>
      <div className="card-body">
        <h5 className="card-title">{product.title}</h5>
        <p className="card-text">
          {product.description}
        </p>
        <p className="card-text">{product.price} $</p>
       
      </div>
      <div className="card-footer">
        <a href="#" className="card-link">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="red"
            className="bi bi-heart-fill"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314"
            />
          </svg>
        </a>
        <a href="#" className="card-link">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="20"
            fill="blue"
            className="bi bi-cart-plus-fill"
            viewBox="0 0 16 16"
          >
            <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0m7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0M9 5.5V7h1.5a.5.5 0 0 1 0 1H9v1.5a.5.5 0 0 1-1 0V8H6.5a.5.5 0 0 1 0-1H8V5.5a.5.5 0 0 1 1 0"/>
          </svg>
        </a>
      </div>
    </div>
        
       
        )
}
export default ProductDetails;