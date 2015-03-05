/**
 * Using Rails-like standard naming convention for endpoints.
 * GET     /things              ->  index
 * POST    /things              ->  create
 * GET     /things/:id          ->  show
 * PUT     /things/:id          ->  update
 * DELETE  /things/:id          ->  destroy
 */

'use strict';

var _ = require('lodash');
var Pack = require('./pack.model');

// Get list of things
exports.index = function(req, res) {
  Pack.find(function (err, packs) {
    if(err) { return handleError(res, err); }
    return res.json(200, packs);
  });
};

// Get a single thing
exports.show = function(req, res) {
  Pack.findById(req.params.id, function (err, pack) {
    if(err) { return handleError(res, err); }
    if(!pack) { return res.send(404); }
    return res.json(pack);
  });
};

// Creates a new thing in the DB.
exports.create = function(req, res) {
  Pack.create(req.body, function(err, pack) {
    if(err) { return handleError(res, err); }
    return res.json(201, pack);
  });
};

// Updates an existing thing in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  Pack.findById(req.params.id, function (err, pack) {
    if (err) { return handleError(res, err); }
    if(!pack) { return res.send(404); }
    var updated = _.merge(pack, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.json(200, pack);
    });
  });
};

// Deletes a thing from the DB.
exports.destroy = function(req, res) {
  Pack.findById(req.params.id, function (err, pack) {
    if(err) { return handleError(res, err); }
    if(!pack) { return res.send(404); }
    pack.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.send(204);
    });
  });
};

function handleError(res, err) {
  return res.send(500, err);
}
