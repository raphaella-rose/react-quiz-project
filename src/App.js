import React, { useState } from "react";
import data from "./data.json";
import './App.css';

function App() {
  const questions = data;
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);
 
  const handleClick = (isCorrect) => {
  if (isCorrect) {
   setScore(score + 1);
  }
  const nextQuestion = currentQuestion + 1;
  if (nextQuestion < questions.length) {
  setCurrentQuestion(nextQuestion);
  } else {
  setShowScore(true);
  }
  }
  return (
    <div className='app'>
			{showScore ? (
				<div className='score-section'>You scored {score} out of {questions.length}</div>
			) : (
				<>
					<div className='question-section'>
						<div className='question-count'>
							<span>Question {currentQuestion + 1}</span>/{questions.length}
						</div>
						<div className='question-text'>{questions[currentQuestion].questionText}</div>
					</div>
					<div className='answer-section'>
					{questions[currentQuestion].answerOptions.map((answerOption, index) => (
            <button onClick={() => handleClick(answerOption.isCorrect)} key={index}>{answerOption.answerText}</button>
          ))}	
					</div>
				</>
			)}
		</div>
	);
}

export default App;
