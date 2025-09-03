import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="relative min-h-[85vh]">
      <div className="absolute inset-0">
        <img 
          src="https://images.unsplash.com/photo-1445205170230-053b83016050?w=1200&q=80" 
          alt="Colección de moda – ModaFlow" 
          className="w-full h-full object-cover" 
        />
        <div className="absolute inset-0 bg-gradient-to-tr from-black/40 via-black/20 to-transparent" />
      </div>

      <div className="relative z-10 container mx-auto px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block bg-white/80 text-gray-900 text-xs font-semibold px-3 py-1 rounded-full">
            Nueva temporada
          </span>

          <h1 className="mt-4 text-4xl md:text-5xl font-bold text-white max-w-xl leading-tight">
            Estilo que marca la diferencia
          </h1>

          <p className="mt-4 text-white/90 max-w-md">
            Prendas premium para todos. Envío gratis +$999.
          </p>

          <div className="mt-8 flex gap-3">
            <Link 
              to="/productos"
              className="bg-[hsl(var(--brand))] hover:bg-[hsl(var(--brand-600))] text-white px-6 py-3 rounded-xl transition-colors"
            >
              Comprar ahora
            </Link>
            <Link 
              to="/novedades"
              className="bg-white/90 text-gray-900 px-6 py-3 rounded-xl hover:bg-white transition-colors"
            >
              Ver colección
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;