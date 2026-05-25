import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Box, Sun, Moon, Palette, ChevronDown } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import soloLogo from '../assets/solo_logo.png';

interface NavbarProps {
  isDarkMode?: boolean;
  setIsDarkMode?: (val: boolean) => void;
  activeSection?: string;
  theme?: 'bright' | 'dark' | 'warm' | 'nordic';
  setTheme?: (theme: 'bright' | 'dark' | 'warm' | 'nordic') => void;
}

export default function Navbar({ isDarkMode, setIsDarkMode, activeSection, theme, setTheme }: NavbarProps) {
  const [logoError, setLogoError] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const navLinks = [
    { label: 'Features', href: isHomePage ? '#features' : '/#features', id: 'features' },
    { label: 'Product', href: '/product', id: 'product' },
    { label: 'Testimonials', href: isHomePage ? '#testimonials' : '/#testimonials', id: 'testimonials' },
    { label: 'Pricing', href: isHomePage ? '#pricing' : '/#pricing', id: 'pricing' },
    { label: 'Blog', href: isHomePage ? '#blog' : '/#blog', id: 'blog' },
    { label: 'FAQ', href: isHomePage ? '#faq' : '/#faq', id: 'faq' },
    { label: 'Contact', href: isHomePage ? '#contact' : '/#contact', id: 'contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-brand-border bg-brand-glass backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link to="/" className="flex items-center gap-3 group">
          <div className="flex items-center transition-all duration-500">
            {!logoError ? (
              <img 
                src={soloLogo} 
                alt="Solo Softwares" 
                className="h-20 w-auto object-contain transition-opacity group-hover:opacity-90"
                onError={() => setLogoError(true)}
                referrerPolicy="no-referrer"
              />
            ) : (
              <div className="flex h-16 w-16 items-center justify-center rounded-lg bg-brand-text">
                <Box className="h-10 w-10 text-brand-bg" />
              </div>
            )}
          </div>
          <div className="flex flex-col font-display leading-[0.9] group-hover:opacity-90 transition-opacity">
            <span className="text-2xl font-black tracking-[0.39em] text-brand-text mr-[-0.39em] uppercase">
              SOLO
            </span>
            <span className="text-[10px] font-bold tracking-[0.41em] text-brand-muted mr-[-0.41em] uppercase mt-1">
              SOFTWARES
            </span>
          </div>
        </Link>
        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => {
            const isActive = isHomePage && activeSection === link.id || location.pathname === link.href;
            
            const handleScroll = (e: React.MouseEvent) => {
              if (isHomePage && (link.href.startsWith('#') || link.href.startsWith('/#'))) {
                e.preventDefault();
                const targetId = link.id;
                const element = document.getElementById(targetId);
                if (element) {
                  const navbarHeight = 90; // offset for fixed navbar
                  const elementPosition = element.getBoundingClientRect().top + window.scrollY;
                  const offsetPosition = elementPosition - navbarHeight;
                  
                  window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                  });
                  window.history.pushState(null, '', `#${targetId}`);
                }
              }
            };

            return (
              <Link 
                key={link.id} 
                to={link.href} 
                onClick={handleScroll}
                className={`text-sm font-medium transition-colors ${
                  isActive ? 'text-brand-text underline underline-offset-8 decoration-brand-text/30' : 'text-brand-muted hover:text-brand-text'
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </div>
        <div className="flex items-center gap-4">
          {setTheme && theme ? (
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="flex items-center gap-2 rounded-full border border-brand-border bg-brand-card/70 px-4 py-2.5 text-xs font-semibold text-brand-text shadow-sm hover:bg-brand-card hover:border-brand-text/20 transition-all duration-200 cursor-pointer select-none"
              >
                <Palette className="h-4 w-4 text-emerald-500" />
                <span className="capitalize hidden sm:inline">{theme === 'bright' ? 'Bright Slate' : theme === 'dark' ? 'Midnight' : theme === 'warm' ? 'Warm Cotton' : 'Nordic Cold'}</span>
                <span className="capitalize sm:hidden">{theme === 'bright' ? 'Bright' : theme === 'dark' ? 'Midnight' : theme === 'warm' ? 'Warm' : 'Nordic'}</span>
                <ChevronDown className={`h-3 w-3 text-brand-muted transition-transform duration-300 ${isDropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              <AnimatePresence>
                {isDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    transition={{ duration: 0.15, ease: "easeOut" }}
                    className="absolute right-0 mt-2 w-48 rounded-2xl border border-brand-border bg-brand-glass backdrop-blur-2xl p-2.5 shadow-xl z-50 flex flex-col gap-1 select-none"
                    style={{ background: 'var(--brand-glass)' }}
                  >
                    {[
                      { id: 'bright', name: 'Bright Slate', desc: 'Sleek & Default', dot: 'bg-white border-slate-300' },
                      { id: 'dark', name: 'Midnight', desc: 'Luxury Dark', dot: 'bg-slate-950 border-slate-800' },
                      { id: 'warm', name: 'Warm Cotton', desc: 'Sepia Cozy', dot: 'bg-[#faf6ee] border-[#cbd5e1]' },
                      { id: 'nordic', name: 'Nordic Cold', desc: 'Frosty Breeze', dot: 'bg-[#eeefee] border-[#94a3b8]' },
                    ].map((t) => (
                      <button
                        key={t.id}
                        onClick={() => {
                          setTheme(t.id as any);
                          setIsDropdownOpen(false);
                        }}
                        className={`flex items-center gap-3 w-full text-left p-2 rounded-xl transition-all cursor-pointer ${
                          theme === t.id 
                            ? 'bg-brand-text/5 border border-brand-border/80 font-bold' 
                            : 'hover:bg-brand-text/5 border border-transparent font-normal'
                        }`}
                      >
                        <span className={`h-4 w-4 rounded-full border shadow-sm ${t.dot}`} />
                        <div className="flex flex-col">
                          <span className="text-xs text-brand-text font-medium leading-none mb-0.5">{t.name}</span>
                          <span className="text-[9px] text-brand-muted font-light leading-none">{t.desc}</span>
                        </div>
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ) : (
            <button 
              onClick={() => setIsDarkMode?.(!isDarkMode)}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-brand-border bg-brand-card transition-colors hover:bg-brand-text/10 cursor-pointer"
            >
              {isDarkMode ? <Sun className="h-5 w-5 text-brand-muted" /> : <Moon className="h-5 w-5 text-brand-muted" />}
            </button>
          )}
          <Link to="/login" className="text-sm font-medium text-brand-muted transition-colors hover:text-brand-text">Login</Link>
          <a 
            href="https://soloaccount.solosoftwares.com/" 
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-brand-text px-5 py-2 text-sm font-semibold text-brand-bg transition-transform hover:scale-105 active:scale-95"
          >
            Get Started
          </a>
        </div>
      </div>
    </nav>
  );
}
