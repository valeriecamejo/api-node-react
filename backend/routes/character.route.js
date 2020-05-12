const express = require("express");
const router = express.Router();
const character_controller = require("../controllers/character.controller");

// ROUTING HANDLER

//GET ALL requests
router.get("/", character_controller.characters);

//GET BY ID requests
router.get("/character/:id", character_controller.findById);

module.exports = router;