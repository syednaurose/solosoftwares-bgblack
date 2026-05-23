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
  DollarSign,
  X,
  Clock,
  Paperclip,
  MessageSquare,
  Send,
  Edit2,
  Trash2,
  Share2
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface Transaction {
  id: string;
  name: string;
  category: string;
  amount: number;
  date: string;
  time: string;
  account: string;
  status: 'completed' | 'pending' | 'failed';
  notes?: string;
  attachments?: { name: string, size: string, type: string }[];
  comments?: { id: number, user: string, text: string, time: string }[];
}

const transactions: Transaction[] = [
  { 
    id: 'TX-9021', 
    name: 'AWS Cloud Services', 
    category: 'Infrastructure', 
    amount: -12450.00, 
    date: 'May 15, 2026', 
    time: '09:42 AM', 
    account: 'Chase Business', 
    status: 'completed',
    notes: 'Monthly infrastructure costs for production and staging environments. Includes reserved instance renewals for the US-East-1 region.',
    attachments: [
      { name: 'invoice_may_2026.pdf', size: '1.2 MB', type: 'PDF' }
    ],
    comments: [
      { id: 1, user: 'Sarah Chen', text: 'Spike in usage detected in dev cluster. Need to check auto-scaling rules.', time: '2h ago' }
    ]
  },
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

const TransactionDrawer = ({ tx, isOpen, onClose }: { tx: Transaction | null, isOpen: boolean, onClose: () => void }) => {
  const [comment, setComment] = useState('');

  if (!tx) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100]"
          />
          <motion.div 
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 30, stiffness: 300 }}
            className="fixed inset-y-0 right-0 w-full sm:w-[500px] bg-brand-bg border-l border-brand-border z-[110] flex flex-col shadow-2xl"
          >
            {/* Drawer Header */}
            <div className="p-6 border-b border-brand-border flex items-center justify-between bg-brand-text/[0.02]">
              <div className="flex items-center gap-3">
                <div className={cn(
                  "h-12 w-12 rounded-2xl flex items-center justify-center text-brand-bg",
                  tx.amount > 0 ? "bg-green-500" : "bg-brand-text"
                )}>
                  {tx.amount > 0 ? <ArrowUpRight size={24} /> : <ArrowDownRight size={24} />}
                </div>
                <div>
                  <h2 className="text-xl font-display font-bold text-brand-text">{tx.name}</h2>
                  <p className="text-xs text-brand-muted font-mono tracking-widest">{tx.id}</p>
                </div>
              </div>
              <button onClick={onClose} className="p-2 rounded-xl hover:bg-brand-text/10 text-brand-muted transition-colors">
                <X size={24} />
              </button>
            </div>

            {/* Drawer Content */}
            <div className="flex-1 overflow-y-auto p-6 md:p-8 space-y-10 no-scrollbar">
              {/* Financial Snapshot */}
              <div className="bg-brand-card border border-brand-border rounded-3xl p-8 text-center relative overflow-hidden group">
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-brand-muted mb-2 block">Transaction Total</span>
                <h3 className={cn(
                  "text-5xl font-display font-black",
                  tx.amount > 0 ? "text-green-500" : "text-brand-text"
                )}>
                  {tx.amount > 0 ? '+' : ''}{tx.amount.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}
                </h3>
                <div className="mt-6 flex items-center justify-center gap-2">
                   <span className={cn(
                      "inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider",
                      tx.status === 'completed' ? "bg-green-500/10 text-green-500" : "bg-yellow-500/10 text-yellow-500"
                    )}>
                      <span className={cn("h-1.5 w-1.5 rounded-full", tx.status === 'completed' ? "bg-green-500" : "bg-yellow-500")} />
                      {tx.status}
                    </span>
                    <span className="h-1 w-1 rounded-full bg-brand-border mx-1" />
                    <span className="text-[10px] font-bold uppercase text-brand-muted tracking-widest">{tx.date} • {tx.time}</span>
                </div>
                <div className="absolute -bottom-10 -right-10 h-32 w-32 bg-brand-text/5 rounded-full blur-3xl" />
              </div>

              {/* Information Grid */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-brand-text/5 p-4 rounded-2xl border border-brand-border/50">
                  <p className="text-[10px] font-bold uppercase tracking-widest text-brand-muted mb-1">Account</p>
                  <div className="flex items-center gap-2 font-bold text-sm">
                    <DollarSign size={14} className="text-brand-muted" />
                    {tx.account}
                  </div>
                </div>
                <div className="bg-brand-text/5 p-4 rounded-2xl border border-brand-border/50">
                  <p className="text-[10px] font-bold uppercase tracking-widest text-brand-muted mb-1">Category</p>
                  <div className="flex items-center gap-2 font-bold text-sm">
                    <Tag size={14} className="text-brand-muted" />
                    {tx.category}
                  </div>
                </div>
              </div>

              {/* Notes Section */}
              <div className="space-y-4">
                <div className="flex items-center justify-between px-1">
                  <h4 className="text-sm font-bold uppercase tracking-widest text-brand-text flex items-center gap-2">
                    <FileText size={16} />
                    Internal Notes
                  </h4>
                  <button className="text-xs font-bold text-brand-muted hover:text-brand-text transition-colors flex items-center gap-1">
                    <Edit2 size={12} /> Edit
                  </button>
                </div>
                <div className="bg-brand-card border border-brand-border rounded-2xl p-5 text-sm leading-relaxed text-brand-muted italic">
                  {tx.notes || "No internal notes provided for this transaction. Add one to keep your team informed."}
                </div>
              </div>

              {/* Attachments Section */}
              <div className="space-y-4">
                <h4 className="text-sm font-bold uppercase tracking-widest text-brand-text flex items-center gap-2">
                  <Paperclip size={16} />
                  Attachments
                </h4>
                <div className="space-y-2">
                  {tx.attachments?.map((file, i) => (
                    <div key={i} className="flex items-center justify-between p-3 bg-brand-text/5 border border-brand-border rounded-xl group hover:border-brand-text/20 transition-all cursor-pointer">
                      <div className="flex items-center gap-3">
                        <div className="h-10 w-10 rounded-lg bg-brand-text flex items-center justify-center text-brand-bg font-black text-[10px]">
                          {file.type}
                        </div>
                        <div>
                          <p className="text-xs font-bold text-brand-text">{file.name}</p>
                          <p className="text-[10px] text-brand-muted">{file.size}</p>
                        </div>
                      </div>
                      <Download size={14} className="text-brand-muted group-hover:text-brand-text transition-colors" />
                    </div>
                  ))}
                  <button className="w-full py-3 border-2 border-dashed border-brand-border rounded-xl text-xs font-bold text-brand-muted hover:border-brand-text/30 hover:text-brand-text transition-all flex items-center justify-center gap-2">
                    <Plus size={14} />
                    Upload Document
                  </button>
                </div>
              </div>

              {/* Audit / Timeline */}
              <div className="space-y-4">
                <h4 className="text-sm font-bold uppercase tracking-widest text-brand-text flex items-center gap-2">
                  <Clock size={16} />
                  Audit Trail
                </h4>
                <div className="space-y-4 pl-2">
                  <div className="relative pl-6 pb-4 border-l border-brand-border">
                    <div className="absolute left-[-5px] top-1 h-2 w-2 rounded-full bg-brand-text" />
                    <p className="text-xs font-bold text-brand-text">Cleared and Synchronized</p>
                    <p className="text-[10px] text-brand-muted mt-0.5">Today, {tx.time} via Plaid Bridge</p>
                  </div>
                  <div className="relative pl-6 pb-2 border-l border-brand-border">
                    <div className="absolute left-[-5px] top-1 h-2 w-2 rounded-full bg-brand-border" />
                    <p className="text-xs font-bold text-brand-muted">Initiated by External Provider</p>
                    <p className="text-[10px] text-brand-muted mt-0.5">Today, 08:30 AM • Reference ID: {tx.id}</p>
                  </div>
                </div>
              </div>

              {/* Comments Section */}
              <div className="pt-6 border-t border-brand-border space-y-6">
                <h4 className="text-sm font-bold uppercase tracking-widest text-brand-text flex items-center gap-2">
                  <MessageSquare size={16} />
                  Comments
                </h4>
                <div className="space-y-6">
                  {tx.comments?.map((c) => (
                    <div key={c.id} className="flex gap-4">
                      <div className="h-8 w-8 rounded-full bg-brand-text/10 p-0.5 shrink-0">
                        <img 
                          src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${c.user}`}
                          alt={c.user}
                          className="h-full w-full rounded-full bg-brand-text/20"
                        />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-xs font-bold text-brand-text">{c.user}</span>
                          <span className="text-[10px] text-brand-muted">{c.time}</span>
                        </div>
                        <p className="text-sm text-brand-muted leading-relaxed">{c.text}</p>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="relative">
                  <textarea 
                    placeholder="Add a comment or tag team members..." 
                    className="w-full bg-brand-text/5 border border-brand-border rounded-2xl p-4 text-xs min-h-[100px] outline-none focus:border-brand-text/30 transition-colors placeholder:text-brand-muted"
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                  />
                  <button className="absolute bottom-4 right-4 p-2 bg-brand-text text-brand-bg rounded-lg transition-transform hover:scale-105">
                    <Send size={16} />
                  </button>
                </div>
              </div>
            </div>

            {/* Drawer Footer Actions */}
            <div className="p-6 border-t border-brand-border flex items-center justify-between bg-brand-text/[0.02]">
              <button className="flex items-center gap-2 text-xs font-bold text-red-500 hover:bg-red-500/10 px-4 py-2 rounded-xl transition-colors">
                <Trash2 size={16} />
                Delete
              </button>
              <div className="flex items-center gap-2">
                <button className="p-2.5 rounded-xl border border-brand-border text-brand-muted hover:text-brand-text transition-colors">
                  <Share2 size={18} />
                </button>
                <button className="px-6 py-2.5 bg-brand-text text-brand-bg rounded-xl font-bold text-xs uppercase tracking-widest transition-transform hover:scale-105 active:scale-95 shadow-lg shadow-brand-text/10">
                  Approve Entry
                </button>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

const TransactionsPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTx, setSelectedTx] = useState<Transaction | null>(null);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const handleRowClick = (tx: Transaction) => {
    setSelectedTx(tx);
    setIsDrawerOpen(true);
  };

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

      {/* Transactions Table & Mobile Feed Wrapper */}
      <div className="bg-brand-card border border-brand-border rounded-2xl overflow-hidden">
        {/* Desktop View Table */}
        <div className="hidden md:block overflow-x-auto no-scrollbar">
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
                <tr 
                  key={tx.id} 
                  onClick={() => handleRowClick(tx)}
                  className="group hover:bg-brand-text/5 transition-colors cursor-pointer"
                >
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

        {/* Mobile View Stacked List */}
        <div className="md:hidden divide-y divide-brand-border">
          {transactions.map((tx) => (
            <div 
              key={tx.id} 
              onClick={() => handleRowClick(tx)}
              className="p-4 flex items-center justify-between active:bg-brand-text/5 transition-colors cursor-pointer gap-3"
            >
              <div className="flex items-center gap-3 min-w-0">
                <div className={cn(
                  "h-10 w-10 rounded-xl flex items-center justify-center text-xs font-bold shrink-0",
                  tx.amount > 0 ? "bg-green-500/10 text-green-500" : "bg-red-500/10 text-red-500"
                )}>
                  {tx.amount > 0 ? <ArrowUpRight size={18} /> : <ArrowDownRight size={18} />}
                </div>
                <div className="min-w-0">
                  <h4 className="text-sm font-bold text-brand-text truncate">{tx.name}</h4>
                  <div className="flex flex-wrap items-center gap-x-2 gap-y-0.5 mt-1">
                    <span className="text-[10px] text-brand-muted font-mono">{tx.date}</span>
                    <span className="h-1 w-1 rounded-full bg-brand-border shrink-0" />
                    <span className="text-[10px] text-brand-muted truncate max-w-[100px]">{tx.account}</span>
                  </div>
                </div>
              </div>

              <div className="text-right shrink-0">
                <p className={cn(
                  "text-sm font-display font-black",
                  tx.amount > 0 ? "text-green-500" : "text-brand-text"
                )}>
                  {tx.amount > 0 ? '+' : ''}{tx.amount.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}
                </p>
                <span className={cn(
                  "inline-flex items-center gap-1 px-1.5 py-0.5 rounded-full text-[8px] font-black uppercase tracking-wider mt-1",
                  tx.status === 'completed' ? "bg-green-500/10 text-green-500" : "bg-yellow-500/10 text-yellow-500"
                )}>
                  {tx.status}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="p-4 sm:p-6 border-t border-brand-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs sm:text-sm text-brand-muted order-2 sm:order-1 text-center sm:text-left">
            Showing <span className="font-bold text-brand-text">1-10</span> of <span className="font-bold text-brand-text">154</span> transactions
          </p>
          <div className="flex items-center gap-2 order-1 sm:order-2 w-full sm:w-auto justify-between sm:justify-start">
            <button className="p-2 border border-brand-border rounded-lg text-brand-muted disabled:opacity-30 flex-1 sm:flex-none flex justify-center" disabled>
              <ChevronLeft size={18} />
            </button>
            <div className="hidden sm:flex items-center gap-1">
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
            <button className="p-2 border border-brand-border rounded-lg text-brand-muted hover:bg-brand-text/5 hover:text-brand-text flex-1 sm:flex-none flex justify-center">
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>

      {/* Transaction Details Drawer */}
      <TransactionDrawer 
        tx={selectedTx} 
        isOpen={isDrawerOpen} 
        onClose={() => setIsDrawerOpen(false)} 
      />
    </div>
  );
};

export default TransactionsPage;
