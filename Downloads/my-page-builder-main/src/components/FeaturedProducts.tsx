import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Star, ShoppingCart, Heart, ChevronLeft, ChevronRight } from "lucide-react";
import iphoneProduct from "@/assets/iphone-product.jpg";
import macbookProduct from "@/assets/macbook-product.jpg";
import headphonesProduct from "@/assets/headphones-product.jpg";
import { useCart } from "@/context/CartContext";

interface FeaturedProductsProps {
  compact?: boolean;
}

const FeaturedProducts = ({ compact = false }: FeaturedProductsProps) => {
  const { addToCart } = useCart();
  const [currentSlide, setCurrentSlide] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);
  
  // Determinar cuántos productos mostrar por slide según el tamaño de pantalla y modo
  const getItemsPerView = () => {
    if (compact) {
      return 1; // En modo compacto, mostrar 1 producto por slide
    }
    
    if (typeof window !== 'undefined') {
      if (window.innerWidth >= 1024) return 4; // desktop
      if (window.innerWidth >= 768) return 3; // tablet
      if (window.innerWidth >= 640) return 2; // small tablet
      return 1; // mobile
    }
    return 1; // default para SSR
  };
  
  // En modo compacto, mostrar solo 3 productos
  const allProducts = [
    {
      id: 1,
      name: "iPhone 15 Pro",
      price: "$999.00",
      originalPrice: "$1099.00",
      image: iphoneProduct,
      rating: 5,
      discount: "10%",
      isNew: true
    },
    {
      id: 2,
      name: "MacBook Air M2",
      price: "$1195.00",
      image: macbookProduct,
      rating: 5,
      isNew: false
    },
    {
      id: 3,
      name: "Smart Speaker",
      price: "$95.00",
      image: headphonesProduct,
      rating: 4,
      isNew: true
    },
    {
      id: 4,
      name: "iPad Air",
      price: "$599.00",
      originalPrice: "$699.00",
      image: iphoneProduct,
      rating: 5,
      discount: "15%",
      isNew: false
    },
    {
      id: 5,
      name: "AirPods Pro",
      price: "$249.00",
      image: headphonesProduct,
      rating: 5,
      isNew: false
    },
    {
      id: 6,
      name: "Apple Watch Series 9",
      price: "$399.00",
      originalPrice: "$429.00",
      image: macbookProduct,
      rating: 4,
      discount: "7%",
      isNew: true
    }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star 
        key={index} 
        className={`h-4 w-4 ${index < rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`} 
      />
    ));
  };
  
  // Función para manejar la adición al carrito
  const handleAddToCart = (product: any) => {
    addToCart(product);
  };
  
  // Filtrar productos según el modo
  const products = compact ? allProducts.slice(0, 3) : allProducts;
  
  const itemsPerView = getItemsPerView();
  const totalSlides = Math.ceil(products.length / itemsPerView);
  
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };
  
  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };
  
  // Efecto para el carrusel automático
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);
  
  // Efecto para mover el carrusel cuando cambia el slide actual
  useEffect(() => {
    if (carouselRef.current) {
      const translateValue = -currentSlide * (100 / totalSlides);
      carouselRef.current.style.transform = `translateX(${translateValue}%)`;
    }
  }, [currentSlide, totalSlides]);

  return (
    <section className={compact ? '' : 'py-12 bg-background'}>
      <div className={compact ? '' : 'container mx-auto px-4'}>
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">Productos destacados</h2>
          <a href="#" className="text-primary hover:underline font-medium">Ver todos</a>
        </div>
        
        <div className="relative overflow-hidden">
          <div 
            ref={carouselRef}
            className="flex transition-transform duration-500 ease-in-out"
            style={{ width: `${totalSlides * 100}%` }}
          >
            {Array.from({ length: totalSlides }).map((_, slideIndex) => (
              <div 
                key={slideIndex} 
                className="flex flex-wrap"
                style={{ width: `${100 / totalSlides}%` }}
              >
                {products
                  .slice(
                    slideIndex * itemsPerView,
                    (slideIndex + 1) * itemsPerView
                  )
                  .map((product) => (
                    <div 
                      key={product.id} 
                      className={compact ? 'w-full p-2' : `w-full ${itemsPerView > 1 ? 
                        `sm:w-1/2 ${itemsPerView > 2 ? 
                          `md:w-1/3 ${itemsPerView > 3 ? 'lg:w-1/4' : ''}` : ''}` : ''} p-3`}
                    >
                      <Card className="group hover:shadow-lg transition-all duration-300 border border-border overflow-hidden h-full">
                        <CardContent className="p-0">
                          <div className="relative">
                            <div className={`${compact ? 'aspect-[4/3]' : 'aspect-square'} overflow-hidden bg-white`}>
                              <img 
                                src={product.image} 
                                alt={product.name}
                                className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300 p-4"
                              />
                            </div>
                            
                            {product.discount && (
                              <div className="absolute top-2 left-2 bg-primary text-white text-xs font-bold px-2 py-1 rounded">
                                -{product.discount}
                              </div>
                            )}
                            
                            {product.isNew && (
                              <div className="absolute top-2 right-2 bg-blue-500 text-white text-xs font-bold px-2 py-1 rounded">
                                NUEVO
                              </div>
                            )}
                            
                            <button className="absolute top-2 right-2 bg-white rounded-full p-1.5 shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                              <Heart className="h-4 w-4 text-gray-600 hover:text-primary" />
                            </button>
                          </div>
                          
                          <div className="p-4">
                            <div className="flex items-center mb-1">
                              {renderStars(product.rating)}
                              <span className="text-xs text-gray-500 ml-1">({product.rating}.0)</span>
                            </div>
                            
                            <h3 className="text-sm font-medium mb-2 line-clamp-2 h-10">{product.name}</h3>
                            
                            <div className="flex items-center justify-between mb-3">
                              <div className="flex items-center space-x-2">
                                <span className="text-lg font-bold text-primary">{product.price}</span>
                                {product.originalPrice && (
                                  <span className="text-sm text-gray-500 line-through">{product.originalPrice}</span>
                                )}
                              </div>
                            </div>
                            
                            <Button 
                              className="w-full flex items-center justify-center gap-2" 
                              variant="default"
                              onClick={() => handleAddToCart(product)}
                            >
                              <ShoppingCart className="h-4 w-4" />
                              Agregar
                            </Button>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  ))
                }
              </div>
            ))}
          </div>
          
          {/* Controles del carrusel */}
          <button 
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-md z-10 hover:bg-gray-100"
            aria-label="Anterior"
          >
            <ChevronLeft className="h-5 w-5 text-gray-600" />
          </button>
          
          <button 
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-md z-10 hover:bg-gray-100"
            aria-label="Siguiente"
          >
            <ChevronRight className="h-5 w-5 text-gray-600" />
          </button>
          
          {/* Indicadores */}
          <div className="flex justify-center mt-6 space-x-2">
            {Array.from({ length: totalSlides }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-2 h-2 rounded-full transition-all ${currentSlide === index ? 'bg-primary w-4' : 'bg-gray-300'}`}
                aria-label={`Ir al slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;