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
              to="/cart"
              className="flex items-center gap-2 py-2 px-3 md:px-4 bg-white rounded-full md:rounded-[8px] cursor-pointer shadow"
            >
              <span className="font-semibold text-sm md:text-base">Cart</span>
              <FaCartArrowDown className="text-lg" />
            </Link>

            <Link
              to="/registration"
              className="flex items-center gap-2 py-1 px-4 md:w-[120px] md:flex md:justify-center bg-white rounded-full md:rounded-[8px] cursor-pointer shadow"
            >
              <span className="font-semibold text-sm md:text-base lg:text-base">Log in</span>
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

            <div className="flex justify-center items-center">
            <div className="flex justify-center items-center py-2 px-4 bg-[#EEEEEE] rounded-[20px] font-semibold cursor-pointer hover:bg-[#ccc] transition-all duration-300">
              Create Product
            </div>
          </div>

        </div>
      </nav>

      <Popup popup={openPopup} onClose={() => setOpenPopup(false)} />
    </>
  );
};

export default Navbar;
