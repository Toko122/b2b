import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaSearch, FaCartArrowDown, FaBars } from "react-icons/fa";
import { BiUserCircle } from "react-icons/bi";
import Popup from "../../components/popup/Popup";

const Navbar = () => {
  const [openPopup, setOpenPopup] = useState(false);

  return (
    <>
      <nav className="w-full bg-[#FBFBFB] shadow-sm">
        <div className="max-w-full mx-auto flex flex-col md:flex-row justify-between items-center px-4 md:px-10 lg:px-24 py-4 gap-4 md:gap-0 h-auto md:h-[90px]">

          
          <div className="w-full flex justify-between items-center md:w-auto">
            <div className="font-semibold italic text-[28px] md:text-2xl lg:text-3xl cursor-pointer">
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


          <div className="w-full md:w-[700px] relative">
            <input
              type="text"
              placeholder="Search..."
              className="w-full outline-none border px-4 py-2 rounded-full"
            />
            <div className="absolute right-3 top-1/2 transform -translate-y-1/2 bg-white rounded-full h-[30px] w-[30px] flex justify-center items-center cursor-pointer shadow">
              <FaSearch className="text-sm" />
            </div>
          </div>

          
          <div className="flex gap-4">
            <Link
              to="/cart"
              className="flex items-center gap-2 py-2 px-4 bg-white rounded-full cursor-pointer shadow"
            >
              <span className="font-semibold text-base md:text-lg">Cart</span>
              <FaCartArrowDown className="text-lg" />
            </Link>

            <Link
              to="/registration"
              className="flex items-center gap-2 py-2 px-4 bg-white rounded-full cursor-pointer shadow"
            >
              <span className="font-semibold text-base md:text-lg">Log in</span>
              <BiUserCircle className="text-lg" />
            </Link>
          </div>

          
        </div>
      </nav>

      
      <Popup popup={openPopup} onClose={() => setOpenPopup(false)} />
    </>
  );
};

export default Navbar