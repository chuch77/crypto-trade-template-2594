import { ArrowLeft, Code, Database, Globe, Smartphone, ShoppingCart, Zap, Cloud, Shield, Search, Palette } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";
import { useEffect } from 'react';
import PageLayout from '@/components/PageLayout';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Services = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const services = [
    {
      id: 1,
      title: "Desarrollo Frontend",
      titleEn: "Frontend Development",
      description: "Interfaces modernas y responsivas con React, TypeScript y Tailwind CSS",
      descriptionEn: "Modern and responsive interfaces with React, TypeScript and Tailwind CSS",
      price: "$15/hora",
      icon: <Code className="w-8 h-8" />,
      technologies: ["React", "TypeScript", "Tailwind CSS", "Next.js", "HTML5", "CSS3"]
    },
    {
      id: 2,
      title: "Desarrollo Backend",
      titleEn: "Backend Development", 
      description: "APIs robustas y escalables con Node.js, Express y bases de datos",
      descriptionEn: "Robust and scalable APIs with Node.js, Express and databases",
      price: "$20/hora",
      icon: <Database className="w-8 h-8" />,
      technologies: ["Node.js", "Express", "MongoDB", "PostgreSQL", "MySQL", "JWT"]
    },
    {
      id: 3,
      title: "Desarrollo Full Stack",
      titleEn: "Full Stack Development",
      description: "Aplicaciones web completas desde el frontend hasta el backend",
      descriptionEn: "Complete web applications from frontend to backend",
      price: "$25/hora",
      icon: <Globe className="w-8 h-8" />,
      technologies: ["MERN Stack", "PERN Stack", "REST APIs", "GraphQL", "WebSockets", "Docker"]
    },
    {
      id: 4,
      title: "E-commerce",
      titleEn: "E-commerce",
      description: "Tiendas online completas con sistemas de pago y gestión de inventario",
      descriptionEn: "Complete online stores with payment systems and inventory management",
      price: "$25/hora",
      icon: <ShoppingCart className="w-8 h-8" />,
      technologies: ["Stripe", "PayPal", "WooCommerce", "Shopify", "Cart Systems", "Payment Gateways"]
    },
    {
      id: 5,
      title: "Aplicaciones Móviles",
      titleEn: "Mobile Applications",
      description: "Apps móviles híbridas con React Native y tecnologías modernas",
      descriptionEn: "Hybrid mobile apps with React Native and modern technologies",
      price: "$20/hora",
      icon: <Smartphone className="w-8 h-8" />,
      technologies: ["React Native", "Expo", "Firebase", "AsyncStorage", "Push Notifications", "App Store"]
    },
    {
      id: 6,
      title: "Optimización y Performance",
      titleEn: "Optimization & Performance",
      description: "Mejora de velocidad, SEO y experiencia de usuario",
      descriptionEn: "Speed improvement, SEO and user experience optimization",
      price: "$15/hora",
      icon: <Zap className="w-8 h-8" />,
      technologies: ["Lighthouse", "Core Web Vitals", "SEO", "Performance", "Caching", "CDN"]
    }
  ];

  const technologies = [
    "React", "Node.js", "TypeScript", "JavaScript", "MongoDB", "PostgreSQL", 
    "Express", "Next.js", "Tailwind CSS", "HTML5", "CSS3", "Git", 
    "Docker", "AWS", "Vercel", "Netlify", "Stripe", "PayPal",
    "Firebase", "GraphQL", "REST APIs", "JWT", "React Native", "Expo"
  ];

  const scrollToContact = () => {
    window.location.href = "/#contact-info";
  };

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
              Mis Servicios
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              transition={{ duration: 0.5, delay: 0.2 }} 
              className="text-xl text-gray-600 mb-12"
            >
              Servicios profesionales de desarrollo web con tarifas por hora competitivas
            </motion.p>

            {/* Services Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {services.map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card className="h-full hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex items-center mb-4">
                        <div className="p-3 bg-blue-100 rounded-lg mr-4">
                          {service.icon}
                        </div>
                        <div>
                          <h3 className="text-xl font-bold">{service.title}</h3>
                          <p className="text-2xl font-bold text-blue-600">{service.price}</p>
                        </div>
                      </div>
                      
                      <p className="text-gray-600 mb-4">{service.description}</p>
                      
                      <div className="mb-4">
                        <h4 className="font-semibold mb-2">Tecnologías:</h4>
                        <div className="flex flex-wrap gap-2">
                          {service.technologies.map((tech, idx) => (
                            <span 
                              key={idx} 
                              className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            {/* Technologies Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="bg-gray-50 rounded-xl p-8 mb-12"
            >
              <h2 className="text-3xl font-bold mb-6 text-center">Tecnologías que Domino</h2>
              <p className="text-gray-600 text-center mb-8">
                Más de 20 tecnologías modernas para crear soluciones completas
              </p>
              
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                {technologies.map((tech, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow text-center"
                  >
                    <span className="font-medium text-gray-800">{tech}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* CTA Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1 }}
              className="text-center bg-blue-50 rounded-xl p-8"
            >
              <h2 className="text-3xl font-bold mb-4">¿Listo para comenzar tu proyecto?</h2>
              <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                Contáctame para discutir tu proyecto y recibir una cotización personalizada. 
                Todos los servicios incluyen código limpio, documentación y soporte post-entrega.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  onClick={scrollToContact}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3"
                >
                  Solicitar Cotización
                </Button>
                <Button 
                  variant="outline"
                  onClick={() => window.location.href = "/#pricing"}
                  className="border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-3"
                >
                  Ver Planes de Precios
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Services;