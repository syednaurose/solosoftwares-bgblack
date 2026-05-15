import { useState } from 'react';
import { motion } from 'motion/react';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, Mail, Lock, CheckCircle2, ChevronRight, Github } from 'lucide-react';

interface LoginPageProps {
  isDarkMode: boolean;
  setIsDarkMode: (val: boolean) => void;
}

export default function LoginPage({ isDarkMode, setIsDarkMode }: LoginPageProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API delay
    setTimeout(() => {
      navigate('/dashboard');
    }, 1000);
  };

  return (
    <div className="flex min-h-screen bg-brand-bg">
      {/* Back button */}
      <Link 
        to="/" 
        className="fixed left-8 top-8 z-50 flex items-center gap-2 text-sm font-medium text-brand-muted transition-colors hover:text-brand-text"
      >
        <ArrowLeft className="h-4 w-4" />
        Back to home
      </Link>

      {/* Left Column: Form */}
      <div className="flex w-full flex-col justify-center px-6 md:w-1/2 lg:w-[40%] xl:px-24">
        <div className="mx-auto w-full max-w-sm">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className={`mb-10 flex items-center transition-all duration-500 rounded-xl max-w-fit ${!isDarkMode ? 'bg-black px-4 py-1.5 shadow-lg shadow-black/10' : ''}`}>
              <img 
                src="/comp_logo.png" 
                alt="Solo Softwares Logo" 
                className={`h-12 w-auto object-contain transition-all ${!isDarkMode ? 'brightness-110' : ''}`}
                referrerPolicy="no-referrer"
              />
            </div>
            <h1 className="font-display text-4xl font-bold tracking-tight text-brand-text mb-2">Welcome back</h1>
            <p className="text-brand-muted mb-10">Access your SoloAccount enterprise dashboard</p>

            <form className="space-y-4" onSubmit={handleLogin}>
              <div className="space-y-1">
                <label className="text-xs font-bold uppercase tracking-widest text-brand-muted px-1">Email Address</label>
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-brand-muted" />
                  <input 
                    type="email" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="name@company.com"
                    required
                    className="w-full rounded-2xl border border-brand-border bg-brand-card py-4 pl-12 pr-4 text-brand-text placeholder:text-brand-muted focus:border-brand-text focus:outline-none transition-colors"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-xs font-bold uppercase tracking-widest text-brand-muted px-1">Password</label>
                <div className="relative">
                  <Lock className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-brand-muted" />
                  <input 
                    type="password" 
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••"
                    required
                    className="w-full rounded-2xl border border-brand-border bg-brand-card py-4 pl-12 pr-4 text-brand-text placeholder:text-brand-muted focus:border-brand-text focus:outline-none transition-colors"
                  />
                </div>
              </div>

              <div className="flex items-center justify-between px-1 py-2">
                <label className="flex items-center gap-2 cursor-pointer group">
                  <input type="checkbox" className="hidden peer" />
                  <div className="h-4 w-4 rounded border border-brand-border peer-checked:bg-brand-text peer-checked:border-brand-text transition-all" />
                  <span className="text-xs text-brand-muted group-hover:text-brand-text transition-colors">Remember for 30 days</span>
                </label>
                <button type="button" className="text-xs font-bold text-brand-text hover:underline underline-offset-4">Forgot password?</button>
              </div>

              <button 
                type="submit"
                disabled={isLoading}
                className="group mt-4 flex w-full items-center justify-between rounded-2xl bg-brand-text px-8 py-4 text-sm font-bold text-brand-bg transition-all hover:scale-[1.01] active:scale-[0.99] shadow-lg shadow-brand-text/10 disabled:opacity-50 disabled:hover:scale-100"
              >
                <span>{isLoading ? 'Verifying Credentials...' : 'Sign in to SoloAccount'}</span>
                {!isLoading && <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />}
              </button>

              <div className="relative my-8">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-brand-border" />
                </div>
                <div className="relative flex justify-center text-xs uppercase tracking-widest">
                  <span className="bg-brand-bg px-4 text-brand-muted">Or continue with</span>
                </div>
              </div>

              <button className="flex w-full items-center justify-center gap-3 rounded-2xl border border-brand-border bg-brand-card py-4 text-sm font-bold text-brand-text transition-colors hover:bg-brand-text/5">
                <Github className="h-5 w-5" />
                <span>Single Sign-On (SAML)</span>
              </button>
            </form>

            <p className="mt-12 text-center text-sm text-brand-muted">
              Don't have an account?{' '}
              <Link to="/" className="font-bold text-brand-text hover:underline hove:underline-offset-4 transition-all">
                Contact sales
              </Link>
            </p>
          </motion.div>
        </div>
      </div>

      {/* Right Column: Image/Banner */}
      <div className="hidden flex-1 relative bg-brand-card md:block">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-text/5 to-transparent z-10" />
        <img 
          src="/app_login.png" 
          alt="Login Visual" 
          className="h-full w-full object-cover object-center opacity-80"
          referrerPolicy="no-referrer"
        />
        
        {/* Quote overlay */}
        <div className="absolute bottom-20 left-12 right-12 z-20">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="rounded-[2.5rem] border border-brand-text/10 bg-brand-glass backdrop-blur-xl p-10 shadow-2xl shadow-black/20"
          >
            <div className="mb-6 flex gap-1">
              {[...Array(5)].map((_, i) => (
                <CheckCircle2 key={i} className="h-4 w-4 text-brand-text" fill="currentColor" />
              ))}
            </div>
            <p className="text-xl font-medium leading-relaxed text-brand-text mb-6">
              "SoloAccount has completely transformed how we handle our global reconciliation. The precision and speed are unparalleled."
            </p>
            <div className="flex items-center gap-4">
              <div className="h-12 w-12 rounded-full bg-brand-text/10 border border-brand-text/10" />
              <div>
                <p className="text-sm font-bold text-brand-text">Sarah Chen</p>
                <p className="text-xs text-brand-muted">Lead Controller, Neotech Global</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
