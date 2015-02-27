/**
 * Created by mill6528 on 2/27/15.
 */

/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

'use strict';

var Student = require('../../api/student/student.model.js');

Student.find({}).remove(function() {
    Student.create(
        {
          "firstName": "Liza",
          "lastName": "Pratt"
        },
        {
          "firstName": "Battle",
          "lastName": "Whitaker"
        },
        {
          "firstName": "Leanna",
          "lastName": "Garrison"
        },
        {
          "firstName": "Sherman",
          "lastName": "Foster"
        },
        {
          "firstName": "Cassie",
          "lastName": "Ramos"
        },
        {
          "firstName": "Calderon",
          "lastName": "Daniel"
        },
        {
          "firstName": "Shanna",
          "lastName": "Boyle"
        }

   );
});
