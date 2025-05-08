import React, { useState } from "react";
import { Link } from "react-router-dom";

import { FaSearch } from "react-icons/fa";
import { BiUserCircle } from "react-icons/bi";
import { FaCartArrowDown } from "react-icons/fa";
import { MdKeyboardArrowDown } from "react-icons/md";
import Popup from "../../components/popup/Popup";

const Navbar = () => {
  const [openPopup, setOpenPopup] = useState(false);

  return (
    <>
      <nav className="w-full h-[90px] bg-[#FBFBFB]">
        <div className="w-full h-full flex justify-between items-center px-24 ">
          <div className="font-semibold italic text-3xl cursor-pointer flex justify-center items-center gap-14">
            <Link to="/">electric</Link>
          </div>

          <div className="">
            <div
              className="cursor-pointer flex justify-center items-center gap-2"
              onClick={() => setOpenPopup(true)}
            >
              <div className="text-[20px] font-semibold">All Categories</div>
              <div className="">
                <MdKeyboardArrowDown className="text-[20px]" />
              </div>
            </div>
          </div>

          <div className="flex justify-center items-center relative w-[500px]">
            <input
              type="text"
              placeholder="Search..."
              className="w-full outline-none border-1 px-4 py-[10px] rounded-[24px]"
            ></input>
            <div className="absolute right-[15px]">
              <div className=" bg-white rounded-full h-[30px] w-[30px] flex justify-center items-center cursor-pointer">
                <FaSearch className="text-[15px]" />
              </div>
            </div>
          </div>

          <div className="flex justify-center items-center gap-6">
            <Link
              to="/cart"
              className="flex justify-center items-center gap-2 py-[7px] px-4 bg-white rounded-[50px] cursor-pointer"
            >
              <Link to="/cart" className="font-semibold text-[20px]">
                Cart
              </Link>
              <div className="text-[20px]">
                <FaCartArrowDown />
              </div>
            </Link>

            <Link
              to="/registration"
              className="flex justify-center items-center gap-2 py-[7px] px-4 bg-white rounded-[50px] cursor-pointer"
            >
              <Link to="/registration" className="font-semibold text-[20px]">
                Log in
              </Link>
              <div className="text-[20px]">
                <BiUserCircle />
              </div>
            </Link>
          </div>
        </div>
      </nav>

      <Popup popup={openPopup} onClose={() => setOpenPopup(false)} />
    </>
  );
};

export default Navbar;
