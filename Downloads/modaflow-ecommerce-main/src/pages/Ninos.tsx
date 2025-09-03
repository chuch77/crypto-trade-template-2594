import { useSearchParams } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ProductCard from '@/components/ProductCard';
import { useProducts } from '@/hooks/useProducts';
import { useWishlist } from '@/hooks/useWishlist';
import { useCart } from '@/hooks/useCart';
import { motion } from 'framer-motion';

const Ninos = () => {
  const [searchParams] = useSearchParams();
  const { products, loading } = useProducts();
  const { toggleWishlist, isInWishlist } = useWishlist();
  const { addToCart } = useCart();
  
  const type = searchParams.get('type');
  
  let filteredProducts = products;
  
  const getTitle = () => {
    if (type) {
      const typeNames: { [key: string]: string } = {
        'playeras': 'Playeras',
        'pantalones': 'Pantalones',
        'shorts': 'Shorts',
        'sudaderas': 'Sudaderas',
        'zapatos': 'Zapatos',
        'pijamas': 'Pijamas'
      };
      return typeNames[type] || type.charAt(0).toUpperCase() + type.slice(1);
    }
    return 'Niños';
  };
  
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

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-lg">Cargando productos...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="relative h-[60vh] bg-gradient-to-r from-green-600 to-blue-600 flex items-center justify-center">
          <div className="absolute inset-0">
            <img
              src="https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=1920&q=80"
              alt="Moda Niños"
              className="w-full h-full object-cover opacity-30"
            />
            <div className="absolute inset-0 bg-black/30"></div>
          </div>
          
          <div className="relative z-10 text-center text-white">
            <h1 className="text-5xl md:text-6xl font-bold mb-4">
              {getTitle()}
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
              {type ? `Descubre nuestra colección de ${getTitle().toLowerCase()}` : 'Comodidad y diversión en cada prenda para los más pequeños'}
            </p>
          </div>
        </section>

        {/* Products Section */}
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
                {type ? `${getTitle()} para Niños` : 'Colección Niños'}
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                {filteredProducts.length} {filteredProducts.length === 1 ? 'producto encontrado' : 'productos encontrados'}
              </p>
            </motion.div>

            {filteredProducts.length === 0 ? (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-center py-16 bg-white rounded-lg"
              >
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                  No se encontraron productos
                </h3>
                <p className="text-gray-600">
                  Intenta con otra categoría o explora toda la colección
                </p>
              </motion.div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {filteredProducts.map((product, index) => (
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
            )}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Ninos;