import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Sidebar from './components/layout/Sidebar';
import Footer from './components/layout/Footer';
import HeroSection from './components/home/HeroSection';
import CategoriesGrid from './components/home/CategoriesGrid';
import StatsSection from './components/home/StatsSection';
import { categories, sidebarLinks } from './data/mockData';
import GeneralAptitude from './pages/GeneralAptitude';
import Login from './pages/Login';
import Registration from './pages/Registration';
import Logical from './pages/Logical';
import Verbal from './pages/Verbal';
import GeneralKnowledge from './pages/GeneralKnowledge';
import Technical from './pages/Technical';
import Coding from './pages/Coding';

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
            <Route path="/logical-reasoning" element={<Logical/>} />
            <Route path="/verbal-reasoning" element={<Verbal/>} />
            <Route path="/general-knowledge" element={<GeneralKnowledge/>} />
            <Route path="/technical" element={<Technical/>
            } />
            <Route path="/coding" element={<Coding/>} />
          </Routes>
        </div>
      </div>
      <Footer />
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <AppLayout />
    </Router>
  );
};
export default App;