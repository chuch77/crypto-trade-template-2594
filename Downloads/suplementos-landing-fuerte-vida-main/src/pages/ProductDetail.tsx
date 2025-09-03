import { useParams, Link } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import { Star, ShoppingCart, ArrowLeft, Shield, Truck, Award } from "lucide-react"
import { useCart } from "@/contexts/CartContext"
import Header from "@/components/Header"
import Footer from "@/components/Footer"

const ProductDetail = () => {
  const { id } = useParams()
  const { addToCart } = useCart()

  // Datos del producto (en producción vendría de una API)
  const product = {
    id: "proteina-whey-premium",
    name: "Proteína Whey Premium",
    price: "45.99",
    originalPrice: "59.99",
    image: "/src/assets/protein-hero.jpg",
    rating: 5,
    reviews: 324,
    category: "Proteína",
    description: "Proteína whey de máxima calidad con 25g de proteína por porción. Perfecta para el crecimiento muscular y recuperación post-entreno.",
    ingredients: ["Whey Protein Isolate", "Whey Protein Concentrate", "Saborizantes Naturales", "Stevia", "Lecitina de Soja"],
    benefits: [
      "25g de proteína por porción",
      "Absorción rápida",
      "Aminoácidos esenciales",
      "Sin azúcares añadidos",
      "Libre de gluten"
    ],
    nutritionalInfo: {
      serving: "30g",
      protein: "25g",
      carbs: "2g",
      fat: "1g",
      calories: "120"
    }
  }

  const handleAddToCart = () => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image
    })
  }

  return (
    <div className="min-h-screen bg-gym-dark">
      <Header />
      
      <div className="pt-24 pb-20">
        <div className="container mx-auto px-4">
          <Link to="/" className="inline-flex items-center text-gym-primary hover:text-gym-primary-dark mb-8">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Volver a productos
          </Link>

          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            {/* Imagen del producto */}
            <div className="space-y-4">
              <div className="aspect-square bg-gym-dark-card rounded-2xl overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Información del producto */}
            <div className="space-y-6">
              <div>
                <Badge className="mb-4">{product.category}</Badge>
                <h1 className="text-4xl font-bold text-gym-text-light mb-4">{product.name}</h1>
                
                <div className="flex items-center space-x-4 mb-6">
                  <div className="flex items-center">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star key={i} className={`h-5 w-5 ${i <= product.rating ? 'fill-gym-primary text-gym-primary' : 'text-gray-600'}`} />
                    ))}
                  </div>
                  <span className="text-gym-text-muted">({product.reviews} reviews)</span>
                </div>

                <div className="flex items-center space-x-4 mb-6">
                  <span className="text-4xl font-bold text-gym-primary">${product.price}</span>
                  {product.originalPrice && (
                    <span className="text-2xl text-gym-text-muted line-through">${product.originalPrice}</span>
                  )}
                </div>

                <p className="text-gym-text-muted text-lg leading-relaxed mb-8">
                  {product.description}
                </p>

                <Button 
                  onClick={handleAddToCart}
                  size="lg"
                  className="w-full bg-gradient-primary hover:bg-gym-primary-dark text-gym-dark font-semibold py-4 text-lg mb-8"
                >
                  <ShoppingCart className="mr-2 h-5 w-5" />
                  Agregar al Carrito
                </Button>

                <div className="grid grid-cols-3 gap-4">
                  <div className="text-center p-4 bg-gym-dark-card rounded-lg">
                    <Shield className="h-6 w-6 text-gym-primary mx-auto mb-2" />
                    <p className="text-xs text-gym-text-muted">Calidad Garantizada</p>
                  </div>
                  <div className="text-center p-4 bg-gym-dark-card rounded-lg">
                    <Truck className="h-6 w-6 text-gym-primary mx-auto mb-2" />
                    <p className="text-xs text-gym-text-muted">Envío Gratis</p>
                  </div>
                  <div className="text-center p-4 bg-gym-dark-card rounded-lg">
                    <Award className="h-6 w-6 text-gym-primary mx-auto mb-2" />
                    <p className="text-xs text-gym-text-muted">Certificado</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Información detallada */}
          <div className="grid lg:grid-cols-3 gap-8">
            <Card className="bg-gradient-card border-gym-primary/20 p-6">
              <h3 className="text-xl font-bold text-gym-text-light mb-4">Beneficios</h3>
              <ul className="space-y-2">
                {product.benefits.map((benefit, index) => (
                  <li key={index} className="text-gym-text-muted flex items-center">
                    <span className="w-2 h-2 bg-gym-primary rounded-full mr-3"></span>
                    {benefit}
                  </li>
                ))}
              </ul>
            </Card>

            <Card className="bg-gradient-card border-gym-primary/20 p-6">
              <h3 className="text-xl font-bold text-gym-text-light mb-4">Ingredientes</h3>
              <ul className="space-y-2">
                {product.ingredients.map((ingredient, index) => (
                  <li key={index} className="text-gym-text-muted">• {ingredient}</li>
                ))}
              </ul>
            </Card>

            <Card className="bg-gradient-card border-gym-primary/20 p-6">
              <h3 className="text-xl font-bold text-gym-text-light mb-4">Información Nutricional</h3>
              <div className="space-y-2 text-gym-text-muted">
                <div className="flex justify-between">
                  <span>Porción:</span>
                  <span>{product.nutritionalInfo.serving}</span>
                </div>
                <div className="flex justify-between">
                  <span>Proteína:</span>
                  <span>{product.nutritionalInfo.protein}</span>
                </div>
                <div className="flex justify-between">
                  <span>Carbohidratos:</span>
                  <span>{product.nutritionalInfo.carbs}</span>
                </div>
                <div className="flex justify-between">
                  <span>Grasas:</span>
                  <span>{product.nutritionalInfo.fat}</span>
                </div>
                <div className="flex justify-between font-semibold text-gym-primary">
                  <span>Calorías:</span>
                  <span>{product.nutritionalInfo.calories}</span>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default ProductDetail