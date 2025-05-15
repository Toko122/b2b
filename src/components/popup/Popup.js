import React, { useState } from "react";
import { brandsProducts } from "../../data/brandsData";
import { useNavigate } from "react-router-dom";


const Popup = ({ popup, onClose }) => {
  const [activeProductIndex, setActiveProductIndex] = useState(null);
  const [activeBrandIndex, setActiveBrandIndex] = useState(null);
  const navigate = useNavigate()

  if (!popup) return null;



  return (
    <div className="fixed inset-0 bg-[rgba(0,0,0,0.5)] flex justify-center items-center z-150">
      <div className="bg-white w-[1100px] h-[700px] rounded-lg sm:p-8 px-2 py-4 overflow-auto relative">
        <button
          className="absolute right-6 sm:right-10 text-2xl cursor-pointer hover:text-red-500 transition-all duration-300"
          onClick={onClose}
        >
          &times;
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
                className="sm:text-2xl text-1xl font-semibold cursor-pointer w-fit px-4 py-2 rounded-md flex flex-col gap-2 hover:text-[#B2B2B2] transition-all duration-300"
              >
                {product.name}
                <span className="bg-black w-full h-[1px]"></span>
              </div>

              
              {activeProductIndex === productIndex && (
                <div className="ml-4 mt-2">
                  
                  <div className="flex gap-4 flex-wrap flex-col w-fit text-center">
                    {product.brands.map((brand, brandIndex) => (
                      <div
                        key={brandIndex}
                        className="px-3 py-1 bg-gray-100 rounded-md shadow-sm text-sm cursor-pointer hover:bg-gray-200"
                        onClick={() => {
                          
                          setActiveBrandIndex(brandIndex === activeBrandIndex ? null : brandIndex);
                          navigate(`/brandsPage/${brand.brandName.toLowerCase()}`);
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
