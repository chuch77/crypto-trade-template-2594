import { motion } from "framer-motion";
import { ArrowRight, Command } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import { FeaturesSection } from "@/components/features/FeaturesSection";
import { PricingSection } from "@/components/pricing/PricingSection";
import LogoCarousel from "@/components/LogoCarousel";
import TestimonialsSection from "@/components/TestimonialsSection";
import Footer from "@/components/Footer";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { OptimizedImage } from "@/components/ui/optimized-image";
import { SkipLink } from "@/components/ui/skip-link";
import { useLanguage } from "@/contexts/LanguageContext";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const { t } = useLanguage();
  const navigate = useNavigate();
  
  return (
    <div className="min-h-screen bg-black text-foreground">
      <SkipLink href="#main-content">Skip to main content</SkipLink>
      <SkipLink href="#features">Skip to features</SkipLink>
      <Navigation />
      
      {/* Hero Section */}
      <motion.section 
        id="main-content"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative container px-4 pt-20 sm:pt-32 lg:pt-40 pb-12 sm:pb-16 lg:pb-20"
        tabIndex={-1}
      >
        {/* Background */}
        <div 
          className="absolute inset-0 -z-10 bg-[#0A0A0A]"
        />
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="inline-block mb-4 sm:mb-6 px-3 sm:px-4 py-1.5 rounded-full glass"
          role="banner"
          aria-label="Platform announcement"
        >
          <span className="text-xs sm:text-sm font-medium">
            <Command className="w-3 h-3 sm:w-4 sm:h-4 inline-block mr-2" aria-hidden="true" />
            {t('hero.badge')}
          </span>
        </motion.div>
        
        <div className="max-w-4xl relative z-10">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-normal mb-4 sm:mb-6 tracking-tight text-left leading-tight" role="heading" aria-level={1}>
            <span className="text-gray-200">
              <TextGenerateEffect words={t('hero.title1')} />
            </span>
            <br />
            <span className="text-white font-medium">
              <TextGenerateEffect words={t('hero.title2')} />
            </span>
          </h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-200 mb-6 sm:mb-8 max-w-2xl text-left leading-relaxed"
          >
            {t('hero.description')}
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 items-stretch sm:items-start"
          >
            <Button 
              size="lg" 
              className="button-gradient w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base" 
              aria-label="Start trading cryptocurrency now"
              onClick={() => navigate('/signup')}
            >
              {t('hero.startNow')}
            </Button>
            <Button 
              size="lg" 
              variant="link" 
              className="text-white w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base justify-center sm:justify-start" 
              aria-label="View cryptocurrency markets"
              onClick={() => navigate('/markets')}
            >
              {t('hero.viewMarkets')} <ArrowRight className="ml-2 w-4 h-4" aria-hidden="true" />
            </Button>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="relative mx-auto max-w-5xl mt-12 sm:mt-16 lg:mt-20"
        >
          <div className="glass rounded-lg sm:rounded-xl overflow-hidden">
            <OptimizedImage
              src="/lovable-uploads/c32c6788-5e4a-4fee-afee-604b03113c7f.png"
              alt="CryptoTrade Dashboard showing trading interface with charts, order book, and portfolio overview"
              className="w-full h-auto"
              fallbackClassName="w-full h-48 sm:h-64 md:h-80 lg:h-96 bg-gradient-to-r from-gray-800 to-gray-700"
              loadingText="Loading dashboard preview..."
              errorText="Dashboard preview unavailable"
              priority
            />
          </div>
        </motion.div>
      </motion.section>

      {/* Logo Carousel */}
      <LogoCarousel />

      {/* Features Section */}
      <section id="features" className="bg-black" aria-label="Trading features and tools">
        <FeaturesSection />
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="bg-black" aria-label="Pricing plans and subscription options">
        <PricingSection />
      </section>

      {/* Testimonials Section */}
      <section className="bg-black" aria-label="Customer testimonials and reviews">
        <TestimonialsSection />
      </section>

      {/* CTA Section */}
      <section className="container px-4 py-12 sm:py-16 lg:py-20 relative bg-black" aria-label="Call to action - Create account">
        <div 
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage: 'url("/lovable-uploads/21f3edfb-62b5-4e35-9d03-7339d803b980.png")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-[#0A0A0A]/80 backdrop-blur-lg border border-white/10 rounded-xl sm:rounded-2xl p-6 sm:p-8 md:p-12 text-center relative z-10"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6">
            {t('cta.title')}
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground mb-6 sm:mb-8 max-w-2xl mx-auto">
            {t('cta.description')}
          </p>
          <Button 
            size="lg" 
            className="button-gradient px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base" 
            aria-label="Create your trading account now"
            onClick={() => navigate('/signup')}
          >
            {t('cta.button')}
            <ArrowRight className="ml-2 w-4 h-4" aria-hidden="true" />
          </Button>
        </motion.div>
      </section>

      {/* Footer */}
      <div className="bg-black">
        <Footer />
      </div>
    </div>
  );
};

export default Index;
