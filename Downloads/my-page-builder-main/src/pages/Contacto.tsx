import DeveloperNavbar from "@/components/DeveloperNavbar";
import CloudBackground from "@/components/CloudBackground";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  Send, 
  MessageCircle,
  Github,
  Linkedin,
  Twitter
} from "lucide-react";

const Contacto = () => {
  const contactInfo = [
    {
      icon: <Mail className="h-6 w-6 text-primary" />,
      title: "Email",
      value: "jesus.soto.dev@gmail.com",
      description: "Respuesta en menos de 24 horas"
    },
    {
      icon: <Phone className="h-6 w-6 text-primary" />,
      title: "Teléfono",
      value: "+1 (555) 123-4567",
      description: "Lun - Vie, 9:00 AM - 6:00 PM"
    },
    {
      icon: <MapPin className="h-6 w-6 text-primary" />,
      title: "Ubicación",
      value: "Ciudad de México, MX",
      description: "Trabajo remoto disponible"
    },
    {
      icon: <Clock className="h-6 w-6 text-primary" />,
      title: "Horario",
      value: "Lun - Vie, 9:00 - 18:00",
      description: "Zona horaria: GMT-6"
    }
  ];

  const socialLinks = [
    {
      icon: <Github className="h-6 w-6" />,
      name: "GitHub",
      url: "https://github.com",
      color: "hover:text-gray-900"
    },
    {
      icon: <Linkedin className="h-6 w-6" />,
      name: "LinkedIn",
      url: "https://linkedin.com",
      color: "hover:text-blue-600"
    },
    {
      icon: <Twitter className="h-6 w-6" />,
      name: "Twitter",
      url: "https://twitter.com",
      color: "hover:text-blue-400"
    }
  ];

  const faqs = [
    {
      question: "¿Cuál es tu tiempo de respuesta?",
      answer: "Respondo todos los emails en un máximo de 24 horas durante días laborales."
    },
    {
      question: "¿Trabajas con clientes internacionales?",
      answer: "Sí, trabajo con clientes de todo el mundo. Tengo experiencia en proyectos remotos."
    },
    {
      question: "¿Ofreces consultas gratuitas?",
      answer: "Sí, ofrezco una consulta inicial gratuita de 30 minutos para discutir tu proyecto."
    },
    {
      question: "¿Cuáles son tus métodos de pago?",
      answer: "Acepto transferencias bancarias, PayPal y pagos con tarjeta de crédito."
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
              📞 Hablemos
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              ¿Tienes un proyecto en mente?
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Como desarrollador junior, estoy emocionado de trabajar en nuevos proyectos. 
              Conversemos sobre cómo puedo ayudarte con precios accesibles y gran dedicación.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                <MessageCircle className="mr-2 h-5 w-5" />
                Enviar mensaje
              </Button>
              <Button size="lg" variant="outline">
                Agendar llamada
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Información de contacto</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Múltiples formas de ponerte en contacto conmigo. Elige la que más te convenga.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, index) => (
              <div key={index} className="text-center p-6 bg-gray-50 rounded-xl hover:shadow-md transition-shadow">
                <div className="p-3 bg-primary/10 inline-block rounded-full mb-4">
                  {info.icon}
                </div>
                <h3 className="font-semibold mb-2">{info.title}</h3>
                <p className="text-lg font-medium text-primary mb-1">{info.value}</p>
                <p className="text-sm text-gray-600">{info.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold mb-6">Envíame un mensaje</h2>
              <p className="text-gray-600 mb-8">
                Completa el formulario y te responderé lo antes posible con una propuesta personalizada.
              </p>
              
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Nombre *
                    </label>
                    <input 
                      type="text" 
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                      placeholder="Tu nombre completo"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email *
                    </label>
                    <input 
                      type="email" 
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                      placeholder="tu@email.com"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Teléfono
                  </label>
                  <input 
                    type="tel"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="+1 (555) 123-4567"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Tipo de proyecto *
                  </label>
                  <select 
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  >
                    <option value="">Selecciona una opción</option>
                    <option value="landing">Landing Page</option>
                    <option value="ecommerce">Tienda Online</option>
                    <option value="corporate">Sitio Corporativo</option>
                    <option value="portfolio">Portafolio</option>
                    <option value="webapp">Aplicación Web</option>
                    <option value="maintenance">Mantenimiento</option>
                    <option value="consultation">Consultoría</option>
                    <option value="other">Otro</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Presupuesto estimado
                  </label>
                  <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent">
                    <option value="">Selecciona un rango</option>
                    <option value="500-1000">$500 - $1,000</option>
                    <option value="1000-2500">$1,000 - $2,500</option>
                    <option value="2500-5000">$2,500 - $5,000</option>
                    <option value="5000+">$5,000+</option>
                    <option value="discuss">Prefiero discutirlo</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Describe tu proyecto *
                  </label>
                  <textarea 
                    required
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent resize-none"
                    placeholder="Cuéntame sobre tu proyecto, objetivos, funcionalidades necesarias, plazos, etc."
                  ></textarea>
                </div>
                
                <Button size="lg" className="w-full bg-primary hover:bg-primary/90">
                  <Send className="mr-2 h-5 w-5" />
                  Enviar mensaje
                </Button>
              </form>
            </div>
            
            {/* Social Links */}
            <div>
              <h3 className="font-semibold mb-4">Sígueme en redes sociales</h3>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-3 bg-gray-100 rounded-lg text-gray-600 transition-colors ${social.color}`}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>



      {/* CTA Section */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">¿Listo para comenzar?</h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            No esperes más. Conversemos sobre tu proyecto y cómo puedo ayudarte a alcanzar tus objetivos.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" variant="secondary">
              <Mail className="mr-2 h-5 w-5" />
              Enviar email ahora
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              <Phone className="mr-2 h-5 w-5" />
              Llamar ahora
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

export default Contacto;