import React, { useState, useEffect } from "react";
import axios from "axios";
const Logical = () => {
  const [questions, setQuestions] = useState([]);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [showExplanations, setShowExplanations] = useState({});
  const [currentPage, setCurrentPage] = useState(1);
  const questionsPerPage = 5;

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const response = await axios.get('http://localhost:8080/api/questions/category/6');
        const allQuestions = response.data;  // Assuming response is an array of questions

        // Map API response to match the required structure
        const formattedQuestions = allQuestions.map((q, index) => ({
          id: q.questionId,  // Assuming the question has an 'id' field
          question: q.questionText,  // Assuming the question text is in 'questionText'
          options: [
            { id: 'A', text: q.optionA },
            { id: 'B', text: q.optionB },
            { id: 'C', text: q.optionC },
            { id: 'D', text: q.optionD },
          ],
          correctAnswer: q.correctOption,  // Assuming the correct option is in 'correctOption'
          explanation: q.explanation,  // Assuming the explanation is in 'explanation'
        }));

        setQuestions(formattedQuestions);
      } catch (error) {
        console.error('Error fetching questions:', error);
      }
    };

    fetchQuestions();
  }, []);

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
      <h1 className="text-2xl font-bold text-slate-800 mb-6">Logical Questions</h1>
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

      {/* Pagination */}
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
        
        {[...Array(totalPages)].map((_, index) => (
          <button
            key={index}
            onClick={() => paginate(index + 1)}
            className={`px-4 py-2 rounded ${
              currentPage === index + 1 ? 'bg-blue-500 text-white' : 'bg-white text-slate-700 hover:bg-slate-50 hover:text-slate-900'
            } border border-slate-200`}
          >
            {index + 1}
          </button>
        ))}

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


export default Logical;
