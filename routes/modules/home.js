const express = require('express')
const router = express.Router()
const Url = require('../../models/URL')

const generateShortURL = require('../../generate_shortURL')

router.get('/', (req, res) => {
  res.render('index')
})
// 建立短網址
router.post('/', (req, res) => {
  url = req.body.url
  //沒有輸入就轉跳失敗網頁
  if (url.length === 0) {
    return res.render('jumpError')
  }

  if (url.includes('https://') || url.includes('http://')) {
  } else {
    url = 'https://' + url
  }

  let short_name = generateShortURL()

  return Url.find()
    .then(check => {
      // 需要防止有重覆的網址組合出現
      let created = []
      check.forEach(item => {
        created.push(item.short_name)
      })
      while (created.includes(short_name)) {
        short_name = generateShortURL()
      }
      return short_name
    })
    .then(() => Url.create({ short_name, url }))
    .then(() => res.render('show', { url, short_name }))
    .catch(error => console.log(error))
})

// 短網址轉跳
router.get('/:id', (req, res) => {
  const id = req.params.id
  Url.findOne({ short_name: id })
    .lean()
    .then(urls => {
      if (urls) {
        thisUrl = urls.url
        console.log('thisUrl=' ,thisUrl)
        res.redirect(`${thisUrl}`)
      } else {  //使用者輸入錯誤則轉跳錯誤頁面
        res.render('jumpError')
      }
    })
    .catch(error => console.log(error))

})

module.exports = router