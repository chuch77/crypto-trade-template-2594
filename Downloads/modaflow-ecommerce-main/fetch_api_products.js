// Script para obtener productos de APIs públicas
import fs from 'fs';

async function fetchProducts() {
  const products = [];
  
  try {
    // 1. DummyJSON - Categorías de ropa
    const dummyCategories = ['mens-shirts', 'mens-shoes', 'mens-watches', 'womens-dresses', 'womens-shoes', 'womens-bags'];
    
    for (const category of dummyCategories) {
      try {
        const response = await fetch(`https://dummyjson.com/products/category/${category}?limit=8`);
        const data = await response.json();
        
        data.products.forEach(product => {
          const images = product.images.filter(img => img.startsWith('https://'));
          if (images.length > 0) {
            products.push({
              id: `dummy-${product.id}`,
              source: 'dummyjson',
              title: product.title,
              price: Math.round(product.price * 18 * 100) / 100, // USD to MXN
              currency: 'MXN',
              category: category.replace('-', ' '),
              images: images.slice(0, 3),
              thumbnail: images[0],
              rating: product.rating || 4.0
            });
          }
        });
      } catch (error) {
        console.log(`Error fetching ${category}:`, error.message);
      }
    }

    // 2. Platzi Fake Store API
    try {
      const response = await fetch('https://api.escuelajs.co/api/v1/products?limit=50&offset=0');
      const data = await response.json();
      
      const clothingProducts = data.filter(product => {
        const title = product.title.toLowerCase();
        const categoryName = product.category?.name?.toLowerCase() || '';
        return (
          title.includes('shirt') || title.includes('dress') || title.includes('shoe') ||
          title.includes('clothes') || title.includes('jean') || title.includes('jacket') ||
          categoryName.includes('clothes') || categoryName.includes('shoe')
        );
      }).slice(0, 12);

      clothingProducts.forEach(product => {
        const images = product.images.filter(img => img.startsWith('https://'));
        if (images.length > 0) {
          products.push({
            id: `platzi-${product.id}`,
            source: 'platzi',
            title: product.title,
            price: Math.round(product.price * 18 * 100) / 100, // USD to MXN
            currency: 'MXN',
            category: product.category?.name || 'clothing',
            images: images.slice(0, 3),
            thumbnail: images[0],
            rating: 4.0 + Math.random() * 1
          });
        }
      });
    } catch (error) {
      console.log('Error fetching Platzi:', error.message);
    }

    // 3. Fake Store API (si necesitamos más productos)
    if (products.length < 60) {
      try {
        const response = await fetch('https://fakestoreapi.com/products');
        const data = await response.json();
        
        const clothingProducts = data.filter(product => {
          const category = product.category.toLowerCase();
          return category.includes('clothing') || category.includes('jewelery');
        }).slice(0, 60 - products.length);

        clothingProducts.forEach(product => {
          products.push({
            id: `fake-${product.id}`,
            source: 'fakestore',
            title: product.title,
            price: Math.round(product.price * 18 * 100) / 100, // USD to MXN
            currency: 'MXN',
            category: product.category,
            images: [product.image],
            thumbnail: product.image,
            rating: product.rating?.rate || 4.0
          });
        });
      } catch (error) {
        console.log('Error fetching FakeStore:', error.message);
      }
    }

    console.log(`✅ Obtenidos ${products.length} productos`);

    // Generar JSON
    const jsonContent = JSON.stringify(products, null, 2);
    fs.writeFileSync('public/products.json', jsonContent);

    // Generar CSV
    const csvHeader = 'id,title,price,currency,category,thumbnail,all_image_urls,source\n';
    const csvRows = products.map(p => 
      `"${p.id}","${p.title.replace(/"/g, '""')}",${p.price},"${p.currency}","${p.category}","${p.thumbnail}","${p.images.join('|')}","${p.source}"`
    ).join('\n');
    fs.writeFileSync('public/products.csv', csvHeader + csvRows);

    // Generar TypeScript export
    const tsContent = `export const PRODUCTS = ${JSON.stringify(products, null, 2)} as const;`;
    fs.writeFileSync('src/data/products.ts', tsContent);

    console.log('📁 Archivos generados:');
    console.log('  - public/products.json');
    console.log('  - public/products.csv');
    console.log('  - src/data/products.ts');

    // Mostrar primeros productos como ejemplo
    console.log('\n📦 Primeros 3 productos:');
    products.slice(0, 3).forEach(p => {
      console.log(`  ${p.title} - $${p.price} MXN - ${p.images.length} imágenes`);
    });

    return products;

  } catch (error) {
    console.error('❌ Error general:', error);
    return [];
  }
}

// Ejecutar
fetchProducts();