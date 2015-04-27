'use strict';

var extend = require('mongoose-schema-extend'),
    FileSchema = require('./file.schema'),
    mongoose = require('mongoose'),
    Schema = mongoose.Schema;

module.exports = FileSchema.extend({
    _serie: { type:  Schema.Types.ObjectId, ref: 'Serie' },
    episodeNumber: Number,
    seasonNumber: Number
});