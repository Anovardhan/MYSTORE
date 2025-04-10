import Productdata from "./Data";
import { Link } from "react-router-dom";

const Products = ({ category, searchTerm, addcart }) => {
  const filterproduct = Productdata.filter(
    (product) =>
      product.category === category &&
      (product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.category.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <>
      <div className="container mt-2 d-flex gap-4">
        <div className="row gap-4">
          {filterproduct.map((product) => (
            <Link
              to={`/product/${product.id}`}
              key={product.id}
              style={{ textDecoration: "none", color: "inherit" }}
              className="col"
            >
              <div
                key={product.id}
                className="card col-sm-6 bg-light"
                style={{ width: "250px" }}
              >
                <div className="card-img-top text-center">
                  <img
                    src={product.image}
                    alt="no-img"
                    width={100}
                    height={200}
                  />
                </div>
                <div className="card-body">
                  <strong>{product.name}</strong>
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
                  <div className="d-flex">
                    <h1>
                      <strong>₹{product.price}</strong>
                    </h1>
                    <p style={{ marginTop: "10px" }}>M.R.P</p>
                  </div>
                  <Link to="/cart">
                    {" "}
                    <button
                      style={{ backgroundColor: "yellow" }}
                      className="btn"
                      onClick={() => addcart(product)}
                    >
                      Add to cart
                    </button>
                  </Link>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default Products;
