import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  color: string;
  angle: number;
  speed: number;
  delay: number;
}

const COLORS = ["#c084fc", "#f472b6", "#67e8f9", "#818cf8", "#fb923c", "#a78bfa", "#38bdf8", "#fbbf24", "#34d399"];

const generateParticles = (count: number): Particle[] =>
  Array.from({ length: count }, (_, i) => ({
    id: i,
    x: 0,
    y: 0,
    size: Math.random() * 10 + 4,
    color: COLORS[Math.floor(Math.random() * COLORS.length)],
    angle: (Math.PI * 2 * i) / count + (Math.random() - 0.5) * 0.5,
    speed: Math.random() * 350 + 120,
    delay: Math.random() * 0.12,
  }));

const LoadingScreen = ({ onComplete }: { onComplete: () => void }) => {
  const [phase, setPhase] = useState<"loading" | "blast" | "done">("loading");
  const [particles] = useState(() => generateParticles(70));
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((p) => {
        if (p >= 100) {
          clearInterval(interval);
          return 100;
        }
        return p + Math.random() * 8 + 2;
      });
    }, 80);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (progress >= 100 && phase === "loading") {
      setTimeout(() => setPhase("blast"), 300);
    }
  }, [progress, phase]);

  const handleBlastEnd = useCallback(() => {
    setTimeout(() => {
      setPhase("done");
      setTimeout(onComplete, 400);
    }, 600);
  }, [onComplete]);

  useEffect(() => {
    if (phase === "blast") handleBlastEnd();
  }, [phase, handleBlastEnd]);

  return (
    <AnimatePresence>
      {phase !== "done" && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center overflow-hidden"
          style={{
            background: "linear-gradient(135deg, #0a0a1a 0%, #1a0a2e 50%, #0a0a1a 100%)",
          }}
          exit={{ opacity: 0, scale: 1.1 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          {/* Ambient orbs */}
          <div
            className="absolute w-[500px] h-[500px] rounded-full opacity-30"
            style={{
              background: "radial-gradient(circle, rgba(192,132,252,0.4), transparent 70%)",
              top: "20%",
              left: "20%",
              filter: "blur(80px)",
            }}
          />
          <div
            className="absolute w-[400px] h-[400px] rounded-full opacity-25"
            style={{
              background: "radial-gradient(circle, rgba(103,232,249,0.4), transparent 70%)",
              bottom: "20%",
              right: "20%",
              filter: "blur(80px)",
            }}
          />

          {/* Floating sparkles around the cat */}
          {phase === "loading" && (
            <>
              {[...Array(6)].map((_, i) => (
                <motion.div
                  key={`sparkle-${i}`}
                  className="absolute text-lg"
                  style={{
                    top: `${40 + Math.sin(i * 1.2) * 15}%`,
                    left: `${42 + Math.cos(i * 1.2) * 18}%`,
                  }}
                  animate={{
                    y: [-10, 10, -10],
                    opacity: [0.3, 1, 0.3],
                    scale: [0.8, 1.2, 0.8],
                  }}
                  transition={{
                    duration: 2 + i * 0.3,
                    delay: i * 0.2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  ✨
                </motion.div>
              ))}
            </>
          )}

          {/* Cat emoji as the central icon */}
          <motion.div
            className="relative flex items-center justify-center"
            animate={
              phase === "blast"
                ? { scale: [1, 1.5, 0], opacity: [1, 1, 0], rotate: [0, 15, -15, 0] }
                : { scale: [0.95, 1.08, 0.95] }
            }
            transition={
              phase === "blast"
                ? { duration: 0.5, ease: "easeIn" }
                : { duration: 2, repeat: Infinity, ease: "easeInOut" }
            }
          >
            {/* Glow ring behind cat */}
            <motion.div
              className="absolute w-36 h-36 rounded-full"
              style={{
                background: "conic-gradient(from 0deg, #c084fc, #f472b6, #67e8f9, #fbbf24, #c084fc)",
                filter: "blur(10px)",
                opacity: 0.5,
              }}
              animate={{ rotate: 360 }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            />
            {/* Glass circle holding the cat */}
            <div
              className="relative w-32 h-32 rounded-full flex items-center justify-center"
              style={{
                background:
                  "radial-gradient(circle at 30% 20%, rgba(255,255,255,0.15), transparent 60%), rgba(255,255,255,0.08)",
                backdropFilter: "blur(16px) saturate(180%)",
                border: "1px solid rgba(255,255,255,0.2)",
                boxShadow:
                  "0 8px 32px rgba(0,0,0,0.3), inset 0 0 0 1px rgba(255,255,255,0.1), 0 0 60px rgba(192,132,252,0.2)",
              }}
            >
              <motion.span
                className="text-6xl select-none"
                style={{
                  filter: "drop-shadow(0 4px 12px rgba(192,132,252,0.5))",
                }}
                animate={phase === "loading" ? { rotate: [-5, 5, -5] } : {}}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              >
                😺
              </motion.span>
            </div>
          </motion.div>

          {/* Progress bar (loading phase) */}
          {phase === "loading" && (
            <motion.div
              className="absolute bottom-[28%] w-48"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <div
                className="h-1.5 rounded-full overflow-hidden"
                style={{ background: "rgba(255,255,255,0.08)" }}
              >
                <motion.div
                  className="h-full rounded-full"
                  style={{
                    background: "linear-gradient(90deg, #c084fc, #f472b6, #67e8f9, #fbbf24)",
                  }}
                  animate={{ width: `${Math.min(progress, 100)}%` }}
                  transition={{ duration: 0.2 }}
                />
              </div>
              <p
                className="text-center mt-3 text-xs glass-text tracking-widest uppercase"
                style={{ color: "rgba(255,255,255,0.4)" }}
              >
                Loading magic… 🪄
              </p>
            </motion.div>
          )}

          {/* Blast particles */}
          {phase === "blast" &&
            particles.map((p) => (
              <motion.div
                key={p.id}
                className="absolute rounded-full"
                style={{
                  width: p.size,
                  height: p.size,
                  background: p.color,
                  boxShadow: `0 0 ${p.size * 2}px ${p.color}`,
                  top: "50%",
                  left: "50%",
                }}
                initial={{ x: 0, y: 0, opacity: 1, scale: 1 }}
                animate={{
                  x: Math.cos(p.angle) * p.speed,
                  y: Math.sin(p.angle) * p.speed,
                  opacity: 0,
                  scale: 0.2,
                }}
                transition={{
                  duration: 0.8,
                  delay: p.delay,
                  ease: "easeOut",
                }}
              />
            ))}

          {/* Emoji confetti on blast */}
          {phase === "blast" &&
            ["✨", "🌟", "💫", "⭐", "🎉", "🎊"].map((emoji, i) => (
              <motion.span
                key={`emoji-${i}`}
                className="absolute text-2xl"
                style={{ top: "50%", left: "50%" }}
                initial={{ x: 0, y: 0, opacity: 1, scale: 1 }}
                animate={{
                  x: Math.cos((Math.PI * 2 * i) / 6) * (200 + Math.random() * 100),
                  y: Math.sin((Math.PI * 2 * i) / 6) * (200 + Math.random() * 100),
                  opacity: 0,
                  scale: 0.3,
                  rotate: Math.random() * 360,
                }}
                transition={{ duration: 0.9, delay: i * 0.03, ease: "easeOut" }}
              >
                {emoji}
              </motion.span>
            ))}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingScreen;
