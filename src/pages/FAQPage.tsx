import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Search, ChevronDown, Check, HelpCircle, ArrowRight, MessageSquare } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

interface FAQPageProps {
  isDarkMode: boolean;
  setIsDarkMode: (val: boolean) => void;
  theme?: 'bright' | 'dark' | 'warm' | 'nordic';
  setTheme?: (theme: 'bright' | 'dark' | 'warm' | 'nordic') => void;
}

const faqCategories = [
  {
    id: "getting-started",
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
    id: "security",
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
    id: "accounts",
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
    id: "ai",
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
    id: "budgets",
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

export default function FAQPage({ isDarkMode, setIsDarkMode, theme, setTheme }: FAQPageProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [openItems, setOpenItems] = useState<{ [key: string]: boolean }>({});

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  const toggleItem = (catIndex: number, qIndex: number) => {
    const key = `${catIndex}-${qIndex}`;
    setOpenItems(prev => ({ ...prev, [key]: !prev[key] }));
  };

  // Filter logic
  const filteredCategories = faqCategories.map((category, catIndex) => {
    if (activeCategory !== 'all' && category.id !== activeCategory) {
      return null;
    }

    const filteredQuestions = category.questions.filter(q => 
      q.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      q.answer.toLowerCase().includes(searchQuery.toLowerCase())
    );

    if (filteredQuestions.length === 0) {
      return null;
    }

    return {
      ...category,
      originalIndex: catIndex,
      questions: filteredQuestions
    };
  }).filter((cat): cat is NonNullable<typeof cat> => cat !== null);

  return (
    <div className="min-h-screen bg-brand-bg text-brand-text flex flex-col font-sans transition-colors duration-300">
      <Navbar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} theme={theme} setTheme={setTheme} />

      {/* Hero Header Area */}
      <section className="relative overflow-hidden border-b border-brand-border bg-brand-bg pt-36 pb-20">
        <div className="pointer-events-none absolute top-1/2 left-1/2 h-[450px] w-[450px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-emerald-500/5 blur-[120px] pointer-events-none" />
        
        <div className="mx-auto max-w-7xl px-6 relative z-10 text-center">
          <div className="mx-auto max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-brand-border bg-brand-card/80 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-brand-muted">
              <HelpCircle className="h-3.5 w-3.5 text-emerald-500" />
              <span>Full Knowledge Base</span>
            </div>
            
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-brand-text">
              Frequently Asked <span className="text-brand-muted">Questions.</span>
            </h1>
            
            <p className="text-sm sm:text-base text-brand-muted leading-relaxed max-w-2xl mx-auto font-light">
              Clear, precise answers to architecting, deploying, and utilizing your SoloAccount sovereign enterprise personal financial dashboard.
            </p>

            {/* Robust Interactive Live Search Block */}
            <div className="max-w-xl mx-auto mt-10 relative">
              <div className="relative rounded-2xl border border-brand-border bg-brand-card/90 shadow-lg p-0.5 flex items-center group focus-within:border-brand-text/30 transition-all duration-300">
                <div className="pl-4 pr-2 text-brand-muted">
                  <Search className="h-5 w-5" />
                </div>
                <input
                  type="text"
                  placeholder="Query parameters, offline features, security protocols..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-transparent border-0 py-3.5 pr-4 text-sm text-brand-text placeholder-brand-muted focus:ring-0 focus:outline-none"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery('')}
                    className="mr-3 px-2 py-1 text-[10px] font-mono hover:text-brand-text transition-colors bg-brand-text/5 hover:bg-brand-text/10 rounded"
                  >
                    CLEAR
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Filter & Accordion Grid */}
      <section className="py-20 flex-grow bg-brand-bg/30">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Left Sidebar Category Filter Links */}
            <div className="lg:col-span-3 space-y-6 lg:sticky lg:top-32">
              <div className="space-y-1 text-left">
                <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-brand-muted">Filter Subjects</span>
                <h3 className="text-sm font-bold text-brand-text">Categories</h3>
              </div>

              <div className="flex flex-row flex-wrap lg:flex-col gap-1">
                <button
                  onClick={() => setActiveCategory('all')}
                  className={`flex items-center justify-between text-left px-4 py-2.5 rounded-xl text-xs font-semibold cursor-pointer transition-all w-fit lg:w-full ${
                    activeCategory === 'all'
                      ? 'bg-brand-text/10 text-brand-text border border-brand-border/80'
                      : 'hover:bg-brand-card text-brand-muted hover:text-brand-text border border-transparent'
                  }`}
                >
                  <span>All Categories</span>
                  <span className="text-[10px] bg-brand-text/5 px-2 py-0.5 rounded-lg hidden lg:inline font-mono">
                    {faqCategories.reduce((acc, cat) => acc + cat.questions.length, 0)}
                  </span>
                </button>

                {faqCategories.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => setActiveCategory(cat.id)}
                    className={`flex items-center justify-between text-left px-4 py-2.5 rounded-xl text-xs font-semibold cursor-pointer transition-all w-fit lg:w-full ${
                      activeCategory === cat.id
                        ? 'bg-brand-text/10 text-brand-text border border-brand-border/80'
                        : 'hover:bg-brand-card text-brand-muted hover:text-brand-text border border-transparent'
                    }`}
                  >
                    <span className="truncate">{cat.title.split(' ').slice(1).join(' ')}</span>
                    <span className="text-[10px] bg-brand-text/5 px-2 py-0.5 rounded-lg hidden lg:inline font-mono">
                      {cat.questions.length}
                    </span>
                  </button>
                ))}
              </div>

              {/* Secure system notice card */}
              <div className="p-5 rounded-2xl border border-brand-border bg-brand-card text-left space-y-3">
                <span className="text-[9px] font-mono font-bold bg-emerald-500/10 text-emerald-500 px-2 py-0.5 rounded-full uppercase">SOVEREIGN PROTOCOL</span>
                <p className="text-[11px] leading-relaxed text-brand-muted font-light">
                  SoloAccount uses local cryptography protocols and operates fully client-side on your hardware nodes. No transactions are visible to external observers.
                </p>
              </div>
            </div>

            {/* Accordion Questions Container */}
            <div className="lg:col-span-9 space-y-12">
              {filteredCategories.length > 0 ? (
                filteredCategories.map((category) => (
                  <div key={category.id} className="space-y-6">
                    <div className="flex items-center gap-3 border-b border-brand-border/50 pb-3">
                      <h3 className="text-sm font-semibold text-brand-text font-display uppercase tracking-wider">
                        {category.title}
                      </h3>
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                    </div>

                    <div className="grid grid-cols-1 gap-4">
                      {category.questions.map((faq, index) => {
                        const itemKey = `${category.originalIndex}-${index}`;
                        const isOpen = !!openItems[itemKey];

                        return (
                          <div
                            key={index}
                            className={`rounded-2xl border transition-all duration-300 text-left overflow-hidden ${
                              isOpen 
                                ? 'bg-brand-card border-brand-text/10 shadow-sm' 
                                : 'bg-brand-card/40 border-brand-border hover:border-brand-text/15'
                            }`}
                          >
                            <button
                              onClick={() => toggleItem(category.originalIndex, index)}
                              className="w-full flex items-center justify-between p-6 sm:p-8 text-left focus:outline-none cursor-pointer"
                            >
                              <h4 className="text-sm sm:text-base font-bold text-brand-text pr-4 leading-snug">
                                {faq.question}
                              </h4>
                              <div className={`h-8 w-8 rounded-full border border-brand-border flex items-center justify-center shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180 bg-brand-text/5' : ''}`}>
                                <ChevronDown className="h-4 w-4 text-brand-muted" />
                              </div>
                            </button>

                            <AnimatePresence initial={false}>
                              {isOpen && (
                                <motion.div
                                  initial={{ height: 0, opacity: 0 }}
                                  animate={{ height: "auto", opacity: 1 }}
                                  exit={{ height: 0, opacity: 0 }}
                                  transition={{ duration: 0.25, ease: "easeInOut" }}
                                >
                                  <div className="px-6 pb-6 sm:px-8 sm:pb-8 pt-0 border-t border-brand-border/30">
                                    <p className="text-xs sm:text-sm leading-relaxed text-brand-muted pt-4 font-light">
                                      {faq.answer}
                                    </p>
                                  </div>
                                </motion.div>
                              )}
                            </AnimatePresence>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                ))
              ) : (
                <div className="text-center py-20 rounded-3xl border border-dashed border-brand-border bg-brand-card/30 space-y-4">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-brand-text/5 text-brand-muted">
                    <Search className="h-6 w-6" />
                  </div>
                  <h3 className="text-base font-bold text-brand-text">No matches found</h3>
                  <p className="text-xs text-brand-muted max-w-sm mx-auto font-light leading-relaxed">
                    We couldn't find any questions matching "{searchQuery}". Try searching for broad categories like "offline", "security", or "AI".
                  </p>
                  <button
                    onClick={() => {
                      setSearchQuery('');
                      setActiveCategory('all');
                    }}
                    className="text-xs font-semibold text-emerald-500 hover:text-emerald-600 underline font-mono cursor-pointer"
                  >
                    Reset query parameters
                  </button>
                </div>
              )}
            </div>

          </div>
        </div>
      </section>

      {/* Support CTA Band */}
      <section className="py-20 bg-brand-card/60 border-t border-b border-brand-border">
        <div className="mx-auto max-w-4xl px-6 text-center space-y-8">
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-500">
            <MessageSquare className="h-6 w-6" />
          </div>
          <div className="space-y-2">
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-brand-text">Still have questions?</h2>
            <p className="text-xs sm:text-sm text-brand-muted max-w-md mx-auto font-light">
              Get in touch with our system engineers directly. We will diagnose any setup difficulties within 12 standard business hours.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <a
              href="mailto:support@solosoftwares.com"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-brand-text px-6 py-3 text-xs font-bold text-brand-bg hover:opacity-90 transition-opacity cursor-pointer"
            >
              Contact Engineering
              <ArrowRight className="h-3.5 w-3.5" />
            </a>
            <a
              href="https://wa.me/919994120250"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl border border-brand-border bg-brand-card px-6 py-3 text-xs font-bold text-brand-text hover:bg-brand-card transition-all cursor-pointer"
            >
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
