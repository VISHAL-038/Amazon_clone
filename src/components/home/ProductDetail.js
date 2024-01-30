import React, { useState } from 'react';
import axios from 'axios';

function ProductDetails({ productId }) {
  const [product, setProduct] = useState(null);

  const getProductDetails = async () => {
    try {
      const response = await axios.get(`https://fakestoreapi.com/products/${productId}`);
      setProduct(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <button onClick={getProductDetails}>View Details</button>
      {product && (
        <div>
          <h2>{product.title}</h2>
          <p>{product.description}</p>
          <p>Price: ₹ {product.price}</p>
        </div>
      )}
    </div>
  );
}

export default ProductDetails;
