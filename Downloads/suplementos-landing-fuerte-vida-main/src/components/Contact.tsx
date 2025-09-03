import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin, Send } from "lucide-react"

const Contact = () => {
  return (
    <section id="contacto" className="py-20 bg-gym-dark">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold text-gym-text-light mb-6">
            ¿Tienes
            <span className="bg-gradient-primary bg-clip-text text-transparent"> Preguntas?</span>
          </h2>
          <p className="text-xl text-gym-text-muted max-w-3xl mx-auto">
            Nuestro equipo de expertos está aquí para ayudarte a alcanzar tus objetivos fitness.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center">
                  <Mail className="h-6 w-6 text-gym-dark" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gym-text-light">Email</h3>
                  <p className="text-gym-text-muted">info@gymsupps.com</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center">
                  <Phone className="h-6 w-6 text-gym-dark" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gym-text-light">Teléfono</h3>
                  <p className="text-gym-text-muted">+1 (555) 123-4567</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center">
                  <MapPin className="h-6 w-6 text-gym-dark" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gym-text-light">Ubicación</h3>
                  <p className="text-gym-text-muted">Miami, FL 33101</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-card p-6 rounded-xl border border-gym-primary/20">
              <h3 className="text-xl font-bold text-gym-text-light mb-4">Horarios de Atención</h3>
              <div className="space-y-2 text-gym-text-muted">
                <div className="flex justify-between">
                  <span>Lunes - Viernes:</span>
                  <span>8:00 AM - 8:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Sábados:</span>
                  <span>9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Domingos:</span>
                  <span>10:00 AM - 4:00 PM</span>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <Card className="bg-gradient-card border-gym-primary/20 p-8">
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gym-text-light mb-2">
                    Nombre
                  </label>
                  <Input 
                    className="bg-gym-dark border-gym-primary/30 text-gym-text-light focus:border-gym-primary"
                    placeholder="Tu nombre"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gym-text-light mb-2">
                    Email
                  </label>
                  <Input 
                    type="email"
                    className="bg-gym-dark border-gym-primary/30 text-gym-text-light focus:border-gym-primary"
                    placeholder="tu@email.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gym-text-light mb-2">
                  Asunto
                </label>
                <Input 
                  className="bg-gym-dark border-gym-primary/30 text-gym-text-light focus:border-gym-primary"
                  placeholder="¿En qué podemos ayudarte?"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gym-text-light mb-2">
                  Mensaje
                </label>
                <Textarea 
                  className="bg-gym-dark border-gym-primary/30 text-gym-text-light focus:border-gym-primary min-h-[120px]"
                  placeholder="Cuéntanos más detalles..."
                />
              </div>

              <Button 
                type="submit"
                className="w-full bg-gradient-primary hover:bg-gym-primary-dark text-gym-dark font-semibold py-3 group"
              >
                Enviar Mensaje
                <Send className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </section>
  )
}

export default Contact