import React, { useState } from 'react';
import { 
  Search, 
  Plus, 
  StickyNote, 
  Trash2, 
  Archive, 
  Star, 
  Edit3, 
  ChevronRight,
  Hash,
  Clock
} from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import { motion, AnimatePresence } from 'motion/react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const initialNotes = [
  { id: 1, title: 'Tax Strategy 2026', content: '## Key Objectives\n- Maximize R&D tax credits\n- Optimize international entity structure\n- Review new nexus rules for SaaS\n\n### Important Dates\n- Q2 Filing: June 15\n- Annual Audit: Sept 1', category: 'Finance', date: 'May 12, 2026', starred: true },
  { id: 2, title: 'AWS Cost Optimization', content: 'Server costs are spiked. Need to check:\n1. Unused S3 buckets\n2. Idle EC2 instances\n3. RDS reserve pricing options.', category: 'Expenses', date: 'May 10, 2026', starred: false },
  { id: 3, title: 'Investor Update Q1', content: 'Draft for the Q1 board meeting.\n\n- Revenue up 140% YoY\n- Burn rate decreased by 12%\n- New product "SoloAccount" launch planning.', category: 'Board', date: 'May 08, 2026', starred: true },
  { id: 4, title: 'Subscription Audit', content: 'Check if we still need:\n- Figma Enterprise (3 surplus seats)\n- Notion AI (evaluating value)\n- Gong.io (check usage)', category: 'Product', date: 'May 05, 2026', starred: false },
];

const NotesPage: React.FC = () => {
  const [notes, setNotes] = useState(initialNotes);
  const [activeNoteId, setActiveNoteId] = useState<number>(1);
  const activeNote = notes.find(n => n.id === activeNoteId) || notes[0];

  return (
    <div className="h-[calc(100vh-140px)] flex flex-col md:flex-row gap-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
      {/* Sidebar List */}
      <div className="w-full md:w-80 flex flex-col gap-4">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-display font-bold text-brand-text">Notes</h1>
          <button className="p-2 bg-brand-text text-brand-bg rounded-xl transition-transform hover:scale-105 active:scale-95 shadow-lg shadow-brand-text/10">
            <Plus size={18} />
          </button>
        </div>

        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-brand-muted" size={16} />
          <input 
            type="text" 
            placeholder="Search notes..." 
            className="w-full bg-brand-card border border-brand-border rounded-xl pl-10 pr-4 py-2 text-sm outline-none focus:border-brand-text/30"
          />
        </div>

        <div className="flex-1 overflow-y-auto no-scrollbar space-y-2 pr-1">
          {notes.map((note) => (
            <button
              key={note.id}
              onClick={() => setActiveNoteId(note.id)}
              className={cn(
                "w-full text-left p-4 rounded-xl transition-all group border",
                activeNoteId === note.id 
                  ? "bg-brand-text/10 border-brand-text/30 shadow-sm" 
                  : "bg-brand-card border-brand-border hover:border-brand-text/20"
              )}
            >
              <div className="flex items-center justify-between mb-1">
                <span className="text-[10px] font-bold uppercase tracking-widest text-brand-muted">{note.category}</span>
                {note.starred && <Star size={12} className="text-yellow-500 fill-yellow-500" />}
              </div>
              <h4 className={cn(
                "text-sm font-bold truncate mb-1",
                activeNoteId === note.id ? "text-brand-text" : "text-brand-text/80 group-hover:text-brand-text"
              )}>{note.title}</h4>
              <p className="text-xs text-brand-muted line-clamp-1">{note.content.replace(/[#*]/g, '')}</p>
            </button>
          ))}
        </div>
      </div>

      {/* Editor/Viewer */}
      <div className="flex-1 bg-brand-card border border-brand-border rounded-2xl flex flex-col overflow-hidden shadow-xl">
        <div className="p-4 border-b border-brand-border flex items-center justify-between bg-brand-text/[0.02]">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 text-brand-muted">
              <Clock size={14} />
              <span className="text-[10px] font-bold uppercase tracking-wider">Last Sync: {activeNote.date}</span>
            </div>
            <div className="h-4 w-[1px] bg-brand-border" />
            <div className="flex items-center gap-2 text-brand-muted">
              <Hash size={14} />
              <span className="text-[10px] font-bold uppercase tracking-wider">{activeNote.category}</span>
            </div>
          </div>
          <div className="flex items-center gap-1">
            <button className="p-2 rounded-lg hover:bg-brand-text/5 text-brand-muted hover:text-brand-text">
              <Star size={18} className={activeNote.starred ? "fill-yellow-500 text-yellow-500" : ""} />
            </button>
            <button className="p-2 rounded-lg hover:bg-brand-text/5 text-brand-muted hover:text-brand-text">
              <Archive size={18} />
            </button>
            <button className="p-2 rounded-lg hover:bg-brand-text/5 text-red-500">
              <Trash2 size={18} />
            </button>
            <div className="w-[1px] h-6 bg-brand-border mx-1" />
            <button className="flex items-center gap-2 px-4 py-2 bg-brand-text text-brand-bg rounded-xl text-xs font-bold transition-transform hover:scale-105 active:scale-95">
              <Edit3 size={14} />
              <span>Edit Note</span>
            </button>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto p-10 no-scrollbar">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl font-display font-black text-brand-text mb-8">{activeNote.title}</h1>
            <div className="prose prose-invert prose-brand max-w-none">
              <div className="markdown-body">
                <ReactMarkdown>{activeNote.content}</ReactMarkdown>
              </div>
            </div>
          </div>
        </div>

        {/* Note Footer */}
        <div className="p-4 border-t border-brand-border flex items-center justify-between text-[10px] uppercase font-bold tracking-widest text-brand-muted">
          <div className="flex gap-4">
            <span>{activeNote.content.split(' ').length} words</span>
            <span>{activeNote.content.length} characters</span>
          </div>
          <div>Markdown Supported</div>
        </div>
      </div>
    </div>
  );
};

export default NotesPage;
