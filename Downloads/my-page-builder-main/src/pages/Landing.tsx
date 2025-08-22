import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import DeveloperNavbar from "@/components/DeveloperNavbar";
import CloudBackground from "@/components/CloudBackground";
import { 
  Layers, 
  Code, 
  Smartphone, 
  Monitor, 
  Tablet, 
  ArrowRight, 
  Check, 
  Download, 
  Copy, 
  Eye,
  Mail,
  Briefcase
} from "lucide-react";

const Landing = () => {
  const [activeTab, setActiveTab] = useState<'ecommerce' | 'portfolio' | 'business'>('ecommerce');
  
  const features = [
    {
      icon: <Code className="h-6 w-6 text-primary" />,
      title: "Desarrollo Frontend React",
      description: "Interfaces modernas y responsivas con React.js, Next.js y TypeScript."
    },
    {
      icon: <Layers className="h-6 w-6 text-primary" />,
      title: "Backend Node.js",
      description: "APIs robustas con Node.js, Express y bases de datos MongoDB/PostgreSQL."
    },
    {
      icon: <Smartphone className="h-6 w-6 text-primary" />,
      title: "Aplicaciones Full Stack MERN",
      description: "Apps completas usando MongoDB, Express, React y Node.js con autenticación."
    },
    {
      icon: <Eye className="h-6 w-6 text-primary" />,
      title: "E-commerce Full Stack",
      description: "Tiendas online con carrito, pagos (Stripe/PayPal) y panel administrativo."
    },
    {
      icon: <Download className="h-6 w-6 text-primary" />,
      title: "APIs REST y GraphQL",
      description: "Desarrollo de APIs escalables para conectar frontend y backend."
    },
    {
      icon: <Copy className="h-6 w-6 text-primary" />,
      title: "Progressive Web Apps",
      description: "PWAs con service workers, notificaciones push y funcionalidad offline."
    },
    {
      icon: <ArrowRight className="h-6 w-6 text-primary" />,
      title: "Autenticación y Seguridad",
      description: "Sistemas seguros con JWT, OAuth (Google/GitHub) y protección de datos."
    },
    {
      icon: <Check className="h-6 w-6 text-primary" />,
      title: "Testing y Deployment",
      description: "Pruebas automatizadas (Jest) y despliegue en Vercel, Netlify o AWS."
    },
    {
      icon: <Monitor className="h-6 w-6 text-primary" />,
      title: "Optimización Performance",
      description: "Code splitting, lazy loading y optimización de bundles para máxima velocidad."
    }
  ];

  const templates = {
    ecommerce: [
      { name: "TechStore - E-commerce MERN", image: "/src/assets/iphone-product.jpg", tech: "MongoDB + Express + React + Node.js", url: "#" },
      { name: "FashionHub - Tienda Full Stack", image: "/src/assets/macbook-product.jpg", tech: "Next.js + PostgreSQL + Stripe", url: "#" },
      { name: "BookStore - Marketplace", image: "/src/assets/headphones-product.jpg", tech: "React + Node.js + MongoDB + JWT", url: "#" }
    ],
    portfolio: [
      { name: "DevPortfolio - Full Stack", image: "/src/assets/macbook-product.jpg", tech: "Next.js + TypeScript + Tailwind", url: "#" },
      { name: "CreativeSpace - PWA", image: "/src/assets/iphone-product.jpg", tech: "React + Service Workers + GraphQL", url: "#" },
      { name: "PhotoGallery - MERN Stack", image: "/src/assets/headphones-product.jpg", tech: "React + Express + MongoDB + Cloudinary", url: "#" }
    ],
    business: [
      { name: "CorporateApp - Full Stack", image: "/src/assets/headphones-product.jpg", tech: "React + Node.js + PostgreSQL + JWT", url: "#" },
      { name: "TaskManager - MERN + Redux", image: "/src/assets/iphone-product.jpg", tech: "React + Redux + Express + MongoDB", url: "#" },
      { name: "CRM System - Full Stack", image: "/src/assets/macbook-product.jpg", tech: "Next.js + Node.js + MySQL + Auth0", url: "#" }
    ]
  };

  const pricing = [
    {
      name: "Básico",
      price: "$15",
      period: "/hora",
      description: "Ideal para proyectos simples y correcciones",
      features: [
        "Landing pages",
        "Sitios web básicos",
        "Corrección de bugs",
        "Actualizaciones menores",
        "Soporte por email"
      ],
      cta: "Contratar ahora",
      highlighted: false
    },
    {
      name: "Estándar",
      price: "$25",
      period: "/hora",
      description: "Perfecto para proyectos Full Stack completos",
      features: [
        "Aplicaciones MERN",
        "E-commerce completo",
        "APIs REST/GraphQL",
        "Base de datos",
        "Deployment incluido"
      ],
      cta: "Más popular",
      highlighted: true
    },
    {
      name: "Premium",
      price: "$35",
      period: "/hora",
      description: "Para proyectos complejos y urgentes",
      features: [
        "Arquitectura avanzada",
        "Optimización performance",
        "Testing automatizado",
        "Entrega prioritaria",
        "Soporte 24/7"
      ],
      cta: "Proyecto urgente",
      highlighted: false
    }
  ];

  return (
    <div className="min-h-screen bg-background relative">
      <CloudBackground />
      <DeveloperNavbar />
      {/* Hero Section */}
      <section id="inicio" className="relative bg-gradient-to-b from-primary/10 to-background pt-32 pb-32">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12 min-h-[70vh]">
            
            {/* Left Content */}
            <div className="lg:w-1/2 space-y-8">
              <div className="space-y-4">
                {/* Avatar */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 rounded-full overflow-hidden border-4 border-primary/20 shadow-lg bg-gray-100 flex items-center justify-center">
                    <img 
                      src="/yo.png" 
                      alt="Jesús Soto" 
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.currentTarget.style.display = 'none';
                        e.currentTarget.parentElement.innerHTML = '<div class="text-2xl text-primary font-bold">JS</div>';
                      }}
                    />
                  </div>
                  <div className="inline-block px-4 py-2 bg-primary/10 rounded-full border border-primary/20">
                    <span className="text-primary text-sm font-medium">👋 Disponible para proyectos</span>
                  </div>
                </div>
                
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                  Hola, soy{" "}
                  <span className="bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
                    Jesús Soto
                  </span>
                </h1>
                
                <h2 className="text-xl lg:text-2xl text-gray-600 font-light">
                  Full Stack JavaScript Developer especializado en React, Node.js y MongoDB
                </h2>
                
                <p className="text-lg text-gray-600 max-w-lg leading-relaxed">
                  Construyo aplicaciones modernas, rápidas y escalables desde cero, 
                  integrando tecnologías de frontend y backend.
                </p>
              </div>

              {/* Tech Stack Icons */}
              <div className="space-y-3">
                <p className="text-sm text-gray-500 font-medium">Tecnologías que domino:</p>
                <div className="flex flex-wrap gap-3">
                  <div className="flex items-center gap-2 px-3 py-2 bg-white rounded-lg border border-gray-200 hover:shadow-md transition-shadow">
                    <span className="text-lg">⚛️</span>
                    <span className="text-sm text-gray-700">React</span>
                  </div>
                  <div className="flex items-center gap-2 px-3 py-2 bg-white rounded-lg border border-gray-200 hover:shadow-md transition-shadow">
                    <span className="text-lg">🟢</span>
                    <span className="text-sm text-gray-700">Node.js</span>
                  </div>
                  <div className="flex items-center gap-2 px-3 py-2 bg-white rounded-lg border border-gray-200 hover:shadow-md transition-shadow">
                    <span className="text-lg">🚀</span>
                    <span className="text-sm text-gray-700">Express</span>
                  </div>
                  <div className="flex items-center gap-2 px-3 py-2 bg-white rounded-lg border border-gray-200 hover:shadow-md transition-shadow">
                    <span className="text-lg">🍃</span>
                    <span className="text-sm text-gray-700">MongoDB</span>
                  </div>
                  <div className="flex items-center gap-2 px-3 py-2 bg-white rounded-lg border border-gray-200 hover:shadow-md transition-shadow">
                    <span className="text-lg">🔷</span>
                    <span className="text-sm text-gray-700">Next.js</span>
                  </div>
                  <div className="flex items-center gap-2 px-3 py-2 bg-white rounded-lg border border-gray-200 hover:shadow-md transition-shadow">
                    <span className="text-lg">🔵</span>
                    <span className="text-sm text-gray-700">TypeScript</span>
                  </div>
                  <div className="flex items-center gap-2 px-3 py-2 bg-white rounded-lg border border-gray-200 hover:shadow-md transition-shadow">
                    <span className="text-lg">🎨</span>
                    <span className="text-sm text-gray-700">TailwindCSS</span>
                  </div>
                  <div className="flex items-center gap-2 px-3 py-2 bg-white rounded-lg border border-gray-200 hover:shadow-md transition-shadow">
                    <span className="text-lg">📊</span>
                    <span className="text-sm text-gray-700">GraphQL</span>
                  </div>
                  <div className="flex items-center gap-2 px-3 py-2 bg-white rounded-lg border border-gray-200 hover:shadow-md transition-shadow">
                    <span className="text-lg">🔄</span>
                    <span className="text-sm text-gray-700">Redux</span>
                  </div>
                  <div className="flex items-center gap-2 px-3 py-2 bg-white rounded-lg border border-gray-200 hover:shadow-md transition-shadow">
                    <span className="text-lg">🔐</span>
                    <span className="text-sm text-gray-700">JWT</span>
                  </div>
                  <div className="flex items-center gap-2 px-3 py-2 bg-white rounded-lg border border-gray-200 hover:shadow-md transition-shadow">
                    <span className="text-lg">🐙</span>
                    <span className="text-sm text-gray-700">GitHub</span>
                  </div>
                  <div className="flex items-center gap-2 px-3 py-2 bg-white rounded-lg border border-gray-200 hover:shadow-md transition-shadow">
                    <span className="text-lg">📦</span>
                    <span className="text-sm text-gray-700">Docker</span>
                  </div>
                  <div className="flex items-center gap-2 px-3 py-2 bg-white rounded-lg border border-gray-200 hover:shadow-md transition-shadow">
                    <span className="text-lg">☁️</span>
                    <span className="text-sm text-gray-700">AWS</span>
                  </div>
                  <div className="flex items-center gap-2 px-3 py-2 bg-white rounded-lg border border-gray-200 hover:shadow-md transition-shadow">
                    <span className="text-lg">🧪</span>
                    <span className="text-sm text-gray-700">Jest</span>
                  </div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/portafolio">
                  <Button size="lg" className="bg-primary hover:bg-primary/90 text-white rounded-xl px-8">
                    Ver Proyectos
                  </Button>
                </Link>
                <Link to="/contacto">
                  <Button size="lg" variant="outline" className="rounded-xl px-8">
                    Contáctame
                  </Button>
                </Link>
              </div>
            </div>

            {/* Right Content - Code Illustration */}
            <div className="lg:w-1/2 relative">
              <div className="relative">
                {/* Main Code Window */}
                <div className="bg-gray-900 rounded-2xl border border-gray-700 shadow-2xl overflow-hidden">
                  {/* Window Header */}
                  <div className="flex items-center gap-2 px-4 py-3 bg-gray-800 border-b border-gray-700">
                    <div className="flex gap-2">
                      <div className="w-3 h-3 rounded-full bg-red-500"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                      <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    </div>
                    <div className="ml-4 text-sm text-gray-400">app.js</div>
                  </div>
                  
                  {/* Code Content */}
                  <div className="p-6 font-mono text-sm text-white">
                    <div className="space-y-2">
                      <div className="text-purple-400">const <span className="text-blue-400">developer</span> = {`{`}</div>
                      <div className="ml-4 text-green-400">name: <span className="text-yellow-300">'Jesús Soto'</span>,</div>
                      <div className="ml-4 text-green-400">role: <span className="text-yellow-300">'Full Stack Developer'</span>,</div>
                      <div className="ml-4 text-green-400">skills: [</div>
                      <div className="ml-8 text-yellow-300">'React', 'Node.js', 'Express', 'MongoDB',</div>
                      <div className="ml-8 text-yellow-300">'Next.js', 'TypeScript', 'GraphQL', 'Redux',</div>
                      <div className="ml-8 text-yellow-300">'TailwindCSS', 'JWT', 'Docker', 'AWS'</div>
                      <div className="ml-4 text-green-400">],</div>
                      <div className="ml-4 text-green-400">passion: <span className="text-yellow-300">'Full Stack development & scalable solutions'</span></div>
                      <div className="text-purple-400">{`}`};</div>
                      <div className="mt-4 text-blue-400">console.log(<span className="text-yellow-300">'Ready to code!'</span>);</div>
                    </div>
                  </div>
                </div>

                {/* Floating Elements */}
                <div className="absolute -top-4 -right-4 w-20 h-20 bg-primary/20 rounded-full blur-xl animate-pulse"></div>
                <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-blue-500/20 rounded-full blur-xl animate-pulse" style={{animationDelay: '1s'}}></div>
                
                {/* GitHub Stats Card */}
                <div className="absolute -bottom-6 -right-6 bg-white rounded-xl border border-gray-200 p-4 shadow-xl">
                  <div className="flex items-center gap-3">
                    <div className="text-2xl">🐙</div>
                    <div>
                      <div className="text-sm font-medium text-gray-900">12+ Repos</div>
                      <div className="text-xs text-gray-500">Active on GitHub</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Work Section */}
      <section className="py-0 bg-white">
        <div className="grid grid-cols-1 lg:grid-cols-2 min-h-screen">
          {/* Large Featured Project */}
          <div className="relative group overflow-hidden">
            <img 
              src="/src/assets/macbook-product.jpg" 
              alt="Featured Project"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors duration-500">
              <div className="absolute bottom-8 left-8 text-white">
                <h3 className="text-3xl font-bold mb-2">E-commerce MERN Stack</h3>
                <p className="text-lg opacity-90 mb-4">Tienda online completa con React + Node.js</p>
                <Button variant="secondary" size="lg">
                  Ver proyecto
                </Button>
              </div>
            </div>
          </div>
          
          {/* Two Smaller Projects */}
          <div className="grid grid-rows-2">
            <div className="relative group overflow-hidden">
              <img 
                src="/src/assets/iphone-product.jpg" 
                alt="Mobile App"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors duration-500">
                <div className="absolute bottom-6 left-6 text-white">
                  <h4 className="text-xl font-bold mb-1">PWA Mobile</h4>
                  <p className="text-sm opacity-90">Progressive Web App</p>
                </div>
              </div>
            </div>
            
            <div className="relative group overflow-hidden">
              <img 
                src="/src/assets/headphones-product.jpg" 
                alt="Dashboard"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors duration-500">
                <div className="absolute bottom-6 left-6 text-white">
                  <h4 className="text-xl font-bold mb-1">Admin Dashboard</h4>
                  <p className="text-sm opacity-90">React + TypeScript</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Showcase */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Servicios especializados</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Desarrollo Full Stack con tecnologías modernas para proyectos que marcan la diferencia
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="group">
              <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                  <Code className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Frontend React</h3>
                <p className="text-gray-600 mb-6">Interfaces modernas y responsivas con React, Next.js y TypeScript</p>
                <Link to="/servicios" className="text-primary font-semibold hover:underline">
                  Explorar servicio →
                </Link>
              </div>
            </div>
            
            <div className="group">
              <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                  <Layers className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Backend Node.js</h3>
                <p className="text-gray-600 mb-6">APIs robustas y escalables con Node.js, Express y bases de datos</p>
                <Link to="/servicios" className="text-primary font-semibold hover:underline">
                  Explorar servicio →
                </Link>
              </div>
            </div>
            
            <div className="group">
              <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                  <Smartphone className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Full Stack MERN</h3>
                <p className="text-gray-600 mb-6">Aplicaciones completas con MongoDB, Express, React y Node.js</p>
                <Link to="/servicios" className="text-primary font-semibold hover:underline">
                  Explorar servicio →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">12+</div>
              <div className="text-primary-100">Proyectos completados</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">18+</div>
              <div className="text-primary-100">Tecnologías dominadas</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">10/10</div>
              <div className="text-primary-100">Calificación académica</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">100%</div>
              <div className="text-primary-100">Dedicación</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="servicios" className="py-20 bg-gradient-to-b from-primary/5 via-gray-50 to-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-30">
          <div className="w-full h-full" style={{backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(0,0,0,0.05) 1px, transparent 0)', backgroundSize: '20px 20px'}}></div>
        </div>
        <div className="relative z-10">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-4">Servicios de desarrollo web profesional</h2>
            <p className="text-gray-600">
              Ofrezco soluciones completas de desarrollo web adaptadas a las necesidades de tu negocio, 
              desde sitios web corporativos hasta tiendas online.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="p-6 bg-white border border-gray-200 rounded-lg hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <div className="p-3 bg-primary/10 inline-block rounded-lg mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
                <div className="mt-4">
                  <Link to="/contacto">
                    <Button variant="outline" size="sm">
                      Más información
                    </Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary/10 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-blue-500/10 rounded-full blur-2xl animate-pulse" style={{animationDelay: '2s'}}></div>
        </div>
      </section>

      {/* Templates Section */}
      <section id="portafolio" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold mb-4">Proyectos destacados</h2>
            <p className="text-gray-600">
              Algunos de los proyectos web que he desarrollado para diferentes industrias y necesidades.
            </p>
          </div>
          
          <div className="flex justify-center mb-8">
            <div className="inline-flex rounded-md border border-gray-200 p-1 bg-white">
              <button 
                onClick={() => setActiveTab('ecommerce')}
                className={`px-4 py-2 rounded-md text-sm font-medium ${
                  activeTab === 'ecommerce' 
                    ? 'bg-primary text-white' 
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                E-commerce
              </button>
              <button 
                onClick={() => setActiveTab('portfolio')}
                className={`px-4 py-2 rounded-md text-sm font-medium ${
                  activeTab === 'portfolio' 
                    ? 'bg-primary text-white' 
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Portafolios
              </button>
              <button 
                onClick={() => setActiveTab('business')}
                className={`px-4 py-2 rounded-md text-sm font-medium ${
                  activeTab === 'business' 
                    ? 'bg-primary text-white' 
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Corporativos
              </button>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {templates[activeTab].map((template, index) => (
              <div key={index} className="group relative overflow-hidden rounded-lg shadow-md">
                <img 
                  src={template.image} 
                  alt={template.name}
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end">
                  <div className="p-6 w-full">
                    <h3 className="text-white text-xl font-semibold mb-2">{template.name}</h3>
                    <p className="text-white/80 text-sm mb-3">{template.tech}</p>
                    <div className="flex justify-between items-center">
                      <a 
                        href={template.url} 
                        className="text-white/80 text-sm hover:text-white transition-colors"
                      >
                        Ver proyecto →
                      </a>
                      <Button size="sm" variant="secondary" className="opacity-0 group-hover:opacity-100 transition-opacity">
                        Ver detalles
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button variant="outline" size="lg">
              Ver todos los proyectos
            </Button>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Mi proceso de trabajo</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Un enfoque estructurado que garantiza resultados excepcionales
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center group">
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors">
                <span className="text-2xl font-bold text-primary">01</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Análisis</h3>
              <p className="text-gray-600">Entiendo tus necesidades y objetivos del proyecto</p>
            </div>
            
            <div className="text-center group">
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors">
                <span className="text-2xl font-bold text-primary">02</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Diseño</h3>
              <p className="text-gray-600">Creo la arquitectura y diseño de la solución</p>
            </div>
            
            <div className="text-center group">
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors">
                <span className="text-2xl font-bold text-primary">03</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Desarrollo</h3>
              <p className="text-gray-600">Codifico la solución con las mejores prácticas</p>
            </div>
            
            <div className="text-center group">
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors">
                <span className="text-2xl font-bold text-primary">04</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Entrega</h3>
              <p className="text-gray-600">Despliego y optimizo para máximo rendimiento</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-4">Tarifas competitivas de freelancer</h2>
            <p className="text-gray-600">
              Precios justos y transparentes para proyectos de desarrollo web. Calidad profesional a tarifas accesibles.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {pricing.map((plan, index) => (
              <div 
                key={index} 
                className={`rounded-xl overflow-hidden ${
                  plan.highlighted 
                    ? 'border-2 border-primary shadow-lg relative' 
                    : 'border border-gray-200'
                }`}
              >
                {plan.highlighted && (
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary text-white text-xs font-bold px-3 py-1 rounded-full">
                    Más popular
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
                        <Check className="h-5 w-5 text-green-500 mr-2" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-black text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-5xl md:text-6xl font-bold mb-8">
              ¿Listo para crear algo
              <span className="block text-primary">extraordinario?</span>
            </h2>
            <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
              Transformemos tu idea en una solución digital que marque la diferencia. 
              Conversemos sobre tu próximo proyecto.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <Link to="/contacto">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-white px-12 py-4 text-lg rounded-full">
                  Iniciar proyecto
                </Button>
              </Link>
              <Link to="/portafolio">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 px-12 py-4 text-lg rounded-full">
                  Ver trabajos
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-2 mb-6">
                <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-primary/20">
                  <img 
                    src="/yo.png" 
                    alt="Jesús Soto" 
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                      e.currentTarget.parentElement.innerHTML = '<div class="w-full h-full bg-primary/10 flex items-center justify-center text-xs text-primary font-bold">JS</div>';
                    }}
                  />
                </div>
                <h3 className="text-2xl font-bold">Jesús Soto</h3>
              </div>
              <p className="text-gray-400 text-lg mb-6 max-w-md">
                Desarrollador Full Stack JavaScript especializado en crear soluciones web modernas, 
                escalables y de alto rendimiento.
              </p>
              <div className="flex space-x-4">
                <a href="https://github.com" className="p-3 bg-gray-800 rounded-lg text-gray-400 hover:text-white hover:bg-primary transition-colors">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                  </svg>
                </a>
                <a href="https://linkedin.com" className="p-3 bg-gray-800 rounded-lg text-gray-400 hover:text-white hover:bg-primary transition-colors">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="font-bold mb-6 text-lg">Servicios</h4>
              <ul className="space-y-3">
                <li><Link to="/servicios" className="text-gray-400 hover:text-white transition-colors">Frontend React</Link></li>
                <li><Link to="/servicios" className="text-gray-400 hover:text-white transition-colors">Backend Node.js</Link></li>
                <li><Link to="/servicios" className="text-gray-400 hover:text-white transition-colors">Full Stack MERN</Link></li>
                <li><Link to="/servicios" className="text-gray-400 hover:text-white transition-colors">E-commerce</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold mb-6 text-lg">Enlaces</h4>
              <ul className="space-y-3">
                <li><Link to="/sobre-mi" className="text-gray-400 hover:text-white transition-colors">Sobre Mí</Link></li>
                <li><Link to="/portafolio" className="text-gray-400 hover:text-white transition-colors">Portafolio</Link></li>
                <li><Link to="/contacto" className="text-gray-400 hover:text-white transition-colors">Contacto</Link></li>
                <li><a href="mailto:jesus.soto.dev@gmail.com" className="text-gray-400 hover:text-white transition-colors">Email</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-400 mb-4 md:mb-0">
                © 2025 Jesús Soto. Desarrollador Full Stack JavaScript.
              </p>
              <p className="text-gray-500 text-sm">
                Hecho con ❤️ usando React + TypeScript
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Landing;