const express = require("express");
const mongoose = require("mongoose");
const characters = require("./routes/character.route");
const services = require("./services/index");
const cors = require('cors')

const bodyParser = require("body-parser");
const port = process.env.PORT || 8080;
const app = express();

const mongoUrl = "mongodb://127.0.0.1/api_got";
const mongoConfig = { useNewUrlParser: true, useUnifiedTopology: true };
mongoose.connect(mongoUrl, mongoConfig);
const db = mongoose.connection;

app.use(bodyParser.json());
app.use(cors({ origin:true }))

const saveData = async () => {
  try {
    const data = await services.getData();
    const filterKeys = (object, ...keys) => keys.reduce((acc, key) => ({...acc, [key]: object[key] }), {})
    const chars = data.map(char => filterKeys(char, 'name', 'gender', 'slug', 'pagerank', 'house', 'books', 'titles', 'image'))

    db.collection("characters").insertMany(chars);
  } catch (e) {
    console.log(`Error al intentar almacenar la data en BD: ${e}`);
  }
};

saveData();

// Route
app.use("/", characters);

app.listen(port, (err) => {
  if (err) return console.log("No se puede iniciar el servidor");
  console.log(`Servidor corriendo en el puerto ${port}`);
});