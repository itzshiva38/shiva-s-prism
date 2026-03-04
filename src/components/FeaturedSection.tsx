import { motion } from "framer-motion";
import { Play, Sparkles, FileText } from "lucide-react";
import GlassCard from "./GlassCard";

const featured = [
{
    icon: Play,
    label: "Latest Video",
    title: "Building a Design System",
    gradient: "linear-gradient(135deg, #c084fc, #818cf8)",
  },
  {
    icon: Sparkles,
    label: "Featured Project",
    title: "Glass UI Kit v2.0",
    gradient: "linear-gradient(135deg, #f472b6, #fb923c)",
  },
  
  {
    icon: FileText,
    label: "Recent Post",
    title: "Future of Web Design",
    gradient: "linear-gradient(135deg, #67e8f9, #818cf8)",
  },
];

const FeaturedSection = () => (
  <section className="relative z-10 px-4 py-4 max-w-md mx-auto">
    <motion.p
      className="text-xs font-medium uppercase tracking-widest mb-3 glass-text"
      style={{ color: "rgba(255,255,255,0.4)" }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.5 }}
    >
      ✨ Featured
    </motion.p>
    <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
      {featured.map((item, i) => (
        <GlassCard
          key={item.label}
          hoverable
          className="flex-shrink-0 w-40 p-4 cursor-pointer"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1.6 + i * 0.1 }}
        >
          <div
            className="w-9 h-9 rounded-lg flex items-center justify-center mb-3"
            style={{ background: item.gradient, boxShadow: "0 4px 12px rgba(0,0,0,0.2)" }}
          >
            <item.icon className="w-4 h-4 text-white" />
          </div>
          <p className="text-[10px] font-medium uppercase tracking-wider mb-1 glass-text" style={{ color: "rgba(255,255,255,0.4)" }}>
            {item.label}
          </p>
          <p className="text-xs font-semibold glass-text" style={{ color: "rgba(255,255,255,0.9)" }}>
            {item.title}
          </p>
        </GlassCard>
      ))}
    </div>
  </section>
);

export default FeaturedSection;
