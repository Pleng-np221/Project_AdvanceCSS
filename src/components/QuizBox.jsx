import { Link } from 'react-router-dom';
import { useState } from "react";

import { FaPlay, FaHeart, FaUser} from "react-icons/fa";
import { MdHideImage } from "react-icons/md";

export default function QuizBox({
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
    <Link to={`/quiz-detail/${id}`} className="block">
        <div className="quizbox relative 
        w-full max-w-[180px] sm:max-w-[240px] md:max-w-sm aspect-[4/5]
        rounded-3xl overflow-hidden 
        bg-gradient-to-b from-purple-600 to-purple-700 
        shadow-[inset_0_0_30px_rgba(255,255,255,1)] 
        p-4 z-0 text-white">

            {/* deco */}
            <div className="absolute inset-0 z-0 pointer-events-none">
            <div className="absolute -bottom-20 -right-16 w-72 h-72 rounded-full p-[30px] 
            bg-gradient-to-b from-white/60 to-white/10">
                    <div className="w-full h-full rounded-full bg-purple-700"></div>
                </div>

                <div className="absolute -bottom-10 -right-5 w-48 h-48 rounded-full p-[30px] 
                bg-gradient-to-b from-white/60 to-white/10">
                    <div className="w-full h-full rounded-full bg-purple-700"></div>
                </div> 
            </div>
            
            {/* img */}
            <div className="relative z-10 
            w-full aspect-[16/9]
            bg-gray-200 rounded-2xl 
            overflow-hidden 
            flex items-center justify-center">
                {image && !imgError ? (
                    <img
                    src={image}
                    alt={title}
                    className="absolute inset-0 w-full h-full object-cover"
                    onError={() => setImgError(true)}
                    />
                ) : (
                    <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                        <MdHideImage size={64} />
                    </div>
                )}
            </div>

            {/* content */}
            <div className="relative z-10 mt-4 space-y-2">
                <h2 className="text-sm sm:text-lg font-bold">{title}</h2>

                <span className="inline-block bg-yellow-400 text-black text-xs px-3 py-1 rounded-full">
                    {categories}
                </span>

                <div className="flex items-center gap-2 
                text-xs sm:text-sm 
                text-white/90">

                    <div className="flex items-center gap-1">
                    <FaPlay size={12} />
                    {played}
                    </div>

                    <div className="flex items-center gap-1">
                    <FaHeart size={12} />
                    {loved}
                    </div>

                    <div className="flex items-center gap-1">
                    <FaUser size={12} />
                    {creator}
                    </div>
                </div>
            </div>

        </div>
    </Link>
  );
}