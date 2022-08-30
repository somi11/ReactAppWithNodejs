const Questions = require('../models/questionsModel')
const json2html = require('node-json2html')
const axios = require('axios')

exports.createQuestions = async (req, res, next) => {
  const { questionsData } = req.body
  const newDoc = await Questions.create(questionsData)
  res.status(201).json(newDoc)
  //console.log(res.body)
}
exports.getQuestions = async (req, res, next) => {
  try {
    const questions = await Questions.find({})
    res.status(200).json(questions)
  } catch (err) {
    next(err)
  }
}
exports.getHtmlData = async (req, res, next) => {
  try {
    const response = await axios.get(
      'https://ikonic-assign.herokuapp.com/quiz',
    )
    let template = [
      {
        '<>': 'h1',
        text: '${questionText}',
      },
      {
        '<>': 'ul',
        html: [
          {
            '<>': 'li',
            obj: function () {
              return this.answerOptions
            },
            html: [
              { '<>': 'span', text: '${answerText}' },
              { '<>': 'strong', text: '(${isCorrect})' },
            ],
          },
        ],
      },
    ]
    let html = json2html.transform(response.data, template)
    //console.log(html)
    // res.json(
    //   html.split('</ul>').map((element, index) => {
    //     return `Question No ${index + s1} ${element}`
    //   }),
    // )
    res.send(html)
  } catch (err) {
    console.log(err)
  }
}
