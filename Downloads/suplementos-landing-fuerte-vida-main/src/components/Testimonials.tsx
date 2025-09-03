import { Card } from "@/components/ui/card"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { Star } from "lucide-react"
import Autoplay from "embla-carousel-autoplay"

const Testimonials = () => {
  const testimonials = [
    {
      name: "Carlos Mendoza",
      role: "Entrenador Personal",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      text: "Los suplementos de GymSupps han transformado completamente mis entrenamientos. La proteína whey es increíble y mis clientes han visto resultados espectaculares."
    },
    {
      name: "María González",
      role: "Atleta Fitness",
      image: "https://images.unsplash.com/photo-1594736797933-d0501ba2fe65?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      text: "Llevo 6 meses usando el pre-workout y BCAA. Mi resistencia ha aumentado un 40% y la recuperación es mucho más rápida. ¡Totalmente recomendado!"
    },
    {
      name: "Roberto Silva",
      role: "Culturista",
      image: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      text: "La calidad es excepcional. He probado muchas marcas y esta es la única que realmente cumple lo que promete. Mis ganancias musculares son evidentes."
    },
    {
      name: "Ana Rodríguez",
      role: "Crossfit Athlete",
      image: "https://images.unsplash.com/photo-1550345332-09e3ac987658?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      text: "El pack completo fitness es perfecto para mi rutina de crossfit. Energía constante durante todo el WOD y recuperación súper rápida."
    },
    {
      name: "Diego Morales",
      role: "Powerlifter",
      image: "https://images.unsplash.com/photo-1605296867304-46d5465a13f1?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      text: "La creatina monohidrato es pura calidad. Mis marcas personales han mejorado significativamente desde que empecé a usarla hace 3 meses."
    },
    {
      name: "Laura Vásquez",
      role: "Fitness Influencer",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      text: "Como influencer he probado cientos de suplementos. GymSupps es la única marca que recomiendo a mi comunidad. Resultados reales garantizados."
    }
  ]

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gym-dark-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 sm:mb-12 lg:mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gym-text-light mb-4 sm:mb-6">
            Lo Que Dicen Nuestros
            <span className="bg-gradient-primary bg-clip-text text-transparent"> Atletas</span>
          </h2>
          <p className="text-lg sm:text-xl text-gym-text-muted max-w-3xl mx-auto px-4">
            Miles de atletas ya han transformado su rendimiento con nuestros suplementos.
          </p>
        </div>

        {/* Mobile: Single column grid */}
        <div className="block sm:hidden px-4">
          <div className="space-y-4">
            {testimonials.slice(0, 3).map((testimonial, index) => (
              <Card key={testimonial.name} className="bg-gradient-card border-gym-primary/20 hover:border-gym-primary/40 transition-all duration-300">
                <div className="p-4">
                  <div className="flex items-center mb-3">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name}
                      className="w-10 h-10 rounded-full object-cover mr-3 border-2 border-gym-primary/30"
                    />
                    <div>
                      <h4 className="font-bold text-gym-text-light text-sm">{testimonial.name}</h4>
                      <p className="text-xs text-gym-text-muted">{testimonial.role}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center mb-3">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-3 w-3 fill-gym-primary text-gym-primary" />
                    ))}
                  </div>
                  
                  <p className="text-gym-text-muted leading-relaxed italic text-sm">
                    "{testimonial.text}"
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </div>
        
        {/* Tablet and Desktop: Carousel */}
        <div className="hidden sm:block">
          <Carousel
            plugins={[Autoplay({ delay: 4000 })]}
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full max-w-6xl mx-auto"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={testimonial.name} className="pl-2 md:pl-4 sm:basis-1/1 md:basis-1/2 lg:basis-1/3">
                  <Card className="bg-gradient-card border-gym-primary/20 hover:border-gym-primary/40 transition-all duration-300 group hover:scale-105 h-full">
                    <div className="p-4 sm:p-6">
                      <div className="flex items-center mb-4">
                        <img 
                          src={testimonial.image} 
                          alt={testimonial.name}
                          className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover mr-3 sm:mr-4 border-2 border-gym-primary/30"
                        />
                        <div>
                          <h4 className="font-bold text-gym-text-light text-sm sm:text-base">{testimonial.name}</h4>
                          <p className="text-xs sm:text-sm text-gym-text-muted">{testimonial.role}</p>
                        </div>
                      </div>
                      
                      <div className="flex items-center mb-4">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 fill-gym-primary text-gym-primary" />
                        ))}
                      </div>
                      
                      <p className="text-gym-text-muted leading-relaxed italic text-sm sm:text-base">
                        "{testimonial.text}"
                      </p>
                    </div>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="-left-4 lg:-left-12" />
            <CarouselNext className="-right-4 lg:-right-12" />
          </Carousel>
        </div>
      </div>
    </section>
  )
}

export default Testimonials