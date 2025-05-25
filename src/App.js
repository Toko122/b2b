import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/home/Home";
import { Products } from "./pages/products/Products";

import ProductPage from "./components/productPage/ProductPage";

import Navbar from "./layout/navbar/Navbar";
import Footer from "./layout/footer/Footer";

import Cart from "./components/cart/Cart";
import Login from "./components/login/Login";
import CreateProduct from "./components/createProduct/CreateProduct";
import ComputerPage from "./components/computerPage/ComputerPage";
import Details from "./components/details/Details";

import BrandsPage from "./components/brandsPage/BrandsPage";


function App() {
 
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
        <Route path="/productpage/:id" element={<ProductPage />} />
        <Route path="/computerpage/:id" element={<ComputerPage />} />
        <Route path="/create-product" element={<CreateProduct />} />
        <Route path="/brand/:brandName" element={<BrandsPage />} />
        <Route path="/:id/details" element={<Details />} />

        
      </Routes>

      <Footer />
    </>
  );
}

export default App;
