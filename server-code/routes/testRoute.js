const express = require('express')
const questionsController = require('../controllers/questionsController')
const router = express.Router()
router.get('/', questionsController.getHtmlData)
module.exports = router
