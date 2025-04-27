import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const TestResults = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { score, totalQuestions } = location.state || { score: 0, totalQuestions: 0 };
  const percentage = Math.round((score / totalQuestions) * 100);

  const getPerformanceMessage = () => {
    if (percentage >= 90) return "Excellent! You've mastered the test!";
    if (percentage >= 70) return "Great job! You've performed very well!";
    if (percentage >= 50) return "Good effort! Keep practicing!";
    return "Keep learning! You'll improve with practice!";
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

      <div className="bg-white/90 backdrop-blur-sm p-8 rounded-lg shadow-lg w-full max-w-md transform transition-all duration-500 ease-in-out animate-fadeIn relative border-0">
        <div className="text-center animate-slideDown">
          <h2 className="text-3xl font-bold text-slate-800 mb-4">Test Results</h2>
          
          <div className="mb-8">
            <div className="text-6xl font-bold text-blue-500 mb-2">{percentage}%</div>
            <div className="text-xl text-slate-600 mb-4">{getPerformanceMessage()}</div>
            
            <div className="bg-slate-50 rounded-lg p-4 mb-6">
              <div className="flex justify-between items-center mb-2">
                <span className="text-slate-700">Correct Answers:</span>
                <span className="text-green-500 font-semibold">{score}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-slate-700">Total Questions:</span>
                <span className="text-slate-700 font-semibold">{totalQuestions}</span>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <button
              onClick={() => navigate('/quick-test')}
              className="w-full bg-blue-500 text-white py-2 px-6 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transform transition-all duration-300 hover:scale-[1.02]"
            >
              Try Again
            </button>
            <button
              onClick={() => navigate('/')}
              className="w-full bg-slate-200 text-slate-700 py-2 px-6 rounded-md hover:bg-slate-300 focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2 transform transition-all duration-300 hover:scale-[1.02]"
            >
              Back to Home
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestResults; 