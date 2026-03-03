import { motion } from "framer-motion";
import {
  Youtube, Instagram, Twitter, Globe, Music, MessageCircle,
  Newspaper, Coffee, Mail, ArrowRight,
} from "lucide-react";

const links = [
  { icon: Youtube, title: "YouTube", desc: "Latest videos & vlogs", href: "https://youtube.com/@shiva", color: "#ff0000" },
  { icon: Instagram, title: "Instagram", desc: "Daily life & design", href: "https://instagram.com/shiva", color: "#e1306c" },
  { icon: Twitter, title: "X / Twitter", desc: "Thoughts & updates", href: "https://x.com/shiva", color: "#1da1f2" },
  { icon: Globe, title: "Portfolio", desc: "Full work & projects", href: "https://shiva.dev", color: "#67e8f9" },
  { icon: Music, title: "Spotify", desc: "My playlists & music", href: "https://open.spotify.com/user/shiva", color: "#1db954" },
  { icon: MessageCircle, title: "Discord", desc: "Join the circle", href: "https://discord.gg/shiva", color: "#5865f2" },
  { icon: Newspaper, title: "Newsletter", desc: "Subscribe for updates", href: "https://shiva.substack.com", color: "#ff6719" },
  { icon: Coffee, title: "Buy Me a Coffee", desc: "Support my work", href: "https://buymeacoffee.com/shiva", color: "#ffdd00" },
  { icon: Mail, title: "Contact / Collab", desc: "Let's connect", href: "mailto:hello@shiva.dev", color: "#c084fc" },
];

const LinksSection = () => (
  <section className="relative z-10 px-4 pb-8 -mt-16 max-w-md mx-auto space-y-3">
    {links.map((link, i) => (
      <motion.a
        key={link.title}
        href={link.href}
        target="_blank"
        rel="noopener noreferrer"
        className="glass-card glass-card-hoverable flex items-center gap-4 p-4 cursor-pointer group no-underline"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 + i * 0.08, duration: 0.5, ease: [0.34, 1.56, 0.64, 1] }}
      >
        <div
          className="flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center"
          style={{ background: `${link.color}22`, boxShadow: `0 0 12px ${link.color}33` }}
        >
          <link.icon className="w-5 h-5" style={{ color: link.color }} />
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-sm font-semibold glass-text" style={{ color: "rgba(255,255,255,0.95)" }}>
            {link.title}
          </p>
          <p className="text-xs glass-text" style={{ color: "rgba(255,255,255,0.5)" }}>
            {link.desc}
          </p>
        </div>
        <ArrowRight
          className="w-4 h-4 flex-shrink-0 transition-transform duration-300 group-hover:translate-x-1"
          style={{ color: "rgba(255,255,255,0.4)" }}
        />
      </motion.a>
    ))}
  </section>
);

export default LinksSection;
