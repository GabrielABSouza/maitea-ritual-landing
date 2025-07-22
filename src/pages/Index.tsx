import Header from "@/components/Header";
import Hero from "@/components/Hero";
import FeaturedKits from "@/components/FeaturedKits";
import ProductCategories from "@/components/ProductCategories";
import About from "@/components/About";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <FeaturedKits />
      <ProductCategories />
      <About />
      <CTA />
      <Footer />
    </div>
  );
};

export default Index;
