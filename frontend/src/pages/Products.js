import { useEffect, useState } from 'react';
import { getProducts } from '../services/productService';
import ProductCard from '../components/ProductCard';

function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const data = await getProducts();
      setProducts(data);
    };
    
    fetchProducts();
  }, []);

  return (
    <div>
      <h2>Products Page</h2>
      {products.length === 0 ? (
        <p>No products available.</p>
      ) : (
        <div>
          {products.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Products;
