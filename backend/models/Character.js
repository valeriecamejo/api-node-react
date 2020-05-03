const mongoose = require('mongoose')

const Character = mongoose.model('Character', {
  name: String,
  /* sex: String,
  slug: String,
  rank: String,
  house: String,
  books: Array,
  titles: Array */
})

module.exports = Character