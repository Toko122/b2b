import React, { useState } from 'react'
import { BrandsPhoto } from '../../data/BrandsPhosto'

const Brands = () => {
  const [searchTerm] = useState('');

  const filteredBrands = BrandsPhoto.filter((brand) =>
    brand.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <div className='w-full flex justify-center items-center'>
        <div className='flex gap-4 justify-center items-start flex-col'>
          <h1 className='text-[22px] font-semibold text-center'>Brands</h1>

          <div className='w-full flex gap-[22px] flex-wrap justify-center sm:justify-start md:justify-center'>
            {filteredBrands.map((product, index) => (
              <div key={index} className='group/brand block'>
                <div className='flex h-[128px] w-[128px] cursor-pointer items-center justify-center rounded-full border-2 border-[#F2F3F6] bg-white'>
                  <img 
                    src={product.image} 
                    alt='brand' 
                    className='h-[60px] w-[80px] max-w-full object-contain transition-all group-hover/brand:scale-105'
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
