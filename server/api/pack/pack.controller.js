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

//
//// Updates an existing thing in the DB.
//exports.update = function(req, res) {
//  console.log("Got this far");
//  if(req.body._id) { delete req.body._id; console.log("Deleted thing");}
//  Pack.findById(req.params.id, function (err, pack) {
//    if (err) { return handleError(res, err); }
//    if(!pack) { return res.send(404); }
//    var updated = _.merge(pack, req.body);
//////////////////////////////
//    //if(
//    //  _.has(req.body, 'comments')){
//    //  updated.comments = req.body.comments;
//    //} else if (!(_.has(req.body, 'comments'))){
//    //  updated.comments = submission.comments;
//    //  console.log(submission.comments);
//    //}
////////////////////////////
//    updated.save(function (err) {
//      if (err) { return handleError(res, err); }
//      return res.json(200, pack);
//    });
//    console.log("here i am");
//  });
//  console.log("Made it through");
//};
//
//// Updates an existing thing in the DB.
//exports.updateTiles = function(req, res) {
//  console.log("Starting updateTiles");
//  console.log(req.body);
//  if(req.body._id) { delete req.body._id; console.log("Deleted thing");}
//  //console.log(req.body);
//  console.log(req.params);
//  Pack.findById(req.params.id, function (err, pack) {
//    console.log("in findById");
//    if (err) {  console.log("error1"); return handleError(res, err); }
//    if(!pack) { console.log("error1"); return res.send(404); }
//    var updated = _.merge(pack, req.body);
//    console.log("here's updated");
//    console.log(updated);
////////////////////////////
////    if(
////      _.has(req.body, 'tiles')){
////      console.log("Had tiles");
////      updated.tiles = req.body.tiles;
////    } else if (!(_.has(req.body, 'tiles'))){
////      updated.tiles = pack.tiles;
////      console.log(pack.tiles);
////    }
//////////////////////////
//    updated.save(function (err) {
//      if (err) { console.log("error"); return handleError(res, err); }
//      console.log("Res Json");
//      //console.log(res.json(200, pack));
//      return res.json(200, pack);
//    });
//    console.log("here i am");
//  });
//  console.log("Made it through");
//};

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
