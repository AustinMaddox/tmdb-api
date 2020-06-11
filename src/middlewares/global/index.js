var cors = require("cors");
var express = require("express");

const notFoundHandler = require("src/middlewares/global/not-found-middleware");
const errorHandler = require("src/middlewares/global/error-middleware");
const corsHandler = require("src/middlewares/global/cors-middleware");
const requestLogHandler = require("src/middlewares/global/request-log-middleware");

/**
 * The application's global HTTP middleware stack.
 *
 * These middleware are run during every request to our application.
 */

const beforeRouters = (app) => {
  app.use(express.json());
  app.use(corsHandler);
  app.use(cors());
  app.use(requestLogHandler);
};

const afterRouters = (app) => {
  app.use(notFoundHandler);
  app.use(errorHandler);
};

module.exports = {
  beforeRouters,
  afterRouters,
};
