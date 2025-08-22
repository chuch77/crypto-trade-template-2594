import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Github, ExternalLink } from 'lucide-react'

const projects = [
  {
    title: 'E-Commerce Platform',
    description: 'Plataforma de comercio electrónico completa con carrito de compras, pagos integrados y panel de administración.',
    technologies: ['React', 'Node.js', 'MongoDB', 'Stripe', 'TailwindCSS'],
    github: 'https://github.com',
    demo: 'https://demo.com',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500&q=80'
  },
  {
    title: 'Task Management App',
    description: 'Aplicación de gestión de tareas con funcionalidades de colaboración en tiempo real y seguimiento de proyectos.',
    technologies: ['Next.js', 'TypeScript', 'PostgreSQL', 'Socket.io'],
    github: 'https://github.com',
    demo: 'https://demo.com',
    image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=500&q=80'
  },
  {
    title: 'Weather Dashboard',
    description: 'Dashboard meteorológico con pronósticos detallados, mapas interactivos y alertas personalizadas.',
    technologies: ['React', 'Redux', 'D3.js', 'Weather API'],
    github: 'https://github.com',
    demo: 'https://demo.com',
    image: 'https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=500&q=80'
  },
  {
    title: 'Social Media Analytics',
    description: 'Herramienta de análisis de redes sociales con visualización de datos y generación de reportes automáticos.',
    technologies: ['Vue.js', 'Python', 'FastAPI', 'Chart.js'],
    github: 'https://github.com',
    demo: 'https://demo.com',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&q=80'
  },
  {
    title: 'Learning Management System',
    description: 'Sistema de gestión de aprendizaje con cursos interactivos, evaluaciones y seguimiento de progreso.',
    technologies: ['React', 'Express.js', 'MySQL', 'AWS S3'],
    github: 'https://github.com',
    demo: 'https://demo.com',
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=500&q=80'
  },
  {
    title: 'Real Estate Platform',
    description: 'Plataforma inmobiliaria con búsqueda avanzada, tours virtuales y sistema de gestión de propiedades.',
    technologies: ['Next.js', 'GraphQL', 'Prisma', 'Mapbox'],
    github: 'https://github.com',
    demo: 'https://demo.com',
    image: 'https://images.unsplash.com/photo-1560520653-9e0e4c89eb11?w=500&q=80'
  }
]

export function Projects() {
  return (
    <section id="projects" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Proyectos Destacados
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Una selección de mis trabajos más recientes y significativos
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <Card className="h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <div className="relative overflow-hidden rounded-t-lg">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                    <Button size="sm" variant="secondary" asChild>
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4 mr-1" />
                        Código
                      </a>
                    </Button>
                    <Button size="sm" asChild>
                      <a href={project.demo} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4 mr-1" />
                        Demo
                      </a>
                    </Button>
                  </div>
                </div>

                <CardHeader>
                  <CardTitle className="text-xl">{project.title}</CardTitle>
                </CardHeader>

                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
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