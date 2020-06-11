const debug = require("debug")("app:request-log");

const handler = (req, res, next) => {
  if (req.path === "/health-check") return next();
  debug(req.method, req.originalUrl);
  next();
};

module.exports = handler;
