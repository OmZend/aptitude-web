import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';

const QuestionsPage = () => {
  const { id } = useParams();
  const [selectedOptions, setSelectedOptions] = useState({});
  const [showAnswers, setShowAnswers] = useState({});
  const [currentSet, setCurrentSet] = useState(0);
  const questionsPerSet = 10;

  // Hardcoded questions data - expanded to 20 questions
  const allQuestions = [
    {
      id: 1,
      question: "What is the next number in the sequence: 2, 4, 8, 16, ___?",
      options: ["24", "32", "30", "28"],
      correctAnswer: 1,
      explanation: "Each number is multiplied by 2 to get the next number."
    },
    {
      id: 2,
      question: "If all Zorks are Yorks and all Yorks are Xorks, then:",
      options: [
        "All Zorks are Xorks",
        "All Xorks are Zorks",
        "Some Yorks are not Zorks",
        "All Xorks are Yorks"
      ],
      correctAnswer: 0,
      explanation: "This is a classic syllogism where if A is B and B is C, then A is C."
    },
    {
      id: 3,
      question: "Complete the analogy: Book is to Reading as Fork is to ___",
      options: ["Drawing", "Writing", "Eating", "Sleeping"],
      correctAnswer: 2,
      explanation: "A fork is a tool used for eating, just as a book is a tool used for reading."
    },
    {
      id: 4,
      question: "What is the square root of 144?",
      options: ["10", "11", "12", "13"],
      correctAnswer: 2,
      explanation: "12 × 12 = 144, so the square root of 144 is 12."
    },
    {
      id: 5,
      question: "Which word is the odd one out?",
      options: ["Apple", "Banana", "Carrot", "Orange"],
      correctAnswer: 2,
      explanation: "Carrot is a vegetable, while the others are fruits."
    },
    {
      id: 6,
      question: "If 3x + 7 = 22, what is x?",
      options: ["3", "4", "5", "6"],
      correctAnswer: 2,
      explanation: "3x = 22 - 7 = 15, so x = 15/3 = 5."
    },
    {
      id: 7,
      question: "What is the capital of France?",
      options: ["London", "Berlin", "Paris", "Madrid"],
      correctAnswer: 2,
      explanation: "Paris is the capital city of France."
    },
    {
      id: 8,
      question: "Which planet is known as the Red Planet?",
      options: ["Venus", "Mars", "Jupiter", "Saturn"],
      correctAnswer: 1,
      explanation: "Mars is often called the Red Planet due to its reddish appearance."
    },
    {
      id: 9,
      question: "What is 25% of 200?",
      options: ["25", "50", "75", "100"],
      correctAnswer: 1,
      explanation: "25% of 200 is (25/100) × 200 = 50."
    },
    {
      id: 10,
      question: "Which of these is a prime number?",
      options: ["4", "6", "7", "8"],
      correctAnswer: 2,
      explanation: "7 is a prime number as it has only two divisors: 1 and itself."
    },
    {
      id: 11,
      question: "What is the value of π (pi) to two decimal places?",
      options: ["3.12", "3.14", "3.16", "3.18"],
      correctAnswer: 1,
      explanation: "The value of π is approximately 3.14159, so to two decimal places it's 3.14."
    },
    {
      id: 12,
      question: "Which of these is not a programming language?",
      options: ["Python", "Java", "HTML", "C++"],
      correctAnswer: 2,
      explanation: "HTML is a markup language, not a programming language."
    },
    {
      id: 13,
      question: "What is the chemical symbol for gold?",
      options: ["Ag", "Au", "Fe", "Cu"],
      correctAnswer: 1,
      explanation: "The chemical symbol for gold is Au, from the Latin word 'aurum'."
    },
    {
      id: 14,
      question: "Which of these is a mammal?",
      options: ["Shark", "Dolphin", "Octopus", "Starfish"],
      correctAnswer: 1,
      explanation: "Dolphins are mammals, while the others are not."
    },
    {
      id: 15,
      question: "What is the largest planet in our solar system?",
      options: ["Earth", "Saturn", "Jupiter", "Neptune"],
      correctAnswer: 2,
      explanation: "Jupiter is the largest planet in our solar system."
    },
    {
      id: 16,
      question: "Which of these is a primary color?",
      options: ["Green", "Purple", "Red", "Orange"],
      correctAnswer: 2,
      explanation: "Red is a primary color, along with blue and yellow."
    },
    {
      id: 17,
      question: "What is the capital of Japan?",
      options: ["Beijing", "Seoul", "Tokyo", "Bangkok"],
      correctAnswer: 2,
      explanation: "Tokyo is the capital city of Japan."
    },
    {
      id: 18,
      question: "Which of these is not a continent?",
      options: ["Africa", "Europe", "Antarctica", "Greenland"],
      correctAnswer: 3,
      explanation: "Greenland is an island, not a continent."
    },
    {
      id: 19,
      question: "What is the chemical symbol for oxygen?",
      options: ["O", "Ox", "O2", "Oxg"],
      correctAnswer: 0,
      explanation: "The chemical symbol for oxygen is O."
    },
    {
      id: 20,
      question: "Which of these is a renewable energy source?",
      options: ["Coal", "Natural Gas", "Solar", "Oil"],
      correctAnswer: 2,
      explanation: "Solar energy is a renewable energy source."
    }
  ];

  const questions = allQuestions.slice(
    currentSet * questionsPerSet,
    (currentSet + 1) * questionsPerSet
  );

  const totalSets = Math.ceil(allQuestions.length / questionsPerSet);

  const handleNextSet = () => {
    if (currentSet < totalSets - 1) {
      setCurrentSet(prev => prev + 1);
    }
  };

  const handlePreviousSet = () => {
    if (currentSet > 0) {
      setCurrentSet(prev => prev - 1);
    }
  };

  const handleOptionSelect = (questionId, optionIndex) => {
    setSelectedOptions(prev => ({
      ...prev,
      [questionId]: optionIndex
    }));
    setShowAnswers(prev => ({
      ...prev,
      [questionId]: true
    }));
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="max-w-4xl mx-auto p-6">
        <div className="bg-white rounded-lg shadow-lg p-6">
          <div className="flex justify-between items-center mb-6">
            <div>
              <div className="flex items-center gap-4">
                <Link 
                  to="/"
                  className="text-blue-500 hover:text-blue-700"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                  </svg>
                </Link>
                <h2 className="text-2xl font-bold text-gray-800">Practice Questions</h2>
              </div>
            </div>
            <span className="text-sm text-gray-500">Category: {id}</span>
          </div>

          <div className="space-y-8 max-h-[calc(100vh-250px)] overflow-y-auto pr-4">
            {questions.map((q) => (
              <div key={q.id} className="border-b border-gray-200 pb-6 last:border-0">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-semibold">
                    {q.id}
                  </div>
                  <div className="flex-1">
                    <p className="text-lg text-gray-800 mb-4">{q.question}</p>
                    
                    <div className="space-y-2">
                      {q.options.map((option, index) => (
                        <button
                          key={index}
                          onClick={() => handleOptionSelect(q.id, index)}
                          className={`w-full p-3 rounded-lg border-2 text-left transition-colors
                            ${selectedOptions[q.id] === index 
                              ? showAnswers[q.id] && index === q.correctAnswer
                                ? 'border-green-500 bg-green-50'
                                : showAnswers[q.id] && index !== q.correctAnswer
                                ? 'border-red-500 bg-red-50'
                                : 'border-blue-500 bg-blue-50'
                              : 'border-gray-200 hover:border-blue-300'
                            }`}
                        >
                          {option}
                        </button>
                      ))}
                    </div>

                    {showAnswers[q.id] && (
                      <div className="mt-4 p-4 bg-gray-50 rounded-lg">
                        <h3 className="font-semibold text-gray-800 mb-2">Explanation:</h3>
                        <p className="text-gray-600">{q.explanation}</p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 flex justify-between items-center">
            <button
              onClick={handlePreviousSet}
              disabled={currentSet === 0}
              className="flex items-center gap-2 px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Previous Set
            </button>
            <span className="text-sm text-gray-500">
              Set {currentSet + 1} of {totalSets}
            </span>
            <button
              onClick={handleNextSet}
              disabled={currentSet === totalSets - 1}
              className="flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              Next Set
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuestionsPage; 