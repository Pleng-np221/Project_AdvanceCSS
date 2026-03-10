import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import './quizResult.css';

export default function QuizResult() {

  const score = 5;
  const total = 10;
  const percent = (score / total) * 100;
  const time = "2:00";

  return (
    <div className="min-h-fit  text-white p-8">

      {/* back */}
      <Link to="/" className="flex items-center gap-2 mb-8 opacity-80 hover:opacity-100">
        <FaArrowLeft />
        back to Home
      </Link>
      <h1 className=" text-3xl font-bold mb-6">Dashboard</h1>

      <section
        className="
        flex flex-col lg:flex-row
        justify-center lg:justify-between
        items-center
        gap-10
        w-full
        px-6 sm:px-10 lg:px-20
      "
      >
      <div class="card animated-border  flex items-center max-h-fit ">
        <div class="card_title__container">
                <div className="max-w-4xl mx-auto rounded-2xl p-8 flex items-center gap-20">

              {/* progress circle */}
              <div className="relative w-40 h-40">

                <svg className="w-full h-full rotate-[-90deg]">
                  <circle
                    cx="80"
                    cy="80"
                    r="70"
                    stroke="rgba(255,255,255,0.2)"
                    strokeWidth="12"
                    fill="none"
                />

                <circle
                  cx="80"
                  cy="80"
                  r="70"
                  stroke="url(#grad)"
                  strokeWidth="12"
                  fill="none"
                  strokeDasharray="440"
                  strokeDashoffset={440 - (440 * percent) / 100}
                  strokeLinecap="round"
                />

                <defs>
                  <linearGradient id="grad">
                    <stop offset="0%" stopColor="#facc15"/>
                    <stop offset="100%" stopColor="#f97316"/>
                  </linearGradient>
                </defs>
              </svg>

              <div className="absolute inset-0 flex items-center justify-center text-3xl font-bold">
                {percent}%
              </div>

            </div>

            {/* score info */}
            <div className="space-y-4">
              <p className="text-xl">Your score : {score}/{total}</p>
              <p className="text-xl">Time Used: {time}</p>

              <button className="px-6 py-2 rounded-full 
              bg-gradient-to-r from-yellow-400 to-orange-500 
              text-white font-semibold shadow-lg hover:scale-105 transition">
                View Answers
              </button>
            </div>

          </div>
      </div>
      <ul class="card__list">


      </ul>
      {/* <button class="button">Book a Call</button> */}
    </div>
      


    {/* leaderboard */}
    <div className="
    w-[420px]
    bg-white/10
    backdrop-blur-lg
    rounded-2xl
    p-6
    shadow-lg
    shadow-black/100
    transition
    duration-500
    [box-shadow:inset_0_0_20px_rgba(255,255,255,0.19),inset_0_0_5px_rgba(255,255,255,0.27),0_5px_5px_rgba(0,0,0,0.16)]
    ">
  {/* header */}
  <div className="grid grid-cols-[1fr_80px_80px] text-sm font-semibold text-white/70 pb-3 border-b border-white/20">
    <span>Player</span>
    <span className="text-center">Score</span>
    <span className="text-center">Time</span>
  </div>

  {[1,2,3,4,5,6].map((i)=>{

    const medal =
      i === 1 ? "🥇" :
      i === 2 ? "🥈" :
      i === 3 ? "🥉" :
      i;
      

    const bg =
      i === 1 ? "bg-yellow-400/20 border-yellow-300/50" :
      i === 2 ? "bg-yellow-400/20 border-yellow-300/50" :
      i === 3 ? "bg-yellow-400/20 border-yellow-300/50" :
      "border-white/10";

    return(
      <div
        key={i}
        className={`grid grid-cols-[1fr_80px_80px] items-center py-3 px-3 border rounded-lg mb-2 ${bg} hover:bg-white/10 transition`}
      >

        {/* player */}
        <div className="flex items-center gap-3">

          <span className="text-lg w-6 text-center font-bold">
            {medal}
          </span>

          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-400 to-pink-400 flex items-center justify-center text-sm font-bold">
            K
          </div>

          <span>klin kdsfeo</span>

        </div>

        {/* score */}
        <span className="text-center font-semibold">8</span>

        {/* time */}
        <span className="text-center text-white/70">1:42</span>

      </div>
    )
  })}

</div>
    </section>




    </div>
  );
}