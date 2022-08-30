const mongoose = require('mongoose')
const questionSchema = new mongoose.Schema({ 
  id: Number,
  questionText: String,
  answerOptions : [{
    answerText : String,
    isCorrect : Boolean
     }]
})
// mongoose model
const Questions = mongoose.model('Questions', questionSchema);

module.exports = Questions;