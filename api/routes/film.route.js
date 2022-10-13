const express = require('express');
const router = express.Router();
const filmControler = require('../controlers/film.controller');


router.get('/' + '', filmControler.getFilm);

module.exports = router;
