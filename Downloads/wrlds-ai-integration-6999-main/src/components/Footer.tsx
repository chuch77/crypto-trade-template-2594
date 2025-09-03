
import { ArrowRight, Linkedin } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {

  return (
    <footer id="contact" className="bg-black text-white pt-8 sm:pt-12 md:pt-16 pb-6 sm:pb-8 w-full">
      <div className="w-full px-3 sm:px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-10 pb-6 sm:pb-8 lg:pb-10 border-b border-gray-700">
          <div className="sm:col-span-2 lg:col-span-2">
            <div className="mb-6">
              <span className="text-2xl font-bold text-white">MZ Stack</span>
            </div>
            <p className="text-gray-300 mb-6">
              Desarrollador Full Stack Junior especializado en crear aplicaciones web modernas y e-commerce. 
              Apasionado por las tecnologías React, Node.js y el desarrollo de soluciones escalables.
            </p>
            <p className="text-gray-300 mb-6">
              Jesús Eliud Soto Méndez<br />
              Desarrollador Full Stack Junior<br />
              Disponible para proyectos freelance
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://linkedin.com/in/jesus-eliud-soto-mendez" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-300 transition-colors hover:bg-gray-700 hover:text-white"
              >
                <Linkedin size={20} />
              </a>
              <a 
                href="https://github.com/jesuseliud" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-300 transition-colors hover:bg-gray-700 hover:text-white"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                </svg>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4 text-white">Servicios</h3>
            <ul className="space-y-3">
              <li><span className="text-gray-300">Desarrollo Web</span></li>
              <li><span className="text-gray-300">E-commerce</span></li>
              <li><span className="text-gray-300">APIs & Backend</span></li>
              <li><span className="text-gray-300">Aplicaciones React</span></li>
              <li><span className="text-gray-300">Bases de Datos</span></li>
              <li><span className="text-gray-300">Deployment & DevOps</span></li>
              <li><span className="text-gray-300">Mantenimiento Web</span></li>
              <li><span className="text-gray-300">Consultoría Técnica</span></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4 text-white">Contacto</h3>
            <div className="space-y-3">
              <p className="text-gray-300">
                <span className="block font-medium">Email:</span>
                jesus.soto.dev@gmail.com
              </p>
              <p className="text-gray-300">
                <span className="block font-medium">Disponibilidad:</span>
                Lunes a Viernes
              </p>
              <p className="text-gray-300">
                <span className="block font-medium">Respuesta:</span>
                24-48 horas
              </p>
              <a 
                href="/Jesus_Soto_VisualCV_Resume.pdf" 
                download
                className="inline-flex items-center px-4 py-2 bg-gray-700 text-white rounded-md hover:bg-gray-600 transition-colors mt-4"
              >
                Descargar CV
                <ArrowRight className="ml-2 w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="pt-4 sm:pt-6 md:pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} Jesús Eliud Soto Méndez. Todos los derechos reservados.
          </p>
          <div className="flex space-x-6">
            <Link to="/privacy-policy" className="text-sm text-gray-400 hover:text-white transition-colors">Privacy Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
