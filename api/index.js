require('dotenv').config();
const server = require('./config/app')();
const config = require('./config/env');
const db = require('./config/db');

// create the server setup
server.create(config, db);

// start the server
server.start();
