const handler = (err, req, res, next) => {
  // Make sure that a response is sent, If not, we will send one now.
  if (res.headersSent) {
    return next(err);
  }
  let statusCode = err.status || 500;
  res.status(statusCode);
  res.json({
    description: err.message || err,
    stack: err.stack,
  });
};

module.exports = handler;
