import React, { useState } from 'react'
import { BrandsPhoto } from '../../data/BrandsPhosto'

const Brands = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredBrands = BrandsPhoto.filter((brand) =>
    brand.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <div className='w-full flex justify-center items-center'>
        <div className='flex gap-4 justify-center items-start flex-col'>
          <h1 className='text-[22px] font-semibold text-center'>Brands</h1>

          {/* Search Input */}
          <div className='w-full max-w-md mx-auto mb-4'>
            <input
              type="text"
              placeholder="Search brands..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
            />
          </div>

          <div className='w-full flex gap-[18px] flex-wrap justify-center sm:justify-start md:justify-center'>
            {filteredBrands.map((product, index) => (
              <div key={index} className='group/brand block'>
                <div className='flex h-[88px] w-[88px] cursor-pointer items-center justify-center rounded-full border-2 border-[#F2F3F6] bg-white'>
                  <img 
                    src={product.image} 
                    alt='brand' 
                    className='h-[40px] w-[60px] max-w-full object-contain transition-all group-hover/brand:scale-105'
                  />
                </div>
                <span className='font-semibold text-md mt-2 block text-center'>{product.name}</span>
              </div>
            ))}
          </div>

          {filteredBrands.length === 0 && (
            <p className='text-center text-gray-500 w-full'>No brands found matching your search.</p>
          )}
        </div>
      </div>
    </div>
  )
}

export default Brands
