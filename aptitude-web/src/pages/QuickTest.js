import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const QuickTest = () => {
  const navigate = useNavigate();
  const { isAuthenticated } = useAuth();
  const [showConfirmation, setShowConfirmation] = useState(true);
  const [testStarted, setTestStarted] = useState(false);
  const [timeLeft, setTimeLeft] = useState(30 * 60); // 30 minutes in seconds
  const [questions, setQuestions] = useState([
    {
      id: 1,
      question: "What is the capital of France?",
      options: ["London", "Berlin", "Paris", "Madrid"],
      correctAnswer: "Paris"
    },
    {
      id: 2,
      question: "Which planet is known as the Red Planet?",
      options: ["Venus", "Mars", "Jupiter", "Saturn"],
      correctAnswer: "Mars"
    },
    {
      id: 3,
      question: "If a train travels 300 km in 5 hours, what is its average speed?",
      options: ["50 km/h", "60 km/h", "70 km/h", "80 km/h"],
      correctAnswer: "60 km/h"
    },
    {
      id: 4,
      question: "What is the next number in the sequence: 2, 4, 8, 16, ___?",
      options: ["24", "28", "32", "36"],
      correctAnswer: "32"
    },
    {
      id: 5,
      question: "If 20% of a number is 50, what is the number?",
      options: ["200", "250", "300", "350"],
      correctAnswer: "250"
    }
  ]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState({});

  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/login');
    }
  }, [isAuthenticated, navigate]);

  useEffect(() => {
    let timer;
    if (testStarted && timeLeft > 0) {
      timer = setInterval(() => {
        setTimeLeft(prevTime => prevTime - 1);
      }, 1000);
    } else if (timeLeft === 0) {
      handleTestComplete();
    }
    return () => clearInterval(timer);
  }, [testStarted, timeLeft]);

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

  const handleStartTest = () => {
    setShowConfirmation(false);
    setTestStarted(true);
  };

  const handleAnswerSelect = (questionId, answer) => {
    setAnswers(prev => ({
      ...prev,
      [questionId]: answer
    }));
  };

  const handleNextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(prev => prev + 1);
    } else {
      handleTestComplete();
    }
  };

  const handleTestComplete = () => {
    // Calculate score
    const score = Object.entries(answers).reduce((acc, [questionId, answer]) => {
      const question = questions.find(q => q.id === parseInt(questionId));
      return acc + (question.correctAnswer === answer ? 1 : 0);
    }, 0);

    // Navigate to results page with score
    navigate('/test-results', { state: { score, totalQuestions: questions.length } });
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

      <div className="bg-white/90 backdrop-blur-sm p-8 rounded-lg shadow-lg w-full max-w-2xl transform transition-all duration-500 ease-in-out animate-fadeIn relative border-0">
        {showConfirmation ? (
          <div className="text-center animate-slideDown">
            <h2 className="text-3xl font-bold text-slate-800 mb-4">Quick Test</h2>
            <div className="mb-6">
              <p className="text-slate-600 mb-2">Test Duration: 30 minutes</p>
              <p className="text-slate-600 mb-2">Number of Questions: {questions.length}</p>
              <p className="text-slate-600">Instructions:</p>
              <ul className="text-left list-disc list-inside text-slate-600 mt-2">
                <li>You cannot go back to previous questions</li>
                <li>Timer will start as soon as you begin the test</li>
                <li>Test will automatically submit when time is up</li>
              </ul>
            </div>
            <button
              onClick={handleStartTest}
              className="bg-blue-500 text-white py-2 px-6 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transform transition-all duration-300 hover:scale-[1.02]"
            >
              Start Test
            </button>
          </div>
        ) : (
          <div className="animate-fadeIn">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-slate-800">Question {currentQuestion + 1} of {questions.length}</h2>
              <div className="text-xl font-semibold text-slate-700">
                Time Remaining: {formatTime(timeLeft)}
              </div>
            </div>

            <div className="mb-8">
              <h3 className="text-xl font-medium text-slate-700 mb-4">
                {questions[currentQuestion].question}
              </h3>
              <div className="space-y-3">
                {questions[currentQuestion].options.map((option, index) => (
                  <label
                    key={index}
                    className={`block p-4 rounded-md cursor-pointer transition-all duration-200 ${
                      answers[questions[currentQuestion].id] === option
                        ? 'bg-blue-100 border-2 border-blue-500'
                        : 'bg-slate-50 hover:bg-slate-100 border border-slate-200'
                    }`}
                  >
                    <input
                      type="radio"
                      name={`question-${questions[currentQuestion].id}`}
                      value={option}
                      checked={answers[questions[currentQuestion].id] === option}
                      onChange={() => handleAnswerSelect(questions[currentQuestion].id, option)}
                      className="mr-3"
                    />
                    {option}
                  </label>
                ))}
              </div>
            </div>

            <div className="flex justify-end">
              <button
                onClick={handleNextQuestion}
                disabled={!answers[questions[currentQuestion].id]}
                className={`bg-blue-500 text-white py-2 px-6 rounded-md ${
                  !answers[questions[currentQuestion].id]
                    ? 'opacity-50 cursor-not-allowed'
                    : 'hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transform transition-all duration-300 hover:scale-[1.02]'
                }`}
              >
                {currentQuestion === questions.length - 1 ? 'Submit' : 'Next Question'}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default QuickTest; 