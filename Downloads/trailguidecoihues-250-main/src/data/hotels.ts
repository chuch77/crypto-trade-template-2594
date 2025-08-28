import { Hotel } from '../types/hotel';

export const hotels: Hotel[] = [
  {
    id: "1",
    name: "Hotel Vista Mar",
    location: "Playa del Carmen",
    priceRange: "luxury",
    rating: 4.8,
    amenities: ["Piscina", "Spa", "Restaurante", "WiFi", "Aire Acondicionado"],
    beachDistance: 50,
    imageUrl: "/lovable-uploads/b0b87b4b-57b0-4a6e-8314-b8c65cfded98.png",
    description: "Hotel de lujo frente al mar con vistas espectaculares y servicios de primera clase.",
    highlights: ["Vista al mar", "Playa privada", "Spa completo"],
    checkInTime: "15:00",
    checkOutTime: "11:00",
    contactInfo: {
      phone: "+52 984 123 4567",
      email: "reservas@hotelvistmar.com",
      website: "https://hotelvistmar.com"
    }
  },
  {
    id: "2",
    name: "Posada Coral",
    location: "Tulum",
    priceRange: "mid-range",
    rating: 4.3,
    amenities: ["Piscina", "Restaurante", "WiFi", "Jardín"],
    beachDistance: 200,
    imageUrl: "/lovable-uploads/3b45435b-d0d0-4fb7-ac3b-73c18e21fd50.png",
    description: "Encantadora posada boutique con ambiente relajado y acceso fácil a la playa.",
    highlights: ["Ambiente bohemio", "Jardín tropical", "Cerca de ruinas"],
    checkInTime: "14:00",
    checkOutTime: "12:00",
    contactInfo: {
      phone: "+52 984 987 6543",
      email: "info@posadacoral.com"
    }
  },
  {
    id: "3",
    name: "Hostal Playa Azul",
    location: "Cancún",
    priceRange: "budget",
    rating: 4.0,
    amenities: ["WiFi", "Cocina compartida", "Terraza", "Aire Acondicionado"],
    beachDistance: 300,
    imageUrl: "/lovable-uploads/1f998a53-3c5b-429f-8ea5-709a0af96d94.png",
    description: "Hostal económico y limpio, perfecto para viajeros jóvenes y mochileros.",
    highlights: ["Precio económico", "Ambiente social", "Cerca del centro"],
    checkInTime: "15:00",
    checkOutTime: "11:00",
    contactInfo: {
      phone: "+52 998 456 7890",
      email: "reservas@hostalplayaazul.com"
    }
  },
  {
    id: "4",
    name: "Resort Paradise Bay",
    location: "Cozumel",
    priceRange: "luxury",
    rating: 4.9,
    amenities: ["Todo Incluido", "Múltiples Piscinas", "Spa", "Golf", "Buceo"],
    beachDistance: 0,
    imageUrl: "/lovable-uploads/8f08a419-86bc-49e3-8707-015d86806c3e.png",
    description: "Resort todo incluido de lujo con actividades acuáticas y entretenimiento.",
    highlights: ["Todo incluido", "Actividades acuáticas", "Entretenimiento nocturno"],
    checkInTime: "15:00",
    checkOutTime: "12:00",
    contactInfo: {
      phone: "+52 987 654 3210",
      website: "https://paradisebay.com"
    }
  },
  {
    id: "5",
    name: "Hotel Boutique Marea",
    location: "Puerto Morelos",
    priceRange: "mid-range",
    rating: 4.6,
    amenities: ["Spa", "Restaurante", "WiFi", "Piscina", "Jardín"],
    beachDistance: 80,
    imageUrl: "/lovable-uploads/3345ac42-9795-42d0-88c1-27c0dea43762.png",
    description: "Hotel boutique con diseño contemporáneo y ambiente íntimo cerca de la playa.",
    highlights: ["Diseño contemporáneo", "Ambiente íntimo", "Cerca del arrecife"],
    checkInTime: "15:00",
    checkOutTime: "12:00",
    contactInfo: {
      phone: "+52 998 123 9876",
      email: "reservas@hotelmarea.com",
      website: "https://hotelmarea.com"
    }
  },
  {
    id: "6",
    name: "Eco Lodge Selva",
    location: "Akumal",
    priceRange: "mid-range",
    rating: 4.4,
    amenities: ["Eco-friendly", "Restaurante", "WiFi", "Cenote", "Tours"],
    beachDistance: 150,
    imageUrl: "/lovable-uploads/3dda568d-50dc-4f15-af17-7744f417603c.png",
    description: "Lodge ecológico rodeado de naturaleza con acceso a cenotes y vida marina.",
    highlights: ["Eco-friendly", "Cenotes cercanos", "Vida marina"],
    checkInTime: "14:00",
    checkOutTime: "11:00",
    contactInfo: {
      phone: "+52 984 555 0123",
      email: "info@ecolodgeselva.com"
    }
  },
  {
    id: "7",
    name: "Grand Resort Caribe",
    location: "Playa Mujeres",
    priceRange: "luxury",
    rating: 4.9,
    amenities: ["Todo Incluido", "Múltiples Piscinas", "Spa", "Golf", "Kids Club"],
    beachDistance: 0,
    imageUrl: "/lovable-uploads/4efa557c-610b-494e-b344-4d12e15b9324.png",
    description: "Resort de lujo todo incluido con servicios premium y entretenimiento familiar.",
    highlights: ["Servicios premium", "Entretenimiento familiar", "Playa privada"],
    checkInTime: "15:00",
    checkOutTime: "12:00",
    contactInfo: {
      phone: "+52 998 777 8888",
      website: "https://grandresortcaribe.com"
    }
  },
  {
    id: "8",
    name: "Hostal Backpackers",
    location: "Playa del Carmen Centro",
    priceRange: "budget",
    rating: 3.9,
    amenities: ["WiFi", "Cocina compartida", "Terraza", "Bar", "Lockers"],
    beachDistance: 400,
    imageUrl: "/lovable-uploads/57c8b30f-1d60-4eda-b748-834262a3a463.png",
    description: "Hostal económico en el corazón de Playa del Carmen, perfecto para mochileros.",
    highlights: ["Ubicación céntrica", "Ambiente social", "Precio económico"],
    checkInTime: "15:00",
    checkOutTime: "11:00",
    contactInfo: {
      phone: "+52 984 333 4444",
      email: "info@backpackersplaya.com"
    }
  }
];