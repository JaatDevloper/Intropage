import Hero from "@/components/Hero";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden selection:bg-white selection:text-black">
      <Hero />
      
      {/* Footer minimal ashenthic */}
      <footer className="py-20 flex flex-col items-center justify-center opacity-20 border-t border-white/5">
        <p className="text-[10px] font-mono tracking-[0.5em] uppercase">Built in the shadows</p>
        <p className="text-[10px] font-mono mt-2">© 2026 INSANE</p>
      </footer>
    </div>
  );
}
