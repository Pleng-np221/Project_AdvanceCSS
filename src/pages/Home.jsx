import { Link } from 'react-router-dom';

import QuizBox from "../components/QuizBox";
import ScrollingQuizzes from "../components/ScrollingQuizzes";
import { quizzes } from "../data/ex_quiz-details";

function QuizGrid({ children }) {
  return (
    <div
      className="
        grid
        grid-cols-2
        sm:grid-cols-2
        md:grid-cols-3
        lg:grid-cols-4
        xl:grid-cols-4
        gap-5
      "
    >
      {children}
    </div>
  );
}

export default function Home() {

  const topQuizzes = [...quizzes]
    .sort((a, b) => b.played - a.played)
    .slice(0, 5);

  // Category Section
  const quizzesByCategory = quizzes.reduce((acc, quiz) => {
    if (!acc[quiz.categories]) {
      acc[quiz.categories] = [];
    }
    acc[quiz.categories].push(quiz);
    return acc;
  }, {});

  const randomQuizzes = [...quizzes].sort(() => Math.random() - 0.5);

  return (


    <div className="
    animate-gradient
    relative z-10
    space-y-10
    bg-gradient-to-r from-violet-300 via-purple-800 to-violet-500
  ">
      <div id="stars"></div>
      

      <section className="relative pb-10 pt-14 px-10">
        <div className="max-w-6xl mx-auto text-white">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight pb-10">
            Create
            <br />
            Your Quiz Now
          </h1>

            <Link 
              to="/quiz" 
              className="flex items-center gap-1.5
              text-white 
              px-10 py-2 
              rounded-full 
              font-bold 
              text-2xl 
              transition-all duration-300 
              w-fit
              ml-2 
              border border-white/100 
              backdrop-blur-md
              shadow-[inset_0_0_15px_4px_rgba(255,255,255,0.25),0_2px_10px_rgba(255,255,255,0.2)]
              hover:shadow-[inset_0_0_20px_6px_rgba(255,255,255,0.35),0_4px_15px_rgba(255,255,255,0.3)]"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3.5} d="M12 4v16m8-8H4" />
              </svg>
              Create Your Quiz
            </Link>

        </div>
      </section>
      <div className="w-full space-y-10 pt-16 p-14 bg-white rounded-t-[100px] shadow-lg overflow-hidden">
        <div className="max-w-7xl mx-auto   ">
        <section className=''>
          <h2 className="text-2xl font-bold mb-6">
            Top Quizzes This Day
          </h2>
          <QuizGrid>
            {topQuizzes.map((quiz) => (
              <QuizBox key={quiz.id} {...quiz} />
            ))}
          </QuizGrid>
        </section>

        <section className="py-6">
          <ScrollingQuizzes
            header="Discover Quizzes"
            quizzes={randomQuizzes}
          />
        </section>

        {Object.entries(quizzesByCategory).map(([category, categoryQuizzes]) => (
          <section key={category} className='pb-8'>
            <h2 className="text-2xl font-bold mb-6 ">
              {category}
            </h2>
            <QuizGrid>
              {categoryQuizzes.map((quiz) => (
                <QuizBox key={quiz.id} {...quiz} />
              ))}
            </QuizGrid>
          </section>
        ))}
        </div>
      </div>
    </div>
  );
}