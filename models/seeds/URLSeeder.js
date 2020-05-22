const Url = require('../URL.js')
const db = require('../../config/mongoose')

db.once('open', () => {
  Url.create(
    { short_name: 'f23s5', url: 'https://www.google.com/'},
    { short_name: 'ewrr5', url: 'https://www.facebook.com/'},
    { short_name: 'er5yu', url: 'https://tw.yahoo.com/'},
  )
  
  console.log('done')
})