const Character = require("../models/Character");

// GET request
exports.characters = (req, res, next) => {
  Character.find({}, (err, character) => {
    if (err) return next(err);
    res.send(character);
  });
};

//GET by Id request
exports.findById = async (req, res, next) => {
  await Character.findOne({ _id: req.params.id }, (err, character) => {
    if (err) return next(err);
    res.send(character);
  });
};
