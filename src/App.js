import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home.js";
import Quiz from "./pages/Quiz.js";
import Header from "./components/Header.js";
import UserProvider from "./components/UserContext.js";
import './App.css';

export default function App() {
  return (
    <div className="html"> 
      <UserProvider>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/quiz" element={<Quiz />} />
        </Routes>
      </UserProvider>
    </div>
  )
}