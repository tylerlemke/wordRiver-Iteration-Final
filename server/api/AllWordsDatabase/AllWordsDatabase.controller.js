'use strict';

//angular.module('wordRiverTeamFtlApp')
//  .controller('AllWordsDatabaseCtrl', function ($scope) {
//    $scope.message = 'Hello';
//  });
var mongoose = require('mongoose');
// Defining Model
// =====================================================
var allwords = mongoose.model('allwords', {
  words:String
});
// Defining Routes
// =====================================================
exports.index = function(req, res) {
  allwords.find(function (err, AllWordsDatabase) {
    if (err) {
      console.log("Error getting data from database");
      res.send(err)
    } else {
      res.json(AllWordsDatabase); // return results
    }
  });
};
exports.create = function(req, res) {
  allwords.create(req.body, function (err, theWords) {
    if (err) {
      res.send(err);
    } else {
      allwords.find(function (err, AllWordsDatabase) {
        if (err) {
          res.send(err);
        }
        res.json(AllWordsDatabase);
      });
    }
  });
};
exports.destroy = function(req, res) {
  allwords.findById(req.params.theWords_id, function(err, theWords){
    if(err) { res.send(err); return "error: " + err; }
    if(!theWords) { return res.sendStatus(404); }
    theWords.remove(function(err){
      if(err) { return "error: " + err}
      return res.sendStatus(204);
    });
  });
};
