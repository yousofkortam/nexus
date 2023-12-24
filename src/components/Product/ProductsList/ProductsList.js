import ProductCard from "../ProductCard/ProductCard";
import '../../style.css';

function ProductsList(props) {

  const { products } = props;

  return (
    <>
      <div className="container-fluid">
        <div className="row row-cols-md-2 row-cols-lg-3 g-4 mt-4">
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