
import React from 'react';
import { PageLayout } from '@/components/layout/PageLayout';
import { TrendingUp } from 'lucide-react';

const Trends = () => {
  const trends = [
    { name: 'Sustainable Fashion', growth: 45.2, category: 'Eco-friendly' },
    { name: 'Streetwear', growth: 32.8, category: 'Urban' },
    { name: 'Vintage', growth: 28.5, category: 'Retro' },
    { name: 'Minimalism', growth: 22.1, category: 'Classic' },
    { name: 'Athleisure', growth: 18.7, category: 'Sports' },
    { name: 'Boho Chic', growth: 15.3, category: 'Bohemian' }
  ];
  
  const seasons = [
    { name: 'Spring 2024', items: ['Florals', 'Pastel colors', 'Light fabrics'] },
    { name: 'Summer 2024', items: ['Linen', 'Vibrant colors', 'Shorts'] },
    { name: 'Fall 2024', items: ['Layers', 'Earth tones', 'Boots'] }
  ];
  
  return (
    <PageLayout title="Trends">
      <div className="grid grid-cols-1 gap-8">
        <div className="bg-card rounded-lg p-6 shadow">
          <div className="flex items-center gap-3 mb-4">
            <TrendingUp className="h-6 w-6 text-primary" />
            <h2 className="text-xl font-semibold">Current Fashion Trends</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
            {trends.map((trend) => (
              <div key={trend.name} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                <h3 className="font-semibold text-lg mb-2">{trend.name}</h3>
                <p className="text-sm text-muted-foreground mb-3">{trend.category}</p>
                <div className="flex justify-between items-center">
                  <span className="text-sm">Growth:</span>
                  <span className="text-green-500 font-medium">
                    +{trend.growth}%
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="bg-card rounded-lg p-6 shadow">
          <h2 className="text-xl font-semibold mb-4">Seasonal Calendar</h2>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-2 px-4">Season</th>
                  <th className="text-left py-2 px-4">Key Trends</th>
                  <th className="text-left py-2 px-4">Status</th>
                </tr>
              </thead>
              <tbody>
                {seasons.map((season) => (
                  <tr key={season.name} className="border-b">
                    <td className="py-3 px-4 font-medium">{season.name}</td>
                    <td className="py-3 px-4">
                      <div className="flex flex-wrap gap-1">
                        {season.items.map((item) => (
                          <span key={item} className="bg-primary/10 text-primary px-2 py-1 rounded text-xs">
                            {item}
                          </span>
                        ))}
                      </div>
                    </td>
                    <td className="py-3 px-4">
                      <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs">
                        Active
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-card rounded-lg p-6 shadow">
            <h3 className="text-lg font-semibold mb-4">Seasonal Colors</h3>
            <div className="grid grid-cols-4 gap-3">
              {[
                { name: 'Living Coral', color: '#FF6B6B' },
                { name: 'Sage Green', color: '#95D5B2' },
                { name: 'Sky Blue', color: '#74C0FC' },
                { name: 'Lavender', color: '#B197FC' },
                { name: 'Terracotta', color: '#F08C00' },
                { name: 'Dusty Rose', color: '#FFB3BA' },
                { name: 'Sun Yellow', color: '#FFD93D' },
                { name: 'Pearl Gray', color: '#ADB5BD' }
              ].map((colorItem) => (
                <div key={colorItem.name} className="text-center">
                  <div 
                    className="w-12 h-12 rounded-full mx-auto mb-2 border-2 border-gray-200"
                    style={{ backgroundColor: colorItem.color }}
                  ></div>
                  <p className="text-xs text-muted-foreground">{colorItem.name}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div className="bg-card rounded-lg p-6 shadow">
            <h3 className="text-lg font-semibold mb-4">Fashion Influencers</h3>
            <div className="space-y-3">
              {[
                { name: '@fashionista_mx', followers: '2.3M', engagement: '8.5%' },
                { name: '@style_guru', followers: '1.8M', engagement: '7.2%' },
                { name: '@trendy_closet', followers: '1.2M', engagement: '9.1%' },
                { name: '@chic_vibes', followers: '980K', engagement: '6.8%' }
              ].map((influencer) => (
                <div key={influencer.name} className="flex justify-between items-center p-3 border rounded">
                  <div>
                    <p className="font-medium">{influencer.name}</p>
                    <p className="text-sm text-muted-foreground">{influencer.followers} followers</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-medium text-green-500">{influencer.engagement}</p>
                    <p className="text-xs text-muted-foreground">engagement</p>
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

export default Trends;
