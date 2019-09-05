const mongoose = require('mongoose');
const logger = require('./config/logger');

exports.connect = ({ username, password, protocol, url }, options = {}) => {
  let databaseURL = '';

  // Generate the database url
  if (username && password) {
    databaseURL = `${protocol}://${username}:${encodeURIComponent(password)}@${url}`;
  } else {
    databaseURL = `${protocol}://${url}`;
  }

  // Connect to the database
  mongoose.connect(databaseURL, { ...options, useCreateIndex: true, useNewUrlParser: true });

  mongoose.connection.on('error', err => {
    logger.error(`Database error: ${err}`);
  });

  mongoose.connection.on('open', () => {
    logger.info('Database on');
  });

  mongoose.connection.on('close', () => {
    logger.info('Database off');
  });

  process.on('SIGINT', () => {
    mongoose.connection.close(() => {
      logger.info('Database off when close');
      process.exit(0);
    });
  });
};

exports.disconnect = () => {
  mongoose.connection.close(() => {
    logger.info('Database off');
  });
};
