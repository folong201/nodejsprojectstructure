const express = require('express')

const app = express()
const bodyParser = require("body-parser")
const cors = require("cors")

const corsOptions = {
    origin: "*",
};

const corsMiddleware = cors(corsOptions);

app.use(corsMiddleware)
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.json())
app.use(bodyParser.urlencoded({ extended: false }));
app.use("/assets", express.static("public"));
app.use(bodyParser.json());

module.exports = app