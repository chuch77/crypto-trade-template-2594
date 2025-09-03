import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Mail, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { motion } from 'framer-motion';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const footerLinks = {
    'Ayuda': [
      { name: 'Envíos y entregas', href: '/envios' },
      { name: 'Cambios y devoluciones', href: '/cambios' },
      { name: 'Guía de tallas', href: '/tallas' },
      { name: 'Preguntas frecuentes', href: '/faq' },
      { name: 'Contacto', href: '/contacto' },
    ],
    'Empresa': [
      { name: 'Sobre nosotros', href: '/sobre-nosotros' },
      { name: 'Políticas de privacidad', href: '/privacidad' },
      { name: 'Términos y condiciones', href: '/terminos' },
      { name: 'Trabaja con nosotros', href: '/trabajo' },
      { name: 'Sostenibilidad', href: '/sostenibilidad' },
    ],
    'Categorías': [
      { name: 'Hombre', href: '/hombre' },
      { name: 'Mujer', href: '/mujer' },
      { name: 'Niños', href: '/ninos' },
      { name: 'Niñas', href: '/ninas' },
      { name: 'Novedades', href: '/novedades' },
    ],
  };

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setIsSubscribed(true);
      setEmail('');
      setTimeout(() => setIsSubscribed(false), 3000);
    }
  };

  return (
    <footer className="bg-gray-900 text-white mt-20">
      <div className="container mx-auto px-4 py-16">
        {/* Newsletter Section */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold mb-4">
              Únete a nuestra comunidad
            </h3>
            <p className="text-gray-400 mb-8 max-w-2xl mx-auto text-lg">
              Suscríbete a nuestro newsletter y sé el primero en conocer las nuevas colecciones, ofertas exclusivas y tendencias de moda.
            </p>
            
            {!isSubscribed ? (
              <form onSubmit={handleNewsletterSubmit} className="flex max-w-md mx-auto gap-3">
                <Input
                  type="email"
                  placeholder="Ingresa tu email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 bg-gray-800 border-gray-700 text-white placeholder:text-gray-400 focus:border-white focus:ring-white"
                  required
                />
                <Button 
                  type="submit"
                  className="bg-[hsl(var(--brand))] text-white hover:bg-[hsl(var(--brand-600))] font-semibold px-6"
                >
                  <Mail className="h-4 w-4 mr-2" />
                  Suscribirme
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Button>
              </form>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-green-600 text-white px-6 py-3 rounded-lg inline-flex items-center gap-2 max-w-md mx-auto"
              >
                <span>✓</span>
                ¡Gracias por suscribirte! Revisa tu email.
              </motion.div>
            )}
          </motion.div>
        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Logo & Description */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center space-x-3 mb-6 group">
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                <span className="text-gray-900 font-bold text-xl">M</span>
              </div>
              <span className="text-2xl font-bold group-hover:text-gray-300 transition-colors">
                ModaFlow
              </span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Tu destino para la moda premium en México. Ofrecemos calidad excepcional, estilo contemporáneo y las últimas tendencias para toda la familia.
            </p>
            
            {/* Social Media */}
            <div className="flex space-x-4">
              <Button 
                variant="ghost" 
                size="icon" 
                className="hover:bg-gray-800 text-gray-400 hover:text-white transition-colors"
                asChild
              >
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                  <Facebook className="h-5 w-5" />
                </a>
              </Button>
              <Button 
                variant="ghost" 
                size="icon" 
                className="hover:bg-gray-800 text-gray-400 hover:text-white transition-colors"
                asChild
              >
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                  <Instagram className="h-5 w-5" />
                </a>
              </Button>
              <Button 
                variant="ghost" 
                size="icon" 
                className="hover:bg-gray-800 text-gray-400 hover:text-white transition-colors"
                asChild
              >
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                  <Twitter className="h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>

          {/* Footer Links */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="font-semibold text-white mb-4 text-lg">{title}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.href}
                      className="text-gray-400 hover:text-white transition-colors text-sm hover:underline"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Trust Badges */}
        <div className="border-t border-gray-800 pt-8 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-[hsl(var(--brand))] rounded-full flex items-center justify-center mb-3">
                <span className="text-2xl">🚚</span>
              </div>
              <h5 className="font-semibold mb-1">Envío gratis</h5>
              <p className="text-gray-400 text-sm">En compras mayores a $999 MXN</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-[hsl(var(--brand-600))] rounded-full flex items-center justify-center mb-3">
                <span className="text-2xl">🔄</span>
              </div>
              <h5 className="font-semibold mb-1">Devoluciones fáciles</h5>
              <p className="text-gray-400 text-sm">30 días para cambios y devoluciones</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-[hsl(var(--brand-700))] rounded-full flex items-center justify-center mb-3">
                <span className="text-2xl">🛡️</span>
              </div>
              <h5 className="font-semibold mb-1">Compra segura</h5>
              <p className="text-gray-400 text-sm">Tus datos protegidos con SSL</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © 2024 ModaFlow México. Todos los derechos reservados.
            </p>
            <div className="flex items-center space-x-6 text-sm text-gray-400">
              <Link to="/privacidad" className="hover:text-white transition-colors">
                Privacidad
              </Link>
              <Link to="/terminos" className="hover:text-white transition-colors">
                Términos
              </Link>
              <Link to="/cookies" className="hover:text-white transition-colors">
                Cookies
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;