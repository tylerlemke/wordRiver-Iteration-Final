'use strict';
// Not Finished, resolve what a student should know
var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var StudentSchema = new Schema({
  "firstName": String,
  "lastName": String,
  artifacts: [[{ //Array of arrays containing JSON objects, with each inner array representing an artifact, and each JSON object representing a tile
    tileID: ObjectId, //Tile ID
    contextPack: String //Context pack tag associated with the tile used in the JSON object
  }]],
  teachers: [], //Array of user account IDs associated with this student
  tileBucket: [], //List of tile IDs the student has access to
  contextTags: [{ //Array of JSON objects, where each object is a context tag grouping containing the tag used and the id of the user that created the context pack
    tagName: String,
    creatorID: ObjectId
  }]
});

module.exports = mongoose.model('Student', StudentSchema);
