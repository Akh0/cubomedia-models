'use strict';

var mongoose = require('mongoose'),
    serieSchema = require('./serie.schema');

module.exports = mongoose.model('Serie', serieSchema);