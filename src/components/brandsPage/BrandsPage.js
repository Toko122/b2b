import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { CiCirclePlus } from "react-icons/ci";
import AddToCart from "../AddToCart";
import { ComputerData } from '../../data/ComputerData';
import { ProductsDetails } from '../../data/ProductsDetails';

const BrandsPage = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedBrand, setSelectedBrand] = useState('all');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(5200);

  
  const allProducts = [
    ...ProductsDetails.filter(product => !product.type), // Phones
    ...ComputerData.map(product => ({ ...product, type: 'computer' })) // Computers
  ];


  const brands = ['all', ...new Set(allProducts.map(product => product.name))];

  
  const filteredProducts = allProducts.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesBrand = selectedBrand === 'all' || product.name === selectedBrand;
    const matchesCategory = selectedCategory === 'all' || product.type === selectedCategory;
    const matchesPrice = product.price >= minPrice && product.price <= maxPrice;
    
    return matchesSearch && matchesBrand && matchesCategory && matchesPrice;
  });

  return (
    <div className="py-24 px-4 sm:px-8 md:px-20 bg-gray-50 min-h-screen flex flex-col gap-12">
     
      <div className="bg-white p-6 rounded-2xl shadow-md w-full max-w-4xl mx-auto space-y-6">
        <h3 className="text-xl font-semibold text-gray-700">Filters</h3>
        
        
        <div className="w-full">
          <input
            type="text"
            placeholder="Search products..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

       
        <div className="flex gap-4">
          <button
            onClick={() => setSelectedCategory('all')}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors
              ${selectedCategory === 'all' 
                ? 'bg-blue-500 text-white' 
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
          >
            All Products
          </button>
          <button
            onClick={() => setSelectedCategory('phone')}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors
              ${selectedCategory === 'phone' 
                ? 'bg-blue-500 text-white' 
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
          >
            Phones
          </button>
          <button
            onClick={() => setSelectedCategory('computer')}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors
              ${selectedCategory === 'computer' 
                ? 'bg-blue-500 text-white' 
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
          >
            Computers
          </button>
        </div>

       
        <div className="flex flex-wrap gap-2">
          {brands.map((brand) => (
            <button
              key={brand}
              onClick={() => setSelectedBrand(brand)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors
                ${selectedBrand === brand 
                  ? 'bg-blue-500 text-white' 
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
            >
              {brand === 'all' ? 'All Brands' : brand}
            </button>
          ))}
        </div>

        
        <div className="flex flex-col gap-4">
          <div className="flex justify-between items-center gap-6">
            <div className="flex flex-col w-1/2">
              <label className="text-sm text-gray-600">Min Price</label>
              <input
                type="number"
                value={minPrice}
                onChange={(e) => setMinPrice(Number(e.target.value))}
                className="border rounded-md px-3 py-1"
              />
            </div>
            <div className="flex flex-col w-1/2">
              <label className="text-sm text-gray-600">Max Price</label>
              <input
                type="number"
                value={maxPrice}
                onChange={(e) => setMaxPrice(Number(e.target.value))}
                className="border rounded-md px-3 py-1"
              />
            </div>
          </div>
        </div>
      </div>

      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full">
        {filteredProducts.map((item, index) => (
          <div
            key={index}
            className="group relative bg-white text-black rounded-xl shadow-md transition-all hover:shadow-lg"
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-[200px] object-contain rounded-t-xl"
              onClick={() => navigate(`/productpage/${item.id}`)}
            />
            <div className="p-4 flex flex-col gap-1">
              <h2 className="text-lg font-semibold truncate">{item.name}</h2>
              <p className="text-sm text-gray-600 line-clamp-2">{item.description}</p>
              <div className="flex justify-between items-center mt-2">
                <p className="text-md font-semibold">{item.price} ₾</p>
                <div
                  onClick={() => navigate(`/${item.id}/details`)}
                  className="hover:bg-blue-600 bg-blue-500 text-white px-4 py-1 rounded-full text-sm cursor-pointer transition"
                >
                  Details
                </div>
              </div>
            </div>

            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all">
              <CiCirclePlus
                onClick={() => AddToCart(item)}
                className="text-4xl text-blue-500 hover:text-blue-700 cursor-pointer"
              />
            </div>
          </div>
        ))}
      </div>

      
      {filteredProducts.length === 0 && (
        <div className="text-center text-gray-500 text-xl">
          No products found matching your criteria
        </div>
      )}
    </div>
  );
};

export default BrandsPage;
