import { useSearchParams } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ProductCard from '@/components/ProductCard';
import { useProducts } from '@/hooks/useProducts';
import { useWishlist } from '@/hooks/useWishlist';
import { useCart } from '@/hooks/useCart';
import { motion } from 'framer-motion';

const Mujer = () => {
  const [searchParams] = useSearchParams();
  const { products, loading } = useProducts();
  const { toggleWishlist, isInWishlist } = useWishlist();
  const { addToCart } = useCart();
  
  const type = searchParams.get('type');
  
  let filteredProducts = products;
  
  const getTitle = () => {
    if (type) {
      const typeNames: { [key: string]: string } = {
        'vestidos': 'Vestidos',
        'blusas': 'Blusas',
        'faldas': 'Faldas', 
        'jeans': 'Jeans',
        'chaquetas': 'Chaquetas',
        'zapatos': 'Zapatos',
        'bolsas': 'Bolsas',
        'accesorios': 'Accesorios'
      };
      return typeNames[type] || type.charAt(0).toUpperCase() + type.slice(1);
    }
    return 'Mujer';
  };

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
        <section className="relative h-[50vh] sm:h-[60vh] lg:h-[70vh] bg-gradient-to-r from-rose-400 to-pink-500 flex items-center justify-center">
          <div className="absolute inset-0">
            <img
              src="https://images.unsplash.com/photo-1483985988355-763728e1935b?w=1920&q=80"
              alt="Moda Mujer"
              className="w-full h-full object-cover opacity-40"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/30 to-transparent"></div>
          </div>
          
          <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-tight">
              {getTitle()}
            </h1>
            <p className="text-base sm:text-lg md:text-xl mb-6 sm:mb-8 max-w-2xl mx-auto opacity-90">
              {type ? `Descubre nuestra exclusiva colección de ${getTitle().toLowerCase()}` : 'Descubre tu estilo único con nuestra colección femenina'}
            </p>
          </div>
        </section>

        {/* Brands Section - Solo para vestidos */}
        {type === 'vestidos' && (
          <section className="py-16 bg-white">
            <div className="container mx-auto px-4">
              <motion.div 
                className="text-center mb-12"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-8">
                  Marcas Destacadas
                </h2>
              </motion.div>
              
              <div className="grid grid-cols-4 md:grid-cols-8 gap-4">
                {[
                  { name: 'Cklass', logo: 'https://via.placeholder.com/80x80/f3f4f6/374151?text=Cklass' },
                  { name: 'Tommy Hilfiger', logo: 'https://via.placeholder.com/80x80/f3f4f6/374151?text=TH' },
                  { name: "Levi's", logo: 'https://via.placeholder.com/80x80/f3f4f6/374151?text=Levis' },
                  { name: 'Andrea', logo: 'https://via.placeholder.com/80x80/f3f4f6/374151?text=Andrea' },
                  { name: 'André Badi', logo: 'https://via.placeholder.com/80x80/f3f4f6/374151?text=AB' },
                  { name: 'Ilusión', logo: 'https://via.placeholder.com/80x80/f3f4f6/374151?text=Ilusion' },
                  { name: 'Calvin Klein', logo: 'https://via.placeholder.com/80x80/f3f4f6/374151?text=CK' },
                  { name: 'Old Navy', logo: 'https://via.placeholder.com/80x80/f3f4f6/374151?text=ON' }
                ].map((brand, index) => (
                  <motion.div
                    key={brand.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-white rounded-full w-20 h-20 flex items-center justify-center shadow-md hover:shadow-lg transition-all cursor-pointer group border"
                  >
                    <img 
                      src={brand.logo} 
                      alt={brand.name}
                      className="w-12 h-12 object-contain group-hover:scale-110 transition-transform"
                    />
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Products Section */}
        <section className="py-10 sm:py-16 lg:py-20">
          <div className="container mx-auto px-4">
            <motion.div 
              className="text-center mb-8 sm:mb-12 lg:mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
                {type ? `${getTitle()} para Mujer` : 'Colección Mujer'}
              </h2>
              <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
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

export default Mujer;