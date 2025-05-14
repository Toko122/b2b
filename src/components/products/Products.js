import React, { useRef } from 'react';
import { BestSellers } from './../../data/BestSellers';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { useLocation, useNavigate } from 'react-router-dom';
import Brands from '../brands/Brands';
import ComputerProd from '../computerProd/ComputerProd';
import AddToCart from '../AddToCart';
import { CiCirclePlus } from "react-icons/ci";


const Products = () => {
  const scrollRef = useRef(null);
  const navigate = useNavigate();

  const scrollLeft = () => {
    scrollRef.current.scrollBy({ left: -300, behavior: 'smooth' });
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({ left: 300, behavior: 'smooth' });
  };

  const location = useLocation()
  const isHomePage = location.pathname === '/'

  return (
    <div className="w-full flex justify-center items-center flex-col">
      <div className={`flex flex-col items-center ${isHomePage ? "py-30" : "py-6"} pt-52 sm:px-4 px-2 w-full gap-16 relative overflow-x-hidden`}>
        <div className="flex flex-col gap-4 w-full max-w-6xl items-start">
          <h1 className="text-[22px] font-semibold text-center ml-2">Best Sellers Phones</h1>

          <button
            onClick={() => navigate('/create-product')}
            className="flex items-center absolute lg:right-64 md:right-20 right-0 justify-center py-2 px-4 bg-[#EEE] rounded-full md:rounded-[8px] cursor-pointer shadow text-sm md:text-base font-semibold md:text-[14px] lg:w-[150px] hover:bg-[#ccc] transition-all duration-300"
          >
            Create Product
          </button>

          <div className="relative w-full">
            <div
              ref={scrollRef}
              className="flex gap-4 px-2 py-4 overflow-x-auto scroll-smooth scrollbar-hide sm:overflow-x-hidden"
            >
              {BestSellers.map((item, index) => (
                <div
                  key={index}
                  className="group snap-start relative bg-white text-black rounded-xl shadow-md w-[85vw] sm:w-[250px] shrink-0 transition-all duration-300 ease-in-out"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-[180px] sm:h-[200px] select-none object-contain rounded-t-xl"
                    onClick={() => navigate(`/productpage/${item.id}`)}
                  />
                  <div className="p-4 flex flex-col gap-1">
                    <h2 className="text-base sm:text-lg font-semibold truncate">{item.name}</h2>
                    <p className="text-sm sm:text-sm text-gray-600 line-clamp-2">{item.description}</p>
                    <div className='flex justify-between'>
                    <p className="text-[15px] sm:text-md font-semibold mt-1">{item.price} ₾</p>
                    <div onClick={()=> navigate(`/${item.id}/details`)} className='hover:bg-blue-600 transition-all duration-300 bg-blue-500 cursor-pointer text-white py-[4px] px-4 rounded-[20px]'>Details</div>
                    </div>
                    <div className="mt-3 sm:group-hover:bottom-2 sm:bottom-0 bottom-0 opacity-100 sm:opacity-0 group-hover:opacity-100 transition-all duration-300 overflow-hidden absolute left-1/2 transform -translate-x-1/2">
                      <div
                        onClick={() => AddToCart(item)}
                        className="text-black text-5xl rounded-full cursor-pointer"
                      >
                        <CiCirclePlus/>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <button
              onClick={scrollLeft}
              className="hidden sm:flex absolute left-2 top-1/2 -translate-y-1/2 cursor-pointer bg-white p-3 rounded-full shadow hover:bg-gray-200"
            >
              <IoIosArrowBack />
            </button>
            <button
              onClick={scrollRight}
              className="hidden sm:flex absolute right-0 top-1/2 -translate-y-1/2 cursor-pointer bg-white p-3 rounded-full shadow hover:bg-gray-200"
            >
              <IoIosArrowForward />
            </button>
          </div>
        </div>

        <Brands />
        <ComputerProd />
      </div>
    </div>
  );
};

export default Products;
