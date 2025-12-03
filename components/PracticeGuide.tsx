import React from 'react';
import { Target, Shuffle, Beaker, PartyPopper, ArrowRight } from 'lucide-react';
import { Reveal } from './Reveal';

const PracticeGuide: React.FC = () => {
  return (
    <section className="py-20 bg-slate-950 relative overflow-hidden">
      {/* Abstract bg shapes */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-indigo-600 rounded-full mix-blend-screen filter blur-[100px] opacity-10 animate-blob"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-600 rounded-full mix-blend-screen filter blur-[100px] opacity-10 animate-blob animation-delay-4000"></div>
      <div className="absolute inset-0 bg-grid-white opacity-[0.03]"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <Reveal>
          <div className="text-center mb-16">
            <h2 className="text-4xl font-extrabold text-white mb-4">How to Practice Like a Pro</h2>
            <p className="text-slate-400 text-lg">Turn the library below into your personal playground.</p>
          </div>
        </Reveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
                { 
                    icon: Target, 
                    color: "text-cyan-400", 
                    bg: "bg-cyan-950/50", 
                    title: "Test Everywhere", 
                    desc: "Don't settle for one. Try ChatGPT, Gemini, and Claude side-by-side." 
                },
                { 
                    icon: Shuffle, 
                    color: "text-purple-400", 
                    bg: "bg-purple-950/50", 
                    title: "Compare & Tweak", 
                    desc: "Change one word at a time. See how 'Explain' vs 'Analyze' differs." 
                },
                { 
                    icon: Beaker, 
                    color: "text-pink-400", 
                    bg: "bg-pink-950/50", 
                    title: "Add Context", 
                    desc: "Add 'Indian Context' or 'For a 10 year old' to see magic happen." 
                },
                { 
                    icon: PartyPopper, 
                    color: "text-yellow-400", 
                    bg: "bg-yellow-950/50", 
                    title: "Have Fun", 
                    desc: "Prompting is creative. Make AI your study buddy, not just a search engine." 
                }
            ].map((item, i) => (
                <Reveal key={i} delay={i * 100}>
                    <div className="h-full bg-white/5 backdrop-blur-sm border border-white/10 p-6 rounded-2xl hover:bg-white/10 transition-colors group">
                        <div className={`w-12 h-12 rounded-xl ${item.bg} ${item.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                            <item.icon className="w-6 h-6" />
                        </div>
                        <h4 className="text-lg font-bold text-white mb-2">{item.title}</h4>
                        <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                </Reveal>
            ))}
        </div>
        
        <Reveal delay={500}>
            <div className="mt-16 text-center">
                 <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold shadow-lg shadow-indigo-500/25">
                    <span>🎉 Scroll down to the Prompt Library</span>
                    <ArrowRight className="w-4 h-4 animate-bounce" />
                 </div>
            </div>
        </Reveal>
      </div>
    </section>
  );
};

export default PracticeGuide;