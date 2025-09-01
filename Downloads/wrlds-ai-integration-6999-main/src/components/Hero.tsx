import { ArrowRight, Code, Cpu, Layers, MessageSquare } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useLanguage } from '@/contexts/LanguageContext';
import { useState, useEffect } from 'react';

const Hero = () => {
  const isMobile = useIsMobile();
  const { t } = useLanguage();
  const [currentImage, setCurrentImage] = useState(0);

  const heroImages = [
    'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1400&h=900&fit=crop',
    'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=1400&h=900&fit=crop',
    'https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?w=1400&h=900&fit=crop',
    'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1400&h=900&fit=crop',
    'https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=1400&h=900&fit=crop',
    'https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=1400&h=900&fit=crop',
    'https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?w=1400&h=900&fit=crop',
    'https://images.unsplash.com/photo-1542831371-29b0f74f9713?w=1400&h=900&fit=crop',
    'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1400&h=900&fit=crop',
    'https://images.unsplash.com/photo-1607706189992-eae578626c86?w=1400&h=900&fit=crop'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [heroImages.length]);
  const containerVariants = {
    hidden: {
      opacity: 0
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
        duration: 0.8
      }
    }
  };
  const itemVariants = {
    hidden: {
      y: 20,
      opacity: 0
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6
      }
    }
  };
  
  const scrollToContact = (e: React.MouseEvent) => {
    e.preventDefault();
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };
  
  return <motion.div className="relative w-full" initial="hidden" animate="visible" variants={containerVariants}>
      <div className="banner-container bg-black relative overflow-hidden h-[60vh] sm:h-[70vh] md:h-[500px] lg:h-[550px] xl:h-[600px] w-full">
        <div className="absolute inset-0 bg-black w-full">
          {heroImages.map((image, index) => (
            <img 
              key={index}
              src={image} 
              alt={`Desarrollador Full Stack ${index + 1}`} 
              className={`absolute inset-0 w-full h-full object-cover transition-all duration-1500 ease-in-out ${
                index === currentImage ? 'opacity-70 scale-100' : 'opacity-0 scale-105'
              } ${isMobile ? 'object-right' : 'object-center'} grayscale`} 
            />
          ))}
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-white"></div>
        </div>
        
        <div className="banner-overlay bg-transparent pt-16 sm:pt-20 md:pt-24 lg:pt-32 w-full">
          <div className="w-full mx-auto px-3 sm:px-4 md:px-6 lg:px-8 flex flex-col items-center justify-center h-full">
            <motion.div className="w-full max-w-4xl text-center" variants={itemVariants}>
              <motion.h1 className="banner-title text-white" variants={itemVariants}>{t('hero.title')}</motion.h1>
              <motion.p className="banner-subtitle text-gray-300 mt-3 sm:mt-4 md:mt-6 text-sm sm:text-base md:text-lg" variants={itemVariants}>
                {t('hero.subtitle')}
              </motion.p>
              <motion.div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-4 sm:mt-6 md:mt-8 justify-center items-center w-full max-w-md sm:max-w-none" variants={itemVariants}>
                {/* Styled as a button but using an anchor tag for project navigation */}
                <button 
                  className="w-full sm:w-auto min-h-[44px] px-6 sm:px-8 py-3 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 transition-all shadow-lg hover:shadow-xl hover:shadow-gray-300/20 flex items-center justify-center group text-sm sm:text-base font-medium"
                  onClick={e => {
                    e.preventDefault();
                    const projectsSection = document.getElementById('projects');
                    if (projectsSection) {
                      projectsSection.scrollIntoView({
                        behavior: 'smooth'
                      });
                    }
                  }}
                >
                  {t('hero.viewProjects')}
                  <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                
                {/* Using the Button component from shadcn but with custom styling to match the explore button */}
                <button 
                  className="w-full sm:w-auto min-h-[44px] px-6 sm:px-8 py-3 bg-gray-700 text-white rounded-md hover:bg-gray-800 transition-all shadow-lg hover:shadow-xl hover:shadow-gray-300/20 flex items-center justify-center group text-sm sm:text-base font-medium"
                  onClick={scrollToContact}
                >
                  {t('hero.contact')}
                  <MessageSquare className="ml-2 w-4 h-4 sm:w-5 sm:h-5 group-hover:scale-110 transition-transform" />
                </button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
      
      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8 mx-auto">
        <motion.div className="mt-6 md:mt-8 grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4" variants={containerVariants} initial="hidden" animate="visible" transition={{
        delay: 0.6
      }}>
          <motion.div className="bg-white p-4 md:p-5 rounded-xl shadow-sm border border-gray-100 transform transition-all duration-300 hover:-translate-y-1 hover:shadow-md" variants={itemVariants}>
            <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-gray-100 flex items-center justify-center rounded-lg text-gray-500 mb-2 md:mb-3">
              <Cpu className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
            </div>
            <h3 className="text-sm sm:text-base md:text-lg font-semibold mb-1 md:mb-2 text-gray-800">Frontend Development</h3>
            <p className="text-gray-600 text-xs sm:text-sm">{t('hero.frontend')}</p>
          </motion.div>
          
          <motion.div className="bg-white p-4 md:p-5 rounded-xl shadow-sm border border-gray-100 transform transition-all duration-300 hover:-translate-y-1 hover:shadow-md" variants={itemVariants}>
            <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-gray-100 flex items-center justify-center rounded-lg text-gray-500 mb-2 md:mb-3">
              <Code className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
            </div>
            <h3 className="text-sm sm:text-base md:text-lg font-semibold mb-1 md:mb-2 text-gray-800">Backend Development</h3>
            <p className="text-gray-600 text-xs sm:text-sm">{t('hero.backend')}</p>
          </motion.div>
          
          <motion.div className="bg-white p-4 md:p-5 rounded-xl shadow-sm border border-gray-100 transform transition-all duration-300 hover:-translate-y-1 hover:shadow-md" variants={itemVariants}>
            <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-gray-100 flex items-center justify-center rounded-lg text-gray-500 mb-2 md:mb-3">
              <Layers className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
            </div>
            <h3 className="text-sm sm:text-base md:text-lg font-semibold mb-1 md:mb-2 text-gray-800">E-commerce Specialist</h3>
            <p className="text-gray-600 text-xs sm:text-sm">{t('hero.ecommerce')}</p>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>;
};

export default Hero;
