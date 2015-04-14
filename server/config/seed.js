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
        "Dolch 1",
        "Animals",
        "Post Office",
        "Lunch",
        "Superheros",
        "School",
        "Gym Class"
      ],
      "groupList": [
        {"groupName": "Group A",
        "contextPacks": ["Dolch 1", "Animals", "Gym Class"]
        },
        {"groupName": "Group B",
          "contextPacks": ["Superheros"]
        },
        {"groupName": "Group C",
          "contextPacks": []
        },
        {"groupName": "Group D",
          "contextPacks": []
        },
        {"groupName": "Group E",
          "contextPacks": ["Lunch"]
        }],

      "tileBucket": ["5511ae8c805b0d983f66e2cd", "5511ae8cec56277a4af216a5", "5511ae8c1fb25384d865e514", "5511ae8cf6f121e4c3108cd6", "5511ae8cb5ac0ff225f5fde2", "5511ae8c72c6bb3a7f9cd910", "5511ae8c081ccbd0d072d7b4", "5511ae8cfb1b2d41b9f92888", "5511ae8c127053ad5bf17926", "5511ae8ce28633ca8ad95f7f", "5511ae8c8b6533965921e512"],
      "studentList": [
        {
          "firstName": "Cardenas",
          "lastName": "Coffey",
          "studentID": "5511ab56117e23f0412fd08f",
          "groupList": ["Group A", "Group B"],
          "contextTags": ["Gym Class", "Superheros", "Animals", "Dolch 1"]
        }, {
          "firstName": "Aisha",
          "lastName": "Wheeler",
          "studentID": "5511ab564ac02dbaf337270d",
          "groupList": ["Group A"],
          "contextTags": ["Dolch 1", "Animals", "Gym Class"]
        }, {
          "firstName": "Weiss",
          "lastName": "Tanner",
          "studentID": "5511ab5617fda1233df3f6dd",
          "groupList": ["Group A", "Group B", "Group E"],
          "contextTags": ["Gym Class", "Dolch 1", "Superheros", "Animals", "Lunch"]
        },


        {
          "firstName": "Burke",
          "lastName": "Mayer",
          "studentID": "552c20f8be17b267b77b5a19",
          "groupList": ["Group A", "Group B", "Group E"],
          "contextTags": ["Gym Class", "Dolch 1", "Superheros", "Animals", "Lunch"]
        },{
          "firstName": "Mueller",
          "lastName": "David",
          "studentID": "552c20f8d1172952c6f268fe",
          "groupList": ["Group A", "Group B", "Group E"],
          "contextTags": ["Gym Class", "Dolch 1", "Superheros", "Animals", "Lunch"]
        },{
          "firstName": "Kimberley",
          "lastName": "Lloyd",
          "studentID": "552c20f878838eab8bf3f0b1",
          "groupList": ["Group A", "Group B", "Group E"],
          "contextTags": ["Gym Class", "Dolch 1", "Superheros", "Animals", "Lunch"]
        },{
          "firstName": "Rodriguez",
          "lastName": "Madden",
          "studentID": "552c20f8b21be14535092a6a",
          "groupList": ["Group A", "Group B", "Group E"],
          "contextTags": ["Gym Class", "Dolch 1", "Superheros", "Animals", "Lunch"]
        },{
          "firstName": "Garza",
          "lastName": "Massey",
          "studentID": "552c20f8c91389f9a90eea7e",
          "groupList": ["Group A", "Group B", "Group E"],
          "contextTags": ["Gym Class", "Dolch 1", "Superheros", "Animals", "Lunch"]
        },{
          "firstName": "Deloris",
          "lastName": "Alvarado",
          "studentID": "552c20f8842d066cb9945d93",
          "groupList": ["Group A", "Group B", "Group E"],
          "contextTags": ["Gym Class", "Dolch 1", "Superheros", "Animals", "Lunch"]
        },{
          "firstName": "Hahn",
          "lastName": "Melendez",
          "studentID": "552c20f835f5e056a3e3c932",
          "groupList": ["Group A", "Group B", "Group E"],
          "contextTags": ["Gym Class", "Dolch 1", "Superheros", "Animals", "Lunch"]
        },{
          "firstName": "Lucinda",
          "lastName": "Bass",
          "studentID": "552c20f8f403787cef74f326",
          "groupList": ["Group A", "Group B", "Group E"],
          "contextTags": ["Gym Class", "Dolch 1", "Superheros", "Animals", "Lunch"]
        },{
          "firstName": "James",
          "lastName": "Lester",
          "studentID": "552c20f81e2f0b90bb8b354a",
          "groupList": ["Group A", "Group B", "Group E"],
          "contextTags": ["Gym Class", "Dolch 1", "Superheros", "Animals", "Lunch"]
        },{
          "firstName": "Marva",
          "lastName": "Mcgowan",
          "studentID": "552c20f8236b5a09d40cfaf0",
          "groupList": ["Group A", "Group B", "Group E"],
          "contextTags": ["Gym Class", "Dolch 1", "Superheros", "Animals", "Lunch"]
        },{
          "firstName": "Jefferson",
          "lastName": "Bean",
          "studentID": "552c20f80645c32973a23dfc",
          "groupList": ["Group A", "Group B", "Group E"],
          "contextTags": ["Gym Class", "Dolch 1", "Superheros", "Animals", "Lunch"]
        },{
          "firstName": "Claire",
          "lastName": "Patterson",
          "studentID": "552c20f8daa1ff88495504d5",
          "groupList": ["Group A", "Group B", "Group E"],
          "contextTags": ["Gym Class", "Dolch 1", "Superheros", "Animals", "Lunch"]
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
      "tileBucket": ["5511ae8cec56277a4af216a5", "5511ae8cec56277a4af216a5", "5511ae8c1fb25384d865e514", "5511ae8c72c6bb3a7f9cd910", "5511ae8c081ccbd0d072d7b4", "5511ae8c127053ad5bf17926", "5511ae8ce28633ca8ad95f7f", "5511ae8c8b6533965921e512"],
      "contextTags": [
      {
        "tagName": "Gym Class",
        "creatorID": "5511a83da168f8b5f3144f02"
      },
      {
        "tagName": "Superheros",
        "creatorID": "5511a83da168f8b5f3144f02"
      },
      {
        "tagName": "Animals",
        "creatorID": "5511a83da168f8b5f3144f02"
      },
      {
        "tagName": "Dolch 1",
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
      "tileBucket": ["5511ae8c1fb25384d865e514", "5511ae8c72c6bb3a7f9cd910", "5511ae8c081ccbd0d072d7b4", "5511ae8c127053ad5bf17926", "5511ae8ce28633ca8ad95f7f", "5511ae8c8b6533965921e512"],
      "contextTags": [
      {
        "tagName": "Dolch 1",
        "creatorID": "5511a83da168f8b5f3144f02"
      },
      {
        "tagName": "Animals",
        "creatorID": "5511a83da168f8b5f3144f02"
      },
      {
        "tagName": "Gym Class",
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
      "tileBucket": ["5511ae8cec56277a4af216a5", "5511ae8c1fb25384d865e514", "5511ae8c72c6bb3a7f9cd910", "5511ae8c081ccbd0d072d7b4", "5511ae8c127053ad5bf17926", "5511ae8ce28633ca8ad95f7f", "5511ae8c8b6533965921e512"],
      "contextTags": [
      {
        "tagName": "Dolch 1",
        "creatorID": "5511a83da168f8b5f3144f02"
      },
      {
        "tagName": "Superheros",
        "creatorID": "5511a83da168f8b5f3144f02"
      },
      {
        "tagName": "Animals",
        "creatorID": "5511a83da168f8b5f3144f02"
      },
      {
        "tagName": "Lunch",
        "creatorID": "5511a83da168f8b5f3144f02"
      },
        {"tagName": "Gym Class",
          "creatorID": "5511a83da168f8b5f3144f02"
        }
    ]
    },



    {
      "_id": "552c20f8be17b267b77b5a19",
      "firstName": "Burke",
      "lastName": "Mayer",
      "teachers": [
        "5511a83da168f8b5f3144f02"
      ],
      "tileBucket": [],
      "contextTags": [
        {
          "tagName": "[object Object]",
          "creatorID": "[object Object]"
        }
      ]
    },
    {
      "_id": "552c20f8d1172952c6f268fe",
      "firstName": "Mueller",
      "lastName": "David",
      "teachers": [
        "5511a83da168f8b5f3144f02"
      ],
      "tileBucket": [],
      "contextTags": [
        {
          "tagName": "[object Object]",
          "creatorID": "[object Object]"
        }
      ]
    },
    {
      "_id": "552c20f878838eab8bf3f0b1",
      "firstName": "Kimberley",
      "lastName": "Lloyd",
      "teachers": [
        "5511a83da168f8b5f3144f02"
      ],
      "tileBucket": [],
      "contextTags": [
        {
          "tagName": "[object Object]",
          "creatorID": "[object Object]"
        }
      ]
    },
    {
      "_id": "552c20f8b21be14535092a6a",
      "firstName": "Rodriguez",
      "lastName": "Madden",
      "teachers": [
        "5511a83da168f8b5f3144f02"
      ],
      "tileBucket": [],
      "contextTags": [
        {
          "tagName": "[object Object]",
          "creatorID": "[object Object]"
        }
      ]
    },
    {
      "_id": "552c20f8c91389f9a90eea7e",
      "firstName": "Garza",
      "lastName": "Massey",
      "teachers": [
        "5511a83da168f8b5f3144f02"
      ],
      "tileBucket": [],
      "contextTags": [
        {
          "tagName": "[object Object]",
          "creatorID": "[object Object]"
        }
      ]
    },
    {
      "_id": "552c20f8842d066cb9945d93",
      "firstName": "Deloris",
      "lastName": "Alvarado",
      "teachers": [
        "5511a83da168f8b5f3144f02"
      ],
      "tileBucket": [],
      "contextTags": [
        {
          "tagName": "[object Object]",
          "creatorID": "[object Object]"
        }
      ]
    },
    {
      "_id": "552c20f835f5e056a3e3c932",
      "firstName": "Hahn",
      "lastName": "Melendez",
      "teachers": [
        "5511a83da168f8b5f3144f02"
      ],
      "tileBucket": [],
      "contextTags": [
        {
          "tagName": "[object Object]",
          "creatorID": "[object Object]"
        }
      ]
    },
    {
      "_id": "552c20f8f403787cef74f326",
      "firstName": "Lucinda",
      "lastName": "Bass",
      "teachers": [
        "5511a83da168f8b5f3144f02"
      ],
      "tileBucket": [],
      "contextTags": [
        {
          "tagName": "[object Object]",
          "creatorID": "[object Object]"
        }
      ]
    },
    {
      "_id": "552c20f81e2f0b90bb8b354a",
      "firstName": "James",
      "lastName": "Lester",
      "teachers": [
        "5511a83da168f8b5f3144f02"
      ],
      "tileBucket": [],
      "contextTags": [
        {
          "tagName": "[object Object]",
          "creatorID": "[object Object]"
        }
      ]
    },
    {
      "_id": "552c20f8236b5a09d40cfaf0",
      "firstName": "Marva",
      "lastName": "Mcgowan",
      "teachers": [
        "5511a83da168f8b5f3144f02"
      ],
      "tileBucket": [],
      "contextTags": [
        {
          "tagName": "[object Object]",
          "creatorID": "[object Object]"
        }
      ]
    },
    {
      "_id": "552c20f80645c32973a23dfc",
      "firstName": "Jefferson",
      "lastName": "Bean",
      "teachers": [
        "5511a83da168f8b5f3144f02"
      ],
      "tileBucket": [],
      "contextTags": [
        {
          "tagName": "[object Object]",
          "creatorID": "[object Object]"
        }
      ]
    },
    {
      "_id": "552c20f8daa1ff88495504d5",
      "firstName": "Claire",
      "lastName": "Patterson",
      "teachers": [
        "5511a83da168f8b5f3144f02"
      ],
      "tileBucket": [],
      "contextTags": [
        {
          "tagName": "[object Object]",
          "creatorID": "[object Object]"
        }
      ]
    }
  )
});



Tile.find({}).remove(function() {
  Tile.create({

    "_id": "5511ae8c805b0d983f66e2cd",
    "name": "Mail",
      "creatorID": "5511a83da168f8b5f3144f02",
    "contextTags": [
    {
      "tagName": "Post Office"
    }
  ],
    "active": false,
      "wordType": "Noun"
  },
  {
    "_id": "5511ae8cec56277a4af216a5",
    "name": "Batman",
    "creatorID": "5511a83da168f8b5f3144f02",
    "contextTags": [
      {
      "tagName": "Superheros"
    }
  ],
    "active": false,
    "wordType": "Noun"
  },
  {
    "_id": "5511ae8c1fb25384d865e514",
    "name": "Dog",
    "creatorID": "5511a83da168f8b5f3144f02",
    "contextTags": [
    {
      "tagName": "Animals"
    }
  ],
    "active": false,
    "wordType": "Noun"
  },
  {
    "_id": "5511ae8cf6f121e4c3108cd6",
    "name": "Book",
    "creatorID": "5511a83da168f8b5f3144f02",
    "contextTags": [
    {
      "tagName": "School"
    }
  ],
    "active": false,
    "wordType": "Noun"
  },
  {
    "_id": "5511ae8cb5ac0ff225f5fde2",
    "name": "Pencil",
    "creatorID": "5511a83da168f8b5f3144f02",
    "contextTags": [
    {
      "tagName": "School"
    }
  ],
    "active": false,
    "wordType": "Noun"
  },
  {
    "_id": "5511ae8c72c6bb3a7f9cd910",
    "name": "Jump",
    "creatorID": "5511a83da168f8b5f3144f02",
    "contextTags": [
    {
      "tagName": "Dolch 1"
    }
  ],
    "active": false,
    "wordType": "Verb"
  },
  {
    "_id": "5511ae8c081ccbd0d072d7b4",
    "name": "Run",
    "creatorID": "5511a83da168f8b5f3144f02",
    "contextTags": [
    {
      "tagName": "Dolch 1"
    }
  ],
    "active": false,
    "wordType": "Verb"
  },
  {
    "_id": "5511ae8cfb1b2d41b9f92888",
    "name": "Desk",
    "creatorID": "5511a83da168f8b5f3144f02",
    "contextTags": [
    {
      "tagName": "School"
    }
  ],
    "active": false,
    "wordType": "Noun"
  },
  {
    "_id": "5511ae8c127053ad5bf17926",
    "name": "Cat",
    "creatorID": "5511a83da168f8b5f3144f02",
    "contextTags": [
    {
      "tagName": "Animals"
    }
  ],
    "active": false,
    "wordType": "Noun"
  },
  {
    "_id": "5511ae8ce28633ca8ad95f7f",
    "name": "House",
    "creatorID": "5511a83da168f8b5f3144f02",
    "contextTags": [
    {
      "tagName": "Dolch 1"
    }
  ],
    "active": false,
    "wordType": "Noun"
  },
  {
    "_id": "5511ae8c8b6533965921e512",
    "name": "Ball",
    "creatorID": "5511a83da168f8b5f3144f02",
    "contextTags": [
    {
      "tagName": "Gym Class"
    }
  ],
    "active": false,
    "wordType": "Noun"

  })
});

