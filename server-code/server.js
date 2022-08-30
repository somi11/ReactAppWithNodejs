const app = require('./app')
//start server
app.listen(process.env.PORT || 4000, () => {
  console.log('server running')
})
