'use strict';

var mongoose = require('mongoose'),
    episodeSchema = require('./episode.schema');

module.exports = mongoose.model('Episode', episodeSchema);