/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

'use strict';

var Student = require('../api/student/student.model');

Student.find({}).remove(function() {
  Student.create(
    {
      "firstName": "Walsh",
      "lastName": "Cummings",
      "gender": "male",
      "id": 6338
    },
    {
      "firstName": "Robert",
      "lastName": "Burke",
      "gender": "female",
      "id": 3123
    },
    {
      "firstName": "Isabella",
      "lastName": "Reynolds",
      "gender": "female",
      "id": 3918
    },
    {
      "firstName": "Carver",
      "lastName": "Raymond",
      "gender": "male",
      "id": 4053
    },
    {
      "firstName": "Vivian",
      "lastName": "Frost",
      "gender": "female",
      "id": 1918
    },
    {
      "firstName": "Hickman",
      "lastName": "Gibbs",
      "gender": "male",
      "id": 1160
    },
    {
      "firstName": "Harry",
      "lastName": "Potter",
      "gender": "male",
      "id": 7674
    },
    {
      "firstName": "Deana",
      "lastName": "Winchester",
      "gender": "female",
      "id": 6079
    },
    {
      "firstName": "Nelda",
      "lastName": "Harrington",
      "gender": "female",
      "id": 5786
    },
    {
      "firstName": "Christie",
      "lastName": "Haney",
      "gender": "female",
      "id": 6524
    },
    {
      "firstName": "Geneva",
      "lastName": "Hartman",
      "gender": "female",
      "id": 4036
    },
    {
      "firstName": "Debora",
      "lastName": "Maddox",
      "gender": "female",
      "id": 2815
    });

});

var Pack = require('../api/pack/pack.model');
Pack.find({}).remove(function() {
  Pack.create(
    {"packName": "Hero Pack",
      "tiles": ["Superman", "Batman", "Hulk", "Doomsday Device", "villain", "sidekick", "gadgets", "Green Lantern", "Black Widow", "brave", "Gotham City", "Green Arrow"]},
    {"packName": "Zoo",
      "tiles": ["Lion", "Tiger", "Bear", "Seals", "Giraffe", "Elephant", "Shark", "Alligator", "zoo keeper", "aquarium", "birdhouse", "greenhouse"]},
    {"packName": "Biomes",
      "tiles": ["tundra", "desert", "forest", "rainforest", "jungle", "coral reef"]},
    {"packName": "Cars",
      "tiles": ["Aveo", "Ferrari", "Subaru", "van", "Saturn", "Chevrolet"]},
    {"packName": "Disney",
      "tiles": ["Frozen", "Cinderella", "Tangled", "princess", "prince", "kingdom", "witch", "ball", "magical creatures", "magic"]},
    {packName: "Sports",
      tiles: ["basketball", "football", "tennis", "volleyball", "soccer", "curling"]}
  );
});
