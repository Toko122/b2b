import React, { useState } from "react";
import { brandsProducts } from "../../data/brandsData";
import { useLocation, useNavigate } from "react-router-dom";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";


const Popup = ({ popup, onClose }) => {
  const [activeProductIndex, setActiveProductIndex] = useState(null);
  const [activeBrandIndex, setActiveBrandIndex] = useState(null);
  const navigate = useNavigate()

  if (!popup) return null;


  return (
    <div className="fixed inset-0 bg-[rgba(0,0,0,0.5)] flex justify-start items-center z-150 w-full">
      <div className="bg-white w-[600px] h-full rounded-lg sm:p-8 px-2 py-4 overflow-auto relative flex flex-col gap-6">
        <button 
          className="text-2xl text-start gap-6 w-full bg-blue-300 py-4 px-2 rounded-lg cursor-pointer"
          onClick={onClose}
        >
          <span className="flex items-center gap-2 hover:text-[#f2f2f2] w-fit transition duration-300">
          <span className="mt-1"><MdKeyboardArrowLeft /></span>
          <span className="flex items-start text-start font-semibold text-md">Go Back</span>
          </span>
        </button>
        <div className="flex flex-col gap-4 sm:gap-6">
          {brandsProducts.map((product, productIndex) => (
            <div key={productIndex} className="">
              
              <div
                onClick={() =>
                  setActiveProductIndex(
                    productIndex === activeProductIndex ? null : productIndex
                  )
                }
                className="sm:text-2xl w-full text-1xl font-semibold cursor-pointer w-fit px-2 py-2 rounded-md flex flex-col gap-4 hover:text-[#B5B5B5] transition-all duration-300"
              >
                
                <div className="flex justify-between items-center">
                {product.name}
                <span className="text-black"><MdKeyboardArrowRight/></span>
                </div>

              <span className="bg-[#ccc] w-full h-[1px]"></span>
              </div>

              
              {activeProductIndex === productIndex && (
                <div className="ml-4 mt-2">
                  
                  <div className="flex gap-4 flex-wrap w-fit text-center">
                    {product.brands.map((brand, brandIndex) => (
                      <div
                        key={brandIndex}
                        className="px-3 py-1 bg-gray-100 rounded-md shadow-sm text-sm cursor-pointer hover:bg-gray-200"
                        onClick={() => {
                          setActiveBrandIndex(brandIndex === activeBrandIndex ? null : brandIndex);
                          navigate(`/brand/${brand.brandName.toLowerCase()}`);
                          onClose();
                        }}
                      >
                       
                        {brand.brandName}
                      </div>
                    ))}
                  </div>

                 
                 
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Popup;
