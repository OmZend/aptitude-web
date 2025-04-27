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
import GeneralAptitudeQuestions from './pages/GeneralAptitudeQuestions';
import Login from './pages/Login';
import Registration from './pages/Registration';
import QuickTest from './pages/QuickTest';
import TestResults from './pages/TestResults';
import Profile from './pages/Profile';

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
            <Route path="/general-aptitude" element={<GeneralAptitudeQuestions />} />
            <Route path="/quick-test" element={<QuickTest />} />
            <Route path="/test-results" element={<TestResults />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/logical-reasoning" element={
              <div className="p-8">
                <h1 className="text-2xl font-bold text-slate-800 mb-6">Logical Reasoning</h1>
                <p className="text-gray-600">Coming soon! We're working on adding logical reasoning questions.</p>
              </div>
            } />
            <Route path="/verbal-reasoning" element={
              <div className="p-8">
                <h1 className="text-2xl font-bold text-slate-800 mb-6">Verbal Reasoning</h1>
                <p className="text-gray-600">Coming soon! We're working on adding verbal reasoning questions.</p>
              </div>
            } />
            <Route path="/general-knowledge" element={
              <div className="p-8">
                <h1 className="text-2xl font-bold text-slate-800 mb-6">General Knowledge</h1>
                <p className="text-gray-600">Coming soon! We're working on adding general knowledge questions.</p>
              </div>
            } />
            <Route path="/programming" element={
              <div className="p-8">
                <h1 className="text-2xl font-bold text-slate-800 mb-6">Programming</h1>
                <p className="text-gray-600">Coming soon! We're working on adding programming questions.</p>
              </div>
            } />
            <Route path="/coding" element={
              <div className="p-8">
                <h1 className="text-2xl font-bold text-slate-800 mb-6">Coding</h1>
                <p className="text-gray-600">Coming soon! We're working on adding coding questions.</p>
              </div>
            } />
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