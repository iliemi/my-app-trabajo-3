// ProductCard.js

import React from 'react';

const ProductCard = ({ name, description, price, sku, quantity }) => {
  return (
    <div className="product-card">
      <img
        src="https://http2.mlstatic.com/D_NQ_NP_982638-MLA52414999132_112022-O.webp "
        alt={name}
        style={{ maxWidth: '100%', height: 'auto' }}
      />
      <h2>{name}</h2>
      <p>{description}</p>
      <p><strong>Precio:</strong> ${price}</p>
      <p><strong>SKU:</strong> {sku}</p>
      <p><strong>Cantidad Disponible:</strong> {quantity}</p>
      <button onClick={() => alert('¡Producto comprado!')}>Comprar</button>
    </div>
  );
};

export default ProductCard;
