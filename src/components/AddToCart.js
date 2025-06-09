import React from 'react'
import { addToCart } from './Api'

const AddToCart = async (product) => {
    try {
        await addToCart({
            productId: product.id,
            quantity: 1
        });
        window.dispatchEvent(new Event("cartUpdated"));
    } catch (error) {
        console.error('Error adding to cart:', error);
    }
}

export default AddToCart
