import React from 'react';
import { 
  Plus, 
  CreditCard, 
  Wallet, 
  Banknote, 
  ChevronRight, 
  TrendingUp, 
  ArrowUpRight, 
  MoreVertical,
  Globe,
  ShieldCheck
} from 'lucide-react';
import { motion } from 'motion/react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const accounts = [
  { id: 1, name: 'Mercury Operating', type: 'Bank', balance: 452700.00, currency: 'USD', change: '+2.5%', color: 'bg-brand-text/10', icon: Banknote },
  { id: 2, name: 'Chase Business', type: 'Bank', balance: 125000.00, currency: 'USD', change: '-1.2%', color: 'bg-brand-text/10', icon: Banknote },
  { id: 3, name: 'Amex Platinum B2B', type: 'Credit', balance: -24500.00, currency: 'USD', change: '+5.4%', color: 'bg-red-500/10', icon: CreditCard },
  { id: 4, name: 'TransferWise Euro', type: 'Bank', balance: 85200.00, currency: 'EUR', change: '+0.8%', color: 'bg-blue-500/10', icon: Globe },
  { id: 5, name: 'Stripe Balance', type: 'Wallet', balance: 14200.00, currency: 'USD', change: '+12.4%', color: 'bg-indigo-500/10', icon: Wallet },
];

const AccountsPage: React.FC = () => {
  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
       <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <h1 className="text-3xl font-display font-bold text-brand-text">Account Registry</h1>
          <p className="text-brand-muted mt-1">Real-time balances across all linked institutions and wallets.</p>
        </div>
        <button className="flex items-center gap-2 bg-brand-text text-brand-bg px-6 py-2 rounded-xl text-sm font-bold transition-transform hover:scale-105 active:scale-95 shadow-lg shadow-brand-text/10">
          <Plus size={18} />
          <span>Connect Institution</span>
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {accounts.map((acc) => (
          <motion.div 
            key={acc.id}
            whileHover={{ y: -5 }}
            className="bg-brand-card border border-brand-border rounded-2xl p-6 relative group cursor-pointer overflow-hidden"
          >
            <div className="flex items-start justify-between mb-8">
              <div className={cn("p-3 rounded-xl", acc.color)}>
                <acc.icon size={20} className="text-brand-text" />
              </div>
              <button className="p-1 rounded-lg hover:bg-brand-text/5 text-brand-muted">
                <MoreVertical size={18} />
              </button>
            </div>
            
            <div className="relative z-10">
              <p className="text-[10px] uppercase font-bold tracking-widest text-brand-muted mb-1">{acc.type}</p>
              <h3 className="text-lg font-bold text-brand-text mb-4 group-hover:text-white transition-colors">{acc.name}</h3>
              <div className="flex items-end justify-between">
                <div>
                  <p className="text-2xl font-display font-black text-brand-text">
                    {acc.currency === 'EUR' ? '€' : '$'}{Math.abs(acc.balance).toLocaleString('en-US', { minimumFractionDigits: 2 })}
                  </p>
                  <div className={cn(
                    "flex items-center gap-1 text-[10px] font-bold mt-1",
                    acc.change.startsWith('+') ? 'text-green-500' : 'text-red-500'
                  )}>
                    <TrendingUp size={12} />
                    <span>{acc.change}</span>
                    <span className="text-brand-muted font-normal ml-0.5">vs last week</span>
                  </div>
                </div>
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-text/5 border border-brand-border group-hover:bg-brand-text group-hover:text-brand-bg transition-all">
                  <ChevronRight size={18} />
                </div>
              </div>
            </div>

            <div className="absolute -bottom-6 -right-6 h-32 w-32 bg-brand-text/5 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
          </motion.div>
        ))}

        {/* Add New Account Card */}
        <div className="border-2 border-dashed border-brand-border rounded-2xl p-6 flex flex-col items-center justify-center gap-4 group cursor-pointer hover:border-brand-text/50 transition-all hover:bg-brand-text/5">
          <div className="h-12 w-12 rounded-full border border-brand-border flex items-center justify-center text-brand-muted group-hover:scale-110 group-hover:text-brand-text transition-all">
            <Plus size={24} />
          </div>
          <p className="text-sm font-bold text-brand-muted group-hover:text-brand-text transition-colors">Add Entity Account</p>
        </div>
      </div>

      {/* Account Insights */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-brand-card border border-brand-border rounded-2xl p-6">
          <div className="flex items-center gap-2 mb-6">
            <ShieldCheck size={20} className="text-brand-text" />
            <h3 className="text-lg font-display font-bold text-brand-text">Security Status</h3>
          </div>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 bg-brand-text/5 rounded-xl border border-brand-border">
              <div className="flex items-center gap-3">
                <div className="h-8 w-8 rounded-full bg-green-500/20 flex items-center justify-center text-green-500">
                  <ShieldCheck size={16} />
                </div>
                <div>
                  <p className="text-sm font-bold">Encrypted Vault</p>
                  <p className="text-[10px] text-brand-muted">Hardware modules active</p>
                </div>
              </div>
              <span className="text-[10px] font-black uppercase text-green-500 tracking-widest">Active</span>
            </div>
            <div className="flex items-center justify-between p-4 bg-brand-text/5 rounded-xl border border-brand-border">
              <div className="flex items-center gap-3">
                <div className="h-8 w-8 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-500">
                  <ArrowUpRight size={16} />
                </div>
                <div>
                  <p className="text-sm font-bold">Plaid Sync</p>
                  <p className="text-[10px] text-brand-muted">Last sync: 2 mins ago</p>
                </div>
              </div>
              <span className="text-[10px] font-black uppercase text-blue-500 tracking-widest">Connected</span>
            </div>
          </div>
        </div>

        <div className="bg-brand-text text-brand-bg rounded-2xl p-6 flex items-center justify-between overflow-hidden relative group">
          <div>
            <h3 className="text-xl font-display font-bold mb-2">Multi-Currency Engine</h3>
            <p className="text-xs opacity-70 mb-6 max-w-[240px]">Real-time exchange rates powered by Global Liquidity Bridge.</p>
            <button className="px-4 py-2 bg-brand-bg text-brand-text rounded-full text-xs font-bold transition-transform hover:scale-105">
              Manage Rates
            </button>
          </div>
          <motion.div 
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
            className="opacity-10"
          >
            <Globe size={160} />
          </motion.div>
          <div className="absolute top-0 right-0 p-6 flex flex-col gap-2">
            <div className="bg-brand-bg/10 px-2 py-1 rounded-md border border-brand-bg/20 text-[10px] font-bold">USD/EUR: 0.92</div>
            <div className="bg-brand-bg/10 px-2 py-1 rounded-md border border-brand-bg/20 text-[10px] font-bold">USD/GBP: 0.79</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountsPage;
