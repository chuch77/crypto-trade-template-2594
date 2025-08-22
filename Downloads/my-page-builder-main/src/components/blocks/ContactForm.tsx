import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Mail, Phone, MapPin, Send, Check } from "lucide-react";

interface ContactFormProps {
  variant?: "split" | "centered" | "full-width";
  title?: string;
  subtitle?: string;
  showMap?: boolean;
}

const ContactForm = ({ 
  variant = "split", 
  title = "Contáctanos", 
  subtitle = "Estamos aquí para ayudarte. Completa el formulario y nos pondremos en contacto contigo lo antes posible.",
  showMap = true
}: ContactFormProps) => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    consent: false
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSelectChange = (name: string, value: string) => {
    setFormState(prev => ({ ...prev, [name]: value }));
  };
  
  const handleCheckboxChange = (name: string, checked: boolean) => {
    setFormState(prev => ({ ...prev, [name]: checked }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulación de envío
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      
      // Reset form after 3 seconds
      setTimeout(() => {
        setIsSubmitted(false);
        setFormState({
          name: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
          consent: false
        });
      }, 3000);
    }, 1500);
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        {variant === "centered" && (
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold mb-4">{title}</h2>
            <p className="text-gray-600">{subtitle}</p>
          </div>
        )}
        
        <div className={`
          ${variant === "split" ? "grid grid-cols-1 lg:grid-cols-2 gap-12" : ""}
          ${variant === "centered" ? "max-w-2xl mx-auto" : ""}
        `}>
          {/* Form Column */}
          <div className={variant === "split" ? "order-2 lg:order-1" : ""}>
            {variant !== "centered" && (
              <div className="mb-8">
                <h2 className="text-3xl font-bold mb-4">{title}</h2>
                <p className="text-gray-600">{subtitle}</p>
              </div>
            )}
            
            {isSubmitted ? (
              <div className="bg-green-50 border border-green-200 rounded-lg p-8 text-center">
                <div className="mx-auto w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                  <Check className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-green-800 mb-2">¡Mensaje enviado!</h3>
                <p className="text-green-700">
                  Gracias por contactarnos. Hemos recibido tu mensaje y te responderemos lo antes posible.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Nombre completo</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formState.name}
                      onChange={handleChange}
                      placeholder="Tu nombre"
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email">Correo electrónico</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formState.email}
                      onChange={handleChange}
                      placeholder="tu@email.com"
                      required
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="phone">Teléfono (opcional)</Label>
                    <Input
                      id="phone"
                      name="phone"
                      value={formState.phone}
                      onChange={handleChange}
                      placeholder="+34 600 000 000"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="subject">Asunto</Label>
                    <Select
                      onValueChange={(value) => handleSelectChange("subject", value)}
                      defaultValue={formState.subject}
                    >
                      <SelectTrigger id="subject">
                        <SelectValue placeholder="Selecciona un asunto" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="general">Consulta general</SelectItem>
                        <SelectItem value="support">Soporte técnico</SelectItem>
                        <SelectItem value="sales">Ventas</SelectItem>
                        <SelectItem value="partnership">Colaboraciones</SelectItem>
                        <SelectItem value="other">Otro</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="message">Mensaje</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formState.message}
                    onChange={handleChange}
                    placeholder="¿En qué podemos ayudarte?"
                    rows={5}
                    required
                  />
                </div>
                
                <div className="flex items-start space-x-2">
                  <Checkbox
                    id="consent"
                    checked={formState.consent}
                    onCheckedChange={(checked) => 
                      handleCheckboxChange("consent", checked as boolean)
                    }
                  />
                  <Label htmlFor="consent" className="text-sm leading-tight">
                    Acepto recibir comunicaciones y he leído la{" "}
                    <a href="#" className="text-primary hover:underline">
                      política de privacidad
                    </a>
                  </Label>
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full md:w-auto"
                  disabled={isSubmitting || !formState.consent}
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Enviando...
                    </>
                  ) : (
                    <>
                      <Send className="h-4 w-4 mr-2" />
                      Enviar mensaje
                    </>
                  )}
                </Button>
              </form>
            )}
          </div>
          
          {/* Info Column or Map */}
          {variant === "split" && (
            <div className="order-1 lg:order-2">
              {showMap ? (
                <div className="h-full min-h-[400px] rounded-lg overflow-hidden border border-gray-200">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3037.6463905532037!2d-3.7037974846361757!3d40.41694637936409!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd422997800a3c81%3A0xc436dec1618c2269!2sPuerta%20del%20Sol%2C%20Madrid!5e0!3m2!1ses!2ses!4v1650000000000!5m2!1ses!2ses"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Ubicación en el mapa"
                  ></iframe>
                </div>
              ) : (
                <div className="bg-gray-50 p-8 rounded-lg h-full">
                  <h3 className="text-xl font-bold mb-6">Información de contacto</h3>
                  
                  <div className="space-y-6">
                    <div className="flex items-start">
                      <div className="bg-primary/10 p-3 rounded-full mr-4">
                        <Mail className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-medium mb-1">Email</h4>
                        <a href="mailto:info@empresa.com" className="text-gray-600 hover:text-primary">
                          info@empresa.com
                        </a>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="bg-primary/10 p-3 rounded-full mr-4">
                        <Phone className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-medium mb-1">Teléfono</h4>
                        <a href="tel:+34600000000" className="text-gray-600 hover:text-primary">
                          +34 600 000 000
                        </a>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="bg-primary/10 p-3 rounded-full mr-4">
                        <MapPin className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-medium mb-1">Dirección</h4>
                        <p className="text-gray-600">
                          Calle Principal 123<br />
                          28001 Madrid, España
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-8 pt-8 border-t border-gray-200">
                    <h4 className="font-medium mb-4">Horario de atención</h4>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Lunes - Viernes</span>
                        <span className="font-medium">9:00 - 18:00</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Sábado</span>
                        <span className="font-medium">10:00 - 14:00</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Domingo</span>
                        <span className="font-medium">Cerrado</span>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ContactForm;