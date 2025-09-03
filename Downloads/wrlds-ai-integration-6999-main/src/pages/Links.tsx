import { ArrowLeft, ExternalLink, Github } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";
import { useEffect } from 'react';
import PageLayout from '@/components/PageLayout';
import { Card, CardContent } from "@/components/ui/card";
import { useLanguage } from '@/contexts/LanguageContext';

const Links = () => {
  const { t } = useLanguage();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const projects = [
    {
      id: 1,
      titleKey: "projects.ecommerce.title",
      descriptionKey: "projects.ecommerce.description",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      liveUrl: "https://moda-flow.vercel.app",
      githubUrl: "https://github.com/chuch77/moda-flow",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop",
      category: "E-commerce"
    },
    {
      id: 2,
      titleKey: "projects.crypto.title",
      descriptionKey: "projects.crypto.description",
      technologies: ["React", "TypeScript", "Tailwind CSS", "Vercel"],
      liveUrl: "https://crypto-trade-template.vercel.app",
      githubUrl: "https://github.com/chuch77/crypto-trade",
      image: "https://images.unsplash.com/photo-1640340434855-6084b1f4901c?w=800&h=600&fit=crop",
      category: "Fintech"
    },
    {
      id: 3,
      titleKey: "projects.dashboard.title",
      descriptionKey: "projects.dashboard.description",
      technologies: ["React", "Chart.js", "Express", "MySQL"],
      liveUrl: "https://market-mosaic-five.vercel.app",
      githubUrl: "https://github.com/chuch77/market-mosaic",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
      category: "Dashboard"
    },
    {
      id: 4,
      titleKey: "projects.supplements.title",
      descriptionKey: "projects.supplements.description",
      technologies: ["React", "Express", "PayPal", "PostgreSQL"],
      liveUrl: "https://ascend-dash-34-jqf9.vercel.app",
      githubUrl: "https://github.com/chuch77/ascend-dash-34",
      image: "https://images.unsplash.com/photo-1594882645126-14020914d58d?w=800&h=600&fit=crop",
      category: "E-commerce"
    },
    {
      id: 5,
      titleKey: "projects.supplementsDash.title",
      descriptionKey: "projects.supplementsDash.description",
      technologies: ["React", "TypeScript", "Tailwind CSS", "Chart.js"],
      liveUrl: "https://ascend-dash-77.vercel.app",
      githubUrl: "https://github.com/chuch77/ascend-dash",
      image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800&h=600&fit=crop",
      category: "Dashboard"
    }
  ];

  return (
    <PageLayout>
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="max-w-6xl mx-auto">
            <Link to="/" className="inline-flex items-center text-gray-500 hover:text-gray-700 mb-6 transition-colors">
              <ArrowLeft className="mr-2 h-4 w-4" />
              {t('links.back')}
            </Link>
            
            <motion.h1 
              initial={{ opacity: 0, y: -10 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.5 }} 
              className="text-4xl font-bold mb-6"
            >
              {t('links.title')}
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              transition={{ duration: 0.5, delay: 0.2 }} 
              className="text-xl text-gray-600 mb-12"
            >
              {t('links.subtitle')}
            </motion.p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card className="overflow-hidden h-full hover:shadow-lg transition-shadow">
                    <div 
                      className="h-48 bg-cover bg-center relative"
                      style={{ backgroundImage: `url(${project.image})` }}
                    >
                      <div className="absolute top-4 left-4">
                        <span className="px-3 py-1 bg-black/70 text-white text-sm rounded-full">
                          {project.category}
                        </span>
                      </div>
                    </div>
                    
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold mb-2">{t(project.titleKey)}</h3>
                      <p className="text-gray-600 mb-4 text-sm">{t(project.descriptionKey)}</p>
                      
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.technologies.map((tech, idx) => (
                          <span 
                            key={idx} 
                            className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                      
                      <div className="flex gap-3">
                        <a 
                          href={project.liveUrl} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="flex items-center px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors text-sm"
                        >
                          <ExternalLink className="w-4 h-4 mr-2" />
                          {t('links.viewLive')}
                        </a>
                        <a 
                          href="https://github.com/chuch77" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="flex items-center px-4 py-2 bg-gray-800 text-white rounded hover:bg-gray-900 transition-colors text-sm"
                        >
                          <Github className="w-4 h-4 mr-2" />
                          GitHub
                        </a>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Links;