'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var PackSchema = new Schema({
  packName: String,
  info: String,
  active: Boolean
});

module.exports = mongoose.model('Pack', PackSchema);
