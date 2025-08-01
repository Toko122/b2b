import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaSearch, FaCartArrowDown, FaBars } from "react-icons/fa";
import { BiUserCircle } from "react-icons/bi";
import Popup from "../../components/popup/Popup";
import { getCartItems } from "../../components/Api";

const Navbar = () => {
  const [openPopup, setOpenPopup] = useState(false);
  const [cartCount, setCartCount] = useState(0);

  const location = useLocation();
  const isHomePage = location.pathname === "/";

   const token = localStorage.getItem('token')

  useEffect(() => {
    const fetchCartCount = async () => {
      try {
        const response = await getCartItems();
        const totalItems = response.data.reduce((total, item) => total + item.quantity, 0);
        setCartCount(totalItems);
      } catch (error) {
        console.error('Error fetching cart count:', error);
      }
    };

    fetchCartCount();
    window.addEventListener("cartUpdated", fetchCartCount);

    return () => {
      window.removeEventListener("cartUpdated", fetchCartCount);
    };
  }, []);

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
             
            />
            <div className="absolute right-3 top-1/2 transform -translate-y-1/2 bg-white rounded-full h-[30px] w-[30px] flex justify-center items-center cursor-pointer shadow">
              <FaSearch className="text-sm" />
            </div>

            
          </div>

          <div className="flex gap-3 md:gap-4">
            <Link
              to="/cart/"
              className="flex relative items-center gap-2 py-2 px-3 md:px-4 bg-white rounded-full md:rounded-[8px] cursor-pointer shadow"
            >
              <span className="font-semibold text-sm md:text-base">Cart</span>
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold px-2 py-0.5 rounded-full">
                {cartCount}
              </span>
              <FaCartArrowDown className="text-lg" />
            </Link>

            {
              token ? (
                <Link
              to="/customer/profile"
              className="flex items-center gap-2 py-1 px-4 md:w-[120px] md:flex md:justify-center bg-white rounded-full md:rounded-[8px] cursor-pointer shadow"
            >
              <span className="font-semibold text-sm md:text-base lg:text-base">
                Log out
              </span>
              <BiUserCircle className="text-lg" />
            </Link>
              ) : (
                <Link
              to="/customer/login/"
              className="flex items-center gap-2 py-1 px-4 md:w-[120px] md:flex md:justify-center bg-white rounded-full md:rounded-[8px] cursor-pointer shadow"
            >
              <span className="font-semibold text-sm md:text-base lg:text-base">
                Log in
              </span>
              <BiUserCircle className="text-lg" />
            </Link>
              )
            }
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
