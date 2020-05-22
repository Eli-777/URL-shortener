const express = require('express')
const router = express.Router()
const Url = require('../../models/URL')

const generateShortURL = require('../../generate_shortURL')

router.get('/', (req, res) => {
  res.render('index')
})
//建立短網址
router.post('/', (req, res) => {
  url = req.body.url
  if(url.includes('https://') || url.includes('http://')){
  } else {
    url = 'https://' + url
  }
  const short_name = generateShortURL()
  return Url.create({ short_name, url })
    .then(() => res.render('show', { url, short_name }))
    .catch(error => console.log(error))
})

//短網址轉跳
router.get('/:id', (req, res) => {
  const id = req.params.id
  Url.find({ short_name: id })
    .lean()
    .then(urls => {
      thisUrl = urls[0].url
      res.redirect(`${thisUrl}`)
    })
    .catch(error => console.log(error))
  
})

module.exports = router