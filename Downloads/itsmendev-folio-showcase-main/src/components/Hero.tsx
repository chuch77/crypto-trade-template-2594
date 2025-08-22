import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'
import heroImage from '@/assets/hero-bg.jpg'

export function Hero() {
  const scrollToProjects = () => {
    const element = document.querySelector('#projects')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <div className="gradient-hero absolute inset-0" />
        <img
          src={heroImage}
          alt="Hero background"
          className="w-full h-full object-cover opacity-10 dark:opacity-5"
        />
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <div className="space-y-4">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-5xl md:text-7xl font-bold text-foreground"
            >
              Jesús Soto
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
            >
              Desarrollador Full Stack especializado en tecnologías modernas
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Button 
              size="lg" 
              onClick={scrollToProjects}
              className="text-lg px-8 py-6 gradient-primary text-white hover:scale-105 transition-transform"
            >
              Ver Proyectos
              <ArrowDown className="ml-2 h-5 w-5" />
            </Button>
            
            <div className="flex space-x-4">
              <Button variant="outline" size="icon" asChild className="hover:scale-110 transition-transform">
                <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                  <Github className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="outline" size="icon" asChild className="hover:scale-110 transition-transform">
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="outline" size="icon" asChild className="hover:scale-110 transition-transform">
                <a href="mailto:jesus@itsmendev.com">
                  <Mail className="h-5 w-5" />
                </a>
              </Button>
            </div>
          </motion.div>
        </motion.div>

        {/* Floating scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <div className="flex flex-col items-center space-y-2 float-animation">
            <span className="text-sm text-muted-foreground">Scroll para explorar</span>
            <ArrowDown className="h-4 w-4 text-muted-foreground" />
          </div>
        </motion.div>
      </div>
    </section>
  )
}