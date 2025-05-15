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
import ProductList  from "./components/brandsPage/BrandsPage";
import Details from "./components/details/Details";
import { ProductsDetails } from "./data/ProductsDetails";
import { useState } from "react";
import ResellerLogin from "./components/resellerLogin/ResellerLogin";
import DistributorLogin from "./components/distributorLogin/DistributorLogin";
import ResellerSignUp from "./components/resellerLogin/ResellerSignUp";
import DistributorSignUp from "./components/distributorLogin/DistributorSignUp";
import BrandsPage from "./components/brandsPage/BrandsPage";


function App() {
 
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/registration" element={<Login />} />
        <Route path="/productpage/:id" element={<ProductPage />} />
        <Route path="/computerpage/:id" element={<ComputerPage />} />
        <Route path="/create-product" element={<CreateProduct />} />
        <Route path="/brandsPage" element={<BrandsPage />} />
        <Route path="/:id/details" element={<Details />} />

        <Route path="/login/resellerlogin" element={<ResellerLogin />} />
        <Route path="/login/distributorlogin" element={<DistributorLogin />} />

        <Route path="/reselerSignUp" element={<ResellerSignUp />} />
        <Route path="/distributorSignUp" element={<DistributorSignUp />} />

        
      </Routes>

      <Footer />
    </>
  );
}

export default App;
