import { 
  Truck, 
  Store, 
  Clock, 
  CreditCard, 
  Wrench, 
  RefreshCw 
} from 'lucide-react';

const BenefitsSection = () => {
  const benefits = [
    {
      icon: Truck,
      title: 'Envío gratis',
      description: 'En compras mayores a $599'
    },
    {
      icon: Store,
      title: 'Pick up en tiendas',
      description: 'Recoge en cualquiera de nuestras sucursales'
    },
    {
      icon: Clock,
      title: 'Entrega express',
      description: 'En 90 minutos o menos'
    },
    {
      icon: CreditCard,
      title: 'Métodos de pago',
      description: 'Múltiples opciones disponibles'
    },
    {
      icon: Wrench,
      title: 'Servicio de reparación',
      description: 'Con personal calificado'
    },
    {
      icon: RefreshCw,
      title: 'Cambios y devoluciones',
      description: 'Proceso simple y rápido'
    }
  ];

  return (
    <section className="py-10 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div 
                key={index} 
                className="flex items-center p-4 bg-white rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
              >
                <div className="flex-shrink-0 mr-4">
                  <div className="p-3 bg-blue-50 rounded-full">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                </div>
                <div>
                  <h3 className="font-medium text-gray-900">{benefit.title}</h3>
                  <p className="text-sm text-gray-500">{benefit.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;