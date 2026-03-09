import { useRef } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import QuizBox from "./QuizBox";

export default function ScrollingQuizzes({header}) {
  const scrollRef = useRef(null);

  const quizzes = [
    { id: 0,title: "ควิซความรว้าก", categories: "Love", played: 324, loved: 98, creator: "klin" },
    { id: 1,title: "Anime Quiz", categories: "Anime", played: 512, loved: 210, creator: "yuki" },
    { id: 2,title: "Food Quiz", categories: "Food", played: 120, loved: 54, creator: "chef" },
    { id: 3,title: "Music Quiz", categories: "Music", played: 900, loved: 450, creator: "dj" },
    { id: 4,title: "Travel Quiz", categories: "Travel", played: 220, loved: 120, creator: "nomad" },
    { id: 5,title: "Food Quiz Part 2", categories: "Food", played: 88, loved: 64, creator: "chef" },
  ];

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
    <div className="relative w-full">

      <h2 className="text-2xl font-bold mb-4">{header}</h2>

      {/* left arrow */}
      <button
        onClick={() => scroll("left")}
        className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white text-black p-2 rounded-full shadow"
      >
        <FaChevronLeft />
      </button>

      {/* quizzes */}
      <div
        ref={scrollRef}
        className="flex gap-6 
        overflow-x-auto overflow-y-visible
        scroll-smooth no-scrollbar 
        pt-4 pb-4"
      >
        {quizzes.map((quiz, index) => (
          <div key={index} className="
          min-w-[180px] sm:min-w-[240px] md:min-w-[260px]
          flex-shrink-0">
            <QuizBox {...quiz} />
          </div>
        ))}
      </div>

      {/* right arrow */}
      <button
        onClick={() => scroll("right")}
        className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white text-black p-2 rounded-full shadow"
      >
        <FaChevronRight />
      </button>
    </div>
  );
}