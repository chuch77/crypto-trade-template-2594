import Header from "@/components/Header"
import Benefits from "@/components/Benefits"
import Footer from "@/components/Footer"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar, User, ArrowRight } from "lucide-react"

const BenefitsPage = () => {
  const blogPosts = [
    {
      id: 1,
      title: "Los 5 Mejores Suplementos para Ganar Masa Muscular",
      excerpt: "Descubre cuáles son los suplementos más efectivos para maximizar tus ganancias musculares y acelerar tu progreso en el gimnasio.",
      image: "/src/assets/protein-hero.jpg",
      author: "Dr. Carlos Mendoza",
      date: "15 Dic 2024",
      readTime: "5 min"
    },
    {
      id: 2,
      title: "Cuándo y Cómo Tomar Creatina: Guía Completa",
      excerpt: "Todo lo que necesitas saber sobre la creatina: timing, dosis, tipos y beneficios para tu rendimiento deportivo.",
      image: "/src/assets/bcaa-product.jpg",
      author: "Lic. María González",
      date: "12 Dic 2024",
      readTime: "7 min"
    },
    {
      id: 3,
      title: "Pre-Entreno vs Post-Entreno: ¿Cuál es Más Importante?",
      excerpt: "Analizamos las diferencias entre la nutrición pre y post entreno para optimizar tus resultados.",
      image: "/src/assets/preworkout-product.jpg",
      author: "Entrenador Roberto Silva",
      date: "10 Dic 2024",
      readTime: "6 min"
    },
    {
      id: 4,
      title: "BCAA vs Proteína Completa: ¿Qué Elegir?",
      excerpt: "Comparamos los aminoácidos ramificados con las proteínas completas para ayudarte a tomar la mejor decisión.",
      image: "/src/assets/supplements-collection.jpg",
      author: "Nutricionista Ana López",
      date: "8 Dic 2024",
      readTime: "4 min"
    },
    {
      id: 5,
      title: "Mitos y Verdades sobre los Quemadores de Grasa",
      excerpt: "Desmitificamos los quemadores de grasa y te explicamos cómo funcionan realmente estos suplementos.",
      image: "/src/assets/gym-athlete.jpg",
      author: "Dr. Luis Ramírez",
      date: "5 Dic 2024",
      readTime: "8 min"
    },
    {
      id: 6,
      title: "Suplementación para Mujeres: Guía Especializada",
      excerpt: "Conoce los suplementos más recomendados para mujeres y cómo adaptar tu nutrición deportiva.",
      image: "/src/assets/protein-hero.jpg",
      author: "Dra. Carmen Vega",
      date: "3 Dic 2024",
      readTime: "6 min"
    }
  ]

  return (
    <div className="min-h-screen bg-gym-dark">
      <Header />
      <div className="pt-20">
        <Benefits />
        
        {/* Blog Section */}
        <section className="py-20 bg-gym-dark-card">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16 animate-fade-in">
              <h2 className="text-4xl lg:text-5xl font-bold text-gym-text-light mb-6">
                Blog de
                <span className="bg-gradient-primary bg-clip-text text-transparent"> Nutrición</span>
              </h2>
              <p className="text-xl text-gym-text-muted max-w-3xl mx-auto">
                Artículos especializados, consejos de expertos y las últimas tendencias en suplementación deportiva.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post, index) => (
                <Card 
                  key={post.id}
                  className="bg-gradient-card border-gym-primary/20 hover:border-gym-primary/40 transition-all duration-300 group hover:scale-105 animate-scale-in overflow-hidden"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="aspect-video overflow-hidden">
                    <img 
                      src={post.image} 
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center space-x-4 text-xs text-gym-text-muted mb-3">
                      <div className="flex items-center space-x-1">
                        <Calendar className="h-3 w-3" />
                        <span>{post.date}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <User className="h-3 w-3" />
                        <span>{post.author}</span>
                      </div>
                      <span>{post.readTime}</span>
                    </div>
                    
                    <h3 className="text-lg font-bold text-gym-text-light mb-3 group-hover:text-gym-primary transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                    
                    <p className="text-gym-text-muted text-sm leading-relaxed mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                    
                    <Button 
                      variant="ghost" 
                      className="text-gym-primary hover:text-gym-primary-dark hover:bg-gym-primary/10 p-0 h-auto group/btn"
                    >
                      Leer más
                      <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </Card>
              ))}
            </div>

            <div className="text-center mt-12">
              <Button 
                size="lg" 
                variant="outline" 
                className="border-gym-primary text-gym-primary hover:bg-gym-primary hover:text-gym-dark group"
              >
                Ver Todos los Artículos
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  )
}

export default BenefitsPage