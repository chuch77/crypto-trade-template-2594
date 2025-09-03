import fs from 'fs';

// Productos realistas basados en MercadoLibre México
const generateProducts = () => {
  const products = [];
  
  // HOMBRE - 25 productos
  const hombreProducts = [
    { title: "Playera Polo Ralph Lauren Hombre Original", price: 899, colors: ["Azul Marino", "Blanco", "Negro"], sizes: ["S", "M", "L", "XL"] },
    { title: "Jeans Levi's 501 Original Fit Hombre", price: 1299, colors: ["Azul Clásico", "Negro"], sizes: ["30", "32", "34", "36", "38"] },
    { title: "Camisa Formal Tommy Hilfiger Hombre", price: 1199, colors: ["Blanco", "Azul Claro"], sizes: ["S", "M", "L", "XL"] },
    { title: "Sudadera Nike Sportswear Club Fleece", price: 999, colors: ["Gris", "Negro", "Azul Marino"], sizes: ["S", "M", "L", "XL", "XXL"] },
    { title: "Pantalón Chino Dockers Alpha Khaki", price: 899, colors: ["Caqui", "Azul Marino", "Negro"], sizes: ["30", "32", "34", "36"] },
    { title: "Playera Básica Hanes ComfortSoft", price: 299, colors: ["Blanco", "Negro", "Gris"], sizes: ["S", "M", "L", "XL"] },
    { title: "Chamarra Mezclilla Levi's Trucker", price: 1599, colors: ["Azul Clásico", "Negro"], sizes: ["S", "M", "L", "XL"] },
    { title: "Shorts Bermuda Adidas 3-Stripes", price: 699, colors: ["Negro", "Azul Marino"], sizes: ["S", "M", "L", "XL"] },
    { title: "Suéter Cuello V Gap Merino Wool", price: 1299, colors: ["Gris", "Azul Marino", "Negro"], sizes: ["S", "M", "L", "XL"] },
    { title: "Playera Henley Old Navy Soft-Washed", price: 399, colors: ["Gris", "Azul Marino", "Blanco"], sizes: ["S", "M", "L", "XL"] },
    { title: "Pantalón Deportivo Nike Dri-FIT", price: 899, colors: ["Negro", "Gris", "Azul Marino"], sizes: ["S", "M", "L", "XL"] },
    { title: "Camisa Cuadros Flannel American Eagle", price: 799, colors: ["Rojo/Negro", "Azul/Blanco"], sizes: ["S", "M", "L", "XL"] },
    { title: "Hoodie Champion Powerblend Fleece", price: 899, colors: ["Gris", "Negro", "Azul Marino"], sizes: ["S", "M", "L", "XL"] },
    { title: "Jeans Skinny Zara Man Denim", price: 899, colors: ["Azul Oscuro", "Negro"], sizes: ["30", "32", "34", "36"] },
    { title: "Playera Manga Larga Uniqlo Heattech", price: 499, colors: ["Blanco", "Negro", "Gris"], sizes: ["S", "M", "L", "XL"] },
    { title: "Chaleco Acolchado Columbia Flash Forward", price: 1199, colors: ["Negro", "Azul Marino"], sizes: ["S", "M", "L", "XL"] },
    { title: "Bermudas Cargo Dickies Relaxed Fit", price: 699, colors: ["Caqui", "Verde Militar"], sizes: ["30", "32", "34", "36"] },
    { title: "Playera Gráfica Vans Off The Wall", price: 599, colors: ["Negro", "Blanco"], sizes: ["S", "M", "L", "XL"] },
    { title: "Pantalón Jogger Puma Essentials", price: 799, colors: ["Gris", "Negro"], sizes: ["S", "M", "L", "XL"] },
    { title: "Camisa Lino Massimo Dutti Casual", price: 1399, colors: ["Blanco", "Azul Claro"], sizes: ["S", "M", "L", "XL"] },
    { title: "Playera Deportiva Under Armour Tech", price: 699, colors: ["Negro", "Gris", "Azul"], sizes: ["S", "M", "L", "XL"] },
    { title: "Jeans Recto Wrangler Cowboy Cut", price: 999, colors: ["Azul Clásico", "Negro"], sizes: ["30", "32", "34", "36", "38"] },
    { title: "Suéter Crew Neck J.Crew Cotton", price: 1199, colors: ["Gris", "Azul Marino"], sizes: ["S", "M", "L", "XL"] },
    { title: "Shorts Playa Billabong All Day", price: 599, colors: ["Azul", "Negro", "Rojo"], sizes: ["S", "M", "L", "XL"] },
    { title: "Playera Polo Lacoste Classic Fit", price: 1599, colors: ["Blanco", "Azul Marino", "Negro"], sizes: ["S", "M", "L", "XL"] }
  ];

  // MUJER - 25 productos
  const mujerProducts = [
    { title: "Vestido Midi Zara Satinado Elegante", price: 1299, colors: ["Negro", "Azul Marino"], sizes: ["XS", "S", "M", "L", "XL"] },
    { title: "Blusa Seda Massimo Dutti Manga Larga", price: 1599, colors: ["Blanco", "Rosa Palo"], sizes: ["XS", "S", "M", "L"] },
    { title: "Jeans Mom Fit H&M Cintura Alta", price: 799, colors: ["Azul Claro", "Azul Oscuro"], sizes: ["24", "26", "28", "30", "32"] },
    { title: "Cardigan Oversized Gap Cable Knit", price: 999, colors: ["Beige", "Gris", "Rosa"], sizes: ["XS", "S", "M", "L"] },
    { title: "Falda Plisada Midi Uniqlo Jersey", price: 699, colors: ["Negro", "Azul Marino"], sizes: ["XS", "S", "M", "L"] },
    { title: "Top Crop Básico Forever 21", price: 299, colors: ["Blanco", "Negro", "Rosa"], sizes: ["XS", "S", "M", "L"] },
    { title: "Vestido Floral Mango Primavera", price: 899, colors: ["Rosa/Verde", "Azul/Blanco"], sizes: ["XS", "S", "M", "L", "XL"] },
    { title: "Pantalón Palazzo Zara Wide Leg", price: 899, colors: ["Negro", "Beige"], sizes: ["XS", "S", "M", "L"] },
    { title: "Blazer Estructurado Mango Suit", price: 1599, colors: ["Negro", "Gris"], sizes: ["XS", "S", "M", "L", "XL"] },
    { title: "Playera Básica Gap Organic Cotton", price: 399, colors: ["Blanco", "Negro", "Gris"], sizes: ["XS", "S", "M", "L", "XL"] },
    { title: "Jeans Skinny Levi's 711 Mujer", price: 1199, colors: ["Azul Oscuro", "Negro"], sizes: ["24", "26", "28", "30", "32"] },
    { title: "Suéter Cuello Alto COS Merino", price: 1299, colors: ["Crema", "Gris", "Negro"], sizes: ["XS", "S", "M", "L"] },
    { title: "Shorts Denim American Eagle Mom", price: 699, colors: ["Azul Claro", "Blanco"], sizes: ["XS", "S", "M", "L"] },
    { title: "Camisa Oversize Zara Popelín", price: 799, colors: ["Blanco", "Azul Claro"], sizes: ["XS", "S", "M", "L"] },
    { title: "Vestido Wrap & Other Stories", price: 1199, colors: ["Verde", "Azul"], sizes: ["XS", "S", "M", "L", "XL"] },
    { title: "Leggings Deportivos Lululemon Align", price: 1599, colors: ["Negro", "Gris"], sizes: ["XS", "S", "M", "L", "XL"] },
    { title: "Falda Lápiz Banana Republic", price: 899, colors: ["Negro", "Gris"], sizes: ["XS", "S", "M", "L"] },
    { title: "Chaqueta Bomber Pull & Bear", price: 999, colors: ["Negro", "Verde Militar"], sizes: ["XS", "S", "M", "L"] },
    { title: "Top Tirantes Básico H&M", price: 199, colors: ["Blanco", "Negro", "Rosa"], sizes: ["XS", "S", "M", "L", "XL"] },
    { title: "Pantalón Recto Cos Tailored", price: 1299, colors: ["Negro", "Beige"], sizes: ["XS", "S", "M", "L"] },
    { title: "Vestido Camisero Mango Midi", price: 999, colors: ["Blanco", "Azul"], sizes: ["XS", "S", "M", "L", "XL"] },
    { title: "Cardigan Botones Zara Knit", price: 799, colors: ["Beige", "Rosa"], sizes: ["XS", "S", "M", "L"] },
    { title: "Jeans Straight Everlane Organic", price: 1399, colors: ["Azul Clásico", "Negro"], sizes: ["24", "26", "28", "30", "32"] },
    { title: "Blusa Estampada Desigual Boho", price: 899, colors: ["Multicolor", "Azul"], sizes: ["XS", "S", "M", "L"] },
    { title: "Falda Mini Plisada Bershka", price: 499, colors: ["Negro", "Rosa"], sizes: ["XS", "S", "M", "L"] }
  ];

  // NIÑOS - 25 productos
  const ninosProducts = [
    { title: "Playera Dinosaurios Carter's Algodón", price: 299, colors: ["Verde", "Azul"], sizes: ["2", "4", "6", "8", "10"] },
    { title: "Shorts Deportivos Nike Kids Dri-FIT", price: 399, colors: ["Azul", "Negro", "Rojo"], sizes: ["2", "4", "6", "8", "10", "12"] },
    { title: "Sudadera Capucha Adidas Kids", price: 599, colors: ["Gris", "Azul Marino"], sizes: ["2", "4", "6", "8", "10"] },
    { title: "Jeans Cómodos Gap Kids Stretch", price: 699, colors: ["Azul Claro", "Azul Oscuro"], sizes: ["2", "4", "6", "8", "10", "12"] },
    { title: "Polo Rayas Tommy Hilfiger Kids", price: 499, colors: ["Azul/Blanco", "Rojo/Blanco"], sizes: ["2", "4", "6", "8", "10"] },
    { title: "Playera Superhéroes Marvel", price: 349, colors: ["Azul", "Rojo"], sizes: ["2", "4", "6", "8", "10"] },
    { title: "Pantalón Jogger Puma Kids", price: 549, colors: ["Gris", "Negro"], sizes: ["2", "4", "6", "8", "10", "12"] },
    { title: "Camisa Cuadros OshKosh B'gosh", price: 599, colors: ["Rojo/Negro", "Azul/Blanco"], sizes: ["2", "4", "6", "8", "10"] },
    { title: "Playera Manga Larga Uniqlo Kids", price: 399, colors: ["Blanco", "Gris"], sizes: ["2", "4", "6", "8", "10"] },
    { title: "Bermudas Cargo Old Navy Kids", price: 449, colors: ["Caqui", "Verde"], sizes: ["2", "4", "6", "8", "10", "12"] },
    { title: "Suéter Básico H&M Kids", price: 599, colors: ["Azul Marino", "Gris"], sizes: ["2", "4", "6", "8", "10"] },
    { title: "Playera Deportiva Under Armour Kids", price: 449, colors: ["Azul", "Verde"], sizes: ["2", "4", "6", "8", "10", "12"] },
    { title: "Pantalón Formal Dockers Kids", price: 699, colors: ["Azul Marino", "Negro"], sizes: ["2", "4", "6", "8", "10"] },
    { title: "Chaleco Acolchado Columbia Kids", price: 799, colors: ["Azul", "Rojo"], sizes: ["2", "4", "6", "8", "10"] },
    { title: "Playera Básica Fruit of the Loom", price: 249, colors: ["Blanco", "Gris"], sizes: ["2", "4", "6", "8", "10", "12"] },
    { title: "Shorts Básicos Carter's Cotton", price: 299, colors: ["Azul", "Gris"], sizes: ["2", "4", "6", "8", "10", "12"] },
    { title: "Pijama Conjunto Disney Mickey", price: 549, colors: ["Azul", "Rojo"], sizes: ["2", "4", "6", "8", "10"] },
    { title: "Playera Estampada Pokémon", price: 399, colors: ["Amarillo", "Azul"], sizes: ["2", "4", "6", "8", "10"] },
    { title: "Pantalón Deportivo Adidas Kids", price: 599, colors: ["Negro", "Azul Marino"], sizes: ["2", "4", "6", "8", "10", "12"] },
    { title: "Hoodie Básico Gap Kids", price: 699, colors: ["Gris", "Azul"], sizes: ["2", "4", "6", "8", "10"] },
    { title: "Playera Rayas Nautica Kids", price: 449, colors: ["Azul/Blanco", "Rojo/Blanco"], sizes: ["2", "4", "6", "8", "10"] },
    { title: "Jeans Straight Levi's Kids", price: 799, colors: ["Azul Clásico", "Negro"], sizes: ["2", "4", "6", "8", "10", "12"] },
    { title: "Sudadera Sin Capucha Nike Kids", price: 649, colors: ["Gris", "Negro"], sizes: ["2", "4", "6", "8", "10"] },
    { title: "Playera Gráfica Vans Kids", price: 499, colors: ["Negro", "Blanco"], sizes: ["2", "4", "6", "8", "10"] },
    { title: "Shorts Playa Quicksilver Kids", price: 449, colors: ["Azul", "Verde"], sizes: ["2", "4", "6", "8", "10", "12"] }
  ];

  // NIÑAS - 25 productos
  const ninasProducts = [
    { title: "Vestido Princesa Disney Frozen", price: 699, colors: ["Azul", "Rosa"], sizes: ["2", "4", "6", "8", "10"] },
    { title: "Leggings Unicornio Justice", price: 399, colors: ["Rosa/Morado", "Azul/Blanco"], sizes: ["2", "4", "6", "8", "10", "12"] },
    { title: "Blusa Flores Carter's Organic", price: 449, colors: ["Rosa", "Amarillo"], sizes: ["2", "4", "6", "8", "10"] },
    { title: "Falda Tul Brillante H&M Kids", price: 599, colors: ["Rosa", "Dorado"], sizes: ["2", "4", "6", "8", "10"] },
    { title: "Cardigan Suave Gap Kids", price: 699, colors: ["Crema", "Rosa Claro"], sizes: ["2", "4", "6", "8", "10"] },
    { title: "Vestido Casual Old Navy Kids", price: 549, colors: ["Azul", "Rosa"], sizes: ["2", "4", "6", "8", "10"] },
    { title: "Playera Mariposas Gymboree", price: 399, colors: ["Rosa", "Lila"], sizes: ["2", "4", "6", "8", "10"] },
    { title: "Shorts Denim Bordados Zara Kids", price: 499, colors: ["Azul Claro", "Blanco"], sizes: ["2", "4", "6", "8", "10", "12"] },
    { title: "Suéter Corazones Children's Place", price: 649, colors: ["Rosa", "Blanco"], sizes: ["2", "4", "6", "8", "10"] },
    { title: "Leggings Básicos Uniqlo Kids", price: 299, colors: ["Negro", "Gris"], sizes: ["2", "4", "6", "8", "10", "12"] },
    { title: "Vestido Rayas Marinero", price: 599, colors: ["Azul/Blanco", "Rosa/Blanco"], sizes: ["2", "4", "6", "8", "10"] },
    { title: "Blusa Manga Larga Organic Cotton", price: 449, colors: ["Blanco", "Rosa Claro"], sizes: ["2", "4", "6", "8", "10"] },
    { title: "Falda Plisada Escolar", price: 499, colors: ["Azul Marino", "Gris"], sizes: ["2", "4", "6", "8", "10"] },
    { title: "Playera Gatos Kawaii", price: 349, colors: ["Rosa", "Blanco"], sizes: ["2", "4", "6", "8", "10"] },
    { title: "Vestido Fiesta Lentejuelas", price: 899, colors: ["Dorado", "Plata"], sizes: ["2", "4", "6", "8", "10"] },
    { title: "Pantalón Deportivo Nike Girls", price: 549, colors: ["Rosa", "Azul"], sizes: ["2", "4", "6", "8", "10", "12"] },
    { title: "Chaqueta Denim Bordada", price: 799, colors: ["Azul Claro", "Blanco"], sizes: ["2", "4", "6", "8", "10"] },
    { title: "Top Tirantes Básico", price: 299, colors: ["Blanco", "Rosa"], sizes: ["2", "4", "6", "8", "10"] },
    { title: "Pijama Conjunto Unicornio", price: 599, colors: ["Rosa", "Lila"], sizes: ["2", "4", "6", "8", "10"] },
    { title: "Sudadera Capucha Glitter", price: 699, colors: ["Rosa", "Gris"], sizes: ["2", "4", "6", "8", "10"] },
    { title: "Vestido Casual Rayas", price: 549, colors: ["Rosa/Blanco", "Azul/Blanco"], sizes: ["2", "4", "6", "8", "10"] },
    { title: "Leggings Estampado Floral", price: 399, colors: ["Rosa", "Verde"], sizes: ["2", "4", "6", "8", "10", "12"] },
    { title: "Blusa Volantes Romántica", price: 599, colors: ["Blanco", "Rosa"], sizes: ["2", "4", "6", "8", "10"] },
    { title: "Falda Circular Tul", price: 649, colors: ["Rosa", "Lila"], sizes: ["2", "4", "6", "8", "10"] },
    { title: "Playera Arcoíris Brillante", price: 449, colors: ["Multicolor", "Blanco"], sizes: ["2", "4", "6", "8", "10"] }
  ];

  // Función para transformar a formato completo
  const transformProduct = (product, category, index) => {
    const colorObjects = product.colors.map(color => ({
      name: color,
      hex: getColorHex(color)
    }));

    const isOnSale = Math.random() < 0.3;
    const isNew = Math.random() < 0.2;

    return {
      id: `ml_${category}_${index + 1}`,
      title: product.title,
      description: generateDescription(product.title),
      price: product.price,
      category: category,
      image_url: `https://picsum.photos/500/600?random=${category}_${index + 1}`,
      images: [
        `https://picsum.photos/500/600?random=${category}_${index + 1}_1`,
        `https://picsum.photos/500/600?random=${category}_${index + 1}_2`,
        `https://picsum.photos/500/600?random=${category}_${index + 1}_3`
      ],
      colors: colorObjects,
      sizes: product.sizes,
      rating: 4.0 + Math.random() * 1,
      is_new: isNew,
      is_on_sale: isOnSale,
      discount_percent: isOnSale ? Math.floor(Math.random() * 30) + 10 : 0,
      stock: Math.floor(Math.random() * 100) + 20
    };
  };

  // Generar todos los productos
  hombreProducts.forEach((product, index) => {
    products.push(transformProduct(product, 'hombre', index));
  });

  mujerProducts.forEach((product, index) => {
    products.push(transformProduct(product, 'mujer', index));
  });

  ninosProducts.forEach((product, index) => {
    products.push(transformProduct(product, 'ninos', index));
  });

  ninasProducts.forEach((product, index) => {
    products.push(transformProduct(product, 'ninas', index));
  });

  return products;
};

// Funciones auxiliares
const getColorHex = (colorName) => {
  const colorMap = {
    'Negro': '#000000',
    'Blanco': '#FFFFFF',
    'Azul': '#3B82F6',
    'Azul Marino': '#1E40AF',
    'Azul Claro': '#60A5FA',
    'Azul Oscuro': '#1E3A8A',
    'Azul Clásico': '#2563EB',
    'Rojo': '#EF4444',
    'Verde': '#10B981',
    'Verde Militar': '#166534',
    'Rosa': '#F472B6',
    'Rosa Claro': '#FECACA',
    'Rosa Palo': '#F9A8D4',
    'Gris': '#6B7280',
    'Amarillo': '#F59E0B',
    'Morado': '#A855F7',
    'Lila': '#C084FC',
    'Beige': '#D6D3D1',
    'Caqui': '#92400E',
    'Crema': '#FEF7CD',
    'Dorado': '#F59E0B',
    'Plata': '#9CA3AF',
    'Multicolor': '#3B82F6'
  };
  return colorMap[colorName] || '#6B7280';
};

const generateDescription = (title) => {
  const descriptions = [
    'Prenda de alta calidad con diseño moderno y cómodo.',
    'Perfecto para uso diario, combina estilo y comodidad.',
    'Material premium con acabados de excelente calidad.',
    'Diseño versátil que se adapta a cualquier ocasión.',
    'Confeccionado con materiales de primera calidad.',
    'Estilo contemporáneo con detalles únicos.',
    'Comodidad y elegancia en una sola prenda.',
    'Diseño atemporal que nunca pasa de moda.'
  ];
  return descriptions[Math.floor(Math.random() * descriptions.length)];
};

// Generar y guardar productos
const products = generateProducts();

console.log('🚀 Generando 100 productos realistas...');
console.log(`✅ Generados ${products.length} productos`);

// Guardar JSON
fs.writeFileSync('productos_realistas.json', JSON.stringify(products, null, 2));

// Crear CSV para Supabase
const csvHeader = 'title,description,price,category,image_url,colors,sizes,rating,is_new,is_on_sale,discount_percent,stock\n';
const csvRows = products.map(p => 
  `"${p.title}","${p.description}",${p.price},"${p.category}","${p.image_url}","${JSON.stringify(p.colors).replace(/"/g, '""')}","${JSON.stringify(p.sizes).replace(/"/g, '""')}",${p.rating.toFixed(1)},${p.is_new},${p.is_on_sale},${p.discount_percent},${p.stock}`
).join('\n');

fs.writeFileSync('productos_realistas.csv', csvHeader + csvRows);

console.log('📁 Archivos guardados:');
console.log('  - productos_realistas.json');
console.log('  - productos_realistas.csv');

// Resumen por categoría
const summary = products.reduce((acc, p) => {
  acc[p.category] = (acc[p.category] || 0) + 1;
  return acc;
}, {});

console.log('\n📊 Resumen por categoría:');
Object.entries(summary).forEach(([cat, count]) => {
  console.log(`  ${cat}: ${count} productos`);
});

console.log('\n🎉 ¡Listo para importar a Supabase!');