const express = require("express");
const morgan = require("morgan");
const cors = require("cors")
// middleware
const app = express();
app.use(express.json())
app.use(cors());




module.exports = app;