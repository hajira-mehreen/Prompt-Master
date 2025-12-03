import React from 'react';
import { UserCircle2, CheckSquare, Settings2, ArrowDown, ArrowRight, Sparkles, Terminal } from 'lucide-react';
import { Reveal } from './Reveal';

const Structure: React.FC = () => {
  return (
    <section id="structure" className="py-24 bg-white relative overflow-hidden">
      {/* Soft Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-50 to-white"></div>
      <div className="absolute inset-0 opacity-30 bg-[radial-gradient(#3b82f6_0.5px,transparent_0.5px)] [background-size:24px_24px]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <Reveal>
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-1.5 rounded-full bg-slate-100 border border-slate-200 text-slate-500 text-xs font-bold uppercase tracking-widest mb-4">
              The Architecture
            </div>
            <h2 className="text-4xl lg:text-5xl font-extrabold text-slate-900 mb-4 tracking-tight">The Magic <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-emerald-500">Formula</span></h2>
            <p className="text-xl text-slate-500 max-w-2xl mx-auto">Build your prompt layer by layer using these 3 key ingredients.</p>
          </div>
        </Reveal>

        {/* Steps Flow */}
        <div className="grid lg:grid-cols-3 gap-8 items-center max-w-6xl mx-auto mb-20">
            {/* Step 1: Persona (Blue) */}
            <Reveal delay={100}>
              <div className="relative group h-full">
                <div className="h-full bg-white p-8 rounded-[2rem] shadow-xl shadow-slate-200/50 border border-blue-600/10 hover:border-blue-600/40 transition-all duration-500 hover:-translate-y-3 z-10 relative overflow-hidden ring-1 ring-transparent hover:ring-blue-100">
                   <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-600 to-indigo-400 group-hover:h-1.5 transition-all"></div>
                   
                   <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300 shadow-inner">
                      <UserCircle2 className="w-8 h-8 text-blue-600" />
                   </div>
                   
                   <span className="inline-block px-3 py-1 bg-blue-50 text-blue-600 rounded-md text-xs font-bold uppercase mb-4 tracking-wider">Step 01</span>
                   
                   <h3 className="text-2xl font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">The Persona</h3>
                   <p className="text-slate-500 text-sm mb-6 font-medium">"Who is the AI?"</p>
                   
                   <div className="bg-slate-50 p-4 rounded-xl border border-slate-100 group-hover:bg-blue-600/5 group-hover:border-blue-600/20 transition-colors group-hover:translate-x-1 duration-300">
                      <p className="text-slate-700 text-sm font-semibold italic">"Act as a Senior Career Counselor..."</p>
                   </div>
                </div>
                
                {/* Connector Arrow Desktop */}
                <div className="hidden lg:block absolute -right-10 top-1/2 -translate-y-1/2 text-slate-200 z-0 lg:group-hover:translate-x-2 transition-transform duration-500">
                    <ArrowRight className="w-10 h-10" />
                </div>
                 {/* Connector Arrow Mobile */}
                 <div className="lg:hidden flex justify-center py-4 text-slate-200">
                    <ArrowDown className="w-8 h-8" />
                </div>
              </div>
            </Reveal>

            {/* Step 2: Task (Orange) */}
            <Reveal delay={300}>
              <div className="relative group h-full">
                <div className="h-full bg-white p-8 rounded-[2rem] shadow-xl shadow-slate-200/50 border border-rose-500/10 hover:border-rose-500/40 transition-all duration-500 hover:-translate-y-3 z-10 relative overflow-hidden ring-1 ring-transparent hover:ring-rose-100">
                   <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-rose-500 to-orange-400 group-hover:h-1.5 transition-all"></div>

                   <div className="w-16 h-16 bg-rose-50 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300 shadow-inner">
                      <CheckSquare className="w-8 h-8 text-rose-500" />
                   </div>
                   
                   <span className="inline-block px-3 py-1 bg-rose-50 text-rose-500 rounded-md text-xs font-bold uppercase mb-4 tracking-wider">Step 02</span>

                   <h3 className="text-2xl font-bold text-slate-900 mb-2 group-hover:text-rose-500 transition-colors">The Task</h3>
                   <p className="text-slate-500 text-sm mb-6 font-medium">"What is the job?"</p>
                   
                   <div className="bg-slate-50 p-4 rounded-xl border border-slate-100 group-hover:bg-rose-500/5 group-hover:border-rose-500/20 transition-colors group-hover:translate-x-1 duration-300">
                      <p className="text-slate-700 text-sm font-semibold italic">"Compare Job A vs Job B..."</p>
                   </div>
                </div>
                
                <div className="hidden lg:block absolute -right-10 top-1/2 -translate-y-1/2 text-slate-200 z-0 lg:group-hover:translate-x-2 transition-transform duration-500">
                    <ArrowRight className="w-10 h-10" />
                </div>
                <div className="lg:hidden flex justify-center py-4 text-slate-200">
                    <ArrowDown className="w-8 h-8" />
                </div>
              </div>
            </Reveal>

            {/* Step 3: Constraints (Green) */}
            <Reveal delay={500}>
              <div className="relative group h-full">
                <div className="h-full bg-white p-8 rounded-[2rem] shadow-xl shadow-slate-200/50 border border-emerald-500/10 hover:border-emerald-500/40 transition-all duration-500 hover:-translate-y-3 z-10 relative overflow-hidden ring-1 ring-transparent hover:ring-emerald-100">
                   <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-500 to-teal-400 group-hover:h-1.5 transition-all"></div>

                   <div className="w-16 h-16 bg-emerald-50 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300 shadow-inner">
                      <Settings2 className="w-8 h-8 text-emerald-500" />
                   </div>

                   <span className="inline-block px-3 py-1 bg-emerald-50 text-emerald-500 rounded-md text-xs font-bold uppercase mb-4 tracking-wider">Step 03</span>

                   <h3 className="text-2xl font-bold text-slate-900 mb-2 group-hover:text-emerald-500 transition-colors">The Constraints</h3>
                   <p className="text-slate-500 text-sm mb-6 font-medium">"How should it look?"</p>
                   
                   <div className="bg-slate-50 p-4 rounded-xl border border-slate-100 group-hover:bg-emerald-500/5 group-hover:border-emerald-500/20 transition-colors group-hover:translate-x-1 duration-300">
                      <p className="text-slate-700 text-sm font-semibold italic">"In a table, under 300 words..."</p>
                   </div>
                </div>
              </div>
            </Reveal>
        </div>

        {/* Combined Result */}
        <Reveal delay={700}>
          <div className="max-w-5xl mx-auto">
             <div className="relative group">
                {/* Glowing Background */}
               <div className="absolute -inset-[2px] bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-[2rem] opacity-70 group-hover:opacity-100 blur-sm transition duration-500"></div>
               
               <div className="relative bg-[#0b0f19] rounded-[1.9rem] overflow-hidden shadow-2xl border border-white/10">
                  {/* Window Controls */}
                  <div className="bg-[#151b2b] px-6 py-4 flex items-center justify-between border-b border-white/5">
                     <div className="flex gap-2">
                        <div className="w-3 h-3 rounded-full bg-rose-500"></div>
                        <div className="w-3 h-3 rounded-full bg-amber-500"></div>
                        <div className="w-3 h-3 rounded-full bg-emerald-500"></div>
                     </div>
                     <div className="text-slate-400 text-xs font-mono font-bold uppercase tracking-widest flex items-center gap-2">
                        <Terminal className="w-3 h-3 text-blue-400" />
                        prompt_builder.v2
                     </div>
                     <div className="w-10"></div>
                  </div>

                  <div className="p-10 md:p-20 relative bg-grid-slate-700/[0.1]">
                      <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none animate-pulse">
                         <Sparkles className="w-64 h-64 text-white" />
                      </div>

                      <div className="flex items-center gap-3 mb-10">
                         <div className="h-[1px] bg-slate-700 flex-grow"></div>
                         <h4 className="text-slate-500 text-xs font-bold uppercase tracking-[0.2em] px-2">The Perfect Structure</h4>
                         <div className="h-[1px] bg-slate-700 flex-grow"></div>
                      </div>
                      
                      <div className="text-xl md:text-3xl font-light leading-relaxed text-slate-300 font-sans tracking-wide">
                       <span className="text-blue-300 hover:text-white bg-blue-500/20 px-3 py-1.5 rounded-lg border border-blue-500/30 transition-all hover:border-blue-400 hover:shadow-[0_0_15px_rgba(59,130,246,0.3)] cursor-default inline-block mb-3 md:mb-0">You are a career counselor at a leading university.</span>{" "}
                       <span className="text-rose-300 hover:text-white bg-rose-500/20 px-3 py-1.5 rounded-lg border border-rose-500/30 transition-all hover:border-rose-400 hover:shadow-[0_0_15px_rgba(244,63,94,0.3)] cursor-default inline-block mb-3 md:mb-0">Help me decide between two job offers.</span>{" "}
                       <span className="text-emerald-300 hover:text-white bg-emerald-500/20 px-3 py-1.5 rounded-lg border border-emerald-500/30 transition-all hover:border-emerald-400 hover:shadow-[0_0_15px_rgba(16,185,129,0.3)] cursor-default inline-block">Compare salary growth, work-life balance, and learning opportunities in a table, under 300 words.</span>
                     </div>

                     <div className="mt-10 flex justify-end">
                        <div className="flex items-center gap-2 text-[10px] text-slate-500 font-mono">
                            <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></span>
                            READY TO DEPLOY
                        </div>
                     </div>
                  </div>
               </div>
             </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default Structure;