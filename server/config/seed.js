/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

'use strict';

var Student = require('../api/student/student.model');

Student.find({}).remove(function() {
  Student.create(
    {
      "firstName": "Battle",
      "lastName": "Rasmussen",
      "gender": "male"
    },
    {
      "firstName": "Marcy",
      "lastName": "Tyler",
      "gender": "female"
    },
    {
      "firstName": "Rios",
      "lastName": "Ortiz",
      "gender": "male"
    },
    {
      "firstName": "Burks",
      "lastName": "Rojas",
      "gender": "male"
    },
    {
      "firstName": "Delgado",
      "lastName": "Harrell",
      "gender": "male"
    },
    {
      "firstName": "Julie",
      "lastName": "Franklin",
      "gender": "female"
    },
    {
      "firstName": "Gayle",
      "lastName": "Bennett",
      "gender": "female"
    },
    {
      "firstName": "Collins",
      "lastName": "Barrera",
      "gender": "male"
    },
    {
      "firstName": "Naomi",
      "lastName": "Moreno",
      "gender": "female"
    },
    {
      "firstName": "Sybil",
      "lastName": "Espinoza",
      "gender": "female"
    },
    {
      "firstName": "Raymond",
      "lastName": "Clayton",
      "gender": "male"
    },
    {
      "firstName": "Callie",
      "lastName": "Montoya",
      "gender": "female"
    },
    {
      "firstName": "April",
      "lastName": "Molina",
      "gender": "female"
    },
    {
      "firstName": "Britt",
      "lastName": "Bray",
      "gender": "male"
    },
    {
      "firstName": "Spence",
      "lastName": "Frost",
      "gender": "male"
    },
    {
      "firstName": "Jeanne",
      "lastName": "Vega",
      "gender": "female"
    },
    {
      "firstName": "Nguyen",
      "lastName": "Walter",
      "gender": "male"
    },
    {
      "firstName": "Paige",
      "lastName": "Davidson",
      "gender": "female"
    },
    {
      "firstName": "Casandra",
      "lastName": "Cain",
      "gender": "female"
    },
    {
      "firstName": "Rosalind",
      "lastName": "Bowman",
      "gender": "female"
    },
    {
      "firstName": "Leticia",
      "lastName": "Lara",
      "gender": "female"
    },
    {
      "firstName": "Natasha",
      "lastName": "Ford",
      "gender": "female"
    },
    {
      "firstName": "Angelica",
      "lastName": "Carson",
      "gender": "female"
    },
    {
      "firstName": "Lloyd",
      "lastName": "Hartman",
      "gender": "male"
    });
});
