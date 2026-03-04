import { motion } from "framer-motion";
import { MapPin, BadgeCheck, Sparkles, Cloud, Star, Zap, Monitor } from "lucide-react";
import GlassCard from "./GlassCard";

const FloatingElement = ({
  children,
  className,
  delay = 0,
  duration = 6,
  y = 15,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  y?: number;
}) => (
  <motion.div
    className={`absolute pointer-events-none ${className}`}
    animate={{ y: [-y, y, -y] }}
    transition={{ duration, delay, repeat: Infinity, ease: "easeInOut" }}
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
  >
    {children}
  </motion.div>
);

const HeroSection = () => (
  <section className="min-h-screen flex items-center justify-center px-4 py-12 relative z-10">
    {/* Dreamy sky-blue glow at top */}
    <div
      className="absolute top-0 left-0 right-0 h-[60vh] pointer-events-none"
      style={{
        background: "radial-gradient(ellipse 80% 50% at 50% 0%, rgba(125,211,252,0.12), transparent)",
      }}
    />

    {/* Floating glassmorphic clouds — wildhorizon.co inspired */}
    <FloatingElement className="top-[8%] left-[4%] sm:left-[10%]" delay={0} duration={8} y={12}>
      <div
        className="px-6 py-3 rounded-[20px]"
        style={{
          background: "radial-gradient(circle at 30% 20%, rgba(255,255,255,0.1), transparent 60%), rgba(255,255,255,0.05)",
          backdropFilter: "blur(12px)",
          border: "1px solid rgba(255,255,255,0.1)",
          boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
        }}
      >
        <Cloud className="w-8 h-8" style={{ color: "rgba(125,211,252,0.4)" }} />
      </div>
    </FloatingElement>
    <FloatingElement className="top-[10%] right-[4%] sm:right-[10%]" delay={1.5} duration={7} y={10}>
      <div
        className="px-5 py-3 rounded-[20px]"
        style={{
          background: "radial-gradient(circle at 30% 20%, rgba(255,255,255,0.1), transparent 60%), rgba(255,255,255,0.05)",
          backdropFilter: "blur(12px)",
          border: "1px solid rgba(255,255,255,0.1)",
          boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
        }}
      >
        <Cloud className="w-10 h-10" style={{ color: "rgba(192,132,252,0.3)" }} />
      </div>
    </FloatingElement>

    {/* Whimsical floating creative elements */}
    <FloatingElement className="top-[20%] left-[15%]" delay={2} duration={9} y={18}>
      <Sparkles className="w-5 h-5" style={{ color: "rgba(251,191,36,0.3)" }} />
    </FloatingElement>
    <FloatingElement className="top-[25%] right-[15%]" delay={0.5} duration={6} y={10}>
      <Star className="w-4 h-4" style={{ color: "rgba(244,114,182,0.3)" }} />
    </FloatingElement>
    <FloatingElement className="bottom-[30%] left-[8%]" delay={3} duration={10} y={20}>
      <Zap className="w-5 h-5" style={{ color: "rgba(103,232,249,0.25)" }} />
    </FloatingElement>
    <FloatingElement className="bottom-[35%] right-[6%]" delay={1} duration={7}>
      <Monitor className="w-6 h-6" style={{ color: "rgba(129,140,248,0.2)" }} />
    </FloatingElement>

    {/* Floating glowing dots */}
    <FloatingElement className="top-[35%] left-[20%]" delay={2.5} duration={8} y={12}>
      <div
        className="w-3 h-3 rounded-full"
        style={{ background: "rgba(192,132,252,0.3)", boxShadow: "0 0 14px rgba(192,132,252,0.4)" }}
      />
    </FloatingElement>
    <FloatingElement className="top-[15%] right-[25%]" delay={4} duration={7} y={16}>
      <div
        className="w-2 h-2 rounded-full"
        style={{ background: "rgba(251,191,36,0.35)", boxShadow: "0 0 10px rgba(251,191,36,0.4)" }}
      />
    </FloatingElement>
    <FloatingElement className="bottom-[25%] left-[25%]" delay={1.8} duration={9} y={14}>
      <div
        className="w-2.5 h-2.5 rounded-full"
        style={{ background: "rgba(103,232,249,0.3)", boxShadow: "0 0 12px rgba(103,232,249,0.4)" }}
      />
    </FloatingElement>

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
        <div
          className="absolute inset-0 rounded-full animate-spin-slow"
          style={{
            background: "conic-gradient(from 0deg, #c084fc, #f472b6, #67e8f9, #fbbf24, #c084fc)",
            padding: 3,
          }}
        >
          <div className="w-full h-full rounded-full" style={{ background: "#0a0a1a" }} />
        </div>
        {/* Glow behind avatar */}
        <div
          className="absolute inset-0 rounded-full"
          style={{
            boxShadow: "0 0 30px rgba(192,132,252,0.3), 0 0 60px rgba(192,132,252,0.15)",
          }}
        />
        {/* Sparkle decorations on avatar */}
        <motion.span
          className="absolute -top-2 -right-2 text-sm"
          animate={{ scale: [1, 1.3, 1], opacity: [0.7, 1, 0.7] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          ✨
        </motion.span>
        <motion.span
          className="absolute -bottom-1 -left-2 text-xs"
          animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2.5, delay: 0.5, repeat: Infinity }}
        >
          💫
        </motion.span>
        <img
          src="/images/avatar.jpg"
          alt="Shiva's avatar"
          className="absolute inset-[4px] rounded-full object-cover"
          style={{
            boxShadow: "0 0 20px rgba(192, 132, 252, 0.4)",
          }}
        />
      </motion.div>

      {/* Name */}
      <motion.div
        className="flex items-center justify-center gap-2 mb-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <h1 className="text-3xl font-bold glass-text" style={{ color: "rgba(255,255,255,0.95)" }}>
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
        Creative Technologist • Designer • Content Creator ✨
      </motion.p>

      {/* Bio */}
      <motion.p
        className="text-sm leading-relaxed mb-4 glass-text"
        style={{ color: "rgba(255,255,255,0.6)" }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7 }}
      >
        Building beautiful digital experiences that inspire. Turning ideas into
        pixels and code — one creation at a time. Welcome to my corner of the
        internet. 🚀
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
