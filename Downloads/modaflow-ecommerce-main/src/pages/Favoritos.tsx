import { useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Heart, ShoppingBag } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ProductCard from '@/components/ProductCard';
import { Button } from '@/components/ui/button';
import { useWishlist } from '@/hooks/useWishlist';
import { useCart } from '@/hooks/useCart';
import { PRODUCTS as products } from '@/data/products';
import { motion } from 'framer-motion';

const Favoritos = () => {
  const { wishlistItems, toggleWishlist } = useWishlist();
  const { addToCart } = useCart();

  const wishlistProducts = useMemo(() => {
    return products.filter(product => wishlistItems.includes(product.id));
  }, [wishlistItems]);

  const handleAddToCart = (productId: string) => {
    const product = products.find(p => p.id === productId);
    if (product) {
      // Add with default color and size
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
        {/* Header */}
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Heart className="h-8 w-8 text-red-600" />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Mis Favoritos
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {wishlistProducts.length > 0 
                ? `Tienes ${wishlistProducts.length} ${wishlistProducts.length === 1 ? 'producto' : 'productos'} en tu lista de favoritos`
                : 'Aún no tienes productos favoritos'
              }
            </p>
          </motion.div>
        </div>

        {wishlistProducts.length === 0 ? (
          /* Empty State */
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center py-16"
          >
            <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <ShoppingBag className="h-12 w-12 text-gray-400" />
            </div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Tu lista de favoritos está vacía
            </h2>
            <p className="text-gray-600 mb-8 max-w-md mx-auto">
              Explora nuestra colección y guarda los productos que más te gusten haciendo clic en el corazón
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-black text-white hover:bg-gray-800">
                <Link to="/productos">
                  Explorar productos
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/novedades">
                  Ver novedades
                </Link>
              </Button>
            </div>
          </motion.div>
        ) : (
          /* Products Grid */
          <div>
            {/* Actions Bar */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8 p-6 bg-white rounded-lg shadow-sm"
            >
              <div>
                <h2 className="text-xl font-semibold text-gray-900 mb-1">
                  {wishlistProducts.length} {wishlistProducts.length === 1 ? 'Producto' : 'Productos'}
                </h2>
                <p className="text-gray-600">
                  Gestiona tu lista de productos favoritos
                </p>
              </div>
              <div className="flex gap-3">
                <Button
                  variant="outline"
                  onClick={() => {
                    wishlistProducts.forEach(product => {
                      handleAddToCart(product.id);
                    });
                  }}
                  className="border-gray-300 text-gray-700 hover:bg-gray-50"
                >
                  Agregar todos al carrito
                </Button>
                <Button asChild className="bg-black text-white hover:bg-gray-800">
                  <Link to="/productos">
                    Seguir comprando
                  </Link>
                </Button>
              </div>
            </motion.div>

            {/* Products Grid */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
            >
              {wishlistProducts.map((product, index) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <ProductCard
                    product={product}
                    onAddToWishlist={toggleWishlist}
                    onAddToCart={handleAddToCart}
                    isInWishlist={true}
                  />
                </motion.div>
              ))}
            </motion.div>

            {/* Recommendations */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="mt-16 text-center"
            >
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                También te podría interesar
              </h3>
              <p className="text-gray-600 mb-8">
                Descubre más productos similares a tus favoritos
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild variant="outline" size="lg">
                  <Link to="/novedades">
                    Ver novedades
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link to="/productos">
                    Explorar todo
                  </Link>
                </Button>
              </div>
            </motion.div>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default Favoritos;