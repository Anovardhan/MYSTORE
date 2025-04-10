import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Products from "./Components/Products";
import Navbar from "./Components/Navbar";
import ProductList from "./Components/ProductList";
import Addtocart from "./Components/Addtocart";
import { useState } from "react";

export default function App() {
  const [searchTerm, setsearchTerm] = useState("");
  const [cart, setcart] = useState([]);

  const addcart = (product) => {
    setcart([...cart, product]);
  };
  const remove = (index) => {
    setcart((pre) => pre.filter((_, i) => i !== index));
  };

  return (
    <BrowserRouter>
      <Navbar searchTerm={searchTerm} setsearchTerm={setsearchTerm} />

      <Routes>
        <Route
          path="/"
          element={
            <>
              <Products
                category="Dresses"
                searchTerm={searchTerm}
                addcart={addcart}
              />
              <Products
                category="Mobiles"
                searchTerm={searchTerm}
                addcart={addcart}
              />
              <Products
                category="Laptops"
                searchTerm={searchTerm}
                addcart={addcart}
              />
              <Products
                category="Watches"
                searchTerm={searchTerm}
                addcart={addcart}
              />
            </>
          }
        />

        <Route
          path="/product/:id"
          element={<ProductList addcart={addcart} />}
        />
        <Route
          path="/cart"
          element={<Addtocart cart={cart} remove={remove} />}
        />
      </Routes>
    </BrowserRouter>
  );
}
