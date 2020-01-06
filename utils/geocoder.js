const NodeGeoder = require("node-geocoder");

const geocoderAPI = require('../config/keys').geocoderAPI;

const options = {
    provider: process.env.GEOCODER_PROVIDER,
    httpAdapter: "https",
    apiKey: geocoderAPI,
    formatter: null
}

const geocoder = NodeGeoder(options);

module.exports = geocoder;