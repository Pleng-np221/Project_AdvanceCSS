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
        xl:grid-cols-5
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
    <div className="animate-gradient
      space-y-10
      bg-gradient-to-r from-violet-300 via-purple-800 to-violet-500
    "
    >
      <section className="relative pb-10 pt-14 px-10">
        <div className="max-w-6xl mx-auto text-white">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight">
            Create
            <br />
            Your Quiz Now
          </h1>

          <button
            className="
            mt-10 inline-flex items-center gap-4
            px-8 py-4 rounded-2xl

            backdrop-blur-lg
            bg-white/10
            border border-white/30

            text-white text-xl sm:text-2xl font-semibold
            shadow-lg

            transition-all duration-300
            hover:bg-white/20
            hover:scale-105
            active:scale-95
            "
          >
            <span className="text-3xl font-bold">+</span>
            Create Your Quiz
          </button>

        </div>
      </section>
      <div className="w-full space-y-10 pt-16 p-14 bg-white rounded-t-[100px] shadow-lg overflow-hidden">
        <section>
          <h2 className="text-2xl font-bold mb-6">
            Top Quizzes This Day
          </h2>
          <QuizGrid>
            {topQuizzes.map((quiz) => (
              <QuizBox key={quiz.id} {...quiz} />
            ))}
          </QuizGrid>
        </section>

        <section className="">
          <ScrollingQuizzes
            header="Discover Quizzes"
            quizzes={randomQuizzes}
          />
        </section>

        {Object.entries(quizzesByCategory).map(([category, categoryQuizzes]) => (
          <section key={category}>
            <h2 className="text-2xl font-bold mb-6">
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
  );
}