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
    <div className="py-24 px-6 sm:px-8 bg-gradient-to-br from-blue-50 via-white to-purple-50 min-h-screen">
      <div className="w-full mx-auto flex flex-col lg:flex-row gap-12">
        
        <div className="lg:w-1/4 w-full">
          <div className="bg-white/80 backdrop-blur-sm p-8 rounded-3xl shadow-xl sticky top-24 border border-gray-100/50">
            <h3 className="text-2xl font-bold text-gray-800 mb-8 flex items-center gap-3">
              <span className="w-2 h-8 bg-gradient-to-b from-blue-500 to-blue-600 rounded-full"></span>
              Filters
            </h3>
            
            <div className="space-y-8">
              <div className="w-full">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search products..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full px-5 py-3.5 bg-gray-50/50 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 placeholder-gray-400"
                  />
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="font-semibold text-gray-700 text-lg">Categories</h4>
                <div className="flex flex-wrap gap-2">
                  <button
                    onClick={() => setSelectedCategory('all')}
                    className={`px-5 py-2.5 rounded-xl text-sm font-medium transition-all duration-300
                      ${selectedCategory === 'all' 
                        ? 'bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-lg scale-105' 
                        : 'bg-gray-50 text-gray-700 hover:bg-gray-100 hover:scale-105'}`}
                  >
                    All Products
                  </button>
                  <button
                    onClick={() => setSelectedCategory('phone')}
                    className={`px-5 py-2.5 rounded-xl text-sm font-medium transition-all duration-300
                      ${selectedCategory === 'phone' 
                        ? 'bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-lg scale-105' 
                        : 'bg-gray-50 text-gray-700 hover:bg-gray-100 hover:scale-105'}`}
                  >
                    Phones
                  </button>
                  <button
                    onClick={() => setSelectedCategory('computer')}
                    className={`px-5 py-2.5 rounded-xl text-sm font-medium transition-all duration-300
                      ${selectedCategory === 'computer' 
                        ? 'bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-lg scale-105' 
                        : 'bg-gray-50 text-gray-700 hover:bg-gray-100 hover:scale-105'}`}
                  >
                    Computers
                  </button>
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="font-semibold text-gray-700 text-lg">Brands</h4>
                <div className="flex flex-wrap gap-2">
                  {brands.map((brand) => (
                    <button
                      key={brand}
                      onClick={() => setSelectedBrand(brand)}
                      className={`px-5 py-2.5 rounded-xl text-sm font-medium transition-all duration-300
                        ${selectedBrand === brand 
                          ? 'bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-lg scale-105' 
                          : 'bg-gray-50 text-gray-700 hover:bg-gray-100 hover:scale-105'}`}
                    >
                      {brand === 'all' ? 'All Brands' : brand}
                    </button>
                  ))}
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="font-semibold text-gray-700 text-lg">Price Range</h4>
                <div className="flex flex-col gap-4">
                  <div className="flex gap-4">
                    <div className="flex-1">
                      <input
                        type="number"
                        value={minPrice}
                        onChange={(e) => setMinPrice(Number(e.target.value))}
                        placeholder="Min"
                        className="w-full bg-gray-50/50 border border-gray-200 rounded-xl px-5 py-3.5 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                      />
                    </div>
                    <div className="flex-1">
                      <input
                        type="number"
                        value={maxPrice}
                        onChange={(e) => setMaxPrice(Number(e.target.value))}
                        placeholder="Max"
                        className="w-full bg-gray-50/50 border border-gray-200 rounded-xl px-5 py-3.5 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Products Grid */}
        <div className="lg:w-3/4 w-full">
          <div className="flex flex-wrap justify-center gap-8 items-center">
            {filteredProducts.map((item, index) => (
              <div
                key={index}
                className="group relative bg-white/80 backdrop-blur-sm text-black rounded-3xl shadow-xl transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 w-[350px] sm:w-[280px] border border-gray-100/50"
              >
                <div className="relative overflow-hidden rounded-t-3xl">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-[200px] object-contain rounded-t-3xl transition-transform duration-500 group-hover:scale-110"
                    onClick={() => navigate(`/productpage/${item.id}`)}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="p-4 flex flex-col gap-4">
                  <h2 className="text-xl font-bold truncate text-gray-800">{item.name}</h2>
                  <p className="text-sm text-gray-600 line-clamp-2">{item.description}</p>
                  <div className="flex justify-between items-center mt-2">
                    <p className="text-xl font-bold bg-gradient-to-r from-blue-600 to-blue-700 bg-clip-text text-transparent">{item.price} ₾</p>
                    <div
                      onClick={() => navigate(`/${item.id}/details`)}
                      className="hover:bg-blue-600 bg-gradient-to-r from-blue-500 to-blue-600 text-white px-6 py-2.5 rounded-xl text-sm cursor-pointer transition-all duration-300 hover:scale-105 shadow-md"
                    >
                      Details
                    </div>
                  </div>
                </div>

                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <CiCirclePlus
                    onClick={() => AddToCart(item)}
                    className="text-6xl text-blue-500 hover:text-blue-700 cursor-pointer transition-transform duration-300 hover:scale-110 drop-shadow-lg"
                  />
                </div>
              </div>
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="text-center text-gray-500 text-xl mt-12 p-8 bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl border border-gray-100/50">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto mb-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              No products found matching your criteria
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BrandsPage;
