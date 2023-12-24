import React from 'react';
import { useEffect, useState } from "react";
import ProductList from '../components/Product/ProductsList/ProductsList';
import SearchBox from "../components/SearchBox/SearchBox";
import CategoryButtons from "../components/CategoryButtons/CategoryButtons";
import {
    fetchProducts,
    fetchCategories,
    fetchProductsInCategory,
    filterProductsByTitle,
} from "../utility/ProductService";

function Home() {
    const api_url = "https://fakestoreapi.com/products";
    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState([]);
    const [searchQuery] = useState("");

    useEffect(() => {
        fetchProducts(api_url, setProducts);
        fetchCategories(api_url, setCategories);
    }, []);

    const getProductInCategory = (catname) => {
        fetchProductsInCategory(api_url, catname, setProducts);
    };

    const searchProducts = () => {
        filterProductsByTitle(api_url, searchQuery, setProducts);
    };

    return (
        <>
            {/* <Banner /> */}
            <SearchBox handleSearch={searchProducts} />
            <CategoryButtons
                categories={categories}
                getProductInCategory={getProductInCategory}
                getProducts={() => fetchProducts(api_url, setProducts)}
            />
            <ProductList products={products} />
        </>
    );
}

export default Home;