const express = require('express')
const router = express.Router()
const Url = require('../../models/URL')

const generateShortURL = require('../../generate_shortURL')

router.get('/', (req, res) => {
  res.render('index')
})
//建立短網址
let url = ''
router.post('/', (req, res) => {
  url = req.body.url
  if(url.includes('https://') || url.includes('http://')){
  } else {
    url = 'https://' + url
  }
  const random = generateShortURL()
  res.render('show', { url, random })
})

//短網址轉跳
router.get('/:id', (req, res) => {
  const id = req.params.id
  console.log('get id = ',url)
  res.redirect(`${url}`)
})

module.exports = router