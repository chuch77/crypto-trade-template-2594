import ProductCard from "./ProductCard"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search, Heart, Filter, SortAsc, Star } from "lucide-react"
import { useState } from "react"
import proteinHero from "@/assets/protein-hero.jpg"
import bcaaProduct from "@/assets/bcaa-product.jpg"
import preworkoutProduct from "@/assets/preworkout-product.jpg"
import supplementsCollection from "@/assets/supplements-collection.jpg"

const AllProducts = () => {
  const [searchTerm, setSearchTerm] = useState("")
  const [sortBy, setSortBy] = useState("popular")
  const [priceRange, setPriceRange] = useState([0, 100])
  const [favorites, setFavorites] = useState(new Set())

  const toggleFavorite = (productName) => {
    const newFavorites = new Set(favorites)
    if (newFavorites.has(productName)) {
      newFavorites.delete(productName)
    } else {
      newFavorites.add(productName)
    }
    setFavorites(newFavorites)
  }
  
  const allProducts = [
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
    },
    {
      name: "Caseína Nocturna",
      price: "28.99",
      originalPrice: "35.99",
      image: supplementsCollection,
      rating: 5,
      reviews: 203,
      category: "Proteína"
    },
    {
      name: "L-Carnitina Líquida",
      price: "22.99",
      image: preworkoutProduct,
      rating: 4,
      reviews: 178,
      category: "Definición"
    },
    {
      name: "Proteína Vegana",
      price: "34.99",
      originalPrice: "42.99",
      image: proteinHero,
      rating: 4,
      reviews: 156,
      category: "Proteína"
    },
    {
      name: "Beta Alanina",
      price: "15.99",
      image: bcaaProduct,
      rating: 5,
      reviews: 234,
      category: "Pre-Entreno"
    },
    {
      name: "Complejo B",
      price: "12.99",
      originalPrice: "16.99",
      image: supplementsCollection,
      rating: 4,
      reviews: 145,
      category: "Vitaminas"
    },
    {
      name: "HMB Anticatabólico",
      price: "24.99",
      image: preworkoutProduct,
      rating: 4,
      reviews: 189,
      category: "Recuperación"
    },
    {
      name: "Proteína Isolate",
      price: "39.99",
      originalPrice: "49.99",
      image: proteinHero,
      rating: 5,
      reviews: 456,
      category: "Proteína",
      isPopular: true
    },
    {
      name: "Arginina Pump",
      price: "21.99",
      image: bcaaProduct,
      rating: 4,
      reviews: 234,
      category: "Aminoácidos"
    },
    {
      name: "Cafeína Anhidra",
      price: "11.99",
      originalPrice: "15.99",
      image: preworkoutProduct,
      rating: 5,
      reviews: 567,
      category: "Pre-Entreno"
    },
    {
      name: "Pack Definición",
      price: "89.99",
      originalPrice: "119.99",
      image: supplementsCollection,
      rating: 5,
      reviews: 123,
      category: "Pack"
    },
    {
      name: "Creatina HCL",
      price: "23.99",
      image: proteinHero,
      rating: 4,
      reviews: 345,
      category: "Creatina"
    },
    {
      name: "Magnesio + Zinc",
      price: "16.99",
      originalPrice: "21.99",
      image: supplementsCollection,
      rating: 5,
      reviews: 278,
      category: "Vitaminas"
    },
    {
      name: "CLA Softgels",
      price: "19.99",
      image: preworkoutProduct,
      rating: 4,
      reviews: 189,
      category: "Ácidos Grasos"
    },
    {
      name: "Termogénico Extreme",
      price: "34.99",
      originalPrice: "44.99",
      image: bcaaProduct,
      rating: 4,
      reviews: 298,
      category: "Definición"
    },
    {
      name: "Colágeno Hidrolizado",
      price: "27.99",
      image: supplementsCollection,
      rating: 5,
      reviews: 412,
      category: "Recuperación"
    },
    {
      name: "Mass Gainer",
      price: "45.99",
      originalPrice: "59.99",
      image: proteinHero,
      rating: 4,
      reviews: 234,
      category: "Proteína"
    },
    {
      name: "Taurina 1000mg",
      price: "14.99",
      image: bcaaProduct,
      rating: 4,
      reviews: 156,
      category: "Aminoácidos"
    },
    {
      name: "Pre-Workout Pump",
      price: "31.99",
      originalPrice: "39.99",
      image: preworkoutProduct,
      rating: 5,
      reviews: 389,
      category: "Pre-Entreno"
    },
    {
      name: "Pack Volumen",
      price: "79.99",
      originalPrice: "99.99",
      image: supplementsCollection,
      rating: 5,
      reviews: 167,
      category: "Pack"
    },
    {
      name: "Creatina + Beta Alanina",
      price: "28.99",
      image: proteinHero,
      rating: 5,
      reviews: 445,
      category: "Creatina"
    },
    {
      name: "Vitamina D3 + K2",
      price: "18.99",
      originalPrice: "24.99",
      image: supplementsCollection,
      rating: 5,
      reviews: 334,
      category: "Vitaminas"
    },
    {
      name: "Aceite de Pescado",
      price: "22.99",
      image: preworkoutProduct,
      rating: 4,
      reviews: 267,
      category: "Ácidos Grasos"
    },
    {
      name: "Fat Burner Night",
      price: "26.99",
      originalPrice: "34.99",
      image: bcaaProduct,
      rating: 4,
      reviews: 198,
      category: "Definición"
    },
    {
      name: "Ashwagandha KSM-66",
      price: "24.99",
      image: supplementsCollection,
      rating: 5,
      reviews: 289,
      category: "Recuperación"
    },
    {
      name: "Proteína Hidrolizada",
      price: "42.99",
      originalPrice: "54.99",
      image: proteinHero,
      rating: 5,
      reviews: 378,
      category: "Proteína",
      isPopular: true
    },
    {
      name: "Citrulina Malato",
      price: "17.99",
      image: bcaaProduct,
      rating: 4,
      reviews: 223,
      category: "Aminoácidos"
    }
  ]

  const filteredProducts = allProducts
    .filter(product => {
      const searchLower = searchTerm.toLowerCase()
      const matchesSearch = product.name.toLowerCase().includes(searchLower) || 
                           product.category.toLowerCase().includes(searchLower)
      const price = parseFloat(product.price)
      const matchesPrice = price >= priceRange[0] && price <= priceRange[1]
      return matchesSearch && matchesPrice
    })
    .sort((a, b) => {
      switch (sortBy) {
        case 'price-low':
          return parseFloat(a.price) - parseFloat(b.price)
        case 'price-high':
          return parseFloat(b.price) - parseFloat(a.price)
        case 'rating':
          return b.rating - a.rating
        case 'reviews':
          return b.reviews - a.reviews
        case 'name':
          return a.name.localeCompare(b.name)
        default: // popular
          return (b.isPopular ? 1 : 0) - (a.isPopular ? 1 : 0) || b.reviews - a.reviews
      }
    })

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-gym-dark to-gym-dark-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 sm:mb-12 lg:mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gym-text-light mb-4 sm:mb-6">
            Todos los
            <span className="bg-gradient-primary bg-clip-text text-transparent"> Productos</span>
          </h2>
          <p className="text-lg sm:text-xl text-gym-text-muted max-w-3xl mx-auto mb-6 sm:mb-8 px-4">
            Explora nuestra colección completa de suplementos premium diseñados para cada objetivo fitness.
          </p>
        </div>

        {/* Buscador y Filtros Avanzados */}
        <div className="max-w-6xl mx-auto mb-8 sm:mb-12">
          {/* Buscador Principal */}
          <div className="max-w-2xl mx-auto mb-6 sm:mb-8 px-4">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-primary rounded-2xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity duration-300"></div>
              <div className="relative bg-gym-dark-card border border-gym-primary/30 rounded-2xl p-2 group-hover:border-gym-primary/50 transition-all duration-300">
                <div className="flex items-center gap-2 sm:gap-4">
                  <div className="flex-shrink-0 p-2 sm:p-3 bg-gym-primary/10 rounded-xl group-hover:bg-gym-primary/20 transition-colors duration-300">
                    <Search className="h-5 w-5 sm:h-6 sm:w-6 text-gym-primary" />
                  </div>
                  <Input
                    type="text"
                    placeholder="¿Qué suplemento buscas hoy?"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="flex-1 bg-transparent border-0 text-base sm:text-lg text-gym-text-light placeholder:text-gym-text-muted focus:ring-0 focus:outline-none"
                  />
                  {searchTerm && (
                    <Button
                      onClick={() => setSearchTerm("")}
                      variant="ghost"
                      size="sm"
                      className="text-gym-text-muted hover:text-gym-primary transition-colors"
                    >
                      ✕
                    </Button>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Filtros Avanzados */}
          <div className="bg-gym-dark-card rounded-2xl p-4 sm:p-6 border border-gym-primary/20 mx-4">
            {/* Mobile: Stack vertically */}
            <div className="flex flex-col space-y-4 lg:hidden">
              {/* Ordenar por */}
              <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3">
                <div className="flex items-center gap-2">
                  <SortAsc className="h-5 w-5 text-gym-primary" />
                  <span className="text-gym-text-light font-medium text-sm sm:text-base">Ordenar:</span>
                </div>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="bg-gym-dark border border-gym-primary/30 text-gym-text-light rounded-lg px-3 py-2 focus:border-gym-primary focus:outline-none text-sm"
                >
                  <option value="popular">Más Popular</option>
                  <option value="price-low">Precio: Menor a Mayor</option>
                  <option value="price-high">Precio: Mayor a Menor</option>
                  <option value="rating">Mejor Calificación</option>
                  <option value="reviews">Más Reseñas</option>
                  <option value="name">Nombre A-Z</option>
                </select>
              </div>

              {/* Filtro de Precio */}
              <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3">
                <div className="flex items-center gap-2">
                  <Filter className="h-5 w-5 text-gym-primary" />
                  <span className="text-gym-text-light font-medium text-sm sm:text-base">Precio:</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-gym-text-muted text-sm">${priceRange[0]}</span>
                  <input
                    type="range"
                    min="0"
                    max="100"
                    value={priceRange[1]}
                    onChange={(e) => setPriceRange([0, parseInt(e.target.value)])}
                    className="flex-1 sm:w-24 accent-gym-primary"
                  />
                  <span className="text-gym-text-muted text-sm">${priceRange[1]}</span>
                </div>
              </div>

              {/* Mostrar Favoritos */}
              <div className="flex justify-center">
                <Button
                  onClick={() => {
                    if (searchTerm === 'favoritos') {
                      setSearchTerm('')
                    } else {
                      setSearchTerm('favoritos')
                    }
                  }}
                  variant={searchTerm === 'favoritos' ? 'default' : 'outline'}
                  className={searchTerm === 'favoritos' 
                    ? 'bg-gym-primary text-gym-dark' 
                    : 'border-gym-primary/30 text-gym-text-light hover:bg-gym-primary/10'
                  }
                  size="sm"
                >
                  Favoritos ({favorites.size})
                </Button>
              </div>
            </div>
            
            {/* Desktop: Horizontal layout */}
            <div className="hidden lg:flex gap-6 items-center justify-between">
              {/* Ordenar por */}
              <div className="flex items-center gap-3">
                <SortAsc className="h-5 w-5 text-gym-primary" />
                <span className="text-gym-text-light font-medium">Ordenar:</span>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="bg-gym-dark border border-gym-primary/30 text-gym-text-light rounded-lg px-3 py-2 focus:border-gym-primary focus:outline-none"
                >
                  <option value="popular">Más Popular</option>
                  <option value="price-low">Precio: Menor a Mayor</option>
                  <option value="price-high">Precio: Mayor a Menor</option>
                  <option value="rating">Mejor Calificación</option>
                  <option value="reviews">Más Reseñas</option>
                  <option value="name">Nombre A-Z</option>
                </select>
              </div>

              {/* Filtro de Precio */}
              <div className="flex items-center gap-3">
                <Filter className="h-5 w-5 text-gym-primary" />
                <span className="text-gym-text-light font-medium">Precio:</span>
                <div className="flex items-center gap-2">
                  <span className="text-gym-text-muted text-sm">${priceRange[0]}</span>
                  <input
                    type="range"
                    min="0"
                    max="100"
                    value={priceRange[1]}
                    onChange={(e) => setPriceRange([0, parseInt(e.target.value)])}
                    className="w-24 accent-gym-primary"
                  />
                  <span className="text-gym-text-muted text-sm">${priceRange[1]}</span>
                </div>
              </div>

              {/* Mostrar Favoritos */}
              <div className="flex items-center gap-3">
                <Button
                  onClick={() => {
                    if (searchTerm === 'favoritos') {
                      setSearchTerm('')
                    } else {
                      setSearchTerm('favoritos')
                    }
                  }}
                  variant={searchTerm === 'favoritos' ? 'default' : 'outline'}
                  className={searchTerm === 'favoritos' 
                    ? 'bg-gym-primary text-gym-dark' 
                    : 'border-gym-primary/30 text-gym-text-light hover:bg-gym-primary/10'
                  }
                >
                  Favoritos ({favorites.size})
                </Button>
              </div>
            </div>
          </div>

          <div className="text-center mt-4 px-4">
            <p className="text-xs sm:text-sm text-gym-text-muted">
              💡 Prueba buscar: "proteína", "pre entreno", "creatina", "vitaminas"
            </p>
          </div>
        </div>

        {/* Grid de productos */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 mb-8 sm:mb-12 px-4">
            {filteredProducts
              .filter(product => {
                if (searchTerm === 'favoritos') {
                  return favorites.has(product.name)
                }
                return true
              })
              .map((product, index) => (
              <div 
                key={product.name} 
                className="animate-scale-in" 
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <ProductCard {...product} />
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12 sm:py-16">
            <div className="max-w-md mx-auto px-4">
              <Search className="h-12 w-12 sm:h-16 sm:w-16 text-gym-text-muted mx-auto mb-4 opacity-50" />
              <h3 className="text-lg sm:text-xl font-semibold text-gym-text-light mb-2">No encontramos productos</h3>
              <p className="text-sm sm:text-base text-gym-text-muted mb-6">Intenta con otros términos de búsqueda o cambia la categoría.</p>
              <div className="flex gap-3 justify-center">
                <Button 
                  onClick={() => setSearchTerm("")}
                  variant="outline" 
                  className="border-gym-primary text-gym-primary hover:bg-gym-primary hover:text-gym-dark"
                >
                  Limpiar búsqueda
                </Button>
              </div>
            </div>
          </div>
        )}

        {/* Estadísticas */}
        <div className="text-center px-4">
          <p className="text-sm sm:text-base text-gym-text-muted mb-4 sm:mb-6">
            Mostrando {filteredProducts.length} de {allProducts.length} productos
          </p>
          <div className="grid grid-cols-3 gap-4 sm:flex sm:flex-wrap sm:justify-center sm:gap-6 lg:gap-8 text-center max-w-2xl mx-auto">
            <div className="bg-gym-dark-card p-3 sm:p-4 lg:p-6 rounded-lg border border-gym-primary/20">
              <div className="text-lg sm:text-xl lg:text-2xl font-bold text-gym-primary mb-1 sm:mb-2">{allProducts.length}+</div>
              <div className="text-xs sm:text-sm text-gym-text-muted">Productos</div>
            </div>
            <div className="bg-gym-dark-card p-3 sm:p-4 lg:p-6 rounded-lg border border-gym-primary/20">
              <div className="text-lg sm:text-xl lg:text-2xl font-bold text-gym-primary mb-1 sm:mb-2">{favorites.size}</div>
              <div className="text-xs sm:text-sm text-gym-text-muted">Favoritos</div>
            </div>
            <div className="bg-gym-dark-card p-3 sm:p-4 lg:p-6 rounded-lg border border-gym-primary/20">
              <div className="text-lg sm:text-xl lg:text-2xl font-bold text-gym-primary mb-1 sm:mb-2">4.8★</div>
              <div className="text-xs sm:text-sm text-gym-text-muted">Calificación</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AllProducts