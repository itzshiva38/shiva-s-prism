import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import LoadingScreen from "@/components/LoadingScreen";
import AnimatedBackground from "@/components/AnimatedBackground";
import HeroSection from "@/components/HeroSection";
import LinksSection from "@/components/LinksSection";
import FeaturedSection from "@/components/FeaturedSection";
import Footer from "@/components/Footer";
import LiquidGlassPlayer from "@/components/LiquidGlassPlayer";

const Index = () => {
  const [loaded, setLoaded] = useState(false);

  return (
    <>
      <AnimatePresence>{!loaded && <LoadingScreen onComplete={() => setLoaded(true)} />}</AnimatePresence>

      {loaded && (
        <motion.div
          className="relative min-h-screen overflow-x-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <AnimatedBackground />
          <HeroSection />
          <LinksSection />
          <FeaturedSection />
          {/* Extra bottom padding for the fixed music player */}
          <div className="h-28" />
          <Footer />
          <div className="h-24" />
          <LiquidGlassPlayer />
        </motion.div>
      )}
    </>
  );
};

export default Index;
