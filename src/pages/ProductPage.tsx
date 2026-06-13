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
  Settings,
  MessageSquare,
  Play,
  Send,
  EyeOff,
  Crop,
  Mic,
  Bomb,
  Trash2,
  Key,
  User,
  ShieldAlert,
  PhoneCall,
  ShieldCheck,
  ChevronDown
} from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

import appLogin from '../assets/app_login.png';
import dashboard from '../assets/dashboard.png';
import inputFile2 from '../assets/input_file_2.png';
import inputFile3 from '../assets/input_file_3.png';
import inputFile4 from '../assets/input_file_4.png';
import inputFile5 from '../assets/input_file_5.png';
import soloLogo from '../assets/solo_logo.png';
import soloaccountLogo from '../assets/soloaccount-mark.svg';
import solochatLogo from '../assets/solochat-mark.svg';

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
  const location = useLocation();
  const [selectedProduct, setSelectedProduct] = useState<'soloaccount' | 'solochat'>(() => {
    const params = new URLSearchParams(location.search);
    return params.get('tab') === 'solochat' ? 'solochat' : 'soloaccount';
  });

  // SoloAccount States
  const [activeTab, setActiveTab] = useState<'tour' | 'matrix' | 'highlights' | 'company'>('tour');
  const [currentScreen, setCurrentScreen] = useState(0);
  const [viewMode, setViewMode] = useState<'laptop' | 'tablet' | 'mobile'>('laptop');

  // SoloChat States
  const [chatActiveTab, setChatActiveTab] = useState<'tour' | 'bento' | 'security' | 'interactive'>('tour');
  const [chatMockTab, setChatMockTab] = useState<'lobby' | 'safe' | 'voip'>('lobby');
  const [simulatedTheme, setSimulatedTheme] = useState<'emerald' | 'blue' | 'purple' | 'amber' | 'rose'>('emerald');
  const [userTypedMsg, setUserTypedMsg] = useState('');
  const [isRecordingVoice, setIsRecordingVoice] = useState(false);
  const [voiceRecordDuration, setVoiceRecordDuration] = useState(0);
  const [recordedVoiceUrl, setRecordedVoiceUrl] = useState<string | null>(null);
  
  // Simulated Location State
  const [mockLocation, setMockLocation] = useState({ lat: '24.7136° N', lng: '46.6753° E', name: 'Riyadh Safehouse' });

  // Media editor state
  const [activeWatermark, setActiveWatermark] = useState<'none' | 'confidential' | 'p2p' | 'secure'>('none');

  // Simulated logs
  const [simulatedLogs, setSimulatedLogs] = useState<Array<{ id: number; sender: string; type: 'success' | 'shred' | 'normal'; message: string; timestamp: string }>>([
    { id: 1, sender: 'Peer Node 01', type: 'normal', message: 'Welcome to the sandbox deck! Click one of the controller buttons below to emit system handshake events.', timestamp: '12:00' }
  ]);

  // Mock messages stream
  const [mockMessages, setMockMessages] = useState<Array<{ sender: string; text: string; isOwn: boolean; time: string }>>([
    { sender: 'Peer Node', text: 'Hi there, did you verify the peer-to-peer double ratchet handshake keys? Everything looks green.', isOwn: false, time: '12:05' },
    { sender: 'You', text: 'Handshake secure. Zero-knowledge shred active. 100% of temporary sandbox metadata cleared after shred sequence.', isOwn: true, time: '12:06' }
  ]);

  const handleSendMockMsg = (e: React.FormEvent) => {
    e.preventDefault();
    if (!userTypedMsg.trim()) return;
    const msgTime = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    const newMsg = { sender: 'You', text: userTypedMsg.trim(), isOwn: true, time: msgTime };
    const inputVal = userTypedMsg;
    setMockMessages(prev => [...prev, newMsg]);
    setUserTypedMsg('');

    setTimeout(() => {
      let replyText = "Tunnel initialized. AES-256 state matching is fully active on this channel.";
      if (inputVal.toLowerCase().includes('hello') || inputVal.toLowerCase().includes('hi')) {
        replyText = "Hello! Secure P2P communication channel is active. Direct handshake verified.";
      } else if (inputVal.toLowerCase().includes('shred') || inputVal.toLowerCase().includes('clear')) {
        replyText = "Operational command acknowledged. Execute capsule shredding from the Interactive Demo control board.";
      } else if (inputVal.toLowerCase().includes('key') || inputVal.toLowerCase().includes('public')) {
        replyText = "Handshake keys: DH-Secp256k1 Ephemeral Node verified. Forward Secrecy secured.";
      } else if (inputVal.toLowerCase().includes('location') || inputVal.toLowerCase().includes('coordinates')) {
        replyText = `Understood. Locking secure coordinates to active ping: ${mockLocation.lat}, ${mockLocation.lng}`;
      }
      setMockMessages(prev => [...prev, { sender: 'Peer Node', text: replyText, isOwn: false, time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) }]);
    }, 1200);
  };

  const triggerSimulatedHandshake = () => {
    const freshLog = {
      id: Date.now(),
      sender: 'System Core',
      type: 'success' as const,
      message: 'Peer handshaking success! Encryption symmetric keys derived cleanly: Node DHE-Public Key Registered.',
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };
    setSimulatedLogs(prev => [...prev, freshLog]);
  };

  const triggerSimulatedShred = () => {
    const shredLog = {
      id: Date.now(),
      sender: 'Secure Shredder',
      type: 'shred' as const,
      message: 'Sovereign Capsule Shredded: Local caches, media payloads, and chat logs destroyed with triple-pass zeroes.',
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };
    setSimulatedLogs([shredLog]);
    setMockMessages([]);
  };

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

          {/* Product Toggle Selector with High-Fidelity Specs */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12 border-b border-brand-border/40 pb-8">
            <div className="text-left space-y-1">
              <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-emerald-500 bg-emerald-500/10 px-2.5 py-1 rounded-md">
                Sovereign Product Suite
              </span>
              <h2 className="text-3xl font-display font-black tracking-tight text-brand-text">Software Specification Audit</h2>
              <p className="text-xs text-brand-muted font-light leading-relaxed">Toggle between Solo Softwares enterprise products to audit their features, capabilities, and system specifications.</p>
            </div>

            <div className="flex bg-brand-card/45 border border-brand-border rounded-2xl p-1.5 min-w-[320px] shadow-sm select-none">
              <button
                onClick={() => setSelectedProduct('soloaccount')}
                className={`flex-1 py-3 px-4 rounded-xl text-xs font-bold font-display tracking-widest transition-all cursor-pointer ${
                  selectedProduct === 'soloaccount'
                    ? 'bg-brand-text text-brand-bg font-black shadow-md scale-[1.01]'
                    : 'text-brand-muted hover:text-brand-text'
                }`}
              >
                SOLOACCOUNT
              </button>
              <button
                onClick={() => setSelectedProduct('solochat')}
                className={`flex-1 py-3 px-4 rounded-xl text-xs font-bold font-display tracking-widest transition-all cursor-pointer ${
                  selectedProduct === 'solochat'
                    ? 'bg-brand-text text-brand-bg font-black shadow-md scale-[1.01]'
                    : 'text-brand-muted hover:text-brand-text'
                }`}
              >
                SOLOCHAT
              </button>
            </div>
          </div>

          {selectedProduct === 'soloaccount' ? (
            <>

          {/* Epic Hero Header & Overview */}
          <header className="mb-12 border-b border-brand-border/40 pb-12 relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(16,185,129,0.02),transparent_40%)] pointer-events-none" />
            
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
              <div className="space-y-4 max-w-3xl border-none p-0 bg-transparent">
                <div className="flex items-center gap-4">
                  <img 
                    src={soloaccountLogo} 
                    alt="SoloAccount Logo" 
                    className="h-16 w-16 object-contain rounded-2xl border border-brand-border/60 bg-brand-card p-1.5 shadow-md flex-shrink-0"
                    referrerPolicy="no-referrer"
                  />
                  <div className="space-y-1">
                    <div className="inline-flex items-center gap-2.5 rounded-full border border-brand-border bg-brand-card px-3 py-1 text-[11px] font-mono font-bold tracking-wider uppercase text-emerald-500">
                      <span className="flex h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                      <span>Interactive Engine Product Spec</span>
                    </div>
                    <h1 className="font-display text-3xl font-bold tracking-tight text-brand-text sm:text-5xl leading-none pt-1">
                      SoloAccount
                    </h1>
                  </div>
                </div>
                <p className="text-base sm:text-lg text-brand-muted leading-relaxed font-light pt-2">
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
            </>
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="space-y-16 text-left"
            >
              {/* 🌟 Epic Hero Header & Overview for SoloChat */}
              <header className="mb-12 border-b border-brand-border/40 pb-12 relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(16,185,129,0.02),transparent_40%)] pointer-events-none" />
                
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
                  <div className="space-y-4 max-w-3xl border-none p-0 bg-transparent">
                    <div className="flex items-center gap-4">
                      <img 
                        src={solochatLogo} 
                        alt="SoloChat Logo" 
                        className="h-16 w-16 object-contain rounded-2xl border border-brand-border/60 bg-brand-card p-1.5 shadow-md flex-shrink-0"
                        referrerPolicy="no-referrer"
                      />
                      <div className="space-y-1">
                        <div className="inline-flex items-center gap-2.5 rounded-full border border-brand-border bg-brand-card px-3 py-1 text-[11px] font-mono font-bold tracking-wider uppercase text-emerald-500">
                          <span className="flex h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                          <span>Sovereign Zero-Knowledge Messengers</span>
                        </div>
                        <h1 className="font-display text-4xl font-bold tracking-tight text-brand-text leading-none pt-1">
                          SoloChat
                        </h1>
                      </div>
                    </div>
                    <p className="text-base sm:text-lg text-brand-muted leading-relaxed font-light pt-2">
                      A peer-to-peer double ratchet encrypted messenger system engineered with absolute privacy. Featuring invisible ink chat, local secure audio-grade voice notes, real-time cryptography auditing logs, and robust metadata-scrubbing.
                    </p>
                  </div>

                  {/* Version & Stack Info Box */}
                  <div className="flex flex-col p-6 rounded-2xl bg-brand-card border border-brand-border relative min-w-[260px] md:self-stretch justify-between">
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-[10px] font-mono text-emerald-500 uppercase font-black">Release Tag</span>
                        <span className="inline-flex items-center rounded-full bg-emerald-500/15 px-2 py-0.5 text-[9px] font-mono font-bold text-emerald-500 uppercase">
                          PROD v1.0.8
                        </span>
                      </div>
                      <p className="text-xs text-brand-muted font-light">Full-scale zero-knowledge peer protocol. 100% telemetry locked.</p>
                    </div>
                    
                    <div className="border-t border-brand-border/60 pt-4 mt-4 space-y-1.5">
                      <div className="flex items-center justify-between text-[11px] font-mono text-brand-muted">
                        <span>HANDSHAKE PROTOCOL</span>
                        <span className="text-brand-text font-bold">X3DH Ed25519</span>
                      </div>
                      <div className="flex items-center justify-between text-[11px] font-mono text-brand-muted">
                        <span>CIPHER SUITE</span>
                        <span className="text-brand-text font-bold">AES-256-GCM / SHA3</span>
                      </div>
                    </div>
                  </div>
                </div>
              </header>

              {/* 📋 SoloChat Navigation Spec Tabs */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-2 border-b border-brand-border/40 pb-6">
                {[
                  { id: 'tour', label: 'Interactive Interface', desc: 'Secure Sandbox' },
                  { id: 'bento', label: 'Core Capabilities', desc: 'Sovereign Features' },
                  { id: 'security', label: 'Cryptography Matrix', desc: 'Zero Storage Log' },
                  { id: 'interactive', label: 'Sandbox System Deck', desc: 'Live Controller' }
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setChatActiveTab(tab.id as any)}
                    className={`flex flex-col items-start gap-1 p-4 rounded-xl text-left transition-all cursor-pointer ${
                      chatActiveTab === tab.id 
                        ? 'bg-brand-card border border-brand-border/80 text-brand-text shadow-md scale-[1.01]' 
                        : 'border-transparent text-brand-muted hover:text-brand-text'
                    }`}
                  >
                    <span className="text-sm font-bold block">{tab.label}</span>
                    <span className="text-[10px] opacity-75 font-light">{tab.desc}</span>
                  </button>
                ))}
              </div>

              {/* Chat tab panel container */}
              <div className="min-h-[500px] mt-8">
                
                {/* TAB 1: INTERACTIVE SECURE INTERFACE (MOCKUP ACCENTS) */}
                {chatActiveTab === 'tour' && (
                  <div className="space-y-12">
                    <div className="max-w-2xl text-left space-y-2">
                      <h3 className="text-2xl font-bold font-display text-brand-text">
                        Sovereign Encapsulated Client
                      </h3>
                      <p className="text-sm text-brand-muted font-light leading-relaxed">
                        Audit SoloChat's peer-to-peer user experience. Switch module panels or enter live texts below to observe safe message buffering and zero-knowledge encapsulation.
                      </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                      {/* Left: Interactive Controls */}
                      <div className="lg:col-span-4 space-y-6">
                        <div className="p-6 rounded-2xl bg-brand-card border border-brand-border space-y-4">
                          <h4 className="text-xs font-mono uppercase tracking-wider text-emerald-500 font-bold">
                            Module Channel Selectors
                          </h4>
                          <div className="space-y-2">
                            {[
                              { id: 'lobby', label: 'Genesis Lobby', desc: 'Encrypted peer thread' },
                              { id: 'safe', label: 'Private Safe', desc: 'Scrubbed file logs' },
                              { id: 'voip', label: 'Secure VoIP Calls', desc: 'Direct OPUS-48kHz node' }
                            ].map((tab) => (
                              <button
                                key={tab.id}
                                onClick={() => setChatMockTab(tab.id as any)}
                                className={`w-full flex items-center justify-between p-3 rounded-xl border text-left transition-all cursor-pointer ${
                                  chatMockTab === tab.id
                                    ? 'bg-brand-text text-brand-bg border-transparent font-bold'
                                    : 'border-brand-border hover:bg-brand-card text-brand-text'
                                }`}
                              >
                                <div>
                                  <span className="text-xs block font-bold">{tab.label}</span>
                                  <span className={`text-[9px] block font-light ${chatMockTab === tab.id ? 'text-brand-bg/85' : 'text-brand-muted'}`}>{tab.desc}</span>
                                </div>
                                <ArrowRight className="h-3 w-3 opacity-60" />
                              </button>
                            ))}
                          </div>
                        </div>

                        {/* Interactive Visual Theme Picker */}
                        <div className="p-6 rounded-2xl bg-brand-card border border-brand-border space-y-4">
                          <h4 className="text-xs font-mono uppercase tracking-wider text-emerald-500 font-bold">
                            Simulator HUD Theme
                          </h4>
                          <p className="text-[11px] text-brand-muted font-light">Change the mock interface theme preset instantaneously.</p>
                          <div className="grid grid-cols-5 gap-2">
                            {[
                              { id: 'emerald', color: 'bg-emerald-500' },
                              { id: 'blue', color: 'bg-blue-500' },
                              { id: 'purple', color: 'bg-purple-500' },
                              { id: 'rose', color: 'bg-rose-500' },
                              { id: 'amber', color: 'bg-amber-500' }
                            ].map((themeOpt) => (
                              <button
                                key={themeOpt.id}
                                onClick={() => setSimulatedTheme(themeOpt.id as any)}
                                className={`h-8 rounded-lg border flex items-center justify-center cursor-pointer transition-all ${
                                  simulatedTheme === themeOpt.id
                                    ? 'border-brand-text scale-[1.12] ring-2 ring-emerald-500/20'
                                    : 'border-brand-border hover:scale-105'
                                }`}
                              >
                                <span className={`h-4.5 w-4.5 rounded-full ${themeOpt.color}`} />
                              </button>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Right: Mockup Outer Canvas */}
                      <div className="lg:col-span-8 flex justify-center">
                        <div className="w-full max-w-[540px] rounded-[2.5rem] bg-slate-950 border-[6px] border-slate-800 p-3 shadow-2xl relative overflow-hidden text-left text-neutral-300">
                          {/* Top notch phone indicator */}
                          <div className="absolute top-0 left-1/2 -translate-x-1/2 bg-slate-800 h-5 w-28 rounded-b-xl z-20 flex items-center justify-center gap-1.5 px-3">
                            <span className="h-1.5 w-1.5 rounded-full bg-slate-900" />
                            <span className="h-1 w-3 rounded-full bg-slate-900" />
                          </div>

                          <div className="h-[480px] w-full rounded-[2rem] bg-zinc-900 border border-white/5 relative flex flex-col justify-between overflow-hidden">
                            {/* App top bar */}
                            <div className="bg-zinc-950/80 backdrop-blur-md border-b border-white/5 px-4 pt-6 pb-3 flex items-center justify-between z-10">
                              <div className="flex items-center gap-2">
                                <div className={`h-2 w-2 rounded-full animate-ping ${
                                  simulatedTheme === 'emerald' ? 'bg-emerald-500' :
                                  simulatedTheme === 'blue' ? 'bg-blue-500' :
                                  simulatedTheme === 'purple' ? 'bg-purple-500' :
                                  simulatedTheme === 'rose' ? 'bg-rose-500' : 'bg-amber-500'
                                }`} />
                                <div>
                                  <span className="text-[10px] font-mono tracking-wider text-neutral-400 block">SAFENODE SECURE // P2P</span>
                                  <span className="text-xs font-bold text-white block">Safehouse Sec // Node 04</span>
                                </div>
                              </div>
                              <span className="text-[9px] font-mono bg-white/10 px-2 py-0.5 rounded text-neutral-300 uppercase">
                                SH2-DH5 Active
                              </span>
                            </div>

                            {/* Panel switching rendering */}
                            <div className="flex-1 p-4 overflow-y-auto space-y-4 max-h-[350px]">
                              {chatMockTab === 'lobby' && (
                                <>
                                  <div className="mx-auto text-center max-w-[280px] p-2 bg-zinc-950/40 border border-white/5 rounded-lg text-[9px] text-zinc-500 font-mono">
                                    AES-256 Symmetric handover verified. Temporary database logs automatically shredded under active session locks.
                                  </div>

                                  {mockMessages.map((msg, i) => (
                                    <div
                                      key={i}
                                      className={`flex flex-col max-w-[85%] ${msg.isOwn ? 'ml-auto items-end' : 'mr-auto items-start'}`}
                                    >
                                      <div className={`p-3 rounded-2xl text-xs leading-relaxed ${
                                        msg.isOwn
                                          ? `text-white rounded-tr-none ${
                                              simulatedTheme === 'emerald' ? 'bg-emerald-600' :
                                              simulatedTheme === 'blue' ? 'bg-blue-600' :
                                              simulatedTheme === 'purple' ? 'bg-purple-600' :
                                              simulatedTheme === 'rose' ? 'bg-rose-600' : 'bg-amber-600'
                                            }`
                                          : 'bg-zinc-850 text-neutral-200 border border-white/5 rounded-tl-none'
                                      }`}>
                                        <p>{msg.text}</p>
                                      </div>
                                      <span className="text-[8px] text-zinc-600 font-mono mt-1">{msg.time}</span>
                                    </div>
                                  ))}
                                </>
                              )}

                              {chatMockTab === 'safe' && (
                                <div className="space-y-3">
                                  <div className="p-3 bg-zinc-950/40 border border-white/5 rounded-xl text-center text-xs text-neutral-400 font-light">
                                    Files locked inside this capsule are encrypted using distinct ephemeral AES initialization vectors.
                                  </div>

                                  <div className="space-y-2">
                                    {[
                                      { name: 'sovereign_tax_strategy_2026.pdf', size: '2.4 MB', hash: 'e28a..df21' },
                                      { name: 'handshake_safety_keys.gpg', size: '12 KB', hash: '8f0a..bb39' },
                                    ].map((file, idx) => (
                                      <div key={idx} className="p-3 rounded-xl bg-zinc-850 border border-white/5 flex items-center justify-between">
                                        <div className="flex gap-2.5 items-center">
                                          <FileText className="h-5 w-5 text-neutral-400" />
                                          <div className="text-left">
                                            <span className="text-xs text-white block truncate max-w-[200px]">{file.name}</span>
                                            <span className="text-[9px] text-zinc-500 block font-mono">{file.size} • SHA256: {file.hash}</span>
                                          </div>
                                        </div>
                                        <button
                                          onClick={() => alert(`Operational command: shred file "${file.name}" initialized`)}
                                          className="text-[9px] bg-red-500/10 hover:bg-red-500/20 text-red-400 border border-red-500/30 px-2 py-0.5 rounded transition-all"
                                        >
                                          SHRED
                                        </button>
                                      </div>
                                    ))}
                                  </div>
                                </div>
                              )}

                              {chatMockTab === 'voip' && (
                                <div className="flex flex-col items-center justify-center h-full space-y-6 pt-6">
                                  <div className="relative">
                                    <div className="absolute inset-x-[-12px] inset-y-[-12px] bg-emerald-500/10 rounded-full animate-ping pointer-events-none" />
                                    <div className="h-16 w-16 bg-neutral-800 rounded-full flex items-center justify-center border border-white/10">
                                      <PhoneCall className="h-6 w-6 text-emerald-400" />
                                    </div>
                                  </div>

                                  <div className="text-center space-y-1">
                                    <span className="text-sm font-bold text-white block">Peer node call: Active</span>
                                    <span className="text-[10px] text-zinc-500 font-mono block">CRYPTO METRICS // 48kHz OPUS STEREO</span>
                                  </div>

                                  {/* Encrypted voice visualizer */}
                                  <div className="flex items-center gap-1.5 h-12">
                                    {[20, 48, 12, 64, 38, 54, 76, 24, 60, 42, 18, 56, 32].map((h, i) => (
                                      <span
                                        key={i}
                                        className={`w-1 rounded-full transition-all duration-300 ${
                                          simulatedTheme === 'emerald' ? 'bg-emerald-500' :
                                          simulatedTheme === 'blue' ? 'bg-blue-500' :
                                          simulatedTheme === 'purple' ? 'bg-purple-500' :
                                          simulatedTheme === 'rose' ? 'bg-rose-500' : 'bg-amber-500'
                                        }`}
                                        style={{ height: `${Math.sin(i + Date.now()/250) * 15 + 25}px` }}
                                      />
                                    ))}
                                  </div>
                                </div>
                              )}
                            </div>

                            {/* Chat bottom entry frame */}
                            <form onSubmit={handleSendMockMsg} className="p-3 bg-zinc-950 border-t border-white/5 flex gap-2 items-center z-10">
                              <input
                                type="text"
                                placeholder={chatMockTab === 'lobby' ? "Type encrypted message..." : "Channel interaction disabled"}
                                disabled={chatMockTab !== 'lobby'}
                                value={userTypedMsg}
                                onChange={(e) => setUserTypedMsg(e.target.value)}
                                className="flex-1 bg-zinc-900 border border-white/10 rounded-xl px-3 py-2 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-white/30 transition-all"
                              />
                              <button
                                type="submit"
                                disabled={chatMockTab !== 'lobby'}
                                className={`h-8 w-8 rounded-xl flex items-center justify-center text-white cursor-pointer ${
                                  chatMockTab === 'lobby' 
                                    ? (simulatedTheme === 'emerald' ? 'bg-emerald-600 hover:bg-emerald-700' :
                                       simulatedTheme === 'blue' ? 'bg-blue-600 hover:bg-blue-700' :
                                       simulatedTheme === 'purple' ? 'bg-purple-600 hover:bg-purple-700' :
                                       simulatedTheme === 'rose' ? 'bg-rose-600 hover:bg-rose-700' : 'bg-amber-600 hover:bg-amber-700')
                                    : 'bg-zinc-800 opacity-40 cursor-not-allowed'
                                }`}
                              >
                                <Send className="h-3.5 w-3.5" />
                              </button>
                            </form>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* TAB 2: CORE CAPABILITIES BENTO GRID */}
                {chatActiveTab === 'bento' && (
                  <div className="space-y-12">
                    <div className="max-w-2xl text-left space-y-2">
                      <h3 className="text-2xl font-bold font-display text-brand-text">
                        Core Built-In Specifications
                      </h3>
                      <p className="text-sm text-brand-muted font-light leading-relaxed">
                        These structural features constitute SoloChat's sovereign privacy perimeter, preventing zero-day logging and commercial parameter harvesting.
                      </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      
                      {/* 1. Invisible Ink Chat */}
                      <div className="p-6 rounded-2xl bg-brand-card border border-brand-border space-y-4 hover:border-brand-text/10 transition-all">
                        <div className="h-10 w-10 rounded-xl bg-orange-500/15 flex items-center justify-center text-orange-500">
                          <EyeOff className="h-5 w-5" />
                        </div>
                        <h4 className="text-base font-bold text-brand-text">Invisible Ink Chat</h4>
                        <p className="text-xs text-brand-muted font-light leading-relaxed">
                          Prevent visual shoulder surfing. Text and media messages reside as highly blurred blocks. Tap or hover below to temporarily reveal:
                        </p>
                        <div className="p-3 rounded-lg bg-brand-bg border border-brand-border/60 text-center">
                          <span className="text-xs font-mono font-medium text-emerald-500 select-none blur-sm hover:blur-none active:blur-none transition-all duration-350 cursor-pointer block">
                            🔒 SSH_KEY_PASSPHRASE=7df9_x87
                          </span>
                        </div>
                      </div>

                      {/* 2. Media Editor & Draw Markup */}
                      <div className="p-6 rounded-2xl bg-brand-card border border-brand-border space-y-4 hover:border-brand-text/10 transition-all">
                        <div className="h-10 w-10 rounded-xl bg-blue-500/15 flex items-center justify-center text-blue-500">
                          <Crop className="h-5 w-5" />
                        </div>
                        <h4 className="text-base font-bold text-brand-text">Media Sandbox Markup</h4>
                        <p className="text-xs text-brand-muted font-light leading-relaxed">
                          Strip EXIF capture coordinates, drawing markups, or lock secure visual watermarks before dispatching files. Hovering adds indicators:
                        </p>
                        <div className="flex gap-2 justify-center select-none">
                          {['CONFIDENTIAL', 'SHRED'].map((mark) => (
                            <span
                              key={mark}
                              onClick={() => alert(`Watermark active: ${mark}`)}
                              className="text-[9px] font-mono font-bold bg-neutral-900 border border-white/10 text-white rounded px-2 py-1 cursor-pointer hover:bg-neutral-800 transition-all"
                            >
                              🏷️ {mark}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* 3. Interactive Location Pins */}
                      <div className="p-6 rounded-2xl bg-brand-card border border-brand-border space-y-4 hover:border-brand-text/10 transition-all">
                        <div className="h-10 w-10 rounded-xl bg-emerald-500/15 flex items-center justify-center text-emerald-500">
                          <MapPin className="h-5 w-5" />
                        </div>
                        <h4 className="text-base font-bold text-brand-text">P2P Location Sharing</h4>
                        <p className="text-xs text-brand-muted font-light leading-relaxed">
                          Share custom micro-coordinates without relying on static Google API lookups. Click to update current secure ping node location:
                        </p>
                        <div className="p-2.5 rounded-lg bg-brand-bg border border-brand-border/60 flex items-center justify-between">
                          <div className="text-[11px] font-mono">
                            <span className="block text-brand-text">{mockLocation.name}</span>
                            <span className="block text-brand-muted text-[10px]">{mockLocation.lat} • {mockLocation.lng}</span>
                          </div>
                          <button
                            onClick={() => setMockLocation({ lat: '51.5074° N', lng: '0.1278° W', name: 'London Node B' })}
                            className="bg-brand-text text-brand-bg text-[9px] font-bold py-1 px-2.5 rounded hover:opacity-90 transition-all"
                          >
                            CYCLE PING
                          </button>
                        </div>
                      </div>

                      {/* 4. Voice Recorder Integrations */}
                      <div className="p-6 rounded-2xl bg-brand-card border border-brand-border space-y-4 hover:border-brand-text/10 transition-all">
                        <div className="h-10 w-10 rounded-xl bg-indigo-500/15 flex items-center justify-center text-indigo-500">
                          <Mic className="h-5 w-5" />
                        </div>
                        <h4 className="text-base font-bold text-brand-text">Sovereign Voice Notes</h4>
                        <p className="text-xs text-brand-muted font-light leading-relaxed">
                          Record, verify, and stream raw audio. Captured data resides inside ephemeral memory before being shredded from disk. Test voice recorder:
                        </p>
                        <div className="flex gap-2">
                          <button
                            onClick={() => {
                              setIsRecordingVoice(!isRecordingVoice);
                              if(!isRecordingVoice) {
                                setVoiceRecordDuration(0);
                                const interval = setInterval(() => {
                                  setVoiceRecordDuration(prev => prev + 1);
                                }, 1000);
                                (window as any)._voiceInterval = interval;
                              } else {
                                clearInterval((window as any)._voiceInterval);
                                setRecordedVoiceUrl("Encrypted OPUS stream derived successfully!");
                              }
                            }}
                            className={`flex-1 flex items-center justify-center gap-1.5 py-1.5 px-2 bg-brand-text text-brand-bg text-xs font-bold rounded-lg cursor-pointer transition-all ${
                              isRecordingVoice ? 'animate-pulse bg-red-600 text-white' : ''
                            }`}
                          >
                            <Mic className="h-3 w-3" />
                            <span>{isRecordingVoice ? `Recording ${voiceRecordDuration}s` : 'Start Voice Record'}</span>
                          </button>
                          <button
                            disabled={!recordedVoiceUrl}
                            onClick={() => alert(`OPUS Wave: ${recordedVoiceUrl}`)}
                            className="text-xs border border-brand-border px-2.5 rounded-lg disabled:opacity-40"
                          >
                            Play Note
                          </button>
                        </div>
                      </div>

                      {/* 5. Zero Server Logging */}
                      <div className="p-6 rounded-2xl bg-brand-card border border-brand-border space-y-4 hover:border-brand-text/10 transition-all">
                        <div className="h-10 w-10 rounded-xl bg-violet-500/15 flex items-center justify-center text-violet-500">
                          <Bomb className="h-5 w-5" />
                        </div>
                        <h4 className="text-base font-bold text-brand-text">Ephemeral Safes</h4>
                        <p className="text-xs text-brand-muted font-light leading-relaxed">
                          Zero backup caches residing in remote cloud frameworks. Local caches undergo deep overwrite shredding upon closing safe capsules or safe links.
                        </p>
                      </div>

                      {/* 6. Handshake Safety Numbers */}
                      <div className="p-6 rounded-2xl bg-brand-card border border-brand-border space-y-4 hover:border-brand-text/10 transition-all">
                        <div className="h-10 w-10 rounded-xl bg-rose-500/15 flex items-center justify-center text-rose-500">
                          <Key className="h-5 w-5" />
                        </div>
                        <h4 className="text-base font-bold text-brand-text">Safety Handshakes</h4>
                        <p className="text-xs text-brand-muted font-light leading-relaxed">
                          Examine public key identity hashes straight inside the channel. Avoid third-party authorization interceptors or corporate cert authority lookups.
                        </p>
                      </div>

                    </div>
                  </div>
                )}

                {/* TAB 3: CRYPTOGRAPHY MATRIX */}
                {chatActiveTab === 'security' && (
                  <div className="space-y-12">
                    <div className="max-w-2xl text-left space-y-2">
                      <h3 className="text-2xl font-bold font-display text-brand-text">
                        Zero-Knowledge Protocol Frameworks
                      </h3>
                      <p className="text-sm text-brand-muted font-light leading-relaxed">
                        SoloChat implements peer identity validation using high-entropy Diffie-Hellman operations on Secp256k1 curves.
                      </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                      {/* Left specs list */}
                      <div className="lg:col-span-5 space-y-6">
                        {[
                          { title: 'Forward Secrecy Matrix', desc: 'Compiling unique symmetric keys for individual message dispatches. Compromising a single channel key leaves historic handshakes secure.' },
                          { title: 'Zero Storage Guarantees', desc: 'No routing parameters are logged to persistent drives. Transmitting clients act as direct cryptographic socket proxies.' },
                          { title: 'Metadata Cleaning Filters', desc: 'Cleansing visual files in memory. Removing device hardware IDs, geolocation EXIF data tags, and timestamp frames.' }
                        ].map((p, i) => (
                          <div key={i} className="p-5 bg-brand-card border border-brand-border rounded-2xl flex items-start gap-4">
                            <span className="text-xs font-mono font-bold bg-emerald-500/10 text-emerald-500 rounded px-2 py-1 shrink-0 mt-0.5">
                              0{i+1}
                            </span>
                            <div className="space-y-1">
                              <span className="text-sm font-bold text-brand-text block">{p.title}</span>
                              <span className="text-xs text-brand-muted font-light leading-relaxed block">{p.desc}</span>
                            </div>
                          </div>
                        ))}
                      </div>

                      {/* Right raw protocol visualizer code blocks */}
                      <div className="lg:col-span-7">
                        <div className="rounded-2xl bg-zinc-950 border border-white/5 p-5 text-left text-neutral-300 font-mono text-[11px] leading-relaxed relative overflow-hidden">
                          <div className="flex items-center justify-between border-b border-white/5 pb-3 mb-4 select-none">
                            <span className="text-zinc-500 font-bold">handshake_protocol_handover.ts</span>
                            <span className="text-emerald-500 text-[10px]">ECC DIRECT // X3DH</span>
                          </div>

                          <div className="space-y-1 font-mono text-zinc-400">
                            <p className="text-zinc-500">// Initialize Sovereign Ephemeral Key Handover</p>
                            <p><span className="text-emerald-400">const</span> clientKeyPair = <span className="text-blue-400">Secp256k1.generateKeyPair</span>();</p>
                            <p><span className="text-emerald-400">const</span> encryptedHandshakeKey = <span className="text-blue-400">X3DH.deriveSymmetricSecret</span>(clientKeyPair.private, valToken);</p>
                            <p className="text-zinc-500 mt-2">// AES-256 Symmetric Cipher Generation</p>
                            <p><span className="text-emerald-400">const</span> cipher = <span className="text-blue-400">crypto.createCipheriv</span>(<span className="text-amber-400">'AES-256-GCM'</span>, encryptedHandshakeKey, initIv);</p>
                            <p><span className="text-emerald-400">let</span> authTag = cipher.<span className="text-blue-400">getAuthTag</span>();</p>
                            <p className="text-zinc-500 mt-2">// Force local shredding upon packet resolution</p>
                            <p>clientKeyPair.<span className="text-red-500">overwritePrivateMemory</span>(); <span className="text-emerald-500">// Zero pass scrubbed</span></p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* TAB 4: INTERACTIVE DEMO HANDSHAKE LOG PLAYGROUND */}
                {chatActiveTab === 'interactive' && (
                  <div className="space-y-12">
                    <div className="max-w-2xl text-left space-y-2">
                      <h3 className="text-2xl font-bold font-display text-brand-text">
                        System Level Handshake Controller
                      </h3>
                      <p className="text-sm text-brand-muted font-light leading-relaxed">
                        Control SoloChat sandbox parameters from this command deck in real-time. Emit peer handshake negotiations or purge local metadata capsules.
                      </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
                      {/* Controller board */}
                      <div className="md:col-span-5 p-6 rounded-2xl bg-brand-card border border-brand-border space-y-4 text-left">
                        <span className="text-[10px] font-mono uppercase tracking-wider text-brand-muted font-bold block">
                          Capsule Controller Actions
                        </span>
                        
                        <div className="space-y-3">
                          <button
                            onClick={triggerSimulatedHandshake}
                            className="w-full flex items-center justify-between p-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs transition-transform hover:scale-[1.02] cursor-pointer"
                          >
                            <span>Negotiate P2P Handshake</span>
                            <Zap className="h-4 w-4" />
                          </button>

                          <button
                            onClick={triggerSimulatedShred}
                            className="w-full flex items-center justify-between p-3 rounded-xl bg-red-600 hover:bg-red-700 text-white font-bold text-xs transition-transform hover:scale-[1.02] cursor-pointer"
                          >
                            <span>Shred Safe Capsule</span>
                            <Trash2 className="h-4 w-4" />
                          </button>
                        </div>

                        <p className="text-[10px] text-brand-muted font-light leading-normal">
                          *Executing shred forces triple-overwrites on sandbox logs, wiping historic message streams and public key traces from the preview simulator above.
                        </p>
                      </div>

                      {/* Log Console Output terminal */}
                      <div className="md:col-span-7">
                        <div className="rounded-2xl bg-zinc-950 border border-white/5 p-5 text-left text-neutral-300 font-mono text-[11px] min-h-[180px] flex flex-col justify-between">
                          <div>
                            <div className="flex items-center justify-between border-b border-white/5 pb-2 mb-3">
                              <span className="text-zinc-500 font-bold uppercase tracking-wider text-[9px]">Sovereign Console Logs</span>
                              <span className="text-emerald-500 text-[9px] hover:animate-pulse">ONLINE PING</span>
                            </div>

                            <div className="space-y-2 overflow-y-auto max-h-[160px]">
                              {simulatedLogs.map((log) => (
                                <div key={log.id} className="space-y-0.5">
                                  <div className="flex items-center gap-2">
                                    <span className="text-zinc-600 text-[9px]">{log.timestamp}</span>
                                    <span className={`text-[9px] px-1 rounded font-bold uppercase ${
                                      log.type === 'success' ? 'bg-emerald-500/10 text-emerald-400' :
                                      log.type === 'shred' ? 'bg-red-500/10 text-red-500' : 'bg-white/10 text-neutral-400'
                                    }`}>
                                      {log.sender}
                                    </span>
                                  </div>
                                  <p className="text-zinc-300 text-xs leading-relaxed pl-2 border-l border-white/5">{log.message}</p>
                                </div>
                              ))}
                            </div>
                          </div>

                          <span className="text-[9px] text-zinc-600 block mt-4 text-right">
                            Node: SH2-DH5 // Sandbox Sandbox_Logs Active
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

              </div>
              
              {/* Security Matrix Overview Card */}
              <div className="w-full">
                <div className="p-6 rounded-2xl bg-brand-card border border-brand-border text-left">
                  <h4 className="text-sm font-bold text-brand-text mb-4 flex items-center gap-2">
                    <Shield className="h-4 w-4 text-emerald-500" />
                    <span>Zero-Knowledge Sovereign Messenger Standard Protocols</span>
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="space-y-1.5 p-3 rounded-lg hover:bg-white/[0.01] transition-colors">
                      <span className="text-[10px] font-mono text-emerald-500 uppercase font-semibold">01 / Double Ratchet Cryptography</span>
                      <p className="text-xs text-brand-text font-bold">Uncompromising Forward Secrecy</p>
                      <p className="text-[11px] text-brand-muted font-light leading-relaxed">Message keys are updated constantly. If a key is exposed, only a tiny window of conversation is vulnerable.</p>
                    </div>
                    <div className="space-y-1.5 p-3 rounded-lg hover:bg-white/[0.01] transition-colors">
                      <span className="text-[10px] font-mono text-emerald-500 uppercase font-semibold">02 / Local Hardware Handshakes</span>
                      <p className="text-xs text-brand-text font-bold">Keys Managed in Hardware Secures</p>
                      <p className="text-[11px] text-brand-muted font-light leading-relaxed">Asymmetric public handshakes settle straight within the client keychain wrapper securely. Zero logs exposed.</p>
                    </div>
                    <div className="space-y-1.5 p-3 rounded-lg hover:bg-white/[0.01] transition-colors">
                      <span className="text-[10px] font-mono text-emerald-500 uppercase font-semibold">03 / Metadata Cleansing Engine</span>
                      <p className="text-xs text-brand-text font-bold">Zero Trace Communication Channels</p>
                      <p className="text-[11px] text-brand-muted font-light leading-relaxed">Automatic purging routines scrub background trace identifiers, media metadata tags, and timestamp indexes immediately.</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* Quick Handshake Call to Action Banner */}
          <section className="mt-20 rounded-[3rem] bg-brand-text px-12 py-16 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-tr from-emerald-500/10 via-transparent to-indigo-500/10 pointer-events-none" />
            <div className="relative z-10 space-y-6">
              <h2 className="font-display text-3xl font-bold tracking-tight text-brand-bg md:text-5xl">
                {selectedProduct === 'soloaccount' 
                  ? "Ready to reclaim your financial data sovereignty?" 
                  : "Ready for absolute chat integrity?"}
              </h2>
              <p className="mx-auto max-w-xl text-sm sm:text-base text-brand-bg/80 leading-relaxed font-light">
                {selectedProduct === 'soloaccount'
                  ? "Join the thousands of developers, architects, and power users tracking their ledger sheets securely with zero internet leaks."
                  : "Deploy our peer-to-peer messaging networks inside your local team infrastructure with complete cryptographic immunity."}
              </p>
              <div className="pt-4 flex flex-col sm:flex-row justify-center gap-3">
                <a 
                  href={selectedProduct === 'soloaccount' ? "https://soloaccount.solosoftwares.com" : "#"}
                  target={selectedProduct === 'soloaccount' ? "_blank" : undefined}
                  rel={selectedProduct === 'soloaccount' ? "noreferrer" : undefined}
                  onClick={(e) => {
                    if (selectedProduct === 'solochat') {
                      e.preventDefault();
                      alert('Sovereign SoloChat client compilation model initialized. Local Node instance live at 127.0.0.1:4040.');
                    }
                  }}
                  className="rounded-full bg-brand-bg px-8 py-3.5 text-sm font-bold text-brand-text transition-all hover:bg-neutral-100 hover:scale-[1.03] text-center"
                >
                  {selectedProduct === 'soloaccount' ? "Launch App Instantly (Local Mode)" : "Launch SoloChat P2P Client"}
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
