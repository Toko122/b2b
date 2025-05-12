import React from 'react'
import { BrandsPhoto } from '../../data/BrandsPhosto'

const Brands = () => {
  return (
    <div>
      <div className='w-full flex justify-center items-center'>
             <div className='flex gap-4 justify-center items-start flex-col'>

               <h1 className='text-[22px] font-semibold text-center'>Brands</h1>

               <div className='w-full flex gap-[18px] flex-wrap justify-center sm:justify-start md:justify-center'>
                  {
                    BrandsPhoto.map((product,index) => (
                      <div key={index} className='group/brand block'>
                        <div className='flex h-[88px] w-[88px] cursor-pointer items-center justify-center rounded-full border-2 border-[#F2F3F6] bg-white'><img src={product.image} alt='brand' className='h-[40px] w-[60px] max-w-full object-contain transition-all group-hover/brand:scale-105'></img></div>
                        <span className='font-semibold text-md mt-2 block text-center'>{product.name}</span>
                      </div>
                    ))
                  }

               </div>

             </div>
           </div>
    </div>
  )
}

export default Brands
