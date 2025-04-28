import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const TestResults = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { score, totalQuestions, answers, questions } = location.state || {};

  if (!location.state) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-slate-50 to-blue-100">
        <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full text-center">
          <h2 className="text-2xl font-bold text-slate-800 mb-4">No Test Results Found</h2>
          <p className="text-slate-600 mb-6">Please complete a test to view your results.</p>
          <button
            onClick={() => navigate('/quick-test')}
            className="bg-blue-500 text-white py-2 px-6 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Take a Test
          </button>
        </div>
      </div>
    );
  }

  const percentage = Math.round((score / totalQuestions) * 100);
  const correctAnswers = Object.entries(answers).filter(([questionId, answer]) => {
    const question = questions.find(q => q.id === parseInt(questionId));
    return question.correctAnswer === answer;
  }).length;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-slate-50 to-blue-100 py-8">
      <div className="max-w-4xl mx-auto px-4">
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-3xl font-bold text-slate-800 mb-6">Test Results</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-blue-50 p-6 rounded-lg">
              <p className="text-sm text-blue-600">Score</p>
              <p className="text-3xl font-bold text-blue-800">{score}/{totalQuestions}</p>
            </div>
            <div className="bg-green-50 p-6 rounded-lg">
              <p className="text-sm text-green-600">Percentage</p>
              <p className="text-3xl font-bold text-green-800">{percentage}%</p>
            </div>
            <div className="bg-purple-50 p-6 rounded-lg">
              <p className="text-sm text-purple-600">Correct Answers</p>
              <p className="text-3xl font-bold text-purple-800">{correctAnswers}</p>
            </div>
          </div>

          <div className="space-y-6">
            {questions.map((question, index) => {
              const userAnswer = answers[question.id];
              const isCorrect = userAnswer === question.correctAnswer;

              return (
                <div
                  key={question.id}
                  className={`p-6 rounded-lg border ${
                    isCorrect ? 'border-green-200 bg-green-50' : 'border-red-200 bg-red-50'
                  }`}
                >
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-lg font-medium text-slate-800">
                      Question {index + 1}
                    </h3>
                    <span
                      className={`px-3 py-1 rounded-full text-sm font-medium ${
                        isCorrect
                          ? 'bg-green-100 text-green-800'
                          : 'bg-red-100 text-red-800'
                      }`}
                    >
                      {isCorrect ? 'Correct' : 'Incorrect'}
                    </span>
                  </div>
                  <p className="text-slate-700 mb-4">{question.question}</p>
                  <div className="space-y-2">
                    {question.options.map((option, optionIndex) => (
                      <div
                        key={optionIndex}
                        className={`p-3 rounded-md ${
                          option === question.correctAnswer
                            ? 'bg-green-100 border border-green-200'
                            : option === userAnswer
                            ? 'bg-red-100 border border-red-200'
                            : 'bg-slate-50 border border-slate-200'
                        }`}
                      >
                        {option}
                      </div>
                    ))}
                  </div>
                  {!isCorrect && (
                    <div className="mt-4 p-4 bg-blue-50 rounded-md">
                      <p className="text-sm text-blue-800">
                        <span className="font-medium">Correct Answer:</span>{' '}
                        {question.correctAnswer}
                      </p>
                      {question.explanation && (
                        <p className="text-sm text-blue-800 mt-2">
                          <span className="font-medium">Explanation:</span>{' '}
                          {question.explanation}
                        </p>
                      )}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <div className="mt-8 flex justify-center space-x-4">
            <button
              onClick={() => navigate('/quick-test')}
              className="bg-blue-500 text-white py-2 px-6 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              Take Another Test
            </button>
            <button
              onClick={() => navigate('/')}
              className="bg-slate-500 text-white py-2 px-6 rounded-md hover:bg-slate-600 focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2"
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