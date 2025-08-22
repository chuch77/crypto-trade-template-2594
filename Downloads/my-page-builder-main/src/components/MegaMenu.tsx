import { useState } from 'react';
import { 
  Smartphone, Headphones, Tv, Gamepad, Laptop, Camera, Watch, 
  Speaker, Tablet, ChevronRight
} from 'lucide-react';

interface Category {
  id: number;
  name: string;
  icon: React.ElementType;
  subcategories: {
    [key: string]: string[];
  };
}

const MegaMenu = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  const [activeCategory, setActiveCategory] = useState<number | null>(1);
  
  const categories: Category[] = [
    {
      id: 1,
      name: 'Huawei',
      icon: Smartphone,
      subcategories: {
        'Smartphones': ['P40 Pro', 'P30 Lite', 'Nova 9', 'Y9 Prime'],
        'Tablets': ['MatePad Pro', 'MatePad T10', 'MediaPad M5'],
        'Wearables': ['Watch GT3', 'Band 7', 'FreeBuds Pro']
      }
    },
    {
      id: 2,
      name: 'Xiaomi',
      icon: Smartphone,
      subcategories: {
        'Smartphones': ['Redmi Note 11', 'Poco X4', 'Mi 11 Lite', 'Mi 12'],
        'Smart Home': ['Mi Smart Band', 'Mi TV Stick', 'Mi Air Purifier'],
        'Accesorios': ['Power Banks', 'Audífonos', 'Cargadores']
      }
    },
    {
      id: 3,
      name: 'Audio y Video',
      icon: Headphones,
      subcategories: {
        'Audio': ['Audífonos', 'Bocinas', 'Soundbars', 'Amplificadores'],
        'TV y Video': ['Pantallas', 'Proyectores', 'Reproductores Blu-ray'],
        'Accesorios': ['Cables HDMI', 'Soportes', 'Controles remotos']
      }
    },
    {
      id: 4,
      name: 'Juguetes',
      icon: Gamepad,
      subcategories: {
        'Videojuegos': ['Consolas', 'Juegos', 'Accesorios gaming'],
        'Juguetes electrónicos': ['Drones', 'Robots', 'RC Cars'],
        'Educativos': ['STEM', 'Robótica para niños', 'Tabletas infantiles']
      }
    },
    {
      id: 5,
      name: 'Computadoras',
      icon: Laptop,
      subcategories: {
        'Laptops': ['Ultrabooks', 'Gaming', 'Convertibles'],
        'Escritorio': ['All-in-One', 'Desktop PCs', 'Monitores'],
        'Accesorios': ['Teclados', 'Mouse', 'Webcams', 'Adaptadores']
      }
    },
    {
      id: 6,
      name: 'Fotografía',
      icon: Camera,
      subcategories: {
        'Cámaras': ['DSLR', 'Mirrorless', 'Compactas', 'Instantáneas'],
        'Accesorios': ['Lentes', 'Trípodes', 'Flashes', 'Memorias'],
        'Impresión': ['Impresoras fotográficas', 'Papel fotográfico']
      }
    },
    {
      id: 7,
      name: 'Smartwatches',
      icon: Watch,
      subcategories: {
        'Por marca': ['Apple Watch', 'Samsung Galaxy Watch', 'Fitbit', 'Garmin'],
        'Por estilo': ['Deportivos', 'Clásicos', 'Fashion'],
        'Accesorios': ['Correas', 'Cargadores', 'Protectores']
      }
    },
    {
      id: 8,
      name: 'Audio Profesional',
      icon: Speaker,
      subcategories: {
        'Estudio': ['Monitores de estudio', 'Interfaces de audio', 'Micrófonos'],
        'DJ': ['Controladores', 'Mezcladores', 'Auriculares DJ'],
        'Instrumentos': ['Teclados MIDI', 'Sintetizadores', 'Efectos']
      }
    }
  ];

  return (
    <div 
      className={`fixed inset-0 bg-black bg-opacity-50 z-50 transition-opacity duration-300 ${!isOpen ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
      onClick={onClose}
    >
      <div 
        className={`absolute top-[72px] left-0 right-0 mx-auto bg-white shadow-xl rounded-b-lg max-w-6xl w-full flex transition-transform duration-300 transform origin-top ${!isOpen ? 'scale-y-0 opacity-0' : 'scale-y-100 opacity-100'}`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Left column - Categories */}
        <div className="w-1/4 border-r border-gray-200 py-6">
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <div 
                key={category.id}
                className={`flex items-center px-6 py-3 cursor-pointer hover:bg-blue-50 transition-colors ${activeCategory === category.id ? 'bg-blue-50 text-primary' : ''}`}
                onMouseEnter={() => setActiveCategory(category.id)}
              >
                <Icon className="h-5 w-5 mr-3" />
                <span className="flex-1">{category.name}</span>
                <ChevronRight className="h-4 w-4 text-gray-400" />
              </div>
            );
          })}
        </div>
        
        {/* Right column - Subcategories */}
        <div className="w-3/4 p-6">
          {activeCategory !== null && (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {Object.entries(categories.find(c => c.id === activeCategory)?.subcategories || {}).map(([section, items], idx) => (
                <div key={idx} className="mb-4">
                  <h3 className="text-primary font-bold mb-2">{section}</h3>
                  <ul>
                    {items.map((item, i) => (
                      <li key={i} className="py-1 hover:text-primary transition-colors">
                        <a href="#" className="block">{item}</a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MegaMenu;