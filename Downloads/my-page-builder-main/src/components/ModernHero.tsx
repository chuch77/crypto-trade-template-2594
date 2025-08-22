import { Button } from "@/components/ui/button";
import { Github, ExternalLink } from "lucide-react";

const ModernHero = () => {
  const techIcons = [
    { name: "React", icon: "⚛️" },
    { name: "Node.js", icon: "🟢" },
    { name: "Express", icon: "🚀" },
    { name: "MongoDB", icon: "🍃" },
    { name: "TailwindCSS", icon: "🎨" },
    { name: "GitHub", icon: "🐙" }
  ];

  return (
    <section className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%239C92AC" fill-opacity="0.05"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
      
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 min-h-[80vh]">
          
          {/* Left Content */}
          <div className="lg:w-1/2 space-y-8">
            <div className="space-y-4">
              <div className="inline-block px-4 py-2 bg-blue-500/20 rounded-full border border-blue-400/30">
                <span className="text-blue-300 text-sm font-medium">👋 Disponible para proyectos</span>
              </div>
              
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                Hola, soy{" "}
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Jesús Soto
                </span>
              </h1>
              
              <h2 className="text-xl lg:text-2xl text-gray-300 font-light">
                Full Stack JavaScript Developer especializado en React, Node.js y MongoDB
              </h2>
              
              <p className="text-lg text-gray-400 max-w-lg leading-relaxed">
                Construyo aplicaciones modernas, rápidas y escalables desde cero, 
                integrando tecnologías de frontend y backend.
              </p>
            </div>

            {/* Tech Stack Icons */}
            <div className="space-y-3">
              <p className="text-sm text-gray-400 font-medium">Tecnologías que domino:</p>
              <div className="flex flex-wrap gap-3">
                {techIcons.map((tech, index) => (
                  <div 
                    key={index}
                    className="flex items-center gap-2 px-3 py-2 bg-white/5 rounded-lg border border-white/10 hover:bg-white/10 transition-colors"
                  >
                    <span className="text-lg">{tech.icon}</span>
                    <span className="text-sm text-gray-300">{tech.name}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white border-0 rounded-xl px-8 py-3"
              >
                <ExternalLink className="mr-2 h-5 w-5" />
                Ver Proyectos
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-gray-600 text-gray-300 hover:bg-white/10 hover:text-white rounded-xl px-8 py-3"
              >
                Contáctame
              </Button>
            </div>
          </div>

          {/* Right Content - Code Illustration */}
          <div className="lg:w-1/2 relative">
            <div className="relative">
              {/* Main Code Window */}
              <div className="bg-gray-900/80 backdrop-blur-sm rounded-2xl border border-gray-700/50 shadow-2xl overflow-hidden">
                {/* Window Header */}
                <div className="flex items-center gap-2 px-4 py-3 bg-gray-800/50 border-b border-gray-700/50">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                  <div className="ml-4 text-sm text-gray-400">app.js</div>
                </div>
                
                {/* Code Content */}
                <div className="p-6 font-mono text-sm">
                  <div className="space-y-2">
                    <div className="text-purple-400">const <span className="text-blue-400">developer</span> = {`{`}</div>
                    <div className="ml-4 text-green-400">name: <span className="text-yellow-300">'Jesús Soto'</span>,</div>
                    <div className="ml-4 text-green-400">role: <span className="text-yellow-300">'Full Stack Developer'</span>,</div>
                    <div className="ml-4 text-green-400">skills: [</div>
                    <div className="ml-8 text-yellow-300">'React', 'Node.js', 'MongoDB'</div>
                    <div className="ml-4 text-green-400">],</div>
                    <div className="ml-4 text-green-400">passion: <span className="text-yellow-300">'Building amazing apps'</span></div>
                    <div className="text-purple-400">{`}`};</div>
                    <div className="mt-4 text-blue-400">console.log(<span className="text-yellow-300">'Ready to code!'</span>);</div>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-blue-500/20 rounded-full blur-xl animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-purple-500/20 rounded-full blur-xl animate-pulse" style={{animationDelay: '1s'}}></div>
              
              {/* GitHub Stats Card */}
              <div className="absolute -bottom-6 -right-6 bg-gray-800/90 backdrop-blur-sm rounded-xl border border-gray-700/50 p-4 shadow-xl">
                <div className="flex items-center gap-3">
                  <Github className="h-6 w-6 text-gray-400" />
                  <div>
                    <div className="text-sm font-medium text-white">12+ Repos</div>
                    <div className="text-xs text-gray-400">Active on GitHub</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default ModernHero;