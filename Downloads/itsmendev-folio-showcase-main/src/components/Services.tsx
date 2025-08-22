import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Code, Globe, Server, Search, Smartphone, Zap } from 'lucide-react'

const services = [
  {
    icon: Globe,
    title: 'Desarrollo Web Frontend',
    description: 'Creación de interfaces de usuario modernas y responsivas usando React, Vue.js y las últimas tecnologías frontend.',
    features: ['React & Next.js', 'Vue.js & Nuxt.js', 'TypeScript', 'TailwindCSS', 'Responsive Design']
  },
  {
    icon: Server,
    title: 'Desarrollo Backend',
    description: 'Desarrollo de APIs robustas y escalables con Node.js, Python y bases de datos modernas.',
    features: ['Node.js & Express', 'Python & FastAPI', 'REST & GraphQL APIs', 'Bases de datos', 'Autenticación']
  },
  {
    icon: Code,
    title: 'Aplicaciones Full Stack',
    description: 'Desarrollo completo de aplicaciones web desde el frontend hasta el backend y la base de datos.',
    features: ['Arquitectura completa', 'Integración de APIs', 'Gestión de estado', 'Deployment', 'Mantenimiento']
  },
  {
    icon: Search,
    title: 'Optimización SEO',
    description: 'Optimización de sitios web para motores de búsqueda y mejora del rendimiento.',
    features: ['SEO Técnico', 'Optimización de velocidad', 'Meta tags', 'Structured data', 'Core Web Vitals']
  },
  {
    icon: Smartphone,
    title: 'Desarrollo Móvil',
    description: 'Creación de aplicaciones móviles con React Native y Progressive Web Apps.',
    features: ['React Native', 'PWA', 'Cross-platform', 'Push notifications', 'App Store deployment']
  },
  {
    icon: Zap,
    title: 'Consultoría Técnica',
    description: 'Asesoramiento en arquitectura de software, mejores prácticas y selección de tecnologías.',
    features: ['Arquitectura de software', 'Code review', 'Performance audit', 'Tech stack selection', 'Team mentoring']
  }
]

export function Services() {
  return (
    <section id="services" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Servicios
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Soluciones tecnológicas integrales para impulsar tu negocio digital
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <Card className="h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-2 hover:border-primary/20">
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <service.icon className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>

                <CardContent className="space-y-4">
                  <p className="text-muted-foreground text-center">{service.description}</p>
                  
                  <div className="space-y-2">
                    <h4 className="font-semibold text-foreground text-center mb-3">Incluye:</h4>
                    <ul className="space-y-1">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="text-sm text-muted-foreground flex items-center">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}