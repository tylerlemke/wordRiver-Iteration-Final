'use strict';
// Not Finished, resolve what a student should know
var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var StudentSchema = new Schema({
  "firstName": String,
  "lastName": String,
  artifacts: [[{
    tileID: ObjectId,
    contextPack: String
  }]],
  teachers: []
});

module.exports = mongoose.model('Student', StudentSchema);
