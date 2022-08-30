const request = require('supertest')
const app = require('../../app')
const questionsFile = require('../mock-data/questionsArr.json')
const endpointUrl = '/quiz/'

// describe(endpointUrl, () => {
//   it('POST ' + endpointUrl, async () => {
//     const response = await request(app)
//       .post(endpointUrl)
//       .send(questionsFile)
//     console.log(response.body)
//     expect(response.statusCode).toBe(201)
//     expect(response.body.questionText).toBe(
//       questionsFile.questionsData.questionText,
//     )
//   })
// })

describe(endpointUrl, () => {
  it('GET ' + endpointUrl, async () => {
    const response = await request(app).get(endpointUrl)
    console.log(response.body)
    expect(response.statusCode).toBe(200)
    expect(typeof response.body).toBe('object')
    expect(response.body).toBeDefined()
    // expect(response.body.questionText).toBe(
    //   questionsFile.questionsData.questionText,
    //)
    // let template = [
    //   { '<>': 'h1', text: '${questionText:}' },
    //   {
    //     '<>': 'ul',
    //     html: [
    //       {
    //         '<>': 'li',
    //         obj: function () {
    //           return this.answerOptions
    //         },
    //         html: [
    //           { '<>': 'span', text: '${answerText}' },
    //           { '<>': 'strong', text: '(${isCorrect})' },
    //         ],
    //       },
    //     ],
    //   },
    // ]
    // let html = json2html.transform(response.body, template)
    // console.log(html)
  })
})
