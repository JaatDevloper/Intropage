import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Lock, LogOut, Camera, Edit3, Save, X } from "lucide-react";

// Mock Database - In reality this would be on a server
const DEFAULT_PROFILE = {
  name: "INSANE",
  bio: "Jaat paida nahi hote, system hila dete hain... par kabhi kabhi system khud hi hil jata hai.",
  profilePic: "/static/pfp.jpg", // Placeholder
  coverPic: "/static/cover.jpg",
  followers: "22.2K",
  following: "500"
};

export default function Admin() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  
  // Profile State
  const [profile, setProfile] = useState(() => {
    const saved = localStorage.getItem("user_profile");
    return saved ? JSON.parse(saved) : DEFAULT_PROFILE;
  });

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === "admin123") {
      setIsLoggedIn(true);
      setError("");
    } else {
      setError("Unauthorized Access. System Locked.");
    }
  };

  const handleSave = () => {
    localStorage.setItem("user_profile", JSON.stringify(profile));
    alert("Profile Updated in LocalStorage. (Graduation needed for MongoDB)");
  };

  if (!isLoggedIn) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center p-6 grain-bg">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="w-full max-w-md sad-glass p-8 rounded-[2rem] text-center"
        >
          <Lock className="w-12 h-12 mx-auto mb-6 text-white/20" />
          <h1 className="text-2xl font-bold mb-2 font-orbitron tracking-tighter">ADMIN TERMINAL</h1>
          <p className="text-white/40 text-sm mb-8 font-mono">Access Restricted to System Owner</p>
          
          <form onSubmit={handleLogin} className="space-y-4">
            <input 
              type="password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter Access Key"
              className="w-full bg-white/5 border border-white/10 rounded-xl p-4 outline-none focus:border-white/30 transition-all text-center font-mono"
            />
            {error && <p className="text-red-500 text-xs font-mono">{error}</p>}
            <button type="submit" className="w-full py-4 bg-white text-black font-bold rounded-xl hover:bg-white/90 transition-all active:scale-95">
              INITIALIZE LOGIN
            </button>
          </form>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background p-6 lg:p-12 grain-bg">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-12">
          <div>
            <h1 className="text-3xl font-bold font-orbitron tracking-tight">CONTROL CENTER</h1>
            <p className="text-white/40 font-mono text-xs mt-1 uppercase tracking-widest">Mockup Mode: LocalStorage enabled</p>
          </div>
          <button 
            onClick={() => setIsLoggedIn(false)}
            className="p-3 rounded-full bg-white/5 border border-white/10 text-white/40 hover:text-white transition-colors"
          >
            <LogOut className="w-5 h-5" />
          </button>
        </div>

        <div className="grid gap-8">
          {/* Visuals */}
          <section className="sad-glass rounded-[2rem] overflow-hidden">
            <div className="p-6 border-b border-white/5 bg-white/5">
              <h2 className="text-sm font-mono uppercase tracking-widest text-white/60 flex items-center gap-2">
                <Camera className="w-4 h-4" /> Visual Identity
              </h2>
            </div>
            <div className="p-8 space-y-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <label className="block text-xs font-mono text-white/30 uppercase mb-3">Profile Photo URL</label>
                  <input 
                    type="text" 
                    value={profile.profilePic}
                    onChange={(e) => setProfile({...profile, profilePic: e.target.value})}
                    className="w-full bg-black/40 border border-white/10 rounded-xl p-4 outline-none focus:border-white/30 text-sm font-mono"
                  />
                </div>
                <div>
                  <label className="block text-xs font-mono text-white/30 uppercase mb-3">Cover Photo URL</label>
                  <input 
                    type="text" 
                    value={profile.coverPic}
                    onChange={(e) => setProfile({...profile, coverPic: e.target.value})}
                    className="w-full bg-black/40 border border-white/10 rounded-xl p-4 outline-none focus:border-white/30 text-sm font-mono"
                  />
                </div>
              </div>
            </div>
          </section>

          {/* Content */}
          <section className="sad-glass rounded-[2rem] overflow-hidden">
            <div className="p-6 border-b border-white/5 bg-white/5">
              <h2 className="text-sm font-mono uppercase tracking-widest text-white/60 flex items-center gap-2">
                <Edit3 className="w-4 h-4" /> Content & Bio
              </h2>
            </div>
            <div className="p-8 space-y-6">
              <div>
                <label className="block text-xs font-mono text-white/30 uppercase mb-3">Display Name</label>
                <input 
                  type="text" 
                  value={profile.name}
                  onChange={(e) => setProfile({...profile, name: e.target.value})}
                  className="w-full bg-black/40 border border-white/10 rounded-xl p-4 outline-none focus:border-white/30 text-lg font-bold"
                />
              </div>
              <div>
                <label className="block text-xs font-mono text-white/30 uppercase mb-3">Biography</label>
                <textarea 
                  rows={4}
                  value={profile.bio}
                  onChange={(e) => setProfile({...profile, bio: e.target.value})}
                  className="w-full bg-black/40 border border-white/10 rounded-xl p-4 outline-none focus:border-white/30 text-sm italic"
                />
              </div>
            </div>
          </section>

          <button 
            onClick={handleSave}
            className="w-full py-6 bg-white text-black font-black rounded-[2rem] hover:shadow-[0_0_30px_rgba(255,255,255,0.2)] transition-all flex items-center justify-center gap-3 active:scale-[0.98]"
          >
            <Save className="w-6 h-6" />
            COMMIT SYSTEM CHANGES
          </button>
        </div>
      </div>
    </div>
  );
}
