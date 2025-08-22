import { Button } from "@/components/ui/button";
import { Check, X } from "lucide-react";

interface PricingPlan {
  name: string;
  price: string;
  period?: string;
  description: string;
  features: Array<{
    name: string;
    included: boolean;
  }>;
  cta: string;
  highlighted?: boolean;
  badge?: string;
}

interface PricingTableProps {
  variant?: "simple" | "detailed" | "compact";
  title?: string;
  subtitle?: string;
  plans?: PricingPlan[];
}

const PricingTable = ({ 
  variant = "simple", 
  title = "Planes y precios", 
  subtitle = "Elige el plan que mejor se adapte a tus necesidades",
  plans
}: PricingTableProps) => {
  
  const defaultPlans: PricingPlan[] = [
    {
      name: "Free",
      price: "€0",
      period: "/mes",
      description: "Perfecto para proyectos personales",
      features: [
        { name: "1 usuario", included: true },
        { name: "5 proyectos", included: true },
        { name: "2GB de almacenamiento", included: true },
        { name: "Acceso a plantillas básicas", included: true },
        { name: "Soporte por email", included: false },
        { name: "Exportación de código", included: false },
        { name: "Dominio personalizado", included: false },
        { name: "Análisis avanzado", included: false }
      ],
      cta: "Comenzar gratis",
      highlighted: false
    },
    {
      name: "Pro",
      price: "€19",
      period: "/mes",
      description: "Para profesionales y freelancers",
      features: [
        { name: "5 usuarios", included: true },
        { name: "Proyectos ilimitados", included: true },
        { name: "20GB de almacenamiento", included: true },
        { name: "Acceso a todas las plantillas", included: true },
        { name: "Soporte prioritario", included: true },
        { name: "Exportación de código", included: true },
        { name: "Dominio personalizado", included: true },
        { name: "Análisis avanzado", included: false }
      ],
      cta: "Probar 14 días gratis",
      highlighted: true,
      badge: "Popular"
    },
    {
      name: "Enterprise",
      price: "€49",
      period: "/mes",
      description: "Para equipos y agencias",
      features: [
        { name: "Usuarios ilimitados", included: true },
        { name: "Proyectos ilimitados", included: true },
        { name: "100GB de almacenamiento", included: true },
        { name: "Acceso a todas las plantillas", included: true },
        { name: "Soporte dedicado 24/7", included: true },
        { name: "Exportación de código", included: true },
        { name: "Dominio personalizado", included: true },
        { name: "Análisis avanzado", included: true }
      ],
      cta: "Contactar ventas",
      highlighted: false
    }
  ];
  
  const pricingPlans = plans || defaultPlans;

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl font-bold mb-4">{title}</h2>
          <p className="text-gray-600">{subtitle}</p>
        </div>
        
        {variant === "simple" && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <div 
                key={index} 
                className={`rounded-xl overflow-hidden ${
                  plan.highlighted 
                    ? 'border-2 border-primary shadow-lg relative' 
                    : 'border border-gray-200'
                }`}
              >
                {plan.badge && plan.highlighted && (
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary text-white text-xs font-bold px-3 py-1 rounded-full">
                    {plan.badge}
                  </div>
                )}
                <div className="bg-white p-8">
                  <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
                  <div className="flex items-baseline mb-4">
                    <span className="text-3xl font-bold">{plan.price}</span>
                    {plan.period && <span className="text-gray-500 ml-1">{plan.period}</span>}
                  </div>
                  <p className="text-gray-600 mb-6">{plan.description}</p>
                  <Button 
                    className={`w-full ${
                      plan.highlighted 
                        ? 'bg-primary hover:bg-primary/90' 
                        : 'bg-gray-800 hover:bg-gray-700'
                    }`}
                  >
                    {plan.cta}
                  </Button>
                </div>
                <div className="bg-gray-50 p-8">
                  <p className="font-medium mb-4">Incluye:</p>
                  <ul className="space-y-3">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-center">
                        {feature.included ? (
                          <Check className="h-5 w-5 text-green-500 mr-2" />
                        ) : (
                          <X className="h-5 w-5 text-gray-300 mr-2" />
                        )}
                        <span className={feature.included ? "" : "text-gray-400"}>{feature.name}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        )}
        
        {variant === "detailed" && (
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr>
                  <th className="text-left p-4 border-b-2 border-gray-200"></th>
                  {pricingPlans.map((plan, index) => (
                    <th 
                      key={index} 
                      className={`p-4 border-b-2 ${
                        plan.highlighted 
                          ? 'border-primary bg-primary/5' 
                          : 'border-gray-200'
                      }`}
                    >
                      <div className="relative">
                        {plan.badge && plan.highlighted && (
                          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-8 bg-primary text-white text-xs font-bold px-3 py-1 rounded-full">
                            {plan.badge}
                          </div>
                        )}
                        <h3 className="text-xl font-bold">{plan.name}</h3>
                        <div className="flex items-baseline justify-center my-2">
                          <span className="text-3xl font-bold">{plan.price}</span>
                          {plan.period && <span className="text-gray-500 ml-1">{plan.period}</span>}
                        </div>
                        <p className="text-gray-600 text-sm mb-4">{plan.description}</p>
                        <Button 
                          className={`w-full ${
                            plan.highlighted 
                              ? 'bg-primary hover:bg-primary/90' 
                              : 'bg-gray-800 hover:bg-gray-700'
                          }`}
                        >
                          {plan.cta}
                        </Button>
                      </div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {/* Get all unique feature names */}
                {Array.from(new Set(pricingPlans.flatMap(plan => plan.features.map(f => f.name)))).map((featureName, i) => (
                  <tr key={i} className={i % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                    <td className="p-4 font-medium">{featureName}</td>
                    {pricingPlans.map((plan, planIndex) => {
                      const feature = plan.features.find(f => f.name === featureName);
                      return (
                        <td key={planIndex} className="p-4 text-center">
                          {feature?.included ? (
                            <Check className="h-5 w-5 text-green-500 mx-auto" />
                          ) : (
                            <X className="h-5 w-5 text-gray-300 mx-auto" />
                          )}
                        </td>
                      );
                    })}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
        
        {variant === "compact" && (
          <div className="max-w-3xl mx-auto">
            <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
              {pricingPlans.map((plan, index) => (
                <div 
                  key={index} 
                  className={`p-6 ${
                    index !== pricingPlans.length - 1 ? 'border-b border-gray-200' : ''
                  } ${plan.highlighted ? 'bg-primary/5' : ''}`}
                >
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                    <div className="mb-4 md:mb-0">
                      <div className="flex items-center">
                        <h3 className="text-lg font-bold">{plan.name}</h3>
                        {plan.badge && (
                          <span className="ml-2 bg-primary text-white text-xs font-bold px-2 py-1 rounded-full">
                            {plan.badge}
                          </span>
                        )}
                      </div>
                      <div className="flex items-baseline mt-1">
                        <span className="text-2xl font-bold">{plan.price}</span>
                        {plan.period && <span className="text-gray-500 ml-1">{plan.period}</span>}
                      </div>
                      <p className="text-gray-600 text-sm mt-1">{plan.description}</p>
                    </div>
                    
                    <div className="flex items-center">
                      <div className="hidden md:block mr-6">
                        <ul className="space-y-1">
                          {plan.features.slice(0, 3).map((feature, i) => (
                            feature.included && (
                              <li key={i} className="flex items-center text-sm">
                                <Check className="h-4 w-4 text-green-500 mr-1" />
                                <span>{feature.name}</span>
                              </li>
                            )
                          ))}
                        </ul>
                      </div>
                      
                      <Button 
                        className={`${
                          plan.highlighted 
                            ? 'bg-primary hover:bg-primary/90' 
                            : 'bg-gray-800 hover:bg-gray-700'
                        }`}
                      >
                        {plan.cta}
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default PricingTable;