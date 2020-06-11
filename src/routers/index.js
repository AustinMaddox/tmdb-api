var express = require("express");

const router = express.Router();
const PopularController = require("src/controllers/popular-controller");
const SearchController = require("src/controllers/search-controller");
const DetailController = require("src/controllers/detail-controller");

// Specific endpoint for checking the health of the application.
router.get("/health-check", (req, res) => {
  res.sendStatus(204);
});

router.get("/popular", PopularController.list);
router.get("/search", SearchController.list);
router.get("/detail/:id", DetailController.read);

module.exports = router;
