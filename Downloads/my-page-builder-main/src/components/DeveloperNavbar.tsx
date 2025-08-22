import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { 
  Code, 
  User, 
  Briefcase, 
  Mail, 
  FileText,
  Github,
  Linkedin
} from "lucide-react";

const DeveloperNavbar = () => {

  const navItems = [
    { name: "Inicio", href: "/", icon: <Code className="h-4 w-4" /> },
    { name: "Sobre Mí", href: "/sobre-mi", icon: <User className="h-4 w-4" /> },
    { name: "Servicios", href: "/servicios", icon: <Briefcase className="h-4 w-4" /> },
    { name: "Portafolio", href: "/portafolio", icon: <FileText className="h-4 w-4" /> },
    { name: "Contacto", href: "/contacto", icon: <Mail className="h-4 w-4" /> }
  ];

  return (
    <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-gray-200 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
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
            <span className="text-xl font-bold text-gray-900">Jesús Soto</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="text-gray-600 hover:text-primary transition-colors duration-200 font-medium"
              >
                <span>{item.name}</span>
              </Link>
            ))}
          </div>

          {/* Social Links & CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-gray-600 hover:text-primary transition-colors"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-gray-600 hover:text-primary transition-colors"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <Link to="/contacto">
              <Button size="sm" className="bg-primary hover:bg-primary/90">
                Contratar
              </Button>
            </Link>
          </div>

        </div>
      </div>
    </nav>
  );
};

export default DeveloperNavbar;