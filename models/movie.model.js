'use strict';

var mongoose = require('mongoose'),
    movieSchema = require('./movie.schema');

module.exports = mongoose.model('Movie', movieSchema);