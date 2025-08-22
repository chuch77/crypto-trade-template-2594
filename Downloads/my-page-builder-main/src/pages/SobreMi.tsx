import { useState } from "react";
import DeveloperNavbar from "@/components/DeveloperNavbar";
import CloudBackground from "@/components/CloudBackground";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Code, Award, Users, Clock, Download, Github, Linkedin } from "lucide-react";

const SobreMi = () => {
  const [showProjects, setShowProjects] = useState(false);
  const skills = [
    "HTML5/CSS3",
    "JavaScript (ES6+)",
    "React.js",
    "Node.js",
    "Express.js",
    "MongoDB",
    "MySQL/PostgreSQL",
    "Next.js",
    "TypeScript",
    "Tailwind CSS",
    "Git/GitHub",
    "REST APIs",
    "GraphQL",
    "Redux",
    "JWT Authentication",
    "Docker",
    "AWS/Vercel/Netlify",
    "Testing (Jest)"
  ];

  const experience = [
    {
      year: "Mayo 2025 - Presente",
      role: "Desarrollador Full Stack Junior",
      company: "Freelance",
      description: "Desarrollo de aplicaciones web completas utilizando el stack MERN. Búsqueda activa de oportunidades laborales."
    },
    {
      year: "Agosto 2023 - Mayo 2025",
      role: "Estudiante de Desarrollo Full Stack",
      company: "Carrera Técnica",
      description: "Formación completa en desarrollo web Full Stack con JavaScript. Graduado con calificación de 10/10."
    },
    {
      year: "2024 - 2025",
      role: "Proyectos Académicos",
      company: "Portafolio Estudiantil",
      description: "Desarrollo de múltiples proyectos Full Stack para consolidar conocimientos del stack MERN."
    }
  ];

  return (
    <div className="min-h-screen bg-background relative">
      <CloudBackground />
      <DeveloperNavbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-primary/10 to-background">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <div className="relative">
                <div className="w-80 h-80 mx-auto rounded-full overflow-hidden border-8 border-primary/20 shadow-xl">
                  <img 
                    src="/yo.png" 
                    alt="Jesús Soto Méndez" 
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                      e.currentTarget.parentElement.innerHTML = '<div class="w-full h-full bg-gray-200 flex items-center justify-center text-6xl text-primary font-bold">JS</div>';
                    }}
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 bg-primary text-white p-4 rounded-full">
                  <Code className="h-8 w-8" />
                </div>
              </div>
            </div>
            <div className="lg:w-1/2 space-y-6">
              {!showProjects ? (
                // Información personal
                <>
                  <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">
                    👋 Hola, soy Jesús Soto Méndez
                  </div>
                  <h1 className="text-4xl font-bold">Desarrollador Full Stack Junior</h1>
                  <div className="space-y-4 text-gray-600 text-lg leading-relaxed">
                    <p>
                      Desarrollador Full Stack recién graduado (Mayo 2025) con calificación de 10/10. 
                      Mi pasión por la tecnología me llevó a especializarme en el stack MERN (MongoDB, Express, React, Node.js), 
                      donde he desarrollado habilidades sólidas tanto en frontend como en backend.
                    </p>
                    <p>
                      Durante mi formación, no solo aprendí a programar, sino que desarrollé una mentalidad de resolución de problemas 
                      y atención al detalle que me permite crear aplicaciones web robustas y escalables. 
                      Mi enfoque se centra en escribir código limpio, mantenible y siguiendo las mejores prácticas de la industria.
                    </p>
                    <p>
                      Estoy constantemente aprendiendo nuevas tecnologías y manteniéndome actualizado con las últimas tendencias 
                      del desarrollo web. Mi objetivo es contribuir a proyectos innovadores mientras continúo creciendo 
                      profesionalmente en un entorno colaborativo y desafiante.
                    </p>
                  </div>
                </>
              ) : (
                // Proyectos
                <>
                  <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">
                    🚀 Mis proyectos destacados
                  </div>
                  <h1 className="text-4xl font-bold">Trabajos realizados</h1>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="group relative overflow-hidden rounded-lg shadow-md">
                      <img 
                        src="/src/assets/iphone-product.jpg" 
                        alt="E-commerce MERN"
                        className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end">
                        <div className="p-4 w-full">
                          <h4 className="text-white text-lg font-semibold mb-1">TechStore - E-commerce</h4>
                          <p className="text-white/80 text-sm">MongoDB + Express + React + Node.js</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="group relative overflow-hidden rounded-lg shadow-md">
                      <img 
                        src="/src/assets/macbook-product.jpg" 
                        alt="Portfolio Full Stack"
                        className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end">
                        <div className="p-4 w-full">
                          <h4 className="text-white text-lg font-semibold mb-1">DevPortfolio - Full Stack</h4>
                          <p className="text-white/80 text-sm">Next.js + TypeScript + Tailwind</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="group relative overflow-hidden rounded-lg shadow-md">
                      <img 
                        src="/src/assets/headphones-product.jpg" 
                        alt="Task Manager"
                        className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end">
                        <div className="p-4 w-full">
                          <h4 className="text-white text-lg font-semibold mb-1">TaskManager - MERN</h4>
                          <p className="text-white/80 text-sm">React + Redux + Express + MongoDB</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-center">
                      <Link to="/portafolio">
                        <Button variant="outline" className="border-gray-300">
                          Ver todos los proyectos
                        </Button>
                      </Link>
                    </div>
                  </div>
                </>
              )}
              
              <div className="flex gap-4">
                <Button className="bg-primary hover:bg-primary/90">
                  <Download className="mr-2 h-4 w-4" />
                  Descargar CV
                </Button>
                <Button 
                  variant="outline"
                  onClick={() => setShowProjects(!showProjects)}
                >
                  {showProjects ? 'Más información' : 'Ver proyectos'}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>



      {/* Stats Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="p-4 bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-primary" />
              </div>
              <div className="text-3xl font-bold text-primary">12+</div>
              <div className="text-gray-600">Proyectos completados</div>
            </div>
            <div className="text-center">
              <div className="p-4 bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-primary" />
              </div>
              <div className="text-3xl font-bold text-primary">100%</div>
              <div className="text-gray-600">Dedicación</div>
            </div>
            <div className="text-center">
              <div className="p-4 bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8 text-primary" />
              </div>
              <div className="text-3xl font-bold text-primary">3</div>
              <div className="text-gray-600">Meses graduado</div>
            </div>
            <div className="text-center">
              <div className="p-4 bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Code className="h-8 w-8 text-primary" />
              </div>
              <div className="text-3xl font-bold text-primary">18+</div>
              <div className="text-gray-600">Tecnologías dominadas</div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Habilidades técnicas</h2>
              <p className="text-gray-600">
                Tecnologías y herramientas que domino para crear soluciones web modernas
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {skills.map((skill, index) => (
                <div key={index} className="bg-white p-4 rounded-lg border border-gray-200 text-center hover:shadow-md transition-shadow">
                  <span className="font-medium text-gray-800">{skill}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Experiencia profesional</h2>
              <p className="text-gray-600">
                Mi formación académica y proyectos realizados durante mi aprendizaje
              </p>
            </div>
            <div className="space-y-8">
              {experience.map((exp, index) => (
                <div key={index} className="flex gap-6 p-6 bg-gray-50 rounded-lg">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                      <div className="w-4 h-4 bg-primary rounded-full"></div>
                    </div>
                  </div>
                  <div className="flex-grow">
                    <div className="text-sm text-primary font-medium mb-1">{exp.year}</div>
                    <h3 className="text-xl font-semibold mb-1">{exp.role}</h3>
                    <div className="text-gray-600 mb-2">{exp.company}</div>
                    <p className="text-gray-600">{exp.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">¿Trabajamos juntos?</h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Estoy disponible para nuevos proyectos. Conversemos sobre cómo puedo ayudarte.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" variant="secondary">
              Contactar ahora
            </Button>
            <div className="flex justify-center gap-4">
              <a href="#" className="p-3 bg-white/10 rounded-lg hover:bg-white/20 transition-colors">
                <Github className="h-6 w-6" />
              </a>
              <a href="#" className="p-3 bg-white/10 rounded-lg hover:bg-white/20 transition-colors">
                <Linkedin className="h-6 w-6" />
              </a>
            </div>
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

export default SobreMi;