import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ProductGrid from '@/components/ProductGrid';
import { useProducts } from '@/hooks/useProducts';

const Hombre = () => {
  const { products, loading } = useProducts();
  const menProducts = products;

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
        <section className="relative h-[50vh] sm:h-[60vh] lg:h-[70vh] bg-gradient-to-r from-slate-800 to-gray-900 flex items-center justify-center">
          <div className="absolute inset-0">
            <img
              src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1920&q=80"
              alt="Moda Hombre"
              className="w-full h-full object-cover opacity-40"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent"></div>
          </div>
          
          <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-tight">
              Hombre
            </h1>
            <p className="text-base sm:text-lg md:text-xl mb-6 sm:mb-8 max-w-2xl mx-auto opacity-90">
              Descubre tu estilo con nuestra colección masculina de alta calidad
            </p>
          </div>
        </section>

        {/* Products Section */}
        <div className="container mx-auto px-4">
          <ProductGrid 
            products={menProducts} 
            title="Colección Hombre"
          />
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Hombre;