
import React from 'react';
import { PageLayout } from '@/components/layout/PageLayout';

const Markets = () => {
  const indices = useMarketIndices(mockIndices);
  
  const categories = [
    { name: 'T-Shirts', products: 245, growth: 12.5, region: 'Men' },
    { name: 'Pants', products: 189, growth: 8.3, region: 'Women' },
    { name: 'Dresses', products: 156, growth: 15.7, region: 'Women' },
    { name: 'Shoes', products: 298, growth: -2.1, region: 'Unisex' },
    { name: 'Accessories', products: 134, growth: 22.4, region: 'Unisex' },
    { name: 'Jackets', products: 87, growth: 5.9, region: 'Men' }
  ];
  
  return (
    <PageLayout title="Categories">
      <div className="grid grid-cols-1 gap-6">
        <div className="bg-card rounded-lg p-6 shadow">
          <h2 className="text-xl font-semibold mb-4">Categories Overview</h2>
          <p className="text-muted-foreground">Explore our most popular product categories</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
          {categories.map((category) => (
            <div key={category.name} className="bg-card rounded-lg p-6 shadow hover:shadow-lg transition-shadow cursor-pointer">
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="font-semibold text-lg">{category.name}</h3>
                  <p className="text-muted-foreground text-sm">{category.region}</p>
                </div>
                <div className={`text-lg font-bold ${category.growth >= 0 ? 'text-green-500' : 'text-red-500'}`}>
                  {category.growth >= 0 ? '+' : ''}{category.growth.toFixed(1)}%
                </div>
              </div>
              <div className="mt-4">
                <span className="text-2xl font-bold">{category.products}</span>
                <span className="ml-2 text-muted-foreground text-sm">products</span>
              </div>
              <p className="text-xs text-muted-foreground mt-4">
                Updated: {new Date().toLocaleDateString()}
              </p>
            </div>
          ))}
        </div>
      </div>
    </PageLayout>
  );
};

export default Markets;
