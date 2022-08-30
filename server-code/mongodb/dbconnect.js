const mongoose = require('mongoose')

//database connection
async function mongoConnect() {
  const DB = process.env.DATABASE
  try {
    const conn = await mongoose.connect(DB, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    if (conn)
      console.log('Connected to database Successfully')
  } catch (err) {
    console.log('connect to database failed')
  }
}

module.exports = { mongoConnect }
