import React, { useState } from 'react'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { QuestionList } from '../questionlist/questionlist.component'
import Form from '../Form/form.component'
import './addQuestion.style.css'
const AddQuestion = (props) => {
  const [questions, setQuestions] = useState(props.questionsList)

  return (
    <div className="add-card-container">
      <Form className="form" questions={questions} setQuestions={setQuestions} />
      <QuestionList questionsList={questions} />
      <ToastContainer />
    </div>
  )
}
export default AddQuestion
