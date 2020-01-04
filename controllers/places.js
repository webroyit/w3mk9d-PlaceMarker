const Place = require("../models/Places");

// GET /api/v1/places
// Public
exports.getPlaces = (req, res, next) => {
    res.send("It works");
}