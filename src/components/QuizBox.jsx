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
    <Link to={`/quiz-detail/${id}`}
    className="
        block
        w-full
    "
    >
        <div className="quizbox relative 
        w-full max-w-[260px] mx-auto
        flex flex-col
        rounded-3xl overflow-hidden 
        bg-gradient-to-b from-purple-600 to-purple-700 
        shadow-[inset_0_0_30px_rgba(255,255,255,1)] 
        p-4 z-0 text-white">

            {/* deco */}
            <div className="absolute inset-0 z-0 pointer-events-none">
            <div className="absolute -bottom-20 -right-16 w-48 h-48 rounded-full p-[30px] 
            bg-gradient-to-b from-white/60 to-white/10">
                    <div className="w-full h-full rounded-full bg-purple-700"></div>
                </div>

                <div className="absolute -bottom-10 -right-5 w-24 h-24 rounded-full p-[30px] 
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
            <div className="relative z-10 mt-[4%] space-y-[3%]">

                <h2 className="
                    font-bold leading-tight
                    text-[clamp(0.85rem,2.5vw,1.1rem)]
                ">
                    {title}
                </h2>

                <span className="
                    inline-block
                    bg-yellow-400 text-black
                    text-[clamp(0.65rem,2vw,0.8rem)]
                    px-[0.7em] py-[0.3em]
                    rounded-full
                ">
                    {categories}
                </span>

                <div className="text-white/90
                text-[clamp(0.7rem,2.2vw,0.9rem)]
                flex flex-wrap items-center
                gap-x-[6%] gap-y-[0.3em]
                ">

                    <div className="flex items-center gap-[0.35em]">
                        <FaPlay className="text-[0.7em]" />
                        {played}
                    </div>

                    <div className="flex items-center gap-[0.35em]">
                        <FaHeart className="text-[0.7em]" />
                        {loved}
                    </div>

                    <div className="flex items-center gap-[0.35em]">
                        <FaUser className="text-[0.7em]" />
                        {creator}
                    </div>

                </div>
            </div>

        </div>
    </Link>
  );
}