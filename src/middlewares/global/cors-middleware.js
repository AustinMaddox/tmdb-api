function handler(req, res, next) {
  res.header(
    "Access-Control-Allow-Headers",
    "Accept, Authorization, Content-Type, Origin, X-Requested-With"
  );
  res.header("Access-Control-Allow-Origin", "*");
  next();
}

module.exports = handler;
