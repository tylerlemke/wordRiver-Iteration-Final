/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

'use strict';

var User = require('../api/user/user.model');
var Student = require('../api/student/student.model.js');

User.find({}).remove(function() {
  User.create({
      "_id": "5511a83da168f8b5f3144f02",
      "name": "Rosemarie Maxwell",
      "email": "rosemariemaxwell@plexia.com",
      "role": {
        "type": "user"
      },
      "hashedPassword": "culpa",
      "contextPacks": [
        "American Samoa",
        "Israel",
        "Chad",
        "French Polynesia",
        "Belarus",
        "Nigeria",
        "Saint Kitts and Nevis"
      ],
      "groupList": [
        "Kentucky",
        "Ohio",
        "Arkansas",
        "Indiana",
        "Nebraska"
      ],
      "tileBucket": [],
      "studentList": [
        {
          "studentID": "ObjectId",
          "groupList": [],
          "contextTags": []
        }
      ]
    },
    /////////////////////////////////////
    {
      "_id": "5511a83d70df99c5fdfa434f",
      "name": "Le Marshall",
      "email": "lemarshall@plexia.com",
      "role": {
        "type": "user"
      },
      "hashedPassword": "commodo",
      "contextPacks": [
        "Malawi",
        "Norway",
        "Sao Tome and Principe",
        "Benin",
        "Antigua and Barbuda",
        "Seychelles",
        "Dominican Republic"
      ],
      "groupList": [
        "Pennsylvania",
        "Louisiana",
        "West Virginia",
        "Minnesota",
        "Delaware"
      ],
      "tileBucket": [],
      "studentList": [
        {
          "studentID": "ObjectId",
          "groupList": [],
          "contextTags": []
        }
      ]
    }
  );
});

Student.find({}).remove(function() {
  Student.create(
    {
      "_id": "5511ab56117e23f0412fd08f",
      "firstName": "Cardenas",
      "lastName": "Coffey",
      "artifacts": [],
      "teachers": [
      "5511a83da168f8b5f3144f02"
    ],
      "tileBucket": [],
      "contextTags": [
      {
        "tagName": "Saint Kitts and Nevis",
        "creatorID": "5511a83da168f8b5f3144f02"
      },
      {
        "tagName": "Belarus",
        "creatorID": "5511a83da168f8b5f3144f02"
      },
      {
        "tagName": "Israel",
        "creatorID": "5511a83da168f8b5f3144f02"
      },
      {
        "tagName": "American Samoa",
        "creatorID": "5511a83da168f8b5f3144f02"
      }
    ]
    },
    {
      "_id": "5511ab564ac02dbaf337270d",
      "firstName": "Aisha",
      "lastName": "Wheeler",
      "artifacts": [],
      "teachers": [
      "5511a83da168f8b5f3144f02"
    ],
      "tileBucket": [],
      "contextTags": [
      {
        "tagName": "American Samoa",
        "creatorID": "5511a83da168f8b5f3144f02"
      },
      {
        "tagName": "Israel",
        "creatorID": "5511a83da168f8b5f3144f02"
      },
      {
        "tagName": "Saint Kitts and Nevis",
        "creatorID": "5511a83da168f8b5f3144f02"
      }
    ]
    },
    {
      "_id": "5511ab5617fda1233df3f6dd",
      "firstName": "Weiss",
      "lastName": "Tanner",
      "artifacts": [],
      "teachers": [
      "5511a83da168f8b5f3144f02"
    ],
      "tileBucket": [],
      "contextTags": [
      {
        "tagName": "American Samoa",
        "creatorID": "5511a83da168f8b5f3144f02"
      },
      {
        "tagName": "Belarus",
        "creatorID": "5511a83da168f8b5f3144f02"
      },
      {
        "tagName": "Nigeria",
        "creatorID": "5511a83da168f8b5f3144f02"
      },
      {
        "tagName": "French Polynesia",
        "creatorID": "5511a83da168f8b5f3144f02"
      }
    ]
    }
  )
});

