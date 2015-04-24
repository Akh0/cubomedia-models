'use strict';

var mongoose = require('mongoose'),
    fileSchema = require('./file.schema');

module.exports = mongoose.model('File', fileSchema);