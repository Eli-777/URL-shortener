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

//建立短網址
let url = ''
app.post('/', (req, res) => {
  console.log('body = ', req.body)
  url = req.body.url
  console.log('post url = ',url)
  const random = generateShortURL()
  res.render('show', { url, random })
})

//短網址轉跳
app.get('/:id', (req, res) => {
  const id = req.params.id
  console.log('get id = ',url)
  res.redirect(`${url}`)
})


app.listen(PORT, () => {
  console.log(`App is running on http://localhost:${PORT}`)
})