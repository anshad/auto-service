define({ "api": [
  {
    "type": "post",
    "url": "/auth/login",
    "title": "Login user",
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
          "content": " HTTP/1.1 200 OK\n {\n   data: {\n     token: \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVlNDIzZjY1MTY0NDM2YjgzYzk4NjJmYSIsImlhdCI6MTU4MTQyMDQ4NywiZXhwIjoxNTgxNTA2ODg3fQ.VZBFY5EhALN1kEjOyJ4VZIw8Xw9cIn-Ec50O44q-khA\",\n     _id: \"5e423f65164436b83c9862fa\",\n     name: \"anshad vp\",\n     email: \"anshad.musafir@gmail.com\"\n  }\n}",
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
    "url": "/auth/register",
    "title": "Register a user",
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
    "url": "/sellers/",
    "title": "Get list of service providers",
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
    "url": "/sellers/register",
    "title": "Register a service provider",
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
  }
] });