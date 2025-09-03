import { supabase } from './src/lib/supabase.js';

const products = [
  // HOMBRE (5 productos)
  {
    title: "Playera Oversize Premium",
    description: "Algodón 100% orgánico, corte relajado moderno, perfecta para el día a día. Diseño minimalista con acabados de calidad.",
    price: 449,
    category: "hombre",
    image_url: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500&h=600&fit=crop",
    colors: [
      { name: "Negro", hex: "#000000" },
      { name: "Blanco", hex: "#FFFFFF" },
      { name: "Gris", hex: "#6B7280" }
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    rating: 4.8,
    is_new: true,
    is_on_sale: false,
    discount_percent: 0,
    stock: 85
  },
  {
    title: "Jeans Slim Fit Azul",
    description: "Mezclilla premium con elastano, ajuste perfecto y cómodo. Lavado stone wash con detalles únicos.",
    price: 899,
    category: "hombre",
    image_url: "https://images.unsplash.com/photo-1542272604-787c3835535d?w=500&h=600&fit=crop",
    colors: [
      { name: "Azul Clásico", hex: "#1E40AF" },
      { name: "Azul Oscuro", hex: "#1E3A8A" },
      { name: "Negro", hex: "#000000" }
    ],
    sizes: ["28", "30", "32", "34", "36", "38"],
    rating: 4.6,
    is_new: false,
    is_on_sale: true,
    discount_percent: 20,
    stock: 65
  },
  {
    title: "Sudadera Capucha Tech",
    description: "Felpa francesa premium, tecnología anti-humedad. Capucha ajustable y bolsillo canguro con cierre.",
    price: 799,
    category: "hombre",
    image_url: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=500&h=600&fit=crop",
    colors: [
      { name: "Gris Carbón", hex: "#374151" },
      { name: "Negro", hex: "#000000" },
      { name: "Azul Marino", hex: "#1E40AF" }
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    rating: 4.9,
    is_new: true,
    is_on_sale: false,
    discount_percent: 0,
    stock: 75
  },
  {
    title: "Camisa Oxford Clásica",
    description: "Algodón Oxford de alta calidad, corte slim fit. Perfecta para oficina o eventos casuales elegantes.",
    price: 649,
    category: "hombre",
    image_url: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=500&h=600&fit=crop",
    colors: [
      { name: "Blanco", hex: "#FFFFFF" },
      { name: "Azul Cielo", hex: "#DBEAFE" },
      { name: "Rosa Claro", hex: "#FECACA" }
    ],
    sizes: ["S", "M", "L", "XL"],
    rating: 4.7,
    is_new: false,
    is_on_sale: false,
    discount_percent: 0,
    stock: 90
  },
  {
    title: "Chaqueta Bomber Urbana",
    description: "Diseño contemporáneo con detalles únicos. Tela resistente al viento, perfecta para looks urbanos modernos.",
    price: 1299,
    category: "hombre",
    image_url: "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=500&h=600&fit=crop",
    colors: [
      { name: "Negro", hex: "#000000" },
      { name: "Verde Militar", hex: "#10B981" },
      { name: "Azul Marino", hex: "#1E40AF" }
    ],
    sizes: ["S", "M", "L", "XL"],
    rating: 4.8,
    is_new: true,
    is_on_sale: true,
    discount_percent: 25,
    stock: 45
  },

  // MUJER (5 productos)
  {
    title: "Vestido Midi Satinado",
    description: "Elegante vestido en satén con caída perfecta. Ideal para eventos especiales, cenas románticas o reuniones importantes.",
    price: 1199,
    category: "mujer",
    image_url: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=500&h=600&fit=crop",
    colors: [
      { name: "Negro", hex: "#000000" },
      { name: "Azul Medianoche", hex: "#1E40AF" },
      { name: "Verde Esmeralda", hex: "#10B981" }
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    rating: 4.9,
    is_new: true,
    is_on_sale: false,
    discount_percent: 0,
    stock: 35
  },
  {
    title: "Blusa Seda Natural",
    description: "Seda 100% natural con acabado sedoso. Corte favorecedor que realza la figura, perfecta para looks sofisticados.",
    price: 699,
    category: "mujer",
    image_url: "https://images.unsplash.com/photo-1551803091-e20673f15770?w=500&h=600&fit=crop",
    colors: [
      { name: "Rosa Palo", hex: "#F472B6" },
      { name: "Crema", hex: "#FEF7CD" },
      { name: "Blanco Perla", hex: "#FFFFFF" }
    ],
    sizes: ["XS", "S", "M", "L"],
    rating: 4.7,
    is_new: false,
    is_on_sale: true,
    discount_percent: 30,
    stock: 60
  },
  {
    title: "Jeans Mom Fit Vintage",
    description: "Corte mom fit de cintura alta, estilo vintage moderno. Mezclilla premium con lavado especial y detalles únicos.",
    price: 999,
    category: "mujer",
    image_url: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=500&h=600&fit=crop",
    colors: [
      { name: "Azul Vintage", hex: "#3B82F6" },
      { name: "Azul Oscuro", hex: "#1E3A8A" },
      { name: "Negro Desgastado", hex: "#374151" }
    ],
    sizes: ["24", "26", "28", "30", "32"],
    rating: 4.8,
    is_new: true,
    is_on_sale: false,
    discount_percent: 0,
    stock: 70
  },
  {
    title: "Cardigan Cashmere",
    description: "Cashmere premium ultra suave, perfecto para crear capas elegantes. Diseño atemporal que nunca pasa de moda.",
    price: 1499,
    category: "mujer",
    image_url: "https://images.unsplash.com/photo-1583744946564-b52ac1c389c8?w=500&h=600&fit=crop",
    colors: [
      { name: "Beige", hex: "#D6D3D1" },
      { name: "Gris Perla", hex: "#6B7280" },
      { name: "Camel", hex: "#92400E" }
    ],
    sizes: ["XS", "S", "M", "L"],
    rating: 4.9,
    is_new: false,
    is_on_sale: false,
    discount_percent: 0,
    stock: 40
  },
  {
    title: "Blazer Estructurado",
    description: "Blazer de corte impecable con estructura perfecta. Ideal para looks profesionales y ocasiones formales elegantes.",
    price: 1399,
    category: "mujer",
    image_url: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=500&h=600&fit=crop",
    colors: [
      { name: "Negro", hex: "#000000" },
      { name: "Gris Antracita", hex: "#374151" },
      { name: "Azul Marino", hex: "#1E40AF" }
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    rating: 4.8,
    is_new: true,
    is_on_sale: true,
    discount_percent: 15,
    stock: 50
  },

  // NIÑOS (5 productos)
  {
    title: "Playera Dinosaurios 3D",
    description: "Algodón orgánico con estampado 3D de dinosaurios. Diseño divertido que estimula la imaginación y creatividad.",
    price: 299,
    category: "ninos",
    image_url: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=500&h=600&fit=crop",
    colors: [
      { name: "Verde Selva", hex: "#10B981" },
      { name: "Azul Océano", hex: "#3B82F6" },
      { name: "Naranja Volcán", hex: "#F59E0B" }
    ],
    sizes: ["2", "4", "6", "8", "10"],
    rating: 4.9,
    is_new: true,
    is_on_sale: false,
    discount_percent: 0,
    stock: 120
  },
  {
    title: "Shorts Deportivos Pro",
    description: "Tela técnica transpirable con tecnología dry-fit. Perfectos para deportes, juegos y actividades al aire libre.",
    price: 349,
    category: "ninos",
    image_url: "https://images.unsplash.com/photo-1519235106638-30cc49b5dbc5?w=500&h=600&fit=crop",
    colors: [
      { name: "Azul Eléctrico", hex: "#3B82F6" },
      { name: "Rojo Fuego", hex: "#EF4444" },
      { name: "Verde Lima", hex: "#10B981" }
    ],
    sizes: ["2", "4", "6", "8", "10", "12"],
    rating: 4.7,
    is_new: false,
    is_on_sale: true,
    discount_percent: 20,
    stock: 95
  },
  {
    title: "Sudadera Superhéroes",
    description: "Felpa premium con capucha y estampado de superhéroes. Diseño que inspira valentía y aventuras épicas.",
    price: 499,
    category: "ninos",
    image_url: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=500&h=600&fit=crop",
    colors: [
      { name: "Azul Héroe", hex: "#1E40AF" },
      { name: "Rojo Poder", hex: "#EF4444" },
      { name: "Gris Acero", hex: "#6B7280" }
    ],
    sizes: ["2", "4", "6", "8", "10"],
    rating: 4.8,
    is_new: true,
    is_on_sale: false,
    discount_percent: 0,
    stock: 80
  },
  {
    title: "Jeans Aventurero",
    description: "Mezclilla resistente con rodilleras reforzadas. Diseñados para resistir todas las aventuras y travesuras diarias.",
    price: 549,
    category: "ninos",
    image_url: "https://images.unsplash.com/photo-1542272604-787c3835535d?w=500&h=600&fit=crop",
    colors: [
      { name: "Azul Aventura", hex: "#3B82F6" },
      { name: "Azul Oscuro", hex: "#1E3A8A" },
      { name: "Negro Explorador", hex: "#374151" }
    ],
    sizes: ["2", "4", "6", "8", "10", "12"],
    rating: 4.6,
    is_new: false,
    is_on_sale: false,
    discount_percent: 0,
    stock: 75
  },
  {
    title: "Polo Elegante Junior",
    description: "Polo de algodón piqué premium, perfecto para ocasiones especiales. Corte elegante que los hace ver distinguidos.",
    price: 399,
    category: "ninos",
    image_url: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=500&h=600&fit=crop",
    colors: [
      { name: "Blanco Clásico", hex: "#FFFFFF" },
      { name: "Azul Marino", hex: "#1E40AF" },
      { name: "Rojo Elegante", hex: "#EF4444" }
    ],
    sizes: ["2", "4", "6", "8", "10"],
    rating: 4.5,
    is_new: false,
    is_on_sale: true,
    discount_percent: 15,
    stock: 100
  },

  // NIÑAS (5 productos)
  {
    title: "Vestido Princesa Encantada",
    description: "Vestido de tul con brillos y detalles bordados a mano. Perfecto para fiestas, cumpleaños y ocasiones mágicas especiales.",
    price: 699,
    category: "ninas",
    image_url: "https://images.unsplash.com/photo-1612336307429-8a898d10e223?w=500&h=600&fit=crop",
    colors: [
      { name: "Rosa Princesa", hex: "#F472B6" },
      { name: "Lila Mágico", hex: "#A855F7" },
      { name: "Azul Cielo", hex: "#60A5FA" }
    ],
    sizes: ["2", "4", "6", "8", "10"],
    rating: 4.9,
    is_new: true,
    is_on_sale: false,
    discount_percent: 0,
    stock: 60
  },
  {
    title: "Leggings Unicornio Mágico",
    description: "Leggings súper suaves con estampado holográfico de unicornios. Tela elástica que se mueve con ellas en cada aventura.",
    price: 349,
    category: "ninas",
    image_url: "https://images.unsplash.com/photo-1518486373924-702e4e3c4d6a?w=500&h=600&fit=crop",
    colors: [
      { name: "Rosa Unicornio", hex: "#F472B6" },
      { name: "Lila Estrella", hex: "#A855F7" },
      { name: "Azul Arcoíris", hex: "#60A5FA" }
    ],
    sizes: ["2", "4", "6", "8", "10", "12"],
    rating: 4.8,
    is_new: false,
    is_on_sale: true,
    discount_percent: 25,
    stock: 85
  },
  {
    title: "Blusa Flores Bordadas",
    description: "Blusa de algodón con delicadas flores bordadas a mano. Diseño romántico y femenino que las hace sentir especiales.",
    price: 399,
    category: "ninas",
    image_url: "https://images.unsplash.com/photo-1551803091-e20673f15770?w=500&h=600&fit=crop",
    colors: [
      { name: "Rosa Jardín", hex: "#F472B6" },
      { name: "Amarillo Sol", hex: "#FDE047" },
      { name: "Blanco Marfil", hex: "#FFFFFF" }
    ],
    sizes: ["2", "4", "6", "8", "10"],
    rating: 4.7,
    is_new: true,
    is_on_sale: false,
    discount_percent: 0,
    stock: 90
  },
  {
    title: "Falda Tul Brillante",
    description: "Falda de tul con lentejuelas y brillos que capturan la luz. Perfecta para bailar, girar y sentirse como una estrella.",
    price: 499,
    category: "ninas",
    image_url: "https://images.unsplash.com/photo-1583846499607-cc99d1d0ed14?w=500&h=600&fit=crop",
    colors: [
      { name: "Rosa Brillante", hex: "#F472B6" },
      { name: "Dorado Estrella", hex: "#F59E0B" },
      { name: "Plata Luna", hex: "#6B7280" }
    ],
    sizes: ["2", "4", "6", "8", "10"],
    rating: 4.8,
    is_new: false,
    is_on_sale: false,
    discount_percent: 0,
    stock: 70
  },
  {
    title: "Cardigan Corazones",
    description: "Cardigan tejido con corazones bordados y botones en forma de estrella. Suave como un abrazo, perfecto para cualquier outfit.",
    price: 449,
    category: "ninas",
    image_url: "https://images.unsplash.com/photo-1583744946564-b52ac1c389c8?w=500&h=600&fit=crop",
    colors: [
      { name: "Crema Dulce", hex: "#FEF7CD" },
      { name: "Rosa Suave", hex: "#FECACA" },
      { name: "Lila Tierno", hex: "#DDD6FE" }
    ],
    sizes: ["2", "4", "6", "8", "10"],
    rating: 4.6,
    is_new: true,
    is_on_sale: true,
    discount_percent: 20,
    stock: 65
  }
];

async function insertProducts() {
  try {
    console.log('Insertando productos...');
    
    const { data, error } = await supabase
      .from('products')
      .insert(products);

    if (error) {
      console.error('Error:', error);
    } else {
      console.log('✅ 20 productos insertados exitosamente!');
      console.log('Productos por categoría:');
      console.log('- Hombre: 5 productos');
      console.log('- Mujer: 5 productos'); 
      console.log('- Niños: 5 productos');
      console.log('- Niñas: 5 productos');
    }
  } catch (error) {
    console.error('Error insertando productos:', error);
  }
}

insertProducts();