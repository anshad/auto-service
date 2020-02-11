const localConfig = {
  hostname: process.env.HOST,
  port: process.env.PORT,
  secret: process.env.JWT_SECRET
};

module.exports = localConfig;
