import React from 'react';
import { useNavigate } from 'react-router-dom';

const CategoryCard = ({ category }) => {
  const navigate = useNavigate();

  const handleCardClick = () => {
    if (category.title === 'General Aptitude') {
      navigate('/general-aptitude');
    }
    if (category.title === 'General Knowledge') {
      navigate('/general-knowledge');
    }
    if (category.title === 'Logical Reasoning') {
      navigate('/logical-reasoning');
    } 
    if (category.title === 'Technical') {
      navigate('/technical');
    }
    if (category.title === 'Verbal Reasoning') {
      navigate('/verbal-reasoning');
    }
    if (category.title === 'Coding') {
      navigate('/coding');
    }
    
  };
  

  return (
    <div 
      onClick={handleCardClick}
      className="bg-white rounded-lg shadow overflow-hidden hover:shadow-lg transition duration-300 transform hover:-translate-y-1 h-72 cursor-pointer group"
    >
      <div className="h-48 flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-500 to-blue-600 relative">
        <div className="opacity-70 group-hover:opacity-100 transition-opacity duration-300">
          {category.icon}
        </div>
        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-300" />
      </div>
      <div className="p-6">
        <h3 className="font-semibold text-slate-800 mb-3 group-hover:text-blue-600 transition-colors duration-300">
          {category.title}
        </h3>
        <p className="text-sm text-gray-600 mb-4">{category.description}</p>
        <div className="flex items-center text-blue-500 group-hover:text-blue-700 text-sm font-medium">
          <span>Explore Questions</span>
          <svg 
            className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform duration-300" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default CategoryCard;