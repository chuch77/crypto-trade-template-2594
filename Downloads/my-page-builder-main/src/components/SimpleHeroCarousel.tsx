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
    <div className={`relative bg-gradient-to-r ${products[currentIndex].bgColor} py-16 transition-colors duration-500`}>
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          {/* Price Section */}
          <div className="mb-8 md:mb-0 text-white text-center md:text-left">
            <div className="inline-block bg-white/20 px-4 py-2 rounded-full mb-4 backdrop-blur-sm">
              <span className="font-bold">OFERTA ESPECIAL | {products[currentIndex].discount} OFF</span>
            </div>
            <div className="bg-white/20 p-6 rounded-xl shadow-lg inline-block backdrop-blur-sm">
              <span className="text-5xl font-bold block mb-2">{products[currentIndex].price}</span>
              <span className="text-2xl line-through text-white/70">{products[currentIndex].originalPrice}</span>
            </div>
          </div>
          
          {/* Image Section */}
          <div className="relative">
            <div className="bg-white/20 p-8 rounded-2xl backdrop-blur-sm shadow-xl">
              <img 
                src={products[currentIndex].image} 
                alt={`Product ${currentIndex + 1}`}
                className="max-w-full md:max-w-lg mx-auto object-contain h-[350px] drop-shadow-2xl"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 bg-white text-blue-700 text-lg font-bold p-4 rounded-full shadow-lg transform rotate-12 animate-pulse">
              ¡{products[currentIndex].discount} OFF!
            </div>
          </div>
        </div>
        
        {/* Controls */}
        <div className="flex justify-center mt-8 space-x-2">
          {products.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex ? 'bg-white w-8' : 'bg-white/50'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
        
        {/* Navigation Arrows */}
        <button 
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/10 hover:bg-white/20 rounded-full p-3 transition-colors"
          onClick={goToPrev}
          aria-label="Previous slide"
        >
          <ChevronLeft className="h-6 w-6 text-white" />
        </button>
        <button 
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/10 hover:bg-white/20 rounded-full p-3 transition-colors"
          onClick={goToNext}
          aria-label="Next slide"
        >
          <ChevronRight className="h-6 w-6 text-white" />
        </button>
      </div>
    </div>
  );
};

export default SimpleHeroCarousel;