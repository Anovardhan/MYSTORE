const Addtocart = ({ cart, remove }) => {
  return (
    <div className="container mt-4">
      <h1>MY CART</h1>
      {cart.length === 0 ? (
        <p>EMPTY ITEMS </p>
      ) : (
        cart.map((item, index) => (
          <div
            className="container d-flex  align-items-center  bg-light mt-4"
            style={{ border: "1px solid black" }}
            key={index}
          >
            <img src={item.image} width={70} />
            <p className="mt-4">{item.name},</p>
            <p className="ms-3 mt-4">{item.description}</p>
            <strong>
              <h1 className="ms-5">₹{item.price}</h1>
            </strong>
            <button onClick={() => remove(index)}>remove</button>
          </div>
        ))
      )}
    </div>
  );
};
export default Addtocart;
