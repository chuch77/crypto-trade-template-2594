import { useState, useEffect } from 'react';
import { PRODUCTS } from '@/data/products';

export const useProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Simular carga de datos
    setTimeout(() => {
      console.log('Loading products:', PRODUCTS.length);
      setProducts(PRODUCTS);
      setLoading(false);
    }, 100);
  }, []);

  return { products, loading, error, refetch: () => {} };
};