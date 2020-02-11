const _ = require('lodash');

const env = process.env.NODE_ENV || 'local';
const envConfig = require(`./${env}`);
const defaultConfig = {
  env
};
module.exports = _.merge(defaultConfig, envConfig);
