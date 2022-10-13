const Film = require('../models/film.model');


module.exports.getFilm = (_, res) => {
    Film.find().then(
        (films) => {
            res.status(200).json(films);
        }
    ).catch(
        (error) => {
            res.status(400).json({
                error: error
            });
        }
    );
}