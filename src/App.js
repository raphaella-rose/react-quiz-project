import React, { useState } from "react";
import './App.css';

function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);
  const questions = [
    {
      questionText: `What is the capital of France?`,
      answerOptions: [
        {answerText: `New York`, isCorrect: false },
        {answerText: `London`, isCorrect: false},
        {answerText: `Paris`, isCorrect: true},
        {answerText: `Dublin`, isCorrect: false},
      ],
    },
     {
      questionText: `Who is the CEO of tesla?`,
      answerOptions: [
        {answerText: `Jeff Bezoz`, isCorrect: false },
        {answerText: `Elon Musk`, isCorrect: true},
        {answerText: `Bill Gates`, isCorrect: false},
        {answerText: `Tony Stark`, isCorrect: false},
      ],
    },
     {
      questionText: `Which animated film company created Mickey Mouse?`,
      answerOptions: [
        {answerText: `Disney`, isCorrect: true},
        {answerText: `Pixar`, isCorrect: false},
        {answerText: `Dreamworks`, isCorrect: false},
        {answerText: `Blue Sky`, isCorrect: false},
      ],
    },
     {
      questionText: `How many Harry Potter books are there?`,
      answerOptions: [
        {answerText: `1`, isCorrect: false },
        {answerText: `4`, isCorrect: false},
        {answerText: `6`, isCorrect: false},
        {answerText: `7`, isCorrect: true},
      ],
    },
  ]
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
