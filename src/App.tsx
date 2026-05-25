import { useState, useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ProductPage from './pages/ProductPage';
import LoginPage from './pages/LoginPage';
import PrivacyPage from './pages/PrivacyPage';
import FAQPage from './pages/FAQPage';
import DashboardLayout from './components/dashboard/DashboardLayout';
import DashboardHome from './pages/dashboard/DashboardHome';
import TransactionsPage from './pages/dashboard/TransactionsPage';
import AccountsPage from './pages/dashboard/AccountsPage';
import NotesPage from './pages/dashboard/NotesPage';
import BudgetsPage from './pages/dashboard/BudgetsPage';

export default function App() {
  const [theme, setTheme] = useState<'bright' | 'dark' | 'warm' | 'nordic'>('bright');

  useEffect(() => {
    // Remove all theme classes first
    document.documentElement.classList.remove('dark', 'theme-dark', 'theme-warm', 'theme-nordic');
    
    // Add active theme class
    if (theme === 'dark') {
      document.documentElement.classList.add('dark', 'theme-dark');
    } else if (theme === 'warm') {
      document.documentElement.classList.add('theme-warm');
    } else if (theme === 'nordic') {
      document.documentElement.classList.add('theme-nordic');
    }
  }, [theme]);

  // Wrapper components to ensure consistency if needed
  const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
    // In a real app, check auth here
    return <DashboardLayout>{children}</DashboardLayout>;
  };

  const isDarkMode = theme === 'dark';
  const toggleDarkMode = (val: boolean) => setTheme(val ? 'dark' : 'bright');

  return (
    <Routes>
      {/* Marketing Pages */}
      <Route path="/" element={<HomePage isDarkMode={isDarkMode} setIsDarkMode={toggleDarkMode} theme={theme} setTheme={setTheme} />} />
      <Route path="/product" element={<ProductPage isDarkMode={isDarkMode} setIsDarkMode={toggleDarkMode} theme={theme} setTheme={setTheme} />} />
      <Route path="/login" element={<LoginPage isDarkMode={isDarkMode} setIsDarkMode={toggleDarkMode} theme={theme} setTheme={setTheme} />} />
      <Route path="/privacy" element={<PrivacyPage isDarkMode={isDarkMode} setIsDarkMode={toggleDarkMode} theme={theme} setTheme={setTheme} />} />
      <Route path="/faq" element={<FAQPage isDarkMode={isDarkMode} setIsDarkMode={toggleDarkMode} theme={theme} setTheme={setTheme} />} />

      {/* Dashboard Application */}
      <Route path="/dashboard" element={<ProtectedRoute><DashboardHome /></ProtectedRoute>} />
      <Route path="/dashboard/transactions" element={<ProtectedRoute><TransactionsPage /></ProtectedRoute>} />
      <Route path="/dashboard/accounts" element={<ProtectedRoute><AccountsPage /></ProtectedRoute>} />
      <Route path="/dashboard/notes" element={<ProtectedRoute><NotesPage /></ProtectedRoute>} />
      <Route path="/dashboard/budgets" element={<ProtectedRoute><BudgetsPage /></ProtectedRoute>} />
      
      {/* Catch-all/Redirects */}
      <Route path="/dashboard/*" element={<Navigate to="/dashboard" replace />} />
    </Routes>
  );
}
