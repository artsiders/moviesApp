const mongoose = require('mongoose');

const filmSchema = mongoose.Schema({
    vote_average: { type: String, required: true },
    title: { type: String, required: true },
    poster_path: { type: String, required: true },
    original_title: { type: String, required: true },
    overview: { type: String, required: true },
    release_date: { type: String, required: true },
});
module.exports = mongoose.model('Films', filmSchema);