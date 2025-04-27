import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const Sidebar = ({ links }) => {
  const navigate = useNavigate();
  const location = useLocation();
  
  return (
    <div className="md:w-64 bg-white rounded-lg shadow p-4">
      <h3 className="text-lg font-semibold text-slate-800 pb-3 border-b mb-3">Quick Links</h3>
      <ul>
        {links.map(item => (
          <li key={item.id} className="py-2 border-b border-gray-100">
            <a 
              href={item.link}
              className={`block hover:text-blue-500 ${location.pathname === item.link ? 'text-blue-500 font-medium' : 'text-gray-700'}`}
              onClick={(e) => {
                e.preventDefault();
                navigate(item.link);
              }}
            >
              {item.title}
            </a>
          </li>
        ))}
      </ul>
      
      <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-100">
        <h4 className="font-medium text-blue-800 mb-2">Today's Test</h4>
        <p className="text-sm text-blue-600 mb-3">Test your knowledge with our daily test challenge!</p>
        <button 
          className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded text-sm font-medium"
          onClick={() => navigate('/quick-test')}
        >
          Start Test
        </button>
      </div>
    </div>
  );
};

export default Sidebar;