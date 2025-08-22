import { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface Offer {
  id: number;
  title: string;
  description: string;
  price: string;
  originalPrice?: string;
  discount?: string;
  badgeText: string;
  image?: string;
}

const OffersCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);
  
  const offers: Offer[] = [
    {
      id: 1,
      title: "iPhone 15 Pro",
      description: "Ahorra $100 en el nuevo iPhone 15 Pro con cualquier plan",
      price: "$999",
      originalPrice: "$1099",
      discount: "10%",
      badgeText: "OFERTA ESPECIAL",
      image: "/src/assets/iphone-product.jpg"
    },
    {
      id: 2,
      title: "MacBook Air M2",
      description: "Llévate un MacBook Air con 20% de descuento",
      price: "$999",
      originalPrice: "$1199",
      discount: "20%",
      badgeText: "DESCUENTO",
      image: "/src/assets/macbook-product.jpg"
    },
    {
      id: 3,
      title: "AirPods Pro",
      description: "Compra unos AirPods Pro y llévate un estuche gratis",
      price: "$249",
      badgeText: "REGALO",
      image: "/src/assets/headphones-product.jpg"
    },
    {
      id: 4,
      title: "iPad Air",
      description: "Descuento de estudiante en iPad Air",
      price: "$499",
      originalPrice: "$599",
      discount: "15%",
      badgeText: "ESTUDIANTES",
      image: "/src/assets/iphone-product.jpg"
    },
    {
      id: 5,
      title: "Apple Watch",
      description: "Compra un Apple Watch y obtén 3 meses de Fitness+ gratis",
      price: "$399",
      badgeText: "PROMOCIÓN",
      image: "/src/assets/headphones-product.jpg"
    }
  ];

  const totalSlides = Math.ceil(offers.length / 3);
  
  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : totalSlides - 1));
  };
  
  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex < totalSlides - 1 ? prevIndex + 1 : 0));
  };
  
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };
  
  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };
  
  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 75) {
      handleNext();
    }
    
    if (touchStart - touchEnd < -75) {
      handlePrev();
    }
  };
  
  useEffect(() => {
    if (carouselRef.current) {
      const translateValue = currentIndex * 100;
      carouselRef.current.style.transform = `translateX(-${translateValue}%)`;
    }
  }, [currentIndex]);

  return (
    <div className="offers-carousel">
      <div 
        className="carousel-container"
        ref={carouselRef}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {offers.map((offer) => (
          <div key={offer.id} className="carousel-item p-2">
            <div className="offer-card">
              <span className="offer-badge">{offer.badgeText}</span>
              {offer.image && (
                <div className="offer-image mb-3">
                  <img src={offer.image} alt={offer.title} className="w-full h-40 object-contain" />
                </div>
              )}
              <h3 className="offer-title">{offer.title}</h3>
              <div className="offer-price">
                {offer.price}
                {offer.originalPrice && (
                  <span className="original-price">{offer.originalPrice}</span>
                )}
              </div>
              <p className="offer-description">{offer.description}</p>
              <button className="offer-button">Ver oferta</button>
            </div>
          </div>
        ))}
      </div>
      
      <div className="carousel-controls">
        <button 
          className="control-button" 
          onClick={handlePrev}
          aria-label="Anterior"
        >
          <ChevronLeft size={20} />
        </button>
        <button 
          className="control-button" 
          onClick={handleNext}
          aria-label="Siguiente"
        >
          <ChevronRight size={20} />
        </button>
      </div>
      
      <div className="carousel-indicators">
        {Array.from({ length: totalSlides }).map((_, index) => (
          <div 
            key={index} 
            className={`indicator ${currentIndex === index ? 'active' : ''}`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default OffersCarousel;