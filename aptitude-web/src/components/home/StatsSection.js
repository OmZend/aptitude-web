import React from 'react';

const StatsSection = () => {
  return (
    <div className="mt-8 bg-white rounded-lg shadow p-6">
      <h2 className="text-xl font-semibold text-slate-800 mb-4">Why Choose Us</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="text-center p-4">
          <div className="text-3xl font-bold text-blue-500 mb-2">10,000+</div>
          <div className="text-gray-600">Practice Questions</div>
        </div>
        <div className="text-center p-4">
          <div className="text-3xl font-bold text-blue-500 mb-2">500+</div>
          <div className="text-gray-600">Mock Tests</div>
        </div>
        <div className="text-center p-4">
          <div className="text-3xl font-bold text-blue-500 mb-2">1M+</div>
          <div className="text-gray-600">Happy Users</div>
        </div>
      </div>
    </div>
  );
};

export default StatsSection;