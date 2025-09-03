import { useState, useEffect } from "react";
import { Command, Menu } from "lucide-react";
import { Button } from "./ui/button";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { LanguageSelector } from "./ui/language-selector";
import { useLanguage } from "@/contexts/LanguageContext";
import { useNavigate } from "react-router-dom";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { t } = useLanguage();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    if (sectionId === 'testimonials') {
      const testimonialSection = document.querySelector('.animate-marquee');
      if (testimonialSection) {
        const yOffset = -100; // Offset to account for the fixed header
        const y = testimonialSection.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: 'smooth' });
      }
    } else if (sectionId === 'cta') {
      const ctaSection = document.querySelector('.button-gradient');
      if (ctaSection) {
        const yOffset = -100;
        const y = ctaSection.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: 'smooth' });
      }
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const navItems = [
    { name: t('nav.features'), href: "#features", onClick: () => scrollToSection('features') },
    { name: t('nav.prices'), href: "#pricing", onClick: () => scrollToSection('pricing') },
    { name: t('nav.testimonials'), href: "#testimonials", onClick: () => scrollToSection('testimonials') },
  ];

  return (
    <header
      className={`fixed top-2 sm:top-3.5 left-1/2 -translate-x-1/2 z-50 transition-all duration-300 rounded-full ${
        isScrolled 
          ? "h-12 sm:h-14 bg-[#1B1B1B]/40 backdrop-blur-xl border border-white/10 scale-95 w-[95%] sm:w-[90%] max-w-2xl" 
          : "h-12 sm:h-14 bg-[#1B1B1B] w-[98%] sm:w-[95%] max-w-3xl"
      }`}
    >
      <div className="mx-auto h-full px-3 sm:px-6">
        <nav className="flex items-center justify-between h-full">
          <div className="flex items-center gap-2">
            <Command className="w-4 h-4 sm:w-5 sm:h-5 text-primary" aria-hidden="true" />
            <span className="font-bold text-sm sm:text-base" role="img" aria-label="CryptoTrade logo">CryptoTrade</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-4 xl:gap-6">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  if (item.onClick) {
                    item.onClick();
                  }
                }}
                className="text-xs xl:text-sm text-muted-foreground hover:text-foreground transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-black rounded-md px-2 py-1"
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    if (item.onClick) {
                      item.onClick();
                    }
                  }
                }}
              >
                {item.name}
              </a>
            ))}
            <LanguageSelector />
            <Button 
              onClick={() => navigate('/signup')}
              size="sm"
              className="button-gradient text-xs xl:text-sm px-3 xl:px-4"
              aria-label="Start trading - navigate to sign up section"
            >
              {t('nav.startTrading')}
            </Button>
          </div>

          {/* Mobile Navigation */}
          <div className="lg:hidden">
            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon" className="glass h-8 w-8 sm:h-10 sm:w-10" aria-label="Open mobile navigation menu">
                  <Menu className="h-4 w-4 sm:h-5 sm:w-5" aria-hidden="true" />
                </Button>
              </SheetTrigger>
              <SheetContent className="bg-[#1B1B1B] w-[280px] sm:w-[350px]">
                <div className="flex flex-col gap-4 mt-8">
                  {navItems.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="text-base sm:text-lg text-muted-foreground hover:text-foreground transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-[#1B1B1B] rounded-md px-3 py-2"
                      onClick={(e) => {
                        e.preventDefault();
                        setIsMobileMenuOpen(false);
                        if (item.onClick) {
                          item.onClick();
                        }
                      }}
                      role="button"
                      tabIndex={0}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter' || e.key === ' ') {
                          e.preventDefault();
                          setIsMobileMenuOpen(false);
                          if (item.onClick) {
                            item.onClick();
                          }
                        }
                      }}
                    >
                      {item.name}
                    </a>
                  ))}
                  <div className="flex items-center justify-between mt-6 mb-4 px-3">
                    <span className="text-sm text-muted-foreground">Language</span>
                    <LanguageSelector />
                  </div>
                  <Button 
                    onClick={() => {
                      setIsMobileMenuOpen(false);
                      navigate('/signup');
                    }}
                    className="button-gradient mt-2 mx-3"
                    aria-label="Start trading - navigate to sign up section"
                  >
                    {t('nav.startTrading')}
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navigation;