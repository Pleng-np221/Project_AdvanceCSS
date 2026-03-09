import { FaPlay, FaHeart, FaUser} from "react-icons/fa";
import { MdHideImage } from "react-icons/md";
import RecommendedQuizzes from "../components/ScrollingQuizzes"

export default function Detail() {
  return (
    <>
        <div className="p-20">
            <RecommendedQuizzes />
        </div>
    </>
  );
}