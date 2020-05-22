const mongoose = require('mongoose')
const Schema = mongoose.Schema
const urlSchema = new Schema({
  short_name: {
    type: String,
    default: true
  },
  url: {
    type: String,
    default: true
  }
})
module.exports = mongoose.model('url', urlSchema)