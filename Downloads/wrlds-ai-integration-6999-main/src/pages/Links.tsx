import { ArrowLeft, ExternalLink, Github } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";
import { useEffect } from 'react';
import PageLayout from '@/components/PageLayout';
import { Card, CardContent } from "@/components/ui/card";

const Links = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const projects = [
    {
      id: 1,
      title: "E-commerce de Ropa",
      description: "Tienda online completa con catálogo de productos, carrito de compras y sistema de pagos.",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      liveUrl: "https://fashion-store-demo.vercel.app",
      githubUrl: "https://github.com/jesuseliud/fashion-store",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=600&fit=crop",
      category: "E-commerce"
    },
    {
      id: 2,
      title: "CryptoTrade Platform",
      description: "Plataforma de trading de criptomonedas con gráficos en tiempo real y portfolio personal.",
      technologies: ["React", "TypeScript", "Tailwind CSS", "Vercel"],
      liveUrl: "https://crypto-trade-template-2594.vercel.app",
      githubUrl: "https://github.com/jesuseliud/crypto-trade",
      image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&h=600&fit=crop",
      category: "Fintech"
    },
    {
      id: 3,
      title: "Dashboard E-commerce Ropa",
      description: "Panel de administración para gestión de inventario, pedidos y análisis de ventas.",
      technologies: ["React", "Chart.js", "Express", "MySQL"],
      liveUrl: "https://fashion-dashboard-demo.vercel.app",
      githubUrl: "https://github.com/jesuseliud/fashion-dashboard",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
      category: "Dashboard"
    },
    {
      id: 4,
      title: "Suplementos del Gym",
      description: "Tienda online especializada en suplementos deportivos con sistema de recomendaciones.",
      technologies: ["React", "Express", "PayPal", "PostgreSQL"],
      liveUrl: "https://gym-supplements-store.vercel.app",
      githubUrl: "https://github.com/jesuseliud/gym-supplements",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop",
      category: "E-commerce"
    },
    {
      id: 5,
      title: "Librería Digital",
      description: "Sistema de venta de libros digitales y físicos con búsqueda avanzada y reseñas.",
      technologies: ["Next.js", "TypeScript", "PostgreSQL", "Cloudinary"],
      liveUrl: "https://digital-bookstore-demo.vercel.app",
      githubUrl: "https://github.com/jesuseliud/digital-bookstore",
      image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=800&h=600&fit=crop",
      category: "E-commerce"
    }
  ];

  return (
    <PageLayout>
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="max-w-6xl mx-auto">
            <Link to="/" className="inline-flex items-center text-gray-500 hover:text-gray-700 mb-6 transition-colors">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Volver al Inicio
            </Link>
            
            <motion.h1 
              initial={{ opacity: 0, y: -10 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.5 }} 
              className="text-4xl font-bold mb-6"
            >
              Todos mis Trabajos
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              transition={{ duration: 0.5, delay: 0.2 }} 
              className="text-xl text-gray-600 mb-12"
            >
              Explora todos los proyectos que he desarrollado como Full Stack Developer
            </motion.p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card className="overflow-hidden h-full hover:shadow-lg transition-shadow">
                    <div 
                      className="h-48 bg-cover bg-center relative"
                      style={{ backgroundImage: `url(${project.image})` }}
                    >
                      <div className="absolute top-4 left-4">
                        <span className="px-3 py-1 bg-black/70 text-white text-sm rounded-full">
                          {project.category}
                        </span>
                      </div>
                    </div>
                    
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                      <p className="text-gray-600 mb-4 text-sm">{project.description}</p>
                      
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.technologies.map((tech, idx) => (
                          <span 
                            key={idx} 
                            className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                      
                      <div className="flex gap-3">
                        <a 
                          href={project.liveUrl} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="flex items-center px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors text-sm"
                        >
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Ver Live
                        </a>
                        <a 
                          href={project.githubUrl} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="flex items-center px-4 py-2 bg-gray-800 text-white rounded hover:bg-gray-900 transition-colors text-sm"
                        >
                          <Github className="w-4 h-4 mr-2" />
                          Código
                        </a>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Links;