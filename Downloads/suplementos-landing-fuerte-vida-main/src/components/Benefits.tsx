import { Card } from "@/components/ui/card"
import { Zap, Target, Trophy, Shield } from "lucide-react"

const Benefits = () => {
  const benefits = [
    {
      icon: Zap,
      title: "Energía Explosiva",
      description: "Aumenta tu energía y resistencia para entrenamientos más intensos y prolongados."
    },
    {
      icon: Target,
      title: "Resultados Rápidos",
      description: "Acelera tu recuperación muscular y obtén resultados visibles en menos tiempo."
    },
    {
      icon: Trophy,
      title: "Rendimiento Superior",
      description: "Maximiza tu fuerza, potencia y resistencia para superar tus límites."
    },
    {
      icon: Shield,
      title: "Calidad Garantizada",
      description: "Productos certificados, libres de sustancias prohibidas y de máxima pureza."
    }
  ]

  return (
    <section id="beneficios" className="py-12 sm:py-16 lg:py-20 bg-gym-dark-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 sm:mb-12 lg:mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gym-text-light mb-4 sm:mb-6">
            ¿Por Qué Elegir
            <span className="bg-gradient-primary bg-clip-text text-transparent"> GymSupps?</span>
          </h2>
          <p className="text-lg sm:text-xl text-gym-text-muted max-w-3xl mx-auto px-4">
            Más que suplementos, ofrecemos una experiencia completa para transformar tu entrenamiento.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 px-4">
          {benefits.map((benefit, index) => (
            <Card 
              key={benefit.title}
              className="bg-gradient-card border-gym-primary/20 hover:border-gym-primary/40 transition-all duration-300 group hover:scale-105 animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="p-4 sm:p-6 lg:p-8 text-center">
                <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6 group-hover:animate-glow-pulse">
                  <benefit.icon className="h-6 w-6 sm:h-7 sm:w-7 lg:h-8 lg:w-8 text-gym-dark" />
                </div>
                
                <h3 className="text-lg sm:text-xl font-bold text-gym-text-light mb-3 sm:mb-4 group-hover:text-gym-primary transition-colors">
                  {benefit.title}
                </h3>
                
                <p className="text-sm sm:text-base text-gym-text-muted leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            </Card>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-12 sm:mt-16 lg:mt-20 grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 px-4">
          {[
            { number: "50K+", label: "Clientes Activos" },
            { number: "98%", label: "Satisfacción" },
            { number: "24/7", label: "Soporte" },
            { number: "5★", label: "Calificación" }
          ].map((stat, index) => (
            <div 
              key={stat.label} 
              className="text-center animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-gym-primary mb-1 sm:mb-2">
                {stat.number}
              </div>
              <div className="text-sm sm:text-base text-gym-text-muted">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Benefits