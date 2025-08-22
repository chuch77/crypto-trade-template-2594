import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  content: string;
  avatar: string;
  rating: number;
}

interface TestimonialsBlockProps {
  variant?: "grid" | "carousel" | "simple";
  title?: string;
  subtitle?: string;
}

const TestimonialsBlock = ({ 
  variant = "grid", 
  title = "Lo que dicen nuestros clientes", 
  subtitle = "Descubre por qué nuestros clientes confían en nosotros" 
}: TestimonialsBlockProps) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "María García",
      role: "Directora de Marketing",
      company: "Tech Solutions",
      content: "Este producto ha transformado completamente nuestra forma de trabajar. La interfaz es intuitiva y el soporte al cliente es excepcional. Definitivamente lo recomendaría a cualquier empresa que busque mejorar su eficiencia.",
      avatar: "https://i.pravatar.cc/150?img=1",
      rating: 5
    },
    {
      id: 2,
      name: "Carlos Rodríguez",
      role: "CEO",
      company: "Innovate Inc.",
      content: "Después de probar varias soluciones, finalmente encontramos una que cumple con todas nuestras necesidades. El equipo detrás de este producto realmente entiende lo que los clientes necesitan.",
      avatar: "https://i.pravatar.cc/150?img=2",
      rating: 4
    },
    {
      id: 3,
      name: "Laura Martínez",
      role: "Diseñadora UX",
      company: "Creative Studio",
      content: "Como diseñadora, valoro mucho las herramientas que son tanto funcionales como estéticamente agradables. Este producto cumple ambos criterios perfectamente. Ha mejorado significativamente mi flujo de trabajo.",
      avatar: "https://i.pravatar.cc/150?img=3",
      rating: 5
    },
    {
      id: 4,
      name: "Javier López",
      role: "Desarrollador Senior",
      company: "CodeMasters",
      content: "La API es robusta y bien documentada, lo que hace que la integración sea muy sencilla. Además, el rendimiento es excepcional incluso con grandes volúmenes de datos.",
      avatar: "https://i.pravatar.cc/150?img=4",
      rating: 5
    },
    {
      id: 5,
      name: "Ana Sánchez",
      role: "Gerente de Proyectos",
      company: "Project Pro",
      content: "Hemos reducido nuestro tiempo de entrega en un 40% desde que empezamos a usar este producto. La capacidad de colaboración en tiempo real ha sido un cambio radical para nuestro equipo.",
      avatar: "https://i.pravatar.cc/150?img=5",
      rating: 4
    }
  ];
  
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };
  
  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };
  
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star 
        key={index} 
        className={`h-4 w-4 ${index < rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`} 
      />
    ));
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl font-bold mb-4">{title}</h2>
          <p className="text-gray-600">{subtitle}</p>
        </div>
        
        {variant === "grid" && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <Card key={testimonial.id} className="border border-gray-200">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    {renderStars(testimonial.rating)}
                  </div>
                  <p className="text-gray-700 mb-6">"{testimonial.content}"</p>
                  <div className="flex items-center">
                    <Avatar className="h-10 w-10 mr-4">
                      <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                      <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div>
                      <h4 className="font-medium">{testimonial.name}</h4>
                      <p className="text-sm text-gray-500">{testimonial.role}, {testimonial.company}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
        
        {variant === "carousel" && (
          <div className="relative max-w-4xl mx-auto">
            <div className="overflow-hidden">
              <div 
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {testimonials.map((testimonial) => (
                  <div key={testimonial.id} className="w-full flex-shrink-0 px-4">
                    <Card className="border border-gray-200">
                      <CardContent className="p-8">
                        <div className="flex items-center mb-4">
                          {renderStars(testimonial.rating)}
                        </div>
                        <p className="text-gray-700 text-lg mb-8">"{testimonial.content}"</p>
                        <div className="flex items-center">
                          <Avatar className="h-12 w-12 mr-4">
                            <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                            <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                          </Avatar>
                          <div>
                            <h4 className="font-medium text-lg">{testimonial.name}</h4>
                            <p className="text-gray-500">{testimonial.role}, {testimonial.company}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                ))}
              </div>
            </div>
            
            <button 
              onClick={prevSlide}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white p-2 rounded-full shadow-md z-10 hover:bg-gray-100"
              aria-label="Anterior"
            >
              <ChevronLeft className="h-5 w-5 text-gray-600" />
            </button>
            
            <button 
              onClick={nextSlide}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white p-2 rounded-full shadow-md z-10 hover:bg-gray-100"
              aria-label="Siguiente"
            >
              <ChevronRight className="h-5 w-5 text-gray-600" />
            </button>
            
            <div className="flex justify-center mt-6 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-2 h-2 rounded-full transition-all ${currentSlide === index ? 'bg-primary w-4' : 'bg-gray-300'}`}
                  aria-label={`Ir al testimonio ${index + 1}`}
                />
              ))}
            </div>
          </div>
        )}
        
        {variant === "simple" && (
          <div className="max-w-3xl mx-auto">
            <Card className="border border-gray-200">
              <CardContent className="p-8 text-center">
                <div className="flex justify-center mb-4">
                  {renderStars(testimonials[currentSlide].rating)}
                </div>
                <p className="text-gray-700 text-lg mb-8 italic">"{testimonials[currentSlide].content}"</p>
                <Avatar className="h-16 w-16 mx-auto mb-4">
                  <AvatarImage src={testimonials[currentSlide].avatar} alt={testimonials[currentSlide].name} />
                  <AvatarFallback>{testimonials[currentSlide].name.charAt(0)}</AvatarFallback>
                </Avatar>
                <h4 className="font-medium text-lg">{testimonials[currentSlide].name}</h4>
                <p className="text-gray-500">{testimonials[currentSlide].role}, {testimonials[currentSlide].company}</p>
                
                <div className="flex justify-center mt-8 space-x-4">
                  <button 
                    onClick={prevSlide}
                    className="p-2 rounded-full hover:bg-gray-100"
                    aria-label="Anterior"
                  >
                    <ChevronLeft className="h-5 w-5 text-gray-600" />
                  </button>
                  
                  <button 
                    onClick={nextSlide}
                    className="p-2 rounded-full hover:bg-gray-100"
                    aria-label="Siguiente"
                  >
                    <ChevronRight className="h-5 w-5 text-gray-600" />
                  </button>
                </div>
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </section>
  );
};

export default TestimonialsBlock;