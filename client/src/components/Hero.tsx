import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import { ArrowDown, Github, Instagram, Twitter } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative w-full h-screen flex flex-col items-center justify-center overflow-hidden bg-background">
      {/* Background Effects */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-primary/20 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-secondary/20 rounded-full blur-[120px] animate-pulse delay-1000" />
      </div>

      {/* Floating Particles (CSS Only for performance) */}
      <div className="absolute inset-0 z-0 opacity-30 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute bg-white rounded-full"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              opacity: Math.random() * 0.5 + 0.1,
              scale: Math.random() * 0.5 + 0.5,
            }}
            animate={{
              y: [null, Math.random() * -100],
              opacity: [null, 0],
            }}
            transition={{
              duration: Math.random() * 10 + 5,
              repeat: Infinity,
              ease: "linear",
            }}
            style={{
              width: Math.random() * 4 + 1 + "px",
              height: Math.random() * 4 + 1 + "px",
            }}
          />
        ))}
      </div>

      <div className="z-10 text-center px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-4"
        >
          <span className="px-4 py-2 rounded-full border border-primary/30 bg-primary/10 text-primary text-sm tracking-wider font-orbitron uppercase">
            System Online
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-6xl md:text-8xl font-black font-orbitron mb-4 tracking-tighter"
        >
          I AM <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-white to-secondary animate-gradient-x">INSANE</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl md:text-3xl font-light text-muted-foreground mb-8 h-[40px]"
        >
          <span className="text-primary font-mono mr-2">&gt;</span>
          <Typewriter
            words={["Android App Developer", "Python Programmer", "Jaat Community", "System Breaker"]}
            loop={0}
            cursor
            cursorStyle="_"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </motion.div>

        {/* Glass Card Profile */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="glass-card p-1 rounded-2xl mx-auto max-w-md w-full mt-10"
        >
          <div className="bg-black/40 rounded-xl p-6 backdrop-blur-md border border-white/5 relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <div className="flex justify-center gap-6 relative z-10">
              {[
                { icon: Github, href: "#", color: "hover:text-white" },
                { icon: Twitter, href: "#", color: "hover:text-blue-400" },
                { icon: Instagram, href: "#", color: "hover:text-pink-500" },
              ].map((item, idx) => (
                <a
                  key={idx}
                  href={item.href}
                  className={`p-3 rounded-full bg-white/5 hover:bg-white/10 transition-all duration-300 ${item.color} transform hover:scale-110 hover:shadow-[0_0_15px_rgba(255,255,255,0.3)]`}
                >
                  <item.icon className="w-6 h-6" />
                </a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="text-muted-foreground"
        >
          <ArrowDown className="w-8 h-8 opacity-50" />
        </motion.div>
      </motion.div>
    </section>
  );
}
