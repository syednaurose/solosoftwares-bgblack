import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ArrowRight, 
  ChevronRight, 
  Globe, 
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
  },
  {
    id: 'system-design',
    roleType: 'System Design',
    moduleName: 'Enterprise Architecture & Blueprint Core',
    avatarAccent: 'from-rose-500 to-pink-800',
    iconName: 'layers',
    tagline: 'Federated microservice decoupling, modular layout graphs, and decoupled sync boundaries.',
    version: 'v2.0.4',
    metricValue: '100% Solid',
    metricLabel: 'Topology Fault Tolerance',
    keyCapabilities: ['Multi-channel failover routing', 'Domain-driven service segregation', 'Enterprise schema harmonization', 'Latency optimization patterns'],
    architectureStack: ['C4 Architecture Model', 'Architectural Layout Compilers', 'OpenAPI Specs', 'Swagger Hub Systems'],
    complianceVetting: 'Validated fully against distributed fallback patterns and high-availability disaster protocols.',
    productionOutcome: 'Ensures structured separation of modular frameworks, mitigating architectural debt cascades.',
    deploymentStatus: 'Enterprise architecture diagrams certified'
  },
  {
    id: 'qa-analyst',
    roleType: 'QA Analyst',
    moduleName: 'Automated Continuous Assertion Engine',
    avatarAccent: 'from-emerald-400 to-teal-600',
    iconName: 'check-circle',
    tagline: 'Fully automated testing frameworks running comprehensive simulation runs over local states.',
    version: 'v1.7.0',
    metricValue: '99.98%',
    metricLabel: 'Automated Test Coverage',
    keyCapabilities: ['Cross-browser layout assertion', 'Chaotic failure stress injection', 'Responsive element audit', 'Asynchronous data race audit'],
    architectureStack: ['Playwright Test Suites', 'Jest Runner Modules', 'K6 Load Injectors', 'Lighthouse Perf Auditors'],
    complianceVetting: 'Continuous regression evaluation securing zero compliance holes and perfect interface reliability.',
    productionOutcome: 'Eliminates layout visual regressions and unhandled promise failures across the entire core suite.',
    deploymentStatus: 'Daily regression pipelines fully green'
  },
  {
    id: 'release-automation',
    roleType: 'Release Automation',
    moduleName: 'Zero-Downtime Blue-Green GitOps Flow',
    avatarAccent: 'from-amber-400 to-orange-600',
    iconName: 'terminal',
    tagline: 'Automated container packaging, secure cryptographic binary signing, and deployment streams.',
    version: 'v3.1.2-Stable',
    metricValue: '< 4 Mins',
    metricLabel: 'Release Ingestion SLA',
    keyCapabilities: ['Declarative GitOps workflows', 'Automated canary rollbacks', 'Secure cryptographic audits', 'Container layer caching'],
    architectureStack: ['GitHub Action Runbooks', 'ArgoCD Sync Operators', 'Docker Container Registers', 'HashiCorp Vault Secrets'],
    complianceVetting: 'Meets SLSA Level 3 security frameworks with automated supply-chain source signing pipelines.',
    productionOutcome: 'Handles dozens of safe, automated zero-downtime hotfixes and system rollouts every single week.',
    deploymentStatus: 'Automated GitOps deploy pipeline active'
  },
  {
    id: 'supports',
    roleType: 'Supports',
    moduleName: '24/7 Global Live-Site Reliability Desk',
    avatarAccent: 'from-sky-500 to-indigo-700',
    iconName: 'settings',
    tagline: 'Proactive metrics evaluation and instant incident triage following precise SLA targets.',
    version: 'v5.0-LTS',
    metricValue: '< 15 Mins',
    metricLabel: 'Average Resolution Speed',
    keyCapabilities: ['Intelligent error alerting', 'Disaster recovery execution', 'Database runtime optimizations', 'Active tenant assistance'],
    architectureStack: ['Grafana Analytics Core', 'Sentry Incident Hubs', 'PagerDuty Alerts Engine', 'Sovereign Workspace Keys'],
    complianceVetting: 'Adheres to stringent ISO 27001 data handling, logging, and access control policies.',
    productionOutcome: 'Maintains live tracking transparency and delivers immediate answers regarding active application state.',
    deploymentStatus: 'Active global site reliability support active'
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

export default function HomePage({ isDarkMode, setIsDarkMode }: HomePageProps) {
  const [activeSection, setActiveSection] = useState('hero');
  const [selectedRoleIndex, setSelectedRoleIndex] = useState(0);
  
  // Custom states for Wealth & Scenario Planning Simulator (Income vs Expenses)
  const [monthlyIncome, setMonthlyIncome] = useState(7500);
  const [monthlyExpenses, setMonthlyExpenses] = useState(4800);
  const [whatIfScenario, setWhatIfScenario] = useState<'none' | 'envelope' | 'hustle' | 'fee'>('none');
  const [activeSegment4Tab, setActiveSegment4Tab] = useState<'new-features' | 'features' | 'impact' | 'tech'>('new-features');
  const [activeSurfaceIndex, setActiveSurfaceIndex] = useState(0);
  const [isAutoplayPaused, setIsAutoplayPaused] = useState(false);

  useEffect(() => {
    if (isAutoplayPaused) return;
    const timer = setInterval(() => {
      setActiveSurfaceIndex((prev) => (prev + 1) % 4);
    }, 5500); // Rotate every 5.5 seconds for optimal reading speed
    return () => clearInterval(timer);
  }, [isAutoplayPaused]);

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

  // Derived analytical calculations based on income vs expenses & What-if actions
  const adjustedIncome = whatIfScenario === 'hustle' ? monthlyIncome + 1200 : monthlyIncome;
  const adjustedExpenses = whatIfScenario === 'envelope' ? Math.round(monthlyExpenses * 0.85) : monthlyExpenses;
  
  const monthlySurplus = Math.max(0, adjustedIncome - adjustedExpenses);
  const savingsRate = adjustedIncome > 0 ? Math.round((monthlySurplus / adjustedIncome) * 100) : 0;
  
  // Financial Health Score (0-100) based on savings rate and emergency buffer
  const financialHealthScore = Math.max(10, Math.min(100, Math.round(
    30 + 
    (savingsRate * 1.1) + 
    (monthlySurplus > 2000 ? 15 : monthlySurplus > 1000 ? 8 : 0) +
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
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-bold text-brand-text">Monthly Net Income</span>
                  <span className="text-sm font-mono font-bold bg-brand-text/10 px-3 py-1 rounded-lg text-brand-text">${monthlyIncome.toLocaleString()} / mo</span>
                </div>
                <input 
                  type="range" 
                  min="1500" 
                  max="30000" 
                  step="250"
                  value={monthlyIncome} 
                  onChange={(e) => setMonthlyIncome(parseInt(e.target.value))}
                  className="w-full accent-emerald-500 cursor-pointer"
                />
                <div className="flex justify-between text-[10px] text-brand-muted font-mono">
                  <span>$1.5K</span>
                  <span>$15K</span>
                  <span>$30K</span>
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-bold text-brand-text">Identified Monthly Expenses</span>
                  <span className="text-sm font-mono font-bold bg-brand-text/10 px-3 py-1 rounded-lg text-brand-text">${monthlyExpenses.toLocaleString()} / mo</span>
                </div>
                <input 
                  type="range" 
                  min="1000" 
                  max="25000" 
                  step="250"
                  value={monthlyExpenses} 
                  onChange={(e) => setMonthlyExpenses(parseInt(e.target.value))}
                  className="w-full accent-emerald-500 cursor-pointer"
                />
                <div className="flex justify-between text-[10px] text-brand-muted font-mono">
                  <span>$1K</span>
                  <span>$13K</span>
                  <span>$25K</span>
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
                    <option value="hustle">Add Freelance Side Hustle (+$1,200/mo net)</option>
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
                  ${projectedTenYearWealth.toLocaleString()}<span className="text-sm text-brand-muted font-normal font-sans"> / 10 years</span>
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
                  <p className="text-lg font-bold text-brand-text">{savingsRate}% <span className="text-xs text-brand-muted font-normal font-sans">(Surplus: ${monthlySurplus.toLocaleString()}/mo)</span></p>
                </div>
              </div>

              {/* Insights based on parameters */}
              <div className="pt-2 p-3 bg-brand-card/50 border border-brand-border/60 rounded-xl">
                <p className="text-xs text-brand-muted leading-relaxed">
                  {whatIfScenario === 'envelope' && "💡 Envelope Budgeting: Reducing your recurring utility leaks and unnecessary subscriptions by 15% immediately ramps your discretionary safety reserve."}
                  {whatIfScenario === 'hustle' && "💡 Side Income Flow: Adding a modest contract channel of $1,200/mo dramatically accelerates your leverage multiplier."}
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
