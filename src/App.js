import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/home/Home";
import { Products } from "./pages/products/Products";

import Navbar from "./layout/navbar/Navbar";

import Cart from "./components/cart/Cart";
import Login from "./components/login/Login";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/registration" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
