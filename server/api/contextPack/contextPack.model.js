'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var ContextPackSchema = new Schema({
  name: String,
  info: String,
  active: Boolean
});

module.exports = mongoose.model('ContextPack', ContextPackSchema);