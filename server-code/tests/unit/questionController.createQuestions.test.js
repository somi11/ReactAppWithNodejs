const questionsController = require('../../controllers/questionsController')
const Questions = require('../../models/questionsModel')
const httpMocks = require('node-mocks-http')
const questionsFile = require('../mock-data/new-questions.json')

Questions.create = jest.fn()
let req, res, next

beforeEach(() => {
  req = httpMocks.createRequest()
  res = httpMocks.createResponse()
  next = null
})
describe('questionController.createQuestions', () => {
  beforeEach(() => {
    req.body = questionsFile
  })
  it('it should have a createQuestions method', () => {
    expect(typeof questionsController.createQuestions).toBe(
      'function',
    )
  })

  it('should call Questions.create', async () => {
    const { questionsData } = req.body
    await questionsController.createQuestions(
      req,
      res,
      next,
    )
    expect(Questions.create).toBeCalledWith(questionsData)
  })
  it('should return status code 201', async () => {
    await questionsController.createQuestions(
      req,
      res,
      next,
    )
    expect(res.statusCode).toBe(201)
    expect(res._isEndCalled()).toBeTruthy()
  })

  it('should send back the json data', async () => {
    Questions.create.mockReturnValue(req.body)
    await questionsController.createQuestions(
      req,
      res,
      next,
    )
    expect(res._getJSONData()).toStrictEqual(req.body)
  })
})
