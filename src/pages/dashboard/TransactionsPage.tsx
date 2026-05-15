import React, { useState } from 'react';
import { 
  Search, 
  Filter, 
  Download, 
  Plus, 
  ArrowUpRight, 
  ArrowDownRight, 
  MoreVertical,
  ChevronLeft,
  ChevronRight,
  FileText,
  Tag,
  Calendar,
  DollarSign
} from 'lucide-react';
import { motion } from 'motion/react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const transactions = [
  { id: 'TX-9021', name: 'AWS Cloud Services', category: 'Infrastructure', amount: -12450.00, date: 'May 15, 2026', time: '09:42 AM', account: 'Chase Business', status: 'completed' },
  { id: 'TX-9022', name: 'Main Entity Deposit', category: 'Revenue', amount: 45000.00, date: 'May 15, 2026', time: '08:15 AM', account: 'Mercury Operating', status: 'completed' },
  { id: 'TX-9023', name: 'Stripe Payout', category: 'Sales', amount: 14200.00, date: 'May 14, 2026', time: '11:10 PM', account: 'Mercury Operating', status: 'completed' },
  { id: 'TX-9024', name: 'Workspace Rental', category: 'Rent', amount: -4500.00, date: 'May 14, 2026', time: '02:00 PM', account: 'Chase Business', status: 'completed' },
  { id: 'TX-9025', name: 'Freelance Payouts', category: 'Contracting', amount: -8900.00, date: 'May 13, 2026', time: '10:20 AM', account: 'Chase Business', status: 'completed' },
  { id: 'TX-9026', name: 'Apple Enterprise', category: 'Hardware', amount: -2400.00, date: 'May 12, 2026', time: '04:15 PM', account: 'Amex Platinum', status: 'completed' },
  { id: 'TX-9027', name: 'Google Ads', category: 'Marketing', amount: -15000.00, date: 'May 12, 2026', time: '09:00 AM', account: 'Amex Platinum', status: 'pending' },
  { id: 'TX-9028', name: 'Github Copilot', category: 'SaaS', amount: -190.00, date: 'May 11, 2026', time: '01:30 PM', account: 'Amex Platinum', status: 'completed' },
  { id: 'TX-9029', name: 'Customer Refund', category: 'Refunds', amount: -450.00, date: 'May 10, 2026', time: '11:45 AM', account: 'Stripe Balance', status: 'completed' },
  { id: 'TX-9030', name: 'Incentive Program', category: 'Bonus', amount: 2500.00, date: 'May 09, 2026', time: '03:20 PM', account: 'Mercury Operating', status: 'completed' },
];

const TransactionsPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <h1 className="text-3xl font-display font-bold text-brand-text">Transactions</h1>
          <p className="text-brand-muted mt-1">Detailed ledger of all inflows and outflows across entities.</p>
        </div>
        <div className="flex items-center gap-3">
          <button className="flex items-center gap-2 bg-brand-text/5 border border-brand-border px-4 py-2 rounded-xl text-sm font-bold text-brand-text hover:bg-brand-text/10 transition-colors">
            <Download size={18} />
            <span>Export CSV</span>
          </button>
          <button className="flex items-center gap-2 bg-brand-text text-brand-bg px-6 py-2 rounded-xl text-sm font-bold transition-transform hover:scale-105 active:scale-95 shadow-lg shadow-brand-text/10">
            <Plus size={18} />
            <span>Add Transaction</span>
          </button>
        </div>
      </div>

      {/* Filters Bar */}
      <div className="bg-brand-card border border-brand-border rounded-2xl p-4 flex flex-col lg:flex-row items-center gap-4">
        <div className="relative w-full lg:flex-1">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-brand-muted" size={18} />
          <input 
            type="text" 
            placeholder="Search by name, reference ID, or description..." 
            className="w-full bg-brand-text/5 border border-brand-border rounded-xl pl-12 pr-4 py-2.5 text-sm outline-none focus:border-brand-text/30 transition-colors"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="flex items-center gap-3 w-full lg:w-auto">
          <button className="flex-1 lg:flex-none flex items-center justify-center gap-2 bg-brand-text/5 border border-brand-border px-4 py-2.5 rounded-xl text-sm font-medium text-brand-text">
            <Calendar size={16} className="text-brand-muted" />
            <span>All Dates</span>
          </button>
          <button className="flex-1 lg:flex-none flex items-center justify-center gap-2 bg-brand-text/5 border border-brand-border px-4 py-2.5 rounded-xl text-sm font-medium text-brand-text">
            <Tag size={16} className="text-brand-muted" />
            <span>Categories</span>
          </button>
          <button className="flex-1 lg:flex-none flex items-center justify-center gap-2 bg-brand-text/5 border border-brand-border px-4 py-2.5 rounded-xl text-sm font-medium text-brand-text">
            <Filter size={16} className="text-brand-muted" />
            <span>Status</span>
          </button>
        </div>
      </div>

      {/* Transactions Table */}
      <div className="bg-brand-card border border-brand-border rounded-2xl overflow-hidden">
        <div className="overflow-x-auto no-scrollbar">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-brand-border bg-brand-text/[0.02]">
                <th className="px-6 py-4 text-[10px] font-bold uppercase tracking-widest text-brand-muted">Entity / Name</th>
                <th className="px-6 py-4 text-[10px] font-bold uppercase tracking-widest text-brand-muted">Category</th>
                <th className="px-6 py-4 text-[10px] font-bold uppercase tracking-widest text-brand-muted">Date & Time</th>
                <th className="px-6 py-4 text-[10px] font-bold uppercase tracking-widest text-brand-muted">Account</th>
                <th className="px-6 py-4 text-[10px] font-bold uppercase tracking-widest text-brand-muted">Status</th>
                <th className="px-6 py-4 text-[10px] font-bold uppercase tracking-widest text-brand-muted text-right">Amount</th>
                <th className="px-6 py-4 w-10"></th>
              </tr>
            </thead>
            <tbody className="divide-y divide-brand-border">
              {transactions.map((tx) => (
                <tr key={tx.id} className="group hover:bg-brand-text/5 transition-colors cursor-pointer">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className={cn(
                        "h-10 w-10 rounded-xl flex items-center justify-center text-xs font-bold",
                        tx.amount > 0 ? "bg-green-500/10 text-green-500" : "bg-red-500/10 text-red-500"
                      )}>
                        {tx.amount > 0 ? <ArrowUpRight size={18} /> : <ArrowDownRight size={18} />}
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-brand-text group-hover:text-white transition-colors">{tx.name}</h4>
                        <p className="text-[10px] text-brand-muted font-mono">{tx.id}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-brand-text/5 border border-brand-border text-xs font-medium text-brand-text">
                      {tx.category}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="text-sm text-brand-text">{tx.date}</div>
                    <div className="text-[10px] text-brand-muted font-mono">{tx.time}</div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2 text-sm text-brand-text">
                      <div className="h-5 w-5 rounded-full bg-brand-text/5 border border-brand-border flex items-center justify-center">
                        <DollarSign size={10} className="text-brand-muted" />
                      </div>
                      {tx.account}
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className={cn(
                      "inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-[10px] font-black uppercase tracking-wider",
                      tx.status === 'completed' ? "bg-green-500/10 text-green-500" : "bg-yellow-500/10 text-yellow-500"
                    )}>
                      <span className={cn("h-1.5 w-1.5 rounded-full", tx.status === 'completed' ? "bg-green-500" : "bg-yellow-500")} />
                      {tx.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <p className={cn(
                      "text-sm font-display font-black",
                      tx.amount > 0 ? "text-green-500" : "text-brand-text"
                    )}>
                      {tx.amount > 0 ? '+' : ''}{tx.amount.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}
                    </p>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <button className="p-1.5 rounded-lg hover:bg-brand-text/10 text-brand-muted opacity-0 group-hover:opacity-100 transition-all">
                      <MoreVertical size={18} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="p-6 border-t border-brand-border flex items-center justify-between">
          <p className="text-sm text-brand-muted">Showing <span className="font-bold text-brand-text">1-10</span> of <span className="font-bold text-brand-text">154</span> transactions</p>
          <div className="flex items-center gap-2">
            <button className="p-2 border border-brand-border rounded-lg text-brand-muted disabled:opacity-30" disabled>
              <ChevronLeft size={18} />
            </button>
            <div className="flex items-center gap-1">
              {[1, 2, 3, '...', 16].map((p, i) => (
                <button 
                  key={i}
                  className={cn(
                    "h-9 w-9 rounded-lg text-sm font-bold transition-colors",
                    p === 1 ? "bg-brand-text text-brand-bg" : "text-brand-muted hover:bg-brand-text/5 hover:text-brand-text"
                  )}
                >
                  {p}
                </button>
              ))}
            </div>
            <button className="p-2 border border-brand-border rounded-lg text-brand-muted hover:bg-brand-text/5 hover:text-brand-text">
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TransactionsPage;
