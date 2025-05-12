import React from 'react'
import ComputerProd from '../computerProd/ComputerProd';


const BrandsPage = () => {
  return (
    <div className='justify-center items-center flex mt-6'>
      <div className='flex flex-col gap-6 relative'>

          <select className='border w-fit absolute right-0 border-gray-300 rounded-md px-3 py-2 shadow-sm text-sm outline-none hover:border-gray-500 transition'>
            <option>All</option>
            <option>Low To High</option>
            <option>High To Low</option>
          </select>
     
          <div className=''>
             <ComputerProd />
          </div>

      </div>      
    </div>
  )
}

export default BrandsPage
