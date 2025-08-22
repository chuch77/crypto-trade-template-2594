import DeveloperNavbar from "@/components/DeveloperNavbar";
import CloudBackground from "@/components/CloudBackground";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  Code, 
  Smartphone, 
  ShoppingCart, 
  Search, 
  Settings, 
  Headphones,
  CheckCircle,
  ArrowRight,
  Database,
  Cloud,
  Shield,
  Zap,
  Globe,
  Layers
} from "lucide-react";

const Servicios = () => {
  const services = [
    {
      icon: <Code className="h-8 w-8 text-primary" />,
      title: "Desarrollo Frontend React",
      description: "Interfaces de usuario modernas y responsivas con React.js y Next.js",
      features: ["React.js/Next.js", "TypeScript", "Tailwind CSS", "Responsive Design"],
      price: "Desde $300"
    },
    {
      icon: <Database className="h-8 w-8 text-primary" />,
      title: "Desarrollo Backend Node.js",
      description: "APIs robustas y escalables con Node.js, Express y bases de datos",
      features: ["Node.js/Express", "MongoDB/PostgreSQL", "REST APIs", "GraphQL"],
      price: "Desde $400"
    },
    {
      icon: <Layers className="h-8 w-8 text-primary" />,
      title: "Aplicaciones Full Stack MERN",
      description: "Aplicaciones web completas usando MongoDB, Express, React y Node.js",
      features: ["Stack MERN completo", "Autenticación JWT", "Estado con Redux", "Deployment"],
      price: "Desde $800"
    },
    {
      icon: <ShoppingCart className="h-8 w-8 text-primary" />,
      title: "E-commerce Full Stack",
      description: "Tiendas online completas con carrito, pagos y panel administrativo",
      features: ["Carrito de compras", "Stripe/PayPal", "Panel admin", "Gestión inventario"],
      price: "Desde $1,200"
    },
    {
      icon: <Shield className="h-8 w-8 text-primary" />,
      title: "Autenticación y Seguridad",
      description: "Sistemas de login seguros con JWT, OAuth y protección de datos",
      features: ["JWT Authentication", "OAuth (Google/GitHub)", "Bcrypt", "Rate limiting"],
      price: "Desde $200"
    },
    {
      icon: <Cloud className="h-8 w-8 text-primary" />,
      title: "APIs REST y GraphQL",
      description: "Desarrollo de APIs escalables para conectar frontend y backend",
      features: ["REST APIs", "GraphQL", "Documentación", "Testing"],
      price: "Desde $350"
    },
    {
      icon: <Smartphone className="h-8 w-8 text-primary" />,
      title: "Progressive Web Apps (PWA)",
      description: "Apps web que funcionan como aplicaciones nativas",
      features: ["Service Workers", "Offline support", "Push notifications", "App manifest"],
      price: "Desde $500"
    },
    {
      icon: <Globe className="h-8 w-8 text-primary" />,
      title: "Deployment y DevOps",
      description: "Despliegue en la nube con CI/CD y monitoreo",
      features: ["Vercel/Netlify", "AWS/Heroku", "Docker", "GitHub Actions"],
      price: "Desde $150"
    },
    {
      icon: <Zap className="h-8 w-8 text-primary" />,
      title: "Optimización de Performance",
      description: "Mejora la velocidad y rendimiento de aplicaciones web",
      features: ["Code splitting", "Lazy loading", "Caching", "Bundle optimization"],
      price: "Desde $250"
    },
    {
      icon: <Search className="h-8 w-8 text-primary" />,
      title: "SEO y Analytics",
      description: "Optimización para motores de búsqueda y análisis de datos",
      features: ["SEO técnico", "Google Analytics", "Meta tags", "Sitemap"],
      price: "Desde $150"
    },
    {
      icon: <Settings className="h-8 w-8 text-primary" />,
      title: "Testing y QA",
      description: "Pruebas automatizadas para garantizar calidad del código",
      features: ["Unit testing (Jest)", "Integration tests", "E2E testing", "Code coverage"],
      price: "Desde $200"
    },
    {
      icon: <Headphones className="h-8 w-8 text-primary" />,
      title: "Mantenimiento y Soporte",
      description: "Soporte continuo y actualizaciones para tus aplicaciones",
      features: ["Bug fixes", "Updates", "Monitoring", "Backups"],
      price: "Desde $100/mes"
    }
  ];

  const process = [
    {
      step: "01",
      title: "Consulta inicial",
      description: "Analizamos tus necesidades y objetivos para definir el alcance del proyecto."
    },
    {
      step: "02",
      title: "Propuesta y cotización",
      description: "Te envío una propuesta detallada con tiempos, costos y entregables."
    },
    {
      step: "03",
      title: "Desarrollo",
      description: "Inicio el desarrollo manteniendo comunicación constante sobre el progreso."
    },
    {
      step: "04",
      title: "Pruebas y entrega",
      description: "Realizamos pruebas exhaustivas antes de la entrega final del proyecto."
    }
  ];

  return (
    <div className="min-h-screen bg-background relative">
      <CloudBackground />
      <DeveloperNavbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-primary/10 to-background">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              💼 Servicios profesionales
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Soluciones web que impulsan tu negocio
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Ofrezco servicios completos de desarrollo web adaptados a las necesidades específicas 
              de tu proyecto, desde sitios corporativos hasta tiendas online.
            </p>
            <Button size="lg" className="bg-primary hover:bg-primary/90">
              Solicitar cotización
            </Button>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Mis servicios</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Cada servicio está diseñado para brindarte resultados excepcionales y hacer crecer tu presencia digital
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <div className="p-3 bg-primary/10 inline-block rounded-lg mb-6">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                
                <div className="space-y-2 mb-6">
                  {service.features.map((feature, i) => (
                    <div key={i} className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      <span className="text-sm text-gray-600">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <div className="border-t pt-6">
                  <Link to="/contacto">
                    <Button className="w-full" variant="outline">
                      Más información
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Mi proceso de trabajo</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Un enfoque estructurado que garantiza resultados de calidad y comunicación transparente
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {process.map((item, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                    {item.step}
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Preguntas frecuentes</h2>
            </div>
            
            <div className="space-y-6">
              <div className="border border-gray-200 rounded-lg p-6">
                <h3 className="font-semibold mb-2">¿Cuánto tiempo toma desarrollar un sitio web?</h3>
                <p className="text-gray-600">El tiempo varía según la complejidad. Un sitio básico toma 2-3 semanas, mientras que un e-commerce puede tomar 6-8 semanas.</p>
              </div>
              
              <div className="border border-gray-200 rounded-lg p-6">
                <h3 className="font-semibold mb-2">¿Incluyes el hosting y dominio?</h3>
                <p className="text-gray-600">Te ayudo con la configuración, pero el hosting y dominio corren por cuenta del cliente para que tengas control total.</p>
              </div>
              
              <div className="border border-gray-200 rounded-lg p-6">
                <h3 className="font-semibold mb-2">¿Ofreces garantía en tu trabajo?</h3>
                <p className="text-gray-600">Sí, ofrezco 30 días de soporte gratuito después de la entrega para cualquier ajuste o corrección.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">¿Listo para comenzar tu proyecto?</h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Conversemos sobre tu proyecto y cómo puedo ayudarte a alcanzar tus objetivos digitales.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" variant="secondary">
              Solicitar cotización gratuita
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              Ver portafolio
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Jesús Soto</h3>
              <p className="text-gray-400">
                Desarrollador Full Stack JavaScript especializado en crear soluciones web modernas y escalables.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Servicios</h4>
              <ul className="space-y-2">
                <li><Link to="/servicios" className="text-gray-400 hover:text-white">Desarrollo Frontend</Link></li>
                <li><Link to="/servicios" className="text-gray-400 hover:text-white">Backend Node.js</Link></li>
                <li><Link to="/servicios" className="text-gray-400 hover:text-white">Full Stack MERN</Link></li>
                <li><Link to="/servicios" className="text-gray-400 hover:text-white">E-commerce</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Enlaces</h4>
              <ul className="space-y-2">
                <li><Link to="/sobre-mi" className="text-gray-400 hover:text-white">Sobre Mí</Link></li>
                <li><Link to="/portafolio" className="text-gray-400 hover:text-white">Portafolio</Link></li>
                <li><Link to="/servicios" className="text-gray-400 hover:text-white">Servicios</Link></li>
                <li><Link to="/contacto" className="text-gray-400 hover:text-white">Contacto</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contacto</h4>
              <ul className="space-y-2">
                <li><span className="text-gray-400">jesus.soto.dev@gmail.com</span></li>
                <li><Link to="/contacto" className="text-gray-400 hover:text-white">Formulario de contacto</Link></li>
                <li><a href="https://github.com" className="text-gray-400 hover:text-white">GitHub</a></li>
                <li><a href="https://linkedin.com" className="text-gray-400 hover:text-white">LinkedIn</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center">
            <p className="text-gray-400">© 2025 Jesús Soto. Desarrollador Full Stack JavaScript.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Servicios;