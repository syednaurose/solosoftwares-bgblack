import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowLeft, ArrowRight, Laptop, Tablet, Smartphone, Check, Globe, Shield, Zap, BarChart3, Users2, Cpu } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

interface ProductPageProps {
  isDarkMode: boolean;
  setIsDarkMode: (val: boolean) => void;
}

const screens = [
  {
    id: 'login',
    title: 'Secure Portal',
    description: 'Enterprise-grade authentication with SSO, multi-factor security, and granular access controls for your entire team.',
    icon: <Shield className="h-6 w-6" />,
    image: '/app_login.png',
    features: ['SAML/SSO Integration', 'Multi-factor Auth', 'Role-based Access', 'Device Management']
  },
  {
    id: 'dashboard',
    title: 'Executive Dashboard',
    description: 'A birds-eye view of your global financial health. Real-time metrics, liquidity ratios, and automated cash flow forecasting.',
    icon: <BarChart3 className="h-6 w-6" />,
    image: '/dashboard.png',
    features: ['Total Revenue Tracking', 'Expense Breakdown', 'Cash Flow Forecasts', 'Entity Performance Overlay']
  },
  {
    id: 'reconciliation',
    title: 'Global Reconciliation',
    description: 'Automated matching engine that processes millions of transactions across diverse accounts and currencies.',
    icon: <Zap className="h-6 w-6" />,
    image: '/input_file_2.png',
    features: ['Auto-Matching System', 'Discrepancy Resolution', 'Audit-Ready Reporting', 'Bank-to-Book Sync']
  },
  {
    id: 'treasury',
    title: 'Treasury Analytics',
    description: 'Sophisticated treasury management for global operations, optimizing liquidity and minimizing risk.',
    icon: <BarChart3 className="h-6 w-6" />,
    image: '/input_file_3.png',
    features: ['Liquidity Buffers', 'Investment Tracking', 'Hedge Management', 'Currency Risk Reports']
  },
  {
    id: 'cashflow',
    title: 'Live Cashflow',
    description: 'Real-time visibility into incoming and outgoing funds with predictive modeling for future capital needs.',
    icon: <BarChart3 className="h-6 w-6" />,
    image: '/input_file_4.png',
    features: ['Velocity Metrics', 'Burn Rate Analysis', 'Forecast Comparisons', 'Cash Runway View']
  },
  {
    id: 'liquidity',
    title: 'Liquidity Management',
    description: 'Deep visibility into cash positions across all global regions and bank accounts.',
    icon: <Shield className="h-6 w-6" />,
    image: '/input_file_5.png',
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

const additionalFeatures = [
  {
    title: "Global Tax Engine",
    description: "Automated VAT, GST, and local tax compliance across 150+ jurisdictions with real-time rate updates.",
    icon: <Globe className="h-8 w-8" />
  },
  {
    title: "AI Ledger Analysis",
    description: "Proprietary machine learning models that detect anomalies and predict cash flow patterns with 99% accuracy.",
    icon: <Cpu className="h-8 w-8" />
  },
  {
    title: "Neural Analytics",
    description: "Deep-dive financial reporting with immersive visualizations and multi-dimensional data slicing.",
    icon: <BarChart3 className="h-8 w-8" />
  },
  {
    title: "Collaborative Control",
    description: "Granular permission sets and real-time audit trails for distributed finance teams and external stakeholders.",
    icon: <Users2 className="h-8 w-8" />
  },
  {
    title: "Developer First",
    description: "Extensive REST API and webhooks designed to integrate SoloAccount into your core product infrastructure.",
    icon: <Zap className="h-8 w-8" />
  },
  {
    title: "Dynamic Workflows",
    description: "Custom approval chains and automated reconciliation rules tailored to your unique business logic.",
    icon: <Check className="h-8 w-8" />
  }
];

export default function ProductPage({ isDarkMode, setIsDarkMode }: ProductPageProps) {
  const [currentScreen, setCurrentScreen] = useState(0);
  const [currentFeature, setCurrentFeature] = useState(0);
  const [viewMode, setViewMode] = useState<'laptop' | 'tablet' | 'mobile'>('laptop');

  const nextScreen = () => setCurrentScreen((prev) => (prev + 1) % screens.length);
  const prevScreen = () => setCurrentScreen((prev) => (prev - 1 + screens.length) % screens.length);

  const containerVariants = {
    initial: { opacity: 0, x: 20 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -20 },
  };

  return (
    <div className="min-h-screen bg-brand-bg font-sans selection:bg-brand-text/20">
      <Navbar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />

      <main className="pt-32">
        <div className="mx-auto max-w-7xl px-6">
          <Link to="/" className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-brand-muted hover:text-brand-text transition-colors">
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </Link>

          <header className="mb-20">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="font-display text-4xl font-bold tracking-tight text-brand-text md:text-6xl"
            >
              The Interface of <span className="text-brand-muted">Precision.</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="mt-6 max-w-2xl text-lg text-brand-muted"
            >
              Explore how SoloAccount reimagines financial management through a sophisticated, 
              low-latency interface designed for professional finance teams.
            </motion.p>
          </header>

          <section className="mb-32">
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
              {/* Interaction Details */}
              <div className="lg:col-span-5 flex flex-col justify-center">
                <AnimatePresence mode="wait">
                  <motion.div 
                    key={screens[currentScreen].id}
                    variants={containerVariants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    transition={{ duration: 0.3 }}
                  >
                    <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-text/10 text-brand-text">
                      {screens[currentScreen].icon}
                    </div>
                    <h2 className="font-display text-3xl font-bold text-brand-text mb-4">
                      {screens[currentScreen].title}
                    </h2>
                    <p className="text-brand-muted text-lg mb-8 leading-relaxed">
                      {screens[currentScreen].description}
                    </p>
                    <ul className="mb-10 grid grid-cols-1 gap-4 sm:grid-cols-2">
                      {screens[currentScreen].features.map((f, i) => (
                        <li key={i} className="flex items-center gap-3 text-sm text-brand-text/80">
                          <Check className="h-4 w-4 text-emerald-500" />
                          {f}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                </AnimatePresence>

                <div className="mt-12 flex flex-col gap-8">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between text-xs font-bold uppercase tracking-widest text-brand-muted">
                      <span>Experience {currentScreen + 1} of {screens.length}</span>
                      <span>{Math.round(((currentScreen + 1) / screens.length) * 100)}%</span>
                    </div>
                    <div className="h-1 w-full overflow-hidden rounded-full bg-brand-border">
                      <motion.div 
                        className="h-full bg-brand-text"
                        initial={false}
                        animate={{ width: `${((currentScreen + 1) / screens.length) * 100}%` }}
                        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                      />
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <button 
                      onClick={prevScreen}
                      className="flex h-12 w-12 items-center justify-center rounded-full border border-brand-border bg-brand-card text-brand-text hover:bg-brand-text/10 transition-colors"
                    >
                      <ArrowLeft className="h-5 w-5" />
                    </button>
                    <button 
                      onClick={nextScreen}
                      className="group flex flex-1 items-center justify-between rounded-full border border-brand-border bg-brand-card px-6 py-3 text-sm font-bold text-brand-text transition-all hover:bg-brand-text/5 active:scale-[0.98]"
                    >
                      <span>Next Interface</span>
                      <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Screenshot Viewer */}
              <div className="lg:col-span-7 flex flex-col items-center">
                {/* Enhanced Viewer Progress Bar */}
                <div className="mb-6 w-full max-w-md px-4">
                  <div className="flex items-center justify-between text-[10px] font-bold uppercase tracking-[0.2em] text-brand-muted mb-3">
                    <span>Interface {currentScreen + 1} / {screens.length}</span>
                    <span className="text-brand-text">{screens[currentScreen].title}</span>
                  </div>
                  <div className="h-1 w-full overflow-hidden rounded-full bg-brand-border/50">
                    <motion.div 
                      className="h-full bg-brand-text"
                      initial={false}
                      animate={{ width: `${((currentScreen + 1) / screens.length) * 100}%` }}
                      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                    />
                  </div>
                </div>

                <div className="mb-8 flex items-center gap-2 rounded-full border border-brand-border bg-brand-card p-1">
                  <button 
                    onClick={() => setViewMode('laptop')}
                    className={`flex h-10 w-10 items-center justify-center rounded-full transition-colors ${viewMode === 'laptop' ? 'bg-brand-text text-brand-bg' : 'text-brand-muted hover:text-brand-text'}`}
                  >
                    <Laptop className="h-5 w-5" />
                  </button>
                  <button 
                    onClick={() => setViewMode('tablet')}
                    className={`flex h-10 w-10 items-center justify-center rounded-full transition-colors ${viewMode === 'tablet' ? 'bg-brand-text text-brand-bg' : 'text-brand-muted hover:text-brand-text'}`}
                  >
                    <Tablet className="h-5 w-5" />
                  </button>
                  <button 
                    onClick={() => setViewMode('mobile')}
                    className={`flex h-10 w-10 items-center justify-center rounded-full transition-colors ${viewMode === 'mobile' ? 'bg-brand-text text-brand-bg' : 'text-brand-muted hover:text-brand-text'}`}
                  >
                    <Smartphone className="h-5 w-5" />
                  </button>
                </div>

                {/* Device Frame */}
                <div className={`relative transition-all duration-500 ease-in-out ${
                  viewMode === 'laptop' ? 'w-full aspect-[16/10]' : 
                  viewMode === 'tablet' ? 'w-[70%] aspect-[3/4]' : 
                  'w-[40%] aspect-[9/19]'
                }`}>
                  <div className="h-full w-full overflow-hidden rounded-[2rem] border-[8px] border-neutral-800 bg-neutral-900 shadow-2xl p-4">
                    <div className="h-full w-full rounded-2xl bg-brand-bg relative overflow-hidden">
                      {/* Interface Mockup Content */}
                      <AnimatePresence mode="wait">
                        <motion.div 
                          key={`${screens[currentScreen].id}-${viewMode}`}
                          initial={{ opacity: 0, scale: 0.98 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 1.02 }}
                          transition={{ duration: 0.4 }}
                          className="h-full w-full flex flex-col"
                        >
                          {screens[currentScreen].image ? (
                            <div className="h-full w-full flex items-center justify-center bg-brand-bg p-4 relative group">
                              <img 
                                src={screens[currentScreen].image} 
                                alt={`${screens[currentScreen].title} Mockup`} 
                                className="max-h-full w-auto object-contain shadow-inner"
                                referrerPolicy="no-referrer"
                              />
                            </div>
                          ) : (
                            <div className="flex flex-col p-6 h-full">
                              <div className="flex items-center justify-between mb-8">
                                <div className="h-4 w-24 rounded bg-brand-text/10" />
                                <div className="flex gap-2">
                                  <div className="h-6 w-6 rounded-full bg-brand-text/5" />
                                  <div className="h-6 w-6 rounded-full bg-brand-text/5" />
                                </div>
                              </div>
                              <div className="flex-1 space-y-6 text-center flex flex-col justify-center">
                                <div className="h-48 w-full rounded-2xl bg-gradient-to-br from-brand-text/5 to-transparent border border-brand-text/10 flex flex-col items-center justify-center gap-4">
                                  <div className="h-12 w-12 rounded-xl bg-brand-text/10 flex items-center justify-center text-brand-text">
                                    {screens[currentScreen].icon}
                                  </div>
                                  <span className="text-brand-text font-display font-bold uppercase tracking-widest text-xs">
                                    {screens[currentScreen].title} Interface
                                  </span>
                                  <p className="text-[10px] text-brand-muted max-w-[200px] uppercase tracking-wider">Interface pending production export</p>
                                </div>
                              </div>
                            </div>
                          )}
                        </motion.div>
                      </AnimatePresence>
                    </div>
                  </div>
                </div>

                {/* Thumbnail Navigation */}
                <div className="mt-12 flex w-full max-w-2xl px-4 overflow-x-auto gap-3 pb-4 scrollbar-hide no-scrollbar">
                  {screens.map((screen, idx) => (
                    <button
                      key={screen.id}
                      onClick={() => setCurrentScreen(idx)}
                      className={`relative flex-shrink-0 w-24 aspect-video rounded-lg border-2 overflow-hidden transition-all duration-300 ${
                        currentScreen === idx 
                        ? 'border-brand-text scale-110 shadow-lg z-10' 
                        : 'border-brand-border opacity-40 hover:opacity-100 hover:scale-105'
                      }`}
                    >
                      {screen.image ? (
                        <img 
                          src={screen.image} 
                          alt={screen.title} 
                          className="h-full w-full object-cover"
                          referrerPolicy="no-referrer"
                        />
                      ) : (
                        <div className="h-full w-full bg-brand-card flex items-center justify-center text-brand-muted">
                          {screen.icon}
                        </div>
                      )}
                      <div className="absolute inset-0 bg-black/40 flex items-end p-1">
                        <span className="text-[8px] font-bold text-white truncate w-full uppercase tracking-tighter">
                          {screen.title}
                        </span>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </section>
          
          {/* Feature Descriptions Carousel */}
          <section className="mb-32 py-20 border-t border-brand-border">
            <div className="text-center mb-16 px-4">
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="font-display text-3xl font-bold text-brand-text md:text-5xl mb-4"
              >
                Core Capabilities
              </motion.h2>
              <motion.p 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-brand-muted max-w-2xl mx-auto text-lg"
              >
                Discover the sophisticated tools built into the heart of SoloAccount.
              </motion.p>
            </div>

            <div className="relative mx-auto max-w-4xl px-4">
              <div className="overflow-hidden bg-brand-card border border-brand-border rounded-[2.5rem] p-8 md:p-16 shadow-lg shadow-brand-text/5">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentFeature}
                    initial={{ opacity: 0, scale: 0.95, y: 10 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 1.05, y: -10 }}
                    transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                    className="flex flex-col items-center text-center"
                  >
                    <div className="mb-10 flex h-24 w-24 items-center justify-center rounded-[2rem] bg-brand-text/5 text-brand-text border border-brand-text/10 shadow-inner">
                      {additionalFeatures[currentFeature].icon}
                    </div>
                    <h3 className="font-display text-2xl font-bold text-brand-text mb-6 md:text-4xl tracking-tight">
                      {additionalFeatures[currentFeature].title}
                    </h3>
                    <p className="text-brand-muted text-lg md:text-xl leading-relaxed mb-12 max-w-2xl">
                      {additionalFeatures[currentFeature].description}
                    </p>
                  </motion.div>
                </AnimatePresence>

                {/* Indicators */}
                <div className="flex justify-center gap-3">
                  {additionalFeatures.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentFeature(idx)}
                      className={`h-1.5 transition-all duration-500 rounded-full ${
                        currentFeature === idx ? 'w-10 bg-brand-text' : 'w-2 bg-brand-border hover:bg-brand-text/30'
                      }`}
                      aria-label={`Go to feature ${idx + 1}`}
                    />
                  ))}
                </div>
              </div>

              {/* Navigation Buttons for Features */}
              <div className="absolute top-1/2 left-0 lg:-left-12 -translate-y-1/2 translate-x-4 lg:translate-x-0 hidden md:block">
                <button 
                  onClick={() => setCurrentFeature((prev) => (prev - 1 + additionalFeatures.length) % additionalFeatures.length)}
                  className="flex h-14 w-14 items-center justify-center rounded-full border border-brand-border bg-brand-bg text-brand-text hover:bg-brand-text/10 transition-all shadow-xl active:scale-90"
                  aria-label="Previous feature"
                >
                  <ArrowLeft className="h-6 w-6" />
                </button>
              </div>
              <div className="absolute top-1/2 right-0 lg:-right-12 -translate-y-1/2 -translate-x-4 lg:translate-x-0 hidden md:block">
                <button 
                  onClick={() => setCurrentFeature((prev) => (prev + 1) % additionalFeatures.length)}
                  className="flex h-14 w-14 items-center justify-center rounded-full border border-brand-border bg-brand-bg text-brand-text hover:bg-brand-text/10 transition-all shadow-xl active:scale-90"
                  aria-label="Next feature"
                >
                  <ArrowRight className="h-6 w-6" />
                </button>
              </div>
              
              {/* Mobile Navigation */}
              <div className="mt-8 flex justify-between md:hidden">
                <button 
                  onClick={() => setCurrentFeature((prev) => (prev - 1 + additionalFeatures.length) % additionalFeatures.length)}
                  className="flex h-12 w-12 items-center justify-center rounded-full border border-brand-border bg-brand-card text-brand-text active:scale-90"
                >
                  <ArrowLeft className="h-5 w-5" />
                </button>
                <button 
                  onClick={() => setCurrentFeature((prev) => (prev + 1) % additionalFeatures.length)}
                  className="flex h-12 w-12 items-center justify-center rounded-full border border-brand-border bg-brand-card text-brand-text active:scale-90"
                >
                  <ArrowRight className="h-5 w-5" />
                </button>
              </div>
            </div>
          </section>

          {/* Demo Section */}
          <section className="mb-20 rounded-[3rem] bg-brand-text px-12 py-20 text-center">
            <h2 className="font-display text-4xl font-bold tracking-tight text-brand-bg md:text-6xl mb-8">
              Experience it for yourself.
            </h2>
            <p className="mx-auto max-w-xl text-lg text-brand-bg/80 mb-12">
              Join the thousands of financial leaders using SoloAccount to power their multi-entity operations.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a 
                href="https://soloaccount.solosoftwares.com" 
                target="_blank" 
                rel="noreferrer"
                className="rounded-full bg-brand-bg px-8 py-4 text-base font-bold text-brand-text transition-all hover:bg-neutral-100 hover:scale-105"
              >
                Go to Application
              </a>
              <button className="rounded-full border border-brand-bg/20 bg-transparent px-8 py-4 text-base font-bold text-brand-bg transition-all hover:bg-brand-bg/10">
                Partner with us
              </button>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
