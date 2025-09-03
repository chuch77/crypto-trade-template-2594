
import React from 'react';
import { PageLayout } from '@/components/layout/PageLayout';

const Brands = () => {
  const brands = [
    { name: 'Nike', products: 156, rating: 4.8, popularity: 95 },
    { name: 'Adidas', products: 142, rating: 4.7, popularity: 89 },
    { name: 'Zara', products: 298, rating: 4.5, popularity: 87 },
    { name: 'H&M', products: 234, rating: 4.3, popularity: 82 },
    { name: 'Uniqlo', products: 178, rating: 4.6, popularity: 78 },
    { name: 'Levi\'s', products: 89, rating: 4.7, popularity: 75 }
  ];
  
  return (
    <PageLayout title="Brands">
      <div className="grid grid-cols-1 gap-6">
        <div className="bg-card rounded-lg p-6 shadow">
          <h2 className="text-xl font-semibold mb-4">Our Brands</h2>
          <p className="text-muted-foreground">Discover the best fashion brands available in our store</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {brands.map((brand) => (
            <div key={brand.name} className="bg-card rounded-lg p-6 shadow hover:shadow-lg transition-shadow cursor-pointer">
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-semibold text-xl">{brand.name}</h3>
                <div className="text-right">
                  <div className="flex items-center">
                    <span className="text-yellow-500 mr-1">⭐</span>
                    <span className="font-medium">{brand.rating}</span>
                  </div>
                </div>
              </div>
              
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Products:</span>
                  <span className="font-medium">{brand.products}</span>
                </div>
                
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-muted-foreground">Popularity:</span>
                    <span className="font-medium">{brand.popularity}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-primary h-2 rounded-full" 
                      style={{ width: `${brand.popularity}%` }}
                    ></div>
                  </div>
                </div>
              </div>
              
              <button className="w-full mt-4 bg-primary text-primary-foreground py-2 rounded-md hover:bg-primary/90 transition-colors">
                View Products
              </button>
            </div>
          ))}
        </div>
        
        <div className="bg-card rounded-lg p-6 shadow mt-6">
          <h2 className="text-xl font-semibold mb-4">Brand Comparison</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">Brand 1</label>
                <select className="w-full px-3 py-2 border rounded-md">
                  <option value="nike">Nike</option>
                  <option value="adidas">Adidas</option>
                  <option value="zara">Zara</option>
                  <option value="hm">H&M</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Category</label>
                <select className="w-full px-3 py-2 border rounded-md">
                  <option value="shoes">Shoes</option>
                  <option value="shirts">T-Shirts</option>
                  <option value="pants">Pants</option>
                </select>
              </div>
            </div>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">Brand 2</label>
                <select className="w-full px-3 py-2 border rounded-md">
                  <option value="adidas">Adidas</option>
                  <option value="nike">Nike</option>
                  <option value="zara">Zara</option>
                  <option value="hm">H&M</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Result</label>
                <div className="w-full px-3 py-2 border rounded-md bg-gray-50">
                  Nike: 4.8⭐ vs Adidas: 4.7⭐
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default Brands;
