import React from 'react'
import { Link } from 'react-router-dom'

const Search = ({ product, onSelect }) => {
  const path = product.type === "computer" 
    ? `/computerpage/${product.id}`
    : `/productpage/${product.id}`

  return (
    <Link
      to={path}
      className="block hover:bg-gray-100 px-4 py-2"
      onClick={onSelect}
    >
      <div className="flex justify-between items-center">
        <span className="font-medium">{product.name}</span>
        <span className="text-sm text-gray-500">{product.price} ₾</span>
      </div>
    </Link>
  )
}

export default Search
