const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const filmRoute = require('./routes/film.route')

const app = express();

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors());
app.use('/api/film', filmRoute);

mongoose.connect('mongodb://localhost:27017/moviesApp',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => console.log('Connexion à MongoDB réussie !'))
    .catch(() => console.log('Connexion à MongoDB échouée !'));

module.exports = app;
