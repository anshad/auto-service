define({ "api": [
  {
    "type": "post",
    "url": "auth/login",
    "title": "Login User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Mandatory email.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>Mandatory password 8 to 12 characters long.</p>"
          }
        ]
      }
    },
    "name": "Login_User",
    "group": "Auth",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>auth token</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>user id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>user name</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>user email</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": " HTTP/1.1 200 OK\n {\n   data: {\n     token: \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9\",\n     _id: \"5e423f65164436b83c9862fa\",\n     name: \"anshad vp\",\n     email: \"anshad.musafir@gmail.com\"\n  }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "invalid",
            "description": "<p>email/password is wrong.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 401 Unauthorized\n{\n  errors: [\n    {\n      message: 'email/password is wrong'\n    }\n  ]\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "controllers/auth.js",
    "groupTitle": "Auth"
  },
  {
    "type": "post",
    "url": "auth/register",
    "title": "Register User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Mandatory full name greater than 3 letters.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Mandatory email.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>Mandatory password 8 to 12 characters long.</p>"
          }
        ]
      }
    },
    "name": "Register_User",
    "group": "Auth",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "success",
            "description": "<p>message</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  success: [\n     {\n       message: 'User registered successfully'\n     }\n   ]\n }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "duplicate",
            "description": "<p>email already exists.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 409 Conflict\n{\n  errors: [\n    {\n      message: 'email already exists'\n    }\n  ]\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "controllers/auth.js",
    "groupTitle": "Auth"
  },
  {
    "type": "get",
    "url": "sellers",
    "title": "Get Sellers",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>User's token.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>Content type as application/json.</p>"
          }
        ]
      }
    },
    "group": "Sellers",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "data",
            "description": "<p>list of sellers</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"data\": [\n      {\n        \"_id\": \"5e424d7598565cbac97f0f44\",\n        \"name\": \"motor world\",\n        \"email\": \"motorworldblr@gmail.com\",\n        \"country\": \"India\",\n        \"province\": \"Karnataka\",\n        \"street\": \"Electronic City\",\n        \"phone_primary\": \"8050020094\",\n        \"opening_time\": \"9:00 AM\",\n        \"closing_time\": \"6:00 PM\",\n        \"createdAt\": \"2020-02-11T06:45:09.068Z\",\n        \"updatedAt\": \"2020-02-11T06:45:09.068Z\",\n        \"__v\": 0\n      },\n      {\n       \"_id\": \"5e424db098565cbac97f0f45\",\n        \"name\": \"motor world yamaha\",\n        \"email\": \"motorworldyamahablr@gmail.com\",\n        \"country\": \"India\",\n        \"province\": \"Karnataka\",\n        \"street\": \"Electronic City\",\n        \"phone_primary\": \"8050020094\",\n        \"opening_time\": \"9:00 AM\",\n        \"closing_time\": \"6:00 PM\",\n        \"createdAt\": \"2020-02-11T06:46:08.799Z\",\n        \"updatedAt\": \"2020-02-11T06:46:08.799Z\",\n        \"__v\": 0\n      }\n    ]\n  }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "controllers/sellers.js",
    "groupTitle": "Sellers",
    "name": "GetSellers"
  },
  {
    "type": "post",
    "url": "sellers/search",
    "title": "Search Sellers",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>User's token.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>Content type as application/json.</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "text",
            "description": "<p>Mandatory search text.</p>"
          }
        ]
      }
    },
    "group": "Sellers",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "data",
            "description": "<p>list of sellers</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "controllers/sellers.js",
    "groupTitle": "Sellers",
    "name": "PostSellersSearch"
  },
  {
    "type": "post",
    "url": "sellers/register",
    "title": "Register Seller",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Mandatory name greater than 3 letters.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Mandatory email.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>Mandatory password.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "confirmPassword",
            "description": "<p>Mandatory confirmPassword.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "country",
            "description": "<p>Mandatory country.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "province",
            "description": "<p>Mandatory province.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "city",
            "description": "<p>Mandatory city.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "street",
            "description": "<p>Mandatory street.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "building",
            "description": "<p>Optional building.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "phonePrimary",
            "description": "<p>Mandatory primary phone number.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "phoneAlternate",
            "description": "<p>Optional alternate phone number.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "openingTime",
            "description": "<p>Mandatory opening time.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "closingTime",
            "description": "<p>Mandatory closing time.</p>"
          }
        ]
      }
    },
    "name": "RegisterServiceProvider",
    "group": "Sellers",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "success",
            "description": "<p>message</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": " HTTP/1.1 200 OK\n {\n   success: [\n    {\n      message: 'Seller registered successfully'\n    }\n  ]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "duplicate",
            "description": "<p>email already exists.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 409 Conflict\n{\n  errors: [\n    {\n      message: 'email already exists'\n    }\n  ]\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "controllers/sellers.js",
    "groupTitle": "Sellers"
  },
  {
    "type": "post",
    "url": "slots/default-slots",
    "title": "Add Slots",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "time",
            "description": "<p>Mandatory slot time.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "sellerId",
            "description": "<p>Mandatory id for the seller.</p>"
          }
        ]
      }
    },
    "name": "Add_Default_Slots",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>User's token.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>Content type as application/json.</p>"
          }
        ]
      }
    },
    "group": "Slots",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "success",
            "description": "<p>message</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  success: [\n     {\n       message: 'Default slot added successfully'\n     }\n   ]\n }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "server",
            "description": "<p>There was a problem adding slot.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 500 Internal Server Error\n{\n  errors: [\n    {\n      message: 'There was a problem adding slot.'\n    }\n  ]\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "controllers/slots.js",
    "groupTitle": "Slots"
  },
  {
    "type": "get",
    "url": "slots/default-slots/:sellerId",
    "title": "Get Slots",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "sellerId",
            "description": "<p>Mandatory seller id.</p>"
          }
        ]
      }
    },
    "name": "Get_Seller's_Default_Slots",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>User's token.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>Content type as application/json.</p>"
          }
        ]
      }
    },
    "group": "Slots",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "data",
            "description": "<p>seller list</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  data: [\n     {\n      \"_id\":\"5e47ec9ff461887a08efa626\",\n      \"time\":\"6:00 pm\",\n      \"seller\":\"5e46c304b921534916a656ee\",\n      \"createdAt\":\"2020-02-15T13:05:35.699Z\",\n      \"updatedAt\":\"2020-02-15T13:05:35.699Z\",\n      \"__v\":0\n    },{\n      \"_id\":\"5e47ed47f461887a08efa627\",\n      \"time\":\"9:00 am\",\n      \"seller\":\"5e46c304b921534916a656ee\",\n      \"createdAt\":\"2020-02-15T13:08:23.634Z\",\n      \"updatedAt\":\"2020-02-15T13:08:23.634Z\",\n      \"__v\":0\n    }\n   ]\n }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "controllers/slots.js",
    "groupTitle": "Slots"
  },
  {
    "type": "post",
    "url": "slots/open-slots",
    "title": "Open Slots",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "slot",
            "description": "<p>Mandatory default slot id.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "date",
            "description": "<p>Mandatory date in 'mm-dd-yyyy' format.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "seller",
            "description": "<p>Mandatory seller id.</p>"
          }
        ]
      }
    },
    "name": "Open_Date_for_Slots",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>User's token.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>Content type as application/json.</p>"
          }
        ]
      }
    },
    "group": "Slots",
    "version": "0.0.0",
    "filename": "controllers/slots.js",
    "groupTitle": "Slots"
  }
] });
