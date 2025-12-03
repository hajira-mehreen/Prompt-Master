import React, { useState } from 'react';
import { PlayCircle, Zap, ArrowRight, X } from 'lucide-react';
import { Reveal } from './Reveal';

const Hero: React.FC = () => {
  const [showVideo, setShowVideo] = useState(false);

  return (
    <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden min-h-screen flex items-center bg-[#f8fafc]">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-grid-slate-200 [mask-image:linear-gradient(to_bottom,white,transparent)] -z-10" />
      
      {/* Vibrant Brand Color Blobs */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-500 rounded-full mix-blend-multiply filter blur-[120px] opacity-[0.08] animate-blob" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-rose-500 rounded-full mix-blend-multiply filter blur-[120px] opacity-[0.08] animate-blob animation-delay-2000" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          {/* Text Content */}
          <div className="flex-1 text-center lg:text-left z-10 max-w-2xl mx-auto lg:mx-0 pt-6">
            <Reveal>
               <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-blue-100 shadow-sm text-blue-600 text-xs font-extrabold uppercase tracking-widest mb-8 hover:scale-105 transition-transform cursor-default">
                 <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-500 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                  </span>
                 AI Skills for the Future
               </div>
            </Reveal>
            
            <Reveal delay={100}>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 mb-8 tracking-tight leading-tight">
                Master the Art of <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-rose-600 drop-shadow-sm pb-2 inline-block">
                  Prompt Engineering
                </span>
              </h1>
            </Reveal>
            
            <Reveal delay={200}>
              <p className="text-base sm:text-lg text-slate-600 mb-10 leading-relaxed font-medium lg:pr-12 max-w-xl mx-auto lg:mx-0">
                Stop guessing. Start commanding. Learn to structure <span className="text-slate-900 font-bold">Gold-Standard</span> prompts with precision using our interactive playbook tailored for the Indian context.
              </p>
            </Reveal>
            
            <Reveal delay={300}>
              <div className="flex flex-col sm:flex-row items-center gap-5 justify-center lg:justify-start">
                <a 
                  href="#practice"
                  className="w-full sm:w-auto px-8 py-3.5 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-2xl shadow-xl shadow-blue-600/20 hover:shadow-blue-600/40 hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2 group"
                >
                  <Zap className="w-5 h-5 fill-current" />
                  Start Practicing
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
                <button 
                  onClick={() => setShowVideo(true)}
                  className="w-full sm:w-auto px-8 py-3.5 bg-white text-slate-700 border border-slate-200 font-bold rounded-2xl hover:bg-slate-50 hover:border-blue-200 hover:text-blue-600 transition-all duration-300 flex items-center justify-center gap-2 group shadow-sm hover:shadow-md"
                >
                  <PlayCircle className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  Watch Explainer
                </button>
              </div>
            </Reveal>

            {/* Stats */}
            <Reveal delay={400}>
                <div className="mt-12 flex items-center justify-center lg:justify-start gap-8 opacity-80">
                    <p className="text-xs font-bold text-slate-500 uppercase tracking-widest flex items-center gap-2">
                       <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span> Designed for India
                    </p>
                    <p className="text-xs font-bold text-slate-500 uppercase tracking-widest flex items-center gap-2">
                       <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse"></span> 50+ Templates
                    </p>
                </div>
            </Reveal>
          </div>

          {/* Hero Image */}
          <div className="flex-1 w-full lg:w-auto relative perspective-1000 flex justify-center lg:justify-end">
            <Reveal delay={400}>
              <div className="relative z-10 animate-float max-w-lg">
                {/* Main Card */}
                <div className="relative rounded-[2rem] overflow-hidden shadow-2xl shadow-blue-900/20 border-[6px] border-white bg-slate-900 group">
                  <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/10 to-purple-600/10 z-10"></div>
                  <img 
                    src="https://i.pinimg.com/1200x/5c/09/78/5c09785b0db777096eadbf4e354d9a5e.jpg" 
                    alt="Digital Collaboration Handshake" 
                    className="w-full h-auto object-cover opacity-90 group-hover:scale-105 transition-transform duration-1000 ease-out"
                  />
                </div>
              </div>
              
              {/* Back Decor */}
              <div className="absolute -top-4 -right-4 w-full h-full border-2 border-dashed border-blue-300/50 rounded-[2.5rem] -z-10 animate-spin-slow [animation-duration:60s] max-w-lg"></div>
              <div className="absolute -bottom-8 -left-8 w-full h-full bg-gradient-to-tr from-blue-100 to-rose-100 rounded-[2.5rem] -z-20 -rotate-3 blur-3xl opacity-60 max-w-lg"></div>
            </Reveal>
          </div>
        </div>
      </div>

      {/* Video Modal - Pop Effect */}
      {showVideo && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-950/95 backdrop-blur-xl transition-all duration-300">
          <div className="relative w-full max-w-[400px] aspect-[9/16] bg-black rounded-3xl overflow-hidden shadow-2xl border border-white/10 animate-pop-in">
            {/* Close Button Outside/Overlapping for better UX */}
            <div className="absolute top-4 right-4 z-20">
               <button 
                onClick={() => setShowVideo(false)}
                className="p-2 bg-black/50 hover:bg-rose-500 rounded-full text-white transition-all duration-300 backdrop-blur-sm group"
               >
                <X className="w-6 h-6 group-hover:rotate-90 transition-transform" />
              </button>
            </div>
            
            <iframe 
              src="https://youtube.com/shorts/1y0GVzQXwKo?si=cMbho04MLPrdkTuP" 
              title="YouTube video player" 
              className="w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen
            ></iframe>
          </div>
          {/* Backdrop click to close */}
          <div className="absolute inset-0 -z-10" onClick={() => setShowVideo(false)}></div>
        </div>
      )}
    </section>
  );
};

export default Hero;