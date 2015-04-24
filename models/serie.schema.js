'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

module.exports = new Schema({
    code: String,
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
    genre: String,
    episodes: [{ type: Schema.Types.ObjectId, ref: 'Episode' }]
});