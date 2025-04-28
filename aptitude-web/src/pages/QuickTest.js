import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import axios from 'axios';
import ConfirmationDialog from '../components/common/ConfirmationDialog';
import useTestSessionExit from '../hooks/useTestSessionExit';

const QuickTest = () => {
  const navigate = useNavigate();
  const { isAuthenticated } = useAuth();
  const [showConfirmation, setShowConfirmation] = useState(true);
  const [testStarted, setTestStarted] = useState(false);
  const [timeLeft, setTimeLeft] = useState(30 * 60); // 30 minutes in seconds
  const [showTimeWarning, setShowTimeWarning] = useState(false);
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState({});
  const [isTestActive, setIsTestActive] = useState(true);

  const {
    showDialog,
    handleConfirm,
    handleCancel,
    targetPath
  } = useTestSessionExit(isTestActive);

  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/login');
    }
  }, [isAuthenticated, navigate]);

  // Fetch questions when starting test
  const fetchQuestions = async () => {
    setLoading(true);
    try {
      const response = await axios.get('http://localhost:8080/api/questions/quicktest');
      
      // Transform backend data to match the expected question format
      const formattedQuestions = response.data.map(q => ({
        id: q.questionId,
        question: q.questionText,
        options: [q.optionA, q.optionB, q.optionC, q.optionD],
        correctAnswer: q[`option${q.correctOption.toUpperCase()}`],
        explanation: q.explanation
      }));
      
      setQuestions(formattedQuestions);
      setLoading(false);
    } catch (err) {
      console.error("Error fetching questions:", err);
      setError("Failed to load questions. Please try again.");
      setLoading(false);
    }
  };

  useEffect(() => {
    let timer;
    if (testStarted && timeLeft > 0) {
      timer = setInterval(() => {
        setTimeLeft(prevTime => {
          const newTime = prevTime - 1;
          if (newTime === 60) { // 1 minute left
            setShowTimeWarning(true);
          }
          return newTime;
        });
      }, 1000);
    } else if (timeLeft === 0) {
      handleTestComplete();
    }
    return () => clearInterval(timer);
  }, [testStarted, timeLeft]);

  useEffect(() => {
    if (testStarted) {
      // Enter fullscreen mode
      const element = document.documentElement;
      if (element.requestFullscreen) {
        element.requestFullscreen();
      } else if (element.webkitRequestFullscreen) {
        element.webkitRequestFullscreen();
      } else if (element.msRequestFullscreen) {
        element.msRequestFullscreen();
      }

      // Prevent right-click
      const handleContextMenu = (e) => {
        e.preventDefault();
      };
      document.addEventListener('contextmenu', handleContextMenu);

      return () => {
        document.removeEventListener('contextmenu', handleContextMenu);
        // Exit fullscreen when component unmounts
        if (document.exitFullscreen) {
          document.exitFullscreen();
        } else if (document.webkitExitFullscreen) {
          document.webkitExitFullscreen();
        } else if (document.msExitFullscreen) {
          document.msExitFullscreen();
        }
      };
    }
  }, [testStarted]);

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

  const handleStartTest = async () => {
    await fetchQuestions();
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
    navigate('/test-results', { 
      state: { 
        score, 
        totalQuestions: questions.length,
        answers: answers,
        questions: questions
      } 
    });
  };

  const calculateScore = () => {
    return Object.entries(answers).reduce((acc, [questionId, answer]) => {
      const question = questions.find(q => q.id === parseInt(questionId));
      return acc + (question.correctAnswer === answer ? 1 : 0);
    }, 0);
  };

  const handleSubmit = () => {
    setIsTestActive(false);
    const score = calculateScore();
    navigate('/test-results', { 
      state: { 
        score, 
        totalQuestions: questions.length,
        answers,
        questions
      } 
    });
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-slate-50 to-blue-100">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-slate-700 text-lg">Loading questions...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-slate-50 to-blue-100">
        <div className="bg-white/90 backdrop-blur-sm p-8 rounded-lg shadow-lg max-w-md">
          <h2 className="text-2xl font-bold text-red-600 mb-4">Error</h2>
          <p className="text-slate-700 mb-4">{error}</p>
          <button 
            onClick={() => window.location.reload()}
            className="bg-blue-500 text-white py-2 px-6 rounded-md hover:bg-blue-600"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

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

      <div className="test-container bg-white/90 backdrop-blur-sm p-8 rounded-lg shadow-lg w-full max-w-2xl transform transition-all duration-500 ease-in-out animate-fadeIn relative border-0">
        {showConfirmation ? (
          <div className="text-center animate-slideDown">
            <h2 className="text-3xl font-bold text-slate-800 mb-4">Quick Test</h2>
            <div className="mb-6">
              <p className="text-slate-600 mb-2">Test Duration: 30 minutes</p>
              <p className="text-slate-600 mb-2">Number of Questions: 60 (10 from each category)</p>
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
          questions.length > 0 && (
            <div className="animate-fadeIn">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-slate-800">Question {currentQuestion + 1} of {questions.length}</h2>
                <div className={`text-xl font-semibold ${
                  timeLeft <= 60 ? 'text-red-600 animate-pulse' : 'text-slate-700'
                }`}>
                  Time Remaining: {formatTime(timeLeft)}
                </div>
              </div>

              {showTimeWarning && (
                <div className="bg-red-50 border border-red-200 text-red-800 p-4 rounded-md mb-6 animate-bounce">
                  <p className="font-medium">Warning: Less than 1 minute remaining!</p>
                  <p className="text-sm mt-1">Please complete your answers quickly.</p>
                </div>
              )}

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
          )
        )}
      </div>

      <ConfirmationDialog
        isOpen={showDialog}
        onClose={handleCancel}
        onConfirm={handleConfirm}
        title="Leave Test Session?"
        message="Are you sure you want to leave the test? Your progress will be lost."
      />
    </div>
  );
};

export default QuickTest; 