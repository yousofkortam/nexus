import ProductCard from "../ProductCard/ProductCard";
import '../../style.css';

function ProductsList(props) {

  const { products } = props;

  console.log(products[0]);

  return (
    <>
      <div className="container-fluid">
        <div className="row row-cols-md-2 row-cols-lg-3 g-4 mt-4">
          {products.map((product) => (
            <div key={product.id} className="col">
              <ProductCard id={product.id} name={product.title} price={product.price} imgUrl={product.image} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default ProductsList;