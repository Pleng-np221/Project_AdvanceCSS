import QuizBox from "../components/QuizBox";
import RecommendedQuizzes from "../components/ScrollingQuizzes"

export default function Home() {
  return (
    <div className="p-10 text-3xl">
      Home Page
      <br />
      
      <QuizBox 
        title = "Title"
        image = ""
        categories = "Love"
        played = "654"
        loved = "321"
        creator = "PlengJa"
      />

      <RecommendedQuizzes
        header = "Recommended Quizzes"
      />
    </div>
  )
}