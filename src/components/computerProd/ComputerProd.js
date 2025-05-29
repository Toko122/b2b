import React, { useRef } from 'react';
import { ComputerData } from './../../data/ComputerData';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { useNavigate } from 'react-router-dom';
import AddToCart from '../AddToCart';
import { CiCirclePlus } from "react-icons/ci";

const ComputerProd = () => {

  const navigate = useNavigate();


  return (
    <div className="w-full flex justify-center items-center flex-col">
      <div className="flex flex-col items-center py-6 sm:px-4 px-2 w-full gap-16 relative overflow-x-hidden w-full">
        <div className="flex flex-col gap-4 items-start w-full ">
          <h1 className="text-[22px] font-semibold text-center ml-2 sm:ml-20">Monitors</h1>

          <div className="relative w-full">
            <div
              
              className="flex gap-4 px-2 py-4 flex-wrap w-full justify-center md:justify-start"
            >
              {ComputerData.map((item, index) => (
                <div
                  key={index}
                  className="group snap-start relative bg-white text-black rounded-xl shadow-md w-[85vw] sm:w-[290px] py-6 shrink-0 transition-all duration-300 ease-in-out"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-[180px] sm:h-[200px] object-contain rounded-t-xl"
                    onClick={() => {navigate(`/computerpage/${item.id}`); window.scrollTo(0,0)}}
                  />
                  <div className="p-4 flex flex-col gap-3">
                    <h2 className="text-base sm:text-lg font-semibold truncate">{item.name}</h2>
                    <p className="text-sm sm:text-sm text-gray-600 line-clamp-2">{item.description}</p>
                    <div className='flex justify-between'>
                    <p className="text-[15px] sm:text-md font-semibold mt-1">{item.price} ₾</p>
                    <div onClick={()=>{ navigate(`/${item.id}/details`); window.scrollTo(0,0)}} className='hover:bg-blue-600 transition-all duration-300 bg-blue-500 cursor-pointer text-white py-[4px] px-4 rounded-[20px]'>Details</div>
                    </div>

                    <div className="mt-3 sm:group-hover:bottom-2 sm:bottom-0 bottom-2 opacity-100 sm:opacity-0 group-hover:opacity-100 transition-all duration-300 overflow-hidden absolute left-1/2 transform -translate-x-1/2">
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


          </div>
        </div>

        
      </div>
    </div>
  );
};

export default ComputerProd;
