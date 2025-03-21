import React from 'react';

const Button = ({ children, primary, outline, className, ...props }) => {
  const baseClasses = "px-4 py-2 rounded font-medium";
  const styleClasses = primary
    ? "bg-blue-500 hover:bg-blue-600 text-white"
    : outline
    ? "border border-blue-500 text-blue-500 hover:bg-blue-50"
    : "bg-gray-200 text-gray-800 hover:bg-gray-300";
    
  return (
    <button className={`${baseClasses} ${styleClasses} ${className || ''}`} {...props}>
      {children}
    </button>
  );
};

export default Button;