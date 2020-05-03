const Character = require('../models/Character')

// GET request
exports.characters = (req, res, next) => {
  Character.find({}, (err, characters) => {
    if (err) return next(err)
    console.log("llegué a get(/)");
    res.send(characters);
  })
}

exports.findById = (req, res, next) => {
  console.log("req: ", req.params)
  Character.findOne(req.params._id, (err, character) => {
    if (err) return next(err)
    console.log("llegué a get(con id)");
    res.send(character)
  })
}

// POST request
exports.character_create = (req, res, next) => {
    let character = new Character(
      {
        titles: req.body.titles
      }
    );

    character.save()
    .then(data => {
      let d = []
      d.push(data)

      let response = helper.formatResponse(req, d)
      res.status(201).send(response)
    })
    .catch(err => {
      res.status(500).send({
        success: false,
        message: "Could not process your petition"
      })
    })
};

// PUT request
exports.character_update = (req, res, next) => {
  Character.findByIdAndUpdate(req.params.id, {$set: req.body}, err => {
    if (err) return next(err)
    console.log("RESPONDE: ", response);
    res.send(character)
    /* let d = []
    d.push(req.body)

    let response = helper.formatResponse(req, d) */
    res.status(200).send(response)
  });
}

// DELETE request
exports.character_delete = (req, res, next) => {
  Character.findByIdAndRemove(req.params.id, err => {
    if (err) return next(err)
    res.status(204).send()
  })
}