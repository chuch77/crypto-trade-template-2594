
import React from 'react';
import { PageLayout } from '@/components/layout/PageLayout';
import { Heart, Star, ShoppingCart, Trash2 } from 'lucide-react';

const Favorites = () => {
  // Mock favorites data
  const favorites = [
    {
      id: 1,
      name: 'Vintage Oversized T-Shirt',
      brand: 'Urban Outfitters',
      price: 45.99,
      originalPrice: 59.99,
      rating: 4.5,
      reviews: 128,
      image: '/placeholder.svg',
      inStock: true,
      sizes: ['S', 'M', 'L', 'XL'],
      colors: ['Black', 'White', 'Gray'],
      addedDate: '2024-01-15'
    },
    {
      id: 2,
      name: 'High Waist Mom Fit Jeans',
      brand: 'Levi\'s',
      price: 89.99,
      originalPrice: 89.99,
      rating: 4.8,
      reviews: 256,
      image: '/placeholder.svg',
      inStock: true,
      sizes: ['26', '28', '30', '32'],
      colors: ['Classic Blue', 'Black'],
      addedDate: '2024-01-18'
    },
    {
      id: 3,
      name: 'Air Max 90 Sneakers',
      brand: 'Nike',
      price: 129.99,
      originalPrice: 149.99,
      rating: 4.7,
      reviews: 89,
      image: '/placeholder.svg',
      inStock: false,
      sizes: ['38', '39', '40', '41', '42'],
      colors: ['White/Black', 'Gray/Pink'],
      addedDate: '2024-01-20'
    },
    {
      id: 4,
      name: 'Floral Midi Dress',
      brand: 'Zara',
      price: 39.99,
      originalPrice: 49.99,
      rating: 4.3,
      reviews: 67,
      image: '/placeholder.svg',
      inStock: true,
      sizes: ['XS', 'S', 'M', 'L'],
      colors: ['Blue Floral', 'Pink Floral'],
      addedDate: '2024-01-22'
    },
    {
      id: 5,
      name: 'Classic Bomber Jacket',
      brand: 'Alpha Industries',
      price: 159.99,
      originalPrice: 199.99,
      rating: 4.6,
      reviews: 143,
      image: '/placeholder.svg',
      inStock: true,
      sizes: ['S', 'M', 'L', 'XL'],
      colors: ['Military Green', 'Black', 'Navy Blue'],
      addedDate: '2024-01-25'
    },
    {
      id: 6,
      name: 'Hooded Sweatshirt',
      brand: 'Champion',
      price: 69.99,
      originalPrice: 79.99,
      rating: 4.4,
      reviews: 92,
      image: '/placeholder.svg',
      inStock: true,
      sizes: ['S', 'M', 'L', 'XL', 'XXL'],
      colors: ['Gray', 'Black', 'Navy Blue'],
      addedDate: '2024-01-28'
    }
  ];
  
  const removeFromFavorites = (id: number) => {
    console.log(`Remove item ${id} from favorites`);
  };
  
  const addToCart = (id: number) => {
    console.log(`Add item ${id} to cart`);
  };
  
  const getDiscountPercentage = (price: number, originalPrice: number) => {
    return Math.round(((originalPrice - price) / originalPrice) * 100);
  };
  
  return (
    <PageLayout title="Favorites">
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold">My Favorites</h1>
            <p className="text-muted-foreground">You have {favorites.length} saved products</p>
          </div>
          <div className="flex items-center gap-2">
            <Heart className="h-5 w-5 text-red-500" />
            <span className="text-sm text-muted-foreground">Wishlist</span>
          </div>
        </div>
        
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2 sm:gap-4 lg:gap-6">
          {favorites.map((item) => (
            <div key={item.id} className="bg-card rounded-lg shadow hover:shadow-lg transition-shadow">
              <div className="relative">
                <div className="aspect-square bg-gray-200 rounded-t-lg flex items-center justify-center">
                  <span className="text-gray-500 text-xs sm:text-sm">IMG</span>
                </div>
                
                {item.price < item.originalPrice && (
                  <div className="absolute top-1 left-1 sm:top-2 sm:left-2 bg-red-500 text-white px-1 sm:px-2 py-0.5 sm:py-1 rounded text-xs font-medium">
                    -{getDiscountPercentage(item.price, item.originalPrice)}%
                  </div>
                )}
                
                <button 
                  onClick={() => removeFromFavorites(item.id)}
                  className="absolute top-1 right-1 sm:top-2 sm:right-2 p-1 sm:p-2 bg-white rounded-full shadow hover:bg-gray-50"
                >
                  <Heart className="h-3 w-3 sm:h-4 sm:w-4 text-red-500 fill-current" />
                </button>
                
                {!item.inStock && (
                  <div className="absolute inset-0 bg-black/50 rounded-t-lg flex items-center justify-center">
                    <span className="text-white font-medium">Out of Stock</span>
                  </div>
                )}
              </div>
              
              <div className="p-2 sm:p-4">
                <div className="mb-1 sm:mb-2">
                  <h3 className="font-medium text-xs sm:text-sm mb-0.5 sm:mb-1 line-clamp-2">{item.name}</h3>
                  <p className="text-xs text-muted-foreground">{item.brand}</p>
                </div>
                
                <div className="flex items-center gap-1 mb-1 sm:mb-2">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        className={`h-2.5 w-2.5 sm:h-3 sm:w-3 ${
                          i < Math.floor(item.rating) 
                            ? 'text-yellow-400 fill-current' 
                            : 'text-gray-300'
                        }`} 
                      />
                    ))}
                  </div>
                  <span className="text-xs text-muted-foreground hidden sm:inline">({item.reviews})</span>
                </div>
                
                <div className="mb-2 sm:mb-3">
                  <div className="flex items-center gap-1 sm:gap-2">
                    <span className="font-bold text-sm sm:text-base">${item.price.toFixed(2)}</span>
                    {item.price < item.originalPrice && (
                      <span className="text-xs sm:text-sm text-muted-foreground line-through">
                        ${item.originalPrice.toFixed(2)}
                      </span>
                    )}
                  </div>
                </div>
                
                <div className="space-y-1 sm:space-y-2 mb-2 sm:mb-4 hidden sm:block">
                  <div>
                    <p className="text-xs text-muted-foreground mb-0.5 sm:mb-1">Available sizes:</p>
                    <div className="flex flex-wrap gap-0.5 sm:gap-1">
                      {item.sizes.slice(0, 4).map((size) => (
                        <span key={size} className="text-xs bg-gray-100 px-1 sm:px-2 py-0.5 sm:py-1 rounded">
                          {size}
                        </span>
                      ))}
                      {item.sizes.length > 4 && (
                        <span className="text-xs text-muted-foreground">+{item.sizes.length - 4}</span>
                      )}
                    </div>
                  </div>
                  
                  <div>
                    <p className="text-xs text-muted-foreground mb-0.5 sm:mb-1">Colors:</p>
                    <div className="flex flex-wrap gap-0.5 sm:gap-1">
                      {item.colors.slice(0, 2).map((color) => (
                        <span key={color} className="text-xs bg-gray-100 px-1 sm:px-2 py-0.5 sm:py-1 rounded">
                          {color}
                        </span>
                      ))}
                      {item.colors.length > 2 && (
                        <span className="text-xs text-muted-foreground">+{item.colors.length - 2}</span>
                      )}
                    </div>
                  </div>
                </div>
                
                <div className="flex gap-1 sm:gap-2">
                  <button 
                    onClick={() => addToCart(item.id)}
                    disabled={!item.inStock}
                    className={`flex-1 flex items-center justify-center gap-1 sm:gap-2 py-1.5 sm:py-2 px-2 sm:px-3 rounded text-xs sm:text-sm font-medium transition-colors ${
                      item.inStock 
                        ? 'bg-primary text-primary-foreground hover:bg-primary/90' 
                        : 'bg-gray-200 text-gray-500 cursor-not-allowed'
                    }`}
                  >
                    <ShoppingCart className="h-3 w-3 sm:h-4 sm:w-4" />
                    <span className="hidden sm:inline">{item.inStock ? 'Add' : 'Out of Stock'}</span>
                    <span className="sm:hidden">{item.inStock ? '+' : 'X'}</span>
                  </button>
                  
                  <button 
                    onClick={() => removeFromFavorites(item.id)}
                    className="p-1.5 sm:p-2 border border-gray-200 rounded hover:bg-gray-50 transition-colors"
                  >
                    <Trash2 className="h-3 w-3 sm:h-4 sm:w-4 text-gray-500" />
                  </button>
                </div>
                
                <p className="text-xs text-muted-foreground mt-1 sm:mt-2 hidden sm:block">
                  Added on {new Date(item.addedDate).toLocaleDateString('en-US')}
                </p>
              </div>
            </div>
          ))}
        </div>
        
        {favorites.length === 0 && (
          <div className="text-center py-12">
            <Heart className="h-12 w-12 text-gray-300 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">No favorites yet</h3>
            <p className="text-gray-500 mb-4">Explore our products and save the ones you like most</p>
            <button className="bg-primary text-primary-foreground px-6 py-2 rounded hover:bg-primary/90">
              Explore Products
            </button>
          </div>
        )}
      </div>
    </PageLayout>
  );
};

export default Favorites;
