import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { FeatureTab } from "./FeatureTab";
import { FeatureContent } from "./FeatureContent";
import { features } from "@/config/features";
import { useLanguage } from "@/contexts/LanguageContext";

export const FeaturesSection = () => {
  const { t } = useLanguage();
  
  return (
    <section className="container px-4 py-12 sm:py-16 lg:py-24" role="region" aria-labelledby="features-heading">
      {/* Header Section */}
      <div className="max-w-2xl mb-12 sm:mb-16 lg:mb-20">
        <h2 id="features-heading" className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal mb-4 sm:mb-6 tracking-tight text-left leading-tight" role="heading" aria-level={2}>
          {t('features.title1')}
          <br />
          <span className="text-gradient font-medium">{t('features.title2')}</span>
        </h2>
        <p className="text-base sm:text-lg md:text-xl text-gray-400 text-left">
          {t('features.description')}
        </p>
      </div>

      <Tabs defaultValue={features[0].title} className="w-full" aria-label="Trading features and tools">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-12">
          {/* Left side - Tab triggers */}
          <div className="lg:col-span-5 space-y-3">
            <TabsList className="flex flex-col w-full bg-transparent h-auto p-0 space-y-3" role="tablist" aria-label="Feature categories">
              {features.map((feature) => (
                <TabsTrigger
                  key={feature.title}
                  value={feature.title}
                  className="w-full data-[state=active]:shadow-none data-[state=active]:bg-transparent focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-black rounded-lg"
                  role="tab"
                  aria-controls={`panel-${feature.title.replace(/\s+/g, '-').toLowerCase()}`}
                >
                  <FeatureTab
                    title={feature.title}
                    description={feature.description}
                    icon={feature.icon}
                    isActive={false}
                  />
                </TabsTrigger>
              ))}
            </TabsList>
          </div>

          {/* Right side - Tab content with images */}
          <div className="lg:col-span-7">
            {features.map((feature) => (
              <TabsContent
                key={feature.title}
                value={feature.title}
                className="mt-0 h-full"
                role="tabpanel"
                id={`panel-${feature.title.replace(/\s+/g, '-').toLowerCase()}`}
                aria-labelledby={`tab-${feature.title.replace(/\s+/g, '-').toLowerCase()}`}
              >
                <FeatureContent
                  image={feature.image}
                  title={feature.title}
                />
              </TabsContent>
            ))}
          </div>
        </div>
      </Tabs>
    </section>
  );
};