import { motion } from "framer-motion";
import { MapPin, BadgeCheck } from "lucide-react";
import GlassCard from "./GlassCard";

const HeroSection = () => (
  <section className="min-h-screen flex items-center justify-center px-4 py-12 relative z-10">
    <GlassCard
      className="w-full max-w-md p-8 text-center"
      initial={{ opacity: 0, y: 30, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.8, ease: [0.34, 1.56, 0.64, 1] }}
    >
      {/* Avatar */}
      <motion.div
        className="mx-auto mb-6 relative w-28 h-28"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
      >
        <div className="absolute inset-0 rounded-full animate-spin-slow" style={{
          background: "conic-gradient(from 0deg, #c084fc, #f472b6, #67e8f9, #c084fc)",
          padding: 3,
        }}>
          <div className="w-full h-full rounded-full" style={{ background: "#0a0a1a" }} />
        </div>
        <img
          src="https://api.dicebear.com/9.x/avataaars/svg?seed=Shiva&backgroundColor=c084fc"
          alt="Shiva's avatar"
          className="absolute inset-[4px] rounded-full object-cover"
          style={{ boxShadow: "0 0 20px rgba(192, 132, 252, 0.4)" }}
        />
      </motion.div>

      {/* Name */}
      <motion.div
        className="flex items-center justify-center gap-2 mb-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <h1 className="text-3xl font-bold glass-text" style={{ fontFamily: "'Inter', sans-serif" }}>
          Shiva
        </h1>
        <BadgeCheck className="w-6 h-6 text-cyan-400" fill="rgba(34,211,238,0.3)" />
      </motion.div>

      {/* Tagline */}
      <motion.p
        className="text-sm font-medium mb-4 glass-text"
        style={{ color: "rgba(255,255,255,0.7)" }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
      >
        Creative Technologist • Designer • Content Creator
      </motion.p>

      {/* Bio */}
      <motion.p
        className="text-sm leading-relaxed mb-4 glass-text"
        style={{ color: "rgba(255,255,255,0.6)" }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7 }}
      >
        Building beautiful digital experiences that inspire. Turning ideas into pixels and code — one creation at a time. Welcome to my corner of the internet.
      </motion.p>

      {/* Location */}
      <motion.div
        className="flex items-center justify-center gap-1.5 text-xs glass-text"
        style={{ color: "rgba(255,255,255,0.5)" }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
      >
        <MapPin className="w-3.5 h-3.5" />
        <span>Kota, Rajasthan, India 🇮🇳</span>
      </motion.div>
    </GlassCard>
  </section>
);

export default HeroSection;
