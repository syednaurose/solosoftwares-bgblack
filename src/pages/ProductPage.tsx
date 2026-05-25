import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ArrowLeft, 
  ArrowRight, 
  Laptop, 
  Tablet, 
  Smartphone, 
  Check, 
  Globe, 
  Shield, 
  Zap, 
  BarChart3, 
  Users2, 
  Cpu, 
  Wallet, 
  Receipt, 
  Sparkles, 
  TrendingUp, 
  Target, 
  Flag, 
  CreditCard, 
  PiggyBank, 
  Users, 
  Command, 
  FileText, 
  Landmark, 
  Code2, 
  Database, 
  Cloud, 
  Mail, 
  Phone, 
  MapPin, 
  ExternalLink, 
  Lock, 
  Heart,
  Layers,
  Terminal,
  Settings
} from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

import appLogin from '../assets/app_login.png';
import dashboard from '../assets/dashboard.png';
import inputFile2 from '../assets/input_file_2.png';
import inputFile3 from '../assets/input_file_3.png';
import inputFile4 from '../assets/input_file_4.png';
import inputFile5 from '../assets/input_file_5.png';
import soloLogo from '../assets/solo_logo.png';

interface ProductPageProps {
  isDarkMode: boolean;
  setIsDarkMode: (val: boolean) => void;
  theme?: 'bright' | 'dark' | 'warm' | 'nordic';
  setTheme?: (theme: 'bright' | 'dark' | 'warm' | 'nordic') => void;
}

const APP_VERSION = '0.2.0';

const screens = [
  {
    id: 'login',
    title: 'Secure Portal',
    description: 'Enterprise-grade authentication with SSO, multi-factor security, and granular access controls for your entire team.',
    icon: <Shield className="h-6 w-6" />,
    image: appLogin,
    features: ['SAML/SSO Integration', 'Multi-factor Auth', 'Role-based Access', 'Device Management']
  },
  {
    id: 'dashboard',
    title: 'Executive Dashboard',
    description: 'A birds-eye view of your global financial health. Real-time metrics, liquidity ratios, and automated cash flow forecasting.',
    icon: <BarChart3 className="h-6 w-6" />,
    image: dashboard,
    features: ['Total Revenue Tracking', 'Expense Breakdown', 'Cash Flow Forecasts', 'Entity Performance Overlay']
  },
  {
    id: 'reconciliation',
    title: 'Global Reconciliation',
    description: 'Automated matching engine that processes millions of transactions across diverse accounts and currencies.',
    icon: <Zap className="h-6 w-6" />,
    image: inputFile2,
    features: ['Auto-Matching System', 'Discrepancy Resolution', 'Audit-Ready Reporting', 'Bank-to-Book Sync']
  },
  {
    id: 'treasury',
    title: 'Treasury Analytics',
    description: 'Sophisticated treasury management for global operations, optimizing liquidity and minimizing risk.',
    icon: <BarChart3 className="h-6 w-6" />,
    image: inputFile3,
    features: ['Liquidity Buffers', 'Investment Tracking', 'Hedge Management', 'Currency Risk Reports']
  },
  {
    id: 'cashflow',
    title: 'Live Cashflow',
    description: 'Real-time visibility into incoming and outgoing funds with predictive modeling for future capital needs.',
    icon: <BarChart3 className="h-6 w-6" />,
    image: inputFile4,
    features: ['Velocity Metrics', 'Burn Rate Analysis', 'Forecast Comparisons', 'Cash Runway View']
  },
  {
    id: 'liquidity',
    title: 'Liquidity Management',
    description: 'Deep visibility into cash positions across all global regions and bank accounts.',
    icon: <Shield className="h-6 w-6" />,
    image: inputFile5,
    features: ['Concentration Reports', 'Sweeping Automation', 'Pool Visibility', 'Intra-day Positions']
  },
  {
    id: 'ledger',
    title: 'Smart Ledger',
    description: 'The automated nervous system of your accounting. Machine learning categorization and instant reconciliation.',
    icon: <Cpu className="h-6 w-6" />,
    features: ['Auto-categorization', 'Duplicate Detection', 'Anomaly Alerts', 'Multi-currency support']
  },
  {
    id: 'tax',
    title: 'Compliance Hub',
    description: 'Navigate global tax complexities with ease. Automated rate updates and regional filing preparation.',
    icon: <Globe className="h-6 w-6" />,
    features: ['VAT/GST Engine', 'Nexus Tracking', 'Audit Logs', 'Dynamic Rate Library']
  }
];

const featuresList = [
  {
    icon: <Wallet className="h-6 w-6 text-blue-500" />,
    title: 'Multi-Account Management',
    description: 'Manage unlimited bank accounts, credit cards, and cash accounts with real-time balances and account sharing.',
  },
  {
    icon: <Receipt className="h-6 w-6 text-green-500" />,
    title: 'Smart Transaction Tracking',
    description: 'Intelligent categorization, receipt attachments, bulk import, and powerful search across all transactions.',
  },
  {
    icon: <Sparkles className="h-6 w-6 text-violet-500" />,
    title: 'AI-Powered Insights',
    description: 'Automatic detection of spending patterns, anomalies, personalized recommendations, and financial health scores.',
  },
  {
    icon: <TrendingUp className="h-6 w-6 text-emerald-500" />,
    title: 'Cash Flow Forecasting',
    description: 'Advanced 3-month cash flow projections with what-if scenario modeling and risk detection.',
  },
  {
    icon: <Target className="h-6 w-6 text-orange-500" />,
    title: 'Smart Budgeting',
    description: 'Envelope-style budgets, rollover, real-time alerts, and automatic budget recommendations.',
  },
  {
    icon: <Flag className="h-6 w-6 text-amber-500" />,
    title: 'Goal & Milestone Tracking',
    description: 'Set savings goals with visual progress, milestone celebrations, and automatic contribution suggestions.',
  },
  {
    icon: <CreditCard className="h-6 w-6 text-red-500" />,
    title: 'Debt & Subscription Management',
    description: 'Track loans and recurring subscriptions with payoff simulators and renewal alerts.',
  },
  {
    icon: <PiggyBank className="h-6 w-6 text-yellow-500" />,
    title: 'Investment Portfolio',
    description: 'Track stocks, crypto, and other assets with performance analytics and return calculations.',
  },
  {
    icon: <Users className="h-6 w-6 text-sky-500" />,
    title: 'Account Collaboration',
    description: 'Securely share accounts with family or accountants with role-based permissions and real-time sync.',
  },
  {
    icon: <BarChart3 className="h-6 w-6 text-cyan-500" />,
    title: 'Advanced Reports',
    description: 'Year-over-year comparisons, category breakdowns, custom exports, and interactive visualizations.',
  },
  {
    icon: <Command className="h-6 w-6 text-purple-500" />,
    title: 'Command Palette',
    description: 'Blazing-fast global search and navigation with keyboard shortcuts for power users.',
  },
  {
    icon: <Shield className="h-6 w-6 text-emerald-500" />,
    title: 'Biometric Security',
    description: 'Secure biometric login, end-to-end encryption, offline-first SQLite storage, and cloud sync.',
  },
  {
    icon: <FileText className="h-6 w-6 text-teal-500" />,
    title: 'Rich Notes & Documents',
    description: 'Markdown-powered notes, document attachments, and fully searchable financial records.',
  },
  {
    icon: <Landmark className="h-6 w-6 text-slate-500" />,
    title: 'Multi-Currency & Offline',
    description: 'Automatic FX rates, full offline support, and seamless cross-device synchronization.',
  },
];

const techStack = [
  { name: 'React 18', icon: <Code2 size={16} />, color: 'text-blue-500' },
  { name: 'TypeScript', icon: <Code2 size={16} />, color: 'text-blue-600' },
  { name: 'Tailwind + Framer Motion', icon: <Zap size={16} />, color: 'text-purple-500' },
  { name: 'Zustand', icon: <Database size={16} />, color: 'text-emerald-500' },
  { name: 'Recharts', icon: <BarChart3 size={16} />, color: 'text-cyan-500' },
  { name: 'Supabase + SQLite', icon: <Cloud size={16} />, color: 'text-green-500' },
  { name: 'Capacitor', icon: <Smartphone size={16} />, color: 'text-orange-500' },
  { name: 'Vite', icon: <Zap size={16} />, color: 'text-yellow-500' },
  { name: 'i18next', icon: <Globe size={16} />, color: 'text-sky-500' },
];

const highlights = [
  {
    icon: <Sparkles className="h-7 w-7 text-violet-500" />,
    title: 'AI-Powered Insights',
    description: 'Automatic spending pattern detection, anomaly alerts, personalized recommendations, and smart forecasts.',
  },
  {
    icon: <Shield className="h-7 w-7 text-emerald-500" />,
    title: 'Bank-Level Security',
    description: 'Biometric authentication, end-to-end encryption, and privacy-first architecture.',
  },
  {
    icon: <Zap className="h-7 w-7 text-amber-500" />,
    title: 'Blazing Fast UX',
    description: 'Instant UI, global command palette, optimistic updates, and smooth 60fps animations.',
  },
  {
    icon: <Globe className="h-7 w-7 text-sky-500" />,
    title: 'Fully Localized',
    description: 'Multi-language support with deep cultural and currency adaptations worldwide.',
  },
  {
    icon: <Smartphone className="h-7 w-7 text-rose-500" />,
    title: 'Native Mobile + Web',
    description: 'Progressive web app with native builds via Capacitor for iOS and Android.',
  },
  {
    icon: <Cloud className="h-7 w-7 text-violet-500" />,
    title: 'Offline-First Sync',
    description: 'Full offline capability with automatic conflict-free synchronization and local SQLite.',
  },
];

export default function ProductPage({ isDarkMode, setIsDarkMode, theme, setTheme }: ProductPageProps) {
  const [activeTab, setActiveTab] = useState<'tour' | 'matrix' | 'highlights' | 'company'>('tour');
  const [currentScreen, setCurrentScreen] = useState(0);
  const [viewMode, setViewMode] = useState<'laptop' | 'tablet' | 'mobile'>('laptop');

  const nextScreen = () => setCurrentScreen((prev) => (prev + 1) % screens.length);
  const prevScreen = () => setCurrentScreen((prev) => (prev - 1 + screens.length) % screens.length);

  return (
    <div className="min-h-screen bg-brand-bg font-sans selection:bg-brand-text/20">
      <Navbar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} theme={theme} setTheme={setTheme} />

      <main className="pt-32 pb-24">
        <div className="mx-auto max-w-7xl px-6">
          <Link to="/" className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-brand-muted hover:text-brand-text transition-colors">
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </Link>

          {/* Epic Hero Header & Overview */}
          <header className="mb-12 border-b border-brand-border/40 pb-12 relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(16,185,129,0.02),transparent_40%)] pointer-events-none" />
            
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
              <div className="space-y-4 max-w-3xl">
                <div className="inline-flex items-center gap-2.5 rounded-full border border-brand-border bg-brand-card px-3 py-1 text-[11px] font-mono font-bold tracking-wider uppercase text-emerald-500">
                  <span className="flex h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  <span>Interactive Engine Product Spec</span>
                </div>
                <h1 className="font-display text-4xl font-bold tracking-tight text-brand-text sm:text-6xl">
                  SoloAccount <span className="text-brand-muted">Personal Finance Manager.</span>
                </h1>
                <p className="text-base sm:text-lg text-brand-muted leading-relaxed font-light">
                  A comprehensive online / offline - first personal finance platform designed with architectural honesty, featuring advanced AI assistance, scenario modeling, secure transaction reconciliation, and a fully private system framework.
                  SoloAccount is a modern, privacy-first personal finance management application that goes far beyond basic budgeting. It combines real-time tracking, intelligent forecasting, investment analysis, debt optimization, family collaboration, and AI-powered insights into one cohesive experience.
                </p>
              </div>

              {/* Version & Stack Overview Box */}
              <div className="flex flex-col p-6 rounded-2xl bg-brand-card border border-brand-border relative min-w-[260px] md:self-stretch justify-between">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] font-mono uppercase tracking-widest text-brand-muted">Active Build</span>
                    <span className="text-[10px] bg-emerald-500/10 text-emerald-500 font-mono font-bold px-2 py-0.5 rounded-full">v{APP_VERSION}</span>
                  </div>
                  <Link to="/" className="flex items-center gap-2 mb-4 hover:opacity-85 cursor-pointer">
                    <img 
                      src={soloLogo} 
                      alt="Solo Softwares Logo" 
                      className="h-7 w-auto object-contain"
                      referrerPolicy="no-referrer"
                    />
                    <div className="flex flex-col leading-[0.9] font-display">
                      <span className="text-xs font-black tracking-widest text-brand-text">SOLO</span>
                      <span className="text-[6px] font-extrabold tracking-[0.2em] text-brand-muted">SOFTWARES</span>
                    </div>
                  </Link>
                </div>
                <div className="text-[11px] border-t border-brand-border/40 pt-3 text-brand-muted font-light flex items-center justify-between">
                  <span>License: Sovereign Enterprise</span>
                  <span>100% Client-Side Ready</span>
                </div>
              </div>
            </div>

            {/* Quick Tech Pills Swarm */}
            <div className="mt-8 flex flex-wrap items-center gap-2">
              <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-brand-muted mr-2">Built With:</span>
              {techStack.map((tech) => (
                <div
                  key={tech.name}
                  className="flex items-center gap-1.5 rounded-full border border-brand-border bg-brand-card/70 px-3 py-1 text-xs font-medium text-brand-text shadow-sm"
                >
                  <span className={tech.color}>{tech.icon}</span>
                  <span className="font-light">{tech.name}</span>
                </div>
              ))}
            </div>
          </header>

          {/* Category Tabs Switches */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 p-1.5 bg-brand-card/50 border border-brand-border rounded-2xl mb-12">
            {[
              { id: 'tour', label: '✨ Interactive Screen Tour', desc: 'Browse layout modules & live frames' },
              { id: 'matrix', label: '📋 Comprehensive Capabilities', desc: 'Full matrix of 14 integrated modules' },
              { id: 'highlights', label: '⚡ Core Product Strengths', desc: 'What defines the SoloAccount platform' },
              { id: 'company', label: '🏢 Corporate Desk & Contact', desc: 'About Solo Softwares, location & WhatsApp' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`flex flex-col items-start gap-1 p-4 rounded-xl text-left transition-all ${
                  activeTab === tab.id 
                    ? 'bg-brand-card border border-brand-border/80 text-brand-text shadow-md scale-[1.01]' 
                    : 'border-transparent text-brand-muted hover:text-brand-text'
                }`}
              >
                <span className="text-sm font-bold block">{tab.label}</span>
                <span className="text-[10px] opacity-75 leading-tight font-light">{tab.desc}</span>
              </button>
            ))}
          </div>

          {/* Dynamic Tab Panel Render */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.35 }}
              className="min-h-[500px]"
            >
              
              {/* TAB 1: SCREEN TOUR (Showcasing layouts inside Laptop/Tablet/Mobile Bezels) */}
              {activeTab === 'tour' && (
                <section className="space-y-12">
                  <div className="max-w-2xl text-left space-y-2">
                    <h3 className="text-2xl font-bold font-display text-brand-text">
                      High-Fidelity Interface Simulator
                    </h3>
                    <p className="text-sm text-brand-muted font-light leading-relaxed">
                      Experience SoloAccount across distinct form factors. Use the control actions below to iterate screen modules or cycle display orientations.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 items-center">
                    {/* Interaction Details (Left) */}
                    <div className="lg:col-span-5 flex flex-col justify-center">
                      <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-text/5 text-emerald-500 border border-brand-border">
                        {screens[currentScreen].icon}
                      </div>
                      
                      <h4 className="font-display text-2xl font-bold text-brand-text mb-3">
                        {screens[currentScreen].title}
                      </h4>
                      <p className="text-brand-muted text-sm leading-relaxed font-light mb-8">
                        {screens[currentScreen].description}
                      </p>

                      <ul className="mb-10 grid grid-cols-1 gap-3 sm:grid-cols-2 border-t border-brand-border/40 pt-6">
                        {screens[currentScreen].features.map((f, i) => (
                          <li key={i} className="flex items-center gap-2.5 text-xs text-brand-text/90 font-light">
                            <Check className="h-3.5 w-3.5 text-emerald-500 shrink-0" />
                            <span>{f}</span>
                          </li>
                        ))}
                      </ul>

                      <div className="space-y-4">
                        <div className="flex items-center justify-between text-[11px] font-mono font-bold uppercase tracking-widest text-brand-muted">
                          <span>Progress {currentScreen + 1} of {screens.length}</span>
                          <span>{Math.round(((currentScreen + 1) / screens.length) * 100)}%</span>
                        </div>
                        <div className="h-1.5 w-full overflow-hidden rounded-full bg-brand-border">
                          <motion.div 
                            className="h-full bg-emerald-500"
                            initial={false}
                            animate={{ width: `${((currentScreen + 1) / screens.length) * 100}%` }}
                            transition={{ duration: 0.5, ease: "easeInOut" }}
                          />
                        </div>
                      </div>

                      <div className="flex items-center gap-4 mt-8">
                        <button 
                          onClick={prevScreen}
                          className="flex h-12 w-12 items-center justify-center rounded-full border border-brand-border bg-brand-card text-brand-text hover:bg-brand-text/10 transition-colors"
                          aria-label="Previous view"
                        >
                          <ArrowLeft className="h-5 w-5" />
                        </button>
                        <button 
                          onClick={nextScreen}
                          className="group flex flex-1 items-center justify-between rounded-full border border-brand-border bg-brand-card px-6 py-3 text-sm font-bold text-brand-text transition-all hover:bg-brand-text/5 active:scale-[0.98]"
                        >
                          <span>Next View Template</span>
                          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </button>
                      </div>
                    </div>

                    {/* Simulator Stage (Right) */}
                    <div className="lg:col-span-7 flex flex-col items-center">
                      {/* Responsive Selection Bar */}
                      <div className="mb-6 flex items-center justify-between w-full max-w-sm border border-brand-border bg-brand-card p-1 rounded-full">
                        <button 
                          onClick={() => setViewMode('laptop')}
                          className={`flex-1 flex h-9 items-center justify-center gap-1.5 rounded-full text-xs font-semibold tracking-wider uppercase transition-colors ${viewMode === 'laptop' ? 'bg-brand-text text-brand-bg' : 'text-brand-muted hover:text-brand-text'}`}
                        >
                          <Laptop className="h-4 w-4" />
                          <span>Laptop</span>
                        </button>
                        <button 
                          onClick={() => setViewMode('tablet')}
                          className={`flex-1 flex h-9 items-center justify-center gap-1.5 rounded-full text-xs font-semibold tracking-wider uppercase transition-colors ${viewMode === 'tablet' ? 'bg-brand-text text-brand-bg' : 'text-brand-muted hover:text-brand-text'}`}
                        >
                          <Tablet className="h-4 w-4" />
                          <span>Tablet</span>
                        </button>
                        <button 
                          onClick={() => setViewMode('mobile')}
                          className={`flex-1 flex h-9 items-center justify-center gap-1.5 rounded-full text-xs font-semibold tracking-wider uppercase transition-colors ${viewMode === 'mobile' ? 'bg-brand-text text-brand-bg' : 'text-brand-muted hover:text-brand-text'}`}
                        >
                          <Smartphone className="h-4 w-4" />
                          <span>Mobile</span>
                        </button>
                      </div>

                      {/* Device Stage container */}
                      <div className={`relative transition-all duration-500 ease-in-out w-full border border-brand-border/60 rounded-[2rem] bg-brand-card p-4 shadow-2xl ${
                        viewMode === 'laptop' ? 'max-w-xl aspect-[16/10.5]' : 
                        viewMode === 'tablet' ? 'max-w-[420px] aspect-[3/4]' : 
                        'max-w-[280px] aspect-[9/18]'
                      }`}>
                        
                        <div className="h-full w-full rounded-2xl bg-brand-bg border border-brand-border p-2 overflow-hidden relative flex flex-col justify-center items-center">
                          <AnimatePresence mode="wait">
                            <motion.div 
                              key={`${screens[currentScreen].id}-${viewMode}`}
                              initial={{ opacity: 0, scale: 0.98 }}
                              animate={{ opacity: 1, scale: 1 }}
                              exit={{ opacity: 0, scale: 1.02 }}
                              transition={{ duration: 0.3 }}
                              className="h-full w-full flex flex-col"
                            >
                              {screens[currentScreen].image ? (
                                <div className="h-full w-full flex items-center justify-center bg-brand-bg relative p-1">
                                  <img 
                                    src={screens[currentScreen].image} 
                                    alt={`${screens[currentScreen].title} View`} 
                                    className="max-h-full max-w-full object-contain rounded"
                                    referrerPolicy="no-referrer"
                                  />
                                </div>
                              ) : (
                                <div className="flex flex-col p-6 h-full text-center justify-center items-center space-y-4 bg-brand-card/30">
                                  <div className="h-12 w-12 rounded-xl bg-brand-text/5 flex items-center justify-center text-emerald-500 border border-brand-border">
                                    {screens[currentScreen].icon}
                                  </div>
                                  <span className="text-brand-text font-display font-bold uppercase tracking-widest text-[11px] block">
                                    {screens[currentScreen].title} Mock
                                  </span>
                                  <p className="text-[10px] text-brand-muted max-w-[180px] leading-relaxed font-light uppercase tracking-wider">
                                    Direct rendering pipeline active for localized environments.
                                  </p>
                                </div>
                              )}
                            </motion.div>
                          </AnimatePresence>
                        </div>
                      </div>

                      {/* Bottom Quick Indicator Hub */}
                      <div className="mt-6 flex gap-2 overflow-x-auto max-w-md scrollbar-hide py-1">
                        {screens.map((screen, idx) => (
                          <button
                            key={screen.id}
                            onClick={() => setCurrentScreen(idx)}
                            className={`px-3 py-1 text-xs rounded-full border transition-all ${
                              currentScreen === idx 
                                ? 'bg-brand-text text-brand-bg font-semibold border-brand-text' 
                                : 'border-brand-border text-brand-muted hover:text-brand-text bg-brand-card/40'
                            }`}
                          >
                            {screen.title}
                          </button>
                        ))}
                      </div>

                    </div>
                  </div>
                </section>
              )}

              {/* TAB 2: CAPABILITY MATRIX (The 14 features of SoloAccount) */}
              {activeTab === 'matrix' && (
                <section className="space-y-12">
                  <div className="max-w-2xl text-left space-y-2">
                    <h3 className="text-2xl font-bold font-display text-brand-text">
                      Complete Solution Capabilities Matrix
                    </h3>
                    <p className="text-sm text-brand-muted font-light leading-relaxed">
                      Every tool, parser, tracker, and algorithm you need for comprehensive personal and professional ledger tracking. Included statically inside our sovereign local client files.
                    </p>
                  </div>

                  <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 text-left">
                    {featuresList.map((feature, index) => (
                      <div 
                        key={index} 
                        className="group relative overflow-hidden p-6 rounded-2xl border border-brand-border bg-brand-card hover:border-emerald-500/30 transition-all duration-300 flex flex-col h-full justify-between"
                      >
                        <div className="space-y-4">
                          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-bg border border-brand-border/80 group-hover:scale-105 transition-transform shrink-0">
                            {feature.icon}
                          </div>
                          <div className="space-y-1">
                            <h4 className="font-bold text-base text-brand-text">
                              {feature.title}
                            </h4>
                            <p className="text-xs leading-relaxed text-brand-muted font-light">
                              {feature.description}
                            </p>
                          </div>
                        </div>

                        {/* Aesthetic Footer Line */}
                        <div className="pt-4 mt-4 border-t border-brand-border/40 flex items-center justify-between text-[10px] text-emerald-500 font-mono font-medium">
                          <span>Module 0{index + 1}</span>
                          <span className="opacity-0 group-hover:opacity-100 transition-opacity">Fully Compiled →</span>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Visual Integration Footer Banner */}
                  <div className="p-8 rounded-[2rem] bg-brand-card border border-brand-border relative overflow-hidden flex flex-col md:flex-row md:items-center justify-between gap-6">
                    <div className="space-y-2 max-w-2xl text-left">
                      <span className="text-[10px] uppercase font-mono tracking-wider text-emerald-500 bg-emerald-500/10 px-2.5 py-1 rounded-md">Enterprise Ready</span>
                      <h4 className="text-lg font-bold text-brand-text">Sovereign Architecture Integration</h4>
                      <p className="text-xs text-brand-muted font-light leading-relaxed">
                        These 14 integrated modules run entirely sandbox-isolated on your computer or phone. Your finance books are protected by mathematical end-to-end security loops.
                      </p>
                    </div>
                    <a
                      href="https://soloaccount.solosoftwares.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="md:self-center px-6 py-3 rounded-full bg-brand-text text-brand-bg text-sm font-semibold hover:scale-[1.02] transition-transform text-center"
                    >
                      Launch Platform
                    </a>
                  </div>
                </section>
              )}

              {/* TAB 3: KEY STRENGTHS & HIGHLIGHTS (6 main highlights) */}
              {activeTab === 'highlights' && (
                <section className="space-y-12">
                  <div className="max-w-2xl text-left space-y-2">
                    <h3 className="text-2xl font-bold font-display text-brand-text">
                      Why Choose SoloAccount?
                    </h3>
                    <p className="text-sm text-brand-muted font-light leading-relaxed">
                      Designed from first principles to prioritize processing velocity, database safety, absolute client confidentiality, and stunning, fluid user experience.
                    </p>
                  </div>

                  <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 text-left">
                    {highlights.map((item, index) => (
                      <div key={index} className="border border-brand-border bg-brand-card p-6 rounded-2xl flex flex-col space-y-4 hover:bg-brand-card/80 transition-all">
                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand-bg border border-brand-border">
                          {item.icon}
                        </div>
                        <div className="space-y-1">
                          <h4 className="font-bold text-base text-brand-text">
                            {item.title}
                          </h4>
                          <p className="text-xs text-brand-muted leading-relaxed font-light">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Extra Technical Stack Blueprint Card */}
                  <div className="p-8 rounded-[2.5rem] bg-brand-card border border-brand-border text-center relative overflow-hidden">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-64 w-64 bg-emerald-500/[0.03] rounded-full blur-[80px]" />
                    <div className="relative z-10 space-y-6 max-w-2xl mx-auto">
                      <Cpu className="h-10 w-10 text-emerald-500 mx-auto" />
                      <h4 className="text-xl font-bold text-brand-text">The Local-First Blueprint</h4>
                      <p className="text-sm text-brand-muted leading-relaxed font-light">
                        We avoid heavy central server architectures. By leveraging Capacitor native plugins, secure local SQLite structures on native devices, and React hooks state configurations, your platform performs and reacts in absolute high-fidelity.
                      </p>
                    </div>
                  </div>
                </section>
              )}

              {/* TAB 4: COMPANY INFO, CONTACTS & WEBPORTALS (Solo Softwares entity details) */}
              {activeTab === 'company' && (
                <section className="space-y-12">
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 text-left">
                    
                    {/* About Solo Softwares Section */}
                    <div className="lg:col-span-12 space-y-4">
                      <div className="p-8 rounded-3xl bg-brand-card border border-brand-border relative overflow-hidden flex flex-col md:flex-row items-center gap-8">
                        <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-500 to-indigo-600 shadow-md">
                          <Sparkles className="h-10 w-10 text-white" />
                        </div>
                        <div className="space-y-3">
                          <h3 className="text-2xl font-bold text-brand-text">About Solo Softwares</h3>
                          <p className="text-sm text-brand-muted leading-relaxed font-light">
                            Solo Softwares is a custom engineering firm and technology compiler dedicated to crafting pristine interfaces and robust offline-first software architectures. We believe that everyone deserves direct access to premium, highly private, zero-jank computational logic and financial transparency without having to yield their parameters to commercial telemetry hubs. Our mission is to empower individuals and families with sovereign accounting structures.
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Contact & Links Quadrant */}
                    <div className="lg:col-span-7 space-y-6">
                      <div className="p-6 rounded-2xl bg-brand-card border border-brand-border space-y-6">
                        <h4 className="text-base font-bold text-brand-text flex items-center gap-2">
                          <Terminal className="h-4 w-4 text-emerald-500" />
                          <span>Global Reliability Desk & Support</span>
                        </h4>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          
                          {/* Mail Coordinate */}
                          <div className="p-4 rounded-xl bg-brand-bg border border-brand-border/60 flex items-start gap-3">
                            <Mail className="h-5 w-5 text-emerald-500 shrink-0 mt-0.5" />
                            <div className="space-y-1">
                              <span className="text-[10px] font-mono uppercase tracking-wider text-brand-muted block">Direct Email</span>
                              <a 
                                href="mailto:info@solosoftwares.com" 
                                className="text-xs text-brand-text hover:underline truncate block"
                              >
                                info@solosoftwares.com
                              </a>
                            </div>
                          </div>

                          {/* WhatsApp / Mobile Coordinate */}
                          <div className="p-4 rounded-xl bg-brand-bg border border-brand-border/60 flex items-start gap-3">
                            <Phone className="h-5 w-5 text-emerald-500 shrink-0 mt-0.5" />
                            <div className="space-y-1">
                              <span className="text-[10px] font-mono uppercase tracking-wider text-brand-muted block">SRE / WhatsApp Support</span>
                              <a 
                                href="https://wa.me/919994120250" 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className="text-xs text-brand-text hover:underline block font-semibold text-emerald-500"
                              >
                                +91 9994120250
                              </a>
                            </div>
                          </div>

                          {/* Geography Location Map Coordinate */}
                          <div className="p-4 rounded-xl bg-brand-bg border border-brand-border/60 sm:col-span-2 flex items-start gap-3">
                            <MapPin className="h-5 w-5 text-emerald-500 shrink-0 mt-0.5" />
                            <div className="space-y-1">
                              <span className="text-[10px] font-mono uppercase tracking-wider text-brand-muted block">Engineering Base Location</span>
                              <p className="text-xs text-brand-text leading-relaxed">
                                Kadayanallur - 627751, Tamil Nadu, India
                              </p>
                            </div>
                          </div>

                        </div>
                      </div>
                    </div>

                    {/* Product & Company Portals Links (Right) */}
                    <div className="lg:col-span-5 space-y-6">
                      <div className="p-6 rounded-2xl bg-brand-card border border-brand-border space-y-4 h-full flex flex-col justify-between">
                        <div className="space-y-4">
                          <h4 className="text-base font-bold text-brand-text flex items-center gap-2">
                            <ExternalLink className="h-4 w-4 text-emerald-500" />
                            <span>Digital Web Portals</span>
                          </h4>
                          <p className="text-xs text-brand-muted font-light leading-relaxed">
                            Access our official platforms, read structural changelogs, or download native compiler builds from our primary domains.
                          </p>
                        </div>

                        <div className="space-y-2.5">
                          <a 
                            href="https://solosoftwares.com" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="flex items-center justify-between p-3 rounded-xl border border-brand-border/80 hover:border-emerald-500/20 bg-brand-bg text-xs font-semibold text-brand-text hover:bg-brand-text/[0.02] transition-colors"
                          >
                            <span>Corporate Web Portal</span>
                            <span className="text-brand-muted text-[10px] font-light font-mono">solosoftwares.com 🔗</span>
                          </a>

                          <a 
                            href="https://soloaccount.solosoftwares.com" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="flex items-center justify-between p-3 rounded-xl border border-brand-border/80 hover:border-emerald-500/20 bg-brand-bg text-xs font-semibold text-brand-text hover:bg-brand-text/[0.02] transition-colors"
                          >
                            <span>Live Product App</span>
                            <span className="text-emerald-500 text-[10px] font-bold font-mono">soloaccount... 🔗</span>
                          </a>
                        </div>
                      </div>
                    </div>

                    {/* Security Standards Overview Card */}
                    <div className="lg:col-span-12">
                      <div className="p-6 rounded-2xl bg-brand-card border border-brand-border text-left">
                        <h4 className="text-sm font-bold text-brand-text mb-4 flex items-center gap-2">
                          <Lock className="h-4 w-4 text-emerald-500 hover:scale-105 transition-transform" />
                          <span>Enterprise Ledger Security Protocols</span>
                        </h4>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                          <div className="space-y-1.5 p-3 rounded-lg hover:bg-white/[0.01] transition-colors">
                            <span className="text-[10px] font-mono text-emerald-500 uppercase font-semibold">01 / Storage Cryptics</span>
                            <p className="text-xs text-brand-text font-bold">End-to-End Local Encryptions</p>
                            <p className="text-[11px] text-brand-muted font-light leading-relaxed">All transaction logs are processed strictly through local client boundaries and local secure key matrices.</p>
                          </div>
                          <div className="space-y-1.5 p-3 rounded-lg hover:bg-white/[0.01] transition-colors">
                            <span className="text-[10px] font-mono text-emerald-500 uppercase font-semibold">02 / Ledger Hardening</span>
                            <p className="text-xs text-brand-text font-bold">Sovereign Data Storage</p>
                            <p className="text-[11px] text-brand-muted font-light leading-relaxed">Zero server telemetry logs means your account balances never get synchronized to central databases unless requested.</p>
                          </div>
                          <div className="space-y-1.5 p-3 rounded-lg hover:bg-white/[0.01] transition-colors">
                            <span className="text-[10px] font-mono text-emerald-500 uppercase font-semibold">03 / Recovery Protocol</span>
                            <p className="text-xs text-brand-text font-bold">Single-Use Handshake Sync</p>
                            <p className="text-[11px] text-brand-muted font-light leading-relaxed">Local profile recovery links are temporary and cryptographically signed using PBKDF2 keys.</p>
                          </div>
                        </div>
                      </div>
                    </div>

                  </div>
                </section>
              )}

            </motion.div>
          </AnimatePresence>

          {/* Quick Handshake Call to Action Banner */}
          <section className="mt-20 rounded-[3rem] bg-brand-text px-12 py-16 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-tr from-emerald-500/10 via-transparent to-indigo-500/10 pointer-events-none" />
            <div className="relative z-10 space-y-6">
              <h2 className="font-display text-3xl font-bold tracking-tight text-brand-bg md:text-5xl">
                Ready to reclaim your financial data sovereignty?
              </h2>
              <p className="mx-auto max-w-xl text-sm sm:text-base text-brand-bg/80 leading-relaxed font-light">
                Join the thousands of developers, architects, and power users tracking their ledger sheets securely with zero internet leaks.
              </p>
              <div className="pt-4 flex flex-col sm:flex-row justify-center gap-3">
                <a 
                  href="https://soloaccount.solosoftwares.com" 
                  target="_blank" 
                  rel="noreferrer"
                  className="rounded-full bg-brand-bg px-8 py-3.5 text-sm font-bold text-brand-text transition-all hover:bg-neutral-100 hover:scale-[1.03] text-center"
                >
                  Launch App Instantly (Local Mode)
                </a>
                <a 
                  href="https://wa.me/919994120250"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full border border-brand-bg/20 bg-transparent px-8 py-3.5 text-sm font-bold text-brand-bg transition-all hover:bg-brand-bg/10 hover:scale-[1.03] text-center"
                >
                  Contact Client Relations
                </a>
              </div>
            </div>
          </section>

          {/* Core Footer Note with Love */}
          <div className="mt-12 flex flex-col items-center justify-center gap-3 border-t border-brand-border/40 pt-8 text-center">
            <div className="flex items-center gap-2 text-brand-muted text-xs font-light">
              <Heart className="h-4 w-4 text-rose-500 fill-rose-500" />
              <span>Sovereign Software crafted with outstanding attention to detail by Solo Softwares</span>
            </div>
            <p className="text-[10px] text-brand-muted/60 font-mono">
              © 2026 Solo Softwares. All rights reserved. Registered trademark of Solo Softwares & Companies.
            </p>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
