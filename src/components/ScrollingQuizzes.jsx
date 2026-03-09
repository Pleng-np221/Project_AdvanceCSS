import { useRef } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import QuizBox from "./QuizBox2";

export default function ScrollingQuizzes({ header, quizzes }) {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    const el = scrollRef.current;
    if (!el) return;

    const amount = 300;

    if (direction === "right") {
      if (el.scrollLeft + el.clientWidth >= el.scrollWidth - 5) {
        el.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        el.scrollBy({ left: amount, behavior: "smooth" });
      }
    }

    if (direction === "left") {
      if (el.scrollLeft <= 5) {
        el.scrollTo({ left: el.scrollWidth, behavior: "smooth" });
      } else {
        el.scrollBy({ left: -amount, behavior: "smooth" });
      }
    }
  };

  return (
    <div className="relative w-full bg-white rounded-2xl shadow-lg overflow-visible px-5">

      <h2 className="text-2xl font-bold mb-4">{header}</h2>

      {/* left arrow */}
      <button
        onClick={() => scroll("left")}
        className="absolute 
        -left-10 p-[5%] lg:-left-16 lg:p-[2%]
        top-1/2 -translate-y-1/2 z-10 
        bg-white/80 hover:bg-white text-black 
        rounded-full shadow"
      >
        <FaChevronLeft />
      </button>

      {/* quizzes */}
      <div
        ref={scrollRef}
        className="flex items-start gap-6
        overflow-x-auto overflow-y-visible
        scroll-smooth no-scrollbar
        pt-4 pb-4"
      >
        {quizzes.map((quiz) => (
          <div key={quiz.id} className="
          min-w-[180px] sm:min-w-[240px] md:min-w-[260px]
          flex-shrink-0">
            <QuizBox {...quiz} />
          </div>
        ))}
      </div>

      {/* right arrow */}
      <button
        onClick={() => scroll("right")}
        className="absolute 
        -right-10 p-[5%] lg:-right-16 lg:p-[2%]
        top-1/2 -translate-y-1/2 z-10 
        bg-white/80 hover:bg-white text-black 
        rounded-full shadow"
      >
        <FaChevronRight />
      </button>
    </div>
  );
}