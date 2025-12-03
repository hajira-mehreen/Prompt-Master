import React from 'react';
import { Trash2, Crown, X, Check, ArrowRight, AlertTriangle, Sparkles } from 'lucide-react';
import { Reveal } from './Reveal';

const Importance: React.FC = () => {
  return (
    <section id="importance" className="py-24 bg-slate-950 relative overflow-hidden">
      {/* Dark Mode Background Effects */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-blue-900/20 rounded-full blur-[120px] mix-blend-screen"></div>
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-rose-900/20 rounded-full blur-[120px] mix-blend-screen"></div>
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 mix-blend-overlay"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <Reveal>
            <div className="inline-block mb-4 px-4 py-1 rounded-full bg-slate-900 border border-slate-800 text-slate-400 text-xs font-bold uppercase tracking-widest shadow-2xl">
              Quality Control
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6 tracking-tight">
              Why Prompts <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-emerald-500">Matter</span>
            </h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
              An AI model is only as smart as the instructions you give it. 
              <br />See the difference between <span className="text-rose-400 font-semibold drop-shadow-glow">garbage input</span> and <span className="text-amber-400 font-semibold drop-shadow-glow">gold output</span>.
            </p>
          </Reveal>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-stretch">
          
          {/* BAD Section - Trash */}
          <Reveal delay={200}>
            <div className="h-full group relative">
               {/* Background Glow */}
              <div className="absolute inset-0 bg-gradient-to-b from-rose-900/20 to-transparent rounded-3xl transform rotate-2 group-hover:rotate-3 transition-transform duration-500"></div>
              
              <div className="h-full relative bg-slate-900/60 backdrop-blur-xl rounded-3xl p-8 border border-rose-900/30 shadow-2xl overflow-hidden hover:border-rose-500/30 transition-colors duration-500">
                <div className="absolute -right-10 -top-10 w-40 h-40 bg-rose-600/10 rounded-full blur-3xl group-hover:bg-rose-600/20 transition-all"></div>
                
                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-rose-950 to-rose-900 border border-rose-800 flex items-center justify-center text-rose-500 shadow-lg shadow-rose-900/20 group-hover:scale-110 transition-transform">
                      <Trash2 className="w-7 h-7" />
                    </div>
                    <div>
                        <h3 className="text-2xl font-bold text-white">The Trash Bin</h3>
                        <p className="text-rose-400/60 text-xs font-mono uppercase tracking-widest mt-1">Low Quality Input</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  {["Help me with career", "Write something about AI", "Fix this text", "Make it better"].map((text, idx) => (
                    <div key={idx} className="flex items-center gap-4 p-4 bg-black/20 rounded-xl border border-white/5 opacity-60 group-hover:opacity-100 transition-opacity">
                      <div className="w-6 h-6 rounded-full bg-rose-500/10 flex items-center justify-center flex-shrink-0">
                        <X className="w-3 h-3 text-rose-500" />
                      </div>
                      <p className="text-slate-400 italic font-medium line-through decoration-rose-900/50">{text}</p>
                    </div>
                  ))}
                </div>
                
                <div className="mt-8 pt-6 border-t border-white/5 flex items-center gap-3">
                    <AlertTriangle className="w-5 h-5 text-rose-500" />
                   <p className="text-sm font-semibold text-rose-400">
                     Result: Generic, Vague, Unusable
                   </p>
                </div>
              </div>
            </div>
          </Reveal>

          {/* GOOD Section - Gold */}
          <Reveal delay={400}>
            <div className="h-full group relative">
              {/* Background Glow */}
              <div className="absolute inset-0 bg-gradient-to-b from-amber-500/10 to-transparent rounded-3xl -rotate-1 group-hover:-rotate-2 transition-transform duration-500"></div>
              
              <div className="h-full relative bg-slate-900/80 backdrop-blur-xl rounded-3xl p-8 border border-amber-500/20 shadow-2xl overflow-hidden hover:border-amber-400/40 transition-colors duration-500 ring-1 ring-white/5">
                 <div className="absolute top-0 right-0 w-full h-1 bg-gradient-to-r from-amber-500 to-yellow-300 shadow-[0_0_20px_rgba(245,158,11,0.5)]"></div>

                 <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-amber-950 to-amber-900 border border-amber-700 flex items-center justify-center text-amber-400 shadow-lg shadow-amber-900/20 group-hover:scale-110 transition-transform">
                      <Crown className="w-7 h-7" />
                    </div>
                    <div>
                        <h3 className="text-2xl font-bold text-white">The Gold Mine</h3>
                        <p className="text-amber-400/60 text-xs font-mono uppercase tracking-widest mt-1">High Quality Input</p>
                    </div>
                  </div>
                  <span className="px-3 py-1 bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-bold uppercase tracking-wider rounded-full flex items-center gap-1 shadow-[0_0_10px_rgba(245,158,11,0.2)]">
                    <Crown className="w-3 h-3" /> Best Practice
                  </span>
                </div>

                <div className="space-y-5">
                   <div className="p-5 bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl border border-amber-500/20 relative group-hover:translate-x-1 transition-transform duration-300">
                      <div className="flex gap-3 mb-2">
                         <div className="w-6 h-6 rounded-full bg-emerald-500 flex items-center justify-center flex-shrink-0 text-white shadow-lg shadow-emerald-500/20">
                            <Check className="w-3 h-3" />
                         </div>
                         <p className="text-slate-300 text-sm font-medium leading-relaxed">
                           "I am a final-year engineering student. Compare <span className="text-amber-300 bg-amber-900/30 px-1 rounded border border-amber-500/20">Data Scientist vs ML Engineer</span> roles in India, including salaries and skills in a <span className="text-amber-300 bg-amber-900/30 px-1 rounded border border-amber-500/20">table format</span>."
                         </p>
                      </div>
                   </div>
                   
                   <div className="p-5 bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl border border-amber-500/20 group-hover:translate-x-1 transition-transform duration-300 delay-75">
                      <div className="flex gap-3">
                         <div className="w-6 h-6 rounded-full bg-emerald-500 flex items-center justify-center flex-shrink-0 text-white shadow-lg shadow-emerald-500/20">
                            <Check className="w-3 h-3" />
                         </div>
                         <p className="text-slate-300 text-sm font-medium leading-relaxed">
                           "Write a 300-word blog intro about AI in education, in a <span className="text-amber-300 bg-amber-900/30 px-1 rounded border border-amber-500/20">friendly tone</span>, for a <span className="text-amber-300 bg-amber-900/30 px-1 rounded border border-amber-500/20">college audience</span>."
                         </p>
                      </div>
                   </div>
                </div>

                <div className="mt-8 pt-6 border-t border-white/5 flex items-center gap-3">
                   <Sparkles className="w-5 h-5 text-amber-400 animate-pulse" />
                   <p className="text-sm font-bold text-amber-400">
                     Result: Specific, Actionable, Creative
                   </p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default Importance;