import React from 'react';
import { BestSellers } from '../../data/BestSellers';
import { Link, useParams } from 'react-router-dom';

const ProductPage = () => {
  const { id } = useParams();
  const product = BestSellers.find((p) => p.id === Number(id));

  if (!product) {
    return (
      <div className="w-full h-screen flex justify-center items-center bg-gray-100">
        <h1 className="text-4xl font-bold text-gray-700">პროდუქტი ვერ მოიძებნა</h1>
      </div>
    );
  }

  return (
    <div className="flex w-full justify-center bg-gray-100 py-22">
      <div className="flex flex-col md:flex-row w-4/5 max-w-screen-lg bg-white rounded-lg shadow-lg overflow-hidden py-4 px-[14px]">
        <Link to="/" className='text-indigo-600 hover:underline h-fit'>Back</Link>
        <div className="md:w-1/2 p-8 flex justify-start items-center">
          <div className="rounded-md overflow-hidden">
            <img
              src={product.image}
              alt={product.name}
              className="w-96 h-auto object-contain"
            />
          </div>
        </div>

        <span className='h-full w-[1px] bg-gray-300 mr-10'></span>

        <div className='flex flex-col w-full relative md:gap-0 gap-4'>
          <h1 className="font-semibold text-3xl text-gray-800">
            {product.name}
          </h1>
          <p className="text-gray-600 leading-relaxed mb-6">
            {product.description}
          </p>
          <h2 className="font-bold text-2xl text-indigo-600 mb-4">
            {product.price} ₾
          </h2>
        
        <button
          className="cursor-pointer absolute bottom-4 w-[95%] bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-3 px-6 rounded-md focus:outline-none focus:shadow-outline transition duration-300 ease-in-out"
          type="button"
        >
          Buy Now
        </button>
        </div>
        
      </div>
    </div>
  );
};

export default ProductPage;