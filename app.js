const express = require('express')
const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')
const generateShortURL = require('./generate_shortURL')

const app = express()
const PORT = process.env.PORT || 3000

app.engine('hbs', exphbs({ defaultLayout: 'main', extname: '.hbs' }))
app.set('view engine', 'hbs')

app.use(bodyParser.urlencoded({ extended: true }))

app.get('/', (req, res) => {
  res.render('index')
})

app.post('/', (req, res) => {
  console.log('body = ', req.body)
  const url = req.body.url
  const random = generateShortURL()
  res.render('show', { url, random })
})


app.listen(PORT, () => {
  console.log(`App is running on http://localhost:${PORT}`)
})