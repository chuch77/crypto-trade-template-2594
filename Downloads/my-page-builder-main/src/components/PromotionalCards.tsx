import React from 'react';

// Datos de las tarjetas promocionales
const promotionalCards = [
  {
    id: 1,
    title: 'EXPERIENCIA GAMER',
    subtitle: 'Descubre lo mejor en tecnología gaming',
    image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    link: '#',
    size: 'large'
  },
  {
    id: 2,
    title: 'OUTLET',
    subtitle: 'Hasta 50% de descuento',
    image: 'https://images.unsplash.com/photo-1607082350899-7e105aa886ae?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    link: '#',
    size: 'small'
  },
  {
    id: 3,
    title: 'NUEVOS LANZAMIENTOS',
    subtitle: 'Lo último en tecnología',
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    link: '#',
    size: 'small'
  },
  {
    id: 4,
    title: 'ACCESORIOS',
    subtitle: 'Complementa tus dispositivos',
    image: 'https://images.unsplash.com/photo-1625961332771-3f40b0e2bdcf?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    link: '#',
    size: 'medium'
  },
  {
    id: 5,
    title: 'SMART HOME',
    subtitle: 'Tecnología para tu hogar',
    image: 'https://images.unsplash.com/photo-1558002038-1055907df827?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    link: '#',
    size: 'medium'
  }
];

const PromotionalCards = () => {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-8 text-center">Promociones especiales</h2>
        
        <div className="space-y-6">
          {/* Primera fila: 1 grande (60%) + 2 pequeñas (20% cada una) */}
          <div className="flex flex-col md:flex-row gap-6">
            {/* Tarjeta grande */}
            {promotionalCards.filter(card => card.size === 'large').map(card => (
              <a 
                key={card.id} 
                href={card.link}
                className="relative overflow-hidden rounded-xl shadow-md md:w-3/5 h-64 md:h-80 group"
              >
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                  style={{ backgroundImage: `url(${card.image})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                <div className="absolute bottom-0 left-0 p-6 text-white">
                  <h3 className="text-2xl font-bold mb-2">{card.title}</h3>
                  <p className="text-white/80">{card.subtitle}</p>
                </div>
              </a>
            ))}
            
            {/* Contenedor para las dos tarjetas pequeñas */}
            <div className="flex flex-col gap-6 md:w-2/5">
              {promotionalCards.filter(card => card.size === 'small').map(card => (
                <a 
                  key={card.id} 
                  href={card.link}
                  className="relative overflow-hidden rounded-xl shadow-md h-32 md:h-[152px] group"
                >
                  <div 
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                    style={{ backgroundImage: `url(${card.image})` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                  <div className="absolute bottom-0 left-0 p-4 text-white">
                    <h3 className="text-lg font-bold">{card.title}</h3>
                    <p className="text-sm text-white/80">{card.subtitle}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>
          
          {/* Segunda fila: 2 medianas (50% cada una) */}
          <div className="flex flex-col md:flex-row gap-6">
            {promotionalCards.filter(card => card.size === 'medium').map(card => (
              <a 
                key={card.id} 
                href={card.link}
                className="relative overflow-hidden rounded-xl shadow-md md:w-1/2 h-48 md:h-64 group"
              >
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                  style={{ backgroundImage: `url(${card.image})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                <div className="absolute bottom-0 left-0 p-6 text-white">
                  <h3 className="text-xl font-bold mb-1">{card.title}</h3>
                  <p className="text-white/80">{card.subtitle}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
    </div>
  );
};

export default PromotionalCards;