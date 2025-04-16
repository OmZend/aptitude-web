import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

const Registration = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    // Basic validation
    if (!formData.name || !formData.email || !formData.password || !formData.confirmPassword) {
      setError('Please fill in all fields');
      setIsLoading(false);
      return;
    }

    if (!formData.email.includes('@')) {
      setError('Please enter a valid email address');
      setIsLoading(false);
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match');
      setIsLoading(false);
      return;
    }

    if (formData.password.length < 6) {
      setError('Password must be at least 6 characters long');
      setIsLoading(false);
      return;
    }

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      console.log('Registration attempt with:', formData);
      navigate('/login');
    } catch (err) {
      setError('An error occurred during registration');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-slate-50 to-blue-100 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiA0NGMwIDYuNjI3LTUuMzczIDEyLTEyIDEyUzEyIDUwLjYyNyAxMiA0NCAxNy4zNzMgMzIgMjQgMzJzMTIgNS4zNzMgMTIgMTJ6IiBmaWxsPSIjZWVlIi8+PC9nPjwvc3ZnPg==')] opacity-40"></div>
      
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
        {/* Even More Tech Symbols */}
        <span className="absolute text-2xl text-blue-500/30 animate-float animation-delay-2000" style={{ top: '8%', left: '60%' }}>📂</span>
        <span className="absolute text-2xl text-slate-500/30 animate-float animation-delay-3000" style={{ bottom: '8%', right: '60%' }}>💻</span>
        <span className="absolute text-2xl text-blue-400/30 animate-float animation-delay-4000" style={{ top: '65%', left: '65%' }}>🖨️</span>
        <span className="absolute text-2xl text-slate-400/30 animate-float animation-delay-1000" style={{ bottom: '60%', right: '65%' }}>📲</span>
        <span className="absolute text-2xl text-blue-300/30 animate-float animation-delay-2500" style={{ top: '12%', right: '70%' }}>🎮</span>
        <span className="absolute text-2xl text-slate-500/30 animate-float animation-delay-3500" style={{ bottom: '12%', left: '70%' }}>🎯</span>
        <span className="absolute text-2xl text-blue-400/30 animate-float animation-delay-4500" style={{ top: '70%', right: '75%' }}>📈</span>
        <span className="absolute text-2xl text-slate-400/30 animate-float animation-delay-1500" style={{ bottom: '65%', left: '75%' }}>🔗</span>
      </div>

      <div className="bg-white/90 backdrop-blur-sm p-8 rounded-lg shadow-lg w-full max-w-md transform transition-all duration-500 ease-in-out animate-fadeIn relative border-0">
        <div className="text-center mb-8 animate-slideDown">
          <h2 className="text-3xl font-bold text-slate-800 mb-2">Create Account</h2>
          <p className="text-slate-600">Join us to start your learning journey</p>
        </div>
        
        {error && (
          <div className="bg-red-50 text-red-500 p-3 rounded-md mb-4 animate-shake">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="transform transition-all duration-500 hover:translate-x-1">
            <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1">
              Full Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 bg-white/70 backdrop-blur-sm"
              placeholder="Enter your full name"
            />
          </div>

          <div className="transform transition-all duration-500 hover:translate-x-1">
            <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 bg-white/70 backdrop-blur-sm"
              placeholder="Enter your email"
            />
          </div>

          <div className="transform transition-all duration-500 hover:translate-x-1">
            <label htmlFor="password" className="block text-sm font-medium text-slate-700 mb-1">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 bg-white/70 backdrop-blur-sm"
              placeholder="Create a password"
            />
          </div>

          <div className="transform transition-all duration-500 hover:translate-x-1">
            <label htmlFor="confirmPassword" className="block text-sm font-medium text-slate-700 mb-1">
              Confirm Password
            </label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 bg-white/70 backdrop-blur-sm"
              placeholder="Confirm your password"
            />
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className={`w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transform transition-all duration-300 hover:scale-[1.02] ${
              isLoading ? 'opacity-75 cursor-not-allowed' : ''
            }`}
          >
            {isLoading ? (
              <span className="flex items-center justify-center">
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Creating account...
              </span>
            ) : (
              'Create Account'
            )}
          </button>
        </form>

        <div className="mt-6 text-center transform transition-all duration-500 hover:translate-y-[-2px]">
          <p className="text-sm text-slate-600">
            Already have an account?{' '}
            <Link to="/login" className="text-blue-500 hover:text-blue-600 font-medium transition-colors duration-200">
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Registration; 