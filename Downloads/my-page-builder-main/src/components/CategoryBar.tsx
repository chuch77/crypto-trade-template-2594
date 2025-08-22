import React from 'react';

const CategoryBar = () => {
  const categories = [
    { id: 1, name: 'Smartphones', active: true },
    { id: 2, name: 'Laptops', active: false },
    { id: 3, name: 'Tablets', active: false },
    { id: 4, name: 'Audio', active: false },
    { id: 5, name: 'Accesorios', active: false },
    { id: 6, name: 'Ofertas', active: false },
  ];

  return (
    <div className="bg-primary py-3">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center flex-wrap md:flex-nowrap gap-2">
          {categories.map((category) => (
            <a 
              key={category.id} 
              href="#" 
              className={`text-white font-medium px-4 py-2 rounded-md transition-colors ${category.active ? 'bg-blue-800' : 'hover:bg-blue-700'}`}
            >
              {category.name}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoryBar;