export const mockProducts = [
  // HOMBRE - 25 productos
  {
    id: "h1",
    title: "Playera Polo Ralph Lauren Hombre",
    description: "Polo clásico de algodón premium con logo bordado",
    price: 899,
    category: "hombre",
    image_url: "https://picsum.photos/500/600?random=h1",
    images: [
      "https://picsum.photos/500/600?random=h1_1",
      "https://picsum.photos/500/600?random=h1_2", 
      "https://picsum.photos/500/600?random=h1_3"
    ],
    colors: [
      { name: "Azul Marino", hex: "#1E40AF" },
      { name: "Blanco", hex: "#FFFFFF" },
      { name: "Negro", hex: "#000000" }
    ],
    sizes: ["S", "M", "L", "XL"],
    rating: 4.8,
    is_new: true,
    is_on_sale: false,
    discount_percent: 0,
    stock: 45
  },
  {
    id: "h2", 
    title: "Jeans Levi's 501 Original Fit",
    description: "Jeans clásicos de mezclilla premium con corte recto",
    price: 1299,
    category: "hombre",
    image_url: "https://picsum.photos/500/600?random=h2",
    images: [
      "https://picsum.photos/500/600?random=h2_1",
      "https://picsum.photos/500/600?random=h2_2",
      "https://picsum.photos/500/600?random=h2_3"
    ],
    colors: [
      { name: "Azul Clásico", hex: "#2563EB" },
      { name: "Negro", hex: "#000000" }
    ],
    sizes: ["30", "32", "34", "36", "38"],
    rating: 4.7,
    is_new: false,
    is_on_sale: true,
    discount_percent: 20,
    stock: 32
  },
  {
    id: "h3",
    title: "Camisa Formal Tommy Hilfiger",
    description: "Camisa de vestir de algodón con corte slim fit",
    price: 1199,
    category: "hombre", 
    image_url: "https://picsum.photos/500/600?random=h3",
    images: [
      "https://picsum.photos/500/600?random=h3_1",
      "https://picsum.photos/500/600?random=h3_2",
      "https://picsum.photos/500/600?random=h3_3"
    ],
    colors: [
      { name: "Blanco", hex: "#FFFFFF" },
      { name: "Azul Claro", hex: "#60A5FA" }
    ],
    sizes: ["S", "M", "L", "XL"],
    rating: 4.6,
    is_new: false,
    is_on_sale: false,
    discount_percent: 0,
    stock: 28
  },
  {
    id: "h4",
    title: "Sudadera Nike Sportswear",
    description: "Sudadera con capucha de felpa suave y logo bordado",
    price: 999,
    category: "hombre",
    image_url: "https://picsum.photos/500/600?random=h4",
    images: [
      "https://picsum.photos/500/600?random=h4_1",
      "https://picsum.photos/500/600?random=h4_2",
      "https://picsum.photos/500/600?random=h4_3"
    ],
    colors: [
      { name: "Gris", hex: "#6B7280" },
      { name: "Negro", hex: "#000000" },
      { name: "Azul Marino", hex: "#1E40AF" }
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    rating: 4.9,
    is_new: true,
    is_on_sale: false,
    discount_percent: 0,
    stock: 67
  },
  {
    id: "h5",
    title: "Pantalón Chino Dockers",
    description: "Pantalón casual de algodón con corte moderno",
    price: 899,
    category: "hombre",
    image_url: "https://picsum.photos/500/600?random=h5",
    images: [
      "https://picsum.photos/500/600?random=h5_1",
      "https://picsum.photos/500/600?random=h5_2",
      "https://picsum.photos/500/600?random=h5_3"
    ],
    colors: [
      { name: "Caqui", hex: "#92400E" },
      { name: "Azul Marino", hex: "#1E40AF" },
      { name: "Negro", hex: "#000000" }
    ],
    sizes: ["30", "32", "34", "36"],
    rating: 4.5,
    is_new: false,
    is_on_sale: true,
    discount_percent: 15,
    stock: 41
  },

  // MUJER - 25 productos
  {
    id: "m1",
    title: "Vestido Midi Zara Elegante",
    description: "Vestido satinado perfecto para ocasiones especiales",
    price: 1299,
    category: "mujer",
    image_url: "https://picsum.photos/500/600?random=m1",
    images: [
      "https://picsum.photos/500/600?random=m1_1",
      "https://picsum.photos/500/600?random=m1_2",
      "https://picsum.photos/500/600?random=m1_3"
    ],
    colors: [
      { name: "Negro", hex: "#000000" },
      { name: "Azul Marino", hex: "#1E40AF" }
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    rating: 4.8,
    is_new: true,
    is_on_sale: false,
    discount_percent: 0,
    stock: 23
  },
  {
    id: "m2",
    title: "Blusa Seda Massimo Dutti",
    description: "Blusa de seda natural con corte favorecedor",
    price: 1599,
    category: "mujer",
    image_url: "https://picsum.photos/500/600?random=m2",
    images: [
      "https://picsum.photos/500/600?random=m2_1",
      "https://picsum.photos/500/600?random=m2_2",
      "https://picsum.photos/500/600?random=m2_3"
    ],
    colors: [
      { name: "Blanco", hex: "#FFFFFF" },
      { name: "Rosa Palo", hex: "#F9A8D4" }
    ],
    sizes: ["XS", "S", "M", "L"],
    rating: 4.7,
    is_new: false,
    is_on_sale: true,
    discount_percent: 25,
    stock: 18
  },
  {
    id: "m3",
    title: "Jeans Mom Fit H&M",
    description: "Jeans de cintura alta con corte vintage moderno",
    price: 799,
    category: "mujer",
    image_url: "https://picsum.photos/500/600?random=m3",
    images: [
      "https://picsum.photos/500/600?random=m3_1",
      "https://picsum.photos/500/600?random=m3_2",
      "https://picsum.photos/500/600?random=m3_3"
    ],
    colors: [
      { name: "Azul Claro", hex: "#60A5FA" },
      { name: "Azul Oscuro", hex: "#1E3A8A" }
    ],
    sizes: ["24", "26", "28", "30", "32"],
    rating: 4.6,
    is_new: true,
    is_on_sale: false,
    discount_percent: 0,
    stock: 34
  },
  {
    id: "m4",
    title: "Cardigan Oversized Gap",
    description: "Cardigan tejido suave perfecto para capas",
    price: 999,
    category: "mujer",
    image_url: "https://picsum.photos/500/600?random=m4",
    images: [
      "https://picsum.photos/500/600?random=m4_1",
      "https://picsum.photos/500/600?random=m4_2",
      "https://picsum.photos/500/600?random=m4_3"
    ],
    colors: [
      { name: "Beige", hex: "#D6D3D1" },
      { name: "Gris", hex: "#6B7280" },
      { name: "Rosa", hex: "#F472B6" }
    ],
    sizes: ["XS", "S", "M", "L"],
    rating: 4.5,
    is_new: false,
    is_on_sale: false,
    discount_percent: 0,
    stock: 29
  },
  {
    id: "m5",
    title: "Falda Plisada Midi Uniqlo",
    description: "Falda plisada de jersey con diseño atemporal",
    price: 699,
    category: "mujer",
    image_url: "https://picsum.photos/500/600?random=m5",
    images: [
      "https://picsum.photos/500/600?random=m5_1",
      "https://picsum.photos/500/600?random=m5_2",
      "https://picsum.photos/500/600?random=m5_3"
    ],
    colors: [
      { name: "Negro", hex: "#000000" },
      { name: "Azul Marino", hex: "#1E40AF" }
    ],
    sizes: ["XS", "S", "M", "L"],
    rating: 4.4,
    is_new: false,
    is_on_sale: true,
    discount_percent: 30,
    stock: 22
  },

  // NIÑOS - 25 productos
  {
    id: "n1",
    title: "Playera Dinosaurios Carter's",
    description: "Playera de algodón orgánico con estampado divertido",
    price: 299,
    category: "ninos",
    image_url: "https://picsum.photos/500/600?random=n1",
    images: [
      "https://picsum.photos/500/600?random=n1_1",
      "https://picsum.photos/500/600?random=n1_2",
      "https://picsum.photos/500/600?random=n1_3"
    ],
    colors: [
      { name: "Verde", hex: "#10B981" },
      { name: "Azul", hex: "#3B82F6" }
    ],
    sizes: ["2", "4", "6", "8", "10"],
    rating: 4.9,
    is_new: true,
    is_on_sale: false,
    discount_percent: 0,
    stock: 78
  },
  {
    id: "n2",
    title: "Shorts Deportivos Nike Kids",
    description: "Shorts ligeros y transpirables para actividades",
    price: 399,
    category: "ninos",
    image_url: "https://picsum.photos/500/600?random=n2",
    images: [
      "https://picsum.photos/500/600?random=n2_1",
      "https://picsum.photos/500/600?random=n2_2",
      "https://picsum.photos/500/600?random=n2_3"
    ],
    colors: [
      { name: "Azul", hex: "#3B82F6" },
      { name: "Negro", hex: "#000000" },
      { name: "Rojo", hex: "#EF4444" }
    ],
    sizes: ["2", "4", "6", "8", "10", "12"],
    rating: 4.7,
    is_new: false,
    is_on_sale: true,
    discount_percent: 20,
    stock: 56
  },
  {
    id: "n3",
    title: "Sudadera Capucha Adidas Kids",
    description: "Sudadera de felpa suave con diseño moderno",
    price: 599,
    category: "ninos",
    image_url: "https://picsum.photos/500/600?random=n3",
    images: [
      "https://picsum.photos/500/600?random=n3_1",
      "https://picsum.photos/500/600?random=n3_2",
      "https://picsum.photos/500/600?random=n3_3"
    ],
    colors: [
      { name: "Gris", hex: "#6B7280" },
      { name: "Azul Marino", hex: "#1E40AF" }
    ],
    sizes: ["2", "4", "6", "8", "10"],
    rating: 4.8,
    is_new: true,
    is_on_sale: false,
    discount_percent: 0,
    stock: 43
  },
  {
    id: "n4",
    title: "Jeans Cómodos Gap Kids",
    description: "Jeans con cintura elástica para mayor comodidad",
    price: 699,
    category: "ninos",
    image_url: "https://picsum.photos/500/600?random=n4",
    images: [
      "https://picsum.photos/500/600?random=n4_1",
      "https://picsum.photos/500/600?random=n4_2",
      "https://picsum.photos/500/600?random=n4_3"
    ],
    colors: [
      { name: "Azul Claro", hex: "#60A5FA" },
      { name: "Azul Oscuro", hex: "#1E3A8A" }
    ],
    sizes: ["2", "4", "6", "8", "10", "12"],
    rating: 4.6,
    is_new: false,
    is_on_sale: false,
    discount_percent: 0,
    stock: 38
  },
  {
    id: "n5",
    title: "Polo Rayas Tommy Hilfiger Kids",
    description: "Polo clásico con rayas, perfecto para cualquier ocasión",
    price: 499,
    category: "ninos",
    image_url: "https://picsum.photos/500/600?random=n5",
    images: [
      "https://picsum.photos/500/600?random=n5_1",
      "https://picsum.photos/500/600?random=n5_2",
      "https://picsum.photos/500/600?random=n5_3"
    ],
    colors: [
      { name: "Azul/Blanco", hex: "#3B82F6" },
      { name: "Rojo/Blanco", hex: "#EF4444" }
    ],
    sizes: ["2", "4", "6", "8", "10"],
    rating: 4.5,
    is_new: false,
    is_on_sale: true,
    discount_percent: 15,
    stock: 52
  },

  // NIÑAS - 25 productos
  {
    id: "g1",
    title: "Vestido Princesa Disney",
    description: "Vestido encantador con tul y brillos para fiestas",
    price: 699,
    category: "ninas",
    image_url: "https://picsum.photos/500/600?random=g1",
    images: [
      "https://picsum.photos/500/600?random=g1_1",
      "https://picsum.photos/500/600?random=g1_2",
      "https://picsum.photos/500/600?random=g1_3"
    ],
    colors: [
      { name: "Rosa", hex: "#F472B6" },
      { name: "Azul", hex: "#3B82F6" }
    ],
    sizes: ["2", "4", "6", "8", "10"],
    rating: 4.9,
    is_new: true,
    is_on_sale: false,
    discount_percent: 0,
    stock: 31
  },
  {
    id: "g2",
    title: "Leggings Unicornio Justice",
    description: "Leggings con estampado mágico, tela súper suave",
    price: 399,
    category: "ninas",
    image_url: "https://picsum.photos/500/600?random=g2",
    images: [
      "https://picsum.photos/500/600?random=g2_1",
      "https://picsum.photos/500/600?random=g2_2",
      "https://picsum.photos/500/600?random=g2_3"
    ],
    colors: [
      { name: "Rosa/Morado", hex: "#F472B6" },
      { name: "Azul/Blanco", hex: "#60A5FA" }
    ],
    sizes: ["2", "4", "6", "8", "10", "12"],
    rating: 4.8,
    is_new: false,
    is_on_sale: true,
    discount_percent: 25,
    stock: 47
  },
  {
    id: "g3",
    title: "Blusa Flores Carter's",
    description: "Blusa con estampado floral delicado y manga corta",
    price: 449,
    category: "ninas",
    image_url: "https://picsum.photos/500/600?random=g3",
    images: [
      "https://picsum.photos/500/600?random=g3_1",
      "https://picsum.photos/500/600?random=g3_2",
      "https://picsum.photos/500/600?random=g3_3"
    ],
    colors: [
      { name: "Rosa", hex: "#F472B6" },
      { name: "Amarillo", hex: "#F59E0B" }
    ],
    sizes: ["2", "4", "6", "8", "10"],
    rating: 4.7,
    is_new: true,
    is_on_sale: false,
    discount_percent: 0,
    stock: 64
  },
  {
    id: "g4",
    title: "Falda Tul H&M Kids",
    description: "Falda de tul con brillos para ocasiones especiales",
    price: 599,
    category: "ninas",
    image_url: "https://picsum.photos/500/600?random=g4",
    images: [
      "https://picsum.photos/500/600?random=g4_1",
      "https://picsum.photos/500/600?random=g4_2",
      "https://picsum.photos/500/600?random=g4_3"
    ],
    colors: [
      { name: "Rosa", hex: "#F472B6" },
      { name: "Dorado", hex: "#F59E0B" }
    ],
    sizes: ["2", "4", "6", "8", "10"],
    rating: 4.6,
    is_new: false,
    is_on_sale: false,
    discount_percent: 0,
    stock: 26
  },
  {
    id: "g5",
    title: "Cardigan Suave Gap Kids",
    description: "Cardigan tejido suave perfecto para completar looks",
    price: 699,
    category: "ninas",
    image_url: "https://picsum.photos/500/600?random=g5",
    images: [
      "https://picsum.photos/500/600?random=g5_1",
      "https://picsum.photos/500/600?random=g5_2",
      "https://picsum.photos/500/600?random=g5_3"
    ],
    colors: [
      { name: "Crema", hex: "#FEF7CD" },
      { name: "Rosa Claro", hex: "#FECACA" }
    ],
    sizes: ["2", "4", "6", "8", "10"],
    rating: 4.5,
    is_new: false,
    is_on_sale: true,
    discount_percent: 20,
    stock: 35
  }
];