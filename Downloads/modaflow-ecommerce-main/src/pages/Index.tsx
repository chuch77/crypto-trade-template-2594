import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import ProductCard from '@/components/ProductCard';

import { useWishlist } from '@/hooks/useWishlist';
import { useCart } from '@/hooks/useCart';
import { useProducts } from '@/hooks/useProducts';
import { motion } from 'framer-motion';

const Index = () => {
  const { toggleWishlist, isInWishlist } = useWishlist();
  const { addToCart } = useCart();
  const { products, loading } = useProducts();

  // Get featured products (new products)
  const featuredProducts = products.filter(product => product.is_new).slice(0, 8);

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
        <Hero />



        {/* Featured Products */}
        <section className="bg-gray-50 sm:py-12 py-8">
          <div className="container mx-auto px-4">
            <motion.div 
              className="text-center sm:mb-12 mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Productos Destacados
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Los más vendidos y mejor valorados por nuestros clientes
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
              {products.filter(product => product.rating >= 4.7).slice(0, 8).map((product, index) => (
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

        {/* New Products */}
        <section className="sm:py-12 py-8">
          <div className="container mx-auto px-4">
            <motion.div 
              className="text-center sm:mb-12 mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Novedades
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Descubre las últimas incorporaciones a nuestra colección
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
              {featuredProducts.map((product, index) => (
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

        {/* Benefits Section */}
        <section className="sm:py-12 py-8 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div 
              className="text-center sm:mb-12 mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                ¿Por qué elegir ModaFlow?
              </h2>
              <p className="text-lg text-gray-700 max-w-2xl mx-auto">
                La mejor experiencia de compra en moda mexicana
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
              <motion.div
                className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                viewport={{ once: true }}
              >
                <div className="w-16 h-16 bg-[hsl(var(--brand))] rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🚚</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Envío Gratis</h3>
                <p className="text-gray-700">En compras mayores a $999 MXN</p>
              </motion.div>

              <motion.div
                className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <div className="w-16 h-16 bg-[hsl(var(--brand-600))] rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">⚡</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Entrega Rápida</h3>
                <p className="text-gray-700">24-48 horas en CDMX y área metropolitana</p>
              </motion.div>

              <motion.div
                className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <div className="w-16 h-16 bg-[hsl(var(--brand-700))] rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🔄</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Cambios Fáciles</h3>
                <p className="text-gray-700">30 días para cambios y devoluciones</p>
              </motion.div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
