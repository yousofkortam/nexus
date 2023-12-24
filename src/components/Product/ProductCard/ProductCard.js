import React from 'react';
import { Link } from 'react-router-dom';
import '../../style.css';

function ProductCard(props) {
  const { product, showButton } = props;
  const maxLength = 40;

  const truncateDescription = (description, maxLength) => {
    if (description.length <= maxLength) {
      return description;
    }
    return description.substring(0, maxLength) + '...';
  };

  return (
    <div className="card h-100">
      <div className="image-container">
        <img
          src={product.image}
          className="card-img-top img-fluid rounded"
          alt={product.title}
          style={{ height: '200px', width: '170px' }}
        />
      </div>
      <div className="card-body">
        <h5 className="card-title">{product.title}</h5>
        <p className="card-text">{truncateDescription(product.description, maxLength)}</p>
        <p className="card-text">${product.price}</p>
        {showButton && (
          <Link className="btn btn-success" to={`/product/${product.id}`}>
            Details
          </Link>
        )}
      </div>
      <div className="card-footer d-flex justify-content-between align-items-center">
        {/* Add additional elements as needed */}
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
  );
}

export default ProductCard;
