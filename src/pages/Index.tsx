import AnimatedBackground from "@/components/AnimatedBackground";
import HeroSection from "@/components/HeroSection";
import LinksSection from "@/components/LinksSection";
import NowPlaying from "@/components/NowPlaying";
import FeaturedSection from "@/components/FeaturedSection";
import Footer from "@/components/Footer";

const Index = () => (
  <div className="relative min-h-screen overflow-x-hidden">
    <AnimatedBackground />
    <HeroSection />
    <LinksSection />
    <NowPlaying />
    <FeaturedSection />
    <Footer />
  </div>
);

export default Index;
