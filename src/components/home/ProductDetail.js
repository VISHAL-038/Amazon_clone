import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/amazonSlice";



const ProductDetail = () => {
 const dispatch = useDispatch();
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`https://fakestoreapi.com/products/${id}`);
        if (!response.ok) {
          throw new Error('Failed to fetch product');
        }
        const data = await response.json();
        setProduct(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching product:', error);
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8 flex items-center">
      <div className="w-1/3 flex justify-center">
        <img src={product.image} alt={product.title} className="max-w-xs max-h-full object-cover rounded-lg shadow-md" />
      </div>
      <div className="w-2/3 pl-8">
        <h1 className="text-3xl font-semibold">{product.title}</h1>
        <p className="text-gray-600 text-lg mt-2">₹{product.price}</p>
        <p className="text-gray-800 text-lg mt-4">{product.description}</p>
        <p className="text-gray-700 text-lg mt-4">Category: {product.category}</p>
        <p className="text-gray-700 text-lg mt-2">Rating: {product.rating.rate} ({product.rating.count} reviews)</p>
        <button   onClick={() =>
                  dispatch(
                    addToCart({
                      id: product.id,
                      title: product.title,
                      description: product.description,
                      price: product.price,
                      category: product.category,
                      image: product.image,
                      quantity: 1,
                    })
                  )
                }className="bg-yellow-500 text-white font-semibold px-4 py-2 mt-4 rounded shadow-md hover:bg-yellow-600 focus:outline-none focus:ring focus:ring-yellow-300">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductDetail;
