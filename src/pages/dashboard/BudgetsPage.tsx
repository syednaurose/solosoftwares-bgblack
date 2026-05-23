import React, { useState } from 'react';
import { 
  Plus, 
  PieChart, 
  TrendingUp, 
  AlertTriangle, 
  CheckCircle2, 
  ArrowUpRight, 
  ArrowDownRight, 
  Coins, 
  Building, 
  Gamepad, 
  HeartHandshake, 
  Plane, 
  Users, 
  Laptop,
  PiggyBank,
  MoreVertical,
  Calendar,
  Filter,
  Check,
  Edit2,
  Trash2
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface BudgetCategory {
  id: string;
  name: string;
  allocated: number;
  spent: number;
  icon: React.ElementType;
  color: string;
  progressColor: string;
  period: 'monthly' | 'yearly';
  recentExpenses: Array<{ id: string; name: string; amount: number; date: string }>;
}

const initialCategories: BudgetCategory[] = [
  { 
    id: '1', 
    name: 'Cloud & Infrastructure', 
    allocated: 15200, 
    spent: 12430, 
    icon: Laptop, 
    color: 'bg-blue-500/10 text-blue-500',
    progressColor: 'bg-blue-500',
    period: 'monthly',
    recentExpenses: [
      { id: '1a', name: 'Google Cloud Platform', amount: 8420, date: 'May 20, 2026' },
      { id: '1b', name: 'Vercel Deployment', amount: 510, date: 'May 18, 2026' },
      { id: '1c', name: 'Database Replication', amount: 3500, date: 'May 15, 2026' },
    ]
  },
  { 
    id: '2', 
    name: 'Marketing & Ad Campaigns', 
    allocated: 8000, 
    spent: 7850, 
    icon: TrendingUp, 
    color: 'bg-yellow-500/10 text-yellow-500',
    progressColor: 'bg-yellow-500',
    period: 'monthly',
    recentExpenses: [
      { id: '2a', name: 'Google Search Ads', amount: 5400, date: 'May 22, 2026' },
      { id: '2b', name: 'UI/UX Brand Refresh', amount: 2450, date: 'May 12, 2026' },
    ]
  },
  { 
    id: '3', 
    name: 'Compensation & Payroll', 
    allocated: 75000, 
    spent: 75000, 
    icon: Users, 
    color: 'bg-green-500/10 text-green-500',
    progressColor: 'bg-green-500',
    period: 'monthly',
    recentExpenses: [
      { id: '3a', name: 'Contractor Payroll', amount: 35000, date: 'May 15, 2026' },
      { id: '3b', name: 'W2 Base Salary Run', amount: 40000, date: 'May 15, 2026' },
    ]
  },
  { 
    id: '4', 
    name: 'Office & Facilities', 
    allocated: 5000, 
    spent: 5620, 
    icon: Building, 
    color: 'bg-red-500/10 text-red-500',
    progressColor: 'bg-red-500',
    period: 'monthly',
    recentExpenses: [
      { id: '4a', name: 'WeWork Hot desks', amount: 4800, date: 'May 01, 2026' },
      { id: '4b', name: 'Fiber Upgrade', amount: 820, date: 'May 10, 2026' },
    ]
  },
  { 
    id: '5', 
    name: 'Travel & Corporate Offsites', 
    allocated: 12000, 
    spent: 3400, 
    icon: Plane, 
    color: 'bg-indigo-500/10 text-indigo-500',
    progressColor: 'bg-indigo-500',
    period: 'monthly',
    recentExpenses: [
      { id: '5a', name: 'SFO Board Flight bookings', amount: 2100, date: 'May 05, 2026' },
      { id: '5b', name: 'Executive Dinners', amount: 1300, date: 'May 07, 2026' },
    ]
  },
  { 
    id: '6', 
    name: 'SaaS Licences', 
    allocated: 4000, 
    spent: 1250, 
    icon: Coins, 
    color: 'bg-emerald-500/10 text-emerald-500',
    progressColor: 'bg-emerald-500',
    period: 'monthly',
    recentExpenses: [
      { id: '6a', name: 'Figma Organization plan', amount: 850, date: 'May 14, 2026' },
      { id: '6b', name: 'Slack Enterprise sync', amount: 400, date: 'May 11, 2026' },
    ]
  }
];

const availableIcons = [
  { icon: Laptop, label: 'Cloud' },
  { icon: TrendingUp, label: 'Growth' },
  { icon: Users, label: 'Payroll' },
  { icon: Building, label: 'Office' },
  { icon: Plane, label: 'Travel' },
  { icon: Coins, label: 'Finance' },
  { icon: Gamepad, label: 'Gaming' },
  { icon: HeartHandshake, label: 'Perks' },
];

export default function BudgetsPage() {
  const [categories, setCategories] = useState<BudgetCategory[]>(initialCategories);
  const [filterPeriod, setFilterPeriod] = useState<'all' | 'monthly' | 'yearly'>('all');
  const [activeCategory, setActiveCategory] = useState<BudgetCategory | null>(initialCategories[0]);
  
  // Custom states for new budget wizard
  const [showAddModal, setShowAddModal] = useState(false);
  const [newName, setNewName] = useState('');
  const [newAllocated, setNewAllocated] = useState('');
  const [newPeriod, setNewPeriod] = useState<'monthly' | 'yearly'>('monthly');
  const [selectedIconIndex, setSelectedIconIndex] = useState(0);

  // Quick allocation adjustment
  const [showEditFundsModal, setShowEditFundsModal] = useState(false);
  const [fundsToAllocate, setFundsToAllocate] = useState('');

  // Totals calculations
  const totalAllocated = categories.reduce((sum, c) => sum + c.allocated, 0);
  const totalSpent = categories.reduce((sum, c) => sum + c.spent, 0);
  const percentageSpent = Math.min((totalSpent / totalAllocated) * 100, 100);
  const totalRemaining = totalAllocated - totalSpent;

  // Alerts for overspent categories
  const overspentCategories = categories.filter(c => c.spent > c.allocated);

  const handleCreateCategory = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newName || !newAllocated) return;

    const val = parseFloat(newAllocated);
    if (isNaN(val) || val <= 0) return;

    const randomColors = [
      { color: 'bg-blue-500/10 text-blue-500', progress: 'bg-blue-500' },
      { color: 'bg-emerald-500/10 text-emerald-500', progress: 'bg-emerald-500' },
      { color: 'bg-indigo-500/10 text-indigo-500', progress: 'bg-indigo-500' },
      { color: 'bg-purple-500/10 text-purple-500', progress: 'bg-purple-500' },
      { color: 'bg-pink-500/10 text-pink-500', progress: 'bg-pink-500' },
    ];
    const colorPick = randomColors[Math.floor(Math.random() * randomColors.length)];

    const newCat: BudgetCategory = {
      id: Date.now().toString(),
      name: newName,
      allocated: val,
      spent: 0,
      icon: availableIcons[selectedIconIndex].icon,
      color: colorPick.color,
      progressColor: colorPick.progress,
      period: newPeriod,
      recentExpenses: []
    };

    setCategories([...categories, newCat]);
    setActiveCategory(newCat);
    
    // reset form
    setNewName('');
    setNewAllocated('');
    setNewPeriod('monthly');
    setSelectedIconIndex(0);
    setShowAddModal(false);
  };

  const handleAllocateMore = (e: React.FormEvent) => {
    e.preventDefault();
    if (!activeCategory || !fundsToAllocate) return;

    const extra = parseFloat(fundsToAllocate);
    if (isNaN(extra)) return;

    setCategories(categories.map(c => {
      if (c.id === activeCategory.id) {
        const update = { ...c, allocated: Math.max(0, c.allocated + extra) };
        setActiveCategory(update);
        return update;
      }
      return c;
    }));

    setFundsToAllocate('');
    setShowEditFundsModal(false);
  };

  const handleSimulateExpense = (amount: number, name: string) => {
    if (!activeCategory) return;
    
    setCategories(categories.map(c => {
      if (c.id === activeCategory.id) {
        const updatedExpenses = [
          { id: Date.now().toString(), name, amount, date: 'Today' },
          ...c.recentExpenses
        ];
        const update = { 
          ...c, 
          spent: c.spent + amount,
          recentExpenses: updatedExpenses
        };
        setActiveCategory(update);
        return update;
      }
      return c;
    }));
  };

  const handleDeleteCategory = (id: string) => {
    const nextArr = categories.filter(c => c.id !== id);
    setCategories(nextArr);
    if (activeCategory?.id === id) {
      setActiveCategory(nextArr[0] || null);
    }
  };

  const filteredCategories = categories.filter(c => {
    if (filterPeriod === 'all') return true;
    return c.period === filterPeriod;
  });

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700 pb-20">
      
      {/* Upper header segment and button */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <h1 className="text-3xl font-display font-bold text-brand-text">Corporate Budgets</h1>
          <p className="text-brand-muted mt-1">Real-time cost center allocation, target safety monitoring and overages.</p>
        </div>
        
        <div className="flex flex-wrap items-center gap-3">
          <div className="flex border border-brand-border bg-brand-text/5 rounded-xl p-0.5">
            <button 
              onClick={() => setFilterPeriod('all')}
              className={cn("px-3 py-1.5 text-xs font-bold rounded-lg transition-all", filterPeriod === 'all' ? "bg-brand-text text-brand-bg shadow-sm" : "text-brand-muted hover:text-brand-text")}
            >
              All
            </button>
            <button 
              onClick={() => setFilterPeriod('monthly')}
              className={cn("px-3 py-1.5 text-xs font-bold rounded-lg transition-all", filterPeriod === 'monthly' ? "bg-brand-text text-brand-bg shadow-sm" : "text-brand-muted hover:text-brand-text")}
            >
              Monthly
            </button>
            <button 
              onClick={() => setFilterPeriod('yearly')}
              className={cn("px-3 py-1.5 text-xs font-bold rounded-lg transition-all", filterPeriod === 'yearly' ? "bg-brand-text text-brand-bg shadow-sm" : "text-brand-muted hover:text-brand-text")}
            >
              Yearly
            </button>
          </div>

          <button 
            onClick={() => setShowAddModal(true)}
            className="flex items-center gap-2 bg-brand-text text-brand-bg px-5 py-2.5 rounded-xl text-sm font-bold transition-transform hover:scale-105 active:scale-95 shadow-lg shadow-brand-text/10"
          >
            <Plus size={18} />
            <span>Create Allocation</span>
          </button>
        </div>
      </div>

      {/* Main Aggregated Target Card */}
      <div className="bg-brand-card border border-brand-border rounded-2xl p-6 lg:p-8 relative overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
          <div>
            <span className="text-xs font-bold text-brand-muted tracking-wider uppercase">Active Allocation Pools</span>
            <p className="text-3xl font-display font-black text-brand-text mt-1">
              ${totalAllocated.toLocaleString('en-US', { minimumFractionDigits: 2 })}
            </p>
            <div className="flex items-center gap-1.5 text-[10px] text-brand-muted mt-2 font-mono">
              <Calendar size={12} />
              <span>Reset period: 1st of monthly schedule</span>
            </div>
          </div>

          <div>
            <span className="text-xs font-bold text-brand-muted tracking-wider uppercase">Aggregated Outflows</span>
            <p className="text-3xl font-display font-black text-brand-text mt-1">
              ${totalSpent.toLocaleString('en-US', { minimumFractionDigits: 2 })}
            </p>
            <div className="flex items-center gap-1.5 mt-2">
              <span className={cn(
                "h-2 w-2 rounded-full",
                percentageSpent > 90 ? "bg-red-500 animate-pulse" : percentageSpent > 75 ? "bg-yellow-500" : "bg-green-500"
              )} />
              <span className="text-xs font-bold text-brand-text">{percentageSpent.toFixed(1)}% of total cap spent</span>
            </div>
          </div>

          <div>
            <span className="text-xs font-bold text-brand-muted tracking-wider uppercase">Remaining Capital Reserve</span>
            <p className={cn(
              "text-3xl font-display font-black mt-1",
              totalRemaining < 0 ? "text-red-500" : "text-brand-text"
            )}>
              ${totalRemaining.toLocaleString('en-US', { minimumFractionDigits: 2 })}
            </p>
            <p className="text-xs text-brand-muted mt-2">
              {totalRemaining < 0 ? "Enterprise is currently overbudget" : "Allocated but safe for distribution"}
            </p>
          </div>
        </div>

        {/* Big visual progress rail */}
        <div className="mt-8 h-3 w-full bg-brand-text/5 rounded-full overflow-hidden border border-brand-border/30 relative">
          <div 
            className={cn(
              "h-full rounded-full transition-all duration-1000",
              percentageSpent > 90 ? "bg-gradient-to-r from-red-500 to-rose-600" : percentageSpent > 70 ? "bg-yellow-500" : "bg-brand-text"
            )}
            style={{ width: `${percentageSpent}%` }}
          />
        </div>

        {/* Decorative ambient backdrop */}
        <div className="absolute top-0 right-0 p-10 h-64 w-64 bg-brand-text/[0.015] rounded-full blur-3xl pointer-events-none" />
      </div>

      {/* Warning Stream if Any Categories are Over budget */}
      {overspentCategories.length > 0 && (
        <div className="bg-red-500/10 border border-red-500/30 rounded-2xl p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 animate-pulse">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-full bg-red-500/20 flex items-center justify-center text-red-500 shrink-0">
              <AlertTriangle size={20} />
            </div>
            <div>
              <p className="text-sm font-bold text-brand-text">Target Cap Violations Detected</p>
              <p className="text-xs text-brand-muted">
                {overspentCategories.length} corporate cost centers are exceeding their allocated budgets. Please review distributions.
              </p>
            </div>
          </div>
          <div className="flex gap-2 shrink-0">
            {overspentCategories.map(c => (
              <span key={c.id} className="text-[10px] font-black uppercase tracking-wider bg-red-500/10 text-red-500 px-2.5 py-1 rounded-full border border-red-500/20">
                {c.name.split(' ')[0]}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Split Interactive View Layout optimized and polished for tablet/Surface Pro 7 grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left column: Quick-cards grid of all budgets */}
        <div className="lg:col-span-7 space-y-4">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-lg font-bold text-brand-text">Cost Center Channels</h3>
            <span className="text-xs font-mono text-brand-muted">{filteredCategories.length} configured</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {filteredCategories.map((cat) => {
              const spentRatio = Math.min((cat.spent / cat.allocated) * 100, 100);
              const Icon = cat.icon;
              const isActive = activeCategory?.id === cat.id;

              return (
                <div 
                  key={cat.id}
                  onClick={() => setActiveCategory(cat)}
                  className={cn(
                    "p-5 rounded-2xl border transition-all text-left cursor-pointer relative group",
                    isActive 
                      ? "bg-brand-text text-brand-bg shadow-xl shadow-brand-text/15 border-brand-text" 
                      : "bg-brand-card border-brand-border hover:bg-brand-text/5 hover:border-brand-text/20"
                  )}
                >
                  <div className="flex items-start justify-between">
                    <div className={cn(
                      "p-2.5 rounded-xl shrink-0", 
                      isActive ? "bg-brand-bg/10 text-brand-bg" : cat.color
                    )}>
                      <Icon size={20} />
                    </div>

                    <button 
                      onClick={(e) => {
                        e.stopPropagation();
                        handleDeleteCategory(cat.id);
                      }}
                      className={cn(
                        "p-1.5 rounded-lg transition-colors opacity-0 group-hover:opacity-100",
                        isActive ? "text-brand-bg/60 hover:text-brand-bg hover:bg-brand-bg/10" : "text-brand-muted hover:text-brand-text hover:bg-brand-text/5"
                      )}
                    >
                      <Trash2 size={14} />
                    </button>
                  </div>

                  <div className="mt-5">
                    <h3 className="font-bold text-sm tracking-tight truncate">{cat.name}</h3>
                    <p className={cn("text-[10px] uppercase font-bold tracking-widest mt-1", isActive ? "text-brand-bg/60" : "text-brand-muted")}>
                      {cat.period} Limit
                    </p>
                  </div>

                  <div className="mt-5 space-y-2">
                    <div className="flex items-end justify-between text-xs">
                      <div>
                        <span className="font-bold">${cat.spent.toLocaleString()}</span>
                        <span className={cn("opacity-65 ml-1", isActive ? "text-brand-bg" : "text-brand-muted")}>spent</span>
                      </div>
                      <span className="font-mono text-[10px] font-bold">
                        ${cat.allocated.toLocaleString()} cap
                      </span>
                    </div>

                    {/* Progress slider bar */}
                    <div className={cn("h-1.5 w-full rounded-full overflow-hidden", isActive ? "bg-brand-bg/20" : "bg-brand-text/5")}>
                      <div 
                        className={cn(
                          "h-full rounded-full transition-all",
                          isActive 
                            ? "bg-brand-bg" 
                            : cat.spent / cat.allocated > 1.0 
                              ? "bg-red-500" 
                              : cat.progressColor
                        )}
                        style={{ width: `${spentRatio}%` }}
                      />
                    </div>
                  </div>

                  {/* Warning Dot Badge */}
                  {cat.spent > cat.allocated && (
                    <span className="absolute top-4 right-4 h-2 w-2 rounded-full bg-red-500 animate-pulse" />
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Right column: Detailed Inspection of selected Budget Category */}
        <div className="lg:col-span-5">
          <AnimatePresence mode="wait">
            {activeCategory ? (
              <motion.div 
                key={activeCategory.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                className="bg-brand-card border border-brand-border rounded-2xl p-6 space-y-8 sticky top-24"
              >
                {/* Visual Header */}
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <div className={cn("p-3 rounded-xl", activeCategory.color)}>
                      {React.createElement(activeCategory.icon, { size: 24 })}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-brand-text leading-snug">{activeCategory.name}</h3>
                      <span className="text-xs text-brand-muted tracking-wider uppercase font-bold">{activeCategory.period} budget</span>
                    </div>
                  </div>
                  <button 
                    onClick={() => setShowEditFundsModal(true)}
                    className="p-2 border border-brand-border rounded-xl text-brand-muted hover:text-brand-text hover:bg-brand-text/5"
                    title="Adjust Allocation"
                  >
                    <Edit2 size={16} />
                  </button>
                </div>

                {/* Status Indicator */}
                <div className="p-4 bg-brand-text/[0.02] border border-brand-border rounded-xl flex items-center justify-between">
                  <div className="space-y-0.5">
                    <p className="text-xs text-brand-muted">Budget Health Status</p>
                    <p className="text-sm font-bold text-brand-text">
                      {activeCategory.spent > activeCategory.allocated 
                        ? 'Over Limit Overage' 
                        : activeCategory.spent / activeCategory.allocated > 0.85 
                          ? 'Nearing Limit Caution' 
                          : 'Nominal Condition Active'}
                    </p>
                  </div>
                  <div>
                    {activeCategory.spent > activeCategory.allocated ? (
                      <div className="h-8 w-8 rounded-full bg-red-500/10 text-red-500 flex items-center justify-center">
                        <AlertTriangle size={16} />
                      </div>
                    ) : (
                      <div className="h-8 w-8 rounded-full bg-green-500/10 text-green-500 flex items-center justify-center">
                        <CheckCircle2 size={16} />
                      </div>
                    )}
                  </div>
                </div>

                {/* Metrics */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 rounded-xl bg-brand-text/[0.02] border border-brand-border">
                    <p className="text-[10px] text-brand-muted uppercase font-mono tracking-wider">Allocated Limit</p>
                    <p className="text-lg font-black text-brand-text mt-1">
                      ${activeCategory.allocated.toLocaleString('en-US', { minimumFractionDigits: 2 })}
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-brand-text/[0.02] border border-brand-border">
                    <p className="text-[10px] text-brand-muted uppercase font-mono tracking-wider">Total Spent</p>
                    <p className="text-lg font-black text-brand-text mt-1">
                      ${activeCategory.spent.toLocaleString('en-US', { minimumFractionDigits: 2 })}
                    </p>
                  </div>
                </div>

                {/* Simulated Outflows / Interaction for the live system */}
                <div className="space-y-3">
                  <p className="text-xs font-bold text-brand-text">Sandbox Simulate Cost Posting</p>
                  <div className="grid grid-cols-2 gap-2">
                    <button 
                      onClick={() => handleSimulateExpense(250, 'Cloudflare Enterprise API')}
                      className="px-3 py-2 border border-brand-border bg-brand-text/5 text-xs font-bold rounded-lg hover:border-brand-text transition-all text-brand-text"
                    >
                      +$250.00 Charge
                    </button>
                    <button 
                      onClick={() => handleSimulateExpense(1200, 'Marketing Social Retargeting')}
                      className="px-3 py-2 border border-brand-border bg-brand-text/5 text-xs font-bold rounded-lg hover:border-brand-text transition-all text-brand-text"
                    >
                      +$1,200.00 Charge
                    </button>
                  </div>
                </div>

                {/* Expenses History List */}
                <div className="pt-2">
                  <p className="text-xs font-bold text-brand-text mb-3">Allocated cost stream ({activeCategory.recentExpenses.length})</p>
                  
                  {activeCategory.recentExpenses.length > 0 ? (
                    <div className="divide-y divide-brand-border">
                      {activeCategory.recentExpenses.map((exp) => (
                        <div key={exp.id} className="py-2.5 flex items-center justify-between text-xs">
                          <div>
                            <p className="font-bold text-brand-text">{exp.name}</p>
                            <p className="text-[10px] text-brand-muted font-mono mt-0.5">{exp.date}</p>
                          </div>
                          <span className="font-bold text-brand-text">
                            -${exp.amount.toLocaleString('en-US', { minimumFractionDigits: 2 })}
                          </span>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="p-8 border border-dashed border-brand-border rounded-xl text-center">
                      <p className="text-xs text-brand-muted">No simulated card clearances posted yet</p>
                    </div>
                  )}
                </div>

              </motion.div>
            ) : (
              <div className="p-12 text-center bg-brand-card/50 border border-brand-border rounded-2xl border-dashed">
                <PieChart className="mx-auto text-brand-muted mb-4" size={40} />
                <p className="text-sm text-brand-text font-bold">Select allocation to inspect</p>
                <p className="text-xs text-brand-muted mt-1">Select one of your departments on the left side to drill down.</p>
              </div>
            )}
          </AnimatePresence>
        </div>

      </div>

      {/* modal - create allocation */}
      <AnimatePresence>
        {showAddModal && (
          <>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowAddModal(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100]"
            />
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="fixed inset-x-4 bottom-4 sm:inset-auto sm:top-1/2 sm:left-1/2 sm:-translate-x-1/2 sm:-translate-y-1/2 w-full max-w-md bg-brand-bg border border-brand-border rounded-2xl shadow-2xl p-6 z-[110]"
            >
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-bold text-brand-text">Distribute Budget Limit</h3>
                <button 
                  onClick={() => setShowAddModal(false)}
                  className="p-1 rounded-lg hover:bg-brand-text/5 text-brand-muted"
                >
                  Close
                </button>
              </div>

              <form onSubmit={handleCreateCategory} className="space-y-4">
                <div>
                  <label className="block text-xs font-bold text-brand-muted uppercase mb-2">Category Channel Name</label>
                  <input 
                    type="text" 
                    required
                    placeholder="e.g. Compliance Licensing"
                    value={newName}
                    onChange={(e) => setNewName(e.target.value)}
                    className="w-full bg-brand-text/5 border border-brand-border/60 rounded-xl px-4 py-3 text-sm focus:border-brand-text focus:ring-0 placeholder:text-brand-muted/50"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-brand-muted uppercase mb-2">Cap Target Amount ($)</label>
                    <input 
                      type="number" 
                      required
                      placeholder="5000"
                      value={newAllocated}
                      onChange={(e) => setNewAllocated(e.target.value)}
                      className="w-full bg-brand-text/5 border border-brand-border/60 rounded-xl px-4 py-3 text-sm focus:border-brand-text focus:ring-0 placeholder:text-brand-muted/50"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-brand-muted uppercase mb-2">Target Period</label>
                    <select
                      value={newPeriod}
                      onChange={(e) => setNewPeriod(e.target.value as 'monthly' | 'yearly')}
                      className="w-full bg-brand-text/5 border border-brand-border/60 rounded-xl px-4 py-3 text-sm focus:border-brand-text focus:ring-0 text-brand-text"
                    >
                      <option value="monthly">Monthly</option>
                      <option value="yearly">Yearly</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-brand-muted uppercase mb-2">Category Icon Accent</label>
                  <div className="grid grid-cols-4 gap-2">
                    {availableIcons.map((item, idx) => {
                      const IconComp = item.icon;
                      return (
                        <button
                          key={idx}
                          type="button"
                          onClick={() => setSelectedIconIndex(idx)}
                          className={cn(
                            "p-3 rounded-xl border flex flex-col items-center gap-1 transition-all",
                            selectedIconIndex === idx 
                              ? "bg-brand-text text-brand-bg border-brand-text scale-105" 
                              : "bg-brand-text/5 border-brand-border hover:border-brand-text/30"
                          )}
                        >
                          <IconComp size={18} />
                          <span className="text-[9px] font-bold">{item.label}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                <button 
                  type="submit"
                  className="w-full bg-brand-text text-brand-bg py-3.5 rounded-xl font-bold text-sm transition-all hover:opacity-95 shadow-lg shadow-brand-text/10"
                >
                  Authorize Allocation Target
                </button>
              </form>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* modal - adjust funds */}
      <AnimatePresence>
        {showEditFundsModal && activeCategory && (
          <>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowEditFundsModal(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100]"
            />
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="fixed inset-x-4 bottom-4 sm:inset-auto sm:top-1/2 sm:left-1/2 sm:-translate-x-1/2 sm:-translate-y-1/2 w-full max-w-sm bg-brand-bg border border-brand-border rounded-2xl shadow-2xl p-6 z-[110]"
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-bold text-brand-text">Adjust Capital Limit</h3>
                <button 
                  onClick={() => setShowEditFundsModal(false)}
                  className="p-1 rounded-lg hover:bg-brand-text/5 text-brand-muted"
                >
                  Close
                </button>
              </div>

              <div className="mb-4">
                <p className="text-xs text-brand-muted">Adjusting target limit allocation pools for:</p>
                <p className="font-bold text-brand-text text-sm mt-0.5">{activeCategory.name}</p>
              </div>

              <form onSubmit={handleAllocateMore} className="space-y-4">
                <div>
                  <label className="block text-xs font-bold text-brand-muted uppercase mb-2">Fund delta allocation ($)</label>
                  <input 
                    type="number" 
                    required
                    placeholder="e.g. 500 for increase, -500 for decrease"
                    value={fundsToAllocate}
                    onChange={(e) => setFundsToAllocate(e.target.value)}
                    className="w-full bg-brand-text/5 border border-brand-border/60 rounded-xl px-4 py-3 text-sm focus:border-brand-text focus:ring-0 placeholder:text-brand-muted/50"
                  />
                  <p className="text-[10px] text-brand-muted mt-1">Use a negative number to de-allocate or shift funds elsewhere.</p>
                </div>

                <div className="flex gap-3">
                  <button 
                    type="button"
                    onClick={() => setShowEditFundsModal(false)}
                    className="flex-1 py-3 border border-brand-border rounded-xl text-xs font-bold hover:bg-brand-text/5"
                  >
                    Cancel
                  </button>
                  <button 
                    type="submit"
                    className="flex-1 bg-brand-text text-brand-bg py-3 rounded-xl text-xs font-bold transition-all hover:opacity-95 shadow-lg shadow-brand-text/10"
                  >
                    Post Delta Allocation
                  </button>
                </div>
              </form>
            </motion.div>
          </>
        )}
      </AnimatePresence>

    </div>
  );
}
