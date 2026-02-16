import { motion } from "framer-motion";

export default function Quote() {
  return (
    <section className="py-32 px-4 relative overflow-hidden flex items-center justify-center bg-black">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_100%)]" />

      <div className="relative z-10 max-w-5xl mx-auto text-center">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl md:text-8xl font-black font-orbitron leading-tight text-transparent bg-clip-text bg-gradient-to-br from-white via-gray-400 to-gray-800 drop-shadow-2xl">
            "JAAT PAIDA NAHI HOTE
            <br />
            <span className="text-primary neon-text-blue">SYSTEM</span> HILA DETE HAIN"
          </h2>
        </motion.div>
        
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: "200px" }}
          transition={{ delay: 0.5, duration: 1 }}
          className="h-1 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto mt-8"
        />
      </div>
    </section>
  );
}
