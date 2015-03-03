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
      "firstName": "Ruiz",
      "lastName": "Potter",
      "gender": "male",
      "id": 7674
    },
    {
      "firstName": "Deana",
      "lastName": "Hurst",
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
