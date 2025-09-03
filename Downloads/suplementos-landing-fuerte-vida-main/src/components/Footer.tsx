import { Button } from "@/components/ui/button"
import { Instagram, Facebook, Twitter, Youtube } from "lucide-react"

const Footer = () => {
  return (
    <footer className="bg-gym-dark border-t border-gym-primary/20">
      <div className="container mx-auto px-4 py-8 sm:py-12 lg:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {/* Brand */}
          <div className="space-y-4 sm:col-span-2 lg:col-span-1">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
                <span className="text-gym-dark font-bold text-lg">G</span>
              </div>
              <span className="text-gym-text-light font-bold text-xl">GymSupps</span>
            </div>
            <p className="text-sm sm:text-base text-gym-text-muted leading-relaxed">
              Tu aliado perfecto para alcanzar tus objetivos fitness. 
              Suplementos premium para atletas exigentes.
            </p>
            <div className="flex space-x-2 sm:space-x-4">
              <Button variant="ghost" size="icon" className="text-gym-text-muted hover:text-gym-primary">
                <Instagram className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-gym-text-muted hover:text-gym-primary">
                <Facebook className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-gym-text-muted hover:text-gym-primary">
                <Twitter className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-gym-text-muted hover:text-gym-primary">
                <Youtube className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Products */}
          <div className="space-y-4">
            <h4 className="text-gym-text-light font-semibold text-base sm:text-lg">Productos</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-sm sm:text-base text-gym-text-muted hover:text-gym-primary transition-colors">Proteínas</a></li>
              <li><a href="#" className="text-sm sm:text-base text-gym-text-muted hover:text-gym-primary transition-colors">Pre-Entreno</a></li>
              <li><a href="#" className="text-sm sm:text-base text-gym-text-muted hover:text-gym-primary transition-colors">Aminoácidos</a></li>
              <li><a href="#" className="text-sm sm:text-base text-gym-text-muted hover:text-gym-primary transition-colors">Creatina</a></li>
              <li><a href="#" className="text-sm sm:text-base text-gym-text-muted hover:text-gym-primary transition-colors">Vitaminas</a></li>
            </ul>
          </div>

          {/* Support */}
          <div className="space-y-4">
            <h4 className="text-gym-text-light font-semibold text-base sm:text-lg">Soporte</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-sm sm:text-base text-gym-text-muted hover:text-gym-primary transition-colors">Centro de Ayuda</a></li>
              <li><a href="#" className="text-sm sm:text-base text-gym-text-muted hover:text-gym-primary transition-colors">Envíos</a></li>
              <li><a href="#" className="text-sm sm:text-base text-gym-text-muted hover:text-gym-primary transition-colors">Devoluciones</a></li>
              <li><a href="#" className="text-sm sm:text-base text-gym-text-muted hover:text-gym-primary transition-colors">Contacto</a></li>
              <li><a href="#" className="text-sm sm:text-base text-gym-text-muted hover:text-gym-primary transition-colors">FAQ</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="space-y-4 sm:col-span-2 lg:col-span-1">
            <h4 className="text-gym-text-light font-semibold text-base sm:text-lg">Newsletter</h4>
            <p className="text-sm sm:text-base text-gym-text-muted">
              Suscríbete para recibir ofertas exclusivas y consejos de entrenamiento.
            </p>
            <div className="space-y-3">
              <input 
                type="email" 
                placeholder="Tu email"
                className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-gym-dark-card border border-gym-primary/20 rounded-lg text-gym-text-light placeholder-gym-text-muted focus:border-gym-primary outline-none transition-colors text-sm sm:text-base"
              />
              <Button className="w-full bg-gradient-primary hover:bg-gym-primary-dark text-gym-dark font-semibold text-sm sm:text-base">
                Suscribirse
              </Button>
            </div>
          </div>
        </div>

        <div className="border-t border-gym-primary/20 mt-8 sm:mt-12 pt-6 sm:pt-8 text-center">
          <p className="text-sm sm:text-base text-gym-text-muted">
            © 2024 GymSupps. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer