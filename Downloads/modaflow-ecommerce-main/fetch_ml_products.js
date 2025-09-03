import { mercadoLibreApi } from './src/lib/mercadoLibreApi.js';
import fs from 'fs';

async function fetchAndSaveProducts() {
  console.log('🚀 Obteniendo productos de MercadoLibre...');
  
  try {
    // Obtener 100 productos reales
    const products = await mercadoLibreApi.get100Products();
    
    console.log(`✅ Obtenidos ${products.length} productos`);
    
    // Guardar como JSON
    fs.writeFileSync('productos_mercadolibre.json', JSON.stringify(products, null, 2));
    
    // Crear CSV
    const csvHeader = 'title,description,price,category,image_url,images,colors,sizes,rating,is_new,is_on_sale,discount_percent,stock,ml_id,ml_permalink\n';
    const csvRows = products.map(p => 
      `"${p.title}","${p.description}",${p.price},"${p.category}","${p.image_url}","${p.images.join(';')}","${JSON.stringify(p.colors).replace(/"/g, '""')}","${p.sizes.join(';')}",${p.rating},${p.is_new},${p.is_on_sale},${p.discount_percent},${p.stock},"${p.ml_id}","${p.ml_permalink}"`
    ).join('\n');
    
    fs.writeFileSync('productos_mercadolibre.csv', csvHeader + csvRows);
    
    console.log('📁 Archivos guardados:');
    console.log('  - productos_mercadolibre.json');
    console.log('  - productos_mercadolibre.csv');
    
    // Mostrar resumen por categoría
    const summary = products.reduce((acc, p) => {
      acc[p.category] = (acc[p.category] || 0) + 1;
      return acc;
    }, {});
    
    console.log('\n📊 Resumen por categoría:');
    Object.entries(summary).forEach(([cat, count]) => {
      console.log(`  ${cat}: ${count} productos`);
    });
    
  } catch (error) {
    console.error('❌ Error:', error);
  }
}

// Ejecutar
fetchAndSaveProducts();