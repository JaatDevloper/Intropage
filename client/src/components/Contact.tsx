import { motion } from "framer-motion";
import { Mail, Send } from "lucide-react";

export default function Contact() {
  return (
    <section className="py-20 px-4 bg-gradient-to-t from-black to-background border-t border-white/5">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-orbitron font-bold mb-8"
        >
          <span className="text-primary">03.</span> CONNECT
        </motion.h2>

        <p className="text-muted-foreground mb-12 font-poppins">
          Ready to break the system with me? Let's build something impossible.
        </p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="glass-card p-8 rounded-2xl max-w-lg mx-auto"
        >
          <form className="space-y-4 text-left">
            <div>
              <label className="block text-sm font-mono text-muted-foreground mb-2">Name</label>
              <input type="text" className="w-full bg-black/50 border border-white/10 rounded-lg p-3 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all text-white" placeholder="Enter your name" />
            </div>
            <div>
              <label className="block text-sm font-mono text-muted-foreground mb-2">Email</label>
              <input type="email" className="w-full bg-black/50 border border-white/10 rounded-lg p-3 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all text-white" placeholder="Enter your email" />
            </div>
            <div>
              <label className="block text-sm font-mono text-muted-foreground mb-2">Message</label>
              <textarea rows={4} className="w-full bg-black/50 border border-white/10 rounded-lg p-3 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all text-white" placeholder="What's your project?"></textarea>
            </div>
            
            <button className="w-full py-4 bg-primary text-black font-bold font-orbitron rounded-lg hover:bg-primary/90 hover:shadow-[0_0_20px_rgba(6,182,212,0.5)] transition-all flex items-center justify-center gap-2">
              <Send className="w-5 h-5" />
              SEND TRANSMISSION
            </button>
          </form>
        </motion.div>

        <div className="mt-20 pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-muted-foreground text-sm font-mono">
          <p>© 2026 INSANE. All rights reserved.</p>
          <div className="flex items-center gap-2 mt-4 md:mt-0">
            <Mail className="w-4 h-4" />
            <span>insane@system.dev</span>
          </div>
        </div>
      </div>
    </section>
  );
}
