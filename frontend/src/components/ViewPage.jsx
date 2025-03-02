// src/ProductList.js
import React from 'react';

const products = [
  {
    id: 1,
    name: 'Handmade Jewelry',
    description: 'Beautiful handmade jewelry by local artisans.',
    price: '$25',
    image: 'https://via.placeholder.com/150',
  },
  {
    id: 2,
    name: 'Organic Skincare',
    description: 'Natural skincare products made from organic ingredients.',
    price: '$30',
    image: 'https://via.placeholder.com/150',
  },
  {
    id: 3,
    name: 'Artisanal Candles',
    description: 'Scented candles made from eco-friendly materials.',
    price: '$20',
    image: 'https://via.placeholder.com/150',
  },
];

const ProductList = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      {products.map((product) => (
        <div key={product.id} className="border rounded-lg shadow-lg p-4">
          <img src={product.image} alt={product.name} className="w-full h-48 object-cover rounded-t-lg" />
          <h2 className="text-xl font-bold mt-2">{product.name}</h2>
          <p className="text-gray-600">{product.description}</p>
          <p className="text-lg font-semibold mt-2">{product.price}</p>
          <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
            View Product
          </button>
        </div>
      ))}
    </div>
  );
};

export default ProductList;