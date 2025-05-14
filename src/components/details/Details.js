import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { ProductsDetails } from './../../data/ProductsDetails';

const Details = () => {
  const { id } = useParams();
  const product = ProductsDetails.find((p) => p.id === Number(id));

  if (!product) {
    return (
      <div className="w-full h-screen flex justify-center items-center bg-gray-100">
        <h1 className="text-4xl font-bold text-gray-700">პროდუქტი ვერ მოიძებნა</h1>
      </div>
    );
  }

  return (
    <div className="flex justify-center py-10 px-4 bg-gray-100">
      <div className="flex flex-col md:flex-row gap-8 max-w-6xl w-full bg-white p-6 rounded-lg shadow-md relative">
        
        
        <Link to="/" className="absolute top-4 left-4 text-indigo-500 underline text-sm md:text-base">
          Back
        </Link>

        
        <div className="flex justify-center items-center w-full md:w-1/2">
          <img
            src={product.image}
            alt={product.name}
            className="w-[250px] h-[250px] md:w-[350px] md:h-[350px] object-contain"
          />
        </div>

        
        <div className="flex flex-col gap-6 w-full md:w-1/2">
          <h1 className="text-xl md:text-2xl font-semibold text-gray-800">{product.description}</h1>

          <hr className="border-gray-300" />

          <ul className="flex flex-col gap-3">
            <li className="flex justify-between text-sm md:text-base">
              <span className="font-bold">Specs:</span>
              <span>{product.specs}</span>
            </li>
            <li className="flex justify-between text-sm md:text-base">
              <span className="font-bold">Storage:</span>
              <span>{product.features[0]}</span>
            </li>
            <li className="flex justify-between text-sm md:text-base">
              <span className="font-bold">Chip:</span>
              <span>{product.features[1]}</span>
            </li>
            <li className="flex justify-between text-sm md:text-base">
              <span className="font-bold">Display:</span>
              <span>{product.features[2]}</span>
            </li>
            <li className="flex justify-between text-sm md:text-base">
              <span className="font-bold">Camera:</span>
              <span>{product.features[3]}</span>
            </li>
            <li className="flex justify-between text-sm md:text-base">
              <span className="font-bold">OS:</span>
              <span>{product.features[4]}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Details;
