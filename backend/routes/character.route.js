const express = require('express');
const router = express.Router();
const character_controller = require('../controllers/character.controller');

// ROUTING HANDLER

/**
 * GET requests
 */
router.get('/', character_controller.characters);

router.get('/characters/:id', character_controller.findById);


module.exports = router;