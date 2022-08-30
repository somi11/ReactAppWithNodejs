import React, { useState } from 'react'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import './form.style.css'

import axios from 'axios'

const FormRender = (props) => {
  console.log(props.options)
  return (
    <form className="form-style">
      <label className="question-label">Question:</label>
      <input className="question-input" readOnly={true} value={props.question} />
      <label className="question-label">Options:</label>
      <div className="check-box-parent">
        <input className="option-input" readOnly={true} value={props.options.answerText1} />
        <input className="checkboxc" type="radio" readOnly={true} checked={props.answers.answer1} value={props.answers.answer1} />
      </div>
      <div className="check-box-parent">
        <input className="option-input" readOnly={true} value={props.options.answerText2} />
        <input className="checkboxc" type="radio" readOnly={true} checked={props.answers.answer2} value={props.answers.answer2} />
      </div>
      <div className="check-box-parent">
        <input className="option-input" readOnly={true} value={props.options.answerText3} />
        <input className="checkboxc" type="radio" readOnly={true} checked={props.answers.answer3} value={props.answers.answer3} />
      </div>
      <div className="check-box-parent">
        <input className="option-input" readOnly={true} value={props.options.answerText4} />
        <input className="checkboxc" type="radio" readOnly={true} checked={props.answers.answer4} value={props.answers.answer4} />
      </div>
    </form>
  )
}

const Form = (props) => {
  const defaultOptions = {
    answerText1: '',
    answerText2: '',
    answerText3: '',
    answerText4: '',
  }
  const defaultAnswers = {
    answer1: false,
    answer2: false,
    answer3: false,
    answer4: false,
  }
  const [question, setQuestion] = useState('')
  const [options, setOptions] = useState(defaultOptions)
  const [answers, setAnswers] = useState(defaultAnswers)
  const { answer1, answer2, answer3, answer4 } = answers
  const { answerText1, answerText2, answerText3, answerText4 } = options
  const handleChange = (event) => {
    const { name, value } = event.target

    setOptions({ ...options, [name]: value })
  }
  const handleChangeRadio = (e) => {
    const { name } = e.target
    e.target.value = true
    console.log(e.target.value)
    setAnswers({ ...answers, [name]: e.target.value })
  }

  const handleAfterChange = (event) => {
    setOptions(defaultOptions)
  }
  const handleRadiofterChange = (event) => {
    setAnswers(defaultAnswers)
  }
  const onSubmit = (event) => {
    event.preventDefault()

    props.setQuestions((prev) =>
      prev.concat({
        id: props.questions.length + 1,
        questionText: question,
        answerOptions: [
          {
            answerText: options.answerText1,
            isCorrect: answers.answer1,
          },
          {
            answerText: options.answerText2,
            isCorrect: answers.answer2,
          },
          {
            answerText: options.answerText3,
            isCorrect: answers.answer3,
          },
          {
            answerText: options.answerText4,
            isCorrect: answers.answer4,
          },
        ],
      }),
    )
    console.log(props.questions)
    setQuestion('')
    handleAfterChange()
    handleRadiofterChange()
    const notify = () =>
      toast('Question Added Successfully', {
        position: 'top-center',
        autoClose: 1000,
        progress: undefined,
      })
    notify()
  }

  const uploadData = async (event) => {
    event.preventDefault()
    try {
      //'http://localhost:4000/quiz' for local server use this string
      const res = await axios.post('https://ikonic-assign.herokuapp.com/quiz', {
        questionsData: props.questions,
      })
      if (res) {
        const notify = () =>
          toast('Data Uploaded Successfully', {
            position: 'top-center',
            autoClose: 1000,
            progress: undefined,
          })
        notify()
      }
    } catch (err) {
      console.log(err)
      const notify = () => toast('Server down. Try again later')
      notify()
    }
  }

  return (
    <div className="form-style-main">
      <form className="form-style">
        <label className="question-label">Enter your Question:</label>
        <input className="question-input" value={question} onChange={(e) => setQuestion(e.target.value)} />
        <label className="question-label">Enter your Options:</label>
        <div className="check-box-parent">
          <input className="option-input" value={answerText1} name="answerText1" onChange={handleChange} />
          <input className="checkboxc" type="radio" checked={answer1} name="answer1" value={answer1} onChange={handleChangeRadio} />
        </div>
        <div className="check-box-parent">
          <input className="option-input" value={answerText2} name="answerText2" onChange={handleChange} />
          <input className="checkboxc" type="radio" checked={answer2} name="answer2" value={answer2} onChange={handleChangeRadio} />
        </div>
        <div className="check-box-parent">
          <input className="option-input" value={answerText3} name="answerText3" onChange={handleChange} />
          <input className="checkboxc" type="radio" checked={answer3} name="answer3" value={answer3} onChange={handleChangeRadio} />
        </div>
        <div className="check-box-parent">
          <input className="option-input" value={answerText4} name="answerText4" onChange={handleChange} />
          <input className="checkboxc" type="radio" checked={answer4} name="answer4" value={answer4} onChange={handleChangeRadio} />
        </div>
        <button className="submit-button" onClick={onSubmit}>
          Submit
        </button>
        <button className="submit-button" onClick={uploadData}>
          Save the Work Sheet to Database
        </button>
      </form>
      <FormRender className="form-style" question={question} options={options} answers={answers} />
    </div>
  )
}
export default Form
