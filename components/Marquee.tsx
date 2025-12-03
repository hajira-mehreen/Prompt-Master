import React from 'react';
import { Sparkles, Zap, Command, Cpu } from 'lucide-react';

const Marquee: React.FC = () => {
  const items = [
    { text: "PERSONA", icon: Command },
    { text: "TASK", icon: Zap },
    { text: "CONSTRAINTS", icon: Cpu },
    { text: "CONTEXT", icon: Sparkles },
    { text: "ITERATE", icon: Command },
    { text: "REFINE", icon: Zap },
    { text: "MASTER", icon: Cpu },
    { text: "CREATE", icon: Sparkles },
  ];

  return (
    <div className="w-full overflow-hidden bg-slate-900 border-y border-white/10 relative z-20 py-4">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-pink-600/20 backdrop-blur-sm"></div>
      <div className="flex w-max animate-scroll">
        {[...items, ...items, ...items, ...items].map((item, idx) => (
          <div key={idx} className="flex items-center gap-3 mx-8 opacity-70 hover:opacity-100 transition-opacity cursor-default group">
            <item.icon className="w-5 h-5 text-white/50 group-hover:text-white transition-colors" />
            <span className="text-xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-400 uppercase tracking-[0.2em]">
              {item.text}
            </span>
            <div className="w-2 h-2 rounded-full bg-blue-500/50 ml-8"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Marquee;