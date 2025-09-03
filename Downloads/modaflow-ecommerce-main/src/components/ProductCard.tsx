import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Heart, Star, ShoppingCart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Product } from '@/data/products';
import { motion } from 'framer-motion';

interface ProductCardProps {
  product: Product;
  onAddToWishlist?: (productId: string) => void;
  onAddToCart?: (productId: string) => void;
  isInWishlist?: boolean;
}

const ProductCard = ({ product, onAddToWishlist, onAddToCart, isInWishlist = false }: ProductCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate();

  const discountedPrice = product.is_on_sale 
    ? product.price * (1 - product.discount_percent / 100)
    : product.price;

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('es-MX', {
      style: 'currency',
      currency: 'MXN',
      minimumFractionDigits: 0,
    }).format(price);
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => {
      const isFilled = i < Math.floor(rating);
      const isHalf = i === Math.floor(rating) && rating % 1 !== 0;
      
      return (
        <Star
          key={i}
          className={`h-3 w-3 ${
            isFilled || isHalf ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'
          }`}
        />
      );
    });
  };

  return (
    <div 
      className="group bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-200 overflow-hidden border border-gray-200 cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => navigate(`/producto/${product.id}`)}
    >
      <Link to={`/producto/${product.id}`} className="block">
        <div className="relative aspect-[4/5] overflow-hidden rounded-xl bg-gray-100">
          <img
            src={product.image_url}
            alt={product.title}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            loading="lazy"
            onError={(e) => {
              e.currentTarget.src = `https://via.placeholder.com/500x600/${product.category === 'hombre' ? '3B82F6' : product.category === 'mujer' ? 'F472B6' : product.category === 'ninos' ? '10B981' : 'A855F7'}/FFFFFF?text=${encodeURIComponent(product.title)}`;
            }}
          />
          
          {/* Badges */}
          <div className="absolute top-2 left-2 flex flex-col gap-1 z-10">
            {product.is_new && (
              <Badge className="bg-[hsl(var(--brand))] text-white text-xs px-2 py-1">
                Nuevo
              </Badge>
            )}
            {product.is_on_sale && (
              <Badge className="bg-red-500 text-white text-xs px-2 py-1">
                -{product.discount_percent}%
              </Badge>
            )}
          </div>

          {/* Wishlist Button */}
          <div className={`absolute top-3 right-3 z-10 transition-opacity duration-200 ${
            isHovered ? 'opacity-100' : 'opacity-60'
          }`}>
            <Button
              variant="ghost"
              size="icon"
              className={`bg-white/90 hover:bg-white shadow-sm ${
                isInWishlist ? 'text-red-500' : 'text-gray-600 hover:text-red-500'
              }`}
              onClick={(e) => {
                e.preventDefault();
                onAddToWishlist?.(product.id);
              }}
            >
              <Heart className={`h-4 w-4 ${isInWishlist ? 'fill-current' : ''}`} />
            </Button>
          </div>
        </div>
      </Link>

      <div className="p-3 sm:p-4">
        <Link to={`/producto/${product.id}`}>
          <h3 className="mt-2 sm:mt-3 text-sm sm:text-base font-medium text-gray-900 group-hover:text-gray-700 transition-colors duration-200 mb-2 line-clamp-2">
            {product.title}
          </h3>
        </Link>

        {/* Rating */}
        <div className="flex items-center gap-1 mb-2 sm:mb-3">
          {renderStars(product.rating)}
          <span className="text-xs text-gray-700 ml-1">
            ({product.rating})
          </span>
        </div>

        {/* Price */}
        <div className="flex items-center gap-2 mb-3 sm:mb-4">
          <span className="text-sm sm:text-[15px] font-semibold text-gray-900">
            {formatPrice(discountedPrice)}
          </span>
          {product.is_on_sale && (
            <span className="text-xs sm:text-sm text-gray-700 line-through">
              {formatPrice(product.price)}
            </span>
          )}
        </div>

        {/* Colors - Hidden on mobile */}
        <div className="hidden sm:flex items-center gap-2 mb-2">
          <span className="text-xs text-gray-700">Colores:</span>
          <div className="flex gap-1">
            {product.colors.slice(0, 3).map((color, index) => (
              <div
                key={index}
                className="w-4 h-4 rounded-full border border-gray-200"
                style={{ backgroundColor: color.hex }}
                title={color.name}
              ></div>
            ))}
            {product.colors.length > 3 && (
              <span className="text-xs text-gray-400 self-center ml-1">
                +{product.colors.length - 3}
              </span>
            )}
          </div>
        </div>

        {/* Sizes - Hidden on mobile */}
        <div className="hidden sm:block text-xs text-gray-700 mb-3">
          Tallas: {product.sizes.slice(0, 4).join(', ')}
          {product.sizes.length > 4 && ` +${product.sizes.length - 4} más`}
        </div>

        {/* Add to Cart Button */}
        <Button 
          className="w-full bg-[hsl(var(--brand))] text-white hover:bg-[hsl(var(--brand-600))] text-xs sm:text-sm"
          size="sm"
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            onAddToCart?.(product.id);
          }}
        >
          <ShoppingCart className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2" />
          <span className="hidden sm:inline">Agregar al carrito</span>
          <span className="sm:hidden">Agregar</span>
        </Button>
      </div>
    </div>
  );
};

export default ProductCard;