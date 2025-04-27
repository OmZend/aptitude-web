import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { validateEmail, validatePassword } from '../utils/validation';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [errors, setErrors] = useState({});
  const [loginError, setLoginError] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    
    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (!validatePassword(formData.password)) {
      newErrors.password = 'Password does not meet requirements';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoginError('');
    
    if (!validateForm()) {
      return;
    }

    try {
      await login(formData.email, formData.password);
      navigate('/');
    } catch (error) {
      setLoginError(error.message || 'Failed to login');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-slate-50 to-blue-100 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiA0NGMwIDYuNjI3LTUuMzczIDEyLTEyIDEyUzEyIDUwLjYyNyAxyIDQ0IDE3LjM3MyAzMiAyNCAzMnMxMiA1LjM3MyAxMiAxMnoiIGZpbGw9IiNlZWUiLz48L2c+PC9zdmc+')] opacity-40"></div>
      
      {/* Animated Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-40 animate-blob"></div>
        <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-slate-200 rounded-full mix-blend-multiply filter blur-xl opacity-40 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-64 h-64 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-40 animate-blob animation-delay-4000"></div>
      </div>

      {/* Floating Tech Symbols */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <span className="absolute text-2xl text-blue-500/30 animate-float" style={{ top: '15%', left: '10%' }}>⌨️</span>
        <span className="absolute text-2xl text-slate-500/30 animate-float animation-delay-1000" style={{ top: '25%', right: '15%' }}>🖥️</span>
        <span className="absolute text-2xl text-blue-400/30 animate-float animation-delay-2000" style={{ bottom: '30%', left: '20%' }}>📱</span>
        <span className="absolute text-2xl text-slate-400/30 animate-float animation-delay-3000" style={{ top: '40%', right: '25%' }}>💻</span>
        <span className="absolute text-2xl text-blue-300/30 animate-float animation-delay-4000" style={{ bottom: '20%', right: '10%' }}>🔌</span>
        <span className="absolute text-2xl text-slate-500/30 animate-float" style={{ top: '35%', left: '30%' }}>🖱️</span>
        <span className="absolute text-2xl text-blue-500/30 animate-float animation-delay-2000" style={{ bottom: '35%', right: '30%' }}>⚡</span>
        <span className="absolute text-2xl text-slate-400/30 animate-float animation-delay-3000" style={{ top: '20%', left: '40%' }}>💾</span>
        <span className="absolute text-2xl text-blue-400/30 animate-float animation-delay-1000" style={{ bottom: '25%', left: '35%' }}>📊</span>
        <span className="absolute text-2xl text-slate-500/30 animate-float animation-delay-4000" style={{ top: '30%', right: '40%' }}>🔍</span>
        <span className="absolute text-2xl text-blue-300/30 animate-float animation-delay-2000" style={{ top: '45%', left: '15%' }}>⚙️</span>
        <span className="absolute text-2xl text-slate-400/30 animate-float animation-delay-3000" style={{ bottom: '40%', right: '20%' }}>🔒</span>
        {/* Additional Tech Symbols */}
        <span className="absolute text-2xl text-blue-500/30 animate-float animation-delay-1500" style={{ top: '10%', left: '45%' }}>📡</span>
        <span className="absolute text-2xl text-slate-500/30 animate-float animation-delay-2500" style={{ bottom: '15%', right: '45%' }}>🌐</span>
        <span className="absolute text-2xl text-blue-400/30 animate-float animation-delay-3500" style={{ top: '50%', left: '5%' }}>🔋</span>
        <span className="absolute text-2xl text-slate-400/30 animate-float animation-delay-4500" style={{ bottom: '45%', right: '5%' }}>💡</span>
        <span className="absolute text-2xl text-blue-300/30 animate-float animation-delay-1500" style={{ top: '5%', right: '35%' }}>📶</span>
        <span className="absolute text-2xl text-slate-500/30 animate-float animation-delay-2500" style={{ bottom: '5%', left: '25%' }}>🔄</span>
        <span className="absolute text-2xl text-blue-400/30 animate-float animation-delay-3500" style={{ top: '55%', right: '15%' }}>⌘</span>
        <span className="absolute text-2xl text-slate-400/30 animate-float animation-delay-4500" style={{ bottom: '50%', left: '45%' }}>⌥</span>
        <span className="absolute text-2xl text-blue-500/30 animate-float animation-delay-1500" style={{ top: '15%', right: '50%' }}>⇧</span>
        <span className="absolute text-2xl text-slate-500/30 animate-float animation-delay-2500" style={{ bottom: '10%', left: '50%' }}>⌃</span>
        <span className="absolute text-2xl text-blue-400/30 animate-float animation-delay-3500" style={{ top: '60%', left: '55%' }}>⎋</span>
        <span className="absolute text-2xl text-slate-400/30 animate-float animation-delay-4500" style={{ bottom: '55%', right: '55%' }}>⏎</span>
      </div>

      <div className="bg-white/90 backdrop-blur-sm p-8 rounded-lg shadow-lg w-full max-w-md transform transition-all duration-500 ease-in-out animate-fadeIn relative border-0">
        {/* Animated Icons */}
        <div className="absolute -top-16 left-1/2 transform -translate-x-1/2 flex items-center space-x-8">
          {/* Book Icon */}
          <div className="animate-bookOpen">
            <svg className="w-8 h-8 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
          </div>
          
          {/* Light Bulb Icon */}
          <div className="animate-bulbLight">
            <svg className="w-8 h-8 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
            </svg>
          </div>
          
          {/* Gear Icon */}
          <div className="animate-gearSpin">
            <svg className="w-8 h-8 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          </div>
        </div>

        <div className="text-center mb-8 animate-slideDown">
          <h2 className="text-3xl font-bold text-slate-800 mb-2">Login</h2>
          <p className="text-slate-600">Welcome back! Please enter your details</p>
        </div>
        
        {loginError && (
          <div className="bg-red-50 text-red-500 p-3 rounded-md mb-4 animate-shake">
            {loginError}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={`w-full px-3 py-2 border ${errors.email ? 'border-red-500' : 'border-slate-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 bg-white/70 backdrop-blur-sm`}
              placeholder="Enter your email"
            />
            {errors.email && (
              <p className="mt-1 text-sm text-red-500">{errors.email}</p>
            )}
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-slate-700 mb-1">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className={`w-full px-3 py-2 border ${errors.password ? 'border-red-500' : 'border-slate-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 bg-white/70 backdrop-blur-sm`}
              placeholder="Enter your password"
            />
            {errors.password && (
              <p className="mt-1 text-sm text-red-500">{errors.password}</p>
            )}
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                type="checkbox"
                id="remember"
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-slate-300 rounded"
              />
              <label htmlFor="remember" className="ml-2 block text-sm text-slate-700">
                Remember me
              </label>
            </div>
            <Link to="/forgot-password" className="text-sm text-blue-600 hover:text-blue-500">
              Forgot password?
            </Link>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transform transition-all duration-300 hover:scale-[1.02]"
          >
            Login
          </button>
        </form>

        <div className="mt-6 text-center">
          <p className="text-sm text-slate-600">
            Don't have an account?{' '}
            <Link to="/register" className="text-blue-600 hover:text-blue-500">
              Register
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login; 