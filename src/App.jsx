import AnnouncementBar from "./components/AnnouncementBar";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import CategoryCarousel from "./components/CategoryCarousel";
import ProductGrid from "./components/ProductGrid";
import ValueProps from "./components/ValueProps";
import SocialProof from "./components/SocialProof";
import NewsletterCTA from "./components/NewsletterCTA";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="bg-white text-black">
      <AnnouncementBar />
      <Navbar />
      <Hero />
      <ValueProps />
      <CategoryCarousel />
      <ProductGrid />
      <SocialProof />
      <NewsletterCTA />
      <Footer />
    </div>
  );
}

export default App;
