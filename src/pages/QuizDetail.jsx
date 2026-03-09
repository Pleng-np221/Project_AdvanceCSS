import { FaArrowLeft, FaShareAlt, FaPlay, FaHeart, FaUser } from "react-icons/fa";
import { MdHideImage } from "react-icons/md";

import { useEffect, useState } from "react";
import { Link, useParams } from 'react-router-dom';

import { quizzes } from "../data/ex_quiz-details";
import ScrollingQuizzes from "../components/ScrollingQuizzes";

export default function QuizDetail() {

  const { id } = useParams();
  const quiz = quizzes.find(q => q.id == id);
  
  const [imgError, setImgError] = useState(false);

  // scroll to top
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  const [copied, setCopied] = useState(false);

  const handleShare = async () => {
    await navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  if (!quiz) {
    return (
      <div className="min-h-screen bg-gray-100">
        <div className="bg-[#6b2a8c] sticky 
        top-[7.2%] z-40
        text-white/80 px-6 pt-[2.5%] pb-[1%]">
          <Link to="/"
            className="flex items-center gap-2 font-2xl font-semibold hover:opacity-80"
          >
            <FaArrowLeft />
            Back
          </Link>
        </div>
        <div className="align-middle">
            Quiz not Found :/
        </div>
      </div>
    )
  } else {
    return (
      <div className="min-h-screen bg-gray-100">

        <div className="bg-[#6b2a8c] sticky 
        top-[7.2%] z-40
        text-white/80 px-6 pt-[2.5%] pb-[1%]">
          <Link to="/"
            className="flex items-center gap-2 font-2xl font-semibold hover:opacity-80"
          >
            <FaArrowLeft />
            Back
          </Link>
        </div>

        <div className="flex justify-center">
          <div className="w-full p-8 bg-white rounded-2xl shadow-lg overflow-hidden">

            <div className="grid md:grid-cols-2">

              {/* img */}
              <div className="relative md:h-full h-[240px]
              bg-gray-200 rounded-2xl 
              overflow-hidden 
              flex items-center justify-center">
                {quiz.image && !imgError ? (
                    <img
                    src={quiz.image}
                    alt={quiz.title}
                    className="absolute inset-0 w-full h-full object-cover"
                    onError={() => setImgError(true)}
                    />
                ) : (
                  <MdHideImage size={100}/>
                )}
              </div>

              {/* Content */}
              <div className="p-8 flex flex-col">

                <div className="flex flex-col space-y-2">
                  <div className="flex items-center gap-1 font-semibold">
                    {/* <FaUser /> */}
                    {quiz.creator}
                  </div>
            
                  <div className="flex items-center gap-2 
                                  text-sm text-gray-500">
                      <div className="flex items-center gap-1">
                      <FaPlay size={12} />
                      {quiz.played}
                      </div>
                      <div className="flex items-center gap-1">
                      <FaHeart size={12} />
                      {quiz.loved}
                      </div>
                  </div>
                </div>

              {/* Title line */}
                <div className="flex items-center space-x-5 my-2">
                  <h1 className="text-4xl font-bold">{quiz.title}</h1>

                  <button
                    onClick={handleShare}
                    className="relative top-[10%] p-2 rounded-lg bg-gray-100 hover:bg-gray-200 transition"
                  >
                    <FaShareAlt />
                  </button>
                </div>

                {/* categories */}
                <span className="w-fit mt-4 inline-block text-xs px-3 py-1 rounded-full bg-purple-100 text-purple-700">
                  {quiz.categories}
                </span>

                {/* Description */}
                <p className="mt-4 text-gray-600 leading-relaxed">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt a at fugiat facere molestiae et soluta delectus consequatur dolor maxime cumque dolore, quos tenetur sequi amet! Reprehenderit earum inventore veniam!
                </p>

                <Link to={`/quiz`}>
                  <button className="w-fit 
                  bg-gradient-to-b from-amber-400 to-orange-500
                  text-white font-semibold 
                  px-5 py-2 mt-8 rounded-full 
                  hover:opacity-80 transition 
                  hover:shadow-lg hover:shadow-amber-500/50">
                    Start Quiz
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col mt-6 mx-[12%]">
          <h1 className="text-3xl text-gray-600 font-bold my-5">Recommended Quizzes</h1>
            <ScrollingQuizzes />
        </div>
      </div>
    );
  }
}