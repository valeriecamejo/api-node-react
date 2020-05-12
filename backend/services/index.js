const fetch = require('node-fetch')

exports.getData = async (req, res) => {
  try {
    const url = "https://api.got.show/api/book/characters"
    const response = await fetch(url)
    const json = await response.json()
    return json
  } catch(err) {
    console.log(`Error: ${err}`)
  }
}