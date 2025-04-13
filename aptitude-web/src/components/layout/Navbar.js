import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-slate-800 text-white px-6 py-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-xl font-bold">A.O.R.A.</div>
        <div className="hidden md:flex space-x-6">
          <a href="#" className="hover:bg-slate-700 px-3 py-2 rounded">Home</a>
          <a href="#" className="hover:bg-slate-700 px-3 py-2 rounded">Practice Tests</a>
          
          <a href="#" className="hover:bg-slate-700 px-3 py-2 rounded">Login</a>
        </div>
        <button className="md:hidden text-xl">☰</button>
      </div>
    </nav>
  );
};

export default Navbar;