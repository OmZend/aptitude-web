import React from 'react';
import Navbar from './components/layout/Navbar';
import Sidebar from './components/layout/Sidebar';
import Footer from './components/layout/Footer';
import HeroSection from './components/home/HeroSection';
import CategoriesGrid from './components/home/CategoriesGrid';
import StatsSection from './components/home/StatsSection';
import { categories, sidebarLinks } from './data/mockData';

const App = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <Navbar />
      
      <div className="container mx-auto px-4 py-6 flex flex-col md:flex-row gap-6">
        <Sidebar links={sidebarLinks} />
        
        <div className="flex-1">
          <HeroSection />
          <h2 className="text-xl font-semibold text-slate-800 mb-4">Popular Categories</h2>
          <CategoriesGrid categories={categories} />
          <StatsSection />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default App;