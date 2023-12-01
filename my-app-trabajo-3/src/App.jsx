// App.js

import React from 'react';
import ProductCard from './Components/Card';

const App = () => {
  const productData = {
    name: 'Samsung s22 ultra',
    description: 'Un increíble teléfono inteligente con características avanzadas: Comparte fotos, videos y archivos entre dispositivos con un toque.',
    price:'500.000',
    sku: 'CODC177546E145440',
    quantity: 30,
  };

  return (
    <div className="app">
      <ProductCard {...productData} />
    </div>
  );
};

export default App;
