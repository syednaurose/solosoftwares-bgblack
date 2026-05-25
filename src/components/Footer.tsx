import { useState } from 'react';
import { Box } from 'lucide-react';
import { Link } from 'react-router-dom';
import soloLogo from '../assets/solo_logo.png';

export default function Footer() {
  const [logoError, setLogoError] = useState(false);
  return (
    <footer className="border-t border-brand-border bg-brand-bg pt-20 pb-12">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-2 gap-12 md:grid-cols-4 lg:grid-cols-5">
          <div className="col-span-2 lg:col-span-2">
            <Link 
              to="/" 
              onClick={() => {
                window.scrollTo({
                  top: 0,
                  behavior: 'smooth'
                });
              }}
              className="flex items-center gap-3 mb-20 group cursor-pointer"
            >
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
            <p className="max-w-xs text-sm leading-relaxed text-brand-muted">
              Architecting the next generation of financial infrastructure for global enterprises. Precision. Speed. Security.
            </p>
            <div className="mt-4 text-xs text-brand-muted space-y-1">
              <p>Founded by <span className="text-brand-text font-medium">M.S. Syed Masood</span></p>
              <p>Location: Kadayanallur</p>
              <p>WhatsApp: <a href="https://wa.me/919994120250" className="text-brand-text hover:underline">+91 9994120250</a></p>
            </div>
            <div className="mt-8 flex flex-wrap gap-2.5">
              {/* GitHub */}
              <a 
                href="https://github.com/solosoftwares" 
                target="_blank" 
                rel="noopener noreferrer"
                title="GitHub"
                className="flex h-9 w-9 items-center justify-center rounded-xl border border-brand-border bg-brand-card transition-all duration-300 hover:border-brand-text/30 hover:bg-brand-text/10 text-brand-muted hover:text-brand-text hover:scale-105"
              >
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.579.688.481C19.137 20.162 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
                </svg>
              </a>

              {/* LinkedIn */}
              <a 
                href="https://www.linkedin.com/in/syedmasood-solo" 
                target="_blank" 
                rel="noopener noreferrer"
                title="LinkedIn"
                className="flex h-9 w-9 items-center justify-center rounded-xl border border-brand-border bg-brand-card transition-all duration-300 hover:border-[#0077b5]/50 hover:bg-[#0077b5]/10 text-brand-muted hover:text-[#0077b5] hover:scale-105"
              >
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>

              {/* X */}
              <a 
                href="https://x.com/masood_solo" 
                target="_blank" 
                rel="noopener noreferrer"
                title="X"
                className="flex h-9 w-9 items-center justify-center rounded-xl border border-brand-border bg-brand-card transition-all duration-300 hover:border-brand-text/30 hover:bg-brand-text/10 text-brand-muted hover:text-brand-text hover:scale-105"
              >
                <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>

              {/* Facebook */}
              <a 
                href="https://facebook.com/solosoftwares" 
                target="_blank" 
                rel="noopener noreferrer"
                title="Facebook"
                className="flex h-9 w-9 items-center justify-center rounded-xl border border-brand-border bg-brand-card transition-all duration-300 hover:border-[#1877f2]/50 hover:bg-[#1877f2]/10 text-brand-muted hover:text-[#1877f2] hover:scale-105"
              >
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c4.56-.93 8-4.96 8-9.75z" />
                </svg>
              </a>

              {/* Instagram */}
              <a 
                href="https://instagram.com/masood_solo" 
                target="_blank" 
                rel="noopener noreferrer"
                title="Instagram"
                className="flex h-9 w-9 items-center justify-center rounded-xl border border-brand-border bg-brand-card transition-all duration-300 hover:border-[#e1306c]/50 hover:bg-[#e1306c]/10 text-brand-muted hover:text-[#e1306c] hover:scale-105"
              >
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
              </a>

              {/* Dev.to */}
              <a 
                href="https://dev.to/solosoftwares" 
                target="_blank" 
                rel="noopener noreferrer"
                title="Dev.to"
                className="flex h-9 w-9 items-center justify-center rounded-xl border border-brand-border bg-brand-card transition-all duration-300 hover:border-brand-text/30 hover:bg-brand-text/10 text-brand-muted hover:text-brand-text hover:scale-105"
              >
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M7.42 10.05c-.18-.16-.46-.23-.84-.23H6l-.02 4.38h.61c.38 0 .65-.07.82-.23.16-.16.24-.42.24-.77v-2.37c0-.36-.08-.62-.23-.78zm8.13 1.15H14v1.04h1.37v1.11H14v1.1h1.59v1.11H12.4l-.02-5.71h3.17v1.35zm3.17 2.49c0 .41-.1.74-.3 1.01-.2.27-.51.4-.95.4-.42 0-.72-.13-.93-.4-.2-.27-.3-.6-.3-1.01v-3.41h1.49v3.41c0 .12.02.21.06.27.04.06.1.09.18.09.09 0 .15-.03.19-.09.04-.06.06-.15.06-.27v-3.41h1.5v3.41zM2 4v16a2 2 0 002 2h16a2 2 0 002-2V4a2 2 0 00-2-2H4a2 2 0 00-2 2zm8.03 9.4c0 .76-.23 1.34-.69 1.72-.46.38-1.14.58-2.04.58H3.77l-.02-5.71h1.55c.9 0 1.58.2 2.04.59.46.39.69.97.69 1.75v1.07z" />
                </svg>
              </a>

              {/* YouTube */}
              <a 
                href="https://youtube.com" 
                target="_blank" 
                rel="noopener noreferrer"
                title="YouTube"
                className="flex h-9 w-9 items-center justify-center rounded-xl border border-brand-border bg-brand-card transition-all duration-300 hover:border-[#ff0000]/50 hover:bg-[#ff0000]/10 text-brand-muted hover:text-[#ff0000] hover:scale-105"
              >
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M23.498 6.163a3.003 3.003 0 0 0-2.11-2.108C19.52 3.5 12 3.5 12 3.5s-7.52 0-9.388.555A3.002 3.002 0 0 0 .502 6.163C0 8.03 0 12 0 12s0 3.97.502 5.837a3.003 3.003 0 0 0 2.11 2.108C4.48 20.5 12 20.5 12 20.5s7.52 0 9.388-.555a3.003 3.003 0 0 0 2.11-2.108C24 15.97 24 12 24 12s0-3.97-.502-5.837zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>

              {/* Reddit */}
              <a 
                href="https://reddit.com/user/solosoftwares" 
                target="_blank" 
                rel="noopener noreferrer"
                title="Reddit"
                className="flex h-9 w-9 items-center justify-center rounded-xl border border-brand-border bg-brand-card transition-all duration-300 hover:border-[#ff4500]/50 hover:bg-[#ff4500]/10 text-brand-muted hover:text-[#ff4500] hover:scale-105"
              >
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.477 2 2 6.477 2 12c0 5.523 4.477 10 10 10s10-4.477 10-10c0-5.523-4.477-10-10-10zm1.03 14.354c-1.033 0-2.022-.262-2.871-.735.08.004.162.007.245.007a4.956 4.956 0 003.586-1.52c.075-.084.157-.168.232-.257a4.103 4.103 0 011.83 1.586 2.049 2.049 0 01-1.03 1.25c-.512.247-1.12.385-1.737.385zm4.846-3.8c-.067 0-.131.011-.197.022a6.389 6.389 0 00-2.613-1.034 10.61 10.61 0 00.37-1.373c.112.062.24.1.377.1a.81.81 0 10-.81-.809c0 .044.004.088.012.13a11.97 11.97 0 01-.43 1.55c-1.127-.08-2.28-.117-3.411-.117-1.134 0-2.287.037-3.417.117-.116-.513-.263-1.036-.433-1.55a.77.77 0 00.015-.13a.81.81 0 10-.81.81c.138 0 .262-.038.374-.1a10.63 10.63 0 00.374 1.373 6.31 6.31 0 00-2.614 1.034c-.066-.011-.13-.022-.197-.022a1.868 1.868 0 00-1.859 1.858c0 .874.606 1.6 1.42 1.794-.038.258-.06.52-.06.786 0 2.502 3.1 4.53 6.927 4.53 3.827 0 6.927-2.028 6.927-4.53 0-.265-.022-.527-.06-.786.815-.194 1.42-.92 1.42-1.794a1.868 1.868 0 00-1.859-1.858z" />
                </svg>
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="mb-6 text-xs font-bold uppercase tracking-widest text-brand-text">Product</h4>
            <ul className="space-y-4">
              <li><a href="https://soloaccount.solosoftwares.com/" target="_blank" rel="noopener noreferrer" className="text-sm text-brand-muted transition-colors hover:text-brand-text">SoloAccount</a></li>
              <li><a href="https://soloaccount.solosoftwares.com/" className="text-sm text-brand-muted transition-colors hover:text-brand-text">Portal Login</a></li>
              <li><Link to="/ai-analytics" className="text-sm text-brand-muted transition-colors hover:text-brand-text">AI Analytics</Link></li>
              <li><Link to="/api-docs" className="text-sm text-brand-muted transition-colors hover:text-brand-text">API Docs</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="mb-6 text-xs font-bold uppercase tracking-widest text-brand-text">Company</h4>
            <ul className="space-y-4">
              <li><Link to="/about" className="text-sm text-brand-muted transition-colors hover:text-brand-text">About Us</Link></li>
              <li><Link to="/careers" className="text-sm text-brand-muted transition-colors hover:text-brand-text">Careers</Link></li>
              <li><Link to="/press" className="text-sm text-brand-muted transition-colors hover:text-brand-text">Press</Link></li>
              <li><Link to="/contact" className="text-sm text-brand-muted transition-colors hover:text-brand-text">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="mb-6 text-xs font-bold uppercase tracking-widest text-brand-text">Legal</h4>
            <ul className="space-y-4">
              <li><Link to="/privacy" className="text-sm text-brand-muted transition-colors hover:text-brand-text">Privacy Policy</Link></li>
              <li><Link to="/terms" className="text-sm text-brand-muted transition-colors hover:text-brand-text">Terms of Service</Link></li>
              <li><Link to="/cookie-policy" className="text-sm text-brand-muted transition-colors hover:text-brand-text">Cookie Policy</Link></li>
              <li><Link to="/security" className="text-sm text-brand-muted transition-colors hover:text-brand-text">Security</Link></li>
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
