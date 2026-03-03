import { useState } from "react";
import { motion } from "framer-motion";
import { Play, Pause, SkipForward, SkipBack } from "lucide-react";
import GlassCard from "./GlassCard";

const NowPlaying = () => {
  const [playing, setPlaying] = useState(false);

  return (
    <section className="relative z-10 px-4 py-8 max-w-md mx-auto">
      <motion.p
        className="text-xs font-medium uppercase tracking-widest mb-3 glass-text"
        style={{ color: "rgba(255,255,255,0.4)" }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
      >
        🎧 Now Playing
      </motion.p>
      <GlassCard
        className="p-4 flex items-center gap-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.3 }}
      >
        {/* Album Art */}
        <div
          className="w-14 h-14 rounded-xl flex-shrink-0 overflow-hidden"
          style={{
            background: "linear-gradient(135deg, #c084fc, #f472b6, #67e8f9)",
            boxShadow: "0 4px 15px rgba(192, 132, 252, 0.3)",
          }}
        >
          <div className="w-full h-full flex items-center justify-center text-2xl">🎵</div>
        </div>

        {/* Track Info */}
        <div className="flex-1 min-w-0">
          <p className="text-sm font-semibold truncate glass-text" style={{ color: "rgba(255,255,255,0.95)" }}>
            Chill Indian Lo-fi
          </p>
          <p className="text-xs truncate glass-text" style={{ color: "rgba(255,255,255,0.5)" }}>
            Lo-fi Chai Beats
          </p>
          {/* Progress Bar */}
          <div className="mt-2 h-1 rounded-full overflow-hidden" style={{ background: "rgba(255,255,255,0.1)" }}>
            <motion.div
              className="h-full rounded-full"
              style={{ background: "linear-gradient(90deg, #c084fc, #f472b6)" }}
              initial={{ width: "0%" }}
              animate={{ width: playing ? "100%" : "35%" }}
              transition={{ duration: playing ? 180 : 0.5 }}
            />
          </div>
        </div>

        {/* Controls */}
        <div className="flex items-center gap-1 flex-shrink-0">
          <button className="p-1.5 rounded-full transition-colors" style={{ color: "rgba(255,255,255,0.5)" }}>
            <SkipBack className="w-4 h-4" />
          </button>
          <button
            onClick={() => setPlaying(!playing)}
            className="p-2 rounded-full transition-all"
            style={{
              background: "linear-gradient(135deg, #c084fc, #f472b6)",
              color: "white",
              boxShadow: "0 4px 15px rgba(192, 132, 252, 0.4)",
            }}
          >
            {playing ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
          </button>
          <button className="p-1.5 rounded-full transition-colors" style={{ color: "rgba(255,255,255,0.5)" }}>
            <SkipForward className="w-4 h-4" />
          </button>
        </div>
      </GlassCard>
    </section>
  );
};

export default NowPlaying;
