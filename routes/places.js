const express = require("express");
const { getPlaces } = require("../controllers/places");

const router = express.Router();

router.route("/").get(getPlaces);

module.exports = router;