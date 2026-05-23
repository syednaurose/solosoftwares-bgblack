import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ArrowRight, 
  ChevronRight, 
  Globe, 
  Cpu, 
  BarChart3, 
  Users2, 
  Code2, 
  Settings, 
  Check, 
  Shield, 
  Zap, 
  Layers, 
  Star, 
  Sliders, 
  Award, 
  Briefcase, 
  Activity, 
  CheckCircle2, 
  TrendingUp, 
  Building2,
  Lock,
  ChevronDown,
  Brain,
  Server,
  Workflow,
  Database,
  Layout,
  FileJson,
  Terminal
} from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import appLogin from '../assets/app_login.png';
import dashboard from '../assets/dashboard.png';

interface HomePageProps {
  isDarkMode: boolean;
  setIsDarkMode: (val: boolean) => void;
}

// Technical specifications for the interactive active modules
interface SystemModuleSpec {
  id: string;
  roleType: string;
  moduleName: string;
  avatarAccent: string;
  iconName: string; // 'brain' | 'server' | 'workflow' | 'database' | 'layout' | 'file-json'
  tagline: string;
  version: string;
  metricValue: string;
  metricLabel: string;
  keyCapabilities: string[];
  architectureStack: string[];
  complianceVetting: string;
  productionOutcome: string;
  deploymentStatus: string;
}

const talentProfiles: SystemModuleSpec[] = [
  {
    id: 'ai-core',
    roleType: 'Developers (AI)',
    moduleName: 'Autonomous Agentic Core',
    avatarAccent: 'from-emerald-500 to-teal-700',
    iconName: 'brain',
    tagline: 'Self-correcting ledger auditing & transaction categorization models.',
    version: 'v3.2.1-Active',
    metricValue: '99.94%',
    metricLabel: 'Auto-Closing Accuracy',
    keyCapabilities: ['Multi-agent debate consensus', 'Strict schema boundary verification', 'Automated anomaly highlighting', 'Vector token parsing'],
    architectureStack: ['Gemini 1.5 Pro', 'TypeScript Core SDK', 'PyTorch Tensor Flow', 'Chroma DB Embeddings'],
    complianceVetting: 'Sandboxed inside SOC2 Type II isolated secure virtual runtimes with TLS 1.3 encryption.',
    productionOutcome: 'Reduced end-of-month manual transaction audits down to minutes while flagging 1,420 reconciliation gaps.',
    deploymentStatus: 'Continuous Delivery / Verified Build Active'
  },
  {
    id: 'cloud-arch',
    roleType: 'Cloud Architects',
    moduleName: 'Zero-Idle FinOps Autoscaler',
    avatarAccent: 'from-blue-600 to-indigo-800',
    iconName: 'server',
    tagline: 'High-density microservice orchestrator optimized for peerless unit costing.',
    version: 'v1.9.4-LTS',
    metricValue: '94% Lower',
    metricLabel: 'Idle Compute Expenses',
    keyCapabilities: ['Horizontal Pod Autoscaling (HPA)', 'Vite SSR static rendering bounds', 'Pre-warmed cold start pooling', 'Failover ledger mirror state'],
    architectureStack: ['Kubernetes Engine', 'Terraform Cloud IaC', 'Docker Sandbox', 'AWS Core APIs'],
    complianceVetting: 'Subject to continuous runtime penetration tests and isolated Docker daemon audits.',
    productionOutcome: 'Ensures transaction pipelines can scale to 12,500 active req/sec with negligible latency overhead.',
    deploymentStatus: 'Kubernetes / Cloud Run Native Deploy ready'
  },
  {
    id: 'finance-systems',
    roleType: 'Finance Systems',
    moduleName: 'Double-Entry Compliance Engine',
    avatarAccent: 'from-amber-500 to-orange-700',
    iconName: 'workflow',
    tagline: 'Fully localized tax calculators updating values dynamically across borders.',
    version: 'v4.0.2',
    metricValue: '150+',
    metricLabel: 'Tax Jurisdictions Supported',
    keyCapabilities: ['Real-time VAT/GST rules', 'Hourly live rate ingest pipelines', 'Double-entry integrity check', 'Immutable ledger indexing'],
    architectureStack: ['Go Microservices', 'ISO 20022 Schema Validator', 'Redis cached tax database', 'gRPC streams'],
    complianceVetting: 'Certified fully compliant with GAAP and IFRS ledger tracking standards globally.',
    productionOutcome: 'Aggregates and consolidates multi-entity operations spanning 40+ countries in less than 2 minutes.',
    deploymentStatus: 'Fully certified financial ledger build'
  },
  {
    id: 'storage-data',
    roleType: 'Storage Data',
    moduleName: 'ACID Distributed Storage',
    avatarAccent: 'from-orange-500 to-red-600',
    iconName: 'database',
    tagline: 'Raft-stabilized low-latency persistence representing ultimate data truth.',
    version: 'v5.1.0-Release',
    metricValue: '99.999%',
    metricLabel: 'Storage Access SLA',
    keyCapabilities: ['Raft consensus protocol sync', 'Write-ahead transaction logging', 'Double-hash encryption at rest', 'Device IndexedDB sync support'],
    architectureStack: ['PostgreSQL Core Engine', 'ScyllaDB cluster partitions', 'Redis Cache layers', 'Consensus Ledgers'],
    complianceVetting: 'Strict AES-256 local isolation with optional client-side cryptographic key management systems.',
    productionOutcome: 'Flawlessly writes and confirms state across thousands of nodes, maintaining persistent offline-first cache safety.',
    deploymentStatus: 'High Availability Distributed Stack Active'
  },
  {
    id: 'web-dev',
    roleType: 'Web Developments',
    moduleName: 'High-Density Interface Canvas',
    avatarAccent: 'from-purple-500 to-pink-700',
    iconName: 'layout',
    tagline: 'Responsive typography, bento-grid modules, and rich D3 analytical charts.',
    version: 'v2.2.0',
    metricValue: '0ms CLS',
    metricLabel: 'Cumulative Layout Shift',
    keyCapabilities: ['Real-time interactive D3 widgets', 'Seamless sub-page gestures', 'Command palette routing system', 'Fluid smooth state interpolation'],
    architectureStack: ['React 18 / Vite 5', 'Tailwind CSS v4', 'Framer Motion', 'D3.js Visualization'],
    complianceVetting: 'Strict compliance maintained against modern WCAG 2.1 AA and screen-reader standards.',
    productionOutcome: 'Users enjoy rich transaction drilldowns, custom ledger filters, and live insights with ZERO visual clutter.',
    deploymentStatus: 'Client-facing modern SPA bundle optimized'
  },
  {
    id: 'erp-solutions',
    roleType: 'ERP Solutions',
    moduleName: 'Enterprise ERP Integrator',
    avatarAccent: 'from-cyan-500 to-blue-700',
    iconName: 'file-json',
    tagline: 'Double-entry journal sync bridges targeting disjoint legacy systems.',
    version: 'v1.12.0',
    metricValue: '10x Faster',
    metricLabel: 'ERP Data Ingest Speeds',
    keyCapabilities: ['SAP S/4HANA double-entry adapter', 'Oracle NetSuite web hook listener', 'Fail-safe event queues', 'Data schema normalizers'],
    architectureStack: ['Spring Boot Service', 'SOAP-to-JSON Adapters', 'Kafka Event Queues', 'RESTful API Bridges'],
    complianceVetting: 'Secured via standard corporate OAuth boundaries, JWT verification keys, and IP white-listing policies.',
    productionOutcome: 'Successfully bridge and ingest transactional summaries from older mainframes with zero data loss.',
    deploymentStatus: 'Ready for enterprise ERP configuration'
  }
];

const getIconComponent = (iconName: string) => {
  switch (iconName) {
    case 'brain': return <Brain className="h-7 w-7 text-white" />;
    case 'server': return <Server className="h-7 w-7 text-white" />;
    case 'workflow': return <Workflow className="h-7 w-7 text-white" />;
    case 'database': return <Database className="h-7 w-7 text-white" />;
    case 'layout': return <Layout className="h-7 w-7 text-white" />;
    case 'file-json': return <FileJson className="h-7 w-7 text-white" />;
    default: return <Cpu className="h-7 w-7 text-white" />;
  }
};

export default function HomePage({ isDarkMode, setIsDarkMode }: HomePageProps) {
  const [activeSection, setActiveSection] = useState('hero');
  const [selectedRoleIndex, setSelectedRoleIndex] = useState(0);
  
  // Custom states for ROI Estimator
  const [entitiesCount, setEntitiesCount] = useState(15);
  const [transactionVolume, setTransactionVolume] = useState(120000);

  useEffect(() => {
    const sections = ['features', 'testimonials', 'pricing', 'blog', 'faq', 'contact'];
    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -70% 0px',
      threshold: 0
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    sections.forEach(id => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    // Scroll to the hash section on initial page load if present
    if (window.location.hash) {
      const targetId = window.location.hash.replace('#', '');
      const element = document.getElementById(targetId);
      if (element) {
        const timer = setTimeout(() => {
          const navbarHeight = 90;
          const elementPosition = element.getBoundingClientRect().top + window.scrollY;
          const offsetPosition = elementPosition - navbarHeight;
          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }, 150);
        return () => clearTimeout(timer);
      }
    }
  }, []);

  const selectedProfile = talentProfiles[selectedRoleIndex];

  // ROI calculations
  const weeklyHoursSaved = entitiesCount * 12;
  const compliantMarkets = Math.min(180, Math.round(entitiesCount * 4.5 + 10));
  const estimatedSavings = Math.round((entitiesCount * 12 * 85) + (transactionVolume * 0.035));

  const features = [
    {
      icon: <Globe className="h-6 w-6" />,
      title: "Global Tax Engine",
      description: "Automated VAT, GST, and local tax compliance across 150+ jurisdictions with real-time rate updates."
    },
    {
      icon: <Cpu className="h-6 w-6" />,
      title: "AI Ledger Analysis",
      description: "Proprietary machine learning models that detect anomalies and predict cash flow patterns with 99% accuracy."
    },
    {
      icon: <BarChart3 className="h-6 w-6" />,
      title: "Neural Analytics",
      description: "Deep-dive financial reporting with immersive visualizations and multi-dimensional data slicing."
    },
    {
      icon: <Users2 className="h-6 w-6" />,
      title: "Collaborative Control",
      description: "Granular permission sets and real-time audit trails for distributed finance teams and external stakeholders."
    },
    {
      icon: <Code2 className="h-6 w-6" />,
      title: "Developer First",
      description: "Extensive REST API and webhooks designed to integrate SoloAccount into your core product infrastructure."
    },
    {
      icon: <Settings className="h-6 w-6" />,
      title: "Dynamic Workflows",
      description: "Custom approval chains and automated reconciliation rules tailored to your unique business logic."
    }
  ];

  const testimonials = [
    {
      quote: "Solo Softwares transformed our multi-entity reporting from weeks to seconds. Their engineering solutions represent outstanding digital systems design.",
      author: "Sarah Chen",
      role: "CFO at Nexus Global",
      avatar: "SC"
    },
    {
      quote: "The deep anomaly detection saved us from a major balance sheet discrepancy. Our audit process is now proactive, fast, and entirely friction-free.",
      author: "Marcus Thorne",
      role: "Head of Finance at Voltz",
      avatar: "MT"
    },
    {
      quote: "An engineered accounting tool that actually speaks developers' language. The modular system integrated with our container setup in under a day.",
      author: "Elena Rodriguez",
      role: "CTO at Innovate Labs",
      avatar: "ER"
    }
  ];

  const plans = [
    {
      name: "Standard",
      price: "$0",
      description: "Perfect for fast-moving startups.",
      features: ["Up to 5 entities", "Real-time ledger sync", "Basic AI insights", "Community support"]
    },
    {
      name: "Professional",
      price: "$0",
      description: "Scale your global operations.",
      features: ["Unlimited entities", "Global tax engine", "Neural analytics", "Priority email support"],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$0",
      description: "Unhindered control and security.",
      features: ["Custom workflows", "SOC2 compliance", "Dedicated specialist", "SLA guarantees"]
    }
  ];

  const blogPosts = [
    {
      title: "Architecting Autonomous AI Reconciliators for Mission-Critical Ledgers",
      excerpt: "How intelligent agents leverage real-time state analysis, zero-trust token handshakes, and strict multi-turn verification workflows to fully automate corporate bank transaction matching.",
      date: "May 23, 2026",
      category: "Developers (AI)",
      featured: true
    },
    {
      title: "Zero-Idle FinOps: Autoscaling High-Density Ledger Clusters",
      excerpt: "Designing resilient k8s infrastructure with fast cold-starts so global multi-currency databases operate at peerless efficiency with negligible overhead expenses.",
      date: "May 20, 2026",
      category: "Cloud Architects"
    },
    {
      title: "Real-time Multi-Jurisdictional Tax & Ledger Consolidation",
      excerpt: "Unifying multi-entity cross-border accounts with automated hourly VAT, GST updates, and SOC2 secure isolation frameworks.",
      date: "May 18, 2026",
      category: "Finance Systems"
    },
    {
      title: "Designing Immersive High-Density Interfaces for Modern SaaS Managers",
      excerpt: "Applying rigorous typographic pairings, custom Tailwind spacing metrics, and responsive bento-grids to keep dense telemetry and notes visualizable on tablet screens.",
      date: "May 15, 2026",
      category: "SaaS Pioneers"
    }
  ];

  const faqCategories = [
    {
      title: "🏠 Getting Started & Interface",
      questions: [
        {
          question: "What languages does SoloAccount support, and does it work with right-to-left layout?",
          answer: "The app fully supports English, Arabic, and Tamil. It includes native RTL (Right-to-Left) optimization for Arabic, along with localized number and currency formatting."
        },
        {
          question: "Can I use SoloAccount on my smartphone like a normal app?",
          answer: "Yes. SoloAccount is built as a Progressive Web App (PWA). You can install it directly onto your mobile home screen or desktop, and it supports mobile gestures like pull-to-refresh."
        },
        {
          question: "What is the fastest way to navigate the app without clicking through menus?",
          answer: "You can use the built-in Command Palette (Ctrl + K or Cmd + K) to instantly search, jump between pages, and trigger quick actions."
        }
      ]
    },
    {
      title: "🔐 Security & Data Privacy",
      questions: [
        {
          question: "Where is my financial data stored, and can anyone else see it?",
          answer: "SoloAccount is a privacy-first application. Your data is encrypted and stored locally on your device using IndexedDB. Your sensitive financial information is never uploaded to public servers without your permission."
        },
        {
          question: "Does SoloAccount support biometric login?",
          answer: "Yes. You can secure your app using your device's native fingerprint scanner or facial recognition (Face ID / Touch ID)."
        },
        {
          question: "Can I use the application when I do not have an internet connection?",
          answer: "Yes. The app features full offline functionality. You can log transactions, check budgets, and view reports offline. Local data will update currency rates once connection returns."
        },
        {
          question: "How do I back up my data or move it to a new device?",
          answer: "Go to Settings > Data Management to manually export your data payload. You can import this file on any new device to restore your account history. Optional cloud synchronization via Firebase is also supported."
        }
      ]
    },
    {
      title: "💸 Accounts & Transactions",
      questions: [
        {
          question: "What types of accounts can I track inside the app?",
          answer: "You can create and manage multiple accounts across four distinct categories: Cash, Bank, Credit Card, and E-wallet."
        },
        {
          question: "Can I manage accounts using different world currencies?",
          answer: "Yes. SoloAccount features multi-currency support. The app captures historical exchange rates using live APIs during transaction entry to ensure your total net worth remains accurate."
        },
        {
          question: "Can I hide a specific savings or business account from my main dashboard metrics?",
          answer: "Yes. In your Account Settings, toggle \"Exclude from Dashboard Totals\". The account balance will update individually but will not distort your daily spending overview."
        },
        {
          question: "I made a mistake while entering a transaction. Can I reverse it?",
          answer: "Yes. The application features built-in undo and redo functionality for instant data corrections."
        }
      ]
    },
    {
      title: "🤖 AI Features & Forecasting",
      questions: [
        {
          question: "How does the AI integration help me manage my money?",
          answer: "The embedded AI engine automatically scans transaction descriptions to suggest the correct category, isolates recurring payment anomalies to detect forgotten subscriptions, and provides personalized spending insights on your dashboard."
        },
        {
          question: "What is the Forecasting feature and how does it predict my future cash flow?",
          answer: "The forecasting tool reads your historical income and spending patterns to create future cash flow projections. You can also use Scenario Planning to see how a major purchase or salary change affects your long-term financial runway."
        }
      ]
    },
    {
      title: "📊 Budgets, Goals, & Debt",
      questions: [
        {
          question: "Will SoloAccount alert me if I am spending too much money?",
          answer: "Yes. You can set customized, category-specific monthly budget limits. The app monitors your real-time spending and sends notification alerts as you approach your limits."
        },
        {
          question: "How does the Debt Management feature calculate what I owe?",
          answer: "It tracks your active loans or credit cards, creates payment schedules, factors in interest calculations, and visualizes your debt reduction progress over a structured timeline."
        },
        {
          question: "Can I use Markdown syntax in the built-in Notes module?",
          answer: "Yes. The notes feature natively parses Markdown. You can create rich text lists, tables, and bold headers to brainstorm financial plans or log shopping lists, with global search across all text entries."
        }
      ]
    }
  ];

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6, ease: "easeOut" as const }
  };

  const staggerContainer = {
    initial: {},
    whileInView: {
      transition: {
        staggerChildren: 0.1
      }
    },
    viewport: { once: true }
  };

  return (
    <div className="min-h-screen bg-brand-bg font-sans selection:bg-brand-text/30 text-brand-text transition-colors duration-300">
      <Navbar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} activeSection={activeSection} />

      {/* 🚀 Segment 1: TOPTAL-INSPIRED PREMIUM HERO WITH INTERACTIVE TALENT DRILL-DOWN */}
      <main className="relative pt-32 pb-24 overflow-hidden border-b border-brand-border">
        {/* Subtle decorative grid lines inspired by premium consulting networks */}
        <div className="absolute inset-x-0 top-0 h-[400px] bg-[linear-gradient(to_right,rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.02)_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

        <div className="mx-auto max-w-7xl px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left side: Premium, authoritative value proposition */}
            <div className="lg:col-span-7 space-y-8 text-left">
              <div className="inline-flex items-center gap-2 rounded-full border border-brand-border bg-brand-card px-3.5 py-1.5 text-xs font-semibold tracking-wider uppercase text-brand-muted">
                <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                <span>AI IMPLEMENT 100% APP TARGET</span>
              </div>

              <h1 className="font-display text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-bold tracking-tight text-brand-text leading-[1.05]">
                AI Powerd 100% of <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-teal-600 dark:from-emerald-400 dark:to-teal-500">Software Core</span> Solutions.
              </h1>

              <p className="text-lg md:text-xl text-brand-muted max-w-2xl leading-relaxed font-light">
                Solo Softwares designs, develops, and deploys high-integrity software components, AI agent pipelines, and the proprietary <span className="font-semibold text-brand-text">SoloAccount | Personal Finance Manager</span> ledger engine for ambitious global enterprises.
              </p>

              {/* Dynamic Interactive Role Tabs */}
              <div className="space-y-4 pt-2">
                <span className="text-xs font-bold uppercase tracking-wider text-brand-muted block">Explore our specialized engineering disciplines:</span>
                <div className="flex flex-wrap gap-2">
                  {talentProfiles.map((p, idx) => (
                    <button
                      key={p.id}
                      onClick={() => setSelectedRoleIndex(idx)}
                      className={`px-4 py-2.5 rounded-xl text-xs font-bold transition-all border ${
                        selectedRoleIndex === idx 
                          ? 'bg-brand-text text-brand-bg border-brand-text shadow-xl scale-105' 
                          : 'bg-brand-card text-brand-muted border-brand-border hover:border-brand-text/30 hover:text-brand-text'
                      }`}
                    >
                      {p.roleType}
                    </button>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4">
                <a 
                  href="https://soloaccount.solosoftwares.com/" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-center gap-3 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 text-sm font-bold transition-all hover:shadow-[0_8px_30px_rgb(16,185,129,0.2)]"
                >
                  Enter SoloAccount Portal
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
                <a 
                  href="#contact"
                  className="group flex items-center justify-center gap-2 rounded-full border border-brand-border bg-brand-card hover:bg-brand-text/10 px-8 py-4 text-sm font-bold text-brand-text transition-all"
                >
                  Schedule Technical Briefing
                </a>
              </div>
            </div>

            {/* Right side: High-fidelity, live changing profile preview in Toptal style */}
            <div className="lg:col-span-5 relative">
              <div className="absolute -inset-2 bg-gradient-to-tr from-brand-text/5 to-transparent rounded-[2.5rem] blur-xl pointer-events-none" />
              
              <AnimatePresence mode="wait">
                <motion.div
                  key={selectedProfile.id}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.4 }}
                  className="bg-brand-card border border-brand-border rounded-[2rem] p-6 md:p-8 shadow-2xl relative overflow-hidden flex flex-col justify-between min-h-[550px]"
                >
                  {/* Backdrop shine */}
                  <div className="absolute top-0 right-0 h-40 w-40 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
                  
                  {/* Upper core spec */}
                  <div className="space-y-5">
                    <div className="flex items-start gap-4">
                      <div className={`h-14 w-14 rounded-2xl bg-gradient-to-br ${selectedProfile.avatarAccent} flex items-center justify-center text-white shrink-0 shadow-lg`}>
                        {getIconComponent(selectedProfile.iconName)}
                      </div>

                      <div className="space-y-1 flex-1 text-left">
                        <div className="flex items-center justify-between gap-2">
                          <h3 className="font-display font-bold text-lg text-brand-text leading-tight">{selectedProfile.moduleName}</h3>
                          <span className="inline-flex items-center rounded-full bg-emerald-500/10 px-2 py-0.5 text-[10px] font-mono font-bold text-emerald-500 uppercase shrink-0">
                            {selectedProfile.version}
                          </span>
                        </div>
                        <p className="text-xs text-brand-muted font-light leading-relaxed">{selectedProfile.tagline}</p>
                        
                        {/* Status badge row instead of rating */}
                        <div className="flex items-center gap-2 pt-1 text-[10px] font-mono text-emerald-500 font-bold">
                          <span className="h-2 w-2 rounded-full bg-emerald-500" />
                          <span>Active Module</span>
                          <span className="text-brand-border/60">|</span>
                          <span className="text-brand-muted font-normal">Vetted Architecture</span>
                        </div>
                      </div>
                    </div>

                    {/* Performance ROI metric block */}
                    <div className="p-4 bg-brand-bg/50 border border-brand-border/60 rounded-2xl flex items-center justify-between text-left">
                      <div>
                        <span className="text-[10px] font-bold uppercase tracking-wider text-brand-muted">{selectedProfile.metricLabel}</span>
                        <p className="text-3xl font-display font-black text-brand-text tracking-tight mt-0.5">{selectedProfile.metricValue}</p>
                      </div>
                      <div className="h-10 w-10 rounded-full bg-emerald-500/10 text-emerald-500 flex items-center justify-center">
                        <Award className="h-5 w-5" />
                      </div>
                    </div>

                    {/* Key capabilities */}
                    <div className="space-y-2 text-left">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-brand-muted block">Direct Core Capabilities:</span>
                      <div className="flex flex-wrap gap-1.5">
                        {selectedProfile.keyCapabilities.map((cap, i) => (
                          <span key={i} className="text-[10px] font-sans font-medium bg-brand-text/[0.04] text-brand-text px-2.5 py-1 border border-brand-border rounded-lg">
                            {cap}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Technical details / stack */}
                    <div className="space-y-1 pt-1 text-left">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-brand-muted block">Architecture Stack:</span>
                      <p className="text-xs text-brand-text font-mono font-bold flex flex-wrap gap-x-2 gap-y-1">
                        {selectedProfile.architectureStack.join(' • ')}
                      </p>
                    </div>
                  </div>

                  {/* Production audit security check */}
                  <div className="pt-4 border-t border-brand-border/60 text-left">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-brand-muted block mb-1">Operational Compliance:</span>
                    <p className="text-[11px] text-brand-muted leading-relaxed italic">
                      "{selectedProfile.complianceVetting}"
                    </p>
                    
                    {/* Bottom stats footnote */}
                    <div className="flex items-center justify-between mt-4 text-[10px] font-mono text-brand-muted">
                      <span>Status: {selectedProfile.deploymentStatus}</span>
                      <span className="text-emerald-500 font-bold uppercase">Ready</span>
                    </div>
                  </div>

                </motion.div>
              </AnimatePresence>
            </div>

          </div>
        </div>
      </main>

      {/* 🤝 Segment 2: ENTERPRISE TRUST LOGOS MARQUEE */}
      <section className="py-12 bg-brand-bg border-b border-brand-border overflow-hidden">
        <div className="mx-auto max-w-7xl px-6">
          <p className="text-center text-[10px] sm:text-xs font-bold uppercase tracking-widest text-brand-muted mb-8">
            Our systems and components power secure integrations across global teams
          </p>
          <div className="flex flex-wrap justify-center items-center gap-x-16 gap-y-6 opacity-40 hover:opacity-75 transition-opacity duration-500">
            {['SOON', 'SOON', 'SOON', 'SOON', 'SOON', 'SOON'].map((logo, idx) => (
              <span key={idx} className="font-display text-lg sm:text-xl font-black tracking-[0.2em] text-center shrink-0">
                {logo.toUpperCase()}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* 📊 Segment 3: COGNITIVE INTERACTIVE ROI ESTIMATOR CARD */}
      <section className="py-24 bg-brand-bg/50 border-b border-brand-border">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-3xl mx-auto text-center mb-16 space-y-4">
            <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight">Calculate Your Compliance Savings</h2>
            <p className="text-brand-muted">Adjust variables below to calculate estimated ledger management overhead savings using Solo Softwares' autonomous closing networks.</p>
          </div>

          <div className="bg-brand-card border border-brand-border rounded-[2rem] p-6 md:p-10 max-w-5xl mx-auto shadow-xl grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            
            {/* Range Controls */}
            <div className="space-y-8">
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-bold text-brand-text">Active Subsidiaries & Entities</span>
                  <span className="text-sm font-mono font-bold bg-brand-text/10 px-3 py-1 rounded-lg text-brand-text">{entitiesCount} Subsidiaries</span>
                </div>
                <input 
                  type="range" 
                  min="1" 
                  max="100" 
                  value={entitiesCount} 
                  onChange={(e) => setEntitiesCount(parseInt(e.target.value))}
                  className="w-full accent-emerald-500 cursor-pointer"
                />
                <div className="flex justify-between text-[10px] text-brand-muted font-mono">
                  <span>1 Entity</span>
                  <span>50 Entities</span>
                  <span>100 Entities</span>
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-bold text-brand-text">Monthly Transaction Outflows</span>
                  <span className="text-sm font-mono font-bold bg-brand-text/10 px-3 py-1 rounded-lg text-brand-text">{transactionVolume.toLocaleString()} tx/mo</span>
                </div>
                <input 
                  type="range" 
                  min="5000" 
                  max="1000000" 
                  step="5000"
                  value={transactionVolume} 
                  onChange={(e) => setTransactionVolume(parseInt(e.target.value))}
                  className="w-full accent-emerald-500 cursor-pointer"
                />
                <div className="flex justify-between text-[10px] text-brand-muted font-mono">
                  <span>5K Transactions</span>
                  <span>500K Transactions</span>
                  <span>1M Transactions</span>
                </div>
              </div>
            </div>

            {/* Simulated Live Outputs */}
            <div className="bg-brand-bg/50 border border-brand-border rounded-2xl p-6 md:p-8 space-y-6 relative overflow-hidden">
              <div className="absolute top-0 right-0 h-24 w-24 bg-emerald-500/5 rounded-full blur-2xl" />
              
              <div className="space-y-1">
                <span className="text-[10px] font-bold uppercase tracking-widest text-brand-muted block">Estimated Overhead Capital Saved:</span>
                <p className="text-4xl sm:text-5xl font-display font-black text-emerald-500 tracking-tight">
                  ${estimatedSavings.toLocaleString()}<span className="text-sm text-brand-muted font-normal font-sans"> / year</span>
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4 pt-4 border-t border-brand-border">
                <div className="space-y-1">
                  <span className="text-[10px] font-bold uppercase text-brand-muted block">Manual closes reduced:</span>
                  <p className="text-lg font-bold text-brand-text">{weeklyHoursSaved} hours / month</p>
                </div>
                <div className="space-y-1">
                  <span className="text-[10px] font-bold uppercase text-brand-muted block">Global Tax Readiness:</span>
                  <p className="text-lg font-bold text-brand-text">{compliantMarkets} Markets Available</p>
                </div>
              </div>

              <div className="pt-2">
                <p className="text-xs text-brand-muted italic leading-relaxed">
                  "Calculated based on average regional compliance wages, digital system audit times, and automated VAT transaction logic rules integrated by Solo Softwares globally."
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 🎯 Segment 4: ICONIC TOPTAL-STYLE "TOP 3%" VETTING ENGINE OUTLINE */}
      <section className="py-24 bg-brand-bg border-b border-brand-border">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Huge Display Visual: Toptal "3%" Signature Accent */}
            <div className="lg:col-span-5 text-left space-y-4">
              <div className="text-[10rem] sm:text-[13rem] font-display font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-br from-brand-text to-brand-text/30 leading-none mr-[-0.1em] select-none">
                3%
              </div>
              <h3 className="text-2xl font-bold font-display text-brand-text">The Rigorous Screening Standard</h3>
              <p className="text-brand-muted leading-relaxed">
                Out of thousands of financial scripts, system protocols, and custom software contractors evaluated annual, only the top 3% pass our multi-tier isolated sandbox validations to deploy client production code.
              </p>
              <div className="p-4 bg-brand-card border border-brand-border rounded-2xl flex items-center gap-3">
                <Shield className="h-6 w-6 text-emerald-500 shrink-0" />
                <span className="text-xs text-brand-muted font-medium">All deployed instances maintain ongoing strict SOC2 compliance monitoring.</span>
              </div>
            </div>

            {/* Detailed Rigorous Step Stepper */}
            <div className="lg:col-span-7 space-y-6">
              {[
                {
                  phase: "01",
                  title: "Comprehensive Compliance & Security Auditing",
                  passRate: "Pass rate: ~7.2%",
                  desc: "Rigorous unit testing covering cross-border transaction scenarios, strict biometric interfaces, and multi-currency edge cases."
                },
                {
                  phase: "02",
                  title: "Live Container Performance Stress Testing",
                  passRate: "Pass rate: ~3.2%",
                  desc: "Running core transaction engines in high-density simulation clusters to guarantee zero-latency ledger calculations at volume."
                },
                {
                  phase: "03",
                  title: "Agent Anomaly Scanning Checks",
                  passRate: "Pass rate: ~2.1%",
                  desc: "Validating AI models under strict privacy constraints to ensure sensitive customer data stays sandboxed and locally encrypted."
                },
                {
                  phase: "04",
                  title: "Ongoing Project Execution Audits",
                  passRate: "Pass rate: Top 3% Hired",
                  desc: "Every framework code push triggers our automated linter pipeline, code review verification, and continuous integration flows immediately."
                }
              ].map((step, idx) => (
                <div key={idx} className="flex gap-4 p-5 rounded-2xl hover:bg-brand-card border border-transparent hover:border-brand-border transition-all">
                  <div className="text-xl font-mono font-black text-emerald-500 tracking-wider shrink-0 mt-0.5">
                    {step.phase}/
                  </div>
                  <div className="space-y-1 text-left">
                    <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                      <h4 className="text-base font-bold text-brand-text leading-snug">{step.title}</h4>
                      <span className="text-[10px] bg-emerald-500/10 text-emerald-500 px-2 py-0.5 rounded-full font-bold font-mono uppercase tracking-wider">
                        {step.passRate}
                      </span>
                    </div>
                    <p className="text-sm text-brand-muted leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* 🛠️ Segment 5: BENTO GRID OF CORE PLATFORM CAPABILITIES */}
      <section id="features" className="py-24 bg-brand-bg/50 border-b border-brand-border relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center mb-20 space-y-4">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-muted block">Enterprise Grade Architecture</span>
            <h2 className="font-display text-3xl sm:text-5xl font-bold tracking-tight">Sophisticated features.<br />Engineered for scale.</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, idx) => (
              <div 
                key={idx}
                className="group p-8 rounded-3xl bg-brand-card border border-brand-border hover:bg-brand-text/[0.02] hover:border-brand-text/10 transition-all duration-300 transform hover:-translate-y-1 relative overflow-hidden"
              >
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-bg border border-brand-border text-brand-text group-hover:scale-110 transition-transform">
                  {feature.icon}
                </div>
                <h3 className="mb-3 font-display text-lg font-bold text-brand-text group-hover:text-emerald-500 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-sm leading-relaxed text-brand-muted">
                  {feature.description}
                </p>
                {/* Accent border focus */}
                <div className="absolute top-0 left-0 h-1 w-0 bg-emerald-500 transition-all duration-300 group-hover:w-full" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 🎯 Segment 6: PREMIUM TESTIMONIALS ZONE */}
      <section id="testimonials" className="py-24 bg-brand-bg border-b border-brand-border">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-2xl mx-auto text-center mb-16 space-y-4">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-muted block font-mono">User Endorsements</span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight">Trusted by Industry Leaders</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t, index) => (
              <div
                key={index}
                className="flex flex-col justify-between rounded-3xl border border-brand-border bg-brand-card p-8 shadow-sm hover:shadow-lg transition-all duration-300"
              >
                <div className="space-y-6">
                  {/* Rating icons */}
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <p className="text-base italic leading-relaxed text-brand-text/90">
                    "{t.quote}"
                  </p>
                </div>
                <div className="mt-8 pt-6 border-t border-brand-border flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-brand-text/10 flex items-center justify-center font-bold text-xs text-brand-text">
                    {t.avatar}
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-brand-text">{t.author}</h4>
                    <p className="text-xs text-brand-muted">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 💵 Segment 7: STREAMLINED ACCOUNT PRICING TIERS */}
      <section id="pricing" className="py-24 bg-brand-bg/50 border-b border-brand-border relative overflow-hidden">
        <div className="pointer-events-none absolute bottom-0 right-0 h-[400px] w-[400px] rounded-full bg-emerald-500/5 blur-[120px] pointer-events-none" />
        
        <div className="mx-auto max-w-7xl px-6 relative z-10">
          <div className="mb-20 text-center space-y-4">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-muted block font-mono">Cost distribution transparency</span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-brand-text">Enterprise Power. <span className="text-brand-muted">Openly Accessible.</span></h2>
            <p className="mt-4 text-brand-muted max-w-xl mx-auto">
              SoloAccount software components are fully accessible and open to deploy. No hidden licensing agreements.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {plans.map((plan, index) => (
              <div
                key={index}
                className={`relative flex flex-col rounded-3xl border transition-all duration-300 ${
                  plan.popular 
                    ? 'border-brand-text/30 bg-brand-text/[0.04] shadow-xl md:scale-105' 
                    : 'border-brand-border bg-brand-card hover:border-brand-text/15'
                } p-8`}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-emerald-600 px-4 py-1 text-[10px] font-bold uppercase tracking-wider text-white">
                    RECOMMENDED DISCIPLINE
                  </div>
                )}
                <div className="mb-6">
                  <h3 className="font-display text-lg font-bold text-brand-text">{plan.name}</h3>
                  <p className="mt-2 text-xs text-brand-muted leading-relaxed">{plan.description}</p>
                </div>
                <div className="mb-6 flex items-baseline gap-1">
                  <span className="text-4xl font-black text-brand-text">{plan.price}</span>
                  <span className="text-xs text-brand-muted"> / month (Free Licence)</span>
                </div>
                
                <ul className="mb-8 space-y-3.5 flex-1 border-t border-brand-border/60 pt-6">
                  {plan.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-center gap-3 text-xs text-brand-text/80">
                      <Check className="h-4 w-4 text-emerald-500 shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <button className={`w-full rounded-full py-3.5 text-xs font-bold transition-all ${
                  plan.popular 
                    ? 'bg-brand-text text-brand-bg hover:opacity-90 shadow-lg' 
                    : 'border border-brand-border text-brand-text hover:bg-brand-text/5'
                }`}>
                  Select Allocation Model
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 📰 Segment 8: INTELLECTUAL JOURNAL */}
      <section id="blog" className="py-24 bg-brand-bg border-b border-brand-border">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div className="space-y-2">
              <span className="text-xs font-bold uppercase tracking-widest text-brand-muted block font-mono">Expert Column</span>
              <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight">Journal. <span className="text-brand-muted">Insights for Leaders.</span></h2>
            </div>
            <button className="group flex items-center gap-2 text-xs font-bold text-brand-text hover:text-emerald-500 transition-colors">
              VIEW ALL JOURNAL ENTRIES
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </button>
          </div>

          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 items-stretch">
            {/* Featured Post (7 columns wide for Toptal editorial feel) */}
            <div className="lg:col-span-7 flex">
              {blogPosts.filter(p => p.featured).map((post, i) => (
                <div 
                  key={i}
                  className="group relative flex flex-col justify-end overflow-hidden rounded-3xl border border-brand-border bg-brand-card aspect-[4/3] w-full p-8 md:p-10 shadow-sm hover:shadow-lg transition-all"
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-bg via-brand-bg/10 to-transparent z-10 pointer-events-none" />
                  <div className="relative z-20 space-y-4 text-left">
                    <span className="inline-block rounded-full bg-brand-text text-brand-bg px-3.5 py-1 text-[10px] font-bold uppercase tracking-wider">
                      {post.category}
                    </span>
                    <h3 className="font-display text-xl sm:text-2xl md:text-3xl font-bold text-brand-text group-hover:text-emerald-500 transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-brand-muted text-sm max-w-lg leading-relaxed line-clamp-2">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center gap-4 pt-2 text-[11px] font-mono text-brand-muted">
                      <span className="font-bold text-brand-text">{post.date}</span>
                      <div className="h-1 w-1 rounded-full bg-brand-muted" />
                      <button className="hover:underline text-brand-text font-bold">Read Article</button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Side lists (5 columns wide) */}
            <div className="lg:col-span-5 flex flex-col justify-between gap-6">
              {blogPosts.filter(p => !p.featured).map((post, i) => (
                <div 
                  key={i}
                  className="group flex flex-col gap-3 rounded-2xl border border-brand-border bg-brand-card p-6 transition-all hover:bg-brand-text/[0.02] flex-1 text-left"
                >
                  <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-brand-muted block">
                    {post.category} — {post.date}
                  </span>
                  <h3 className="font-display text-lg font-bold text-brand-text group-hover:text-emerald-500 transition-colors leading-snug">
                    {post.title}
                  </h3>
                  <p className="text-xs text-brand-muted leading-relaxed line-clamp-2">
                    {post.excerpt}
                  </p>
                  <button className="text-[10px] font-bold text-brand-text flex items-center gap-1 group-hover:gap-2 transition-all pt-1">
                    read brief <ArrowRight className="h-3 w-3" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 🙋‍♀️ Segment 9: REORGANIZED COMMONLY ASKED QUESTIONS ACCORDION */}
      <section id="faq" className="py-24 bg-brand-bg/50 border-b border-brand-border">
        <div className="mx-auto max-w-4xl px-6">
          <div className="mb-20 text-center space-y-4">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-muted block font-mono">Expert support</span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-brand-text">Common Questions</h2>
          </div>

          <div className="space-y-16">
            {faqCategories.map((category, catIndex) => (
              <div 
                key={catIndex}
                className="space-y-6"
              >
                <h3 className="text-xs sm:text-sm font-display font-semibold text-brand-muted uppercase tracking-wider border-b border-brand-border pb-3 text-left">
                  {category.title}
                </h3>
                <div className="grid grid-cols-1 gap-4">
                  {category.questions.map((faq, index) => (
                    <div
                      key={index}
                      className="group rounded-2xl border border-brand-border bg-brand-card p-6 sm:p-8 text-left transition-all duration-300 hover:border-brand-text/10"
                    >
                      <h4 className="text-base font-bold text-brand-text mb-3 leading-snug">
                        {faq.question}
                      </h4>
                      <p className="text-xs sm:text-sm leading-relaxed text-brand-muted">
                        {faq.answer}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 📞 Segment 10: BOTTOM HIGH-CONVERSION CTA FOOTER ROW */}
      <section id="contact" className="py-24 bg-brand-bg relative overflow-hidden">
        <div className="pointer-events-none absolute top-1/2 left-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-emerald-500/5 blur-[150px] pointer-events-none" />
        
        <div className="mx-auto max-w-7xl px-6 relative z-10">
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:items-center">
            
            <div className="space-y-8 text-left">
              <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-black text-brand-text leading-tight">
                Let's discuss your <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-teal-500">future systems.</span>
              </h2>
              <p className="text-base text-brand-muted max-w-md leading-relaxed">
                Connect directly with our enterprise consulting teams. We will architect, configure, and install elite compliant models tailored to your exact cashflow specifications.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center gap-4 text-brand-text/80">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-card border border-brand-border text-brand-muted shrink-0">
                    <Globe className="h-5 w-5" />
                  </div>
                  <span className="text-sm font-medium">Global Headquarters, Kadayanallur - India</span>
                </div>
                <div className="flex items-center gap-4 text-brand-text/80">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-card border border-brand-border text-brand-muted shrink-0">
                    <Shield className="h-5 w-5" />
                  </div>
                  <span className="text-sm font-medium">syednaurose@gmail.com</span>
                </div>
              </div>
            </div>

            {/* Custom Interactive Onboarding Contact Card */}
            <div className="rounded-[2rem] border border-brand-border bg-brand-card p-8 md:p-10 shadow-2xl relative">
              <form className="space-y-6 text-left" onSubmit={(e) => {
                e.preventDefault();
                alert("Thank you. Our executive consultants will connect with you shortly!");
              }}>
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-wider text-brand-muted">Your Full Name</label>
                    <input 
                      type="text" 
                      required
                      placeholder="e.g. Samuel K."
                      className="w-full rounded-xl border border-brand-border bg-brand-bg px-4 py-3 text-xs text-brand-text placeholder:text-brand-muted/40 focus:border-emerald-500 focus:ring-0 transition-all font-sans"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-wider text-brand-muted">Email Address</label>
                    <input 
                      type="email" 
                      required
                      placeholder="e.g. ceo@comp.co"
                      className="w-full rounded-xl border border-brand-border bg-brand-bg px-4 py-3 text-xs text-brand-text placeholder:text-brand-muted/40 focus:border-emerald-500 focus:ring-0 transition-all font-sans"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-wider text-brand-muted">Message</label>
                  <textarea 
                    rows={4}
                    required
                    placeholder="Describe your current system bottleneck or required compliance architecture..."
                    className="w-full rounded-xl border border-brand-border bg-brand-bg px-4 py-3 text-xs text-brand-text placeholder:text-brand-muted/40 focus:border-emerald-500 focus:ring-0 transition-all font-sans resize-none"
                  />
                </div>

                <button 
                  type="submit"
                  className="group w-full flex items-center justify-center gap-2 rounded-full bg-emerald-600 hover:bg-emerald-700 py-4 text-sm font-bold text-white transition-all shadow-lg hover:shadow-[0_8px_30px_rgb(16,185,129,0.3)]"
                >
                  Send Technical Inquiry
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </button>
              </form>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
