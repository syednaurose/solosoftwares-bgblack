import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ArrowRight, 
  ChevronRight, 
  Globe, 
  Play,
  Cpu, 
  BarChart3, 
  Users2, 
  UserCheck,
  HardDrive,
  Smartphone,
  RefreshCw,
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
import soloaccountLogo from '../assets/soloaccount-mark.svg';
import surf1 from '../assets/soloaccount_Surface_1.png';
import surf2 from '../assets/soloaccount_Surface_2.png';
import surf3 from '../assets/soloaccount_Surface_3.png';
import surf4 from '../assets/soloaccount_Surface_4.png';

interface HomePageProps {
  isDarkMode: boolean;
  setIsDarkMode: (val: boolean) => void;
  theme?: 'bright' | 'dark' | 'warm' | 'nordic';
  setTheme?: (theme: 'bright' | 'dark' | 'warm' | 'nordic') => void;
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
  productivityStatus: string;
}

const techStack = [
  { name: 'React 18', icon: <Code2 size={16} />, color: 'text-blue-500' },
  { name: 'TypeScript', icon: <Code2 size={16} />, color: 'text-blue-600' },
  { name: 'Tailwind + Framer Motion', icon: <Zap size={16} />, color: 'text-purple-500' },
  { name: 'Zustand', icon: <Database size={16} />, color: 'text-emerald-500' },
  { name: 'Recharts', icon: <BarChart3 size={16} />, color: 'text-cyan-500' },
  { name: 'Supabase + SQLite', icon: <Database size={16} />, color: 'text-green-500' },
  { name: 'Capacitor', icon: <Smartphone size={16} />, color: 'text-orange-500' },
  { name: 'Vite', icon: <Zap size={16} />, color: 'text-yellow-500' },
  { name: 'i18next', icon: <Globe size={16} />, color: 'text-sky-500' },
];

const ecosystemStack = [
  { name: 'Microsoft SQL Server', icon: <Database size={16} />, color: 'text-red-500' },
  { name: 'Google Auth', icon: <Lock size={16} />, color: 'text-amber-500' },
  { name: 'Google Play Store', icon: <Smartphone size={16} />, color: 'text-green-500' },
  { name: 'Apple Store', icon: <Smartphone size={16} />, color: 'text-slate-400' },
  { name: 'Delphi', icon: <Code2 size={16} />, color: 'text-rose-500' },
  { name: 'RAD Server', icon: <Server size={16} />, color: 'text-orange-500' },
  { name: 'Interbase', icon: <Database size={16} />, color: 'text-blue-400' },
  { name: 'VSCode', icon: <Terminal size={16} />, color: 'text-indigo-500' },
];

const talentProfiles: SystemModuleSpec[] = [
  {
    id: 'ai-core',
    roleType: 'Communication',
    moduleName: 'Interactive Client-Engineering Sync',
    avatarAccent: 'from-emerald-500 to-teal-700',
    iconName: 'brain',
    tagline: 'Translating finance operational workflows into software schemas.',
    version: 'v3.2.1-Active',
    metricValue: '100%',
    metricLabel: 'Requirements Alignment',
    keyCapabilities: ['Requirement Clarification', 'Stakeholder Feedback Loop', 'Weekly Milestone Demos', 'Interactive Briefings'],
    architectureStack: ['Slack Integrations', 'Jira API Suite', 'Figma Shared Canvases', 'Clarity Docs'],
    complianceVetting: 'All customer conversations aligned to ISO 9001 quality guidelines.',
    productionOutcome: 'Minimized development waste, ensuring client needs are satisfied before coding starts.',
    deploymentStatus: 'Sprint Goals Aligned',
    productivityStatus: 'Cohesive'
  },
  {
    id: 'cloud-arch',
    roleType: 'Requirement Gathering',
    moduleName: 'Unified System Specification Core',
    avatarAccent: 'from-blue-600 to-indigo-800',
    iconName: 'server',
    tagline: 'Assessing compliance constraints, currency rate models, and tax rules.',
    version: 'v1.9.4-LTS',
    metricValue: '100%',
    metricLabel: 'Requirements Coverage',
    keyCapabilities: ['Multi-currency ISO specs', 'PWA storage limit criteria', 'GDPR transaction schemas', 'Cross-border Tax Rules'],
    architectureStack: ['Confluence Specs', 'Markdown Schemas', 'Swagger Spec Templates', 'Mock APIs'],
    complianceVetting: 'Data protection policies compiled to satisfy HIPAA and regional GDPR laws.',
    productionOutcome: 'Clear scope constraints avoiding feature creep throughout the build cycle.',
    deploymentStatus: 'Specs Signed Off',
    productivityStatus: 'Optimized & Checked'
  },
  {
    id: 'finance-systems',
    roleType: 'Feasibility Study',
    moduleName: 'Local-First Hardware Audit',
    avatarAccent: 'from-amber-500 to-orange-700',
    iconName: 'workflow',
    tagline: 'Validating client-side IndexedDB limits and service worker scopes.',
    version: 'v4.0.2',
    metricValue: '100%',
    metricLabel: 'Feasibility Integrity Score',
    keyCapabilities: ['Offline storage benchmark', 'Biometric credential test', 'Performance render check', 'RAM consumption limits'],
    architectureStack: ['IndexedDB Drivers', 'WebAuthn APIs', 'Lighthouse Metrics', 'Google Chrome Profiler'],
    complianceVetting: 'PWA security bounds certified for offline device capabilities.',
    productionOutcome: 'Proven 60fps rendering even on low-tier mobile client nodes.',
    deploymentStatus: 'Verification Passed',
    productivityStatus: 'Verified Stable'
  },
  {
    id: 'storage-data',
    roleType: 'System Analysis',
    moduleName: 'Sovereign Ledger Modeling',
    avatarAccent: 'from-orange-500 to-red-600',
    iconName: 'database',
    tagline: 'Defining structural double-entry transaction boundaries and security rings.',
    version: 'v5.1.0-Release',
    metricValue: '99.98%',
    metricLabel: 'Analytical Schema Accuracy',
    keyCapabilities: ['Data structure isolation', 'Reconciliation flow logic', 'Transaction throughput check', 'Index optimization'],
    architectureStack: ['UML Class Models', 'Schema Compilers', 'Logical DB Parsers', 'DBML Diagrams'],
    complianceVetting: 'Double-entry books balance checked model for mathematical precision.',
    productionOutcome: 'Fully decoupled transaction modules eliminating memory leak potential.',
    deploymentStatus: 'Architecture Approved',
    productivityStatus: 'Validated Structural'
  },
  {
    id: 'web-dev',
    roleType: 'Software Design',
    moduleName: 'High-Density Interface Canvas',
    avatarAccent: 'from-purple-500 to-pink-700',
    iconName: 'layout',
    tagline: 'Structuring typography, fluid responsive cards, and dynamic theme nodes.',
    version: 'v2.2.0',
    metricValue: '-60%',
    metricLabel: 'User Experience Friction',
    keyCapabilities: ['Component pattern libraries', 'RTL Arabic visual frameworks', 'Dynamic dark theme tokens', 'D3 visualization charting'],
    architectureStack: ['React 18 / Vite 5', 'Tailwind CSS v4', 'Framer Motion Core', 'Bento design grids'],
    complianceVetting: 'Certified accessible against strict WCAG 2.1 AA screen visibility ratios.',
    productionOutcome: 'A visually cohesive, fluid experience with ZERO layout shifts.',
    deploymentStatus: 'UX Blueprint Validated',
    productivityStatus: 'Friction Reduced'
  },
  {
    id: 'erp-solutions',
    roleType: 'Coding',
    moduleName: 'Sovereign Code Generation Engine',
    avatarAccent: 'from-cyan-500 to-blue-700',
    iconName: 'file-json',
    tagline: 'Clean, modular, and typed components with persistent local state caches.',
    version: 'v1.12.0',
    metricValue: '3.2x',
    metricLabel: 'Developer Coding Velocity',
    keyCapabilities: ['Custom hook optimization', 'D3 visualization charts', 'Secure storage layers', 'Strict ES6 syntax'],
    architectureStack: ['React 18 / Vite 5', 'TypeScript Core', 'Zustand Storage Hooks', 'Tailwind Modules'],
    complianceVetting: 'Strict static analysis with zero lint warnings or unhandled exceptions.',
    productionOutcome: 'Lightweight static bundle size (<180kb gzipped) for rapid mobile loading speeds.',
    deploymentStatus: 'Build Fully Certified',
    productivityStatus: 'Optimal Progress'
  },
  {
    id: 'system-design',
    roleType: 'Testing',
    moduleName: 'Continuous Assertion Framework',
    avatarAccent: 'from-rose-500 to-pink-800',
    iconName: 'layers',
    tagline: 'Automated end-to-end integration runs checking client data integrity.',
    version: 'v2.0.4',
    metricValue: '100%',
    metricLabel: 'Automated Test Coverage',
    keyCapabilities: ['Playwright automated flows', 'Chaos state stress injection', 'Responsive element audit', 'State recovery verification'],
    architectureStack: ['Playwright runner', 'Jest assertion suite', 'K6 load generators', 'Cypress UI modules'],
    complianceVetting: 'Continuous daily regressions executed to prevent privacy security leaks.',
    productionOutcome: 'Keeps 100% coverage on core budgeting, cash flows, and debt payoff calculations.',
    deploymentStatus: 'Daily Test Suite Green',
    productivityStatus: '0 Regressions Detected'
  },
  {
    id: 'qa-analyst',
    roleType: 'Integration',
    moduleName: 'Secure Cloud & API Bridge',
    avatarAccent: 'from-emerald-400 to-teal-600',
    iconName: 'check-circle',
    tagline: 'Interfacing client nodes with premium external currency exchange networks.',
    version: 'v1.7.0',
    metricValue: '< 350ms',
    metricLabel: 'API Response Latency',
    keyCapabilities: ['Open Exchange API integration', 'OAuth client portal links', 'Firebase cloud backup sync', 'Real-time WebSocket eventing'],
    architectureStack: ['REST/gRPC adapters', 'Secure proxy API routes', 'Auth0 SDK connectors', 'Secure webhooks'],
    complianceVetting: 'All outgoing integration connections protected inside TLS 1.3 tunnels.',
    productionOutcome: 'Synchronizes multi-currency rates automatically upon active network connection.',
    deploymentStatus: 'API Bindings Continuous',
    productivityStatus: 'Fast Ingestion'
  },
  {
    id: 'release-automation',
    roleType: 'Implementation',
    moduleName: 'Zero-Downtime Container Fleet',
    avatarAccent: 'from-amber-400 to-orange-600',
    iconName: 'terminal',
    tagline: 'Delivering secure static bundles directly to modern distributed server structures.',
    version: 'v3.1.2-Stable',
    metricValue: '0.0s',
    metricLabel: 'Deployment Delay Overhead',
    keyCapabilities: ['PWA asset precaching', 'Blue-Green deployment states', 'SHA-256 cryptographic hashes', 'GitOps declarative workflow'],
    architectureStack: ['GitHub Action workbooks', 'Cloud Run gateway', 'Service Workers', 'Docker Images'],
    complianceVetting: 'Fully verified supply chain passing SLSA Level 3 certification parameters.',
    productionOutcome: 'Deploy updates in seconds without interrupting active database sessions.',
    deploymentStatus: 'Cloud Ingress Active',
    productivityStatus: 'Instant Rollout'
  },
  {
    id: 'supports',
    roleType: 'Operation and Maintenance',
    moduleName: 'Reliability & Diagnostics Desk',
    avatarAccent: 'from-sky-500 to-indigo-700',
    iconName: 'settings',
    tagline: 'Troubleshooting memory hygiene and system reliability on live sites.',
    version: 'v5.0-LTS',
    metricValue: '99.99%',
    metricLabel: 'SLA Response Guarantee',
    keyCapabilities: ['Local database cleanup runs', 'Anonymous performance logs', 'Regular security patches', 'GC Memory Collection'],
    architectureStack: ['Sentry logger metrics', 'Lighthouse diagnostics', 'Web vitals trackers', 'IndexedDB cleaning tasks'],
    complianceVetting: 'Sovereign local-first storage respects global user self-deletion rights.',
    productionOutcome: 'Maximum system uptime with proactive cache garbage collection routines.',
    deploymentStatus: 'SLA Support Enabled',
    productivityStatus: 'Active Maintenance'
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
    case 'layers': return <Layers className="h-7 w-7 text-white" />;
    case 'check-circle': return <CheckCircle2 className="h-7 w-7 text-white" />;
    case 'terminal': return <Terminal className="h-7 w-7 text-white" />;
    case 'settings': return <Settings className="h-7 w-7 text-white" />;
    default: return <Cpu className="h-7 w-7 text-white" />;
  }
};

const CURRENCIES = {
  USD: {
    symbol: '$',
    name: 'US Dollar',
    region: 'North America (USD)',
    rate: 1,
    minIncome: 1500,
    maxIncome: 30000,
    minExpense: 1000,
    maxExpense: 25000,
    stepIncome: 250,
    stepExpense: 250,
    defaultIncome: 7500,
    defaultExpense: 4800,
    minLabel: '$1.5K',
    midLabel: '$15K',
    maxLabel: '$30K',
    minExpLabel: '$1K',
    midExpLabel: '$13K',
    maxExpLabel: '$25K',
    hustleBonus: 1200,
    surplusLevelText: 2000,
    surplusLowText: 1000
  },
  EUR: {
    symbol: '€',
    name: 'Euro',
    region: 'Europe (EUR)',
    rate: 0.92,
    minIncome: 1500,
    maxIncome: 30000,
    minExpense: 1000,
    maxExpense: 25000,
    stepIncome: 250,
    stepExpense: 250,
    defaultIncome: 7000,
    defaultExpense: 4500,
    minLabel: '€1.5K',
    midLabel: '€15K',
    maxLabel: '€30K',
    minExpLabel: '€1K',
    midExpLabel: '€13K',
    maxExpLabel: '€25K',
    hustleBonus: 1100,
    surplusLevelText: 1800,
    surplusLowText: 900
  },
  GBP: {
    symbol: '£',
    name: 'British Pound',
    region: 'United Kingdom (GBP)',
    rate: 0.79,
    minIncome: 1200,
    maxIncome: 25000,
    minExpense: 800,
    maxExpense: 20000,
    stepIncome: 200,
    stepExpense: 200,
    defaultIncome: 5800,
    defaultExpense: 3600,
    minLabel: '£1.2K',
    midLabel: '£13K',
    maxLabel: '£25K',
    minExpLabel: '£800',
    midExpLabel: '£10K',
    maxExpLabel: '£20K',
    hustleBonus: 1000,
    surplusLevelText: 1500,
    surplusLowText: 750
  },
  INR: {
    symbol: '₹',
    name: 'Indian Rupee',
    region: 'India (INR)',
    rate: 83,
    minIncome: 50000,
    maxIncome: 1500000,
    minExpense: 30000,
    maxExpense: 1000000,
    stepIncome: 10000,
    stepExpense: 10000,
    defaultIncome: 250000,
    defaultExpense: 150000,
    minLabel: '₹50K',
    midLabel: '₹750K',
    maxLabel: '₹1.5M',
    minExpLabel: '₹30K',
    midExpLabel: '₹500K',
    maxExpLabel: '₹1M',
    hustleBonus: 50000,
    surplusLevelText: 100000,
    surplusLowText: 50000
  },
  SAR: {
    symbol: 'SR ',
    name: 'Saudi Riyal',
    region: 'Saudi Arabia & Gulf (SAR)',
    rate: 3.75,
    minIncome: 5000,
    maxIncome: 100000,
    minExpense: 3000,
    maxExpense: 80000,
    stepIncome: 1000,
    stepExpense: 1000,
    defaultIncome: 25000,
    defaultExpense: 16000,
    minLabel: 'SR5K',
    midLabel: 'SR50K',
    maxLabel: 'SR100K',
    minExpLabel: 'SR3K',
    midExpLabel: 'SR40K',
    maxExpLabel: 'SR80K',
    hustleBonus: 4500,
    surplusLevelText: 7500,
    surplusLowText: 3700
  },
  JPY: {
    symbol: '¥',
    name: 'Japanese Yen',
    region: 'Japan (JPY)',
    rate: 156,
    minIncome: 150000,
    maxIncome: 3000000,
    minExpense: 100000,
    maxExpense: 2500000,
    stepIncome: 25000,
    stepExpense: 25000,
    defaultIncome: 750000,
    defaultExpense: 480000,
    minLabel: '¥150K',
    midLabel: '¥1.5M',
    maxLabel: '¥3M',
    minExpLabel: '¥100K',
    midExpLabel: '¥1.3M',
    maxExpLabel: '¥2.5M',
    hustleBonus: 180000,
    surplusLevelText: 300000,
    surplusLowText: 150000
  }
};

function detectRegionCurrency(): keyof typeof CURRENCIES {
  try {
    const tz = Intl.DateTimeFormat().resolvedOptions().timeZone;
    if (!tz) return 'USD';
    const tzLower = tz.toLowerCase();
    if (tzLower.includes('london') || tzLower.includes('belfast') || tzLower.includes('dublin')) {
      return 'GBP';
    } else if (
      tzLower.includes('europe') || 
      tzLower.includes('madrid') || 
      tzLower.includes('paris') || 
      tzLower.includes('berlin') || 
      tzLower.includes('rome') || 
      tzLower.includes('vienna') || 
      tzLower.includes('amsterdam') || 
      tzLower.includes('brussels')
    ) {
      return 'EUR';
    } else if (
      tzLower.includes('india') || 
      tzLower.includes('kolkata') || 
      tzLower.includes('calcutta') || 
      tzLower.includes('bombay') || 
      tzLower.includes('new_delhi')
    ) {
      return 'INR';
    } else if (tzLower.includes('tokyo') || tzLower.includes('osaka') || tzLower.includes('japan')) {
      return 'JPY';
    } else if (
      tzLower.includes('riyadh') || 
      tzLower.includes('dubai') || 
      tzLower.includes('jeddah') || 
      tzLower.includes('saudi') || 
      tzLower.includes('emirates') || 
      tzLower.includes('kuwait') || 
      tzLower.includes('qatar') || 
      tzLower.includes('manama') || 
      tzLower.includes('muscat')
    ) {
      return 'SAR';
    }
  } catch (err) {
    // Fail silently, default to USD
  }
  return 'USD';
}

export default function HomePage({ isDarkMode, setIsDarkMode, theme, setTheme }: HomePageProps) {
  const [activeSection, setActiveSection] = useState('hero');
  const [selectedRoleIndex, setSelectedRoleIndex] = useState(0);
  
  // Custom states for Wealth & Scenario Planning Simulator (Income vs Expenses) with Dynamic Region Currencies
  const [currencyCode, setCurrencyCode] = useState<keyof typeof CURRENCIES>(() => detectRegionCurrency());
  
  const [monthlyIncome, setMonthlyIncome] = useState<number>(() => {
    const code = detectRegionCurrency();
    return CURRENCIES[code]?.defaultIncome || 7500;
  });
  
  const [monthlyExpenses, setMonthlyExpenses] = useState<number>(() => {
    const code = detectRegionCurrency();
    return CURRENCIES[code]?.defaultExpense || 4800;
  });

  const [whatIfScenario, setWhatIfScenario] = useState<'none' | 'envelope' | 'hustle' | 'fee'>('none');
  const [activeSegment4Tab, setActiveSegment4Tab] = useState<'new-features' | 'features' | 'impact' | 'tech'>('new-features');
  const [activeSurfaceIndex, setActiveSurfaceIndex] = useState(0);
  const [isAutoplayPaused, setIsAutoplayPaused] = useState(false);

  const handleCurrencyChange = (newCode: keyof typeof CURRENCIES) => {
    setCurrencyCode(newCode);
    const curr = CURRENCIES[newCode];
    setMonthlyIncome(curr.defaultIncome);
    setMonthlyExpenses(curr.defaultExpense);
  };

  useEffect(() => {
    if (isAutoplayPaused) return;
    const timer = setInterval(() => {
      setActiveSurfaceIndex((prev) => (prev + 1) % 4);
    }, 5500); // Rotate every 5.5 seconds for optimal reading speed
    return () => clearInterval(timer);
  }, [isAutoplayPaused]);

  useEffect(() => {
    const sections = ['features', 'testimonials', 'pricing', 'blog', 'contact'];
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
  const currentCurrency = CURRENCIES[currencyCode] || CURRENCIES.USD;

  // Derived analytical calculations based on income vs expenses & What-if actions
  const adjustedIncome = whatIfScenario === 'hustle' ? monthlyIncome + currentCurrency.hustleBonus : monthlyIncome;
  const adjustedExpenses = whatIfScenario === 'envelope' ? Math.round(monthlyExpenses * 0.85) : monthlyExpenses;
  
  const monthlySurplus = Math.max(0, adjustedIncome - adjustedExpenses);
  const savingsRate = adjustedIncome > 0 ? Math.round((monthlySurplus / adjustedIncome) * 100) : 0;
  
  // Financial Health Score (0-100) based on savings rate and emergency buffer
  const financialHealthScore = Math.max(10, Math.min(100, Math.round(
    30 + 
    (savingsRate * 1.1) + 
    (monthlySurplus > currentCurrency.surplusLevelText ? 15 : monthlySurplus > currentCurrency.surplusLowText ? 8 : 0) +
    (adjustedExpenses < adjustedIncome * 0.5 ? 10 : 0)
  )));

  // 10-Year projection with 8.0% compound annual return (or 9.2% if optimizing portfolio fees)
  const annualReturnRate = whatIfScenario === 'fee' ? 0.092 : 0.080;
  const monthlyReturnRate = annualReturnRate / 12;
  const projectionMonths = 120;
  const projectedTenYearWealth = monthlySurplus > 0 
    ? Math.round(monthlySurplus * ((Math.pow(1 + monthlyReturnRate, projectionMonths) - 1) / monthlyReturnRate))
    : 0;

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
      author: "Ismail Naurose",
      role: "QA at SOLO SOFTWARES",
      avatar: "IS"
    },
    {
      quote: "You must gain control over your money, or the lack of it will forever control you.  Money is only a tool. It will take you wherever you wish, but it will not replace you as the driver.",
      author: "Anif Mohamed",
      role: "Medical Student at NUB, Egypt",
      avatar: "AN"
    },
    {
      quote: "An engineered accounting tool that actually speaks developers' language. The modular system integrated with our container setup in under a day.",
      author: "Abdul Aleem",
      role: "Student at AAIIS | Riyadh, Saudi Arabia",
      avatar: "AA"
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
      <Navbar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} activeSection={activeSection} theme={theme} setTheme={setTheme} />

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
                <span>Integrate AI assistants across our team</span>
              </div>

              <h1 className="font-display text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-bold tracking-tight text-brand-text leading-[1.05]">
                AI Powerd 100% of <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-teal-600 dark:from-emerald-400 dark:to-teal-500">Software Core</span> Solutions.
              </h1>

              <p className="text-lg md:text-xl text-brand-muted max-w-2xl leading-relaxed font-light">
                Solo Softwares designs, develops, and deploys high-integrity software components, AI agent pipelines, and the proprietary <span className="font-semibold text-brand-text">The Intelligent Core | The Infinite Capability</span> and build in engine for ambitious global enterprises.
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
                  className="group flex items-center justify-center gap-3 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white pl-5 pr-8 py-4 text-sm font-bold transition-all hover:shadow-[0_8px_30px_rgb(16,185,129,0.2)]"
                >
                  <img 
                    src={soloaccountLogo} 
                    alt="" 
                    className="h-6 w-6 object-contain rounded-md border border-white/25 bg-white/10 p-0.5"
                    referrerPolicy="no-referrer"
                  />
                  <span>Enter SoloAccount Portal</span>
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
            <div className="lg:col-span-5 relative flex flex-col pt-6 lg:pt-0">
              {/* SoloAccount Feedback / Platform Station */}
              <div className="mb-4 bg-brand-card border border-[#10b981]/15 rounded-2xl p-4 flex items-center justify-between shadow-md">
                <div className="text-left space-y-0.5">
                  <div className="flex items-center gap-1.5 flex-wrap">
                    <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse shrink-0" />
                    <h4 className="text-xs font-black text-brand-text tracking-tight uppercase font-mono">
                      SoloAccount
                    </h4>
                    <span className="text-[10px] text-brand-muted/70">-</span>
                    <span className="text-xs text-brand-muted font-normal">Personal Finance Manager</span>
                  </div>
                  <div className="flex items-center gap-1.5 mt-0.5">
                    <span className="text-[10px] font-mono font-extrabold text-[#10b981] bg-[#10b981]/10 px-2 py-0.5 rounded-md leading-none">
                      Release for Feedback Loop
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  {/* Web Platform Portal */}
                  <a 
                    href="https://soloaccount.solosoftwares.com/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    title="SoloAccount Web Portal"
                    className="h-10 w-10 flex items-center justify-center rounded-xl bg-brand-bg border border-brand-border hover:border-emerald-500/40 hover:bg-emerald-500/5 transition-all duration-300 group shadow-sm hover:scale-105"
                  >
                    {/* High-fidelity browser globe SVG */}
                    <svg className="h-5 w-5 text-brand-text group-hover:text-emerald-500 transition-colors" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5" />
                      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" stroke="currentColor" strokeWidth="1.5" />
                      <line x1="2" y1="12" x2="22" y2="12" stroke="currentColor" strokeWidth="1.5" />
                    </svg>
                  </a>

                  {/* Android Platform (Play Store) */}
                  <a 
                    href="https://play.google.com/store/apps/details?id=com.soloaccount.app" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    title="Get on Google Play"
                    className="h-10 w-10 flex items-center justify-center rounded-xl bg-brand-bg border border-brand-border hover:border-emerald-500/40 hover:bg-emerald-500/5 transition-all duration-300 group shadow-sm hover:scale-105"
                  >
                    {/* Extremely realistic high-fidelity Google Play Store tri-color vector */}
                    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M3.25 2.1C3.09 2.26 3 2.52 3 2.84V21.16C3 21.48 3.09 21.74 3.25 21.9L3.35 22L13.35 12L13.35 11.82L3.35 1.82L3.25 2.1Z" fill="#00E5FF" />
                      <path d="M16.65 8.7L13.35 11.82V12L16.65 15.12L16.73 15.02L20.67 12.76C21.79 12.12 21.79 11.08 20.67 10.44L16.73 8.18M16.65 8.7L13.35 11.82L3.35 1.82M16.65 8.7L20.67 10.44" fill="#FF3D00" />
                      <path d="M3.25 21.9L13.35 11.82M3.25 21.9L16.73 15.02L20.67 12.76M16.73 15.02" fill="#FFEA00" />
                      <path d="M16.65 15.12L13.35 12L3.35 22" fill="#00E676" />
                      
                      {/* Interactive shine gradient path overlays */}
                      <path d="M3.25 2.1C3.09 2.26 3 2.52 3 2.84V21.16C3 21.48 3.09 21.74 3.25 21.9L13.35 11.82L3.25 2.1Z" fill="url(#playGradLeft)" />
                      <path d="M20.67 10.44L16.65 8.7L13.35 11.82L20.67 10.44Z" fill="url(#playGradTop)" />
                      <path d="M20.67 12.76L13.35 11.82L16.65 15.12L20.67 12.76Z" fill="url(#playGradRight)" />
                      <path d="M13.35 11.82L3.25 21.9C3.09 21.74 3 21.48 3 21.16V2.84" fill="url(#playGradBottom)" />

                      <defs>
                        <linearGradient id="playGradLeft" x1="3" y1="12" x2="13.35" y2="12" gradientUnits="userSpaceOnUse">
                          <stop offset="0%" stopColor="#00C0FF" stopOpacity="0.8"/>
                          <stop offset="100%" stopColor="#00E5FF" stopOpacity="0.3"/>
                        </linearGradient>
                        <linearGradient id="playGradTop" x1="17" y1="9" x2="17" y2="12" gradientUnits="userSpaceOnUse">
                          <stop offset="0%" stopColor="#FF3D00" stopOpacity="0.9"/>
                          <stop offset="100%" stopColor="#FF6D00" stopOpacity="0.4"/>
                        </linearGradient>
                        <linearGradient id="playGradRight" x1="17" y1="12" x2="17" y2="15" gradientUnits="userSpaceOnUse">
                          <stop offset="0%" stopColor="#FFD600" stopOpacity="0.9"/>
                          <stop offset="100%" stopColor="#FFEA00" stopOpacity="0.4"/>
                        </linearGradient>
                        <linearGradient id="playGradBottom" x1="8.3" y1="16.9" x2="13.35" y2="11.82" gradientUnits="userSpaceOnUse">
                          <stop offset="0%" stopColor="#00E676" stopOpacity="0.9"/>
                          <stop offset="100%" stopColor="#00B248" stopOpacity="0.4"/>
                        </linearGradient>
                      </defs>
                    </svg>
                  </a>
                </div>
              </div>

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
                        <div className="flex flex-wrap items-center gap-x-2 gap-y-1 pt-1 text-[10px] font-mono font-bold text-emerald-500">
                          <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                          <span>Active Module</span>
                          <span className="text-brand-border/60">|</span>
                          <span className="text-brand-muted font-normal">Productivity Status: </span>
                          <span className="text-indigo-500 uppercase font-extrabold">{selectedProfile.productivityStatus}</span>
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

          {/* Tech Stack Full Width Section - "Built & Compiled With" */}
          <div className="mt-20 pt-12 border-t border-brand-border/60">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start text-left">
              <div className="lg:col-span-3 space-y-1">
                <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-emerald-500 bg-emerald-500/10 px-2.5 py-1 rounded-md">
                  Core Framework
                </span>
                <h4 className="text-base font-bold text-brand-text pt-2">Built & Compiled With</h4>
                <p className="text-xs text-brand-muted font-light leading-relaxed">The active UI foundation, reactive layout graphs, and client storage state operation suites.</p>
              </div>
              <div className="lg:col-span-9">
                <div className="flex flex-wrap gap-2">
                  {techStack.map((tech) => (
                    <div
                      key={tech.name}
                      className="flex items-center gap-2 rounded-xl border border-brand-border bg-brand-card/70 px-4 py-2.5 text-xs font-semibold text-brand-text shadow-sm hover:border-brand-text/20 hover:bg-brand-card transition-all duration-300"
                    >
                      <span className={tech.color}>{tech.icon}</span>
                      <span className="font-medium text-brand-text">{tech.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start text-left mt-8 pt-8 border-t border-brand-border/40">
              <div className="lg:col-span-3 space-y-1">
                <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-blue-500 bg-blue-500/10 px-2.5 py-1 rounded-md">
                  Ecosystem & Compilers
                </span>
                <h4 className="text-base font-bold text-brand-text pt-2">Integrated Foundations</h4>
                <p className="text-xs text-brand-muted font-light leading-relaxed">Platform compilers, global repositories, secure authentication providers, and developer IDE suites.</p>
              </div>
              <div className="lg:col-span-9">
                <div className="flex flex-wrap gap-2">
                  {ecosystemStack.map((tech) => (
                    <div
                      key={tech.name}
                      className="flex items-center gap-2 rounded-xl border border-brand-border bg-brand-card/70 px-4 py-2.5 text-xs font-semibold text-brand-text shadow-sm hover:border-brand-text/20 hover:bg-brand-card transition-all duration-300"
                    >
                      <span className={tech.color}>{tech.icon}</span>
                      <span className="font-medium text-brand-text">{tech.name}</span>
                    </div>
                  ))}
                </div>
              </div>
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

      {/* 📊 Segment 3: COGNITIVE INTERACTIVE WEALTH & SCENARIO ESTIMATOR CARD */}
      <section id="estimator" className="py-24 bg-brand-bg/50 border-b border-brand-border">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-3xl mx-auto text-center mb-16 space-y-4">
            <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight">Interactive Wealth & Scenario Simulator</h2>
            <p className="text-brand-muted">Adjust variables below to calculate your estimated savings velocity, health scores, and 10-year compounded investment projection under optional What-If choices.</p>
          </div>

          <div className="bg-brand-card border border-brand-border rounded-[2rem] p-6 md:p-10 max-w-5xl mx-auto shadow-xl grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            
            {/* Range Controls */}
            <div className="space-y-6 text-left">
              {/* Region Currency Selector */}
              <div className="space-y-2 pb-4 border-b border-brand-border/40">
                <div className="flex justify-between items-center">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-brand-muted flex items-center gap-1.5 font-mono">
                    <Globe className="h-3.5 w-3.5 text-emerald-500 animate-pulse" />
                    <span>Geographic Region Currency</span>
                  </label>
                  <span className="text-[9px] font-mono bg-emerald-500/10 text-emerald-500 px-2 py-0.5 rounded-full uppercase font-bold">Auto-detected Locale</span>
                </div>
                <div className="relative">
                  <select
                    value={currencyCode}
                    onChange={(e) => handleCurrencyChange(e.target.value as keyof typeof CURRENCIES)}
                    className="w-full appearance-none bg-brand-bg border border-brand-border rounded-xl px-4 py-3 text-xs font-bold text-brand-text focus:outline-none focus:ring-1 focus:ring-emerald-500/50 pr-10 cursor-pointer"
                  >
                    {Object.entries(CURRENCIES).map(([code, c]) => (
                      <option key={code} value={code}>
                        {c.region} — {c.symbol} ({c.name})
                      </option>
                    ))}
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-brand-muted">
                    <ChevronDown className="h-4 w-4" />
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-bold text-brand-text">Monthly Net Income</span>
                  <span className="text-sm font-mono font-bold bg-brand-text/10 px-3 py-1 rounded-lg text-brand-text">{currentCurrency.symbol}{monthlyIncome.toLocaleString()} / mo</span>
                </div>
                <input 
                  type="range" 
                  min={currentCurrency.minIncome} 
                  max={currentCurrency.maxIncome} 
                  step={currentCurrency.stepIncome}
                  value={monthlyIncome} 
                  onChange={(e) => setMonthlyIncome(parseInt(e.target.value))}
                  className="w-full accent-emerald-500 cursor-pointer"
                />
                <div className="flex justify-between text-[10px] text-brand-muted font-mono">
                  <span>{currentCurrency.minLabel}</span>
                  <span>{currentCurrency.midLabel}</span>
                  <span>{currentCurrency.maxLabel}</span>
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-bold text-brand-text">Identified Monthly Expenses</span>
                  <span className="text-sm font-mono font-bold bg-brand-text/10 px-3 py-1 rounded-lg text-brand-text">{currentCurrency.symbol}{monthlyExpenses.toLocaleString()} / mo</span>
                </div>
                <input 
                  type="range" 
                  min={currentCurrency.minExpense} 
                  max={currentCurrency.maxExpense} 
                  step={currentCurrency.stepExpense}
                  value={monthlyExpenses} 
                  onChange={(e) => setMonthlyExpenses(parseInt(e.target.value))}
                  className="w-full accent-emerald-500 cursor-pointer"
                />
                <div className="flex justify-between text-[10px] text-brand-muted font-mono">
                  <span>{currentCurrency.minExpLabel}</span>
                  <span>{currentCurrency.midExpLabel}</span>
                  <span>{currentCurrency.maxExpLabel}</span>
                </div>
              </div>

              {/* What-If Action Dropdown Selector */}
              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-wider text-brand-muted block">Model a Planning Scenario (What-If):</label>
                <div className="relative">
                  <select
                    value={whatIfScenario}
                    onChange={(e) => setWhatIfScenario(e.target.value as any)}
                    className="w-full appearance-none bg-brand-bg border border-brand-border rounded-xl px-4 py-3 text-sm font-medium text-brand-text focus:outline-none focus:ring-1 focus:ring-emerald-500/50 pr-10"
                  >
                    <option value="none">No Scenario — Traditional Budget (Baseline)</option>
                    <option value="envelope">Apply 15% Smart Envelope Cuts (Spend-Less Bounds)</option>
                    <option value="hustle">Add Freelance Side Hustle (+{currentCurrency.symbol}{currentCurrency.hustleBonus.toLocaleString()}/mo net)</option>
                    <option value="fee">Optimize Fees (Migrate to low-fee ETFs, save 1.2% CAGR)</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-brand-muted">
                    <ChevronDown className="h-4 w-4" />
                  </div>
                </div>
              </div>
            </div>

            {/* Simulated Live Projections */}
            <div className="bg-brand-bg/50 border border-brand-border rounded-2xl p-6 md:p-8 space-y-6 relative overflow-hidden text-left">
              <div className="absolute top-0 right-0 h-24 w-24 bg-emerald-500/5 rounded-full blur-2xl pointer-events-none" />
              
              <div className="space-y-1">
                <span className="text-[10px] font-bold uppercase tracking-widest text-brand-muted block">PROJECTED 10-YEAR COMPOUND WEALTH (at {whatIfScenario === 'fee' ? '9.2%' : '8.0%'} ROI):</span>
                <p className="text-4xl sm:text-5xl font-display font-black text-emerald-500 tracking-tight">
                  {currentCurrency.symbol}{projectedTenYearWealth.toLocaleString()}<span className="text-sm text-brand-muted font-normal font-sans"> / 10 years</span>
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4 pt-4 border-t border-brand-border">
                <div className="space-y-1">
                  <span className="text-[10px] font-bold uppercase text-brand-muted block">Estimated Health Score:</span>
                  <div className="flex items-center gap-2">
                    <span className="text-lg font-bold text-brand-text">{financialHealthScore} / 100</span>
                    <span className={`inline-flex items-center rounded-full px-2 py-0.5 text-[10px] font-mono font-bold ${
                      financialHealthScore >= 75 ? 'bg-emerald-500/10 text-emerald-500' :
                      financialHealthScore >= 50 ? 'bg-blue-500/10 text-blue-500' :
                      'bg-red-500/10 text-red-500'
                    }`}>
                      {financialHealthScore >= 75 ? 'Excellent' : financialHealthScore >= 50 ? 'Good' : 'Needs Care'}
                    </span>
                  </div>
                </div>
                <div className="space-y-1">
                  <span className="text-[10px] font-bold uppercase text-brand-muted block">Direct Savings Rate:</span>
                  <p className="text-lg font-bold text-brand-text">{savingsRate}% <span className="text-xs text-brand-muted font-normal font-sans">(Surplus: {currentCurrency.symbol}{monthlySurplus.toLocaleString()}/mo)</span></p>
                </div>
              </div>

              {/* Insights based on parameters */}
              <div className="pt-2 p-3 bg-brand-card/50 border border-brand-border/60 rounded-xl">
                <p className="text-xs text-brand-muted leading-relaxed">
                  {whatIfScenario === 'envelope' && "💡 Envelope Budgeting: Reducing your recurring utility leaks and unnecessary subscriptions by 15% immediately ramps your discretionary safety reserve."}
                  {whatIfScenario === 'hustle' && `💡 Side Income Flow: Adding a modest contract channel of ${currentCurrency.symbol}${currentCurrency.hustleBonus.toLocaleString()}/mo dramatically accelerates your leverage multiplier.`}
                  {whatIfScenario === 'fee' && "💡 Fee Reductions: Safely migrating disjoint investment assets away from high-fee portfolios (saving 1.2% in charges) compiles into major long-term benefits."}
                  {whatIfScenario === 'none' && "💡 Strategic Baseline: Increasing your net savings rate above 20% remains the fastest path to compounding security."}
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 🎯 Segment 4: SoloAccount — Implemented Features & Life-Changing Impact */}
      <section id="metrics" className="py-24 bg-brand-bg border-b border-brand-border relative overflow-hidden">
        {/* Ambient glow backgrounds */}
        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 h-80 w-80 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-1/3 right-1/4 -translate-y-1/2 h-96 w-96 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />

        <div className="mx-auto max-w-7xl px-6">
          
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div className="text-left space-y-3">
              <div className="inline-flex items-center gap-2 rounded-full border border-brand-border bg-brand-card px-3 py-1 text-[11px] font-mono font-bold tracking-wider uppercase text-emerald-500">
                <span className="flex h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                <span>System Manifest: v0.1.43</span>
              </div>
              <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                <img 
                  src={soloaccountLogo} 
                  alt="SoloAccount Logo" 
                  className="h-16 w-16 object-contain rounded-2xl border border-brand-border/60 bg-brand-card p-1.5 shadow-md flex-shrink-0"
                  referrerPolicy="no-referrer"
                />
                <div className="space-y-1">
                  <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-brand-text">
                    SoloAccount State & Impact
                  </h2>
                </div>
              </div>
              <p className="text-sm sm:text-base text-brand-muted max-w-2xl font-light">
                Delivering ~58% of the full enterprise PRD vision with robust personal finance modules, advanced volatile forecasting algorithms, and family collaboration frameworks.
              </p>
            </div>

            {/* Micro Stats Widget */}
            <div className="flex gap-4 p-4 rounded-2xl bg-brand-card border border-brand-border min-w-[240px] shrink-0 text-left">
              <div className="h-12 w-12 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-500 shrink-0">
                <Activity className="h-6 w-6" />
              </div>
              <div>
                <span className="text-[10px] font-mono font-bold uppercase text-brand-muted tracking-wider">Vision Completion</span>
                <div className="flex items-baseline gap-2 mt-0.5">
                  <span className="text-2xl font-display font-bold text-brand-text">~58%</span>
                  <span className="text-xs text-emerald-500 font-semibold">Active Build</span>
                </div>
              </div>
            </div>
          </div>

          {/* Tab Selection */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 p-1.5 bg-brand-card/50 border border-brand-border rounded-2xl mb-12">
            {[
              { id: 'new-features', label: '✨ Newly Implemented', desc: 'Local Profiles, Native SQLite, and private device-linking backup' },
              { id: 'features', label: '✅ Implemented Features', desc: 'Core tracking, planning & intelligence modules ready for production' },
              { id: 'impact', label: '🚀 Life-Changing Impact', desc: 'How structured ledger intelligence alters personal & family dynamics' },
              { id: 'tech', label: '🛠️ Architecture & Gaps', desc: 'The technical foundation and our honest documented scope limits' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveSegment4Tab(tab.id as any)}
                className={`flex flex-col items-start gap-1 p-4 rounded-xl text-left transition-all ${
                  activeSegment4Tab === tab.id 
                    ? 'bg-brand-card border border-brand-border text-brand-text shadow-md scale-[1.01]' 
                    : 'text-brand-muted hover:text-brand-text border border-transparent'
                }`}
              >
                <span className="text-sm font-bold">{tab.label}</span>
                <span className="text-[11px] font-normal text-brand-muted leading-tight">{tab.desc}</span>
              </button>
            ))}
          </div>

          {/* Interactive Tab Content Display */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeSegment4Tab}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.4 }}
              className="min-h-[500px]"
            >
              {activeSegment4Tab === 'new-features' && (
                <div className="space-y-8 animate-fade-in">
                  {/* Executive Summary Mini Overview for New Features */}
                  <div className="p-6 rounded-2xl bg-brand-card border border-brand-border text-left relative overflow-hidden">
                    <div className="absolute top-0 right-0 h-32 w-32 bg-emerald-500/10 rounded-full blur-2xl" />
                    <div className="flex flex-col sm:flex-row sm:items-center gap-3 mb-2">
                      <span className="text-xs font-bold uppercase tracking-wider text-emerald-500 bg-emerald-500/10 px-2.5 py-1 rounded-md shrink-0 w-fit">New release: v0.2.0</span>
                      <h3 className="text-base font-bold text-brand-text">Major Native Storage & Privacy Milestone</h3>
                    </div>
                    <p className="text-sm text-brand-muted font-light leading-relaxed max-w-4xl">
                      We have dramatically hardened SoloAccount's core foundation with <strong className="text-brand-text font-semibold">Native Android SQLite storage</strong>, instant account-less <strong className="text-brand-text font-semibold">Local Profiles</strong>, and a robust <strong className="text-brand-text font-semibold">encrypted recovery protocol</strong>. Your financial security, velocity, and data durability are guaranteed with absolute hardware-level sovereignty.
                    </p>
                  </div>

                  {/* Grid of 5 New Features */}
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
                    {[
                      {
                        icon: <UserCheck className="h-5 w-5 text-emerald-500" />,
                        tag: "Guest Mode",
                        title: "Local Profiles",
                        desc: "Start managing finances instantly with no signups, no email demands, and zero tracker links. Unlimited, fully isolated guest views kept wholly on your device memory.",
                        badge: "Web + Android",
                        items: ["Zero setup barrier", "Scoped account databases", "Dynamic profile switching"]
                      },
                      {
                        icon: <Database className="h-5 w-5 text-emerald-500" />,
                        tag: "Reliable DB",
                        title: "Native SQLite on Android",
                        desc: "Replaces standard WebView localStorage with a high-fidelity native SQLite database engine. Your financial logs survive aggressive system cleans, resets, and hot updates.",
                        badge: "Android Exclusive",
                        items: ["Direct SQLite storage", "Immutable asset logs", "Sub-millisecond query speed"]
                      },
                      {
                        icon: <Lock className="h-5 w-5 text-emerald-500" />,
                        tag: "Encrypted Links",
                        title: "Device Linking & Recovery",
                        desc: "Move entire profile files to a secondary smartphone in seconds. Supports fully private AES-GCM local recovery codes or quick, short 8-char encrypted cloud relays.",
                        badge: "Sovereign Backup",
                        items: ["150K PBKDF2 iterations", "Pure client-side encryption", "Single-use secure code"]
                      },
                      {
                        icon: <RefreshCw className="h-5 w-5 text-emerald-500" />,
                        tag: "Zero-Loss Path",
                        title: "Background Local-to-SQL Migration",
                        desc: "Seamlessly translates vintage localStorage key-value sequences into native SQLite tables in the background during your first upgrade launch. Safe, quiet, and automatic.",
                        badge: "Android Auto-Upgrade",
                        items: ["One-shot automatic detection", "Idempotent database mapping", "Zero transaction downtime"]
                      },
                      {
                        icon: <Terminal className="h-5 w-5 text-emerald-500" />,
                        tag: "Diag Console",
                        title: "Storage Debug Panel",
                        desc: "Interactive developer-oriented dashboard integrated into Settings. Inspect active SQLite file paths, trigger manual re-migration procedures, and pull schemas via ADB.",
                        badge: "Power-User Tool",
                        items: ["Absolute storage visibility", "ADB pull diagnostic path", "Idempotent reset buttons"]
                      }
                    ].map((feat, i) => (
                      <div key={i} className="p-6 rounded-2xl bg-brand-card/70 border border-brand-border hover:border-brand-text/20 transition-all flex flex-col justify-between space-y-4">
                        <div className="space-y-3">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                              <div className="p-2 rounded-xl bg-emerald-500/10 border border-emerald-500/20 shrink-0">
                                {feat.icon}
                              </div>
                              <span className="text-[10px] font-mono font-bold tracking-wider text-brand-muted uppercase">{feat.tag}</span>
                            </div>
                            <span className="text-[10px] bg-emerald-500/10 text-emerald-500 font-mono font-bold px-2 py-0.5 rounded-full">{feat.badge}</span>
                          </div>
                          <h4 className="text-base font-bold text-brand-text">{feat.title}</h4>
                          <p className="text-xs text-brand-muted leading-relaxed font-light">{feat.desc}</p>
                        </div>
                        <div className="pt-3 border-t border-brand-border/40 space-y-1">
                          {feat.items.map((item, idx) => (
                            <div key={idx} className="flex items-center gap-1.5 text-[11px] text-brand-muted font-light">
                              <Check className="h-3 w-3 text-emerald-500 shrink-0" />
                              <span>{item}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeSegment4Tab === 'features' && (
                <div className="space-y-8">
                  {/* Executive Summary Mini Overview */}
                  <div className="p-6 rounded-2xl bg-brand-card border border-brand-border text-left relative overflow-hidden">
                    <div className="absolute top-0 right-0 h-32 w-32 bg-emerald-500/5 rounded-full blur-2xl" />
                    <h3 className="text-base font-bold text-brand-text mb-2">Executive Summary</h3>
                    <p className="text-sm text-brand-muted font-light leading-relaxed max-w-4xl">
                      SoloAccount is a modern, privacy-first personal finance platform that goes far beyond basic budgeting. It combines 
                      <strong className="text-brand-text font-semibold"> real-time tracking</strong>, 
                      <strong className="text-brand-text font-semibold"> intelligent forecasting</strong>, 
                      <strong className="text-brand-text font-semibold"> investment analytics</strong>, and 
                      <strong className="text-brand-text font-semibold"> family collaboration</strong> into one secure, server-vetted offline-first model.
                    </p>
                  </div>

                  {/* Grid of 9 Implemented Modules */}
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
                    {[
                      {
                        num: "01",
                        title: "Core Finance Tracking",
                        desc: "Multi-account (Cash, Bank, Credit Card, E-Wallet) support with transfers, recurring lists, notes, and CSV imports.",
                        badge: "In Production",
                        items: ["Granular account metadata", "Recursive payment schedules", "Categorization hooks"]
                      },
                      {
                        num: "02",
                        title: "Planning & Budgets",
                        desc: "Weekly and monthly limits, envelope/zero-based budgeting checks, savings goals with progress charts.",
                        badge: "Advanced Features",
                        items: ["Automatic rollovers", "Reallocation recommendations", "Debt payoff methods"]
                      },
                      {
                        num: "03",
                        title: "Forecasting & Scenario",
                        desc: "3-month cash flow modeling based on historic volatility pattern detection, alerting you of potential shortfalls.",
                        badge: "Unique Strength",
                        items: ["What-If career break simulator", "Optimistic/Pessimistic ranges", "Negative runway counts"]
                      },
                      {
                        num: "04",
                        title: "Investment Analytics",
                        desc: "Stocks, crypto, ETFs, mutual funds holdings calculation layer computing deep metrics natively.",
                        badge: "Ready",
                        items: ["Newton-Raphson XIRR & IRR", "Weighted return metrics", "Finnhub news pipelines"]
                      },
                      {
                        num: "05",
                        title: "Analytics & Intelligence",
                        desc: "Consolidated Net Worth trends, monthly breakdowns, anomalous spend flagging, and a core score.",
                        badge: "Active Real-Time",
                        items: ["Financial Health Score (0-100)", "Historic year-on-year offsets", "D3 visual graph matrices"]
                      },
                      {
                        num: "06",
                        title: "Notes & Knowledge Management",
                        desc: "Rich client-side Markdown note storage supporting structural folders, pinning parameters, search anchors.",
                        badge: "Offline Safe",
                        items: ["Embedded Markdown editor", "Full text indexing", "Note hierarchy binders"]
                      },
                      {
                        num: "07",
                        title: "Security & Personalization",
                        desc: "Complete biometric credentials (devices with secure enclave), multilingual support, currency conversion matrices.",
                        badge: "Shield Guarded",
                        items: ["AES-256 state local mirror", "Google Auth and secure credentials", "English, Arabic, Tamil profiles"]
                      },
                      {
                        num: "08",
                        title: "Family Collaboration",
                        desc: "Granular account level share options. Add partners or managers to single ledgers while retaining principal control.",
                        badge: "New Release",
                        items: ["Supabase row-level security", "Pending/Active invite streams", "Restricted writer permissions"]
                      },
                      {
                        num: "09",
                        title: "Technical Excellence",
                        desc: "Capacitor-supported mobile deployment files, Zustand state layers, client offline-capable cache bindings.",
                        badge: "Verified Build",
                        items: ["Standard IndexedDB fallback", "CI standard linter audits", "Continuous Delivery streams"]
                      }
                    ].map((mod, i) => (
                      <div key={i} className="p-6 rounded-2xl bg-brand-card/70 border border-brand-border hover:border-brand-text/20 transition-all flex flex-col justify-between space-y-4">
                        <div className="space-y-3">
                          <div className="flex items-center justify-between">
                            <span className="text-xs font-mono font-bold text-emerald-500">{mod.num}/</span>
                            <span className="text-[10px] bg-emerald-500/10 text-emerald-500 uppercase font-mono font-bold px-2 py-0.5 rounded-full">{mod.badge}</span>
                          </div>
                          <h4 className="text-base font-bold text-brand-text">{mod.title}</h4>
                          <p className="text-xs text-brand-muted leading-relaxed">{mod.desc}</p>
                        </div>
                        <div className="pt-3 border-t border-brand-border/40 space-y-1">
                          {mod.items.map((item, idx) => (
                            <div key={idx} className="flex items-center gap-1.5 text-[11px] text-brand-muted font-light">
                              <Check className="h-3 w-3 text-emerald-500" />
                              <span>{item}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeSegment4Tab === 'impact' && (
                <div className="space-y-8 text-left">
                  {/* Title */}
                  <div className="p-6 rounded-2xl bg-brand-card border border-brand-border">
                    <h3 className="text-base font-bold text-brand-text mb-2">🚀 Life Changes</h3>
                    <p className="text-sm text-brand-muted font-light leading-relaxed">
                      This is not just another budgeting app. SoloAccount is carefully engineered to **reduce financial anxiety**, 
                      **increase long-term visual clarity**, and **improve household financial cooperation patterns** across generations.
                    </p>
                  </div>

                  {/* 3x3 Grid of Life Shifts */}
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {[
                      {
                        title: "1. Stop Living Paycheck-to-Paycheck",
                        detail: "The multi-scenario forecasting reads historic volatility to highlight potential account shortfalls 4-8 weeks early, letting you act long before the stress triggers.",
                        metric: "Prevent Surprises"
                      },
                      {
                        title: "2. Absolute Visibility over Leakages",
                        detail: "Category breakdown heatmaps and auto-insights highlight ignored sub-service fees and micro subscriptions draining your future.",
                        metric: "Zero Hidden Fees"
                      },
                      {
                        title: "3. Confident & Robust Decisioning",
                        detail: "A built-in What-If modeler allows you to stress-test your ledger for large future choices before committing capital.",
                        metric: "What-If Modeler"
                      },
                      {
                        title: "4. Eliminate Domestic Cash Disputes",
                        detail: "Joint sharing eliminates standard 'I thought you paid that' statements. Both partners see clean, real-time balances, building trust.",
                        metric: "Family Alignment"
                      },
                      {
                        title: "5. Rigid, Non-Emotional Investing",
                        detail: "Portfolio trackers analyze tracking fees, Sharpe ratios, and concentration risks, transforming random asset collection into a strategy.",
                        metric: "Intelligent Portfolios"
                      },
                      {
                        title: "6. Master Decisions, Avoid Fatigue",
                        detail: "A centralized, continuous Financial Health Score calculates savings rate, debt metrics, and seasonal outcomes, like a proactive personal CFO.",
                        metric: "Health Score Card"
                      },
                      {
                        title: "7. Intentional Capital Directing",
                        detail: "By integrating goals, snowball debt payoffs, and active analytics, this framework guides surplus money to long-term compounding.",
                        metric: "Real Wealth Building"
                      },
                      {
                        title: "8. Genuine Relief & Mindset Shifts",
                        detail: "Clarity over limits removes the phantom stress of spending. Knowledge is security, translating immediately to healthier sleep rules.",
                        metric: "Anxiety Reduction"
                      },
                      {
                        title: "9. True Sovereignty & Choice",
                        detail: "When money is quantified, monitored, and projected, it shifts from an existential concern to a reliable utility under your command.",
                        metric: "Mastery & Sovereignty"
                      }
                    ].map((shift, i) => (
                      <div key={i} className="group p-6 rounded-2xl bg-brand-card/50 border border-brand-border hover:bg-brand-text/[0.01] hover:border-brand-text/10 hover:shadow-md transition-all relative overflow-hidden flex flex-col justify-between min-h-[220px]">
                        <div className="space-y-2">
                          <h4 className="text-base font-bold text-brand-text group-hover:text-emerald-500 transition-colors">{shift.title}</h4>
                          <p className="text-xs text-brand-muted leading-relaxed font-light">{shift.detail}</p>
                        </div>
                        <div className="pt-4 border-t border-brand-border/40 flex justify-between items-center mt-3">
                          <span className="text-[10px] font-mono font-bold uppercase text-brand-muted tracking-wide">{shift.metric}</span>
                          <span className="text-[10px] font-mono font-black text-emerald-500 uppercase">Impact Passed</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeSegment4Tab === 'tech' && (
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 text-left">
                  {/* Left: Technology Specifications */}
                  <div className="lg:col-span-6 p-6 md:p-8 rounded-2xl bg-brand-card border border-brand-border space-y-6 relative overflow-hidden">
                    <div className="absolute top-0 right-0 h-32 w-32 bg-blue-500/5 rounded-full blur-2xl pointer-events-none" />
                    
                    <div>
                      <span className="text-[10px] font-mono font-bold uppercase text-emerald-500 tracking-wider">Under the Hood</span>
                      <h3 className="text-xl font-bold text-brand-text mt-1">Robust Client-First Architecture</h3>
                      <p className="text-xs text-brand-muted mt-2 font-light leading-relaxed">
                        SoloAccount balances fluid client responsiveness and strong absolute local private state.
                      </p>
                    </div>

                    <div className="space-y-4">
                      {[
                        { title: "Zustand State System", desc: "Allows instant offline modifications, state history tracking, and predictable UI actions without loading screen flicker." },
                        { title: "Postgres Database + Supabase Sync", desc: "Rigorous Row-Level Security rules paired with auto-sync ensures zero-loss multi-device backups under strict identity shields." },
                        { title: "Standard JavaScript/Typed Calculation Layer", desc: "All math algorithms (including complex multi-year IRR iterations) run with safe, high-precision performance." },
                        { title: "PWA & Capacitor Native Wrap", desc: "One-command cross-platform builds allow fast offline app execution on standard Android and mobile browsers seamlessly." }
                      ].map((spec, idx) => (
                        <div key={idx} className="space-y-1">
                          <h4 className="text-xs font-bold text-brand-text flex items-center gap-2">
                            <span className="h-1.5 w-1.5 bg-brand-text rounded-full" />
                            {spec.title}
                          </h4>
                          <p className="text-xs text-brand-muted font-light leading-relaxed pl-3.5">{spec.desc}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Right: Honesty Gaps & Disclosed Limitations */}
                  <div className="lg:col-span-6 p-6 md:p-8 rounded-2xl bg-brand-card border border-brand-border space-y-6 relative overflow-hidden">
                    <div className="absolute top-0 right-0 h-32 w-32 bg-red-500/5 rounded-full blur-2xl pointer-events-none" />
                    
                    <div>
                      <span className="text-[10px] font-mono font-bold uppercase text-brand-muted tracking-wider">Transparency & Limits</span>
                      <h3 className="text-xl font-bold text-brand-text mt-1">Gaps & Project Frontiers</h3>
                      <p className="text-xs text-brand-muted mt-2 font-light leading-relaxed">
                        The current v0.1.43 build covers ~58% of target specs. We explicitly disclose current boundaries to maintain absolute architectural honesty.
                      </p>
                    </div>

                    <div className="space-y-4">
                      {[
                        { title: "No Receipt OCR / Image Inputs", desc: "Currently offline transaction logging is fully manual or CSV-based. Physical image scraping pipeline is deferred for future modules." },
                        { title: "No Embedded Conversational AI", desc: "The AI operates strictly as a background categorizer and anomaly monitor. Chat inputs are not yet active." },
                        { title: "No SMS or Direct Push Alert Gateways", desc: "Budget limits and alert models are currently kept entirely visual. Direct native OS pushes and third-party SMS alerts are planned for later iterations." },
                        { title: "Deferred Monte Carlo Computations", desc: "Retirement and compound savings scenarios are simulated, but fully statistical risk distributions are planned but not finished." }
                      ].map((gap, idx) => (
                        <div key={idx} className="space-y-1">
                          <h4 className="text-xs font-bold text-brand-text flex items-center gap-2">
                            <span className="h-1.5 w-1.5 bg-red-500/50 rounded-full" />
                            {gap.title}
                          </h4>
                          <p className="text-xs text-brand-muted font-light leading-relaxed pl-3.5">{gap.desc}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                </div>
              )}
            </motion.div>
          </AnimatePresence>

        </div>
      </section>

      {/* 🔮 Segment 4B: SOLOACCOUNT INTERACTIVE SURFACE TOUR & SCREENSHOWCASE */}
      <section id="showcase" className="py-24 bg-brand-bg border-b border-brand-border relative overflow-hidden">
        {/* Dynamic backdrop reflection mesh */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(16,185,129,0.03),transparent_45%)] pointer-events-none" />
        <div className="absolute top-1/2 right-0 -translate-y-1/2 h-[500px] w-[500px] bg-emerald-500/[0.02] rounded-full blur-[120px] pointer-events-none" />

        <div className="mx-auto max-w-7xl px-6 relative z-10">
          
          <div className="max-w-3xl text-left space-y-3 mb-16">
            <div className="inline-flex items-center gap-2 rounded-full border border-brand-border bg-brand-card px-3 py-1 text-[11px] font-mono font-bold tracking-wider uppercase text-emerald-500">
              <span className="flex h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
              <span>Interactive Interface Tour</span>
            </div>
            <h2 className="font-display text-4xl sm:text-5xl font-black tracking-tight text-brand-text">
              High-Fidelity Screen Showcase
            </h2>
            <p className="text-sm sm:text-base text-brand-muted max-w-2xl font-light">
              Explore the polished, double-entry dashboard views and analytical engine panels of the SoloAccount client build. Hover over any card below to pause the automatic slide sequence.
            </p>
          </div>

          {/* Core Feature Grid Split */}
          <div 
            className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center"
            onMouseEnter={() => setIsAutoplayPaused(true)}
            onMouseLeave={() => setIsAutoplayPaused(false)}
          >
            
            {/* Left Column: Interactive Tab Indicators */}
            <div className="lg:col-span-5 space-y-4">
              {[
                {
                  id: 0,
                  tag: "Consolidated Wealth",
                  title: "Dynamic Ledger Dashboard",
                  desc: "Calculate asset-to-debt distributions across cash, deposit, cards, and e-wallets. Visualized with multi-currency support and real-time Net Worth compiling.",
                  metric: "$124.9K Net Asset State"
                },
                {
                  id: 1,
                  tag: "Scenario Modeling",
                  title: "Predictive Runaway Forecaster",
                  desc: "Stress-test potential income shocks or career shifts against rolling cash runway metrics. Identifies budget holes 4-8 weeks before they trigger anxiety.",
                  metric: "8-Month Safe Reserves"
                },
                {
                  id: 2,
                  tag: "Smart Controls",
                  title: "Envelopes & Goal Manager",
                  desc: "Direct excess liquidity immediately towards compounding goals. Automates transaction matching and checks for active subscription leaks with zero complex setups.",
                  metric: "18% Dynamic Savings Goal"
                },
                {
                  id: 3,
                  tag: "Private Analytics",
                  title: "Sovereign Portfolio Performance",
                  desc: "Compute annualized XIRR rates and weight allocations in absolute confidence without sending data to servers. Runs fully sandbox-encrypted in your locale.",
                  metric: "9.2% Optimized Return Rate"
                }
              ].map((surf) => {
                const isActive = activeSurfaceIndex === surf.id;
                return (
                  <button
                    key={surf.id}
                    onClick={() => {
                      setActiveSurfaceIndex(surf.id);
                      setIsAutoplayPaused(true);
                    }}
                    className={`w-full text-left p-5 rounded-2xl border transition-all duration-300 relative flex gap-4 ${
                      isActive 
                        ? 'bg-brand-card border-brand-border/80 shadow-[0_8px_30px_rgba(0,0,0,0.04)] dark:shadow-[0_8px_30px_rgba(0,0,0,0.1)] scale-[1.01]' 
                        : 'border-transparent opacity-60 hover:opacity-100'
                    }`}
                  >
                    {/* Active side indicator */}
                    {isActive && (
                      <motion.div 
                        layoutId="activeSlideIndicator"
                        className="absolute left-0 top-6 bottom-6 w-1 bg-emerald-500 rounded-r-full"
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                      />
                    )}

                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <span className={`text-[9px] font-mono font-bold uppercase px-2 py-0.5 rounded-md ${
                          isActive 
                            ? 'bg-emerald-500/10 text-emerald-500' 
                            : 'bg-brand-text/[0.04] text-brand-muted'
                        }`}>
                          {surf.tag}
                        </span>
                        <span className="text-[10px] text-brand-muted/70 font-mono font-semibold">
                          0{surf.id + 1}
                        </span>
                      </div>
                      
                      <h3 className="text-base font-bold text-brand-text leading-tight">{surf.title}</h3>
                      
                      {isActive && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          transition={{ duration: 0.3 }}
                          className="space-y-3 overflow-hidden"
                        >
                          <p className="text-xs text-brand-muted leading-relaxed font-light mt-1">
                            {surf.desc}
                          </p>
                          <div className="text-[10px] font-mono font-bold text-emerald-500 flex items-center gap-1.5">
                            <Check className="h-3 w-3" />
                            <span>{surf.metric}</span>
                          </div>
                        </motion.div>
                      )}
                    </div>
                  </button>
                );
              })}

              {/* Autoplay status flag */}
              <div className="pt-2 flex items-center justify-between text-[11px] text-brand-muted/80 font-mono px-4">
                <div className="flex items-center gap-2">
                  <span className={`h-2.5 w-2.5 rounded-full flex items-center justify-center relative ${isAutoplayPaused ? 'text-amber-500' : 'text-emerald-500'}`}>
                    <span className={`absolute inline-flex h-full w-full rounded-full opacity-75 ${isAutoplayPaused ? 'bg-amber-500 animate-ping' : 'bg-emerald-500 animate-ping'}`} />
                    <span className={`relative inline-flex rounded-full h-1.5 w-1.5 ${isAutoplayPaused ? 'bg-amber-500' : 'bg-emerald-500'}`} />
                  </span>
                  <span>{isAutoplayPaused ? "Rotation Interrupted" : "Autoplay Sequencer Active"}</span>
                </div>
                <span>Interval: 5.5s</span>
              </div>
            </div>

            {/* Right Column: Premium Mockup with Dynamic Image Transits */}
            <div className="lg:col-span-7 relative flex justify-center">
              {/* Backlit glow effect matches state */}
              <div className="absolute -inset-4 bg-gradient-to-tr from-emerald-500/5 to-teal-500/10 rounded-[2.5rem] blur-2xl opacity-80 pointer-events-none" />
              
              {/* Sleek Bezel Container */}
              <div className="w-full max-w-xl aspect-[16/10.5] rounded-2xl bg-brand-card border border-brand-border/90 p-3 shadow-2xl flex flex-col relative overflow-hidden group">
                {/* Browser bar header simulation */}
                <div className="flex items-center gap-1.5 pb-2.5 px-1 border-b border-brand-border/40 shrink-0">
                  <div className="h-2 w-2 rounded-full bg-red-500/30" />
                  <div className="h-2 w-2 rounded-full bg-yellow-500/30" />
                  <div className="h-2 w-2 rounded-full bg-emerald-500/30" />
                  <div className="ml-4 flex items-center gap-1 rounded bg-brand-bg px-2 py-0.5 text-[9px] font-mono font-medium text-brand-muted border border-brand-border/40 select-none max-w-xs truncate">
                    <span className="text-emerald-500">https://</span>
                    <span>soloaccount.solosoftwares.com/dashboard</span>
                  </div>
                </div>

                {/* Animated Screen Portal */}
                <div className="flex-1 rounded-lg bg-brand-bg border border-brand-border/30 overflow-hidden relative min-h-[250px] sm:min-h-[350px]">
                  <AnimatePresence mode="wait">
                    {[
                      { id: 0, img: surf1, label: "Dashboard Screen" },
                      { id: 1, img: surf2, label: "Scenario Modeler Panel" },
                      { id: 2, img: surf3, label: "Budget Allocation view" },
                      { id: 3, img: surf4, label: "Investment Charts" }
                    ].map((slide) => {
                      if (slide.id !== activeSurfaceIndex) return null;
                      return (
                        <motion.div
                          key={slide.id}
                          initial={{ opacity: 0, scale: 0.98, y: 5 }}
                          animate={{ opacity: 1, scale: 1, y: 0 }}
                          exit={{ opacity: 0, scale: 1.02, y: -5 }}
                          transition={{ duration: 0.45, ease: "easeInOut" }}
                          className="absolute inset-0 flex flex-col items-center justify-center p-2"
                        >
                          <img 
                            src={slide.img} 
                            alt={`SoloAccount ${slide.label}`} 
                            className="w-full h-full object-contain rounded-md"
                            referrerPolicy="no-referrer"
                            onError={(e) => {
                              // Elegant placeholder fallback if image file is completely empty/damaged
                              const target = e.target as HTMLImageElement;
                              target.style.display = 'none';
                              const parent = target.parentElement;
                              if (parent) {
                                const placeholder = document.getElementById(`fallback-${slide.id}`);
                                if (placeholder) placeholder.style.display = 'flex';
                              }
                            }}
                          />
                          {/* Fallback layout representation */}
                          <div 
                            id={`fallback-${slide.id}`} 
                            style={{ display: 'none' }} 
                            className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center space-y-4 bg-brand-card/90"
                          >
                            <Layout className="h-10 w-10 text-emerald-500 animate-pulse" />
                            <div>
                              <p className="text-sm font-bold text-brand-text">{slide.label}</p>
                              <p className="text-xs text-brand-muted font-light max-w-xs mt-1">Interface Surface screenshot is queued for next live sync.</p>
                            </div>
                          </div>
                        </motion.div>
                      );
                    })}
                  </AnimatePresence>
                </div>
              </div>
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
            <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight">Trusted by Thousands on Google Play</h2>
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
                  <span className="text-sm font-medium">support@solosoftwares.com</span>
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
