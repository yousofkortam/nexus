
export const fetchProducts = (url, setProducts) => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  };
  
  export const fetchCategories = (url, setCategories) => {
    fetch(`${url}/categories`)
      .then((res) => res.json())
      .then((data) => setCategories(data));
  };
  
  export const fetchProductsInCategory = (url, catname, setProducts) => {
    fetch(`${url}/category/${catname}`)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  };
  
  export const filterProductsByTitle = (url, searchQuery, setProducts) => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        const filteredProducts = data.filter((product) =>
          product.title.toLowerCase().includes(searchQuery.toLowerCase())
        );
        setProducts(filteredProducts);
      });
  };
  