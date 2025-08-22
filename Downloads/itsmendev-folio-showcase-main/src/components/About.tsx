import { motion } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

const skills = [
  'React', 'Node.js', 'TypeScript', 'JavaScript', 'Python', 'MongoDB',
  'PostgreSQL', 'Express.js', 'Next.js', 'TailwindCSS', 'Git', 'Docker',
  'AWS', 'Firebase', 'GraphQL', 'REST APIs'
]

const experiences = [
  {
    title: 'Desarrollador Full Stack Senior',
    company: 'Tech Solutions Inc.',
    period: '2022 - Presente',
    description: 'Desarrollo de aplicaciones web escalables con React y Node.js. Implementación de arquitecturas microservicios y optimización de rendimiento.'
  },
  {
    title: 'Desarrollador Frontend',
    company: 'Digital Agency',
    period: '2020 - 2022',
    description: 'Creación de interfaces de usuario modernas y responsivas. Colaboración con equipos de diseño para implementar experiencias de usuario excepcionales.'
  },
  {
    title: 'Desarrollador Junior',
    company: 'StartUp Inc.',
    period: '2019 - 2020',
    description: 'Inicio de carrera desarrollando aplicaciones web con JavaScript y PHP. Aprendizaje de metodologías ágiles y mejores prácticas de desarrollo.'
  }
]

export function About() {
  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Sobre mí
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Desarrollador apasionado con más de 5 años de experiencia creando soluciones digitales innovadoras
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Personal Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <Card>
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold mb-4 text-foreground">
                  Mi Historia
                </h3>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    Soy un desarrollador Full Stack apasionado por crear experiencias digitales que marquen la diferencia. 
                    Mi viaje en el desarrollo comenzó hace más de 5 años, y desde entonces he tenido la oportunidad de 
                    trabajar en proyectos diversos y desafiantes.
                  </p>
                  <p>
                    Me especializo en tecnologías modernas como React, Node.js y TypeScript, siempre manteniéndome 
                    actualizado con las últimas tendencias y mejores prácticas del desarrollo web.
                  </p>
                  <p>
                    Cuando no estoy programando, disfruto aprendiendo nuevas tecnologías, contribuyendo a proyectos 
                    open source y compartiendo conocimientos con la comunidad de desarrolladores.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Skills */}
            <Card>
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold mb-6 text-foreground">
                  Habilidades Técnicas
                </h3>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill, index) => (
                    <motion.div
                      key={skill}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                      viewport={{ once: true }}
                    >
                      <Badge variant="secondary" className="text-sm py-1 px-3">
                        {skill}
                      </Badge>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Experience */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-semibold text-foreground mb-6">
              Experiencia Profesional
            </h3>
            
            <div className="space-y-6">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card>
                    <CardContent className="p-6">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
                        <h4 className="text-lg font-semibold text-foreground">
                          {exp.title}
                        </h4>
                        <Badge variant="outline" className="self-start sm:self-auto mt-1 sm:mt-0">
                          {exp.period}
                        </Badge>
                      </div>
                      <p className="text-primary font-medium mb-3">{exp.company}</p>
                      <p className="text-muted-foreground">{exp.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}