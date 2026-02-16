import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

export default function Projects() {
  const projects = [
    {
      title: "Neon Nexus",
      desc: "Futuristic Social Platform",
      tech: ["Android", "Kotlin", "Firebase"],
      color: "from-blue-500 to-cyan-500",
    },
    {
      title: "Cyber Security Tool",
      desc: "Network Penetration Testing Kit",
      tech: ["Python", "Scapy", "Linux"],
      color: "from-purple-500 to-pink-500",
    },
    {
      title: "System OS",
      desc: "Custom Android ROM",
      tech: ["AOSP", "C++", "Java"],
      color: "from-green-500 to-emerald-500",
    },
  ];

  return (
    <section className="py-20 px-4 bg-background relative">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-orbitron font-bold mb-12 text-center"
        >
          <span className="text-secondary">02.</span> FEATURED PROJECTS
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              whileHover={{ y: -10 }}
              className="group relative"
            >
              <div className={`absolute inset-0 bg-gradient-to-r ${project.color} rounded-2xl blur opacity-20 group-hover:opacity-60 transition-opacity duration-500`} />
              
              <div className="relative h-full bg-card border border-white/10 p-6 rounded-2xl overflow-hidden flex flex-col glass-card">
                <div className="mb-4">
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${project.color} flex items-center justify-center mb-4 shadow-lg`}>
                    <span className="font-orbitron font-bold text-white text-xl">{idx + 1}</span>
                  </div>
                  <h3 className="text-2xl font-orbitron font-bold mb-2">{project.title}</h3>
                  <p className="text-muted-foreground text-sm mb-4 font-poppins">{project.desc}</p>
                </div>

                <div className="mt-auto">
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((t, i) => (
                      <span key={i} className="text-xs px-2 py-1 rounded bg-white/5 border border-white/10 text-primary font-mono">
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-4">
                    <button className="flex-1 py-2 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center gap-2 transition-all">
                      <Github className="w-4 h-4" /> Code
                    </button>
                    <button className="flex-1 py-2 rounded-lg bg-primary/20 hover:bg-primary/30 border border-primary/50 text-primary flex items-center justify-center gap-2 transition-all">
                      <ExternalLink className="w-4 h-4" /> View
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
