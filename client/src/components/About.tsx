import { motion } from "framer-motion";
import { Code, Smartphone, Terminal, Cpu } from "lucide-react";

export default function About() {
  const skills = [
    { name: "Android Development", level: 95, color: "bg-green-500" },
    { name: "Python", level: 90, color: "bg-yellow-500" },
    { name: "Kotlin", level: 85, color: "bg-purple-500" },
    { name: "System Architecture", level: 80, color: "bg-blue-500" },
  ];

  return (
    <section className="py-20 px-4 bg-black relative overflow-hidden">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center relative z-10">
        
        {/* Bio Section */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-orbitron font-bold mb-6 text-white">
            <span className="text-primary">01.</span> ABOUT ME
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed mb-6 font-poppins">
            I don't just write code; I engineer digital ecosystems. As a proud <span className="text-primary font-bold">Jaat</span>, I bring resilience and power to every project. My expertise lies in crafting high-performance Android applications and robust Python backends.
          </p>
          <p className="text-muted-foreground text-lg leading-relaxed mb-8">
            Driven by innovation and a "System Breaker" mentality, I push boundaries where others see limits.
          </p>

          <div className="grid grid-cols-2 gap-4">
            {[
              { icon: Smartphone, label: "App Dev" },
              { icon: Terminal, label: "Python" },
              { icon: Code, label: "Clean Code" },
              { icon: Cpu, label: "Optimization" },
            ].map((item, idx) => (
              <div key={idx} className="flex items-center gap-3 p-4 bg-white/5 rounded-lg border border-white/5 hover:border-primary/50 transition-colors">
                <item.icon className="w-6 h-6 text-primary" />
                <span className="font-orbitron text-sm">{item.label}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Skills Section */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="glass-card p-8 rounded-2xl"
        >
          <h3 className="text-2xl font-orbitron mb-8 border-b border-white/10 pb-4">Core Competencies</h3>
          <div className="space-y-6">
            {skills.map((skill, idx) => (
              <div key={idx}>
                <div className="flex justify-between mb-2">
                  <span className="font-mono text-sm">{skill.name}</span>
                  <span className="font-mono text-sm text-primary">{skill.level}%</span>
                </div>
                <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    transition={{ duration: 1.5, delay: 0.2 }}
                    className={`h-full ${skill.color} shadow-[0_0_10px_currentColor]`}
                  />
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
