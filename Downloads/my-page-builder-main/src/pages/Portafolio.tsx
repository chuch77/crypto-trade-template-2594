import { useState } from "react";
import DeveloperNavbar from "@/components/DeveloperNavbar";
import CloudBackground from "@/components/CloudBackground";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ExternalLink, Github, Filter } from "lucide-react";

const Portafolio = () => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'ecommerce' | 'corporate' | 'portfolio'>('all');

  const projects = [
    {
      id: 1,
      title: "TechStore - Tienda Electrónica",
      category: "ecommerce",
      image: "/src/assets/iphone-product.jpg",
      description: "E-commerce completo con carrito de compras, pasarela de pagos y panel administrativo.",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      liveUrl: "#",
      githubUrl: "#",
      featured: true
    },
    {
      id: 2,
      title: "Corporativo Innovación",
      category: "corporate",
      image: "/src/assets/macbook-product.jpg",
      description: "Sitio web corporativo moderno con CMS personalizado y optimización SEO.",
      technologies: ["Next.js", "TypeScript", "Tailwind", "Sanity"],
      liveUrl: "#",
      githubUrl: "#",
      featured: true
    },
    {
      id: 3,
      title: "Portfolio Creativo",
      category: "portfolio",
      image: "/src/assets/headphones-product.jpg",
      description: "Portafolio personal para diseñador gráfico con galería interactiva.",
      technologies: ["Vue.js", "Nuxt", "GSAP", "Netlify"],
      liveUrl: "#",
      githubUrl: "#",
      featured: false
    },
    {
      id: 4,
      title: "FashionHub - Moda Online",
      category: "ecommerce",
      image: "/src/assets/iphone-hero.jpg",
      description: "Tienda de moda con filtros avanzados y sistema de recomendaciones.",
      technologies: ["React", "Firebase", "Algolia", "PayPal"],
      liveUrl: "#",
      githubUrl: "#",
      featured: true
    },
    {
      id: 5,
      title: "Agencia Digital",
      category: "corporate",
      image: "/src/assets/macbook-product.jpg",
      description: "Sitio web para agencia de marketing digital con blog integrado.",
      technologies: ["Gatsby", "GraphQL", "Contentful", "Netlify"],
      liveUrl: "#",
      githubUrl: "#",
      featured: false
    },
    {
      id: 6,
      title: "Fotógrafo Profesional",
      category: "portfolio",
      image: "/src/assets/headphones-product.jpg",
      description: "Portfolio fotográfico con galería optimizada y sistema de contacto.",
      technologies: ["React", "Framer Motion", "Cloudinary", "Vercel"],
      liveUrl: "#",
      githubUrl: "#",
      featured: false
    }
  ];

  const filters = [
    { key: 'all', label: 'Todos los proyectos' },
    { key: 'ecommerce', label: 'E-commerce' },
    { key: 'corporate', label: 'Corporativos' },
    { key: 'portfolio', label: 'Portafolios' }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  const featuredProjects = projects.filter(project => project.featured);

  return (
    <div className="min-h-screen bg-background relative">
      <CloudBackground />
      <DeveloperNavbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-primary/10 to-background">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              🚀 Mis trabajos
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Proyectos que transforman ideas en realidad
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Explora una selección de mis proyectos más destacados, desde tiendas online 
              hasta sitios corporativos y portafolios creativos.
            </p>
            <Button size="lg" className="bg-primary hover:bg-primary/90">
              Ver todos los proyectos
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Proyectos destacados</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Algunos de mis trabajos más recientes y exitosos
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {featuredProjects.slice(0, 2).map((project) => (
              <div key={project.id} className="group relative overflow-hidden rounded-xl shadow-lg">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent">
                  <div className="absolute bottom-0 left-0 right-0 p-8">
                    <h3 className="text-white text-2xl font-bold mb-2">{project.title}</h3>
                    <p className="text-white/90 mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech, i) => (
                        <span key={i} className="px-2 py-1 bg-white/20 text-white text-xs rounded">
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="flex gap-3">
                      <a href={project.liveUrl} className="flex items-center text-white hover:text-primary transition-colors">
                        <ExternalLink className="h-4 w-4 mr-1" />
                        Ver sitio
                      </a>
                      <a href={project.githubUrl} className="flex items-center text-white hover:text-primary transition-colors">
                        <Github className="h-4 w-4 mr-1" />
                        Código
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* All Projects */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Todos los proyectos</h2>
            <p className="text-gray-600 mb-8">
              Filtra por categoría para encontrar el tipo de proyecto que te interesa
            </p>
            
            {/* Filter Buttons */}
            <div className="flex flex-wrap justify-center gap-2 mb-8">
              {filters.map((filter) => (
                <button
                  key={filter.key}
                  onClick={() => setActiveFilter(filter.key as any)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    activeFilter === filter.key
                      ? 'bg-primary text-white'
                      : 'bg-white text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  <Filter className="h-4 w-4 inline mr-1" />
                  {filter.label}
                </button>
              ))}
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div key={project.id} className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-300 hover:scale-105"
                  />
                  <div className="absolute top-4 right-4">
                    <span className="px-2 py-1 bg-primary text-white text-xs rounded-full">
                      {project.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-gray-600 mb-4 text-sm">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-1 mb-4">
                    {project.technologies.map((tech, i) => (
                      <span key={i} className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded">
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <div className="flex gap-3">
                      <a 
                        href={project.liveUrl} 
                        className="flex items-center text-primary hover:text-primary/80 transition-colors text-sm"
                      >
                        <ExternalLink className="h-4 w-4 mr-1" />
                        Ver sitio
                      </a>
                      <a 
                        href={project.githubUrl} 
                        className="flex items-center text-gray-600 hover:text-gray-800 transition-colors text-sm"
                      >
                        <Github className="h-4 w-4 mr-1" />
                        Código
                      </a>
                    </div>
                    <Button size="sm" variant="outline">
                      Detalles
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">¿Te gusta lo que ves?</h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Estos son solo algunos ejemplos de lo que puedo crear para ti. 
            Conversemos sobre tu próximo proyecto.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" variant="secondary">
              Iniciar proyecto
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              Descargar portafolio PDF
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

export default Portafolio;