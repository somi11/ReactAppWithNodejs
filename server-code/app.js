const express = require('express')
const dotenv = require('dotenv')
const compression = require('compression')
const cors = require('cors')
const app = express()
const questionRoutes = require('./routes/questionRoutes')
const testRoute = require('./routes/testRoute')
const { mongoConnect } = require('./mongodb/dbconnect')
app.use(express.json({ limit: '10kb' }))
dotenv.config({ path: './config.env' })
mongoConnect()
app.use(cors())
app.use(compression())
app.get('/', (req, res) => {
  res.send(
    'App is working: Run /quiz to get data and /test for tests',
  )
})
app.use('/quiz/', questionRoutes)
app.use('/test/', testRoute)

module.exports = app
