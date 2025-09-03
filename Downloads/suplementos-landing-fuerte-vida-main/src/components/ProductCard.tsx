import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, ShoppingCart, Eye, Heart } from "lucide-react"
import { useCart } from "@/contexts/CartContext"
import { Link } from "react-router-dom"

interface ProductCardProps {
  name: string
  price: string
  originalPrice?: string
  image: string
  rating: number
  reviews: number
  category: string
  isPopular?: boolean
  isFavorite?: boolean
  onToggleFavorite?: () => void
}

const ProductCard = ({ 
  name, 
  price, 
  originalPrice, 
  image, 
  rating, 
  reviews, 
  category, 
  isPopular,
  isFavorite,
  onToggleFavorite
}: ProductCardProps) => {
  const { addToCart } = useCart()
  
  const handleAddToCart = () => {
    addToCart({
      id: name.toLowerCase().replace(/\s+/g, '-'),
      name,
      price,
      image
    })
  }
  
  const productId = name.toLowerCase().replace(/\s+/g, '-')
  
  return (
    <Card className="bg-gradient-card border-gym-primary/20 hover:border-gym-primary/40 transition-all duration-300 group hover:scale-105 hover:shadow-2xl hover:shadow-gym-primary/20">
      <div className="relative p-4 sm:p-6">
        {isPopular && (
          <Badge className="absolute -top-2 left-2 sm:left-4 bg-gym-primary text-gym-dark font-semibold text-xs sm:text-sm">
            Más Popular
          </Badge>
        )}
        

        
        <Link to={`/producto/${productId}`} className="block">
          <div className="aspect-square mb-3 sm:mb-4 overflow-hidden rounded-lg bg-gym-dark relative group/image">
            <img 
              src={image} 
              alt={name}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gym-dark/60 opacity-0 group-hover/image:opacity-100 transition-opacity flex items-center justify-center">
              <Eye className="h-6 w-6 sm:h-8 sm:w-8 text-gym-primary" />
            </div>
          </div>
        </Link>
        
        <div className="space-y-2 sm:space-y-3">
          <Badge variant="secondary" className="text-xs">
            {category}
          </Badge>
          
          <Link to={`/producto/${productId}`}>
            <h3 className="text-base sm:text-lg font-semibold text-gym-text-light hover:text-gym-primary transition-colors cursor-pointer line-clamp-2">
              {name}
            </h3>
          </Link>
          
          <div className="flex items-center space-x-2">
            <div className="flex items-center">
              {[1, 2, 3, 4, 5].map((i) => (
                <Star 
                  key={i} 
                  className={`h-4 w-4 ${i <= rating ? 'fill-gym-primary text-gym-primary' : 'text-gray-600'}`} 
                />
              ))}
            </div>
            <span className="text-sm text-gym-text-muted">({reviews})</span>
          </div>
          
          <div className="flex items-center space-x-2">
            <span className="text-xl sm:text-2xl font-bold text-gym-primary">${price}</span>
            {originalPrice && (
              <span className="text-base sm:text-lg text-gym-text-muted line-through">${originalPrice}</span>
            )}
          </div>
          
          <div className="flex gap-2">
            <Button 
              onClick={handleAddToCart}
              className="flex-1 bg-gym-primary hover:bg-gym-primary-dark text-gym-dark font-semibold group/btn text-sm sm:text-base"
              size={window.innerWidth < 640 ? "default" : "lg"}
            >
              <ShoppingCart className="mr-1 sm:mr-2 h-4 w-4 group-hover/btn:animate-bounce" />
              <span className="hidden sm:inline">Agregar</span>
              <span className="sm:hidden">+</span>
            </Button>
            <Link to={`/producto/${productId}`}>
              <Button 
                variant="outline"
                size={window.innerWidth < 640 ? "default" : "lg"}
                className="border-gym-primary text-gym-primary hover:bg-gym-primary hover:text-gym-dark px-3 sm:px-4"
              >
                <Eye className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </Card>
  )
}

export default ProductCard