import { Link } from "react-router-dom";
import { useState } from "react";

import { FaPlay, FaHeart, FaUser } from "react-icons/fa";
import { MdHideImage } from "react-icons/md";

export default function QuizBox2({
  id,
  title,
  image,
  categories,
  played,
  loved,
  creator,
}) {
  const [imgError, setImgError] = useState(false);

  return (
    <Link to={`/quiz-detail/${id}`} className="block w-full max-w-[320px]">
      <div
        className="quizbox
        rounded-3xl overflow-hidden
        bg-white
        shadow-lg
        w-full max-w-[180px] sm:max-w-[120px] md:max-w-sm
        flex flex-col
      "
      >
        {/* content */}
        <div
          className="
          bg-gradient-to-b from-purple-600 to-purple-700
          text-white
          p-4
          flex flex-col gap-2
        "
        >
        <div className="flex items-center justify-between">
            <h2>{title}</h2>
        </div>

        <div className="flex items-center justify-between">
            <span className="bg-blue-200 text-purple-700 text-xs font-semibold px-3 py-1 rounded-full w-fit">
                {categories}
            </span>
            <div className="flex px-1 items-center gap-3 text-xs whitespace-nowrap">
                <div className="stat2">
                    <FaPlay size={8} />
                    {played}
                </div>

                <div className="stat2">
                    <FaHeart size={8} />
                    {loved}
                </div>

                <div className="stat2">
                    <FaUser size={8} />
                    {creator}
                </div>
                </div>
            </div>
        </div>

        {/* img */}
        <div className="quiz-img 
        relative z-10 w-full aspect-[16/9] 
        bg-gray-200 overflow-hidden">
          {image && !imgError ? (
            <img
              src={image}
              alt={title}
              onError={() => setImgError(true)}
            />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                <MdHideImage className="w-12 h-12" />
            </div>
          )}
        </div>
      </div>
    </Link>
  );
}