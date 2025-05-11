import React, { useRef } from 'react';
import { BestSellers } from './../../data/BestSellers';
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { Link } from 'react-router-dom';

import { BrandsPhoto } from '../../data/BrandsPhosto';

const Products = () => {
  const scrollRef = useRef(null)

  const scrollLeft = () => {
    scrollRef.current.scrollBy({ left: -300, behavior: 'smooth' })
  }

  const scrollRight = () => {
    scrollRef.current.scrollBy({ left: 300, behavior: 'smooth' })
  }

  return (
    <>
    <div className="w-full flex justify-center items-center flex-col">
      <div className="flex flex-col items-center py-6 sm:px-4 px-2 w-full gap-10">
        <div className="flex flex-col gap-4 w-full max-w-6xl items-start">
          <h1 className="text-[22px] font-semibold text-center ml-2">Best Sellers Phones</h1>

          <div className="relative w-full">
            <div
              ref={scrollRef}
              className="flex gap-4 px-2 py-4 overflow-x-hidden scroll-smooth scrollbar-hide"
            >
              {BestSellers.map((item, index) => (
                <Link to='/productpage'
                key={index}
                className="group relative min-w-[250px] bg-white text-black rounded-lg shadow py-4 px-4 overflow-hidden transition-all duration-300 ease-in-out"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-48 object-cover rounded mb-2"
                />
                <h2 className="text-lg font-bold">{item.name}</h2>
                <p className="text-sm font-semibold text-[#333333] w-[250px]">{item.description}</p>
                <p className="text-md font-semibold">{item.price} ₾</p>
            
                <div className="group-hover:bottom-2 bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-300 overflow-hidden absolute left-1/2 transorm -translate-x-1/2">
                  <div className="w-full cursor-pointer  bg-[#F28F6A] text-white px-4 py-2 rounded-[20px] transition-opacity duration-300">
                    Add To Cart
                  </div>
                </div>
              </Link>
              ))}
            </div>

            <button
              onClick={scrollLeft}
              className="absolute left-2 top-1/2 -translate-y-1/2 cursor-pointer bg-white p-[12px] rounded-full shadow hover:bg-gray-200"
            >
              <IoIosArrowBack />
            </button>

            <button
              onClick={scrollRight}
              className="absolute right-0 top-1/2 cursor-pointer -translate-y-1/2 bg-white p-[12px] rounded-full shadow hover:bg-gray-200"
            >
              <IoIosArrowForward />
            </button>
          </div>
        </div>

         
           {/* brands */ }

           <div className='w-full flex justify-center items-center'>
             <div className='flex gap-4 justify-center items-start flex-col'>

               <h1 className='text-[22px] font-semibold text-center'>Brands</h1>

               <div className='w-full flex gap-[18px]'>
                  {
                    BrandsPhoto.map((product,index) => (
                      <div key={index} className='group/brand block'>
                        <div className='flex h-[88px] w-[88px] cursor-pointer items-center justify-center rounded-full border-2 border-[#F2F3F6] bg-white'><img src={product.image} alt='brand' className='h-[40px] w-[60px] max-w-full object-contain transition-all group-hover/brand:scale-105'></img></div>
                        <span className='font-semibold text-md mt-2 block text-center'>{product.name}</span>
                      </div>
                    ))
                  }

               </div>

             </div>
           </div>

  


      </div>
    </div>

     
    </>
  );
};

export default Products;
