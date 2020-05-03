const express = require('express')
const mongoose = require('mongoose')
const characters = require('./routes/character.route');
const services = require('./services/index')

const bodyParser = require('body-parser')
const port = process.env.PORT || 3000
const app = express()

const mongoDB = 'mongodb://127.0.0.1/api_got'
const mongoConfig = { useNewUrlParser: true, useUnifiedTopology: true }
mongoose.connect(mongoDB, mongoConfig)
const db = mongoose.connection

app.use(bodyParser.json())

 // Route
app.get('/', characters)

const getData = async () => {
  const data = await services.getData()
  return data
}

const saveData = async () => {
  try {
    const existCollection = await db.collection('characters').find()
    console.log(existCollection);
    /* if (existCollection == []) {
      const data = await getData()
      db.collection('characters').insertMany(data);
    } */
  } catch (e) {
    console.log(`Error: ${e}`);
  }
}

//saveData()

app.listen(port, err => {
  if (err) return console.log('Unable to start the server');
  console.log('Server is up and running on port number ' + port);
});




