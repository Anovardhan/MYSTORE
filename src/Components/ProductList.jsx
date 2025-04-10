import { useParams } from "react-router-dom";
import Productdata from "./Data";
const ProductList = () => {
  const { id } = useParams();
  const product = Productdata.find((p) => p.id === parseInt(id));
  return (
    <div className="container d-flex mt-2">
      <div className="image">
        <img src={product.image} />
      </div>
      <div className="productdetails ms-4 mt-2">
        <h1>{product.name}</h1>
        <p>{product.description}</p>
        <p>Rating: {product.rating}⭐</p>
        {product.limited && (
          <div
            className="text-center bg-danger rounded"
            style={{ width: "150px", color: "white" }}
          >
            <h4>Limited</h4>
          </div>
        )}
        <div>
          {" "}
          <h1>
            <strong>₹{product.price}</strong>
          </h1>
        </div>
        <button style={{ backgroundColor: "yellow" }} className="btn">
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default ProductList;
