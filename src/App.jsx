import { Routes, Route, Link } from "react-router-dom"
import Home from "./pages/Home"

function App() {
  return (
    <div>

      <nav className="p-4 bg-gray-200 flex gap-4">
        <Link to="/">Home</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>

    </div>
  )
}

export default App