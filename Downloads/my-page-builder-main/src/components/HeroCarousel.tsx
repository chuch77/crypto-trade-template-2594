import { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
// Importación directa de imágenes
import iphoneHero from '../assets/iphone-hero.jpg';
import iphoneProduct from '../assets/iphone-product.jpg';
import macbookProduct from '../assets/macbook-product.jpg';
import headphonesProduct from '../assets/headphones-product.jpg';

interface HeroProduct {
  id: number;
  title: string;
  description: string;
  price: string;
  originalPrice: string;
  discount: string;
  image: any;
  bgColor: string;
}

const HeroCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  
  const heroProducts: HeroProduct[] = [
    {
      id: 1,
      title: 'iPhone 15 Pro',
      description: 'El smartphone más avanzado con chip A17 Pro y cámara de 48MP',
      price: '$999',
      originalPrice: '$1099',
      discount: '10%',
      image: iphoneHero,
      bgColor: 'from-blue-900 to-blue-700'
    },
    {
      id: 2,
      title: 'MacBook Air M2',
      description: 'Potencia y portabilidad en un diseño ultradelgado',
      price: '$999',
      originalPrice: '$1199',
      discount: '17%',
      image: macbookProduct,
      bgColor: 'from-blue-800 to-blue-600'
    },
    {
      id: 3,
      title: 'AirPods Pro',
      description: 'Cancelación de ruido y sonido espacial para una experiencia inmersiva',
      price: '$199',
      originalPrice: '$249',
      discount: '20%',
      image: headphonesProduct,
      bgColor: 'from-blue-700 to-blue-500'
    },
    {
      id: 4,
      title: 'iPad Air',
      description: 'Potencia, versatilidad y portabilidad en un dispositivo increíble',
      price: '$499',
      originalPrice: '$599',
      discount: '15%',
      image: iphoneProduct,
      bgColor: 'from-blue-600 to-blue-400'
    },
    {
      id: 5,
      title: 'Apple Watch Series 9',
      description: 'Monitorea tu salud y mantente conectado con el reloj más avanzado',
      price: '$349',
      originalPrice: '$399',
      discount: '12%',
      image: headphonesProduct,
      bgColor: 'from-blue-500 to-blue-300'
    }
  ];

  const goToNext = useCallback(() => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setCurrentIndex((prevIndex) => (prevIndex + 1) % heroProducts.length);
      setTimeout(() => setIsTransitioning(false), 500);
    }
  }, [isTransitioning, heroProducts.length]);

  const goToPrev = useCallback(() => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setCurrentIndex((prevIndex) => (prevIndex - 1 + heroProducts.length) % heroProducts.length);
      setTimeout(() => setIsTransitioning(false), 500);
    }
  }, [isTransitioning, heroProducts.length]);

  useEffect(() => {
    const interval = setInterval(() => {
      goToNext();
    }, 5000);
    
    return () => clearInterval(interval);
  }, [goToNext]);

  return (
    <section className="hero-carousel">
      {heroProducts.map((product, index) => (
        <div 
          key={product.id} 
          className={`carousel-slide ${index === currentIndex ? 'active' : ''}`}
        >
          <div className={`bg-gradient-to-r ${product.bgColor} text-white py-16 lg:py-24 relative overflow-hidden`}>
            <div className="container mx-auto px-4">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                {/* Text Content */}
                <div className="product-content space-y-6 z-10">
                  <div className="discount-badge">
                    OFERTA ESPECIAL | {product.discount} DESCUENTO
                  </div>
                  <div className="price-container bg-white/20 inline-block px-6 py-4 rounded-lg shadow-lg">
                    <span className="current-price text-white text-4xl font-bold">{product.price}</span>
                    <span className="original-price text-white/70 text-2xl ml-4 line-through">{product.originalPrice}</span>
                    <span className="discount-pill ml-4 bg-white text-primary px-3 py-1.5 text-base font-bold rounded-full">-{product.discount}</span>
                  </div>
                </div>

                {/* Hero Image */}
                <div className="relative">
                  <div className="product-image relative z-10">
                    <div className="bg-white/20 backdrop-blur-sm p-8 rounded-2xl">
                      <img 
                        src={product.image} 
                        alt={product.title}
                        className="w-full max-w-md mx-auto drop-shadow-2xl object-contain h-[400px]"
                        style={{display: 'block'}}
                      />
                    </div>
                    <div className="absolute -bottom-4 -right-4 bg-white text-primary text-lg font-bold p-4 rounded-full shadow-lg transform rotate-12">
                      ¡{product.discount} OFF!
                    </div>
                  </div>
                  {/* Glow effect */}
                  <div className="absolute inset-0 bg-gradient-radial from-white/20 via-transparent to-transparent blur-3xl"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
      
      {/* Carousel Controls */}
      <div className="carousel-indicators">
        {heroProducts.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`indicator ${index === currentIndex ? 'active' : ''}`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
      
      {/* Navigation Arrows */}
      <button 
        className="carousel-arrow prev"
        onClick={goToPrev}
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      <button 
        className="carousel-arrow next"
        onClick={goToNext}
        aria-label="Next slide"
      >
        <ChevronRight className="h-6 w-6" />
      </button>
    </section>
  );
};

export default HeroCarousel;