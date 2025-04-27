import React from 'react';
import { useAuth } from '../../context/AuthContext';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  const { isAuthenticated, user } = useAuth();

  return (
    <div className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg shadow-lg p-8 mb-8 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiA0NGMwIDYuNjI3LTUuMzczIDEyLTEyIDEyUzEyIDUwLjYyNyAxMiA0NCAxNy4zNzMgMzIgMjQgMzJzMTIgNS4zNzMgMTIgMTJ6IiBmaWxsPSIjZWVlIi8+PC9nPjwvc3ZnPg==')] opacity-20"></div>
      
      {/* Animated Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-64 h-64 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative z-10">
        {isAuthenticated ? (
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg">
                <span className="text-2xl font-bold text-blue-600">
                  {user?.name?.charAt(0).toUpperCase() || 'U'}
                </span>
              </div>
              <div>
                <h1 className="text-2xl font-bold text-white mb-1">Welcome back, {user?.name}!</h1>
                <p className="text-blue-100">Ready to continue your learning journey?</p>
              </div>
            </div>
            <Link
              to="/profile"
              className="bg-white text-blue-600 px-4 py-2 rounded-md hover:bg-blue-50 transition-colors duration-200 flex items-center space-x-2"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              <span>View Profile</span>
            </Link>
          </div>
        ) : (
          <div>
            <h1 className="text-3xl font-bold text-white mb-4">Welcome to Aptitude Test</h1>
            <p className="text-blue-100 mb-6">Test your knowledge and improve your skills with our comprehensive aptitude tests.</p>
            <div className="flex space-x-4">
              <Link
                to="/login"
                className="bg-white text-blue-600 px-6 py-2 rounded-md hover:bg-blue-50 transition-colors duration-200"
              >
                Login
              </Link>
              <Link
                to="/register"
                className="bg-blue-400 text-white px-6 py-2 rounded-md hover:bg-blue-500 transition-colors duration-200"
              >
                Register
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default HeroSection;