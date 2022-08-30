const questionsController = require('../../controllers/questionsController')
const Questions = require('../../models/questionsModel')
const httpMocks = require('node-mocks-http')
const questionsFile = require('../mock-data/new-questions.json')
const qeustD = require('../mock-data/questionsArr.json')

Questions.find = jest.fn()
let req, res, next

beforeEach(() => {
  req = httpMocks.createRequest()
  res = httpMocks.createResponse()
  next = null
})

describe('questionsController.getQuestions', () => {
  it('it should have a createQuestions method', () => {
    expect(typeof questionsController.getQuestions).toBe(
      'function',
    )
  })

  it('should call Questions.find', async () => {
    await questionsController.getQuestions(req, res, next)
    expect(Questions.find).toBeCalledWith({})
  })
  it('should return status code 200 and all the questions', async () => {
    Questions.find.mockReturnValue(questionsFile)
    await questionsController.getQuestions(req, res, next)
    expect(res.statusCode).toBe(200)
    expect(res._getJSONData()).toStrictEqual(questionsFile)
  })
})
