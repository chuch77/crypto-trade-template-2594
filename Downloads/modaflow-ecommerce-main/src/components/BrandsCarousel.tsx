import { motion } from 'framer-motion';

const BrandsCarousel = () => {
  const brands = [
    { name: 'Cklass', logo: 'https://via.placeholder.com/120x60/000000/FFFFFF?text=CKLASS' },
    { name: 'Tommy Hilfiger', logo: 'https://via.placeholder.com/120x60/C8102E/FFFFFF?text=TOMMY' },
    { name: "Levi's", logo: 'https://via.placeholder.com/120x60/FF0000/FFFFFF?text=LEVIS' },
    { name: 'Andrea', logo: 'https://via.placeholder.com/120x60/E91E63/FFFFFF?text=ANDREA' },
    { name: 'André Badi', logo: 'https://via.placeholder.com/120x60/2196F3/FFFFFF?text=ANDRE' },
    { name: 'Ilusión', logo: 'https://via.placeholder.com/120x60/9C27B0/FFFFFF?text=ILUSION' },
    { name: 'Calvin Klein', logo: 'https://via.placeholder.com/120x60/000000/FFFFFF?text=CK' },
    { name: 'Old Navy', logo: 'https://via.placeholder.com/120x60/003366/FFFFFF?text=OLD+NAVY' },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Nuestras Marcas
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Trabajamos con las mejores marcas de moda para ofrecerte calidad y estilo
          </p>
        </motion.div>

        {/* Brands Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-8 items-center">
          {brands.map((brand, index) => (
            <motion.div
              key={brand.name}
              className="flex flex-col items-center group cursor-pointer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="w-16 h-16 bg-white rounded-2xl shadow-sm border border-gray-200 flex items-center justify-center mb-3 group-hover:shadow-md transition-shadow">
                <img
                  src={brand.logo}
                  alt={brand.name}
                  className="w-12 h-6 object-contain"
                />
              </div>
              <span className="text-sm font-medium text-gray-700 text-center">
                {brand.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandsCarousel;