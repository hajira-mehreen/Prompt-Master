import React, { useState } from 'react';
import { Copy, Check, Sparkles, BookOpen } from 'lucide-react';
import { PROMPT_CATEGORIES } from '../constants';
import { Reveal } from './Reveal';

const PromptCard: React.FC<{ text: string; index: number; colorTheme: string; borderColor: string }> = ({ text, index, colorTheme, borderColor }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = (e: React.MouseEvent) => {
    e.stopPropagation();
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className={`group relative h-full bg-white rounded-3xl border border-slate-100 p-8 shadow-lg shadow-slate-200/50 hover:shadow-2xl hover:shadow-${borderColor}/20 hover:-translate-y-2 transition-all duration-500 flex flex-col overflow-hidden glass-creative hover:border-${borderColor}/40`}>
      {/* Top Border Gradient */}
      <div className={`absolute top-0 left-0 w-full h-1.5 ${colorTheme} opacity-80 group-hover:opacity-100 transition-opacity`}></div>
      
      {/* Background Decor */}
      <div className={`absolute -right-10 -top-10 w-40 h-40 ${colorTheme.replace('bg-', 'bg-opacity-[0.03] bg-')} rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700`}></div>

      <div className="flex items-center justify-between mb-6 relative z-10">
        <div className={`w-10 h-10 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center text-base font-bold text-slate-400 group-hover:bg-slate-900 group-hover:text-white transition-colors duration-500 shadow-sm`}>
            {index + 1}
        </div>
        <button
            onClick={handleCopy}
            className={`flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 shadow-sm ${
            copied 
                ? 'bg-green-100 text-green-700 border border-green-200' 
                : 'bg-slate-50 text-slate-500 border border-slate-200 hover:bg-slate-900 hover:text-white hover:border-slate-900'
            }`}
        >
            {copied ? <Check className="w-3 h-3" /> : <Copy className="w-3 h-3" />}
            {copied ? 'Copied' : 'Copy'}
        </button>
      </div>

      <div className="flex-grow relative z-10">
          <p className="text-slate-700 font-medium text-[1.1rem] leading-relaxed tracking-tight group-hover:text-slate-900 transition-colors duration-300">
            {text}
          </p>
      </div>
      
      <div className="mt-8 relative z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
         <div className={`h-1 w-full rounded-full ${colorTheme} opacity-20 group-hover:opacity-100 transition-all shadow-[0_0_10px_currentColor]`}></div>
      </div>
    </div>
  );
};

const PromptLibrary: React.FC = () => {
  const [activeCategoryId, setActiveCategoryId] = useState(PROMPT_CATEGORIES[0].id);

  const activeCategory = PROMPT_CATEGORIES.find(c => c.id === activeCategoryId) || PROMPT_CATEGORIES[0];
  const ActiveIcon = activeCategory.icon;

  // Refined Color Logic with new Palette
  const getThemeData = (index: number) => {
      const themes = [
          { bg: 'bg-blue-600', gradient: 'from-blue-600 to-indigo-400', border: 'blue-500', text: 'text-blue-600' },
          { bg: 'bg-rose-500', gradient: 'from-rose-500 to-orange-400', border: 'rose-500', text: 'text-rose-500' },
          { bg: 'bg-emerald-500', gradient: 'from-emerald-500 to-teal-400', border: 'emerald-500', text: 'text-emerald-500' },
      ];
      return themes[index % themes.length];
  };

  return (
    <section id="practice" className="py-24 bg-[#f8fafc] relative overflow-hidden min-h-screen">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-[500px] bg-gradient-to-b from-white to-[#f1f5f9]"></div>
      
      {/* Colored Blobs */}
      <div className="absolute right-0 top-1/4 w-[800px] h-[800px] bg-blue-600 rounded-full mix-blend-multiply filter blur-[150px] opacity-[0.04] animate-blob"></div>
      <div className="absolute left-0 bottom-1/4 w-[600px] h-[600px] bg-rose-600 rounded-full mix-blend-multiply filter blur-[150px] opacity-[0.04] animate-blob animation-delay-2000"></div>

      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <Reveal>
          <div className="flex flex-col items-center text-center mb-20">
            <span className="mb-6 inline-flex items-center gap-2 px-5 py-2 rounded-full border border-blue-500/20 bg-blue-500/5 text-xs font-extrabold uppercase tracking-widest text-blue-600">
               <BookOpen className="w-4 h-4" />
               The Playbook
            </span>
            <h2 className="text-5xl sm:text-7xl font-extrabold text-slate-900 mb-6 tracking-tight">
              Prompting <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-emerald-500 to-rose-500">Collection</span>
            </h2>
            <p className="text-2xl text-slate-500 max-w-3xl font-light">
              Expertly crafted templates. Categorized for your success.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
            
            {/* LEFT MENU BOARD */}
            <div className="lg:col-span-3 lg:sticky lg:top-32 z-20">
                <div className="bg-white/80 backdrop-blur-xl border border-white/60 shadow-2xl shadow-slate-200/50 rounded-[2rem] p-4 max-h-[75vh] overflow-y-auto custom-scrollbar ring-1 ring-slate-100">
                    <div className="px-5 py-5 mb-2 border-b border-slate-100 flex items-center justify-between">
                        <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest">Select Topic</h4>
                        <span className="text-[10px] font-bold bg-slate-100 px-2 py-1 rounded text-slate-500">{PROMPT_CATEGORIES.length}</span>
                    </div>
                    <div className="space-y-2 mt-2">
                        {PROMPT_CATEGORIES.map((category, idx) => {
                            const isActive = activeCategoryId === category.id;
                            const theme = getThemeData(idx);
                            return (
                                <button
                                    key={category.id}
                                    onClick={() => setActiveCategoryId(category.id)}
                                    className={`w-full text-left flex items-center gap-4 px-5 py-5 rounded-2xl transition-all duration-300 group relative overflow-hidden ${
                                        isActive 
                                            ? 'bg-slate-900 text-white shadow-xl shadow-slate-900/20 scale-[1.02]' 
                                            : 'text-slate-600 hover:bg-white hover:shadow-lg hover:shadow-slate-200/50 hover:text-blue-600'
                                    }`}
                                >
                                    <span className={`text-base font-bold w-6 flex-shrink-0 ${isActive ? 'text-slate-500' : 'text-slate-300 group-hover:text-blue-500'}`}>
                                        {(idx + 1).toString().padStart(2, '0')}
                                    </span>
                                    <span className={`font-bold text-base truncate flex-grow relative z-10 ${isActive ? 'text-white' : ''}`}>{category.title}</span>
                                    {isActive && (
                                      <div className={`w-2 h-2 rounded-full ${theme.bg} shadow-[0_0_10px_currentColor] animate-pulse`}></div>
                                    )}
                                </button>
                            )
                        })}
                    </div>
                </div>
            </div>

            {/* RIGHT CONTENT DISPLAY */}
            <div className="lg:col-span-9">
                <div className="min-h-[600px] flex flex-col">
                    
                    {/* Header for Active Category */}
                    <Reveal key={activeCategory.id + 'header'}>
                        <div className="flex flex-col md:flex-row md:items-end gap-8 mb-12 pl-2 border-b border-slate-200 pb-10">
                            <div className="relative group">
                                <div className={`absolute inset-0 ${getThemeData(PROMPT_CATEGORIES.findIndex(c => c.id === activeCategoryId)).bg} blur-3xl opacity-20 rounded-full group-hover:opacity-30 transition-opacity`}></div>
                                <div className={`relative w-24 h-24 rounded-[2rem] ${getThemeData(PROMPT_CATEGORIES.findIndex(c => c.id === activeCategoryId)).bg} flex items-center justify-center shadow-2xl text-white transform -rotate-3 group-hover:rotate-0 transition-transform duration-500`}>
                                    <ActiveIcon className="w-10 h-10" />
                                </div>
                            </div>
                            <div>
                                <h3 className={`text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r ${getThemeData(PROMPT_CATEGORIES.findIndex(c => c.id === activeCategoryId)).gradient} mb-3 tracking-tight`}>
                                    {activeCategory.title}
                                </h3>
                                <p className="text-slate-500 font-medium text-xl max-w-2xl">
                                    Copy these prompts and tweak them to fit your specific needs.
                                </p>
                            </div>
                        </div>
                    </Reveal>

                    {/* Prompts Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 pb-10"> 
                        {activeCategory.prompts.slice(0, 3).map((prompt, idx) => (
                            <Reveal key={`${activeCategory.id}-${prompt.id}`} delay={idx * 150}>
                                <PromptCard 
                                    text={prompt.text} 
                                    index={idx} 
                                    colorTheme={getThemeData(PROMPT_CATEGORIES.findIndex(c => c.id === activeCategoryId)).bg}
                                    borderColor={getThemeData(PROMPT_CATEGORIES.findIndex(c => c.id === activeCategoryId)).border}
                                />
                            </Reveal>
                        ))}
                    </div>
                </div>
            </div>

        </div>
      </div>
    </section>
  );
};

export default PromptLibrary;