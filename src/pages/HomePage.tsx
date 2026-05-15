import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, ChevronRight, Globe, Cpu, BarChart3, Users2, Code2, Settings, Check, Shield, Zap, Layers } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

interface HomePageProps {
  isDarkMode: boolean;
  setIsDarkMode: (val: boolean) => void;
}

export default function HomePage({ isDarkMode, setIsDarkMode }: HomePageProps) {
  const [activeSection, setActiveSection] = useState('hero');

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
      quote: "SoloAccount transformed our multi-entity reporting from weeks to seconds. The level of precision is unmatched in the enterprise space.",
      author: "Sarah Chen",
      role: "CFO at Nexus Global",
      avatar: "SC"
    },
    {
      quote: "The AI-driven anomaly detection saved us from a major ledger discrepancy before it even hit our month-end close. Truly proactive software.",
      author: "Marcus Thorne",
      role: "Head of Finance at Voltz",
      avatar: "MT"
    },
    {
      quote: "A developer-first accounting tool that actually speaks our language. The GraphQL API and webhooks integrated into our stack in days.",
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
      title: "The Future of AI in Enterprise Accounting",
      excerpt: "How generative models are reshaping real-time ledger reconciliation and predictive audits.",
      date: "May 12, 2026",
      category: "Technology",
      featured: true
    },
    {
      title: "Consolidating Global Operations in Minutes",
      excerpt: "A case study on multi-entity financial management across 40+ countries.",
      date: "May 10, 2026",
      category: "Case Study"
    },
    {
      title: "Navigating the New Global Tax Landscape",
      excerpt: "Expert insights into upcoming digital service tax changes and their impact on SaaS.",
      date: "May 05, 2026",
      category: "Compliance"
    }
  ];

  const faqCategories = [
    {
      title: "🏠 Getting Started & Interface",
      questions: [
        {
          question: "What languages does SoloAccount support, and does it work with right-to-left layout?",
          answer: "The app fully supports English, Arabic, and Tamil. It includes native RTL (Right-to-Left) optimization for Arabic, along with localized number and currency formatting [1]."
        },
        {
          question: "Can I use SoloAccount on my smartphone like a normal app?",
          answer: "Yes. SoloAccount is built as a Progressive Web App (PWA) [1]. You can install it directly onto your mobile home screen or desktop, and it supports mobile gestures like pull-to-refresh [1]."
        },
        {
          question: "What is the fastest way to navigate the app without clicking through menus?",
          answer: "You can use the built-in Command Palette (Ctrl + K or Cmd + K) to instantly search, jump between pages, and trigger quick actions [1]."
        }
      ]
    },
    {
      title: "🔐 Security & Data Privacy",
      questions: [
        {
          question: "Where is my financial data stored, and can anyone else see it?",
          answer: "SoloAccount is a privacy-first application [1]. Your data is encrypted and stored locally on your device using IndexedDB [1]. Your sensitive financial information is never uploaded to public servers without your permission [1]."
        },
        {
          question: "Does SoloAccount support biometric login?",
          answer: "Yes. You can secure your app using your device's native fingerprint scanner or facial recognition (Face ID / Touch ID) [1]."
        },
        {
          question: "Can I use the application when I do not have an internet connection?",
          answer: "Yes. The app features full offline functionality [1]. You can log transactions, check budgets, and view reports offline. Local data will update currency rates once connection returns [1]."
        },
        {
          question: "How do I back up my data or move it to a new device?",
          answer: "Go to Settings > Data Management to manually export your data payload [1]. You can import this file on any new device to restore your account history [1]. Optional cloud synchronization via Supabase is also supported [1]."
        }
      ]
    },
    {
      title: "💸 Accounts & Transactions",
      questions: [
        {
          question: "What types of accounts can I track inside the app?",
          answer: "You can create and manage multiple accounts across four distinct categories: Cash, Bank, Credit Card, and E-wallet [1]."
        },
        {
          question: "Can I manage accounts using different world currencies?",
          answer: "Yes. SoloAccount features multi-currency support [1]. The app captures historical exchange rates using live APIs during transaction entry to ensure your total net worth remains accurate [1]."
        },
        {
          question: "Can I hide a specific savings or business account from my main dashboard metrics?",
          answer: "Yes. In your Account Settings, toggle \"Exclude from Dashboard Totals\" [1]. The account balance will update individually but will not distort your daily spending overview [1]."
        },
        {
          question: "I made a mistake while entering a transaction. Can I reverse it?",
          answer: "Yes. The application features built-in undo and redo functionality [1] for instant data corrections."
        }
      ]
    },
    {
      title: "🤖 AI Features & Forecasting",
      questions: [
        {
          question: "How does the AI integration help me manage my money?",
          answer: "The embedded AI engine automatically scans transaction descriptions to suggest the correct category, isolates recurring payment anomalies to detect forgotten subscriptions, and provides personalized spending insights on your dashboard [1]."
        },
        {
          question: "What is the Forecasting feature and how does it predict my future cash flow?",
          answer: "The forecasting tool reads your historical income and spending patterns to build future cash flow projections [1]. You can also use Scenario Planning to see how a major purchase or salary change affects your long-term financial runway [1]."
        }
      ]
    },
    {
      title: "📊 Budgets, Goals, & Debt",
      questions: [
        {
          question: "Will SoloAccount alert me if I am spending too much money?",
          answer: "Yes. You can set customized, category-specific monthly budget limits [1]. The app monitors your real-time spending and sends notification alerts as you approach your limits [1]."
        },
        {
          question: "How does the Debt Management feature calculate what I owe?",
          answer: "It tracks your active loans or credit cards, creates payment schedules, factors in interest calculations, and visualizes your debt reduction progress over a structured timeline [1]."
        },
        {
          question: "Can I use Markdown syntax in the built-in Notes module?",
          answer: "Yes. The notes feature natively parses Markdown [1]. You can create rich text lists, tables, and bold headers to brainstorm financial plans or log shopping lists, with global search across all text entries [1]."
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
    <div className="min-h-screen bg-brand-bg font-sans selection:bg-brand-text/20">
      <Navbar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} activeSection={activeSection} />

      <main className="relative pt-32 pb-20">
        {/* Background Gradients */}
        <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute top-0 left-1/2 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-brand-text/5 blur-[120px]" />
          <div className="absolute top-[200px] -left-20 h-[400px] w-[400px] rounded-full bg-brand-text/5 blur-[100px]" />
          <div className="absolute top-[300px] -right-20 h-[400px] w-[400px] rounded-full bg-brand-text/5 blur-[100px]" />
        </div>

        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col items-center text-center">
            {/* Badge */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-8 flex items-center gap-2 rounded-full border border-brand-border bg-brand-card px-3 py-1 text-xs font-semibold tracking-wide uppercase text-brand-muted"
            >
              <Zap className="h-3 w-3 text-brand-text" />
              <span>Introducing SoloAccount v2.0</span>
              <ChevronRight className="h-3 w-3" />
            </motion.div>

            {/* Headline */}
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="max-w-4xl font-display text-5xl font-bold tracking-tight text-brand-text md:text-7xl lg:text-8xl"
            >
              Precision accounting for the <span className="bg-gradient-to-b from-brand-text to-brand-text/40 bg-clip-text text-transparent">modern enterprise.</span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="mt-8 max-w-2xl text-lg text-brand-muted md:text-xl"
            >
              SoloAccount empowers forward-thinking teams with sophisticated real-time insights, 
              automated reconciliation, and seamless multi-entity management.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-12 flex flex-col items-center gap-6"
            >
              <div className="flex flex-col gap-4 sm:flex-row">
                <a 
                  href="https://soloaccount.solosoftwares.com/" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-2 rounded-full bg-brand-text px-8 py-4 text-base font-bold text-brand-bg transition-all hover:bg-brand-text/90 hover:shadow-[0_0_40px_rgba(255,255,255,0.2)] font-display"
                >
                  SoloAccount
                  <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                </a>
                <a 
                  href="https://soloaccount.solosoftwares.com/" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-2 rounded-full border border-brand-border bg-brand-card px-8 py-4 text-base font-bold text-brand-text transition-all hover:bg-brand-text/10"
                >
                  Start your journey
                  <ChevronRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                </a>
                <button className="rounded-full border border-transparent px-8 py-4 text-base font-medium text-brand-muted transition-all hover:text-brand-text">
                  Book a demo
                </button>
              </div>
            </motion.div>
          </div>

          {/* Abstract Visual / Product Preview */}
          <div className="mt-24 grid grid-cols-1 gap-8 lg:grid-cols-2">
            <motion.div 
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="aspect-[16/9] w-full overflow-hidden rounded-2xl border border-brand-border bg-gradient-to-br from-brand-text/10 to-transparent p-1 shadow-2xl"
            >
              <div className="h-full w-full rounded-[calc(1rem-4px)] bg-brand-bg overflow-hidden flex items-center justify-center p-4">
                <img 
                  src="/app_login.png" 
                  alt="Secure Portal Preview" 
                  className="max-h-full w-auto object-contain opacity-90 transition-opacity hover:opacity-100"
                  referrerPolicy="no-referrer"
                />
              </div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.6 }}
              className="aspect-[16/9] w-full overflow-hidden rounded-2xl border border-brand-border bg-gradient-to-br from-brand-text/10 to-transparent p-1 shadow-2xl"
            >
              <div className="h-full w-full rounded-[calc(1rem-4px)] bg-brand-bg overflow-hidden flex items-center justify-center p-4">
                <img 
                  src="/dashboard.png" 
                  alt="SoloAccount Dashboard Preview" 
                  className="max-h-full w-auto object-contain opacity-90 transition-opacity hover:opacity-100"
                  referrerPolicy="no-referrer"
                />
              </div>
            </motion.div>
          </div>

          {/* Trust Logotypes / Features */}
          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="mt-32 grid grid-cols-1 gap-12 border-t border-brand-border pt-20 md:grid-cols-3"
          >
            {[
              { icon: <Shield className="h-6 w-6 text-brand-text" />, title: "Enterprise Grade", desc: "Military-grade encryption and SOC2 compliance out of the box." },
              { icon: <Zap className="h-6 w-6 text-brand-text" />, title: "Real-time Sync", desc: "Zero-latency data processing for instant financial reconciliation." },
              { icon: <Layers className="h-6 w-6 text-brand-text" />, title: "Multi-Entity", desc: "Consolidate global operations across hundreds of subsidiaries." }
            ].map((f, i) => (
              <motion.div key={i} variants={fadeInUp} className="flex flex-col gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-card border border-brand-border shadow-inner">
                  {f.icon}
                </div>
                <h3 className="font-display text-xl font-bold text-brand-text">{f.title}</h3>
                <p className="text-brand-muted">{f.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </main>

      {/* Features Detail Section */}
      <section id="features" className="relative bg-brand-bg py-32 overflow-hidden">
        {/* Subtle background light */}
        <div className="pointer-events-none absolute top-1/2 left-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-text/[0.02] blur-[120px]" />
        
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-20">
            <motion.h2 
              {...fadeInUp}
              className="font-display text-3xl font-bold tracking-tight text-brand-text md:text-5xl"
            >
              Enterprise capabilities.<br />
              <span className="text-brand-muted">Built for scale.</span>
            </motion.h2>
          </div>

          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="grid grid-cols-1 gap-px bg-brand-border md:grid-cols-2 lg:grid-cols-3"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="group relative bg-brand-bg p-10 transition-colors hover:bg-brand-text/[0.02]"
              >
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-brand-card border border-brand-border transition-transform group-hover:scale-110">
                  <span className="text-brand-text">{feature.icon}</span>
                </div>
                <h3 className="mb-3 font-display text-xl font-bold text-brand-text transition-colors group-hover:text-brand-text">
                  {feature.title}
                </h3>
                <p className="text-base leading-relaxed text-brand-muted">
                  {feature.description}
                </p>
                {/* Visual hover indicator */}
                <div className="absolute top-0 left-0 h-px w-0 bg-brand-text/20 transition-all duration-500 group-hover:w-full" />
                <div className="absolute top-0 left-0 h-0 w-px bg-brand-text/20 transition-all duration-500 group-hover:h-full" />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="bg-brand-bg py-32 border-t border-brand-border">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-20 text-center">
            <motion.h2 
              {...fadeInUp}
              className="font-display text-3xl font-bold tracking-tight text-brand-text md:text-5xl"
            >
              Trusted by industry <span className="text-brand-muted">titans.</span>
            </motion.h2>
          </div>

          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="grid grid-cols-1 gap-8 md:grid-cols-3"
          >
            {testimonials.map((t, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="flex flex-col justify-between rounded-2xl border border-brand-border bg-gradient-to-b from-brand-text/[0.03] to-transparent p-8 shadow-sm"
              >
                <div>
                  <div className="mb-8 flex h-10 w-10 items-center justify-center rounded-full bg-brand-text/10 text-xs font-bold text-brand-text">
                    {t.avatar}
                  </div>
                  <p className="text-lg italic leading-relaxed text-brand-text/70">
                    "{t.quote}"
                  </p>
                </div>
                <div className="mt-10 pt-6 border-t border-brand-border">
                  <h4 className="font-bold text-brand-text">{t.author}</h4>
                  <p className="text-sm text-brand-muted">{t.role}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="bg-brand-bg py-32 border-t border-brand-border relative overflow-hidden">
        {/* Background glow */}
        <div className="pointer-events-none absolute bottom-0 right-0 h-[500px] w-[500px] rounded-full bg-brand-text/[0.03] blur-[150px]" />
        
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-20 text-center">
            <motion.h2 
              {...fadeInUp}
              className="font-display text-3xl font-bold tracking-tight text-brand-text md:text-5xl"
            >
              Enterprise power. <span className="text-brand-muted">Openly accessible.</span>
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="mt-4 text-brand-muted"
            >
              SoloAccount is currently free to use for all businesses.
            </motion.p>
          </div>
          
          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="grid grid-cols-1 gap-8 md:grid-cols-3"
          >
            {plans.map((plan, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className={`relative flex flex-col rounded-3xl border ${plan.popular ? 'border-brand-text/20 bg-brand-text/[0.05]' : 'border-brand-border bg-brand-card'} p-8`}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-brand-text px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-brand-bg">
                    Most Popular
                  </div>
                )}
                <div className="mb-8">
                  <h3 className="font-display text-xl font-bold text-brand-text">{plan.name}</h3>
                  <p className="mt-2 text-sm text-brand-muted">{plan.description}</p>
                </div>
                <div className="mb-8 flex items-baseline gap-1">
                  <span className="text-4xl font-bold text-brand-text">{plan.price}</span>
                  <span className="text-sm text-brand-muted">/month</span>
                </div>
                <ul className="mb-8 space-y-4 flex-1">
                  {plan.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-center gap-3 text-sm text-brand-text/70">
                      <Check className="h-4 w-4 text-brand-text" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className={`w-full rounded-full py-3 text-sm font-bold transition-all ${plan.popular ? 'bg-brand-text text-brand-bg hover:bg-brand-text/90' : 'border border-brand-border text-brand-text hover:bg-brand-text/5'}`}>
                  Get Started
                </button>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Blog Section */}
      <section id="blog" className="bg-brand-bg py-32 border-t border-brand-border relative">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-20 flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div>
              <motion.h2 
                {...fadeInUp}
                className="font-display text-3xl font-bold tracking-tight text-brand-text md:text-5xl"
              >
                Journal. <span className="text-brand-muted">Insights for leaders.</span>
              </motion.h2>
              <motion.p 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="mt-4 text-brand-muted max-w-xl"
              >
                Deep dives into the intersection of technology, finance, and global commerce.
              </motion.p>
            </div>
            <motion.button 
              {...fadeInUp}
              className="group flex items-center gap-2 text-sm font-bold text-brand-text"
            >
              View all articles
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </motion.button>
          </div>

          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            {/* Featured Post */}
            {blogPosts.filter(p => p.featured).map((post, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="group relative flex flex-col justify-end overflow-hidden rounded-3xl border border-brand-border bg-brand-card aspect-[4/3] md:aspect-auto md:h-[600px] p-8 md:p-12 shadow-sm transition-all hover:border-brand-text/10"
              >
                <div className="absolute inset-0 bg-gradient-to-t from-brand-bg via-brand-bg/20 to-transparent z-10" />
                <div className="relative z-20">
                  <span className="inline-block rounded-full bg-brand-text px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-brand-bg mb-6">
                    {post.category}
                  </span>
                  <h3 className="font-display text-2xl font-bold text-brand-text md:text-4xl mb-4 group-hover:text-brand-text/90 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-brand-muted text-lg mb-8 max-w-lg line-clamp-2">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center gap-4">
                    <span className="text-sm font-bold text-brand-text">{post.date}</span>
                    <div className="h-1 w-1 rounded-full bg-brand-muted" />
                    <button className="text-sm font-bold text-brand-text hover:underline underline-offset-4 transition-all">Read post</button>
                  </div>
                </div>
              </motion.div>
            ))}

            {/* Recent Posts List */}
            <div className="space-y-8">
              {blogPosts.filter(p => !p.featured).map((post, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="group flex flex-col gap-6 rounded-2xl border border-brand-border bg-brand-card p-6 transition-all hover:bg-brand-text/[0.04]"
                >
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="flex-1">
                      <span className="text-xs font-bold uppercase tracking-widest text-brand-muted mb-3 block">
                        {post.category} — {post.date}
                      </span>
                      <h3 className="font-display text-xl font-bold text-brand-text mb-3 group-hover:text-brand-text/80 transition-colors">
                        {post.title}
                      </h3>
                      <p className="text-sm text-brand-muted line-clamp-2 mb-4">
                        {post.excerpt}
                      </p>
                      <button className="text-xs font-bold text-brand-text flex items-center gap-1 group-hover:gap-2 transition-all">
                        Read more <ArrowRight className="h-3 w-3" />
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="bg-brand-bg py-32 border-t border-brand-border relative">
        <div className="mx-auto max-w-4xl px-6">
          <div className="mb-20 text-center">
            <motion.h2 
              {...fadeInUp}
              className="font-display text-3xl font-bold tracking-tight text-brand-text md:text-5xl"
            >
              Common <span className="text-brand-muted">questions.</span>
            </motion.h2>
          </div>

          <div className="space-y-20">
            {faqCategories.map((category, catIndex) => (
              <motion.div 
                key={catIndex}
                variants={staggerContainer}
                initial="initial"
                whileInView="whileInView"
                viewport={{ once: true }}
                className="space-y-8"
              >
                <motion.h3 
                  variants={fadeInUp}
                  className="text-xl font-display font-bold text-brand-muted uppercase tracking-widest border-b border-brand-border pb-4"
                >
                  {category.title}
                </motion.h3>
                <div className="grid grid-cols-1 gap-6">
                  {category.questions.map((faq, index) => (
                    <motion.div
                      key={index}
                      variants={fadeInUp}
                      className="group rounded-2xl border border-brand-border bg-brand-card p-8 transition-colors hover:border-brand-text/10"
                    >
                      <h4 className="text-lg font-bold text-brand-text mb-4 group-hover:text-brand-text/90">
                        {faq.question}
                      </h4>
                      <p className="text-base leading-relaxed text-brand-muted">
                        {faq.answer}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-brand-bg py-32 border-t border-brand-border relative overflow-hidden">
        {/* Decorative elements */}
        <div className="pointer-events-none absolute top-0 right-0 h-96 w-96 translate-x-1/2 -underline-y-1/2 rounded-full bg-brand-text/[0.02] blur-[100px]" />
        
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 gap-20 lg:grid-cols-2">
            <motion.div {...fadeInUp}>
              <h2 className="font-display text-4xl font-bold tracking-tight text-brand-text md:text-6xl">
                Let's discuss your <span className="text-brand-muted">future.</span>
              </h2>
              <p className="mt-8 max-w-md text-lg text-brand-muted">
                Our team of enterprise specialists is ready to help you architect your next-generation financial infrastructure.
              </p>
              
              <div className="mt-12 space-y-6">
                <div className="flex items-center gap-4 text-brand-text/70">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-card border border-brand-border">
                    <Globe className="h-5 w-5 text-brand-muted" />
                  </div>
                  <span>Global Headquarters, Kadayanallur - India</span>
                </div>
                <div className="flex items-center gap-4 text-brand-text/70">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-card border border-brand-border">
                    <Shield className="h-5 w-5 text-brand-muted" />
                  </div>
                  <span>syednaurose@gmail.com</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true }}
              className="rounded-3xl border border-brand-border bg-brand-card p-8 md:p-12"
            >
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-brand-muted">Full Name</label>
                    <input 
                      type="text" 
                      placeholder="John Doe"
                      className="w-full rounded-xl border border-brand-border bg-brand-card px-4 py-3 text-brand-text placeholder:text-brand-text/20 focus:border-brand-text/30 focus:outline-none focus:ring-1 focus:ring-brand-text/30 transition-all"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-brand-muted">Email Address</label>
                    <input 
                      type="email" 
                      placeholder="john@company.com"
                      className="w-full rounded-xl border border-brand-border bg-brand-card px-4 py-3 text-brand-text placeholder:text-brand-text/20 focus:border-brand-text/30 focus:outline-none focus:ring-1 focus:ring-brand-text/30 transition-all"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-brand-muted">Message</label>
                  <textarea 
                    rows={4}
                    placeholder="How can we help your enterprise?"
                    className="w-full rounded-xl border border-brand-border bg-brand-card px-4 py-3 text-brand-text placeholder:text-brand-text/20 focus:border-brand-text/30 focus:outline-none focus:ring-1 focus:ring-brand-text/30 transition-all resize-none"
                  />
                </div>
                <button className="group w-full flex items-center justify-center gap-2 rounded-full bg-brand-text py-4 text-base font-bold text-brand-bg transition-all hover:bg-brand-text/90">
                  Send Message
                  <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
