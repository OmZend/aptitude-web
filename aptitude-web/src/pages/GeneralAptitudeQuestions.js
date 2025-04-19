import React, { useState } from 'react';

const GeneralAptitudeQuestions = () => {
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [showExplanations, setShowExplanations] = useState({});
  const [currentPage, setCurrentPage] = useState(1);
  const questionsPerPage = 5;

  const questions = [
    {
      id: 1,
      question: "A train running at the speed of 60 km/hr crosses a pole in 9 seconds. What is the length of the train?",
      options: [
        { id: 'A', text: '120 metres' },
        { id: 'B', text: '180 metres' },
        { id: 'C', text: '324 metres' },
        { id: 'D', text: '150 metres' }
      ],
      correctAnswer: 'D',
      explanation: "Speed = 60 km/hr = 16.67 m/s\nTime taken = 9 seconds\nLength of train = Speed × Time\n= 16.67 × 9 = 150 metres"
    },
    {
      id: 2,
      question: "A train 125 m long passes a man, running at 5 km/hr in the same direction in which the train is going, in 10 seconds. The speed of the train is:",
      options: [
        { id: 'A', text: '45 km/hr' },
        { id: 'B', text: '50 km/hr' },
        { id: 'C', text: '54 km/hr' },
        { id: 'D', text: '55 km/hr' }
      ],
      correctAnswer: 'B',
      explanation: "Let train's speed be x km/hr\nRelative speed = Train speed - Man's speed = (x - 5) km/hr\nDistance covered = Length of train = 125 m\nTime taken = 10 seconds\n(x - 5) × 5/18 = 125/10\nx = 50 km/hr"
    },
    {
      id: 3,
      question: "The length of the bridge, which a train 130 metres long and travelling at 45 km/hr can cross in 30 seconds, is:",
      options: [
        { id: 'A', text: '200 m' },
        { id: 'B', text: '225 m' },
        { id: 'C', text: '245 m' },
        { id: 'D', text: '250 m' }
      ],
      correctAnswer: 'D',
      explanation: "Speed = 45 km/hr = 12.5 m/s\nTime = 30 seconds\nTotal distance = Speed × Time\n= 12.5 × 30 = 375 m\nBridge length = Total distance - Train length\n= 375 - 130 = 250 m"
    },
    {
      id: 4,
      question: "A train travels past a platform 100 meters long in 5 seconds. If the train is traveling at 72 km/hr, what is the length of the train?",
      options: [
        { id: 'A', text: '80 meters' },
        { id: 'B', text: '90 meters' },
        { id: 'C', text: '100 meters' },
        { id: 'D', text: '120 meters' }
      ],
      correctAnswer: 'C',
      explanation: "Speed = 72 km/hr = 20 m/s\nTime = 5 seconds\nTotal distance = Speed × Time = Distance covered\nPlatform length + Train length = 20 × 5\n100 + Train length = 100\nTrain length = 100 meters"
    },
    {
      id: 5,
      question: "Two trains running in opposite directions cross a man standing on the platform in 27 seconds and 17 seconds respectively and they cross each other in 23 seconds. The ratio of their speeds is:",
      options: [
        { id: 'A', text: '1:3' },
        { id: 'B', text: '3:2' },
        { id: 'C', text: '3:4' },
        { id: 'D', text: '4:3' }
      ],
      correctAnswer: 'B',
      explanation: "Let the speeds be x and y m/s\nLength of first train = 27x meters\nLength of second train = 17y meters\nWhen trains cross each other: (27x + 17y)/(x + y) = 23\n27x + 17y = 23x + 23y\n4x = 6y\nx:y = 3:2"
    },
    {
      id: 6,
      question: "A train 110 meters long is running at a speed of 60 kmph. In what time will it pass a man who is running at 6 kmph in the same direction?",
      options: [
        { id: 'A', text: '10 seconds' },
        { id: 'B', text: '12 seconds' },
        { id: 'C', text: '15 seconds' },
        { id: 'D', text: '18 seconds' }
      ],
      correctAnswer: 'C',
      explanation: "Relative speed = Train speed - Man's speed\n= 60 - 6 = 54 kmph = 15 m/s\nTime = Distance/Speed = 110/15 = 15 seconds"
    },
    {
      id: 7,
      question: "A train 200 meters long is running at 60 kmph. How long will it take to pass a platform 200 meters long?",
      options: [
        { id: 'A', text: '24 seconds' },
        { id: 'B', text: '22 seconds' },
        { id: 'C', text: '20 seconds' },
        { id: 'D', text: '18 seconds' }
      ],
      correctAnswer: 'A',
      explanation: "Speed = 60 kmph = 16.67 m/s\nTotal distance = Train length + Platform length = 400 m\nTime = Distance/Speed = 400/16.67 = 24 seconds"
    },
    {
      id: 8,
      question: "Two trains of equal length are running on parallel tracks in the same direction at 46 km/hr and 36 km/hr. The faster train passes the slower train in 36 seconds. The length of each train is:",
      options: [
        { id: 'A', text: '50 meters' },
        { id: 'B', text: '100 meters' },
        { id: 'C', text: '150 meters' },
        { id: 'D', text: '200 meters' }
      ],
      correctAnswer: 'C',
      explanation: "Relative speed = 46 - 36 = 10 km/hr = 2.78 m/s\nDistance = Length of both trains = 2L (where L is length of each train)\nTime = 36 seconds\n2L = 2.78 × 36\nL = 150 meters"
    },
    {
      id: 9,
      question: "A train running at 54 kmph takes 20 seconds to cross a platform. The length of the platform is:",
      options: [
        { id: 'A', text: '150 meters' },
        { id: 'B', text: '200 meters' },
        { id: 'C', text: '250 meters' },
        { id: 'D', text: '300 meters' }
      ],
      correctAnswer: 'D',
      explanation: "Speed = 54 kmph = 15 m/s\nTime = 20 seconds\nDistance = Speed × Time = 15 × 20 = 300 meters"
    },
    {
      id: 10,
      question: "Two trains start at the same time from stations A and B and proceed towards each other at 45 kmph and 35 kmph respectively. When they meet, one train has travelled 150 km more than the other. The distance between A and B is:",
      options: [
        { id: 'A', text: '900 km' },
        { id: 'B', text: '800 km' },
        { id: 'C', text: '700 km' },
        { id: 'D', text: '600 km' }
      ],
      correctAnswer: 'B',
      explanation: "Let time taken be t hours\nDistance covered by first train = 45t km\nDistance covered by second train = 35t km\nDifference = 150 km\n45t - 35t = 150\nt = 15 hours\nTotal distance = (45 + 35) × 15 = 800 km"
    },
    {
      id: 11,
      question: "A train 150 meters long is running at 68 kmph. How long does it take to cross a bridge 850 meters long?",
      options: [
        { id: 'A', text: '45 seconds' },
        { id: 'B', text: '50 seconds' },
        { id: 'C', text: '52.5 seconds' },
        { id: 'D', text: '54 seconds' }
      ],
      correctAnswer: 'C',
      explanation: "Speed = 68 kmph = 18.89 m/s\nTotal distance = Train length + Bridge length = 1000 m\nTime = Distance/Speed = 1000/18.89 = 52.5 seconds"
    },
    {
      id: 12,
      question: "Two trains of lengths 100m and 200m are running on parallel tracks at speeds of 54 kmph and 72 kmph in opposite directions. How long will they take to cross each other?",
      options: [
        { id: 'A', text: '6 seconds' },
        { id: 'B', text: '8 seconds' },
        { id: 'C', text: '10 seconds' },
        { id: 'D', text: '12 seconds' }
      ],
      correctAnswer: 'C',
      explanation: "Total length = 100 + 200 = 300 m\nRelative speed = 54 + 72 = 126 kmph = 35 m/s\nTime = Distance/Speed = 300/35 = 10 seconds"
    },
    {
      id: 13,
      question: "A train covers a distance of 12 km in 10 minutes. If it takes 6 seconds to pass a telegraph post, the length of the train is:",
      options: [
        { id: 'A', text: '120 meters' },
        { id: 'B', text: '100 meters' },
        { id: 'C', text: '80 meters' },
        { id: 'D', text: '60 meters' }
      ],
      correctAnswer: 'A',
      explanation: "Speed = 12 km in 10 min = 72 kmph = 20 m/s\nTime to pass post = 6 seconds\nLength = Speed × Time = 20 × 6 = 120 meters"
    },
    {
      id: 14,
      question: "A train passes a station platform in 36 seconds and a man standing on the platform in 20 seconds. If the length of the platform is 240m, what is the length of the train?",
      options: [
        { id: 'A', text: '160 meters' },
        { id: 'B', text: '180 meters' },
        { id: 'C', text: '200 meters' },
        { id: 'D', text: '220 meters' }
      ],
      correctAnswer: 'C',
      explanation: "Let train length be L meters\nSpeed = (L + 240)/36 = L/20\n20(L + 240) = 36L\n20L + 4800 = 36L\n4800 = 16L\nL = 200 meters"
    },
    {
      id: 15,
      question: "Two trains are moving in opposite directions at 60 kmph and 90 kmph. Their lengths are 1.1 km and 0.9 km respectively. How long will they take to cross each other?",
      options: [
        { id: 'A', text: '1 minute' },
        { id: 'B', text: '2 minutes' },
        { id: 'C', text: '3 minutes' },
        { id: 'D', text: '4 minutes' }
      ],
      correctAnswer: 'A',
      explanation: "Total length = 1.1 + 0.9 = 2 km\nRelative speed = 60 + 90 = 150 kmph\nTime = Distance/Speed = 2/150 × 60 = 1 minute"
    },
    {
      id: 16,
      question: "A train 240 meters long passes a pole in 24 seconds. How long will it take to pass a platform 650 meters long?",
      options: [
        { id: 'A', text: '89 seconds' },
        { id: 'B', text: '85 seconds' },
        { id: 'C', text: '82 seconds' },
        { id: 'D', text: '79 seconds' }
      ],
      correctAnswer: 'A',
      explanation: "Speed = 240/24 = 10 m/s\nTotal distance to cover platform = 240 + 650 = 890 m\nTime = 890/10 = 89 seconds"
    },
    {
      id: 17,
      question: "A train travelling at 48 kmph completely crosses a 240 meters long platform in 36 seconds. What is the length of the train?",
      options: [
        { id: 'A', text: '360 meters' },
        { id: 'B', text: '320 meters' },
        { id: 'C', text: '280 meters' },
        { id: 'D', text: '240 meters' }
      ],
      correctAnswer: 'D',
      explanation: "Speed = 48 kmph = 13.33 m/s\nLet train length be L meters\nTime = (L + 240)/13.33 = 36\nL + 240 = 480\nL = 240 meters"
    },
    {
      id: 18,
      question: "Two trains of equal length take 10 seconds and 15 seconds respectively to cross a telegraph post. If their speeds are in the ratio 3:2, the ratio of their lengths is:",
      options: [
        { id: 'A', text: '2:3' },
        { id: 'B', text: '3:2' },
        { id: 'C', text: '1:1' },
        { id: 'D', text: '4:3' }
      ],
      correctAnswer: 'C',
      explanation: "Let lengths be L1 and L2\nFor first train: L1/v1 = 10\nFor second train: L2/v2 = 15\nv1:v2 = 3:2\nTherefore, L1:L2 = 1:1"
    },
    {
      id: 19,
      question: "A train 180 meters long is running at 90 kmph. How long does it take to cross a bridge which is twice the length of the train?",
      options: [
        { id: 'A', text: '12 seconds' },
        { id: 'B', text: '14 seconds' },
        { id: 'C', text: '16 seconds' },
        { id: 'D', text: '18 seconds' }
      ],
      correctAnswer: 'B',
      explanation: "Bridge length = 2 × 180 = 360 m\nTotal distance = 180 + 360 = 540 m\nSpeed = 90 kmph = 25 m/s\nTime = 540/25 = 14 seconds"
    },
    {
      id: 20,
      question: "Two trains start simultaneously from A and B towards each other. After passing each other, they take 4 hours and 9 hours to reach B and A respectively. If both trains are moving at constant speeds, the ratio of their speeds is:",
      options: [
        { id: 'A', text: '3:2' },
        { id: 'B', text: '2:3' },
        { id: 'C', text: '4:3' },
        { id: 'D', text: '3:4' }
      ],
      correctAnswer: 'D',
      explanation: "Let distance between A and B be D\nLet speeds be x and y\nD/x + D/y = 13 (total time)\nD/x = 9 (time to reach A)\nD/y = 4 (time to reach B)\nTherefore, x:y = 3:4"
    }
  ];

  const handleAnswerSelect = (questionId, answerId) => {
    setSelectedAnswers(prev => ({
      ...prev,
      [questionId]: answerId
    }));
    setShowExplanations(prev => ({
      ...prev,
      [questionId]: true
    }));
  };

  const getAnswerStatus = (question, selectedAnswer) => {
    if (!selectedAnswer) return null;
    return selectedAnswer === question.correctAnswer ? 'correct' : 'wrong';
  };

  // Calculate pagination
  const totalPages = Math.ceil(questions.length / questionsPerPage);
  const indexOfLastQuestion = currentPage * questionsPerPage;
  const indexOfFirstQuestion = indexOfLastQuestion - questionsPerPage;
  const currentQuestions = questions.slice(indexOfFirstQuestion, indexOfLastQuestion);

  const paginate = (pageNumber) => {
    if (pageNumber > 0 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
      window.scrollTo(0, 0);
    }
  };

  return (
    <div className="max-w-4xl mx-auto py-8 px-4">
      <h1 className="text-2xl font-bold text-slate-800 mb-6">General Aptitude Questions</h1>
      <div className="space-y-8">
        {currentQuestions.map((question) => {
          const answerStatus = getAnswerStatus(question, selectedAnswers[question.id]);
          
          return (
            <div key={question.id} className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-lg font-semibold text-slate-800 mb-4">
                {question.id}. {question.question}
              </h2>
              <div className="space-y-3">
                {question.options.map((option) => (
                  <div 
                    key={option.id}
                    className={`p-3 rounded-lg border cursor-pointer transition-all duration-200 ${
                      selectedAnswers[question.id] === option.id
                        ? option.id === question.correctAnswer
                          ? 'border-green-500 bg-green-50'
                          : 'border-red-500 bg-red-50'
                        : 'border-gray-200 hover:border-blue-300'
                    }`}
                    onClick={() => handleAnswerSelect(question.id, option.id)}
                  >
                    <label className="flex items-start cursor-pointer">
                      <div className="flex items-center h-5">
                        <input
                          type="radio"
                          name={`question-${question.id}`}
                          checked={selectedAnswers[question.id] === option.id}
                          onChange={() => handleAnswerSelect(question.id, option.id)}
                          className="h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                        />
                      </div>
                      <div className="ml-3">
                        <span className="text-gray-700">{option.id}. {option.text}</span>
                      </div>
                    </label>
                  </div>
                ))}
              </div>
              
              {showExplanations[question.id] && (
                <div className={`mt-4 p-4 rounded-lg ${
                  answerStatus === 'correct' 
                    ? 'bg-green-50 border border-green-200' 
                    : 'bg-red-50 border border-red-200'
                }`}>
                  <div className="flex items-center mb-2">
                    {answerStatus === 'correct' ? (
                      <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                    ) : (
                      <svg className="w-5 h-5 text-red-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    )}
                    <span className={`font-medium ${
                      answerStatus === 'correct' ? 'text-green-700' : 'text-red-700'
                    }`}>
                      {answerStatus === 'correct' ? 'Correct!' : 'Incorrect'}
                    </span>
                  </div>
                  <div className="mt-2">
                    <h4 className="font-medium text-gray-700 mb-1">Explanation:</h4>
                    <p className="text-gray-600 whitespace-pre-line">{question.explanation}</p>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Pagination with updated colors */}
      <div className="mt-8 flex justify-center items-center space-x-2">
        <button
          onClick={() => paginate(currentPage - 1)}
          disabled={currentPage === 1}
          className={`px-4 py-2 rounded ${
            currentPage === 1
              ? 'bg-slate-100 text-slate-400 cursor-not-allowed'
              : 'bg-white text-slate-700 hover:bg-slate-50 hover:text-slate-900'
          } border border-slate-200`}
        >
          Prev
        </button>
        
        <button
          onClick={() => paginate(1)}
          className={`px-4 py-2 rounded ${
            currentPage === 1 ? 'bg-blue-500 text-white' : 'bg-white text-slate-700 hover:bg-slate-50 hover:text-slate-900'
          } border border-slate-200`}
        >
          1
        </button>

        {totalPages > 2 && (
          <button
            onClick={() => paginate(2)}
            className={`px-4 py-2 rounded ${
              currentPage === 2 ? 'bg-blue-500 text-white' : 'bg-white text-slate-700 hover:bg-slate-50 hover:text-slate-900'
            } border border-slate-200`}
          >
            2
          </button>
        )}

        {currentPage > 3 && <span className="px-2 text-slate-600">...</span>}

        {currentPage > 2 && currentPage < totalPages - 1 && (
          <button
            onClick={() => paginate(currentPage)}
            className="px-4 py-2 rounded bg-blue-500 text-white border border-slate-200"
          >
            {currentPage}
          </button>
        )}

        {currentPage < totalPages - 2 && <span className="px-2 text-slate-600">...</span>}

        {totalPages > 1 && (
          <button
            onClick={() => paginate(totalPages)}
            className={`px-4 py-2 rounded ${
              currentPage === totalPages ? 'bg-blue-500 text-white' : 'bg-white text-slate-700 hover:bg-slate-50 hover:text-slate-900'
            } border border-slate-200`}
          >
            {totalPages}
          </button>
        )}

        <button
          onClick={() => paginate(currentPage + 1)}
          disabled={currentPage === totalPages}
          className={`px-4 py-2 rounded ${
            currentPage === totalPages
              ? 'bg-slate-100 text-slate-400 cursor-not-allowed'
              : 'bg-white text-slate-700 hover:bg-slate-50 hover:text-slate-900'
          } border border-slate-200`}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default GeneralAptitudeQuestions; 