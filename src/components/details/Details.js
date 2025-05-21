import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { ProductsDetails } from './../../data/ProductsDetails';
import { CiCirclePlus } from "react-icons/ci";
import AddToCart from "../AddToCart";

const Details = () => {
  const { id } = useParams();
  const product = ProductsDetails.find((p) => p.id === Number(id));

  if (!product) {
    return (
      <div className="w-full min-h-screen flex justify-center items-center bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <div className="text-center p-8 bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl border border-gray-100/50">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mx-auto mb-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <h1 className="text-2xl font-bold text-gray-700 mb-4">პროდუქტი ვერ მოიძებნა</h1>
          <Link to="/" className="inline-block bg-gradient-to-r from-blue-500 to-blue-600 text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300">
            დაბრუნება მთავარ გვერდზე
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 py-12 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <Link 
          to="/" 
          className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-8 group transition-all duration-300"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 transform group-hover:-translate-x-1 transition-transform duration-300" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
          </svg>
          დაბრუნება
        </Link>

        <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl border border-gray-100/50 overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8">
            {/* Product Image */}
            <div className="flex justify-center items-center bg-gray-50/50 rounded-2xl p-8">
              <img
                src={product.image}
                alt={product.name}
                className="w-full max-w-md h-auto object-contain transform hover:scale-105 transition-transform duration-500"
              />
            </div>

            {/* Product Details */}
            <div className="flex flex-col gap-6">
              <div>
                <h1 className="text-3xl font-bold text-gray-800 mb-2">{product.name}</h1>
                <p className="text-xl font-bold bg-gradient-to-r from-blue-600 to-blue-700 bg-clip-text text-transparent mb-4">
                  {product.price} ₾
                </p>
                <p className="text-gray-600 leading-relaxed">{product.description}</p>
              </div>

              <div className="space-y-4">
                <h2 className="text-xl font-semibold text-gray-800 flex items-center gap-2">
                  <span className="w-1.5 h-6 bg-gradient-to-b from-blue-500 to-blue-600 rounded-full"></span>
                  მახასიათებლები
                </h2>
                <ul className="space-y-3">
                  {product.features.map((feature, index) => (
                    <li key={index} className="flex items-center gap-2 text-gray-600">
                      <svg className="h-5 w-5 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {product.colors && (
                <div className="space-y-4">
                  <h2 className="text-xl font-semibold text-gray-800 flex items-center gap-2">
                    <span className="w-1.5 h-6 bg-gradient-to-b from-blue-500 to-blue-600 rounded-full"></span>
                    ფერები
                  </h2>
                  <div className="flex flex-wrap gap-2">
                    {product.colors.map((color, index) => (
                      <span
                        key={index}
                        className="px-4 py-2 bg-gray-50 text-gray-700 rounded-xl text-sm font-medium"
                      >
                        {color}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              <div className="flex gap-4 mt-4">
                <button
                  onClick={() => AddToCart(product)}
                  className="flex-1 cursor-pointer flex items-center justify-center gap-2 bg-gradient-to-r from-blue-500 to-blue-600 text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300"
                >
                  <CiCirclePlus className="text-2xl" />
                  კალათაში დამატება
                </button>
                <button
                  className="flex-1 cursor-pointer bg-gray-50 text-gray-700 px-6 py-3 rounded-xl font-semibold hover:bg-gray-100 hover:scale-105 transition-all duration-300"
                >
                  შეძენა
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
