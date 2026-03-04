import { motion } from "framer-motion";
import { useMemo } from "react";

const orbs = [
  { color: "rgba(168, 85, 247, 0.35)", size: 420, x: "12%", y: "8%", duration: 18 },
  { color: "rgba(236, 72, 153, 0.3)", size: 360, x: "78%", y: "15%", duration: 22 },
  { color: "rgba(34, 211, 238, 0.25)", size: 300, x: "45%", y: "55%", duration: 20 },
  { color: "rgba(99, 102, 241, 0.3)", size: 400, x: "88%", y: "70%", duration: 25 },
  { color: "rgba(244, 114, 182, 0.25)", size: 280, x: "8%", y: "75%", duration: 16 },
  { color: "rgba(56, 189, 248, 0.2)", size: 320, x: "55%", y: "35%", duration: 21 },
  // Dreamy sky-blue orb for the hero area
  { color: "rgba(125, 211, 252, 0.2)", size: 500, x: "50%", y: "5%", duration: 24 },
];

interface SparkleData {
  id: number;
  left: string;
  top: string;
  size: number;
  delay: number;
  duration: number;
  color: string;
}

const SPARKLE_COLORS = ["#c084fc", "#f472b6", "#67e8f9", "#a78bfa", "#38bdf8", "#fbbf24"];

const AnimatedBackground = () => {
  const sparkles = useMemo<SparkleData[]>(
    () =>
      Array.from({ length: 45 }, (_, i) => ({
        id: i,
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        size: Math.random() * 3 + 1.5,
        delay: Math.random() * 6,
        duration: Math.random() * 4 + 3,
        color: SPARKLE_COLORS[Math.floor(Math.random() * SPARKLE_COLORS.length)],
      })),
    []
  );

  return (
    <div
      className="fixed inset-0 overflow-hidden"
      style={{
        background:
          "linear-gradient(180deg, #0c1929 0%, #0a0a1a 25%, #1a0a2e 50%, #0d1b2a 75%, #0a0a1a 100%)",
      }}
    >
      {/* Mesh gradient orbs */}
      {orbs.map((orb, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full"
          style={{
            width: orb.size,
            height: orb.size,
            background: `radial-gradient(circle, ${orb.color}, transparent 70%)`,
            left: orb.x,
            top: orb.y,
            filter: "blur(60px)",
            willChange: "transform",
          }}
          animate={{
            x: [0, 40, -30, 20, 0],
            y: [0, -30, 40, -20, 0],
            scale: [1, 1.15, 0.9, 1.1, 1],
          }}
          transition={{
            duration: orb.duration,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Floating sparkle particles */}
      {sparkles.map((s) => (
        <motion.div
          key={s.id}
          className="absolute rounded-full"
          style={{
            left: s.left,
            top: s.top,
            width: s.size,
            height: s.size,
            background: s.color,
            boxShadow: `0 0 ${s.size * 3}px ${s.color}`,
          }}
          animate={{
            opacity: [0, 0.8, 0],
            y: [0, -30, -60],
            scale: [0.5, 1.2, 0.3],
          }}
          transition={{
            duration: s.duration,
            delay: s.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Floating emoji decorations — whimsical touch */}
      {["☁️", "⭐", "✨", "💫", "🌙"].map((emoji, i) => (
        <motion.div
          key={`emoji-bg-${i}`}
          className="absolute text-2xl opacity-[0.07] pointer-events-none select-none"
          style={{
            left: `${15 + i * 18}%`,
            top: `${10 + (i % 3) * 30}%`,
          }}
          animate={{
            y: [-15, 15, -15],
            x: [-8, 8, -8],
            rotate: [-5, 5, -5],
          }}
          transition={{
            duration: 8 + i * 2,
            delay: i * 1.2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <span className="text-4xl">{emoji}</span>
        </motion.div>
      ))}

      {/* Noise texture */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
        }}
      />
    </div>
  );
};

export default AnimatedBackground;
