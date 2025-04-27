import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

const Navbar = () => {
  const location = useLocation();
  const { isAuthenticated } = useAuth();

  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="text-xl font-bold text-blue-600">
        
          </Link>
          
          <div className="flex items-center space-x-4">
            <Link
              to="/"
              className={`text-slate-600 hover:text-blue-600 transition-colors duration-200 ${
                location.pathname === '/' ? 'text-blue-600 font-medium' : ''
              }`}
            >
              Home
            </Link>
            <Link
              to="/login"
              className={`text-slate-600 hover:text-blue-600 transition-colors duration-200 ${
                location.pathname === '/login' ? 'text-blue-600 font-medium' : ''
              }`}
            >
              Login
            </Link>
            <Link
              to="/register"
              className={`text-slate-600 hover:text-blue-600 transition-colors duration-200 ${
                location.pathname === '/register' ? 'text-blue-600 font-medium' : ''
              }`}
            >
              Register
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;