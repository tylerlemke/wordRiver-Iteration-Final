'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var TileSchema = new Schema({
  name: String,
  contextTags: [],
  active: Boolean
});

module.exports = mongoose.model('Tile', TileSchema);
