'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var ContextPackSchema = new Schema({
  "name": String,
  "gradeLevel": String,
  "words": []
});

module.exports = mongoose.model('ContextPack', ContextPackSchema);
