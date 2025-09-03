import { useState, useMemo, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ProductCard from '@/components/ProductCard';
import ProductFilters, { FilterState } from '@/components/ProductFilters';
import { useWishlist } from '@/hooks/useWishlist';
import { useCart } from '@/hooks/useCart';
import { PRODUCTS as products } from '@/data/products';
import { useIsMobile } from '@/hooks/use-mobile';
import { motion } from 'framer-motion';

const Productos = () => {
  const [searchParams] = useSearchParams();
  const isMobile = useIsMobile();
  const { toggleWishlist, isInWishlist } = useWishlist();
  const { addToCart } = useCart();

  // Get all unique colors and sizes
  const availableColors = useMemo(() => {
    const colorMap = new Map();
    products.forEach(product => {
      product.colors.forEach(color => {
        colorMap.set(color.name, color);
      });
    });
    return Array.from(colorMap.values());
  }, []);

  const availableSizes = useMemo(() => {
    const sizeSet = new Set<string>();
    products.forEach(product => {
      product.sizes.forEach(size => sizeSet.add(size));
    });
    return Array.from(sizeSet).sort();
  }, []);

  const priceRange: [number, number] = useMemo(() => {
    const prices = products.map(p => p.price);
    return [Math.min(...prices), Math.max(...prices)];
  }, []);

  const [filters, setFilters] = useState<FilterState>({
    search: searchParams.get('search') || '',
    category: searchParams.get('category') || 'all',
    priceRange: priceRange,
    colors: [],
    sizes: [],
    isOnSale: false,
    isNew: false,
    sortBy: 'relevance'
  });

  // Update search from URL params
  useEffect(() => {
    const search = searchParams.get('search');
    if (search && search !== filters.search) {
      setFilters(prev => ({ ...prev, search }));
    }
  }, [searchParams]);

  const filteredAndSortedProducts = useMemo(() => {
    console.log('Filtering products:', products.length, 'filters:', filters);
    let filtered = products.filter(product => {
      // Search filter
      if (filters.search) {
        const searchLower = filters.search.toLowerCase();
        const matchesSearch = 
          product.title.toLowerCase().includes(searchLower) ||
          product.description.toLowerCase().includes(searchLower);
        if (!matchesSearch) return false;
      }

      // Category filter - simplified
      if (filters.category && filters.category !== 'all') {
        if (product.category !== filters.category) {
          return false;
        }
      }

      // Price range filter
      const price = product.is_on_sale 
        ? product.price * (1 - product.discount_percent / 100)
        : product.price;
      if (price < filters.priceRange[0] || price > filters.priceRange[1]) {
        return false;
      }

      // Color filter
      if (filters.colors.length > 0) {
        const hasMatchingColor = product.colors && product.colors.some(color => 
          filters.colors.includes(color.name)
        );
        if (!hasMatchingColor) return false;
      }

      // Size filter
      if (filters.sizes.length > 0) {
        const hasMatchingSize = product.sizes && product.sizes.some(size => 
          filters.sizes.includes(size)
        );
        if (!hasMatchingSize) return false;
      }

      // Special filters
      if (filters.isOnSale && !product.is_on_sale) return false;
      if (filters.isNew && !product.is_new) return false;

      return true;
    });

    // Sort products
    switch (filters.sortBy) {
      case 'price-asc':
        filtered.sort((a, b) => {
          const priceA = a.is_on_sale ? a.price * (1 - a.discount_percent / 100) : a.price;
          const priceB = b.is_on_sale ? b.price * (1 - b.discount_percent / 100) : b.price;
          return priceA - priceB;
        });
        break;
      case 'price-desc':
        filtered.sort((a, b) => {
          const priceA = a.is_on_sale ? a.price * (1 - a.discount_percent / 100) : a.price;
          const priceB = b.is_on_sale ? b.price * (1 - b.discount_percent / 100) : b.price;
          return priceB - priceA;
        });
        break;
      case 'newest':
        filtered.sort((a, b) => (b.is_new ? 1 : 0) - (a.is_new ? 1 : 0));
        break;
      case 'rating':
        filtered.sort((a, b) => b.rating - a.rating);
        break;
      default:
        // Keep original order for relevance
        break;
    }

    console.log('Filtered products:', filtered.length);
    return filtered;
  }, [filters, products]);

  const handleAddToCart = (productId: string) => {
    const product = products.find(p => p.id === productId);
    if (product) {
      addToCart(
        product,
        product.colors[0]?.name || 'Default',
        product.sizes[0] || 'M',
        1
      );
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        {/* Page Header */}
        <div className="text-center mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {filters.search ? `Resultados para "${filters.search}"` : 'Todos los Productos'}
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {filteredAndSortedProducts.length} {filteredAndSortedProducts.length === 1 ? 'producto encontrado' : 'productos encontrados'}
            </p>
          </motion.div>
        </div>

        <div>
          {/* Products */}
          <div>

            {filteredAndSortedProducts.length === 0 ? (
              /* No Results */
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-center py-16 bg-white rounded-lg"
              >
                <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-4xl">🔍</span>
                </div>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                  No se encontraron productos
                </h2>
                <p className="text-gray-600 mb-8 max-w-md mx-auto">
                  Intenta ajustar tus filtros o buscar con otros términos
                </p>
              </motion.div>
            ) : (
              /* Products Grid */
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
              >
                {filteredAndSortedProducts.map((product, index) => (
                  <motion.div
                    key={product.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                  >
                    <ProductCard
                      product={product}
                      onAddToWishlist={toggleWishlist}
                      onAddToCart={handleAddToCart}
                      isInWishlist={isInWishlist(product.id)}
                    />
                  </motion.div>
                ))}
              </motion.div>
            )}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Productos;