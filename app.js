const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const exphbs = require('express-handlebars')
require('./config/mongoose')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.engine('hbs', exphbs({ defaultLayout: 'main', extname: 'hbs' }))
app.set('view engine', 'hbs')

app.get('/', (req, res) => {
  res.render('login')
})

app.listen(3000, () => {
  console.log('The express sever is listening at http://localhost:3000')
})