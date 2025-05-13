import React, { useEffect, useState } from 'react';
import { CiCircleRemove } from "react-icons/ci";

const Cart = () => {
  
   const [cartItem, setCartItem] = useState([])

   useEffect(()=>{
     const cart = JSON.parse(localStorage.getItem('cart')) || []
     setCartItem(cart)
   },[])

   const removeItems = (id)=>{
      const filtered = cartItem.filter((product) => product.id !== id)
      setCartItem(filtered)
      localStorage.setItem("cart", JSON.stringify(filtered))
      window.dispatchEvent(new Event('cartUpdated'))
   }

  return (
    
    <>
     <div className='p-10 max-w-3xl mx-auto'>
              <h1 className='text-semibold text-3xl'>Your Cart</h1>

             {
              cartItem.length === 0 ? 
              (<p className='text-gray-600 ml-2'>Your Cart Is Empty</p>)
              :
              (<>
                 <div className="space-y-4 mt-8">
          {cartItem.map((item, index) => (
            <li key={index} className="flex justify-between items-center bg-white shadow p-4 rounded-lg relative">
              <div className="flex items-center gap-4">
                <img src={item.image} alt={item.name} className="w-22 h-22 object-contain" />
                <div>
                  <h3 className="text-lg font-semibold">{item.name}</h3>
                  <p className="text-gray-500">Quantity: {item.quantity}</p>
                </div>
              </div>
              <p className='text-md font-bold'>{(item.price * item.quantity).toFixed(2)} ₾</p>
               
               <div onClick={() => removeItems(item.id)} className='absolute right-0 top-0 text-2xl cursor-pointer hover:text-red-500 transition-all'>
                 <CiCircleRemove/>
               </div>
            </li>
          ))}
        </div>
              </>)
             }

          </div>

     
    </>
      
  );
};

export default Cart;
