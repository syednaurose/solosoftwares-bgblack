import { useState } from 'react';
import { Box, Twitter, Linkedin, Facebook, Instagram, Github } from 'lucide-react';
import { Link } from 'react-router-dom';
import soloLogo from '../assets/solo_logo.png';

export default function Footer() {
  const [logoError, setLogoError] = useState(false);
  return (
    <footer className="border-t border-brand-border bg-brand-bg pt-20 pb-12">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-2 gap-12 md:grid-cols-4 lg:grid-cols-5">
          <div className="col-span-2 lg:col-span-2">
            <div className="flex items-center gap-3 mb-20 group">
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
            </div>
            <p className="max-w-xs text-sm leading-relaxed text-brand-muted">
              Architecting the next generation of financial infrastructure for global enterprises. Precision. Speed. Security.
            </p>
            <div className="mt-4 text-xs text-brand-muted space-y-1">
              <p>Founded by <span className="text-brand-text font-medium">M.S. Syed Masood</span></p>
              <p>Location: Kadayanallur</p>
              <p>WhatsApp: <a href="https://wa.me/919994120250" className="text-brand-text hover:underline">+91 9994120250</a></p>
            </div>
            <div className="mt-8 flex gap-4">
              <a href="#" className="flex h-10 w-10 items-center justify-center rounded-full border border-brand-border bg-brand-card transition-colors hover:border-brand-text/30 hover:bg-brand-text/10 text-brand-muted hover:text-brand-text">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="flex h-10 w-10 items-center justify-center rounded-full border border-brand-border bg-brand-card transition-colors hover:border-brand-text/30 hover:bg-brand-text/10 text-brand-muted hover:text-brand-text">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="flex h-10 w-10 items-center justify-center rounded-full border border-brand-border bg-brand-card transition-colors hover:border-brand-text/30 hover:bg-brand-text/10 text-brand-muted hover:text-brand-text">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="flex h-10 w-10 items-center justify-center rounded-full border border-brand-border bg-brand-card transition-colors hover:border-brand-text/30 hover:bg-brand-text/10 text-brand-muted hover:text-brand-text">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="flex h-10 w-10 items-center justify-center rounded-full border border-brand-border bg-brand-card transition-colors hover:border-brand-text/30 hover:bg-brand-text/10 text-brand-muted hover:text-brand-text">
                <Github className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="mb-6 text-xs font-bold uppercase tracking-widest text-brand-text">Product</h4>
            <ul className="space-y-4">
              <li><a href="https://soloaccount.solosoftwares.com/" target="_blank" rel="noopener noreferrer" className="text-sm text-brand-muted transition-colors hover:text-brand-text">SoloAccount</a></li>
              <li><Link to="/login" className="text-sm text-brand-muted transition-colors hover:text-brand-text">Portal Login</Link></li>
              <li><a href="#" className="text-sm text-brand-muted transition-colors hover:text-brand-text">Global Tax</a></li>
              <li><a href="#" className="text-sm text-brand-muted transition-colors hover:text-brand-text">AI Analytics</a></li>
              <li><a href="#" className="text-sm text-brand-muted transition-colors hover:text-brand-text">API Docs</a></li>
            </ul>
          </div>

          <div>
            <h4 className="mb-6 text-xs font-bold uppercase tracking-widest text-brand-text">Company</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-sm text-brand-muted transition-colors hover:text-brand-text">About Us</a></li>
              <li><a href="#" className="text-sm text-brand-muted transition-colors hover:text-brand-text">Careers</a></li>
              <li><a href="#" className="text-sm text-brand-muted transition-colors hover:text-brand-text">Press</a></li>
              <li><Link to="/#contact" className="text-sm text-brand-muted transition-colors hover:text-brand-text">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="mb-6 text-xs font-bold uppercase tracking-widest text-brand-text">Legal</h4>
            <ul className="space-y-4">
              <li><Link to="/privacy" className="text-sm text-brand-muted transition-colors hover:text-brand-text">Privacy Policy</Link></li>
              <li><a href="#" className="text-sm text-brand-muted transition-colors hover:text-brand-text">Terms of Service</a></li>
              <li><a href="#" className="text-sm text-brand-muted transition-colors hover:text-brand-text">Cookie Policy</a></li>
              <li><a href="#" className="text-sm text-brand-muted transition-colors hover:text-brand-text">Security</a></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-20 border-t border-brand-border pt-12 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-sm text-brand-muted text-center md:text-left">
            © 2026 Solo Softwares. All rights reserved. Precision engineered for the modern enterprise.
          </p>
          <div className="flex gap-8">
            <span className="flex items-center gap-2 text-xs text-brand-muted/40">
              <div className="h-1 w-1 rounded-full bg-emerald-500 animate-pulse" />
              System Status: Operational
            </span>
            <span className="text-xs text-brand-muted/40">v2.4.0-release</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
