'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

module.exports = new Schema({
    code: String,
    user: String,
    originalTitle: String,
    title: String,
    synopsis: String,
    productionYear: Number,
    pressRating: Number,
    userRating: Number,
    posterHref: String,
    posters: Array,
    link: String,
    trailerEmbedHref: String,
    genre: String
});