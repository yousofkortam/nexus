import React, { useState } from 'react';

function CategoryButtons({ categories, getProductInCategory, getProducts }) {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleCategoryClick = (cat) => {
    setSelectedCategory(cat);
    getProductInCategory(cat);
  };

  return (
    <div className="mt-2">
      <div className="btn-group" role="group" aria-label="Categories">
        <button
          className={`btn ${selectedCategory === null ? 'btn-dark' : 'btn-outline-dark'}`}
          onClick={() => {
            getProducts();
            setSelectedCategory(null);
          }}
        >
          All
        </button>
        {categories.map((cat) => (
          <button
            key={cat}
            className={`btn ${selectedCategory === cat ? 'btn-dark' : 'btn-outline-dark'}`}
            onClick={() => handleCategoryClick(cat)}
          >
            {cat}
          </button>
        ))}
      </div>
    </div>
  );
}

export default CategoryButtons;
