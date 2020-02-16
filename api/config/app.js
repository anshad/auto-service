const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const routes = require('../routes');

module.exports = () => {
  const server = express();

  const create = (config, db) => {
    server.set('env', config.env);
    server.set('port', config.port);
    server.set('hostname', config.hostname);

    server.use(cors());
    // middleware to parse the json
    server.use(bodyParser.json());
    server.use(
      bodyParser.urlencoded({
        extended: false
      })
    );

    // connect the database
    mongoose.connect(db.database, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useUnifiedTopology: true
    });

    // Set up routes
    routes.init(server);
  };

  const start = () => {
    const hostname = server.get('hostname');
    const port = server.get('port');
    server.listen(port, () => {
      // eslint-disable-next-line no-console
      console.log(`Express server listening on - http://${hostname}:${port}`);
    });
  };
  return {
    create,
    start
  };
};
