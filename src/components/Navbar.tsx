import { useState } from 'react';
import { motion } from 'motion/react';
import { Box, Sun, Moon } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import soloLogo from '../assets/solo_logo.png';

interface NavbarProps {
  isDarkMode: boolean;
  setIsDarkMode: (val: boolean) => void;
  activeSection?: string;
}

export default function Navbar({ isDarkMode, setIsDarkMode, activeSection }: NavbarProps) {
  const [logoError, setLogoError] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

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
          <button 
            onClick={() => setIsDarkMode(!isDarkMode)}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-brand-border bg-brand-card transition-colors hover:bg-brand-text/10"
          >
            {isDarkMode ? <Sun className="h-5 w-5 text-brand-muted" /> : <Moon className="h-5 w-5 text-brand-muted" />}
          </button>
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
