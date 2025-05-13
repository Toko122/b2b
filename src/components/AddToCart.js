import React from 'react'

const AddToCart = (product) => {

    const exsitingCart = JSON.parse(localStorage.getItem('cart')) || []

    const findProduct = exsitingCart.findIndex((item) => item.id === product.id)

    if(findProduct !== -1) {
       exsitingCart[findProduct].quantity += 1
    }else{
        exsitingCart.push({...product, quantity: 1})
    }

    localStorage.setItem('cart', JSON.stringify(exsitingCart))

    window.dispatchEvent(new Event("cartUpdated"));

  return (
    <div>
       
    </div>
  )
}

export default AddToCart
