const MERCADO_LIBRE_API = 'https://api.mercadolibre.com';

export const mercadoLibreApi = {
  // Buscar productos de ropa por categoría
  async searchProducts(category = 'ropa', limit = 50) {
    try {
      const queries = {
        hombre: 'ropa hombre camisa pantalon',
        mujer: 'ropa mujer vestido blusa',
        ninos: 'ropa niño playera',
        ninas: 'ropa niña vestido'
      };

      const query = queries[category] || category;
      const url = `${MERCADO_LIBRE_API}/sites/MLM/search?q=${encodeURIComponent(query)}&limit=${limit}&condition=new`;
      
      const response = await fetch(url);
      const data = await response.json();
      
      if (!data.results || data.results.length === 0) {
        console.log(`No results for category: ${category}`);
        return [];
      }
      
      // Obtener detalles completos de cada producto
      const detailedProducts = await Promise.all(
        data.results.slice(0, 25).map(product => this.getProductDetails(product.id))
      );
      
      return detailedProducts.filter(p => p !== null);
    } catch (error) {
      console.error('Error fetching products:', error);
      return [];
    }
  },

  // Obtener detalles completos de un producto
  async getProductDetails(productId) {
    try {
      const [productResponse, picturesResponse] = await Promise.all([
        fetch(`${MERCADO_LIBRE_API}/items/${productId}`),
        fetch(`${MERCADO_LIBRE_API}/items/${productId}/pictures`)
      ]);

      const product = await productResponse.json();
      const pictures = await picturesResponse.json();

      return this.transformProduct(product, pictures);
    } catch (error) {
      console.error(`Error fetching product ${productId}:`, error);
      return null;
    }
  },

  // Transformar producto de ML a nuestro formato
  transformProduct(product, pictures) {
    const images = pictures.map(pic => pic.secure_url).slice(0, 3);
    
    return {
      id: product.id,
      title: product.title,
      description: this.cleanDescription(product.title),
      price: Math.round(product.price),
      category: this.detectCategory(product.title, product.category_id),
      image_url: images[0] || product.thumbnail,
      images: images.length > 0 ? images : [product.thumbnail],
      colors: this.extractColors(product.title),
      sizes: this.extractSizes(product.title),
      rating: 4.0 + Math.random() * 1,
      is_new: true,
      is_on_sale: product.original_price > product.price,
      discount_percent: product.original_price 
        ? Math.round(((product.original_price - product.price) / product.original_price) * 100)
        : 0,
      stock: Math.floor(Math.random() * 50) + 10,
      ml_id: product.id,
      ml_permalink: product.permalink
    };
  },

  // Limpiar descripción
  cleanDescription(title) {
    return title.length > 100 ? title.substring(0, 100) + '...' : title;
  },

  // Detectar categoría
  detectCategory(title, categoryId) {
    const titleLower = title.toLowerCase();
    
    if (titleLower.includes('hombre') || titleLower.includes('caballero')) return 'hombre';
    if (titleLower.includes('mujer') || titleLower.includes('dama')) return 'mujer';
    if (titleLower.includes('niño') && !titleLower.includes('niña')) return 'ninos';
    if (titleLower.includes('niña')) return 'ninas';
    
    // Por tipo de prenda
    if (titleLower.includes('vestido') || titleLower.includes('falda') || titleLower.includes('blusa')) {
      return 'mujer';
    }
    
    return 'hombre';
  },

  // Extraer colores
  extractColors(title) {
    const colorMap = {
      'negro': { name: 'Negro', hex: '#000000' },
      'blanco': { name: 'Blanco', hex: '#FFFFFF' },
      'azul': { name: 'Azul', hex: '#3B82F6' },
      'rojo': { name: 'Rojo', hex: '#EF4444' },
      'verde': { name: 'Verde', hex: '#10B981' },
      'rosa': { name: 'Rosa', hex: '#F472B6' },
      'gris': { name: 'Gris', hex: '#6B7280' }
    };

    const titleLower = title.toLowerCase();
    const foundColors = [];

    Object.keys(colorMap).forEach(color => {
      if (titleLower.includes(color)) {
        foundColors.push(colorMap[color]);
      }
    });

    return foundColors.length > 0 ? foundColors : [
      { name: 'Negro', hex: '#000000' },
      { name: 'Blanco', hex: '#FFFFFF' }
    ];
  },

  // Extraer tallas
  extractSizes(title) {
    const titleUpper = title.toUpperCase();
    const sizes = [];

    ['XS', 'S', 'M', 'L', 'XL', 'XXL'].forEach(size => {
      if (titleUpper.includes(size)) sizes.push(size);
    });

    ['28', '30', '32', '34', '36', '38'].forEach(size => {
      if (titleUpper.includes(size)) sizes.push(size);
    });

    return sizes.length > 0 ? sizes : ['S', 'M', 'L', 'XL'];
  },

  // Obtener 100 productos mezclados
  async get100Products() {
    try {
      const [hombre, mujer, ninos, ninas] = await Promise.all([
        this.searchProducts('hombre', 25),
        this.searchProducts('mujer', 25), 
        this.searchProducts('ninos', 25),
        this.searchProducts('ninas', 25)
      ]);

      return [...hombre, ...mujer, ...ninos, ...ninas];
    } catch (error) {
      console.error('Error getting 100 products:', error);
      return [];
    }
  }
};