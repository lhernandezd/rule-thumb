const express = require('express');
const requestId = require('express-request-id')();
const bodyParser = require('body-parser');
const logger = require('./config/logger');
const app = express();

const api = require('./api/v1');

// Middleware
/* Parse application/x-www-form-urlencoded */
app.use(bodyParser.urlencoded({ extended: false }));
/* Parse application/json */
app.use(bodyParser.json());

// Middleware for logs
app.use(requestId);
app.use(logger.requests);

app.use('/api/v1', api);
app.use('/api', api);

// Not route found middleware
app.use((req, res, next) => {
  const statusCode = 404;
  const message = 'Route not found';

  next({
    message,
    statusCode,
  });
});

// Error middleware
app.use((err, req, res, next) => {
  const { message, statusCode = 500 } = err;

  res.status(statusCode);
  res.json({
    message,
  });
});

module.exports = app;
