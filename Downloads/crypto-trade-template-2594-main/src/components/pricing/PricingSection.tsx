import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CardSpotlight } from "./CardSpotlight";
import { useLanguage } from "@/contexts/LanguageContext";
import { useNavigate } from "react-router-dom";

const PricingTier = ({
  name,
  price,
  description,
  features,
  isPopular,
}: {
  name: string;
  price: string;
  description: string;
  features: string[];
  isPopular?: boolean;
}) => {
  const { t } = useLanguage();
  const navigate = useNavigate();
  
  return (
  <CardSpotlight className={`h-full ${isPopular ? "border-primary" : "border-white/10"} border-2`}>
    <div className="relative h-full p-4 sm:p-6 flex flex-col" role="listitem" aria-label={`${name} pricing plan`}>
      {isPopular && (
        <span className="text-xs font-medium bg-primary/10 text-primary rounded-full px-3 py-1 w-fit mb-3 sm:mb-4">
          {t('pricing.popular')}
        </span>
      )}
      <h3 className="text-lg sm:text-xl font-medium mb-2" role="heading" aria-level={3}>{name}</h3>
      <div className="mb-3 sm:mb-4">
        <span className="text-3xl sm:text-4xl font-bold">{price}</span>
        {price !== "Custom" && <span className="text-gray-400 text-sm sm:text-base">/month</span>}
      </div>
      <p className="text-gray-400 mb-4 sm:mb-6 text-sm sm:text-base">{description}</p>
      <ul className="space-y-2 sm:space-y-3 mb-6 sm:mb-8 flex-grow" role="list" aria-label={`${name} features`}>
        {features.map((feature, index) => (
          <li key={index} className="flex items-start gap-2" role="listitem">
            <Check className="w-4 h-4 sm:w-5 sm:h-5 text-primary mt-0.5 flex-shrink-0" aria-hidden="true" />
            <span className="text-xs sm:text-sm text-gray-300 leading-relaxed">{feature}</span>
          </li>
        ))}
      </ul>
      <Button 
        className="button-gradient w-full text-sm sm:text-base py-2 sm:py-3" 
        aria-label={`Choose ${name} plan and start trading`}
        onClick={() => navigate('/signup')}
      >
        {t('pricing.startTrading')}
      </Button>
    </div>
  </CardSpotlight>
  );
};

export const PricingSection = () => {
  const { t } = useLanguage();
  
  return (
    <section className="container px-4 py-12 sm:py-16 lg:py-24" role="region" aria-labelledby="pricing-heading">
      <div className="max-w-2xl mx-auto text-center mb-8 sm:mb-10 lg:mb-12">
        <motion.h2
          id="pricing-heading"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal mb-4 sm:mb-6 leading-tight"
          role="heading"
          aria-level={2}
        >
          {t('pricing.title1')}{" "}
          <span className="text-gradient font-medium">{t('pricing.title2')}</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.5 }}
          className="text-base sm:text-lg text-gray-400"
        >
          {t('pricing.description')}
        </motion.p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto" role="list" aria-label="Pricing plans">
        <PricingTier
          name={t('pricing.basic.name')}
          price="$0"
          description={t('pricing.basic.description')}
          features={[
            t('pricing.basic.feature1'),
            t('pricing.basic.feature2'),
            t('pricing.basic.feature3'),
            t('pricing.basic.feature4')
          ]}
        />
        <PricingTier
          name={t('pricing.pro.name')}
          price="$29"
          description={t('pricing.pro.description')}
          features={[
            t('pricing.pro.feature1'),
            t('pricing.pro.feature2'),
            t('pricing.pro.feature3'),
            t('pricing.pro.feature4'),
            t('pricing.pro.feature5')
          ]}
          isPopular
        />
        <PricingTier
          name={t('pricing.institutional.name')}
          price="Custom"
          description={t('pricing.institutional.description')}
          features={[
            t('pricing.institutional.feature1'),
            t('pricing.institutional.feature2'),
            t('pricing.institutional.feature3'),
            t('pricing.institutional.feature4'),
            t('pricing.institutional.feature5'),
            t('pricing.institutional.feature6')
          ]}
        />
      </div>
    </section>
  );
};