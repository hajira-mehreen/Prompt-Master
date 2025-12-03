import React from 'react';
import { ExternalLink, Bot, Sparkles, Zap, Brain, Code2, ArrowUpRight } from 'lucide-react';
import { Reveal } from './Reveal';
import { LLM_DATA } from '../constants';

const getCardStyles = (type: string) => {
    switch(type) {
        case 'openai': return { 
            gradient: 'from-emerald-500 to-teal-600', 
            shadow: 'shadow-emerald-500/30',
            border: 'border-emerald-400/30',
            bg: 'bg-emerald-950',
            iconColor: 'text-emerald-100',
            hoverShadow: 'group-hover:shadow-emerald-500/50'
        };
        case 'google': return { 
            gradient: 'from-blue-500 to-indigo-600', 
            shadow: 'shadow-blue-500/30',
            border: 'border-blue-400/30',
            bg: 'bg-blue-950',
            iconColor: 'text-blue-100',
            hoverShadow: 'group-hover:shadow-blue-500/50'
        };
        case 'anthropic': return { 
            gradient: 'from-orange-500 to-amber-600', 
            shadow: 'shadow-orange-500/30',
            border: 'border-orange-400/30',
            bg: 'bg-orange-950',
            iconColor: 'text-orange-100',
            hoverShadow: 'group-hover:shadow-orange-500/50'
        };
        case 'xai': return { 
            gradient: 'from-slate-700 to-slate-900', 
            shadow: 'shadow-slate-500/30',
            border: 'border-slate-400/30',
            bg: 'bg-slate-950',
            iconColor: 'text-white',
            hoverShadow: 'group-hover:shadow-white/20'
        };
        default: return { 
            gradient: 'from-violet-500 to-purple-600', 
            shadow: 'shadow-violet-500/30',
            border: 'border-violet-400/30',
            bg: 'bg-violet-950',
            iconColor: 'text-violet-100',
            hoverShadow: 'group-hover:shadow-violet-500/50'
        };
    }
}

const getIcon = (type: string) => {
    switch(type) {
        case 'openai': return <Bot className="w-8 h-8" />;
        case 'google': return <Sparkles className="w-8 h-8" />;
        case 'anthropic': return <Brain className="w-8 h-8" />;
        case 'xai': return <Zap className="w-8 h-8" />;
        default: return <Code2 className="w-8 h-8" />;
    }
}

const LLMSection: React.FC = () => {
  return (
    <section id="models" className="py-32 bg-slate-900 relative overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute inset-0 bg-slate-950"></div>
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-800 via-slate-950 to-black opacity-60"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <Reveal>
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6">Top 5 Powerhouse Models</h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              Choose your weapon. Each AI has a unique "personality" and strength.
              <br />
              <span className="inline-block mt-4 px-4 py-1.5 bg-white/10 border border-white/20 text-white text-sm font-bold rounded-full backdrop-blur-md">
                 🏆 Recommendation: Test across all 3 major platforms
              </span>
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {LLM_DATA.map((model, index) => {
            const styles = getCardStyles(model.iconType);
            return (
              <Reveal key={model.name} delay={index * 100}>
                <a 
                   href={model.link} 
                   target="_blank" 
                   rel="noreferrer"
                   className={`relative block h-full rounded-3xl p-[2px] transition-all duration-500 hover:-translate-y-4 hover:scale-105 group overflow-hidden ${styles.hoverShadow} shadow-2xl`}
                >
                  {/* Animated Border Gradient */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${styles.gradient} opacity-40 group-hover:opacity-100 transition-opacity duration-500`}></div>
                  
                  {/* Inner Card */}
                  <div className={`relative h-full ${styles.bg} rounded-[22px] p-6 flex flex-col backdrop-blur-xl border ${styles.border} group-hover:border-transparent transition-colors`}>
                    
                    {/* Header */}
                    <div className="flex justify-between items-start mb-6">
                        <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${styles.gradient} flex items-center justify-center ${styles.iconColor} shadow-lg shadow-black/20 group-hover:scale-110 transition-transform duration-500 ring-2 ring-white/10 group-hover:ring-white/30`}>
                            {getIcon(model.iconType)}
                        </div>
                        <div className="p-2 bg-white/5 rounded-full hover:bg-white/20 transition-colors">
                            <ArrowUpRight className="w-4 h-4 text-white/70" />
                        </div>
                    </div>
                    
                    <h3 className="text-xl font-bold text-white mb-1 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-slate-300 transition-all">{model.name}</h3>
                    <p className="text-xs font-bold uppercase tracking-widest text-white/50 mb-4">{model.company}</p>
                    
                    <p className="text-sm text-slate-300 leading-relaxed mb-6 border-t border-white/10 pt-4 flex-grow font-medium group-hover:text-white transition-colors">
                        {model.features}
                    </p>
                    
                    <div className="mt-auto">
                        <span className={`inline-block px-3 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider bg-white/10 text-white/80 border border-white/10 group-hover:bg-white group-hover:text-slate-900 transition-all`}>
                            Try Now
                        </span>
                    </div>
                  </div>
                </a>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default LLMSection;