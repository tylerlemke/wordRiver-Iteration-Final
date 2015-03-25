'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var TileSchema = new Schema({
  name: String, //Tile's word
  contextTags: [{ //Array of JSON objects, where each object is a context tag grouping containing the tag used and the id of the user that created the context pack
  tagName: String,
  creatorID: String
}],
active: Boolean //To check whether a tile has been used any student
});

module.exports = mongoose.model('Tile', TileSchema);
