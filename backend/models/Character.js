const mongoose = require("mongoose");

const Character = mongoose.model("Character", {
  name: { type: String, required: true, max: 200 },
  sex: { type: String, required: true, max: 200 },
  slug: { type: String, required: true, max: 200 },
  pagerank: { type: Object, required: true, max: 200 },
  house: { type: String, required: true, max: 200 },
  books: { type: Array, required: true, max: 200 },
  titles: { type: Array, required: true, max: 200 },
  image: { type: String, required: true, max: 200 }
});

module.exports = Character;