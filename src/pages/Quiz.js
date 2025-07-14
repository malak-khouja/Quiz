import React, { useState } from 'react';
import Question from "../components/Question.js";
import Results from "../components/Results";
import { nameContext } from "../components/UserContext.js"; 
import { useContext, useEffect } from "react";
import '../App.css';
export default function Quiz() {
    const questions = [
      {
        question: "What's your favorite color?",
        options: ["Red 🔴", "Blue 🔵", "Green 🟢", "Yellow 🟡"],
      },
      {
        question: "What's your favorite hobby?",
        options: ["Reading 📖","Sports 🏀","Gaming 🎮","Traveling ✈️"],
      },
      {
        question: "What's your favorite season?",
        options: ["Summer ☀️","Winter ❄️","Spring 🌸","Autumn 🍂"],
      },
      {
        question: "What animal do you prefer?",
        options: ["Lion 🦁","Snake 🐍","Badger 🦡","Penguin 🐧"],
      },
    ];

    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [answers, setAnswers] = useState([]);
    const { setUserName } = useContext(nameContext);

    function handleAnswer(option){
        setAnswers([...answers, option]);
        setCurrentQuestionIndex(currentQuestionIndex + 1);
    }

    const isFinished = currentQuestionIndex >= questions.length;
    useEffect(() => {
    if (isFinished) {
      setUserName("");
    }
  }, [isFinished, setUserName]);

  return (
    <div>
      {isFinished ? (
        <Results answers={answers} />
      ) : (
        <Question
          question={questions[currentQuestionIndex].question}
          options={questions[currentQuestionIndex].options}
          onAnswer={handleAnswer}
        />
      )}
    </div>
  );
}