import React, { useState } from "react";
import Footer from "./Footer"
import data from "./data.json";
import './App.css';

function App() {
  const questions = data;
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);
 
  const handleClick = (isCorrect) => {
  if (isCorrect) {
   setScore(score + 1);}
  const nextQuestion = currentQuestion + 1;
  if (nextQuestion < questions.length) {
  setCurrentQuestion(nextQuestion);
  } else {
  setShowScore(true);
  }}
  return (
    <div className='App'>
			{showScore ? (
      <div className="Container">
      <h1>Disney Quiz</h1>
				<div className='score-section'>You scored {score} out of {questions.length}!</div>
        <Footer />
        </div>
			) : (
				<div className="Container">
          <h1>Disney Quiz</h1>
						<div className='question-count'>
							<span>Question {currentQuestion + 1}</span>/{questions.length}
						</div>
            <div className="question-and-answer">
						<div className='question-text'>{questions[currentQuestion].questionText}</div>
					<div className='answer-section'>
					{questions[currentQuestion].answerOptions.map((answerOption, index) => (
            <button onClick={() => handleClick(answerOption.isCorrect)} key={index}>{answerOption.answerText}</button>
          ))}	
					</div>
          </div>
          <Footer />
				</div>
			)}
		</div>
	);
}

export default App;
