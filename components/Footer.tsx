import React from 'react';
import { Youtube, Linkedin, Instagram, Heart, Globe } from 'lucide-react';
import { NAV_ITEMS } from '../constants';

const LogoSVG = ({ className }: { className?: string }) => (
  <svg 
    viewBox="0 0 200 200" 
    className={className} 
    xmlns="http://www.w3.org/2000/svg"
  >
    <g transform="translate(-565, 20)">
      <path 
        d="M630 55 L665 110 L595 100 Z" 
        fill="#3b82f6" 
        stroke="#3b82f6" 
        strokeWidth="5" 
        strokeLinejoin="round"
      />
      <path 
        d="M660 10 L720 35 L670 80 Z" 
        fill="#f43f5e" 
        stroke="#f43f5e" 
        strokeWidth="5" 
        strokeLinejoin="round"
      />
      <path 
        d="M685 85 L735 135 L655 150 Z" 
        fill="#10b981" 
        stroke="#10b981" 
        strokeWidth="5" 
        strokeLinejoin="round"
      />
    </g>
  </svg>
);

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0f172a] text-slate-300 py-16 relative overflow-hidden border-t border-slate-800">
      {/* Subtle Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-20"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Brand & Logo */}
          <div className="space-y-6">
             <div className="h-16 w-16 bg-white/5 rounded-2xl p-2 border border-white/10">
                 <LogoSVG className="h-full w-full" />
             </div>
             <div>
                <div className="flex items-center gap-2 mb-2">
                    <span className="font-extrabold text-2xl text-white tracking-tight">
                    Prompt<span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-emerald-500 to-rose-500">Master</span>
                    </span>
                </div>
                <p className="text-slate-400 text-sm leading-relaxed max-w-xs">
                    Master the art of AI communication. A self-help learning platform powered by AspiraSys.
                </p>
            </div>
          </div>

          {/* Quick Links Column */}
          <div>
            <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-wider">Quick Links</h4>
            <ul className="space-y-3">
              {NAV_ITEMS.map((item) => (
                <li key={item.label}>
                  <a 
                    href={item.href} 
                    className="text-slate-400 hover:text-blue-500 transition-colors text-sm flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-600 group-hover:bg-blue-500 transition-colors"></span>
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
           {/* Resources Column */}
           <div>
            <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-wider">Resources</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-slate-400 hover:text-emerald-400 transition-colors text-sm">Documentation</a></li>
              <li><a href="#" className="text-slate-400 hover:text-emerald-400 transition-colors text-sm">API Reference</a></li>
              <li><a href="#" className="text-slate-400 hover:text-emerald-400 transition-colors text-sm">Community Forum</a></li>
            </ul>
          </div>

          {/* Social Icons */}
          <div>
            <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-wider">Connect With Us</h4>
            <div className="flex items-center gap-4">
                <a href="https://aspirasys.com" target="_blank" rel="noreferrer" className="w-12 h-12 rounded-xl bg-slate-800 flex items-center justify-center hover:bg-emerald-600 hover:text-white transition-all duration-300 group shadow-lg" title="Website">
                    <Globe className="w-5 h-5 text-slate-400 group-hover:text-white" />
                </a>
                <a href="https://in.linkedin.com/company/aspirasys" target="_blank" rel="noreferrer" className="w-12 h-12 rounded-xl bg-slate-800 flex items-center justify-center hover:bg-[#0077b5] hover:text-white transition-all duration-300 group shadow-lg" title="LinkedIn">
                    <Linkedin className="w-5 h-5 text-slate-400 group-hover:text-white" />
                </a>
                <a href="https://instagram.com/aspirasysofficial" target="_blank" rel="noreferrer" className="w-12 h-12 rounded-xl bg-slate-800 flex items-center justify-center hover:bg-gradient-to-tr hover:from-yellow-500 hover:via-red-500 hover:to-purple-500 hover:text-white transition-all duration-300 group shadow-lg" title="Instagram">
                    <Instagram className="w-5 h-5 text-slate-400 group-hover:text-white" />
                </a>
            </div>
            <p className="mt-6 text-xs text-slate-500">
               Follow AspiraSys for updates on AI & Tech.
            </p>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500">
          <p>© {new Date().getFullYear()} PromptMaster. All rights reserved.</p>
          <div className="flex items-center gap-6">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
          <p className="flex items-center gap-1">
            Made with <Heart className="w-3 h-3 text-rose-500 fill-current animate-pulse" /> in India
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;