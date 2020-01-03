const path = require("path");
const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");

// get the env vars
dotenv.config({ path: "./config/config.env" });

const app = express();

// body parser
app.use(express.json());

// enable cors
app.use(cors());

// routes
app.use("/api/v1/places", require("./routes/places"));

const PORT = process.env.PORT || 1000;

app.listen(PORT, () => console.log(`Your server is in ${process.env.NODE_ENV} on port ${PORT}`));