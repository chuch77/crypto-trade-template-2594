
import { ArrowLeft, CheckCircle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";
import { useEffect } from 'react';
import PageLayout from '@/components/PageLayout';
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <PageLayout>
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="max-w-6xl mx-auto">
            <Link to="/" className="inline-flex items-center text-gray-500 hover:text-gray-700 mb-6 transition-colors">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Link>
            
            <motion.h1 
              initial={{ opacity: 0, y: -10 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.5 }} 
              className="text-4xl font-bold mb-6"
            >
              Sobre Mí - Jesús Eliud Soto Méndez
            </motion.h1>
            
            <div className="prose prose-lg max-w-none">
              <motion.p 
                initial={{ opacity: 0 }} 
                animate={{ opacity: 1 }} 
                transition={{ duration: 0.5, delay: 0.2 }} 
                className="text-xl text-gray-600 mb-12"
              >
                Desarrollador Full Stack Junior apasionado por crear soluciones web innovadoras y escalables que transforman ideas en realidad digital.
              </motion.p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
                <motion.div 
                  initial={{ opacity: 0, x: -20 }} 
                  animate={{ opacity: 1, x: 0 }} 
                  transition={{ duration: 0.6 }}
                  className="space-y-6"
                >
                  <h2 className="text-3xl font-bold">Mi Misión</h2>
                  <p className="text-gray-600">
                    Como desarrollador Full Stack, mi misión es crear aplicaciones web robustas y escalables 
                    que resuelvan problemas reales y mejoren la experiencia del usuario final.
                  </p>
                  <p className="text-gray-600">
                    Me especializo en el desarrollo completo de aplicaciones, desde el frontend con React y TypeScript 
                    hasta el backend con Node.js, siempre enfocándome en las mejores prácticas y código limpio.
                  </p>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, x: 20 }} 
                  animate={{ opacity: 1, x: 0 }} 
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="bg-gray-50 rounded-2xl p-8 border border-gray-100"
                >
                  <h3 className="text-2xl font-bold mb-4">Habilidades Técnicas</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-gray-700 mt-1 mr-3 flex-shrink-0" />
                      <span><strong>Frontend:</strong> React, TypeScript, Tailwind CSS, Next.js, HTML5, CSS3</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-gray-700 mt-1 mr-3 flex-shrink-0" />
                      <span><strong>Backend:</strong> Node.js, Express, APIs REST, Bases de datos SQL/NoSQL</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-gray-700 mt-1 mr-3 flex-shrink-0" />
                      <span><strong>Herramientas:</strong> Git, GitHub, VS Code, Postman, Docker, Vercel</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-gray-700 mt-1 mr-3 flex-shrink-0" />
                      <span><strong>E-commerce:</strong> Integración de pagos, gestión de inventarios, UX/UI</span>
                    </li>
                  </ul>
                </motion.div>
              </div>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }} 
                animate={{ opacity: 1, y: 0 }} 
                transition={{ duration: 0.6, delay: 0.4 }}
                className="mb-16"
              >
                <h2 className="text-3xl font-bold mb-6">Mi Historia</h2>
                <div className="bg-white rounded-xl border border-gray-200 p-8 shadow-sm">
                  <p className="text-gray-600 mb-4">
                    Mi pasión por la programación comenzó cuando descubrí el poder de transformar ideas en 
                    aplicaciones funcionales. Desde entonces, me he dedicado a perfeccionar mis habilidades 
                    como desarrollador Full Stack, especializandome en tecnologías modernas como React y Node.js.
                  </p>
                  <p className="text-gray-600 mb-4">
                    A lo largo de mi carrera, he desarrollado más de 5 proyectos completos, incluyendo aplicaciones 
                    de e-commerce, plataformas web interactivas y sistemas de gestión. Cada proyecto me ha enseñado 
                    nuevas técnicas y me ha ayudado a crecer como desarrollador.
                  </p>
                  <p className="text-gray-600">
                    Actualmente, busco oportunidades para aplicar mis conocimientos en proyectos desafiantes 
                    donde pueda contribuir al éxito del equipo mientras continúo aprendiendo y evolucionando 
                    en el mundo del desarrollo web.
                  </p>
                </div>
              </motion.div>
              

            </div>

          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default About;
