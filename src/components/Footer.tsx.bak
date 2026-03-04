import { motion } from "framer-motion";
import { Instagram, Twitter, Linkedin, Github, Send } from "lucide-react";
import GlassCard from "./GlassCard";

const socials = [
  { icon: Instagram, href: "https://instagram.com/itz_shiva_opp" },
  { icon: Twitter, href: "https://x.com/itz_shiva_opp" },
  { icon: Telegram, href: "https://t.me/itzshivaop" },
  { icon: Github, href: "https://linkedin.com/in/ShivaOPP" },
];

const Footer = () => (
  <footer className="relative z-10 px-4 py-8 max-w-md mx-auto">
    <GlassCard
      className="p-6 text-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.8 }}
    >
      <div className="flex items-center justify-center gap-4 mb-4">
        {socials.map((s) => (
          <motion.a
            key={s.href}
            href={s.href}
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300"
            style={{
              background: "rgba(255,255,255,0.06)",
              border: "1px solid rgba(255,255,255,0.1)",
              color: "rgba(255,255,255,0.5)",
            }}
            whileHover={{
              scale: 1.1,
              backgroundColor: "rgba(255,255,255,0.12)",
              color: "rgba(255,255,255,0.9)",
            }}
          >
            <s.icon className="w-4 h-4" />
          </motion.a>
        ))}
      </div>
      <p className="text-xs glass-text" style={{ color: "rgba(255,255,255,0.35)" }}>
        © 2026 Shiva • Made with ❤️ in India
      </p>
    </GlassCard>
  </footer>
);

export default Footer;
