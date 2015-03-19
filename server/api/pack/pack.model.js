'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var PackSchema = new Schema({
  packName: String,
  tiles: [String]
});

module.exports = mongoose.model('Pack', PackSchema);
