import { Link } from "react-router-dom";
import '../App.css';
export default function Header() {
  return (
    <div className="header">
      <header>
        <h1>Which Element Are You?</h1>
        <p>(based on completly random things)</p>
        <nav>
            <Link to="/">Home</Link>
            <Link to="/quiz">Quiz</Link>
        </nav>
      </header>
    </div>
  );
}