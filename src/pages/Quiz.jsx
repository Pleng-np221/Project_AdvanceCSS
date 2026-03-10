import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Quiz = () => {
  const quizData = [
    {
      id: 1,
      question: "ข้อใดคือความหมายของ UX?",
      options: ["User Experience", "User Interface", "Universal Exchange", "Unit Execution"],
    },
    {
      id: 2,
      question: "React ถูกพัฒนาโดยบริษัทใด?",
      options: ["Google", "Facebook (Meta)", "Microsoft", "Apple"],
    },
    {
      id: 3,
      question: "Tailwind CSS คืออะไร?",
      options: ["Database", "JavaScript Framework", "Utility-first CSS Framework", "Web Browser"],
    },
    {
      id: 4,
      question: "คำสั่งใดใช้สำหรับสร้างโปรเจค Vite เบื้องต้น?",
      options: ["npm create vite@latest", "npx create-react-app", "npm start", "npm build"],
    },
    {
      id: 5,
      question: "สัญลักษณ์ 🧙‍♀️ ใน WitchQuiz คืออะไร?",
      options: ["นางฟ้า", "แม่มด", "เจ้าหญิง", "นางเงือก"],
    },
  ];

  const [selectedAnswers, setSelectedAnswers] = useState({});

  const handleSelectAnswer = (questionId, optionIndex) => {
    setSelectedAnswers((prev) => ({
      ...prev,
      [questionId]: optionIndex,
    }));
  };

  const letters = ['A', 'B', 'C', 'D'];

  return (
    <div className="page-purple pt-4 pb-12">
      
      <div className="container  flex flex-col">
        
        <div className="section-padding mb-4">
          <Link to="/" className="flex items-center gap-2 hover:text-purple-200 transition-colors w-fit font-bold text-lg md:text-xl">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            back
          </Link>
        </div>

        <div className="w-full px-5 md:px-8 flex flex-col gap-6">
          
          {quizData.map((item, index) => (
            <div key={item.id} className="bg-white rounded-[24px] p-5 md:p-8 shadow-lg text-black w-full">
              
              <div className="bg-[#f0f0f4] rounded-[16px] p-4 md:p-5 mb-5 w-full">
                <h2 className="font-bold text-lg md:text-xl text-gray-800">
                  {index + 1}. {item.question}
                </h2>
              </div>

              <div className="flex flex-col gap-3 w-full">
                {item.options.map((option, optIndex) => {
                  const isSelected = selectedAnswers[item.id] === optIndex;

                  return (
                    <button
                      key={optIndex}
                      onClick={() => handleSelectAnswer(item.id, optIndex)}
                      className={`flex items-center gap-4 text-left w-full p-3 rounded-2xl transition-all duration-300 group focus:outline-none border-2
                        ${isSelected 
                          ? 'bg-yellow-50 border-yellow-100 shadow-sm' 
                          : 'bg-white border-gray-100 hover:bg-yellow-50 hover:border-yellow-50'
                        }`}
                    >
                      <div 
                        className={`w-10 h-10 md:w-11 md:h-11 rounded-full flex items-center justify-center font-bold text-base transition-all duration-300 shrink-0 border-2 border-[#fbbf24]
                          ${isSelected 
                            ? 'bg-[#fbbf24] text-white shadow-md transform scale-105' 
                            : 'bg-white text-gray-800 group-hover:bg-[#fbbf24] group-hover:text-white'
                          }`}
                      >
                        {letters[optIndex]}
                      </div>
                      
                      <span className={`font-semibold text-[15px] md:text-base transition-colors duration-300 
                        ${isSelected ? 'text-black' : 'text-gray-700 group-hover:text-black'}`}>
                        {option}
                      </span>
                    </button>
                  );
                })}
              </div>

            </div>
          ))}

          <div className="flex justify-end mt-2 mb-8 px-2">
            <Link to="/quiz-result" className="flex items-center gap-2 font-bold text-lg md:text-xl hover:text-purple-200 transition-colors">
              Finish
              <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Quiz;