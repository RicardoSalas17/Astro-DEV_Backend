require("dotenv").config();
const cors = require('cors');
const express = require("express");
const app = express();
const whiteList ="http://localhost:3001"
app.use(
  cors({
    credentials: true,
    origin: whiteList,
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(require("./routers/ApodRouter"));
app.use(require("./routers/RoverRouter"))

app.listen(process.env.PORT, () =>
  console.log(`It's alive on ${process.env.PORT}!`)
);

module.exports = app;
