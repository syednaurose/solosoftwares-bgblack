import { useState, useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ProductPage from './pages/ProductPage';
import LoginPage from './pages/LoginPage';
import PrivacyPage from './pages/PrivacyPage';
import DashboardLayout from './components/dashboard/DashboardLayout';
import DashboardHome from './pages/dashboard/DashboardHome';
import TransactionsPage from './pages/dashboard/TransactionsPage';
import AccountsPage from './pages/dashboard/AccountsPage';
import NotesPage from './pages/dashboard/NotesPage';
import BudgetsPage from './pages/dashboard/BudgetsPage';

export default function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  // Wrapper components to ensure consistency if needed
  const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
    // In a real app, check auth here
    return <DashboardLayout>{children}</DashboardLayout>;
  };

  return (
    <Routes>
      {/* Marketing Pages */}
      <Route path="/" element={<HomePage isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />} />
      <Route path="/product" element={<ProductPage isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />} />
      <Route path="/login" element={<LoginPage isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />} />
      <Route path="/privacy" element={<PrivacyPage isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />} />

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
