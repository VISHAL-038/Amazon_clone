import React, { useEffect, useState } from 'react'

const Category = () => {
    const [products , setProducts]=useState([]);
    const [searchQuery , setSearchQuery] = useState('');

    useEffect(()=>{
        fetch(`https://fakestoreapi.com/products?category=${searchQuery}`)
        .then((response) => response.json())
        .then((data) => setProducts(data))
        .catch((error) => console.error('Error fetching data:', error));
    }, [searchQuery]);

    const handleSearch = (query) =>{
        setSearchQuery(query);
    };

  return (
    <div>
      <h1>Category Page</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>{product.title}</li>
        ))}
      </ul>
    </div>
  )
}

export default Category