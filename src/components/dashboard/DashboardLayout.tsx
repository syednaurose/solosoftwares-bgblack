import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  LayoutDashboard, 
  CreditCard, 
  ArrowLeftRight, 
  PieChart, 
  BarChart3, 
  Target, 
  CalendarClock, 
  TrendingUp, 
  StickyNote, 
  Settings,
  Menu,
  X,
  LogOut,
  Bell,
  Search,
  Plus,
  Wallet
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface SidebarItemProps {
  icon: React.ReactNode;
  label: string;
  path: string;
  active: boolean;
  onClick?: () => void;
}

const SidebarItem = ({ icon, label, path, active, onClick }: SidebarItemProps) => (
  <Link 
    to={path} 
    onClick={onClick}
    className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 group ${
      active 
        ? 'bg-brand-text text-brand-bg shadow-lg shadow-brand-text/20' 
        : 'text-brand-muted hover:bg-brand-text/5 hover:text-brand-text'
    }`}
  >
    <div className={`transition-transform duration-200 ${active ? 'scale-110' : 'group-hover:scale-110'}`}>
      {icon}
    </div>
    <span className="font-medium text-sm">{label}</span>
  </Link>
);

const DashboardLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { icon: <LayoutDashboard size={20} />, label: 'Dashboard', path: '/dashboard' },
    { icon: <ArrowLeftRight size={20} />, label: 'Transactions', path: '/dashboard/transactions' },
    { icon: <CreditCard size={20} />, label: 'Accounts', path: '/dashboard/accounts' },
    { icon: <PieChart size={20} />, label: 'Budgets', path: '/dashboard/budgets' },
    { icon: <BarChart3 size={20} />, label: 'Reports', path: '/dashboard/reports' },
    { icon: <Target size={20} />, label: 'Goals', path: '/dashboard/goals' },
    { icon: <CalendarClock size={20} />, label: 'Subscriptions', path: '/dashboard/subscriptions' },
    { icon: <Wallet size={20} />, label: 'Debt & Investments', path: '/dashboard/wealth' },
    { icon: <TrendingUp size={20} />, label: 'Forecasting', path: '/dashboard/forecast' },
    { icon: <StickyNote size={20} />, label: 'Notes', path: '/dashboard/notes' },
  ];

  return (
    <div className="min-h-screen bg-brand-bg text-brand-text overflow-hidden flex">
      {/* Sidebar - Desktop */}
      <aside className="hidden lg:flex flex-col w-72 border-r border-brand-border bg-brand-glass backdrop-blur-xl p-6 h-screen sticky top-0">
        <div className="flex items-center gap-3 px-2 mb-10">
          <div className="h-10 w-10 rounded-xl bg-brand-text flex items-center justify-center">
            <LayoutDashboard className="text-brand-bg" size={24} />
          </div>
          <div>
            <h2 className="font-display font-bold text-lg leading-tight">SoloAccount</h2>
            <p className="text-[10px] uppercase tracking-widest text-brand-muted font-bold">Enterprise</p>
          </div>
        </div>

        <nav className="flex-1 space-y-1 overflow-y-auto no-scrollbar pr-2">
          {navItems.map((item) => (
            <SidebarItem 
              key={item.path}
              {...item}
              active={location.pathname === item.path}
            />
          ))}
        </nav>

        <div className="mt-auto space-y-1 pt-6 border-t border-brand-border">
          <SidebarItem 
            icon={<Settings size={20} />} 
            label="Settings" 
            path="/dashboard/settings" 
            active={location.pathname === '/dashboard/settings'}
          />
          <button className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-red-500 hover:bg-red-500/10 transition-colors">
            <LogOut size={20} />
            <span className="font-medium text-sm">Sign Out</span>
          </button>
        </div>
      </aside>

      {/* Mobile Sidebar Overlay */}
      <AnimatePresence>
        {isSidebarOpen && (
          <>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsSidebarOpen(false)}
              className="lg:hidden fixed inset-0 bg-black/60 backdrop-blur-sm z-[60]"
            />
            <motion.aside 
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="lg:hidden fixed inset-y-0 left-0 w-80 bg-brand-bg border-r border-brand-border z-[70] p-6 flex flex-col"
            >
              <div className="flex items-center justify-between mb-10">
                <div className="flex items-center gap-3 italic">
                  <div className="h-10 w-10 rounded-xl bg-brand-text flex items-center justify-center">
                    <LayoutDashboard className="text-brand-bg" size={24} />
                  </div>
                  <h2 className="font-display font-bold text-lg">SoloAccount</h2>
                </div>
                <button onClick={() => setIsSidebarOpen(false)} className="p-2 rounded-lg hover:bg-brand-text/5">
                  <X />
                </button>
              </div>
              <nav className="flex-1 space-y-1 overflow-y-auto">
                {navItems.map((item) => (
                  <SidebarItem 
                    key={item.path}
                    {...item}
                    active={location.pathname === item.path}
                    onClick={() => setIsSidebarOpen(false)}
                  />
                ))}
              </nav>
              <div className="mt-auto pt-6 border-t border-brand-border">
                <SidebarItem 
                  icon={<Settings size={20} />} 
                  label="Settings" 
                  path="/dashboard/settings" 
                  active={location.pathname === '/dashboard/settings'}
                  onClick={() => setIsSidebarOpen(false)}
                />
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col h-screen overflow-hidden">
        {/* Header */}
        <header className="h-20 border-b border-brand-border flex items-center justify-between px-6 lg:px-10 bg-brand-glass backdrop-blur-xl">
          <div className="flex items-center gap-4">
            <button 
              onClick={() => setIsSidebarOpen(true)}
              className="lg:hidden p-2 -ml-2 rounded-lg hover:bg-brand-text/5"
            >
              <Menu size={24} />
            </button>
            <div className="hidden md:flex items-center bg-brand-text/5 rounded-full px-4 py-2 border border-brand-text/10 w-96">
              <Search size={18} className="text-brand-muted" />
              <input 
                type="text" 
                placeholder="Search transactions, accounts, notes..." 
                className="bg-transparent border-none focus:ring-0 text-sm w-full ml-3 placeholder:text-brand-muted"
              />
            </div>
          </div>

          <div className="flex items-center gap-3 lg:gap-6">
            <button className="hidden sm:flex items-center gap-2 bg-brand-text text-brand-bg rounded-full px-4 py-2 text-sm font-bold transition-transform hover:scale-105 active:scale-95 shadow-lg shadow-brand-text/10">
              <Plus size={18} />
              <span>Quick Add</span>
            </button>
            <div className="flex items-center gap-1 sm:gap-3">
              <button className="p-2.5 rounded-full hover:bg-brand-text/5 text-brand-muted hover:text-brand-text relative">
                <Bell size={20} />
                <span className="absolute top-2 right-2 h-2 w-2 bg-brand-text border-2 border-brand-bg rounded-full" />
              </button>
              <div className="h-10 w-10 rounded-full border-2 border-brand-text/20 p-0.5">
                <img 
                  src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix" 
                  alt="User" 
                  className="h-full w-full rounded-full object-cover bg-brand-text/10"
                />
              </div>
            </div>
          </div>
        </header>

        {/* Content Viewport */}
        <div className="flex-1 overflow-y-auto no-scrollbar scroll-smooth p-6 lg:p-10">
          <div className="max-w-7xl mx-auto w-full">
            {children}
          </div>
        </div>
      </main>
    </div>
  );
};

export default DashboardLayout;
