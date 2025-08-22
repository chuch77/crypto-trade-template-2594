import { Github, Linkedin, Mail, Heart } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-muted/30 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-primary">ItsMendev</h3>
            <p className="text-muted-foreground">
              Desarrollador Full Stack especializado en crear experiencias digitales excepcionales 
              con tecnologías modernas.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Enlaces rápidos</h4>
            <nav className="flex flex-col space-y-2">
              <a href="#home" className="text-muted-foreground hover:text-primary transition-colors">
                Inicio
              </a>
              <a href="#about" className="text-muted-foreground hover:text-primary transition-colors">
                Sobre mí
              </a>
              <a href="#projects" className="text-muted-foreground hover:text-primary transition-colors">
                Proyectos
              </a>
              <a href="#services" className="text-muted-foreground hover:text-primary transition-colors">
                Servicios
              </a>
              <a href="#contact" className="text-muted-foreground hover:text-primary transition-colors">
                Contacto
              </a>
            </nav>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Conecta conmigo</h4>
            <div className="flex space-x-4">
              <Button variant="outline" size="icon" asChild>
                <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                  <Github className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="outline" size="icon" asChild>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="outline" size="icon" asChild>
                <a href="mailto:jesus@itsmendev.com">
                  <Mail className="h-5 w-5" />
                </a>
              </Button>
            </div>
            <p className="text-sm text-muted-foreground">
              ¿Tienes un proyecto en mente? <br />
              <a href="mailto:jesus@itsmendev.com" className="text-primary hover:underline">
                Hablemos
              </a>
            </p>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm">
            © {currentYear} ItsMendev - Jesús Soto. Todos los derechos reservados.
          </p>
          <p className="text-muted-foreground text-sm flex items-center mt-4 sm:mt-0">
            Hecho con <Heart className="h-4 w-4 text-red-500 mx-1" /> y React
          </p>
        </div>
      </div>
    </footer>
  )
}