'use strict';

var _ = require('lodash');
var AddingWordsDatabase = require('./AddingWordsDatabase.model');

// Get list of AddingWordsDatabases
exports.index = function(req, res) {
  AddingWordsDatabase.find(function (err, AddingWordsDatabases) {
    if(err) { return handleError(res, err); }
    return res.json(200, AddingWordsDatabases);
  });
};

// Get a single AddingWordsDatabase
exports.show = function(req, res) {
  AddingWordsDatabase.findById(req.params.id, function (err, AddingWordsDatabase) {
    if(err) { return handleError(res, err); }
    if(!AddingWordsDatabase) { return res.send(404); }
    return res.json(AddingWordsDatabase);
  });
};

// Creates a new AddingWordsDatabase in the DB.
exports.create = function(req, res) {
  AddingWordsDatabase.create(req.body, function(err, AddingWordsDatabase) {
    if(err) { return handleError(res, err); }
    return res.json(201, AddingWordsDatabase);
  });
};

// Updates an existing AddingWordsDatabase in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  AddingWordsDatabase.findById(req.params.id, function (err, AddingWordsDatabase) {
    if (err) { return handleError(res, err); }
    if(!AddingWordsDatabase) { return res.send(404); }
    var updated = _.merge(AddingWordsDatabase, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.json(200, AddingWordsDatabase);
    });
  });
};

// Deletes a AddingWordsDatabase from the DB.
exports.destroy = function(req, res) {
  AddingWordsDatabase.findById(req.params.id, function (err, AddingWordsDatabase) {
    if(err) { return handleError(res, err); }
    if(!AddingWordsDatabase) { return res.send(404); }
    AddingWordsDatabase.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.send(204);
    });
  });
};

function handleError(res, err) {
  return res.send(500, err);
}