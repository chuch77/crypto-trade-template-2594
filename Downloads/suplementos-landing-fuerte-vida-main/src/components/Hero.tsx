import { Button } from "@/components/ui/button"
import { ArrowRight, Star, Zap, Trophy, Target } from "lucide-react"
import bcaaProduct from "@/assets/bcaa-product.jpg"
import preworkoutProduct from "@/assets/preworkout-product.jpg"
import supplementsCollection from "@/assets/supplements-collection.jpg"

const Hero = () => {
  return (
    <section id="inicio" className="min-h-screen bg-gradient-hero relative overflow-hidden pt-16 sm:pt-20">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-gym-dark/60"></div>
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-20 right-10 w-32 h-32 bg-gym-primary/20 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute bottom-32 left-10 w-48 h-48 bg-gym-secondary/15 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/2 right-1/3 w-24 h-24 bg-gym-primary/10 rounded-full blur-xl animate-pulse" style={{animationDelay: '2s'}}></div>
      </div>
      
      <div className="container mx-auto px-4 py-8 sm:py-12 lg:py-16 relative z-10">
        {/* Centered Content Layout */}
        <div className="text-center space-y-6 sm:space-y-8 lg:space-y-12 animate-fade-in">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-gym-dark-card/80 backdrop-blur-sm border border-gym-primary/30 rounded-full px-4 py-2 sm:px-6 sm:py-3">
            <Trophy className="h-4 w-4 sm:h-5 sm:w-5 text-gym-primary" />
            <span className="text-xs sm:text-sm font-medium text-gym-text-light">Suplementos Premium #1 en Calidad</span>
          </div>
          
          {/* Main Heading */}
          <div className="space-y-4 sm:space-y-6">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-gym-text-light leading-tight">
              Transforma Tu
              <span className="bg-gradient-primary bg-clip-text text-transparent block"> Físico</span>
            </h1>
            
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gym-text-muted leading-relaxed max-w-4xl mx-auto px-4">
              Suplementos científicamente formulados para atletas que buscan resultados extraordinarios.
              <span className="block mt-2 text-gym-primary font-semibold">Calidad premium, resultados garantizados.</span>
            </p>
          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 px-4">
            <Button 
              size="lg" 
              onClick={() => {
                const productosSection = document.getElementById('productos')
                productosSection?.scrollIntoView({ behavior: 'smooth' })
              }}
              className="w-full sm:w-auto bg-gradient-primary hover:bg-gym-primary-dark text-gym-dark font-bold px-6 sm:px-10 py-4 sm:py-6 text-lg sm:text-xl group animate-glow-pulse shadow-2xl"
            >
              <Zap className="mr-2 sm:mr-3 h-5 w-5 sm:h-6 sm:w-6" />
              Domina El Gym
              <ArrowRight className="ml-2 sm:ml-3 h-5 w-5 sm:h-6 sm:w-6 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <Button 
              size="lg" 
              variant="outline"
              onClick={() => {
                const allProductsSection = document.querySelector('.py-20.bg-gradient-to-b')
                allProductsSection?.scrollIntoView({ behavior: 'smooth' })
                setTimeout(() => {
                  const sortSelect = document.querySelector('select') as HTMLSelectElement
                  if (sortSelect) {
                    sortSelect.value = 'price-low'
                    sortSelect.dispatchEvent(new Event('change', { bubbles: true }))
                  }
                }, 1000)
              }}
              className="w-full sm:w-auto border-2 border-gym-primary text-gym-primary hover:bg-gym-primary hover:text-gym-dark font-bold px-6 sm:px-10 py-4 sm:py-6 text-lg sm:text-xl transition-all duration-300"
            >
              <Target className="mr-2 sm:mr-3 h-5 w-5 sm:h-6 sm:w-6" />
              Descuentos Bestiales
            </Button>
          </div>
        </div>
        
        {/* Product Showcase Grid */}
        <div className="mt-12 sm:mt-16 lg:mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 max-w-6xl mx-auto px-4">
          {/* Product 1 */}
          <div className="group relative animate-scale-in" style={{animationDelay: '0.2s'}}>
            <div className="absolute inset-0 bg-gradient-primary rounded-2xl blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>
            <div className="relative bg-gym-dark-card/80 backdrop-blur-sm border border-gym-primary/30 rounded-2xl p-4 sm:p-6 group-hover:border-gym-primary/60 transition-all duration-300 hover:scale-105">
              <img 
                src={bcaaProduct} 
                alt="BCAA Premium" 
                className="w-full h-32 sm:h-40 lg:h-48 object-cover rounded-xl mb-4 group-hover:scale-110 transition-transform duration-500"
              />
              <h3 className="text-lg sm:text-xl font-bold text-gym-text-light mb-2">Aminoácidos BCAA</h3>
              <p className="text-gym-text-muted text-sm mb-4">Recuperación muscular avanzada</p>
              <div className="flex items-center justify-between">
                <span className="text-xl sm:text-2xl font-bold text-gym-primary">$18.99</span>
                <div className="flex items-center space-x-1">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} className="h-4 w-4 fill-gym-primary text-gym-primary" />
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          {/* Product 2 - Featured */}
          <div className="group relative animate-scale-in" style={{animationDelay: '0.4s'}}>
            <div className="absolute -inset-1 bg-gradient-primary rounded-2xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-500"></div>
            <div className="relative bg-gym-dark-card border-2 border-gym-primary rounded-2xl p-4 sm:p-6 group-hover:scale-105 transition-all duration-300">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gym-primary text-gym-dark px-3 sm:px-4 py-1 rounded-full text-xs sm:text-sm font-bold">
                MÁS POPULAR
              </div>
              <img 
                src={preworkoutProduct} 
                alt="Pre-Workout" 
                className="w-full h-32 sm:h-40 lg:h-48 object-cover rounded-xl mb-4 group-hover:scale-110 transition-transform duration-500"
              />
              <h3 className="text-lg sm:text-xl font-bold text-gym-text-light mb-2">Pre-Workout Extreme</h3>
              <p className="text-gym-text-muted text-sm mb-4">Energía explosiva para entrenar</p>
              <div className="flex items-center justify-between">
                <span className="text-xl sm:text-2xl font-bold text-gym-primary">$26.99</span>
                <div className="flex items-center space-x-1">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} className="h-4 w-4 fill-gym-primary text-gym-primary" />
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          {/* Product 3 */}
          <div className="group relative animate-scale-in" style={{animationDelay: '0.6s'}}>
            <div className="absolute inset-0 bg-gradient-primary rounded-2xl blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>
            <div className="relative bg-gym-dark-card/80 backdrop-blur-sm border border-gym-primary/30 rounded-2xl p-4 sm:p-6 group-hover:border-gym-primary/60 transition-all duration-300 hover:scale-105">
              <img 
                src={supplementsCollection} 
                alt="Pack Completo" 
                className="w-full h-32 sm:h-40 lg:h-48 object-cover rounded-xl mb-4 group-hover:scale-110 transition-transform duration-500"
              />
              <h3 className="text-lg sm:text-xl font-bold text-gym-text-light mb-2">Pack Completo</h3>
              <p className="text-gym-text-muted text-sm mb-4">Todo lo que necesitas</p>
              <div className="flex items-center justify-between">
                <span className="text-xl sm:text-2xl font-bold text-gym-primary">$69.99</span>
                <div className="flex items-center space-x-1">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} className="h-4 w-4 fill-gym-primary text-gym-primary" />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Stats */}
        <div className="mt-12 sm:mt-16 grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 max-w-4xl mx-auto text-center px-4">
          <div className="animate-fade-in" style={{animationDelay: '0.8s'}}>
            <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gym-primary mb-2">50K+</div>
            <div className="text-sm sm:text-base text-gym-text-muted">Clientes Activos</div>
          </div>
          <div className="animate-fade-in" style={{animationDelay: '1s'}}>
            <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gym-primary mb-2">4.9★</div>
            <div className="text-sm sm:text-base text-gym-text-muted">Calificación</div>
          </div>
          <div className="animate-fade-in" style={{animationDelay: '1.2s'}}>
            <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gym-primary mb-2">100%</div>
            <div className="text-sm sm:text-base text-gym-text-muted">Natural</div>
          </div>
          <div className="animate-fade-in" style={{animationDelay: '1.4s'}}>
            <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gym-primary mb-2">24/7</div>
            <div className="text-sm sm:text-base text-gym-text-muted">Soporte</div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero