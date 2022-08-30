import React from 'react'
import './questionlist.style.css'
import { Question } from '../question/question.component'

export const QuestionList = (props) => {
  return (
    <div className="card-list">
      {props.questionsList.map((question) => (
        <Question key={question.id} question={question} />
      ))}
    </div>
  )
}
