import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
// Importación directa de imágenes
import iphoneHero from '../assets/iphone-hero.jpg';
import iphoneProduct from '../assets/iphone-product.jpg';
import macbookProduct from '../assets/macbook-product.jpg';
import headphonesProduct from '../assets/headphones-product.jpg';

const SimpleHeroCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const products = [
    {
      id: 1,
      price: '$999',
      originalPrice: '$1099',
      discount: '10%',
      image: iphoneHero,
      bgColor: 'from-blue-900 to-blue-700'
    },
    {
      id: 2,
      price: '$999',
      originalPrice: '$1199',
      discount: '17%',
      image: macbookProduct,
      bgColor: 'from-blue-800 to-blue-600'
    },
    {
      id: 3,
      price: '$199',
      originalPrice: '$249',
      discount: '20%',
      image: headphonesProduct,
      bgColor: 'from-blue-700 to-blue-500'
    },
    {
      id: 4,
      price: '$499',
      originalPrice: '$599',
      discount: '15%',
      image: iphoneProduct,
      bgColor: 'from-blue-600 to-blue-400'
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % products.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [products.length]);

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % products.length);
  };

  const goToPrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + products.length) % products.length);
  };

  return (
    <div className={`relative bg-gradient-to-r ${products[currentIndex].bgColor} py-8 md:py-16 transition-colors duration-500 min-h-[500px] md:min-h-[600px]`}>
      <div className="container mx-auto px-4 h-full">
        <div className="flex flex-col md:flex-row items-center justify-between h-full">
          {/* Price Section */}
          <div className="mb-6 md:mb-0 text-white text-center md:text-left order-2 md:order-1">
            <div className="inline-block bg-white/20 px-3 py-1 md:px-4 md:py-2 rounded-full mb-3 md:mb-4 backdrop-blur-sm">
              <span className="font-bold text-sm md:text-base">OFERTA ESPECIAL | {products[currentIndex].discount} OFF</span>
            </div>
            <div className="bg-white/20 p-4 md:p-6 rounded-xl shadow-lg inline-block backdrop-blur-sm">
              <span className="text-3xl md:text-5xl font-bold block mb-1 md:mb-2">{products[currentIndex].price}</span>
              <span className="text-lg md:text-2xl line-through text-white/70">{products[currentIndex].originalPrice}</span>
            </div>
          </div>
          
          {/* Image Section */}
          <div className="relative order-1 md:order-2 mb-4 md:mb-0">
            <div className="bg-white/20 p-4 md:p-8 rounded-2xl backdrop-blur-sm shadow-xl">
              <img 
                src={products[currentIndex].image} 
                alt={`Product ${currentIndex + 1}`}
                className="w-full max-w-[250px] md:max-w-lg mx-auto object-contain h-[200px] md:h-[350px] drop-shadow-2xl"
              />
            </div>
            <div className="absolute -bottom-2 -right-2 md:-bottom-4 md:-right-4 bg-white text-blue-700 text-sm md:text-lg font-bold p-2 md:p-4 rounded-full shadow-lg transform rotate-12 animate-pulse">
              ¡{products[currentIndex].discount} OFF!
            </div>
          </div>
        </div>
        
        {/* Controls */}
        <div className="flex justify-center mt-6 md:mt-8 space-x-2">
          {products.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-all duration-300 ${
                index === currentIndex ? 'bg-white w-6 md:w-8' : 'bg-white/50'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
        
        {/* Navigation Arrows */}
        <button 
          className="absolute left-2 md:left-4 top-1/2 transform -translate-y-1/2 bg-white/10 hover:bg-white/20 rounded-full p-2 md:p-3 transition-colors touch-manipulation"
          onClick={goToPrev}
          aria-label="Previous slide"
        >
          <ChevronLeft className="h-4 w-4 md:h-6 md:w-6 text-white" />
        </button>
        <button 
          className="absolute right-2 md:right-4 top-1/2 transform -translate-y-1/2 bg-white/10 hover:bg-white/20 rounded-full p-2 md:p-3 transition-colors touch-manipulation"
          onClick={goToNext}
          aria-label="Next slide"
        >
          <ChevronRight className="h-4 w-4 md:h-6 md:w-6 text-white" />
        </button>
      </div>
    </div>
  );
};

export default SimpleHeroCarousel;