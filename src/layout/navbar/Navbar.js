import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaSearch, FaCartArrowDown, FaBars } from "react-icons/fa";
import { BiUserCircle } from "react-icons/bi";
import Popup from "../../components/popup/Popup";
import Cart from "../../components/cart/Cart";
import { ProductsDetails } from "../../data/ProductsDetails";
import Search from "../searchFilter/Search";

const Navbar = () => {
  const [openPopup, setOpenPopup] = useState(false);
  const [cartCount, setCartCount] = useState(0);
  const [inputValue, setInputValue] = useState("");


  const navigate = useNavigate();
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  useEffect(() => {
    const updatedCart = () => {
      const carts = JSON.parse(localStorage.getItem("cart")) || [];
      const totalProd = carts.reduce((total, item) => total + item.quantity, 0);
      setCartCount(totalProd);
    };

    updatedCart();
    window.addEventListener("cartUpdated", updatedCart);

    return () => {
      window.removeEventListener("cartUpdated", updatedCart);
    };
  }, []);

  useEffect(() => {
    setInputValue(""); // Reset search input on route change
  }, [location.pathname]);

  const filteredProduct = ProductsDetails.filter((product) =>
    product.name.toLowerCase().includes(inputValue.toLowerCase())
  );

  const handleSearchEnter = () => {
    if (filteredProduct.length > 0) {
      const selectedProduct = filteredProduct[0];
      if (!selectedProduct) return;

      const path =
        selectedProduct.type === "computer"
          ? `/computerpage/${selectedProduct.id}`
          : `/productpage/${selectedProduct.id}`;

      navigate(path);
      setInputValue("");
      window.scrollTo(0, 0);
    } else {
      console.log("შედეგი არ მოიძებნა");
    }
  };

  return (
    <>
      <nav
        className={`w-full bg-[#FBFBFB] shadow-sm ${
          isHomePage ? "fixed top-0 z-100" : ""
        }`}
      >
        <div className="max-w-full mx-auto flex flex-col md:flex-row justify-between items-center px-4 md:px-10 lg:px-24 py-4 gap-4 md:gap-6 h-auto md:h-[90px]">
          <div className="w-full flex justify-between items-center md:w-auto">
            <div className="font-semibold italic text-[28px] md:text-1xl lg:text-3xl cursor-pointer">
              <Link to="/">electric</Link>
            </div>
            <div className="md:hidden">
              <button
                onClick={() => setOpenPopup(true)}
                className="text-[22px] p-2 cursor-pointer"
              >
                <FaBars />
              </button>
            </div>
          </div>

         
          <div className="w-full md:w-[500px] lg:w-[700px] relative">
            <input
              type="text"
              placeholder="Search..."
              className="w-full outline-none border px-4 py-2 rounded-full text-sm md:text-base"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  handleSearchEnter();
                }
              }}
            />
            <div className="absolute right-3 top-1/2 transform -translate-y-1/2 bg-white rounded-full h-[30px] w-[30px] flex justify-center items-center cursor-pointer shadow">
              <FaSearch className="text-sm" />
            </div>

            
            {inputValue && (
              <div className="absolute top-full left-0 right-0 bg-white border border-gray-200 rounded-md mt-1 max-h-60 overflow-y-auto z-50">
                {filteredProduct.length > 0 ? (
                  filteredProduct.map((product) => (
                    <Search
                      key={product.id}
                      product={product}
                      onSelect={() => setInputValue("")}
                    />
                  ))
                ) : (
                  <p className="p-2 text-sm text-gray-500">No results found</p>
                )}
              </div>
            )}
          </div>

          <div className="flex gap-3 md:gap-4">
            <Link
              to="/cart"
              className="flex relative items-center gap-2 py-2 px-3 md:px-4 bg-white rounded-full md:rounded-[8px] cursor-pointer shadow"
            >
              <span className="font-semibold text-sm md:text-base">Cart</span>
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold px-2 py-0.5 rounded-full">
                {cartCount}
              </span>
              <FaCartArrowDown className="text-lg" />
            </Link>

            <Link
              to="/registration"
              className="flex items-center gap-2 py-1 px-4 md:w-[120px] md:flex md:justify-center bg-white rounded-full md:rounded-[8px] cursor-pointer shadow"
            >
              <span className="font-semibold text-sm md:text-base lg:text-base">
                Log in
              </span>
              <BiUserCircle className="text-lg" />
            </Link>
          </div>

          
          <div className="md:flex hidden">
            <button
              onClick={() => setOpenPopup(true)}
              className="text-[22px] p-2 cursor-pointer"
            >
              <FaBars />
            </button>
          </div>
        </div>
      </nav>

      <Popup popup={openPopup} onClose={() => setOpenPopup(false)} />
    </>
  );
};

export default Navbar;
