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
//exports.update = function(req, res) {
//  if(req.body._id) { delete req.body._id; }
//  Pack.findById(req.params.id, function (err, pack) {
//    if (err) { return handleError(res, err); }
//    if(!pack) { return res.send(404); }
//    var updated = _.merge(pack, req.body);
//    updated.save(function (err) {
//      if (err) { return handleError(res, err); }
//      return res.json(200, pack);
//    });
//  });
//};

// Used to remove duplicates from arrays when merging. Will not be happy with huge arrays...
function arrayUnique(array){
  var a = array.concat();
  for(var i=0; i<a.length; ++i){
    for(var j=i+1; j<a.length; ++j){
      if(a[i] === a[j]){
        a.splice(j--, 1);
      }
    }
  }
  return a;
}

exports.update = function(req, res) {
  // deletes _id in req body to not screw things up...
  if(req.body._id){ delete req.body._id }

  // Uses _id provided in request (url) to find pack in database
  Pack.findById(req.params.id, function(err, pack) {
    // Handle Errors
    if(err){ return handleError(res, err) }
    if(!pack){ return res.send(404) }

    // Merging request body and pack from DB. Special callback for arrays!
    var updated = _.merge(pack, req.body, function(a, b) {
      if(_.isArray(a)) {
        //return arrayUnique(a.concat(b));
        return b;
      } else {
        // returning undefined lets _.merge use its default merging methods, rather than this callback.
        return undefined;
      }
    });

    // Saves to database
    updated.save(function(err){
      if(err){ return handleError(res, err); }
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
