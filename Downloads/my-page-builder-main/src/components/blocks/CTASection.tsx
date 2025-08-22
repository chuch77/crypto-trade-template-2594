import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface CTASectionProps {
  variant?: "simple" | "split" | "banner";
  title?: string;
  subtitle?: string;
  primaryButtonText?: string;
  secondaryButtonText?: string;
  primaryButtonUrl?: string;
  secondaryButtonUrl?: string;
  backgroundImage?: string;
  backgroundColor?: string;
}

const CTASection = ({ 
  variant = "simple", 
  title = "¿Listo para comenzar?", 
  subtitle = "Únete a miles de usuarios que ya están utilizando nuestra plataforma para crear sitios web increíbles.",
  primaryButtonText = "Comenzar ahora",
  secondaryButtonText = "Saber más",
  primaryButtonUrl = "#",
  secondaryButtonUrl = "#",
  backgroundImage,
  backgroundColor = "bg-primary"
}: CTASectionProps) => {
  
  return (
    <>
      {variant === "simple" && (
        <section className={`py-16 ${backgroundColor} text-white`}>
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">{title}</h2>
            <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
              {subtitle}
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button 
                size="lg" 
                variant="secondary"
                asChild
              >
                <a href={primaryButtonUrl}>
                  {primaryButtonText}
                </a>
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white text-white hover:bg-white/10"
                asChild
              >
                <a href={secondaryButtonUrl}>
                  {secondaryButtonText}
                </a>
              </Button>
            </div>
          </div>
        </section>
      )}
      
      {variant === "split" && (
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8 p-8 md:p-12 rounded-2xl bg-gray-50">
              <div className="md:w-2/3">
                <h2 className="text-3xl font-bold mb-4">{title}</h2>
                <p className="text-gray-600 text-lg">
                  {subtitle}
                </p>
              </div>
              <div className="md:w-1/3 flex flex-col gap-4">
                <Button 
                  size="lg" 
                  className="w-full"
                  asChild
                >
                  <a href={primaryButtonUrl}>
                    {primaryButtonText} <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  className="w-full"
                  asChild
                >
                  <a href={secondaryButtonUrl}>
                    {secondaryButtonText}
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>
      )}
      
      {variant === "banner" && (
        <section 
          className="py-24 bg-cover bg-center relative"
          style={{ 
            backgroundImage: backgroundImage ? `url(${backgroundImage})` : undefined,
            backgroundColor: !backgroundImage ? backgroundColor : undefined
          }}
        >
          <div className="absolute inset-0 bg-black/50"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto text-center text-white">
              <h2 className="text-4xl font-bold mb-6">{title}</h2>
              <p className="text-xl mb-8">
                {subtitle}
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button 
                  size="lg" 
                  variant="default"
                  className="bg-white text-gray-900 hover:bg-gray-100"
                  asChild
                >
                  <a href={primaryButtonUrl}>
                    {primaryButtonText}
                  </a>
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-white text-white hover:bg-white/10"
                  asChild
                >
                  <a href={secondaryButtonUrl}>
                    {secondaryButtonText}
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default CTASection;