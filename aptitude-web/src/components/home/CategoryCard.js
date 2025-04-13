import React from 'react';
import { Link } from 'react-router-dom';

const CategoryCard = ({ category }) => {
  return (
    <Link 
      to={`/questions/${category.id}`}
      className="block bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
      rel="noopener noreferrer"
    >
      <div className="h-36 bg-gradient-to-r from-blue-500 to-blue-600 flex items-center justify-center text-white">
        <span className="text-5xl">{category.icon}</span>
      </div>
      <div className="p-5">
        <h3 className="text-lg font-semibold text-slate-800 mb-2">{category.title}</h3>
        <p className="text-sm text-gray-600 mb-4">{category.description}</p>
        <div className="inline-flex items-center text-blue-500 hover:text-blue-700 font-medium">
          Start Practice
          <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </div>
    </Link>
  );
};

export default CategoryCard;