'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

module.exports = new Schema({
    name: String,
    filepath: String,
    type: String,
    hash: String,
    inode: Number,
    user: String
}, { collection: 'files', discriminatorKey: '_type' });