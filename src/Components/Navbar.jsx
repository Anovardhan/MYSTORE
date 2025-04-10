import { Link, useNavigate } from "react-router-dom";

const Navbar = ({ searchTerm, setsearchTerm }) => {
  const navigate = useNavigate();

  const handlesubmit = (e) => {
    e.preventDefault();

    navigate("/");
  };
  return (
    <div className="navbar   navbar-expand -ms navbar-dark  bg-dark px-4">
      <Link className="navbar-brand" to="/">
        MYSTORE
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse id = 'navbarNav">
        <form className="d-flex ms-auto " onSubmit={handlesubmit}>
          <input
            className="form-control"
            type="search"
            placeholder="search for products....."
            value={searchTerm}
            onChange={(e) => setsearchTerm(e.target.value)}
          />

          <button className="btn btn-outline-success" type="submit">
            Search
          </button>
        </form>
        <ul className="navbar-nav ms-3">
          <li className="nav-item">
            <Link to="/cart" className="nav-link">
              {" "}
              🛒 Cart
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Navbar;
