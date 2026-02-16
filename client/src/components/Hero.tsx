import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import { Github, Instagram, Twitter, HeartCrack, MapPin } from "lucide-react";
import heroImg from "@assets/cc6cebd358b25e2101927d75365c447f_1771252558044.jpg";

export default function Hero() {
  return (
    <section className="relative w-full min-h-screen flex flex-col items-center justify-center p-6 bg-background grain-bg">
      <div className="absolute top-0 w-full h-full bg-gradient-to-b from-black/0 via-black/20 to-background pointer-events-none" />
      
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="relative z-10 w-full max-w-lg overflow-hidden rounded-[2.5rem] sad-glass"
      >
        {/* Profile Banner */}
        <div className="relative h-64 overflow-hidden">
          <img 
            src={heroImg} 
            alt="Anime Sad Profile" 
            className="w-full h-full object-cover grayscale-img opacity-80"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
          
          {/* Badge Overlay */}
          <div className="absolute bottom-6 left-8 flex items-center gap-3">
            <div className="w-20 h-20 rounded-full border-4 border-background bg-card flex items-center justify-center overflow-hidden">
              <img src={heroImg} className="grayscale-img scale-150" />
            </div>
            <div className="mb-2">
              <h2 className="text-2xl font-bold tracking-tight text-white flex items-center gap-2">
                INSANE <HeartCrack className="w-4 h-4 text-white/40" />
              </h2>
              <p className="text-white/60 text-sm font-mono tracking-widest uppercase">Broken Core</p>
            </div>
          </div>
        </div>

        {/* Profile Info */}
        <div className="p-8 pt-6">
          <div className="flex justify-between items-start mb-6">
            <div className="space-y-1">
              <p className="text-white/40 text-xs font-mono uppercase tracking-[0.2em]">Current State</p>
              <div className="text-lg font-medium text-white/90">
                <Typewriter
                  words={["Processing Heartbreak...", "Debugging Emotions...", "Null Reference Found.", "System Shutdown imminent."]}
                  loop={0}
                  cursor
                  cursorStyle="|"
                  typeSpeed={50}
                  deleteSpeed={30}
                  delaySpeed={2000}
                />
              </div>
            </div>
            <button className="px-6 py-2 rounded-full bg-white text-black font-semibold text-sm hover:bg-white/90 transition-all active:scale-95">
              Follow
            </button>
          </div>

          <p className="text-white/60 text-sm leading-relaxed mb-8 italic">
            "Jaat paida nahi hote, system hila dete hain... par kabhi kabhi system khud hi hil jata hai."
          </p>

          <div className="flex gap-8 mb-8 border-y border-white/5 py-6">
            <div className="text-center">
              <p className="text-xl font-bold text-white tracking-tight">500</p>
              <p className="text-[10px] text-white/30 uppercase tracking-widest">Following</p>
            </div>
            <div className="text-center">
              <p className="text-xl font-bold text-white tracking-tight">22.2K</p>
              <p className="text-[10px] text-white/30 uppercase tracking-widest">Followers</p>
            </div>
            <div className="text-center">
              <p className="text-xl font-bold text-white tracking-tight">0</p>
              <p className="text-[10px] text-white/30 uppercase tracking-widest">Pieces Left</p>
            </div>
          </div>

          <div className="flex justify-between items-center">
            <div className="flex gap-4">
              <a href="#" className="p-2 rounded-full hover:bg-white/10 transition-colors text-white/40 hover:text-white">
                <Github className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 rounded-full hover:bg-white/10 transition-colors text-white/40 hover:text-white">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 rounded-full hover:bg-white/10 transition-colors text-white/40 hover:text-white">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
            <div className="flex items-center gap-2 text-white/30 text-xs font-mono">
              <MapPin className="w-3 h-3" />
              THE VOID
            </div>
          </div>
        </div>
      </motion.div>

      {/* Background Ambience */}
      <div className="absolute bottom-12 text-white/10 font-mono text-[10vw] select-none pointer-events-none tracking-tighter uppercase italic leading-none opacity-5">
        Empty Space
      </div>
    </section>
  );
}
