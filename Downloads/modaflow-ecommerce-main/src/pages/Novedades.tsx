import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ProductCard from '@/components/ProductCard';
import { useProducts } from '@/hooks/useProducts';
import { useWishlist } from '@/hooks/useWishlist';
import { useCart } from '@/hooks/useCart';
import { motion } from 'framer-motion';

const Novedades = () => {
  const { products, loading } = useProducts();
  const { toggleWishlist, isInWishlist } = useWishlist();
  const { addToCart } = useCart();
  
  const watchProducts = products.filter(product => product.category === 'relojes');
  const newProducts = products.filter(product => product.is_new);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-lg">Cargando productos...</div>
      </div>
    );
  }

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
      
      <main>
        {/* Hero Section */}
        <section className="relative h-[60vh] bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center">
          <div className="absolute inset-0">
            <img
              src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=1920&q=80"
              alt="Novedades ModaFlow - Relojes"
              className="w-full h-full object-cover opacity-30"
            />
            <div className="absolute inset-0 bg-black/40"></div>
          </div>
          
          <div className="relative z-10 text-center text-white">
            <h1 className="text-5xl md:text-6xl font-bold mb-4">
              Novedades
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
              Descubre nuestra nueva colección de relojes y las últimas tendencias
            </p>
          </div>
        </section>

        {/* Relojes Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Colección de Relojes
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Descubre nuestra nueva línea de relojes elegantes y modernos
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {watchProducts.map((product, index) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <ProductCard
                    product={product}
                    onAddToWishlist={toggleWishlist}
                    onAddToCart={handleAddToCart}
                    isInWishlist={isInWishlist(product.id)}
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Other New Products */}
        <section className="bg-gray-50 py-20">
          <div className="container mx-auto px-4">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Otras Novedades
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Más productos nuevos que te van a encantar
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {newProducts.slice(0, 8).map((product, index) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <ProductCard
                    product={product}
                    onAddToWishlist={toggleWishlist}
                    onAddToCart={handleAddToCart}
                    isInWishlist={isInWishlist(product.id)}
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Novedades;