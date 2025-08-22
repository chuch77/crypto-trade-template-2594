import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Categories from "@/components/Categories";
import FeaturedProducts from "@/components/FeaturedProducts";
import BenefitsSection from "@/components/BenefitsSection";

import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <BenefitsSection />
      <Categories />
      <div className="container mx-auto px-4 py-12">
        <div className="space-y-12">
          <div>
            <FeaturedProducts compact={false} />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Index;
