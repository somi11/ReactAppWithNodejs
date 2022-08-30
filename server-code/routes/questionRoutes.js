const express = require('express')
const questionsController = require('../controllers/questionsController')
const router = express.Router()
router
  .get('/', questionsController.getQuestions)
  .post('/', questionsController.createQuestions)


module.exports = router
