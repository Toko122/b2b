import React, { useState } from "react";
import { brandsProducts } from "../../data/brandsData";

const Popup = ({ popup, onClose }) => {
  const [activeProductIndex, setActiveProductIndex] = useState(null);
  const [activeBrandIndex, setActiveBrandIndex] = useState(null);

  if (!popup) return null;

  return (
    <div className="fixed inset-0 bg-[rgba(0,0,0,0.5)] flex justify-center items-center z-50">
      <div className="bg-white w-[1100px] h-[700px] rounded-lg p-8 overflow-auto relative">
        <button
          className="absolute right-10 text-2xl cursor-pointer hover:text-red-500 transition-all duration-300"
          onClick={onClose}
        >
          &times;
        </button>
        <div className="flex flex-col gap-6">
          {brandsProducts.map((product, productIndex) => (
            <div key={productIndex}>
              {/* Product name */}
              <div
                onClick={() =>
                  setActiveProductIndex(
                    productIndex === activeProductIndex ? null : productIndex
                  )
                }
                className="text-2xl cursor-pointer w-fit px-4 py-2 rounded-md flex flex-col gap-2 hover:text-[#B2B2B2] transition-all duration-300"
              >
                {product.name}
                <span className="bg-black w-full h-[1px]"></span>
              </div>

              {/* Brands list */}
              {activeProductIndex === productIndex && (
                <div className="ml-6 mt-2">
                  <div className="text-lg font-semibold mb-2">
                    {product.tag}
                  </div>
                  <div className="flex gap-4 flex-wrap">
                    {product.brands.map((brand, brandIndex) => (
                      <div
                        key={brandIndex}
                        className="px-3 py-1 bg-gray-100 rounded-md shadow-sm text-sm cursor-pointer hover:bg-gray-200"
                        onClick={() =>
                          setActiveBrandIndex(
                            brandIndex === activeBrandIndex ? null : brandIndex
                          )
                        }
                      >
                        {brand.brandName}
                      </div>
                    ))}
                  </div>

                  {/* Brand Products */}
                  {activeBrandIndex !== null && product.brandPorducts && (
                    <div className="mt-4 pl-2">
                      <div className="text-md font-medium mb-1">
                        {product.brands[activeBrandIndex].brandName} Products:
                      </div>
                      <ul className="list-disc pl-6 text-sm text-gray-700">
                        {product.brandPorducts
                          .filter((bp) =>
                            bp.brandProductName
                              .toLowerCase()
                              .includes(
                                product.brands[activeBrandIndex]?.brandName
                              )
                          )
                          .map((bp, i) => (
                            <li key={i}>{bp.brandProductName}</li>
                          ))}
                      </ul>
                    </div>
                  )}
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
