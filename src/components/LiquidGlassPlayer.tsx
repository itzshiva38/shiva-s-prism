import { useState, useEffect, useRef, useCallback } from "react";
import { motion } from "framer-motion";
import { Play, Pause, SkipForward, SkipBack } from "lucide-react";

const playlist = [
  { title: "Maand", artist: "Bayaan, Hasan Raheem", src: "/music/maand.mp3" },
  { title: "Jhol", artist: "Maanu, Annural Khalid", src: "/music/jhol.mp3" },
  { title: "Mask Off (Remix)", artist: "Future, Marshmello", src: "/music/mask-off.mp3" },
  { title: "Astronaut In The Ocean", artist: "Masked Wolf, Alok", src: "/music/astronaut.mp3" },
  { title: "Dhurandhar", artist: "HanuMankind, Jasmine Sandlas", src: "/music/dhurandhar.mp3" },
  { title: "All Falls Down", artist: "Alan Walker, Noah Cyrus", src: "/music/all-falls-down.mp3" },
  { title: "Show Me Love", artist: "WizTheMc, bees honey", src: "/music/show-me-love.mp3" },
  { title: "Eastside", artist: "benny blanco, Halsey, Khalid", src: "/music/eastside.mp3" },
  { title: "Where Have You Been", artist: "Rihanna", src: "/music/where-have-you-been.mp3" },
];

const LiquidGlassPlayer = () => {
  const [playing, setPlaying] = useState(false);
  const [trackIndex, setTrackIndex] = useState(() => Math.floor(Math.random() * playlist.length));
  const [progress, setProgress] = useState(0);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const hasAutoPlayed = useRef(false);

  const track = playlist[trackIndex];

  const playNext = useCallback(() => {
    setTrackIndex((i) => (i + 1) % playlist.length);
  }, []);

  const playPrev = useCallback(() => {
    setTrackIndex((i) => (i - 1 + playlist.length) % playlist.length);
  }, []);

  // Handle track change + autoplay on first mount
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.src = track.src;
    if (!hasAutoPlayed.current) {
      hasAutoPlayed.current = true;
      setPlaying(true);
      audio.play().catch(() => {});
    } else if (playing) {
      audio.play().catch(() => {});
    }
  }, [trackIndex]);

  // Handle play/pause
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    if (playing) audio.play().catch(() => {});
    else audio.pause();
  }, [playing]);

  // Progress + auto-next
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    const onTime = () => {
      if (audio.duration) setProgress((audio.currentTime / audio.duration) * 100);
    };
    const onEnd = () => playNext();
    audio.addEventListener("timeupdate", onTime);
    audio.addEventListener("ended", onEnd);
    return () => {
      audio.removeEventListener("timeupdate", onTime);
      audio.removeEventListener("ended", onEnd);
    };
  }, [playNext]);

  return (
    <>
      <audio ref={audioRef} preload="metadata" />
      <motion.div
        className="fixed bottom-6 left-1/2 z-50 w-[92%] max-w-md"
        style={{ x: "-50%" }}
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.8, ease: [0.34, 1.56, 0.64, 1] }}
      >
        <div
          className="relative overflow-hidden"
          style={{
            background: "radial-gradient(circle at 30% 20%, rgba(255,255,255,0.14), transparent 60%), rgba(255, 255, 255, 0.07)",
            backdropFilter: "blur(24px) saturate(200%) contrast(110%) brightness(110%)",
            WebkitBackdropFilter: "blur(24px) saturate(200%) contrast(110%) brightness(110%)",
            border: "1px solid rgba(255,255,255,0.22)",
            borderRadius: "26px",
            boxShadow: "0 8px 40px rgba(0,0,0,0.25), inset 0 0 0 1px rgba(255,255,255,0.1), inset 0 1px 0 rgba(255,255,255,0.15), 0 0 80px rgba(192,132,252,0.08)",
            padding: "14px 18px",
          }}
        >
          <div className="absolute top-0 left-[10%] right-[10%] h-[1px]" style={{ background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)" }} />

          <div className="flex items-center gap-3.5">
            {/* Album Art */}
            <motion.div
              className="relative flex-shrink-0 w-12 h-12 rounded-[14px] overflow-hidden"
              style={{ background: "linear-gradient(135deg, #c084fc, #f472b6, #67e8f9)", boxShadow: "0 4px 20px rgba(192,132,252,0.35)" }}
              animate={playing ? { rotate: 360 } : { rotate: 0 }}
              transition={playing ? { duration: 8, repeat: Infinity, ease: "linear" } : { duration: 0.5 }}
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-4 h-4 rounded-full" style={{ background: "rgba(0,0,0,0.4)", boxShadow: "inset 0 1px 3px rgba(0,0,0,0.5), 0 0 0 1px rgba(255,255,255,0.1)" }} />
              </div>
              <div className="absolute inset-2 rounded-full" style={{ border: "1px solid rgba(255,255,255,0.08)" }} />
              <div className="absolute inset-3.5 rounded-full" style={{ border: "1px solid rgba(255,255,255,0.05)" }} />
            </motion.div>

            {/* Track Info */}
            <div className="flex-1 min-w-0">
              <p className="text-[13px] font-semibold truncate glass-text" style={{ color: "rgba(255,255,255,0.95)" }}>{track.title}</p>
              <p className="text-[11px] truncate glass-text" style={{ color: "rgba(255,255,255,0.5)" }}>{track.artist}</p>

              {/* Waveform */}
              <div className="mt-1.5 flex items-end gap-[2px] h-3">
                {Array.from({ length: 24 }).map((_, i) => {
                  const filled = i / 24 < progress / 100;
                  return (
                    <motion.div
                      key={i}
                      className="flex-1 rounded-full"
                      style={{ background: filled ? "linear-gradient(to top, #c084fc, #f472b6)" : "rgba(255,255,255,0.12)", minWidth: 2 }}
                      animate={playing && filled ? { height: [`${30 + Math.random() * 70}%`, `${20 + Math.random() * 80}%`, `${40 + Math.random() * 60}%`] } : { height: `${20 + Math.sin(i * 0.6) * 30 + 30}%` }}
                      transition={playing && filled ? { duration: 0.4 + Math.random() * 0.3, repeat: Infinity, repeatType: "reverse" as const, ease: "easeInOut" } : { duration: 0.3 }}
                    />
                  );
                })}
              </div>
            </div>

            {/* Controls */}
            <div className="flex items-center gap-0.5 flex-shrink-0">
              <button className="p-1.5 rounded-full" style={{ color: "rgba(255,255,255,0.45)" }} onClick={playPrev}>
                <SkipBack className="w-3.5 h-3.5" />
              </button>
              <motion.button
                onClick={() => setPlaying(!playing)}
                className="p-2.5 rounded-full relative overflow-hidden"
                style={{ background: "linear-gradient(135deg, #c084fc, #f472b6)", color: "white", boxShadow: "0 4px 20px rgba(192,132,252,0.45)" }}
                whileTap={{ scale: 0.92 }}
                whileHover={{ scale: 1.08 }}
              >
                {playing ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 ml-0.5" />}
              </motion.button>
              <button className="p-1.5 rounded-full" style={{ color: "rgba(255,255,255,0.45)" }} onClick={playNext}>
                <SkipForward className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default LiquidGlassPlayer;
