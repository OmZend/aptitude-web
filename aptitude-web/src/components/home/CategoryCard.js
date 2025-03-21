import React from 'react';

const CategoryCard = ({ category }) => {
  return (
    <div className="bg-white rounded-lg shadow overflow-hidden hover:shadow-md transition duration-200 transform hover:-translate-y-1">
      <div className="h-32 bg-gradient-to-r from-blue-500 to-blue-600 flex items-center justify-center text-white text-4xl">
        {category.icon}
      </div>
      <div className="p-4">
        <h3 className="font-semibold text-slate-800 mb-2">{category.title}</h3>
        <p className="text-sm text-gray-600 mb-3">{category.description}</p>
        <a href="#" className="text-blue-500 hover:text-blue-700 text-sm font-medium">
          Explore Questions →
        </a>
      </div>
    </div>
  );
};

export default CategoryCard;