import React from 'react';
import { 
  TrendingUp, 
  TrendingDown, 
  DollarSign, 
  ArrowUpRight, 
  ArrowDownRight, 
  Zap, 
  CreditCard, 
  Wallet, 
  Target,
  Sparkles,
  ChevronRight
} from 'lucide-react';
import { 
  AreaChart, 
  Area, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  BarChart,
  Bar,
  Cell
} from 'recharts';
import { motion } from 'motion/react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const data = [
  { name: 'Jan', income: 4500, expense: 3200 },
  { name: 'Feb', income: 5200, expense: 3800 },
  { name: 'Mar', income: 4800, expense: 4100 },
  { name: 'Apr', income: 6100, expense: 3600 },
  { name: 'May', income: 5800, expense: 4200 },
  { name: 'Jun', income: 6300, expense: 3900 },
];

const categoryData = [
  { name: 'Housing', value: 35 },
  { name: 'Food', value: 20 },
  { name: 'Transport', value: 15 },
  { name: 'Entertainment', value: 10 },
  { name: 'Utilities', value: 12 },
  { name: 'Others', value: 8 },
];

const COLORS = ['#FFFFFF', '#A3A3A3', '#717171', '#525252', '#404040', '#262626'];

const StatCard = ({ title, value, trend, trendType, icon: Icon, colorClass }: any) => (
  <div className="bg-brand-card border border-brand-border rounded-2xl p-6 relative overflow-hidden group hover:border-brand-text/30 transition-all">
    <div className="flex items-start justify-between">
      <div>
        <p className="text-brand-muted text-sm font-medium mb-1">{title}</p>
        <h3 className="text-2xl font-display font-bold text-brand-text">{value}</h3>
        <div className={cn(
          "flex items-center gap-1 mt-2 text-xs font-bold",
          trendType === 'up' ? 'text-green-500' : 'text-red-500'
        )}>
          {trendType === 'up' ? <ArrowUpRight size={14} /> : <ArrowDownRight size={14} />}
          <span>{trend}</span>
          <span className="text-brand-muted font-normal ml-1">vs last month</span>
        </div>
      </div>
      <div className={cn("p-3 rounded-xl", colorClass)}>
        <Icon size={20} className="text-brand-text" />
      </div>
    </div>
    <div className="absolute -bottom-6 -right-6 h-24 w-24 bg-brand-text/5 rounded-full blur-2xl group-hover:bg-brand-text/10 transition-colors" />
  </div>
);

const DashboardHome: React.FC = () => {
  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-display font-bold text-brand-text">Portfolio Overview</h1>
          <p className="text-brand-muted mt-1">Global summary across 12 active accounts and entities.</p>
        </div>
        <div className="flex items-center gap-4 bg-brand-text/5 border border-brand-border px-4 py-2 rounded-full text-sm">
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
            <span className="text-brand-muted font-medium">Real-time Sync</span>
          </div>
          <div className="h-4 w-[1px] bg-brand-border mx-2" />
          <span className="text-brand-text font-bold">15 May 2026, 12:44</span>
        </div>
      </div>

      {/* Hero Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard 
          title="Net Worth" 
          value="$1,245,600.00" 
          trend="+12.5%" 
          trendType="up" 
          icon={Wallet} 
          colorClass="bg-brand-text/10"
        />
        <StatCard 
          title="Monthly Income" 
          value="$62,300.00" 
          trend="+8.2%" 
          trendType="up" 
          icon={TrendingUp} 
          colorClass="bg-green-500/10"
        />
        <StatCard 
          title="Monthly Expenses" 
          value="$38,450.00" 
          trend="+3.1%" 
          trendType="down" 
          icon={TrendingDown} 
          colorClass="bg-red-500/10"
        />
        <StatCard 
          title="Cash Runway" 
          value="18.5 Months" 
          trend="+1.2" 
          trendType="up" 
          icon={Zap} 
          colorClass="bg-yellow-500/10"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Chart */}
        <div className="lg:col-span-2 bg-brand-card border border-brand-border rounded-2xl p-6">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h3 className="text-lg font-display font-bold text-brand-text">Cash Flow Trends</h3>
              <p className="text-brand-muted text-xs">Income vs Operating Expenses (Last 6 Months)</p>
            </div>
            <select className="bg-brand-text/5 border border-brand-border rounded-lg px-3 py-1.5 text-xs font-bold text-brand-text outline-none">
              <option>Last 6 Months</option>
              <option>Last 12 Months</option>
              <option>Year to Date</option>
            </select>
          </div>
          <div className="h-80 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={data}>
                <defs>
                  <linearGradient id="colorIncome" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="rgba(255,255,255,0.1)" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="rgba(255,255,255,0)" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="rgba(255,255,255,0.05)" />
                <XAxis 
                  dataKey="name" 
                  axisLine={false} 
                  tickLine={false} 
                  tick={{ fill: '#A3A3A3', fontSize: 12 }}
                  dy={10}
                />
                <YAxis 
                  axisLine={false} 
                  tickLine={false} 
                  tick={{ fill: '#A3A3A3', fontSize: 12 }}
                  tickFormatter={(value) => `$${value/1000}k`}
                />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: '#0a0a0a', 
                    borderColor: 'rgba(255,255,255,0.1)',
                    borderRadius: '12px',
                    color: '#fff'
                  }}
                  itemStyle={{ color: '#fff' }}
                />
                <Area 
                  type="monotone" 
                  dataKey="income" 
                  stroke="#FFFFFF" 
                  strokeWidth={3}
                  fillOpacity={1} 
                  fill="url(#colorIncome)" 
                />
                <Area 
                  type="monotone" 
                  dataKey="expense" 
                  stroke="#717171" 
                  strokeWidth={3}
                  fillOpacity={0}
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* AI Insights & Alerts */}
        <div className="space-y-6">
          <div className="bg-brand-text text-brand-bg rounded-2xl p-6 shadow-[0_0_50px_rgba(255,255,255,0.1)]">
            <div className="flex items-center gap-2 mb-4">
              <Sparkles size={18} />
              <h3 className="font-display font-bold">AI Intelligence</h3>
            </div>
            <div className="space-y-4">
              <div className="bg-brand-bg/10 p-3 rounded-xl border border-brand-bg/20">
                <p className="text-xs font-bold uppercase tracking-widest opacity-60 mb-1">Observation</p>
                <p className="text-sm leading-relaxed">Software subscriptions increased by 14% this month. Recommend pruning unsused seats in Enterprise Plan.</p>
              </div>
              <div className="bg-brand-bg/10 p-3 rounded-xl border border-brand-bg/20">
                <p className="text-xs font-bold uppercase tracking-widest opacity-60 mb-1">Opportunity</p>
                <p className="text-sm leading-relaxed">Maintaining $420k in low-yield accounts. Moving $150k to Treasury Bills could net an additional $6.2k APR.</p>
              </div>
            </div>
            <button className="w-full mt-6 py-3 bg-brand-bg text-brand-text rounded-xl text-sm font-bold transition-transform hover:scale-105">
              Full Smart Report
            </button>
          </div>

          <div className="bg-brand-card border border-brand-border rounded-2xl p-6">
            <h3 className="text-lg font-display font-bold text-brand-text mb-6">Financial Health</h3>
            <div className="relative flex items-center justify-center p-4">
              <svg className="h-40 w-40 transform -rotate-90">
                <circle
                  cx="80"
                  cy="80"
                  r="70"
                  fill="transparent"
                  stroke="currentColor"
                  strokeWidth="12"
                  className="text-brand-text/5"
                />
                <circle
                  cx="80"
                  cy="80"
                  r="70"
                  fill="transparent"
                  stroke="currentColor"
                  strokeWidth="12"
                  strokeDasharray={440}
                  strokeDashoffset={440 * (1 - 0.85)}
                  className="text-brand-text"
                  strokeLinecap="round"
                />
              </svg>
              <div className="absolute flex flex-col items-center">
                <span className="text-4xl font-display font-black">85</span>
                <span className="text-[10px] uppercase font-bold tracking-widest text-brand-muted">Excellent</span>
              </div>
            </div>
            <div className="mt-6 flex items-center justify-between text-xs text-brand-muted">
              <p>Top 2% of Tier</p>
              <p className="flex items-center gap-1 text-green-500 font-bold"><ArrowUpRight size={14} /> +2 pts</p>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Recent Transactions */}
        <div className="bg-brand-card border border-brand-border rounded-2xl overflow-hidden">
          <div className="p-6 border-b border-brand-border flex items-center justify-between">
            <h3 className="text-lg font-display font-bold text-brand-text">Recent Transactions</h3>
            <button className="text-xs font-bold text-brand-muted hover:text-brand-text transition-colors">View Ledger</button>
          </div>
          <div className="divide-y divide-brand-border">
            {[
              { id: 1, name: 'AWS Cloud Services', cat: 'Infrastructure', amount: '-$12,450.00', date: 'Today, 09:42', type: 'expense' },
              { id: 2, name: 'Main Entity Deposit', cat: 'Revenue', amount: '+$45,000.00', date: 'Today, 08:15', type: 'income' },
              { id: 3, name: 'Stripe Payout', cat: 'Sales', amount: '+$14,200.00', date: 'Yesterday, 23:10', type: 'income' },
              { id: 4, name: 'Workspace Rental', cat: 'Rent', amount: '-$4,500.00', date: 'Yesterday, 14:00', type: 'expense' },
              { id: 5, name: 'Freelance Payouts', cat: 'Contracting', amount: '-$8,900.00', date: '13 May, 10:20', type: 'expense' },
            ].map((tx) => (
              <div key={tx.id} className="p-4 hover:bg-brand-text/5 transition-colors flex items-center justify-between group">
                <div className="flex items-center gap-4">
                  <div className={cn(
                    "h-10 w-10 rounded-xl flex items-center justify-center font-bold text-xs uppercase",
                    tx.type === 'income' ? 'bg-green-500/10 text-green-500' : 'bg-red-500/10 text-red-500'
                  )}>
                    {tx.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-brand-text">{tx.name}</h4>
                    <p className="text-[10px] text-brand-muted uppercase tracking-widest">{tx.cat} • {tx.date}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className={cn(
                    "text-sm font-display font-bold",
                    tx.type === 'income' ? 'text-green-500' : 'text-brand-text'
                  )}>{tx.amount}</p>
                  <ChevronRight size={14} className="ml-auto text-brand-muted opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Goals & Budgets */}
        <div className="bg-brand-card border border-brand-border rounded-2xl p-6">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-lg font-display font-bold text-brand-text">Target Tracking</h3>
            <div className="flex gap-2">
              <button className="px-3 py-1 rounded-full bg-brand-text text-brand-bg text-[10px] font-bold uppercase">Active</button>
              <button className="px-3 py-1 rounded-full border border-brand-border text-[10px] font-bold uppercase text-brand-muted hover:text-brand-text">Completed</button>
            </div>
          </div>

          <div className="space-y-8">
            <div>
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <Target size={16} className="text-brand-muted" />
                  <span className="text-sm font-bold text-brand-text">Annual Reserve Pool</span>
                </div>
                <span className="text-xs font-bold text-brand-muted">75% • $375k of $500k</span>
              </div>
              <div className="h-2 w-full bg-brand-text/5 rounded-full overflow-hidden">
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: '75%' }}
                  transition={{ duration: 1, ease: 'easeOut' }}
                  className="h-full bg-brand-text"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <CreditCard size={16} className="text-brand-muted" />
                  <span className="text-sm font-bold text-brand-text">OpEx Budget (May)</span>
                </div>
                <span className="text-xs font-bold text-red-500">Exceeded • $42k of $35k</span>
              </div>
              <div className="h-2 w-full bg-brand-text/5 rounded-full overflow-hidden">
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: '100%' }}
                  transition={{ duration: 1, ease: 'easeOut' }}
                  className="h-full bg-red-500"
                />
              </div>
            </div>

            <div className="pt-6 border-t border-brand-border grid grid-cols-2 gap-4">
              <div className="bg-brand-text/5 p-4 rounded-xl">
                <p className="text-xs font-bold text-brand-muted uppercase tracking-widest mb-1">Savings Rate</p>
                <div className="flex items-end gap-2">
                  <span className="text-xl font-display font-bold text-brand-text">24.2%</span>
                  <span className="text-[10px] text-green-500 font-bold mb-1">+1.5%</span>
                </div>
              </div>
              <div className="bg-brand-text/5 p-4 rounded-xl">
                <p className="text-xs font-bold text-brand-muted uppercase tracking-widest mb-1">Avg Expense</p>
                <div className="flex items-end gap-2">
                  <span className="text-xl font-display font-bold text-brand-text">$1,250</span>
                  <span className="text-[10px] text-brand-muted font-bold mb-1">per day</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardHome;
