import React from 'react';
import '../../styles/sub-style/Products.css';

const productsData = [
  {
    name: 'Neem Urea',
    description: 'Used as Nitrogenous fertilizer (for agriculture purpose only)',
    image: 'https://www.gsfclimited.com/content/images/Neem-Urea.jpg', // Ensure you have this image in the correct directory
    price: ''
  },
  {
    name: 'Ammonium Sulphate',
    description: 'Used as slow releasing Nitrogenous fertilizer & reach source of Sulphur nutrient.',
    image: 'https://www.gsfclimited.com/content/images/DAP-a.jpg', // Ensure you have this image in the correct directory
    price: ''
  },
  {
    name: 'Liquid Bio Fertilizers(LBF)',
    description: 'Contains live micro-organisms which help in fixation/releasing of Nitrogen in plant.',
    image: 'https://www.gsfclimited.com/content/images/06-Organic-Products-01.jpg', // Ensure you have this image in the correct directory
    price: ''
  },
  // Add more products as needed
];

const Products = () => {
  return (
    <section className="products">
      <h2>Our Products</h2>
      <div className="products-container">
        {productsData.map((product, index) => (
          <div className="product-card" key={index}>
            <img src={product.image} alt={product.name} className="product-image" />
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <p className="product-price">{product.price}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Products;
