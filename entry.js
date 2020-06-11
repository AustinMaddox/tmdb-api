var express = require("express");
var debug = require("debug")("app");

const registerGlobalMiddleware = require("src/middlewares/global");
const router = require("src/routers");
const PORT = process.env.EXPRESS_SERVER_PORT;

(async function () {
  try {
    const app = express();
    registerGlobalMiddleware.beforeRouters(app);
    app.use("/api", router);
    registerGlobalMiddleware.afterRouters(app);
    app.listen(PORT, () => debug(`App listening at http://localhost:${PORT}`));
  } catch (err) {
    debug(
      "Entry#init(): Initialization failed in the entry script.",
      err.stack
    );
  }
})();
