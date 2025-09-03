
import React, { useState } from 'react';
import { PageLayout } from '@/components/layout/PageLayout';
import { Search, Filter, Grid, List, Star, Heart, ShoppingCart, Eye } from 'lucide-react';

const Stocks = () => {
  const [viewMode, setViewMode] = useState('grid');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('popular');
  const [selectedProduct, setSelectedProduct] = useState(null);
  
  const products = [
    {
      id: 1,
      name: 'Premium Basic T-Shirt',
      brand: 'StyleHub',
      price: 29.99,
      originalPrice: 39.99,
      category: 'shirts',
      rating: 4.8,
      reviews: 234,
      colors: ['Black', 'White', 'Gray', 'Navy Blue'],
      sizes: ['XS', 'S', 'M', 'L', 'XL'],
      image: '/placeholder.svg',
      isNew: true,
      isFavorite: false,
      stock: 45
    },
    {
      id: 2,
      name: 'Classic Slim Fit Jeans',
      brand: 'Denim Co.',
      price: 79.99,
      originalPrice: 99.99,
      category: 'pants',
      rating: 4.6,
      reviews: 189,
      colors: ['Dark Blue', 'Black', 'Light Blue'],
      sizes: ['28', '30', '32', '34', '36'],
      image: '/placeholder.svg',
      isNew: false,
      isFavorite: true,
      stock: 23
    },
    {
      id: 3,
      name: 'Elegant Midi Dress',
      brand: 'Elegance',
      price: 89.99,
      originalPrice: 89.99,
      category: 'dresses',
      rating: 4.9,
      reviews: 156,
      colors: ['Black', 'Navy Blue', 'Burgundy'],
      sizes: ['XS', 'S', 'M', 'L'],
      image: '/placeholder.svg',
      isNew: true,
      isFavorite: false,
      stock: 12
    },
    {
      id: 4,
      name: 'Pro Sports Sneakers',
      brand: 'SportMax',
      price: 129.99,
      originalPrice: 159.99,
      category: 'shoes',
      rating: 4.7,
      reviews: 298,
      colors: ['White/Black', 'Gray/Blue', 'Black/Red'],
      sizes: ['38', '39', '40', '41', '42', '43'],
      image: '/placeholder.svg',
      isNew: false,
      isFavorite: true,
      stock: 8
    },
    {
      id: 5,
      name: 'Vintage Bomber Jacket',
      brand: 'Retro Style',
      price: 149.99,
      originalPrice: 199.99,
      category: 'jackets',
      rating: 4.5,
      reviews: 87,
      colors: ['Military Green', 'Black', 'Navy Blue'],
      sizes: ['S', 'M', 'L', 'XL'],
      image: '/placeholder.svg',
      isNew: false,
      isFavorite: false,
      stock: 15
    },
    {
      id: 6,
      name: 'Spring Floral Blouse',
      brand: 'Bloom',
      price: 45.99,
      originalPrice: 59.99,
      category: 'blouses',
      rating: 4.4,
      reviews: 123,
      colors: ['Pink Floral', 'Blue Floral', 'Yellow Floral'],
      sizes: ['XS', 'S', 'M', 'L', 'XL'],
      image: '/placeholder.svg',
      isNew: true,
      isFavorite: false,
      stock: 32
    }
  ];
  
  const categories = [
    { id: 'all', name: 'All', count: products.length },
    { id: 'shirts', name: 'T-Shirts', count: products.filter(p => p.category === 'shirts').length },
    { id: 'pants', name: 'Pants', count: products.filter(p => p.category === 'pants').length },
    { id: 'dresses', name: 'Dresses', count: products.filter(p => p.category === 'dresses').length },
    { id: 'shoes', name: 'Shoes', count: products.filter(p => p.category === 'shoes').length },
    { id: 'jackets', name: 'Jackets', count: products.filter(p => p.category === 'jackets').length },
    { id: 'blouses', name: 'Blouses', count: products.filter(p => p.category === 'blouses').length }
  ];
  
  const filteredProducts = products.filter(product => 
    selectedCategory === 'all' || product.category === selectedCategory
  );
  
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case 'price-low':
        return a.price - b.price;
      case 'price-high':
        return b.price - a.price;
      case 'rating':
        return b.rating - a.rating;
      case 'newest':
        return b.isNew - a.isNew;
      default:
        return b.reviews - a.reviews;
    }
  });
  
  const getDiscountPercentage = (price, originalPrice) => {
    return Math.round(((originalPrice - price) / originalPrice) * 100);
  };
  
  return (
    <PageLayout title="Productos">
      <div className="space-y-6">
        {/* Header con búsqueda y filtros */}
        <div className="flex flex-col gap-3 sm:gap-4">
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 items-stretch sm:items-center justify-between">
            <div className="flex-1 max-w-full sm:max-w-md">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <input
                  type="text"
                  placeholder="Search products..."
                  className="w-full pl-10 pr-4 py-2 text-sm sm:text-base border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                />
              </div>
            </div>
            
            <div className="flex items-center gap-2 sm:gap-4">
              <select 
                value={sortBy} 
                onChange={(e) => setSortBy(e.target.value)}
                className="flex-1 sm:flex-none px-2 sm:px-3 py-2 text-sm border rounded-lg focus:ring-2 focus:ring-primary"
              >
                <option value="popular">Most Popular</option>
                <option value="newest">Newest</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Best Rated</option>
              </select>
              
              <div className="flex border rounded-lg">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-1.5 sm:p-2 ${viewMode === 'grid' ? 'bg-primary text-white' : 'text-gray-600'}`}
                >
                  <Grid className="h-3 w-3 sm:h-4 sm:w-4" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-1.5 sm:p-2 ${viewMode === 'list' ? 'bg-primary text-white' : 'text-gray-600'}`}
                >
                  <List className="h-3 w-3 sm:h-4 sm:w-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-3 sm:gap-6">
          {/* Sidebar de categorías */}
          <div className="lg:col-span-1 order-2 lg:order-1">
            <div className="bg-card rounded-lg p-3 sm:p-6 shadow lg:sticky lg:top-4">
              <h3 className="font-semibold mb-3 sm:mb-4 text-sm sm:text-base">Categories</h3>
              <div className="space-y-1 sm:space-y-2">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`w-full text-left px-2 sm:px-3 py-1.5 sm:py-2 rounded-md transition-colors text-sm ${
                      selectedCategory === category.id 
                        ? 'bg-primary text-white' 
                        : 'hover:bg-gray-100'
                    }`}
                  >
                    <div className="flex justify-between items-center">
                      <span>{category.name}</span>
                      <span className="text-xs sm:text-sm opacity-75">({category.count})</span>
                    </div>
                  </button>
                ))}
              </div>
              
              <div className="mt-4 sm:mt-6 pt-4 sm:pt-6 border-t">
                <h4 className="font-medium mb-2 sm:mb-3 text-sm sm:text-base">Filters</h4>
                <div className="space-y-3 sm:space-y-4">
                  <div>
                    <label className="block text-xs sm:text-sm font-medium mb-1 sm:mb-2">Price</label>
                    <div className="flex gap-1 sm:gap-2">
                      <input type="number" placeholder="Min" className="w-full px-1.5 sm:px-2 py-1 border rounded text-xs sm:text-sm" />
                      <input type="number" placeholder="Max" className="w-full px-1.5 sm:px-2 py-1 border rounded text-xs sm:text-sm" />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-xs sm:text-sm font-medium mb-1 sm:mb-2">Size</label>
                    <div className="flex flex-wrap gap-1">
                      {['XS', 'S', 'M', 'L', 'XL'].map((size) => (
                        <button key={size} className="px-1.5 sm:px-2 py-0.5 sm:py-1 border rounded text-xs hover:bg-gray-100">
                          {size}
                        </button>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <label className="flex items-center gap-1 sm:gap-2">
                      <input type="checkbox" className="rounded" />
                      <span className="text-xs sm:text-sm">On sale only</span>
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Grid de productos */}
          <div className="lg:col-span-3 order-1 lg:order-2">
            <div className="mb-3 sm:mb-4">
              <p className="text-xs sm:text-sm text-gray-600">
                Showing {sortedProducts.length} products
              </p>
            </div>
            
            <div className={viewMode === 'grid' 
              ? 'grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-3 gap-2 sm:gap-4 lg:gap-6' 
              : 'space-y-3 sm:space-y-4'
            }>
              {sortedProducts.map((product) => (
                <div key={product.id} className={`bg-card rounded-lg shadow hover:shadow-lg transition-shadow ${
                  viewMode === 'list' ? 'flex gap-2 sm:gap-4 p-2 sm:p-4' : ''
                }`}>
                  <div className={`relative ${
                    viewMode === 'list' ? 'w-20 h-20 sm:w-32 sm:h-32 flex-shrink-0' : 'aspect-square'
                  }`}>
                    <div className="w-full h-full bg-gray-200 rounded-lg flex items-center justify-center">
                      <span className="text-gray-500 text-xs sm:text-sm">IMG</span>
                    </div>
                    
                    {product.isNew && (
                      <span className="absolute top-1 left-1 sm:top-2 sm:left-2 bg-green-500 text-white px-1 sm:px-2 py-0.5 sm:py-1 rounded text-xs font-medium">
                        New
                      </span>
                    )}
                    
                    {product.price < product.originalPrice && (
                      <span className="absolute top-1 right-1 sm:top-2 sm:right-2 bg-red-500 text-white px-1 sm:px-2 py-0.5 sm:py-1 rounded text-xs font-medium">
                        -{getDiscountPercentage(product.price, product.originalPrice)}%
                      </span>
                    )}
                    
                    <div className="absolute bottom-1 right-1 sm:bottom-2 sm:right-2 flex gap-0.5 sm:gap-1">
                      <button className="p-1 sm:p-1.5 bg-white rounded-full shadow hover:bg-gray-50">
                        <Heart className={`h-3 w-3 sm:h-4 sm:w-4 ${product.isFavorite ? 'text-red-500 fill-current' : 'text-gray-600'}`} />
                      </button>
                      <button className="p-1 sm:p-1.5 bg-white rounded-full shadow hover:bg-gray-50">
                        <Eye className="h-3 w-3 sm:h-4 sm:w-4 text-gray-600" />
                      </button>
                    </div>
                  </div>
                  
                  <div className={`p-2 sm:p-4 flex-1 ${viewMode === 'list' ? 'p-0' : ''}`}>
                    <div className="mb-1 sm:mb-2">
                      <h3 className="font-medium text-xs sm:text-sm mb-0.5 sm:mb-1 line-clamp-2">{product.name}</h3>
                      <p className="text-xs text-gray-500">{product.brand}</p>
                    </div>
                    
                    <div className="flex items-center gap-1 mb-1 sm:mb-2">
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className={`h-2.5 w-2.5 sm:h-3 sm:w-3 ${
                            i < Math.floor(product.rating) 
                              ? 'text-yellow-400 fill-current' 
                              : 'text-gray-300'
                          }`} />
                        ))}
                      </div>
                      <span className="text-xs text-gray-500 hidden sm:inline">({product.reviews})</span>
                    </div>
                    
                    <div className="mb-2 sm:mb-3">
                      <div className="flex items-center gap-1 sm:gap-2">
                        <span className="font-bold text-sm sm:text-lg">${product.price.toFixed(2)}</span>
                        {product.price < product.originalPrice && (
                          <span className="text-xs sm:text-sm text-gray-500 line-through">
                            ${product.originalPrice.toFixed(2)}
                          </span>
                        )}
                      </div>
                    </div>
                    
                    <div className={`space-y-1 sm:space-y-2 mb-2 sm:mb-4 ${viewMode === 'grid' ? 'hidden sm:block' : ''}`}>
                      <div>
                        <p className="text-xs text-gray-500 mb-0.5 sm:mb-1">Colors:</p>
                        <div className="flex gap-0.5 sm:gap-1">
                          {product.colors.slice(0, 3).map((color, i) => (
                            <div key={i} className="w-3 h-3 sm:w-4 sm:h-4 rounded-full border border-gray-300 bg-gray-200"></div>
                          ))}
                          {product.colors.length > 3 && (
                            <span className="text-xs text-gray-500">+{product.colors.length - 3}</span>
                          )}
                        </div>
                      </div>
                      
                      <p className="text-xs text-gray-500">
                        Stock: {product.stock} units
                      </p>
                    </div>
                    
                    <button className="w-full bg-primary text-white py-1.5 sm:py-2 rounded-md hover:bg-primary/90 transition-colors flex items-center justify-center gap-1 sm:gap-2 text-xs sm:text-sm">
                      <ShoppingCart className="h-3 w-3 sm:h-4 sm:w-4" />
                      <span className="hidden sm:inline">Add to Cart</span>
                      <span className="sm:hidden">Add</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default Stocks;
