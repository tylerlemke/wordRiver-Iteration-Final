'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var ThingSchema = new Schema({
  "firstName": String,
  "lastName": String,
  "dateOfBirth": String,
  "gender": String,
  "email": String,
  "phone": String,
  "address": String,
  "class": String
});

module.exports = mongoose.model('Thing', ThingSchema);
