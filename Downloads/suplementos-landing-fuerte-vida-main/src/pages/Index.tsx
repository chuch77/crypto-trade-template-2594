import Header from "@/components/Header"
import Hero from "@/components/Hero"
import Products from "@/components/Products"
import AllProducts from "@/components/AllProducts"
import Testimonials from "@/components/Testimonials"
import Benefits from "@/components/Benefits"
import Footer from "@/components/Footer"

const Index = () => {
  return (
    <div className="min-h-screen bg-gym-dark">
      <Header />
      <Hero />
      <Products />
      <AllProducts />
      <Testimonials />
      <Benefits />
      <Footer />
    </div>
  );
};

export default Index;
