import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { NAV_ITEMS } from '../constants';

const NewLogo = ({ className }: { className?: string }) => (
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

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="fixed top-0 w-full z-50 flex justify-center px-4 pt-4">
      <nav 
        className={`w-full max-w-7xl transition-all duration-300 rounded-2xl ${
          scrolled 
            ? 'glass shadow-lg py-4 px-6' 
            : 'bg-transparent py-4 px-6'
        }`}
      >
        <div className="flex justify-between items-center">
          
          {/* LEFT: Logo */}
          <div className="flex items-center gap-3 lg:gap-4 cursor-pointer group" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
             <div className="h-10 w-10 lg:h-12 lg:w-12 transition-transform duration-300 drop-shadow-md">
                <NewLogo className="h-full w-full" />
             </div>
             <span className="hidden sm:block font-extrabold text-2xl lg:text-3xl tracking-tight text-slate-800">
               Prompt<span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-emerald-500 to-rose-500">Master</span>
             </span>
          </div>

          {/* CENTER: Navigation Links (Desktop) */}
          <div className="hidden lg:flex items-center space-x-1 absolute left-1/2 transform -translate-x-1/2">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="text-slate-600 hover:text-blue-600 font-bold px-4 py-2 rounded-full hover:bg-slate-50/80 transition-all duration-200 text-base tracking-wide"
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* RIGHT: CTA (Desktop) */}
          <div className="hidden lg:flex items-center gap-6">
             <a 
              href="#practice"
              onClick={(e) => handleNavClick(e, '#practice')}
              className="px-6 py-2.5 bg-slate-900 text-white rounded-full text-base font-bold shadow-lg shadow-slate-900/20 hover:shadow-slate-900/40 hover:-translate-y-0.5 transition-all flex items-center gap-2"
            >
              Start Now
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2.5 rounded-full bg-white/80 backdrop-blur-md shadow-sm text-slate-900 hover:bg-white focus:outline-none transition-all border border-slate-200"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown */}
        {isOpen && (
          <div className="lg:hidden absolute top-full left-0 w-full px-2 mt-2">
            <div className="bg-slate-900/95 backdrop-blur-xl rounded-3xl shadow-2xl border border-slate-800 p-4 space-y-2 overflow-hidden">
               <div className="flex items-center justify-center gap-2 py-4 mb-2 border-b border-slate-800">
                  <div className="h-10 w-10">
                     <NewLogo className="h-full w-full" />
                  </div>
                  <span className="font-bold text-2xl text-white">PromptMaster</span>
               </div>

              {NAV_ITEMS.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="block px-4 py-3 rounded-xl text-center text-lg font-medium text-slate-300 hover:text-white hover:bg-white/10 transition-all"
                  onClick={(e) => handleNavClick(e, item.href)}
                >
                  {item.label}
                </a>
              ))}
              <a 
                href="#practice"
                className="block mx-12 py-3 rounded-xl text-base font-bold text-white bg-gradient-to-r from-blue-600 to-rose-600 text-center mt-4 shadow-lg transition-all"
                onClick={(e) => handleNavClick(e, '#practice')}
              >
                Start Practicing
              </a>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;