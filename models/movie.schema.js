'use strict';

var extend = require('mongoose-schema-extend'),
    FileSchema = require('./file.schema');

module.exports = FileSchema.extend({
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
    genre: String
});