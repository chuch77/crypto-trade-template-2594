import { useState, useEffect, useRef } from "react";
import { Smartphone, Headphones, Gamepad2, Laptop, Monitor, Watch, Tablet, Camera, Speaker, ChevronLeft, ChevronRight } from "lucide-react";

const Categories = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);
  
  const categories = [
    {
      id: 1,
      name: "Smartphones",
      icon: Smartphone,
      color: "text-primary"
    },
    {
      id: 2,
      name: "Laptops",
      icon: Laptop,
      color: "text-primary"
    },
    {
      id: 3,
      name: "Tablets",
      icon: Tablet,
      color: "text-primary"
    },
    {
      id: 4,
      name: "Audio",
      icon: Headphones,
      color: "text-primary"
    },
    {
      id: 5,
      name: "Monitores",
      icon: Monitor,
      color: "text-primary"
    },
    {
      id: 6,
      name: "Accesorios",
      icon: Gamepad2,
      color: "text-primary"
    },
    {
      id: 7,
      name: "Smartwatches",
      icon: Watch,
      color: "text-primary"
    },
    {
      id: 8,
      name: "Cámaras",
      icon: Camera,
      color: "text-primary"
    },
    {
      id: 9,
      name: "Altavoces",
      icon: Speaker,
      color: "text-primary"
    }
  ];
  
  // Determinar cuántos items mostrar por slide según el tamaño de pantalla
  const getItemsPerView = () => {
    if (typeof window !== 'undefined') {
      if (window.innerWidth >= 1024) return 6; // desktop
      if (window.innerWidth >= 640) return 3; // tablet
      return 2; // mobile
    }
    return 2; // default para SSR
  };
  
  const totalSlides = Math.ceil(categories.length / getItemsPerView());
  
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
    <section className="py-12 bg-background">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-bold">Categorías populares</h2>
          <a href="#" className="text-primary hover:underline font-medium">Ver todas</a>
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
                {categories
                  .slice(
                    slideIndex * getItemsPerView(),
                    (slideIndex + 1) * getItemsPerView()
                  )
                  .map((category) => {
                    const IconComponent = category.icon;
                    return (
                      <a 
                        href="#"
                        key={category.id}
                        className="w-1/2 sm:w-1/3 lg:w-1/6 p-2 flex flex-col items-center"
                      >
                        <div className="w-full p-4 bg-white rounded-lg border border-border hover:shadow-md transition-all duration-300 cursor-pointer group flex flex-col items-center">
                          <div className="mb-3 p-3 bg-primary/10 rounded-full group-hover:bg-primary/20 transition-colors">
                            <IconComponent className={`h-6 w-6 ${category.color}`} />
                          </div>
                          <h3 className="text-sm font-medium text-center">{category.name}</h3>
                        </div>
                      </a>
                    );
                  })
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
          <div className="flex justify-center mt-4 space-x-2">
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

export default Categories;