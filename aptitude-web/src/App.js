import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import Navbar from './components/layout/Navbar';
import Sidebar from './components/layout/Sidebar';
import Footer from './components/layout/Footer';
import HeroSection from './components/home/HeroSection';
import CategoriesGrid from './components/home/CategoriesGrid';
import StatsSection from './components/home/StatsSection';
import { categories, sidebarLinks } from './data/mockData';

import Login from './pages/Login';
import Registration from './pages/Registration';
import QuickTest from './pages/QuickTest';
import TestResults from './pages/TestResults';
import Profile from './pages/Profile';

import GeneralAptitude from './pages/categories/GeneralAptitude';
import Logical from './pages/categories/Logical';
import Verbal from './pages/categories/Verbal';
import GeneralKnowledge from './pages/categories/GeneralKnowledge';
import Technical from './pages/categories/Technical';
import Coding from './pages/categories/Coding';

const AppLayout = () => {
  const location = useLocation();
  const isAuthPage = location.pathname === '/login' || location.pathname === '/register';

  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <Navbar />
      <div className={`container mx-auto px-4 py-6 flex flex-col ${!isAuthPage ? 'md:flex-row gap-6' : ''}`}>
        {!isAuthPage && <Sidebar links={sidebarLinks} />}
        <div className="flex-1">
          <Routes>
            <Route path="/" element={
              <>
                <HeroSection />
                <h2 className="text-xl font-semibold text-slate-800 mb-4">Popular Categories</h2>
                <CategoriesGrid categories={categories} />
                <StatsSection />
              </>
            } />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Registration />} />
            <Route path="/general-aptitude" element={<GeneralAptitude />} />
            <Route path="/quick-test" element={<QuickTest />} />
            <Route path="/test-results" element={<TestResults />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/logical-reasoning" element={<Logical />} />
            <Route path="/verbal-reasoning" element={<Verbal />} />
            <Route path="/general-knowledge" element={<GeneralKnowledge />} />
            <Route path="/technical" element={<Technical />} />
            <Route path="/coding" element={<Coding />} />
          </Routes>
        </div>
      </div>
      <Footer />
    </div>
  );
};

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <AppLayout />
      </Router>
    </AuthProvider>
  );
};

export default App;