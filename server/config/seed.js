/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

'use strict';

var User = require('../api/user/user.model');
var Student = require('../api/student/student.model');
var Tile = require('../api/tile/tile.model');

User.find({}).remove(function() {
  User.create({
      "_id": "5511a83da168f8b5f3144f02",
      "name": "Rosemarie Maxwell",
      "email": "rosemariemaxwell@plexia.com",
      "role": {
        "type": "user"
      },
      "password": "culpa",
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
        {"groupName": "Kentucky",
        "contextPacks": ["American Samoa", "Israel", "Saint Kitts and Nevis"]
        },
        {"groupName": "Ohio",
          "contextPacks": ["Belarus"]
        },
        {"groupName": "Arkansas",
          "contextPacks": []
        },
        {"groupName": "Indiana",
          "contextPacks": []
        },
        {"groupName": "Nebraska",
          "contextPacks": ["French Polynesia"]
        }],

      "tileBucket": [],
      "studentList": [
        {
          "firstName": "Cardenas",
          "lastName": "Coffey",
          "studentID": "5511ab56117e23f0412fd08f",
          "groupList": ["Kentucky", "Ohio"],
          "contextTags": ["Saint Kitts and Nevis", "Belarus", "Israel", "American Samoa"]
        }, {
          "firstName": "Aisha",
          "lastName": "Wheeler",
          "studentID": "5511ab564ac02dbaf337270d",
          "groupList": ["Kentucky"],
          "contextTags": ["American Samoa", "Israel", "Saint Kitts and Nevis"]
        }, {
          "firstName": "Weiss",
          "lastName": "Tanner",
          "studentID": "5511ab5617fda1233df3f6dd",
          "groupList": ["Kentucky", "Ohio", "Nebraska"],
          "contextTags": ["Saint Kitts and Nevis", "American Samoa", "Belarus", "Israel", "French Polynesia"]
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
      "password": "commodo",
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
        {"groupName": "Pennsylvania",
          "contextPacks": []
        },
        {"groupName": "Louisiana",
          "contextPacks": []
        },
        {"groupName": "West Virginia",
          "contextPacks": []
        },
        {"groupName": "Minnesota",
          "contextPacks": []
        },
        {"groupName": "Delaware",
          "contextPacks": []
        }],
      "tileBucket": [],
      "studentList": []
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
        "tagName": "Israel",
        "creatorID": "5511a83da168f8b5f3144f02"
      },
      {
        "tagName": "French Polynesia",
        "creatorID": "5511a83da168f8b5f3144f02"
      },
        {"tagName": "Saint Kitts and Nevis",
          "creatorID": "5511a83da168f8b5f3144f02"
        }
    ]
    }
  )
});

Tile.find({}).remove(function() {
  Tile.create({

    "_id": "5511ae8c805b0d983f66e2cd",
    "name": "nostrud",
      "creatorID": "5511a83da168f8b5f3144f02",
    "contextTags": [
    {
      "tagName": "Chad"
    }
  ],
    "active": false
  },
  {
    "_id": "5511ae8cec56277a4af216a5",
    "name": "duis",
    "creatorID": "5511a83da168f8b5f3144f02",
    "contextTags": [
      {
      "tagName": "Belarus"
    }
  ],
    "active": false
  },
  {
    "_id": "5511ae8c1fb25384d865e514",
    "name": "et",
    "creatorID": "5511a83da168f8b5f3144f02",
    "contextTags": [
    {
      "tagName": "Israel"
    }
  ],
    "active": false
  },
  {
    "_id": "5511ae8cf6f121e4c3108cd6",
    "name": "elit",
    "creatorID": "5511a83da168f8b5f3144f02",
    "contextTags": [
    {
      "tagName": "Nigeria"
    }
  ],
    "active": false
  },
  {
    "_id": "5511ae8cb5ac0ff225f5fde2",
    "name": "non",
    "creatorID": "5511a83da168f8b5f3144f02",
    "contextTags": [
    {
      "tagName": "Nigeria"
    }
  ],
    "active": false
  },
  {
    "_id": "5511ae8c72c6bb3a7f9cd910",
    "name": "reprehenderit",
    "creatorID": "5511a83da168f8b5f3144f02",
    "contextTags": [
    {
      "tagName": "American Samoa"
    }
  ],
    "active": false
  },
  {
    "_id": "5511ae8c081ccbd0d072d7b4",
    "name": "anim",
    "creatorID": "5511a83da168f8b5f3144f02",
    "contextTags": [
    {
      "tagName": "American Samoa"
    }
  ],
    "active": false
  },
  {
    "_id": "5511ae8cfb1b2d41b9f92888",
    "name": "esse",
    "creatorID": "5511a83da168f8b5f3144f02",
    "contextTags": [
    {
      "tagName": "Nigeria"
    }
  ],
    "active": false
  },
  {
    "_id": "5511ae8c127053ad5bf17926",
    "name": "proident",
    "creatorID": "5511a83da168f8b5f3144f02",
    "contextTags": [
    {
      "tagName": "Israel"
    }
  ],
    "active": false
  },
  {
    "_id": "5511ae8ce28633ca8ad95f7f",
    "name": "commodo",
    "creatorID": "5511a83da168f8b5f3144f02",
    "contextTags": [
    {
      "tagName": "American Samoa"
    }
  ],
    "active": false
  },
  {
    "_id": "5511ae8c8b6533965921e512",
    "name": "sint",
    "creatorID": "5511a83da168f8b5f3144f02",
    "contextTags": [
    {
      "tagName": "Saint Kitts and Nevis"
    }
  ],
    "active": false

  })
});

