import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';

const Profile = () => {
  const { user, logout } = useAuth();
  const [formData, setFormData] = useState({
    name: user?.name || '',
    email: user?.email || '',
    currentPassword: '',
    newPassword: '',
    confirmPassword: ''
  });
  const [isEditing, setIsEditing] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    if (formData.newPassword && formData.newPassword !== formData.confirmPassword) {
      setError('New passwords do not match');
      return;
    }

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // For demo purposes, just update the local storage
      const updatedUser = {
        ...user,
        name: formData.name,
        email: formData.email
      };
      localStorage.setItem('user', JSON.stringify(updatedUser));
      
      setSuccess('Profile updated successfully');
      setIsEditing(false);
    } catch (err) {
      setError('Failed to update profile');
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

      <div className="bg-white/90 backdrop-blur-sm p-8 rounded-lg shadow-lg w-full max-w-2xl transform transition-all duration-500 ease-in-out animate-fadeIn relative border-0">
        <div className="text-center mb-8">
          <div className="w-24 h-24 bg-blue-100 rounded-full mx-auto mb-4 flex items-center justify-center">
            <span className="text-3xl text-blue-500 font-bold">
              {user?.name?.charAt(0).toUpperCase() || 'U'}
            </span>
          </div>
          <h2 className="text-3xl font-bold text-slate-800 mb-2">Profile</h2>
          <p className="text-slate-600">Manage your account settings</p>
        </div>

        {error && (
          <div className="bg-red-50 text-red-500 p-3 rounded-md mb-4 animate-shake">
            {error}
          </div>
        )}

        {success && (
          <div className="bg-green-50 text-green-500 p-3 rounded-md mb-4">
            {success}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              disabled={!isEditing}
              className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 bg-white/70 backdrop-blur-sm disabled:bg-slate-100"
            />
          </div>

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
              disabled={!isEditing}
              className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 bg-white/70 backdrop-blur-sm disabled:bg-slate-100"
            />
          </div>

          {isEditing && (
            <>
              <div>
                <label htmlFor="currentPassword" className="block text-sm font-medium text-slate-700 mb-1">
                  Current Password
                </label>
                <input
                  type="password"
                  id="currentPassword"
                  name="currentPassword"
                  value={formData.currentPassword}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 bg-white/70 backdrop-blur-sm"
                />
              </div>

              <div>
                <label htmlFor="newPassword" className="block text-sm font-medium text-slate-700 mb-1">
                  New Password
                </label>
                <input
                  type="password"
                  id="newPassword"
                  name="newPassword"
                  value={formData.newPassword}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 bg-white/70 backdrop-blur-sm"
                />
              </div>

              <div>
                <label htmlFor="confirmPassword" className="block text-sm font-medium text-slate-700 mb-1">
                  Confirm New Password
                </label>
                <input
                  type="password"
                  id="confirmPassword"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 bg-white/70 backdrop-blur-sm"
                />
              </div>
            </>
          )}

          <div className="flex justify-between items-center">
            <button
              type="button"
              onClick={() => setIsEditing(!isEditing)}
              className="bg-slate-500 text-white py-2 px-4 rounded-md hover:bg-slate-600 focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2 transform transition-all duration-300 hover:scale-[1.02]"
            >
              {isEditing ? 'Cancel' : 'Edit Profile'}
            </button>

            {isEditing && (
              <button
                type="submit"
                className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transform transition-all duration-300 hover:scale-[1.02]"
              >
                Save Changes
              </button>
            )}
          </div>
        </form>

        <div className="mt-8 pt-6 border-t border-slate-200">
          <button
            onClick={logout}
            className="w-full bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 transform transition-all duration-300 hover:scale-[1.02]"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile; 