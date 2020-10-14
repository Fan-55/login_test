const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/session')
const db = mongoose.connection
db.on('error', () => {
  console.log('MongoDB connection error')
})
db.once('open', () => {
  console.log('MongoDB connected!')
})

module.exports = db