import ProductCard from "./ProductCard"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { ArrowRight, Search } from "lucide-react"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"
import { useState } from "react"
import proteinHero from "@/assets/protein-hero.jpg"
import bcaaProduct from "@/assets/bcaa-product.jpg"
import preworkoutProduct from "@/assets/preworkout-product.jpg"
import supplementsCollection from "@/assets/supplements-collection.jpg"

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState("Todos")
  const [searchTerm, setSearchTerm] = useState("")
  
  const categories = ["Todos", "Proteína", "Aminoácidos", "Pre-Entreno", "Pack", "Creatina", "Recuperación", "Vitaminas", "Ácidos Grasos", "Definición"]
  
  const products = [
    {
      name: "Proteína Whey Premium",
      price: "32.99",
      originalPrice: "42.99",
      image: proteinHero,
      rating: 5,
      reviews: 324,
      category: "Proteína",
      isPopular: true
    },
    {
      name: "BCAA 2:1:1 Advanced",
      price: "18.99",
      originalPrice: "24.99",
      image: bcaaProduct,
      rating: 4,
      reviews: 186,
      category: "Aminoácidos"
    },
    {
      name: "Pre-Workout Extreme",
      price: "26.99",
      image: preworkoutProduct,
      rating: 5,
      reviews: 267,
      category: "Pre-Entreno"
    },
    {
      name: "Pack Completo Fitness",
      price: "69.99",
      originalPrice: "89.99",
      image: supplementsCollection,
      rating: 5,
      reviews: 145,
      category: "Pack"
    },
    {
      name: "Creatina Monohidrato",
      price: "16.99",
      originalPrice: "21.99",
      image: proteinHero,
      rating: 5,
      reviews: 412,
      category: "Creatina"
    },
    {
      name: "Glutamina Recovery",
      price: "19.99",
      image: bcaaProduct,
      rating: 4,
      reviews: 198,
      category: "Recuperación"
    },
    {
      name: "Multivitamínico Elite",
      price: "14.99",
      originalPrice: "19.99",
      image: supplementsCollection,
      rating: 5,
      reviews: 289,
      category: "Vitaminas"
    },
    {
      name: "Omega-3 Ultra",
      price: "17.99",
      image: preworkoutProduct,
      rating: 4,
      reviews: 156,
      category: "Ácidos Grasos"
    },
    {
      name: "Quemador de Grasa",
      price: "29.99",
      originalPrice: "37.99",
      image: proteinHero,
      rating: 4,
      reviews: 234,
      category: "Definición"
    },
    {
      name: "ZMA Recovery",
      price: "13.99",
      image: bcaaProduct,
      rating: 5,
      reviews: 167,
      category: "Recuperación"
    }
  ]

  const filteredProducts = products.filter(product => {
    const searchLower = searchTerm.toLowerCase()
    return product.name.toLowerCase().includes(searchLower) || 
           product.category.toLowerCase().includes(searchLower)
  })

  return (
    <section id="productos" className="py-12 sm:py-16 lg:py-20 bg-gym-dark">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 sm:mb-12 lg:mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gym-text-light mb-4 sm:mb-6">
            Productos
            <span className="bg-gradient-primary bg-clip-text text-transparent"> Destacados</span>
          </h2>
          <p className="text-lg sm:text-xl text-gym-text-muted max-w-3xl mx-auto mb-6 sm:mb-8 px-4">
            Suplementos de la más alta calidad, formulados científicamente para potenciar 
            tu rendimiento y acelerar tus resultados.
          </p>
          
          {/* Buscador */}
          <div className="max-w-md mx-auto mb-6 sm:mb-8 px-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gym-text-muted h-4 w-4" />
              <Input
                type="text"
                placeholder="Buscar productos..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 bg-gym-dark-card border-gym-primary/30 text-gym-text-light placeholder:text-gym-text-muted focus:border-gym-primary"
              />
            </div>
          </div>
        </div>

        {filteredProducts.length > 0 ? (
          <>
            {/* Mobile: Grid Layout */}
            <div className="block sm:hidden mb-8">
              <div className="grid grid-cols-1 gap-4 px-4">
                {filteredProducts.slice(0, 4).map((product, index) => (
                  <div key={product.name} className="animate-scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
                    <ProductCard {...product} />
                  </div>
                ))}
              </div>
            </div>
            
            {/* Tablet and Desktop: Carousel */}
            <div className="hidden sm:block">
              <Carousel
                plugins={[Autoplay({ delay: 3000 })]}
                opts={{
                  align: "start",
                  loop: true,
                }}
                className="w-full max-w-7xl mx-auto mb-8 sm:mb-12"
              >
                <CarouselContent className="-ml-2 md:-ml-4">
                  {filteredProducts.map((product, index) => (
                    <CarouselItem key={product.name} className="pl-2 md:pl-4 sm:basis-1/2 lg:basis-1/3 xl:basis-1/4">
                      <div className="animate-scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
                        <ProductCard {...product} />
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="-left-4 lg:-left-12" />
                <CarouselNext className="-right-4 lg:-right-12" />
              </Carousel>
            </div>
          </>
        ) : (
          <div className="text-center py-12 sm:py-16">
            <div className="max-w-md mx-auto px-4">
              <Search className="h-12 w-12 sm:h-16 sm:w-16 text-gym-text-muted mx-auto mb-4 opacity-50" />
              <h3 className="text-lg sm:text-xl font-semibold text-gym-text-light mb-2">No encontramos productos</h3>
              <p className="text-sm sm:text-base text-gym-text-muted mb-6">Intenta con otros términos de búsqueda o revisa la ortografía.</p>
              <Button 
                onClick={() => setSearchTerm("")}
                variant="outline" 
                className="border-gym-primary text-gym-primary hover:bg-gym-primary hover:text-gym-dark"
              >
                Limpiar búsqueda
              </Button>
            </div>
          </div>
        )}

        <div className="text-center px-4">
          <Button 
            size="lg" 
            variant="outline" 
            className="w-full sm:w-auto border-gym-primary text-gym-primary hover:bg-gym-primary hover:text-gym-dark group"
          >
            Ver Todos los Productos
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  )
}

export default Products