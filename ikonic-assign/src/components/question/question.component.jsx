import React from 'react'
import './question.style.css'
export const Question = (props) => {
  return (
    <div className="card-container">
      <div className="question-section">
        <div className="question-count">
          <span className="question-span">{`Question No ${props.question.id}`}</span>
        </div>

        <div className="question-text">{props.question.questionText}</div>
      </div>
      <div className="answer-section">
        {props.question.answerOptions.map((answerOption, key) => (
          <label key={key}>{answerOption.answerText}</label>
        ))}
      </div>
    </div>
  )
}
