import React, { useEffect, useState } from 'react';
import { CiCircleRemove } from "react-icons/ci";
import { getCartItems, removeFromCart } from '../Api';

const Cart = () => {
  
     const [cartItems, setCartItems] = useState([])
     const [error, setError] = useState(null)
     const [loading, setLoading] = useState(true)

     useEffect(()=>{
      fetchCartItems()
    })

     const fetchCartItems = async () => {
        try{
          setLoading(false)
          const response = await getCartItems()
          setCartItems(response.data)
          setError(null)
        }catch(err){
          setError('Failed to fetch cart items');
          console.error('Error fetching cart:', err);
        }finally{
          setLoading(false)
        }
     }

     const removeItems = async (id) => {
         try{
          await removeFromCart(id)
          await fetchCartItems()
          window.dispatchEvent(new Event("cartUpdated"))
         }catch(err){
          setError('Failed to remove item from cart');
          console.error('Error removing item:', err);
         }
     }

     const totalQuantity = cartItems.reduce((total, item) => total + item.quantity, 0)
     const totalPrice = cartItems.reduce((total, item) => total + item.quantity * item.price, 0)

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="text-red-500">{error}</div>
      </div>
    );
  }

  return (
    <div className="flex flex-col lg:flex-row gap-8 p-6 py-24 max-w-7xl mx-auto">
      <div className="flex-1">
        <h1 className="text-3xl font-semibold mb-6">Your Cart</h1>

        {cartItems.length === 0 ? (
          <p className="text-gray-600">Your Cart Is Empty</p>
        ) : (
          <ul className="space-y-4">
            {cartItems.map((item) => (
              <li key={item.id} className="flex justify-between items-center bg-gray-50 p-4 rounded-lg relative shadow-sm">
                <div className="flex items-center gap-4">
                  <img src={item.image} alt={item.name} className="w-20 h-20 object-contain rounded" />
                  <div>
                    <h3 className="text-lg font-medium">{item.name}</h3>
                    <p className="text-gray-500">Quantity: {item.quantity}</p>
                  </div>
                </div>
                <p className="text-md font-bold">{(item.price * item.quantity).toFixed(2)} ₾</p>
                <button
                  onClick={() => removeItems(item.id)}
                  className="absolute right-3 top-3 text-2xl text-gray-600 hover:text-red-500 transition"
                >
                  <CiCircleRemove />
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>

      <div className="lg:w-1/3 bg-white p-6 rounded-lg shadow-sm">
        <h2 className="text-2xl font-semibold mb-4">Total Summary</h2>
  
        {cartItems.length > 0 ? (
          <>
            <div className="flex justify-between text-gray-700 mb-2">
              <span>Total Items:</span>
              <span>{totalQuantity}</span>
            </div>
            <div className="flex justify-between text-gray-700 mb-2">
              <span>Total Price:</span>
              <span>{totalPrice.toFixed(2)} ₾</span>
            </div>
            <hr className="my-4" />
            <button
              className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold cursor-pointer py-3 rounded transition"
            >
              Check Out Now
            </button>
          </>
        ) : (
          <>
            <p className="text-gray-500">Cart is empty</p>
            <button
              disabled
              className="w-full bg-gray-300 text-white font-semibold py-3 rounded mt-4 cursor-not-allowed"
            >
              Check Out
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default Cart;
